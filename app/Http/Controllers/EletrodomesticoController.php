<?php

namespace App\Http\Controllers;

use App\Exceptions\EletrodomesticoException;
use App\Http\Requests\EletrodomesticoRequest;
use App\Http\Resources\EletrodomesticoResource;
use App\Services\EletrodomesticoService;
use Exception;
use Illuminate\Database\Eloquent\ModelNotFoundException;

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
        try {
            $data = $this->eletrodomesticoService
                    ->create($request->validated())
            ;
        } catch (\Exception $e) {
            throw new Exception($e->getMessage(), $e->getCode());
        }
        
        return new EletrodomesticoResource($data);
    }

    /**
     *
     * @param string $id
     * @return EletrodomesticoResource
     */
    public function show(string $id)
    {
        try {
            $data = $this->eletrodomesticoService
                ->getOne($id)
            ;
        } catch (ModelNotFoundException $e) {
            throw new EletrodomesticoException($e->getMessage(), 401);
        }
        
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
        try {
            $this->eletrodomesticoService
                ->update($request->validated(), $id)
            ;
        } catch (ModelNotFoundException $e) {
            throw new EletrodomesticoException($e->getMessage(), 401);
        }

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
        try {
            $this->eletrodomesticoService
                ->delete($id)
            ;
        } catch (ModelNotFoundException $e) {
            throw new EletrodomesticoException($e->getMessage(), 401);
        }

        return response()->json([
            "Deleted", 204
        ]);
    }
}
