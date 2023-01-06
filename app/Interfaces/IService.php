<?php

namespace App\Interfaces;

interface IService {
    public function getAll();
    public function getOne(string $id);
    public function create(array $data);
    public function update(array $data);
    public function delete(string $id);
}