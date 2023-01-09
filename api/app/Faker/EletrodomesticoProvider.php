<?php

namespace App\Faker;

use Faker\Provider\Base;

class EletrodomesticoProvider extends Base
{
    protected static $nomes = [
        'geladeira',
        'tv',
        'ps5',
        'microondas',
        'liquidificador'
    ];

    protected static $tensoes = [
        110,
        220
    ];

    protected static $marcas = [
        1,
        2,
        3,
        4,
        5,
    ];

    public function nome(): string
    {
        return static::randomElement(static::$nomes);;
    }

    public function tensao(): string
    {
        return static::randomElement(static::$tensoes);;
    }

    public function marca(): string
    {
        return static::randomElement(static::$marcas);
    }
}