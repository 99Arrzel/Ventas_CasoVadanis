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
    Schema::create('productos_imagenes', function (Blueprint $table) {
      $table->foreignId('id_imagen')->constrained('imagenes');
      $table->foreignId('id_producto')->constrained('productos');
      $table->unique(['id_imagen', 'id_producto']);
    });
  }

  /**
   * Reverse the migrations.
   *
   * @return void
   */
  public function down()
  {
    Schema::dropIfExists('productos_imagenes');
  }
};