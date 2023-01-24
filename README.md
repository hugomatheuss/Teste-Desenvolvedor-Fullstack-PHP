<p align="center"><a href="https://laravel.com" target="_blank"><img src="https://raw.githubusercontent.com/laravel/art/master/logo-lockup/5%20SVG/2%20CMYK/1%20Full%20Color/laravel-logolockup-cmyk-red.svg" width="400"></a></p>

Clonando o repositório

    git clone git@github.com:hugomatheuss/laravel-api-with-angular-front.git

Entrando no diretório do projeto

    cd laravel-api-with-angular-front

Para instalar as dependências da API e do Front rode o comando abaixo
    
    sudo chmod +x ./install.sh
    sudo chmod +x ./start.sh

    ./install.sh
    ./start.sh


Acessando em http://localhost:4200/

----------
## Testes

php artisan test --filter EletrodomesticoTest

## Routes

- GET `/api/eletrodomesticos` - Todos os eletrodomesticos
- GET `/api/eletrodomesticos/{eletrodomestico}` - Um eletrodomestico específico
- POST `/api/eletrodomesticos` - Cadastra um eletrodomestico
- PUT `/api/eletrodomesticos/{eletrodomestico}` - Altera um eletrodomestico específico
- DELETE `/api/eletrodomesticos/{eletrodomestico}` - Remove um eletrodomestico específico
