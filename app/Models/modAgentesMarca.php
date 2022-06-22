<?php

namespace App\Models;

use App\Models\modMarca;
use App\Models\Personas;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;

class modAgentesMarca extends Model
{
    use HasFactory, SoftDeletes;
    protected $table = 'agentes_marca';

    protected $fillable = ['id_persona', 'id_marca'];
    /* Pertence a esta persona y marca  */
    public function personas()
    {
        return $this->belongsTo(Personas::class, 'id_persona');
    }
    public function marcas()
    {
        return $this->belongsTo(modMarca::class, 'id_marca');
    }

}