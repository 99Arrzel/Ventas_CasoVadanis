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
    Schema::create('productos', function (Blueprint $table) {
      $table->id();
      $table->string('nombre');
      $table->dateTime('fecha_expiracion')->nullable();
      $table->decimal('precio');
      $table->decimal('descuento')->default(0);
      $table->foreignId('id_detalle')->constrained('detalles');
      $table->bigInteger('id_grupo_producto');
      $table->foreignId('id_categoria')->constrained('categorias');
      $table->foreignId('id_marca')->constrained('marcas');
      $table->integer('cantidad');
      $table->text('descripcion');
      $table->decimal('importe_base'); //Esto es de impuestos
      $table->foreignId('id_usuario')->constrained('usuarios');
      $table->softDeletes(); //El estado, si se modifica el anterior se hace soft delete y se crea uno nuevo
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
    Schema::dropIfExists('productos');
  }
};