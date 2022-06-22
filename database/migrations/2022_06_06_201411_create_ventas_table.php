<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
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
    Schema::create('ventas', function (Blueprint $table) {
      $table->id();
      $table->dateTime('fecha');
      $table->string('codigo_control');
      $table->string('ley_grabada');
      $table->string('codigo_autorizacion');
      $table->foreignId('id_usuario')->constrained('usuarios');
      $table->foreignId('id_cliente')->constrained('personas');
      $table->softDeletes();
      $table->timestamps();
    });
  }

  /**
   * Reverse the migrations.
   *
   * @return void
   */
  public function down()
  {
    Schema::dropIfExists('ventas');
  }
};