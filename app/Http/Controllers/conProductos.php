<?php

namespace App\Http\Controllers;

use App\Models\Categorias;
use App\Models\Detalles;
use App\Models\modMarca;
use App\Models\Productos;
use Auth;
use Carbon\Carbon;
use Illuminate\Http\Request;
use Inertia\Inertia;

class conProductos extends Controller
{
  public function view()
  {
    return Inertia::render('Productos/Productos.vue', [
      'usuario' => fn () => Auth::user()->load('persona'),
      /* Esto va a explotar algún día, mejor ponerle un limit */
      'productos' => fn () => Productos::withTrashed()->with('categoria', 'usuario', 'detalle.transaccion', 'marca')->orderBy('deleted_at')->get(),
      /* Estos deberían ser lazy */
      'marcas' => fn () => modMarca::all(),
      'detalles' => fn () => Detalles::with(['transaccion' => fn ($query) => $query->withTrashed()])->get(),
      'categorias' => fn () => Categorias::all(),
    ]);
  }
  public function create(Request $request)
  {
    $request->validate([
      'id_categoria' => 'required|integer|exists:categorias,id',
      'id_marca' => 'required|integer|exists:marcas,id',
      'id_detalle' => 'required|integer|exists:detalles,id',
      //'id_grupo_producto' => 'required|integer',
      'nombre' => 'required|string',
      'fecha_expiracion' => 'required|date|after:today',
      'precio' => 'required|numeric|min:0',
      'descuento' => 'required|numeric|min:0|max:100',
      'cantidad' => 'required|integer|min:1',
      'descripcion' => 'required|string|min:5',

    ]);
    Productos::create([
      'id_categoria' => $request->id_categoria,
      'id_marca' => $request->id_marca,
      'id_detalle' => $request->id_detalle,
      'id_grupo_producto' => Productos::max('id_grupo_producto') + 1 ?? 1,
      'nombre' => $request->nombre,
      'fecha_expiracion' => Carbon::parse($request->fecha_expiracion),
      'precio' => $request->precio,
      'descuento' => $request->descuento,
      'cantidad' => $request->cantidad,
      'descripcion' => $request->descripcion,
      'importe_base' => $request->precio,
      'id_usuario' => Auth::user()->id,
    ]);
  }
  public function update(Request $request)
  {
    $request->validate([
      'id' => 'required|integer|exists:productos,id',
      'id_categoria' => 'required|integer|exists:categorias,id',
      'id_marca' => 'required|integer|exists:marcas,id',
      'id_detalle' => 'required|integer|exists:detalles,id',
      'nombre' => 'required|string',
      'fecha_expiracion' => 'required|date|after:today',
      'precio' => 'required|numeric|min:0',
      'descuento' => 'required|numeric|min:0|max:100',
      'cantidad' => 'required|integer|min:1',
      'descripcion' => 'required|string|min:5',

    ]);
    $producto = Productos::withTrashed()->find($request->id);
    if ($producto->trashed()) {
      //Cambiamos al primero para eliminar ese y no este que ya está trash
      $producto = Productos::where('deleted_at', null)->where('id_grupo_producto', $producto->id_grupo_producto)->first();
    }

    Productos::create([
      'id_categoria' => $request->id_categoria,
      'id_marca' => $request->id_marca,
      'id_detalle' => $request->id_detalle,
      'id_grupo_producto' => $producto->id_grupo_producto,
      'nombre' => $request->nombre,
      'fecha_expiracion' => Carbon::parse($request->fecha_expiracion),
      'precio' => $request->precio,
      'descuento' => $request->descuento,
      'cantidad' => $request->cantidad,
      'descripcion' => $request->descripcion,
      /* Atención, el importe base debe establecerse, ahorita no lo puse */
      'importe_base' => $request->precio,
      'id_usuario' => Auth::user()->id,
    ]);
    $producto->delete();


    return back()->with('success', 'Producto actualizado correctamente');
  }
  public function delete(Request $request)
  {
    $request->validate([
      'id' => 'required|integer|exists:productos,id',
    ]);
    $producto = Productos::find($request->id);
    $producto->delete();
    return back()->with('success', 'Producto eliminado correctamente');
  }
}