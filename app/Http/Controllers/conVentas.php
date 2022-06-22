<?php

namespace App\Http\Controllers;

use App\Models\Personas;
use App\Models\Productos;
use App\Models\Ventas;
use Auth;
use Illuminate\Http\Request;
use Inertia\Inertia;

class conVentas extends Controller
{
  public function index()
  {
    return Inertia::render('Ventas/Ventas.vue', [
      'usuario' => Auth::user()->load('persona'),
      'ventas' => fn () => Ventas::with('cliente', 'detalle')->get(),
      'personas' => fn () => Personas::all(),
      'productos' => fn () => Productos::with('marca', 'categoria')->get()
    ]);
  }
}