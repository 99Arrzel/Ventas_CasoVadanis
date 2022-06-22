<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\DB;
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
    Schema::create('personas', function (Blueprint $table) {
      $table->id();
      $table->string('ci');
      $table->string('nombre');
      $table->string('apellido_p');
      $table->string('apellido_m')->nullable();
      $table->string('telefono')->nullable();
      $table->string('correo')->nullable();
      $table->text('direccion')->nullable();
      $table->dateTime('fecha_nacimiento')->nullable();
      $table->string('genero', 20)->nullable();
      //$table->softDeletes();
      $table->timestamps();
    });
    DB::table('personas')->insert([
      'ci' => '9089124',
      'nombre' => 'Andrés',
      'apellido_p' => 'Carrillo',
      'apellido_m' => 'Zelada',
      'telefono' => '63613646',
      'correo' => 'af.carrillo@gmail.com',
      'direccion' => 'Calle falsa 123',
      'fecha_nacimiento' => '1999-06-06',
      'genero' => 'Masculino',
    ]);
  }

  /**
   * Reverse the migrations.
   *
   * @return void
   */
  public function down()
  {
    Schema::dropIfExists('personas');
  }
};