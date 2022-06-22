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
    Schema::create('transacciones_imagenes', function (Blueprint $table) {
      $table->foreignId('id_transaccion')->constrained('transacciones');
      $table->foreignId('id_imagen')->constrained('imagenes');
      $table->unique(['id_transaccion', 'id_imagen']);
    });
  }

  /**
   * Reverse the migrations.
   *
   * @return void
   */
  public function down()
  {
    Schema::dropIfExists('transacciones_imagenes');
  }
};