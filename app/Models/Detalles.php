<?php

namespace App\Models;

use App\Models\Transacciones;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;

class Detalles extends Model
{
  use HasFactory, SoftDeletes;
  protected $table = 'detalles';
  protected $fillable = ['monto', 'cantidad', 'nombre', 'descripcion', 'id_transaccion'];
  /* Pertence a esta transaccion  */
  public function transaccion()
  {
    return $this->belongsTo(Transacciones::class, 'id_transaccion');
  }
}