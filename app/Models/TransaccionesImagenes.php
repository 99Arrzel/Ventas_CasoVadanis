<?php

namespace App\Models;

use App\Models\Transacciones;
use App\Models\Imagenes;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class TransaccionesImagenes extends Model
{
    use HasFactory;
    protected $table = 'transacciones_imagenes';
    protected $fillable = ['id_transaccion', 'id_imagen'];
    /* Pertence a esta transaccion e imagen */
    public function transacciones()
    {
        return $this->belongsTo(Transacciones::class, 'id_transaccion');
    }
    public function imagenes()
    {
        return $this->belongsTo(Imagenes::class, 'id_imagen');
    }
}