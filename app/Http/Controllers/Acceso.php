<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Redirect;
use Inertia\Inertia;

class Acceso extends Controller
{
  public function vistaLogin()
  {
    if (Auth::check()) {
      return Redirect::route('dashboard');
    }
    return Inertia::render('Login');
  }
  public function loginIntento(Request $request)
  {
    $request->validate([
      'usuario' => 'required|min:3',
      'password' => 'required',
    ]);
    if (!Auth::attempt(['usuario' => $request->usuario, 'password' => $request->password])) {
      return back()->withErrors(['error' => 'Usuario o contraseña incorrectos']);
    }

    return Redirect::route('dashboard');
  }
  public function logout()
  {
    Auth::logout();
    return redirect('/');
  }
}