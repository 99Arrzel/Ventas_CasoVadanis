<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
  /**
   * Run the migrations.
   *
   * @return void
   */
  public function up()
  {
    Schema::create('usuarios', function (Blueprint $table) {
      $table->id();
      $table->string('usuario');
      $table->string('password');
      $table->tinyInteger('nivel');
      $table->foreignId('id_persona')->constrained('personas');
      $table->foreignId('imagen_perfil')->nullable()->constrained('imagenes');
      $table->softDeletes();
      $table->rememberToken();
    });
    DB::table('usuarios')->insert([
      'usuario' => 'admin',
      'password' => Hash::make('admin'),
      'nivel' => 1,
      'id_persona' => 1,
      'imagen_perfil' => null,
    ]);
  }

  /**
   * Reverse the migrations.
   *
   * @return void
   */
  public function down()
  {
    Schema::dropIfExists('usuarios');
  }
};