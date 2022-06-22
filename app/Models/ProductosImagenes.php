<?php

namespace App\Models;

use App\Models\Imagenes;
use App\Models\Productos;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class ProductosImagenes extends Model
{
    use HasFactory;
    protected $table = 'productos_imagenes';
    public $timestamps = false;
    protected $fillable = ['id_imagen', 'id_producto'];
    /* Pertence a este producto e imagen*/
    public function imagenes()
    {
        return $this->belongsTo(Imagenes::class, 'id_imagen');
    }
    public function productos()
    {
        return $this->belongsTo(Productos::class, 'id_producto');
    }
}