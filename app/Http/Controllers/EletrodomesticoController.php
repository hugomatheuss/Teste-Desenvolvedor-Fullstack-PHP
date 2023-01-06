<?php

namespace App\Http\Controllers;

use App\Http\Requests\EletrodomesticoRequest;
use App\Http\Resources\EletrodomesticoResource;
use App\Services\EletrodomesticoService;

class EletrodomesticoController extends Controller
{ 
    protected $eletrodomesticoService;

    public function __construct(EletrodomesticoService $eletrodomesticoService)
    {
        $this->eletrodomesticoService = $eletrodomesticoService;
    }

    /**
     *
     * @return EletrodomesticoResource
     */
    public function index()
    {
        $eletrodomesticos = $this->eletrodomesticoService->getAll();

        return EletrodomesticoResource::collection($eletrodomesticos);
    }
    
    /**
     *
     * @param EletrodomesticoRequest $request
     * @return EletrodomesticoResource
     */
    public function store(EletrodomesticoRequest $request)
    {
        $data = $this->eletrodomesticoService
                    ->create(
                        $request->validated()
                    )
        ;
        
        return new EletrodomesticoResource($data);
    }

    /**
     *
     * @param string $id
     * @return EletrodomesticoResource
     */
    public function show(string $id)
    {
        $data = $this->eletrodomesticoService
            ->getOne($id)
        ;
        
        return new EletrodomesticoResource($data);
    }

    /**
     *
     * @param EletrodomesticoRequest $request
     * @param string $id
     * @return JsonResponse
     */
    public function update(EletrodomesticoRequest $request, string $id)
    {
        $this->eletrodomesticoService
            ->update($request->validated(), $id)
        ;

        return response()->json([
            'updated' => true
        ]);
    }

    /**
     *
     * @param string $id
     * @return JsonResponse
     */
    public function delete(string $id)
    {
        $this->eletrodomesticoService
            ->delete($id)
        ;

        return response()->json([
            "Deleted", 204
        ]);
    }
}
