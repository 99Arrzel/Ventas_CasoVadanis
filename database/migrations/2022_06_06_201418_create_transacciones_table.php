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
    Schema::create('transacciones', function (Blueprint $table) {
      $table->id();
      $table->dateTime('fecha');
      $table->text('descripcion');
      $table->foreignId('id_usuario')->constrained('usuarios');
      $table->foreignId('id_agente')->constrained('agentes_marca');
      $table->softDeletes(); //Esto para anular nomás
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
    Schema::dropIfExists('transacciones');
  }
};