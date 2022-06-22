<?php

namespace App\Http\Controllers;

use App\Models\modAgentesMarca;
use App\Models\modMarca;
use App\Models\Personas;
use App\Models\Transacciones;
use Illuminate\Support\Facades\Auth;
use Illuminate\Http\Request;
use Inertia\Inertia;

class conAgentesMarca extends Controller
{
  public function deleteTrue(Request $request)
  {
    $agente = modAgentesMarca::withTrashed()->find($request->id);
    /* Validar que no haya tenido ninguna transaccion */
    $transacciones = Transacciones::where('id_agente', $agente->id)->count();
    if ($transacciones > 0) {
      return back()->withErrors(['No se puede eliminar el agente porque tiene transacciones']);
    }
    $agente->forceDelete();
    return back()->with('success', 'Agente eliminado correctamente');
  }
  public function index()
  {
    return Inertia::render('Proveedores/Proveedores.vue', [
      'usuario' => Auth::user(),
      'personas' => fn () => Personas::all(),
      'proveedores' => fn () => modAgentesMarca::withTrashed()->with('personas', 'marcas')->get(),
      'marcas' => fn () => modMarca::all()
    ]);
  }
  public function create(Request $request)
  {
    $request->validate([
      'id_marca' => 'required|numeric',
      'id_persona' => 'required|numeric',
    ]);
    //Validando si la persona ya es proveedor de una marca especifica
    $esProveedor = modAgentesMarca::withTrashed()
      ->where('id_marca', $request->id_marca)
      ->where('id_persona', $request->id_persona)->count();
    if ($esProveedor > 0) {
      return back()->withErrors('Esta persona ya provee esta marca');
    }
    modAgentesMarca::create([
      'id_marca' => $request->id_marca,
      'id_persona' => $request->id_persona,
    ]);
    return back()->with('success', ['message' => 'Proveedor creado correctamente']);
  }
  public function update()
  {
  }
  public function delete(Request $request)
  {
    $request->validate([
      'id' => 'required|numeric',
    ]);
    $usuario = modAgentesMarca::withTrashed()->find($request->id);
    if ($usuario->trashed()) {
      $usuario->restore();
      return back()->with('success', 'Proveedor restaurado');
    }
    $usuario->delete();
    return back()->with('success', ['message' => 'Estado cambiado']);
  }
}