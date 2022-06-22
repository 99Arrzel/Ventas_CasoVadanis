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
    Schema::create('ventas_productos', function (Blueprint $table) {
      $table->foreignId('id_venta')->constrained('ventas');
      $table->foreignId('id_producto')->constrained('productos');
      $table->integer('cantidad');
      $table->unique(['id_venta', 'id_producto']);
    });
  }

  /**
   * Reverse the migrations.
   *
   * @return void
   */
  public function down()
  {
    Schema::dropIfExists('ventas_productos');
  }
};