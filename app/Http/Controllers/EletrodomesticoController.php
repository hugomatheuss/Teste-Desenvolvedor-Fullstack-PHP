<?php

namespace App\Http\Controllers;

use App\Http\Requests\EletrodomesticoRequest;
use App\Http\Resources\EletrodomesticoResource;
use App\Models\Eletrodomestico;

class EletrodomesticoController extends Controller
{ 
    public function getAllEletrodomesticos()
    {
        $eletrodomesticos = EletrodomesticoResource::collection(Eletrodomestico::all());
        return response($eletrodomesticos, 200);
    }
    
    public function storeEletrodomestico(EletrodomesticoRequest $request)
    {
        $data = $request->validated();
        
        $eletrodomestico = Eletrodomestico::create($data);
        
        return (new EletrodomesticoResource($eletrodomestico))
            ->response()
            ->setStatusCode(201)
        ;
    }

    public function getEletrodomestico(Eletrodomestico $eletrodomestico)
    {
        return (new EletrodomesticoResource(Eletrodomestico::find($eletrodomestico)))
            ->response()
            ->setStatusCode(200)
        ;
    }

    public function updateEletrodomestico(EletrodomesticoRequest $request, Eletrodomestico $eletrodomestico)
    {
        $data = $request->validated();

        $eletrodomestico->update($data);

        return (new EletrodomesticoResource($eletrodomestico))
            ->response()
            ->setStatusCode(201)
        ;
    }

    public function deleteEletrodomestico(Eletrodomestico $eletrodomestico)
    {
        $eletrodomestico->delete();

        return response()->json("Deleted", 204);
    }
}
