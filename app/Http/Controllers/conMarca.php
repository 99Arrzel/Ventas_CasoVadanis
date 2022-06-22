<?php

namespace App\Http\Controllers;

use App\Models\modAgentesMarca;
use App\Models\modMarca;
use App\Models\Productos;
use Illuminate\Http\Request;

class conMarca extends Controller
{

  public function create(Request $request)
  {
    $request->validate([
      'nombre' => 'required|string|max:255|min:3',
    ]);
    modMarca::create([
      'nombre' => $request->nombre,

    ]);
    return back()->with('success', 'Marca creada correctamente');
  }
  public function update(Request $request)
  {
    $request->validate([
      'id' => 'required|integer|exists:marcas,id',
      'nombre' => 'required|string|max:255|min:3',
    ]);
    $marca = modMarca::find($request->id);
    $marca->nombre = $request->nombre;
    $marca->save();
    return back()->with('success', 'Marca actualizada correctamente');
  }
  public function delete(Request $request)
  {

    $request->validate([
      'id' => 'required|integer|exists:marcas,id',
    ]);
    /* Validamos que la marca no se haya usado en algún producto */
    /* Primero agentes_marca */
    $cuenta = modAgentesMarca::where('id_marca', $request->id)->count();
    if ($cuenta > 0) {
      return back()->withErrors('La marca no se puede eliminar porque se está usando en algún agente');
    }
    /* Segundo productos */
    $cuenta = Productos::where('id_marca', $request->id)->count();
    if ($cuenta > 0) {
      return back()->withErrors('La marca no se puede eliminar porque se está usando en algún producto');
    }
    /* Si no se ha usado en ningún producto, se elimina */
    $marca = modMarca::find($request->id);
    $marca->delete();
    return back()->with('success', 'Marca eliminada correctamente');
  }
}