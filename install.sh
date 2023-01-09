cd api
composer install
cp .env.example .env
php artisan key:generate
php artisan migrate
cd ..
cd front
npm install
npm run build