<?php

use App\Http\Controllers\Acceso;
use App\Http\Controllers\conAgentesMarca;
use App\Http\Controllers\conCategorias;
use App\Http\Controllers\conMarca;
use App\Http\Controllers\conProductos;
use App\Http\Controllers\conVentas;
use App\Http\Controllers\Dashboard\Personas;
use App\Http\Controllers\Dashboard\Principal;
use App\Http\Controllers\Dashboard\Usuarios as DashUsuarios;
use App\Models\Productos;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

Route::get('/reporteTrucho', [Personas::class, 'reporte']);

Route::get('/', [Acceso::class, 'vistaLogin'])->name('login');
Route::post('/login', [Acceso::class, 'loginIntento'])->name('loginIntento');
Route::middleware(['isLoggedIn'])->group(function () {
  Route::get('/logout', [Acceso::class, 'logout'])->name('logout');
  Route::prefix('dashboard')->group(function () {
    /* Rutas */
    Route::get('/inicio', [Principal::class, 'index'])->name('dashboard');
    Route::get('/productos', [conProductos::class, 'view'])->name('productos');
    Route::get('/usuarios', [DashUsuarios::class, 'index'])->name('usuarios');
    Route::get('/proveedores', [conAgentesMarca::class, 'index'])->name('proveedores');
    Route::get('/categorias', [conCategorias::class, 'index'])->name('categorias');
    Route::get('/ventas', [conVentas::class, 'index'])->name('ventas');
    /* Operaciones CRUD */
    /* Personas */
    Route::controller(Personas::class)->group(function () {
      Route::post('/personas_create', 'create')->name('personas_create');
      Route::post('/personas_update', 'update')->name('personas_update');
      Route::post('/personas_delete', 'delete')->name('personas_delete');
    });
    /* Usuarios */
    Route::controller(DashUsuarios::class)->group(function () {
      Route::post('/usuarios_create', 'create')->name('usuarios_create');
      Route::post('/usuarios_pass', 'cambiar_pass')->name('cambiar_pass');
      Route::post('/usuarios_update', 'update')->name('usuarios_update');
      Route::post('/usuarios_delete', 'delete')->name('usuarios_delete');
    });
    //Agentes/Proveedores 🤨
    Route::controller(conAgentesMarca::class)->group(function () {
      Route::post('/api/proveedores_create', 'create')->name('proveedores_create');
      Route::post('/api/proveedores_update', 'update')->name('proveedores_update');
      Route::post('/api/proveedores_delete', 'delete')->name('proveedores_delete');
      Route::post('/api/proveedores_delete_true', 'deleteTrue')->name('proveedores_truedelete');
    });
    //Productos
    Route::controller(conProductos::class)->group(function () {
      Route::post('/api/productos_create', 'create')->name('productos_create');
      Route::post('/api/productos_update', 'update')->name('productos_update');
      Route::post('/api/productos_delete', 'delete')->name('productos_delete');
    });
    //Marcas
    Route::controller(conMarca::class)->group(function () {
      Route::post('/api/marca_create', 'create')->name('marca_create');
      Route::post('/api/marca_update', 'update')->name('marca_update');
      Route::post('/api/marca_delete', 'delete')->name('marca_delete');
    });
    //Categorias
    Route::controller(conCategorias::class)->group(function () {
      Route::post('/api/categoria_create', 'create')->name('categoria_create');
      Route::post('/api/categoria_update', 'update')->name('categoria_update');
      Route::post('/api/categoria_delete', 'delete')->name('categoria_delete');
    });
  });
});