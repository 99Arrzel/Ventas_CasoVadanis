<?php

namespace App\Models;

use Carbon\Carbon;
use Illuminate\Database\Eloquent\Casts\Attribute;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;



class Personas extends Model
{
  use HasFactory;
  protected $table = 'personas';
  protected $fillable = ['ci', 'nombre', 'apellido_p', 'apellido_m', 'telefono', 'correo', 'direccion', 'fecha_nacimiento', 'genero'];
  /* Cast edad en un campo aparte */
  protected $hidden = ['created_at', 'updated_at'];

  public function nombre(): Attribute
  {
    return Attribute::make(
      set: fn ($value) => ucfirst($value)
    );
  }
  public function apellido_p(): Attribute
  {
    return Attribute::make(
      set: fn ($value) => ucfirst($value)
    );
  }
  public function apellido_m(): Attribute
  {
    return Attribute::make(
      set: fn ($value) => ucfirst($value)
    );
  }
}