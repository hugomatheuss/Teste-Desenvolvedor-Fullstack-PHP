<?php
namespace App\Repositories;

use App\Interfaces\IRepository;
use App\Models\Eletrodomestico;

class EletrodomesticoRepository implements IRepository {

    protected $entity;

    public function __construct(Eletrodomestico $eletrodomestico)
    {
        $this->entity = $eletrodomestico;
    }

    public function getAll()
    {
        return $this->entity->all();
    }

    public function getOne(string $id)
    {
        return $this->entity->findOrFail($id);
    }

    public function create(array $data)
    {
        return $this->entity->create($data);
    }

    public function update(array $data)
    {
        return $this->entity->update($data);
    }

    public function delete(string $id)
    {
        return $this->entity->delete();
    }
}