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
    Schema::create('agentes_marca', function (Blueprint $table) {
      $table->id();
      $table->foreignId('id_persona')->constrained('personas');
      $table->foreignId('id_marca')->constrained('marcas');
      $table->softDeletes(); //Estado del proveedor, si lo damos de baja ahí muere
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
    Schema::dropIfExists('agentes_proveedores');
  }
};