<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class modMarca extends Model
{
  use HasFactory;
  protected $table = 'marcas';
  public $timestamps = false;
  protected $fillable = ['nombre'];
  public function categorias()
  {
    return $this->belongsToMany(Categorias::class, 'marcas_categorias', 'id_marca', 'id_categoria');
  }
}