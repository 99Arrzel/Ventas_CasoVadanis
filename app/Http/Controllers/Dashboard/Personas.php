<?php

namespace App\Http\Controllers\Dashboard;


use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use App\Models\Personas as ModelsPersonas;
use App\Models\Usuarios;
use App\Models\Ventas;
use Carbon\Carbon;


class Personas extends Controller
{


  public function create(Request $request)
  {
    $request->validate([
      'nombre' => 'required|string|max:255|min:3',
      'apellido_p' => 'required|string|max:255|min:3',
      'apellido_m' => 'nullable|string|max:255|min:3',
      'fecha_nacimiento' => 'nullable|date|before:-18 years',
      'correo' => 'nullable|string|email|max:255|unique:personas,correo',
      'telefono' => 'nullable|string|max:255|unique:personas,telefono',
      'direccion' => 'nullable|string|max:255',
      'ci' => 'required|string|max:255|min:6|unique:personas,ci',
    ]);
    ModelsPersonas::create([
      'nombre' => ucfirst($request->nombre),
      'apellido_p' => ucfirst($request->apellido_p),
      'apellido_m' => ucfirst($request->apellido_m),
      'correo' => $request->correo,
      'ci' => $request->ci,
      'telefono' => $request->telefono,
      'direccion' => $request->direccion,
      'fecha_nacimiento' => Carbon::parse($request->fecha_nacimiento),
      'genero' => $request->genero,
    ]);
    return back()->with('success', 'Persona creada correctamente');
  }
  public function update(Request $request)
  {
    $request->validate([
      'id' => 'required|integer|exists:personas,id',
      'nombre' => 'required|string|max:255|min:3',
      'apellido_p' => 'required|string|max:255|min:3',
      'apellido_m' => 'nullable|string|max:255|min:3',
      'ci' => 'required|string|max:255|min:6|unique:personas,ci,' . $request->id,
      'fecha_nacimiento' => 'required|date|before:-18 years',
      'correo' => 'nullable|email|unique:personas,correo,' . $request->id,
      'telefono' => 'nullable|string|max:255|unique:personas,telefono,' . $request->id,
      'direccion' => 'nullable|string|max:255',
      'genero' => 'nullable|string|max:255',
    ]);


    /* Validar que no esté en ventas ni que sea un usuario */
    $ventas = Ventas::where('id_cliente', $request->id)->limit(1)->get();
    if (count($ventas) > 0) {
      return back()->withErrors(['No se puede modificar la persona porque está en una venta']);
    }
    $usuarios = Usuarios::where('id_persona', $request->id)->limit(1)->get();
    if (count($usuarios) > 0) {
      return back()->withErrors(['No se puede modificar la persona porque es un usuario']);
    }

    ModelsPersonas::where('id', $request->id)->update([
      'ci' => $request->ci,
      'nombre' => ucfirst($request->nombre),
      'apellido_p' => ucfirst($request->apellido_p),
      'apellido_m' => ucfirst($request->apellido_m),
      'telefono' => $request->telefono,
      'correo' => $request->correo,
      'direccion' => $request->direccion,
      'fecha_nacimiento' => Carbon::parse($request->fecha_nacimiento),
      'genero' => $request->genero,

    ]);
    return back()->with('success', 'Persona modificada correctamente');
  }
  public function delete(Request $request)
  {
    $request->validate([
      'id' => 'required|integer|exists:personas,id',
    ]);
    /* Validar que no esté en ventas ni que sea un usuario */
    $ventas = Ventas::where('id_cliente', $request->id)->limit(1)->get();
    if (count($ventas) > 0) {
      return back()->withErrors(['No se puede eliminar la persona porque está en una venta']);
    }
    $usuarios = Usuarios::where('id_persona', $request->id)->limit(1)->get();
    if (count($usuarios) > 0) {
      return back()->withErrors(['No se puede eliminar la persona porque es un usuario']);
    }
    ModelsPersonas::where('id', $request->id)->delete();
    return back()->with('success', 'Persona eliminada correctamente');
  }
}