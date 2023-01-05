<p align="center"><a href="https://laravel.com" target="_blank"><img src="https://raw.githubusercontent.com/laravel/art/master/logo-lockup/5%20SVG/2%20CMYK/1%20Full%20Color/laravel-logolockup-cmyk-red.svg" width="400"></a></p>

Clonando o repositório

    git clone git@github.com:hugomatheuss/Teste-Desenvolvedor-Fullstack-PHP.git

Entrando no diretório do projeto

    cd Teste-Desenvolvedor-Fullstack-PHP

Instalando as dependências com o composer

    composer install

Copiando o arquivo .env.example para o arquivo .env para fazer as configurações necessárias

    cp .env.example .env

Gerando uma nova application key

    php artisan key:generate

Migrations (**Ajuste as informações do banco de dados em .env antes de rodar as migrations**)

    php artisan migrate

Iniciando o local server

    php artisan serve

Acessando em http://localhost:8000


## Documentação da API

> [Full API Spec]()


----------
#Testes
php artisan tests --filter EletrodomesticoTest

## Routes

- GET `/api/eletrodomesticos` - Todos os eletrodomesticos
- GET `/api/eletrodomesticos/{eletrodomestico}` - Um eletrodomestico específico
- POST `/api/eletrodomesticos` - Cadastra um eletrodomestico
- PUT `/api/eletrodomesticos/{eletrodomestico}` - Altera um eletrodomestico específico
- DELETE `/api/eletrodomesticos/{eletrodomestico}` - Remove um eletrodomestico específico

# Testando no Postman

    php artisan serve

    http://localhost:8000/api

Request headers

| **Required** 	| **Key**              	| **Value**            	|
|----------	|------------------	|------------------	|
| Yes      	| Content-Type     	| application/json 	|
| Yes      	| X-Requested-With 	| XMLHttpRequest   	|
| Yes 	    | Authorization    	| Token {JWT}      	|
