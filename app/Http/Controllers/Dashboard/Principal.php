<?php

namespace App\Http\Controllers\Dashboard;

use App\Http\Controllers\Controller;

use Illuminate\Support\Facades\Auth;
use Inertia\Inertia;

class Principal extends Controller
{
  public function index()
  {
    return Inertia::render('Dashboard', [
      'usuario' => Auth::user(),
    ]);
  }
}