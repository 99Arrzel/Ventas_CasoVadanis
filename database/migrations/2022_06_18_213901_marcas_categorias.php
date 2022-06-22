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
    Schema::create('marcas_categorias', function (Blueprint $table) {
      $table->foreignId('id_marca')->constrained('marcas');
      $table->foreignId('id_categoria')->constrained('categorias');
      $table->unique(['id_marca', 'id_categoria']);
    });
  }

  /**
   * Reverse the migrations.
   *
   * @return void
   */
  public function down()
  {
    //
  }
};