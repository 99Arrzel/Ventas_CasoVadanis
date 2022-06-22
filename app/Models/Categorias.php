<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;


class Categorias extends Model
{
  use HasFactory;
  protected $table = 'categorias';
  protected $fillable = ['nombre', 'id_categoria_padre'];
  /* No timestamps */
  public $timestamps = false;
  public function marcas()
  {
    return $this->belongsToMany(modMarca::class, 'marcas_categorias', 'id_marca', 'id_categoria');
  }
}