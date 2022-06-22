<?php

namespace App\Models;

use App\Models\Imagenes;
use App\Models\Personas;
use Illuminate\Database\Eloquent\Casts\Attribute;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Foundation\Auth\User as Authenticatable;
use Illuminate\Database\Eloquent\SoftDeletes;


class Usuarios extends Authenticatable
{
  use HasFactory, SoftDeletes;
  protected $table = 'usuarios';
  public $timestamps = false;
  protected $fillable = ['usuario', 'password', 'nivel', 'remember_token', 'id_persona', 'id_imagen_perfil'];
  protected $hidden = ['password', 'remember_token'];

  /* Castear la persona a la que pertence este usuario */
  public function persona()
  {
    return $this->belongsTo(Personas::class, 'id_persona');
  }
  public function imagen_perfil()
  {
    return $this->belongsTo(Imagenes::class, 'id_imagen_perfil');
  }
}