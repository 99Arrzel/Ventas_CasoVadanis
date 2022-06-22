<?php

namespace App\Models;

use App\Models\Ventas;
use App\Models\Productos;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\SoftDeletes;
use Illuminate\Database\Eloquent\Model;


class VentasProductos extends Model
{
    use HasFactory, SoftDeletes;
    protected $table = 'ventas_productos';
    protected $fillable = ['id_venta', 'id_producto'];
    /* Pertence a esta venta y producto */
    public function ventas()
    {
        return $this->belongsTo(Ventas::class, 'id_venta');
    }
    public function productos()
    {
        return $this->belongsTo(Productos::class, 'id_producto');
    }
}