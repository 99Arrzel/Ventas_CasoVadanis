<?php

namespace App\Models;

use App\Models\Usuarios;
use App\Models\modAgentesMarca;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;

class Transacciones extends Model
{
    use HasFactory, SoftDeletes;
    protected $table = 'transacciones';
    protected $fillable = ['fecha','descripcion','id_usuario', 'id_agente'];
    /* Pertence a esta usuario y agente */
    public function usuarios()
    {
        return $this->belongsTo(Usuarios::class, 'id_usuario');
    }
    public function agentes()
    {
        return $this->belongsTo(modAgentesMarca::class, 'id_agente');
    }
}