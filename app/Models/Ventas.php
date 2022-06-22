<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;

class Ventas extends Model
{
  use HasFactory, SoftDeletes;
  protected $table = 'ventas';
  protected $fillable = [
    'id_usuario',
    'id_cliente',
    'fecha',
    'codigo_control',
    'ley_grabada',
    'codigo_autorizacion',
  ];
  public function usuario()
  {
    return $this->belongsTo(Usuarios::class, 'id_usuario');
  }
  public function cliente()
  {
    return $this->belongsTo(Personas::class, 'id_cliente');
  }
  public function detalle()
  {
    return $this->belongsToMany(Productos::class, 'ventas_productos', 'id_venta', 'id_producto')->withPivot('cantidad');
  }
}