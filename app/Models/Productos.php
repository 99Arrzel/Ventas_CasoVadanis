<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;

class Productos extends Model
{
  use HasFactory, SoftDeletes;
  protected $table = 'productos';
  protected $fillable = [
    'id_categoria',
    'id_marca',
    'id_detalle',
    'id_grupo_producto',
    'nombre',
    'fecha_expiracion',
    'precio',
    'descuento',
    'cantidad',
    'descripcion',
    'importe_base',
    'id_usuario',
  ];
  public function categoria()
  {
    return $this->belongsTo(Categorias::class, 'id_categoria');
  }
  public function marca()
  {
    return $this->belongsTo(modMarca::class, 'id_marca');
  }
  public function detalle()
  {
    return $this->belongsTo(Detalles::class, 'id_detalle');
  }
  public function anterior_producto()
  {
    return $this->belongsTo(Productos::class, 'id_anterior_producto');
  }
  public function usuario()
  {
    return $this->belongsTo(Usuarios::class, 'id_usuario');
  }
  public function ventas()
  {
    return $this->belongsToMany(Ventas::class, 'ventas_productos', 'id_producto', 'id_venta')->withPivot('cantidad');
  }
}