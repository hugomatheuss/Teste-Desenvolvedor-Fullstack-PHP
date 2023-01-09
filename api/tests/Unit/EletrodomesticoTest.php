<?php

namespace Tests\Unit;

use App\Models\Eletrodomestico;
use Tests\TestCase;

class EletrodomesticoTest extends TestCase
{
    /**
     * @test
     */
    public function test_can_list_eletrodomesticos()
    {
        $eletrodomesticos = Eletrodomestico::factory()->count(3)->create();

        $this->withHeaders([
            'Content-Type' => 'application/json', 
            'Accept' => 'application/json'
        ])
            ->json('GET', route('api.eletrodomesticos'))
            ->assertStatus(200);
    }

    public function test_can_create_eletrodomestico()
    {
        $eletrodomestico = Eletrodomestico::factory()->create();

        $this->withHeaders([
            'Content-Type' => 'application/json', 
            'Accept' => 'application/json'
        ])
            ->json('POST', route('api.eletrodomesticos.store'), $eletrodomestico->toArray())
            ->assertStatus(201);
    }

    public function test_can_show_eletrodomestico()
    {
        $eletrodomestico = Eletrodomestico::factory()->create();

        $this->withHeaders([
            'Content-Type' => 'application/json', 
            'Accept' => 'application/json'
        ])
            ->json(
                'GET', 
                route(
                    'api.eletrodomesticos.show', 
                    ['eletrodomestico' => $eletrodomestico]), 
                    $eletrodomestico->toArray()
                )
            ->assertStatus(200);
    }

    public function test_can_update_eletrodomestico()
    {
        $eletrodomestico = Eletrodomestico::factory()->create();

        $this->withHeaders([
            'Content-Type' => 'application/json', 
            'Accept' => 'application/json'
        ])
            ->json(
                'PUT', 
                route(
                    'api.eletrodomesticos.update', 
                    ['eletrodomestico' => $eletrodomestico]), 
                    $eletrodomestico->toArray()
                )
            ->assertStatus(200);
    }

    public function test_can_delete_eletrodomestico()
    {
        $eletrodomestico = Eletrodomestico::factory()->create();

        $this->withHeaders([
            'Content-Type' => 'application/json', 
            'Accept' => 'application/json'
        ])
            ->json(
                'DELETE', 
                route(
                    'api.eletrodomesticos.update', 
                    ['eletrodomestico' => $eletrodomestico]), 
                    $eletrodomestico->toArray()
                )
            ->assertStatus(200);
    }
}
