<?php

namespace App\Http\Controllers\Dashboard;

use App\Http\Controllers\Controller;


use App\Models\Personas;

use App\Models\Usuarios as ModelsUsuarios;
use Hash;
use Illuminate\Support\Facades\Auth;
use Inertia\Inertia;
use Illuminate\Http\Request;
use Validator;

class Usuarios extends Controller
{
  public function cambiar_pass(Request $request)
  {
    $request->validate([
      'id' => 'required|integer|exists:usuarios,id',
      'password' => 'required|string|min:4',
    ]);
    $usuario = ModelsUsuarios::find($request->id);
    $usuario->password = Hash::make($request->password);
    $usuario->save();
    return back()->with('success', 'Contraseña cambiada correctamente');
  }
  public function index()
  {
    return Inertia::render('Usuarios/Usuarios.vue', [
      'usuario' => fn () => Auth::user(),
      'usuarios' => fn () => ModelsUsuarios::withTrashed()->with('imagen_perfil', 'persona')->get(),
      'personas' => fn () => Personas::all(),
    ]);
  }
  public function create(Request $request)
  {
    $request->validate([
      'usuario' => 'required|string|max:255|min:3|unique:usuarios,usuario',
      'password' => 'required|string|max:255|min:3',
      'id_persona' => 'required|integer|exists:personas,id|unique:usuarios,id_persona',
      'nivel' => 'required|integer|max:2|min:1',
    ]);
    ModelsUsuarios::create([
      'usuario' => strtolower($request->usuario),
      'password' => Hash::make($request->password),
      'id_persona' => $request->id_persona,
      'nivel' => $request->nivel,
    ]);
    return back()->with('success', 'Usuario creado correctamente');
  }
  public function update(Request $request)
  {
    /* Parece codeigniter acá  */
    Validator::make($request->all(), [
      'usuario' => 'required|string|max:255|min:3|unique:usuarios,usuario,' . $request->id,
      'password' => 'nullable|string|max:255|min:3',
      'id_persona' => 'required|integer|exists:personas,id|unique:usuarios,id_persona,' . $request->id,
      'nivel' => 'required|integer|max:2|min:1',
    ], [
      'usuario.required' => 'El usuario es requerido',
      'usuario.max' => 'El usuario debe tener como máximo 255 caracteres',
      'usuario.min' => 'El usuario debe tener como mínimo 3 caracteres',
      'usuario.unique' => 'El usuario ya existe',
      'password.max' => 'El password debe tener como máximo 255 caracteres',
      'password.min' => 'El password debe tener como mínimo 3 caracteres',
      'id_persona.required' => 'La persona es requerida',
      'id_persona.exists' => 'La persona no existe',
      'id_persona.unique' => 'La persona ya existe',
      'nivel.required' => 'El nivel es requerido',
      'nivel.max' => 'El nivel debe tener como máximo 2 caracteres',
      'nivel.min' => 'El nivel debe tener como mínimo 1 caracter',
    ])->validate();

    $usuario = ModelsUsuarios::find($request->id);
    $usuario->usuario = strtolower($request->usuario);
    if ($request->password) {
      $usuario->password = Hash::make($request->password);
    }
    $usuario->id_persona = $request->id_persona;
    $usuario->nivel = $request->nivel;
    $usuario->save();
    return back()->with('success', 'Usuario actualizado correctamente');
  }
  public function delete(Request $request)
  {
    $request->validate([
      'id' => 'required|integer|exists:usuarios,id',
    ]);



    $usuario = ModelsUsuarios::withTrashed()->find($request->id);
    if ($usuario->id == 1) {
      return back()->withErrors('No puedes eliminar al admin 🤑🤑');
    }
    if ($usuario->trashed()) {
      $usuario->restore();
      return back()->with('success', 'Usuario restaurado correctamente');
    }
    $usuario->delete();
    return back()->with('success', 'Usuario eliminado correctamente');
  }
  public function subirFoto(Request $request)
  {
    $request->validate([
      'id' => 'required|integer|exists:usuarios,id',
      'imagen' => 'required|image|mimes:jpeg,png,jpg,gif,svg|max:2048',
    ]);
    $usuario = ModelsUsuarios::withTrashed()->find($request->id);
    $imagen = $request->file('imagen');
    $nombre = 'usuario_' . $usuario->id . '.' . $imagen->extension();
    $imagen->storeAs('public/usuarios', $nombre);
    $usuario->imagen_perfil()->create([
      'nombre' => $nombre,
      'url' => '/usuarios/' . $nombre,
    ]);
    return back()->with('success', 'Imagen subida correctamente');
  }
}