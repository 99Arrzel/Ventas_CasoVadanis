<?php

namespace App\Http\Controllers;

use App\Models\Categorias;
use App\Models\modMarca;
use App\Models\Productos;
use Auth;
use DB;
use Illuminate\Http\Request;
use Inertia\Inertia;

class conCategorias extends Controller
{
  public function index()
  {
    return Inertia::render('Categorias/Categorias.vue', [
      'usuario' => Auth::user()->load('persona'),
      'categorias' => fn () => Categorias::with('marcas')->get(),
      'marcas' => fn () => modMarca::all()
    ]);
  }
  public function create(Request $request)
  {
    $request->validate([
      'nombre' => 'required|string|max:255|min:3|unique:categorias,nombre',
      'id_categoria_padre' => 'nullable'
    ]);
    Categorias::create([
      'nombre' => $request->nombre,
      'id_categoria_padre' => $request->id_categoria_padre,
    ]);
    return back()->with('success', 'Categoría creada correctamente');
  }
  public function update(Request $request)
  {
    $request->validate([
      'id' => 'required|integer|exists:categorias,id',
      'nombre' => 'required|string|max:255|min:3|unique:categorias,nombre,' . $request->id,

    ]);
    $categoria = Categorias::find($request->id);
    $categoria->nombre = $request->nombre;
    $categoria->save();
    return back()->with('success', 'Categoría actualizada correctamente');
  }
  public function delete(Request $request)
  {
    $request->validate([
      'id' => 'required|integer|exists:categorias,id',
    ]);
    /* Verificar que sea de último nivel */
    $categoria = Categorias::find($request->id);

    $hijos = Categorias::where('id_categoria_padre', $categoria->id)->count();
    if ($hijos > 0) {
      return back()->withErrors('La categoría no se puede eliminar porque tiene subcategorías');
    }



    /* Validamos que la categoría no se haya usado en algún producto */
    $cuenta = Productos::where('id_categoria', $request->id)->first();
    if ($cuenta > 0) {
      return back()->withErrors('La categoría no se puede eliminar porque se está usando en algún producto');
    }
    $cuenta =  DB::table('marcas_categorias')->where('id_categoria', $request->id)->count();
    if ($cuenta > 0) {
      return back()->withErrors('La categoría no se puede eliminar porque se está usando en alguna marca');
    }


    $categoria->delete();
  }
}