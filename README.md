## Cómo instalar

Primero necesitas tener 3 cosas.
1.- MySQL 
2.- PHP 8.0^
3.- Git
4.- Node

Debes hacer un git clone de este repo, para ello usa el comando:

git clone https://github.com/CraniumAdamantium/Ventas_CasoVadanis

Lo siguiente es crear y configurar el archivo .env, para ello usa el archivo .env.example y cambia los parametros:

DB_HOST=127.0.0.1 => ip de la base de datos

DB_PORT=3306 => puerto de la base de datos

DB_DATABASE=laravel => nombre de la base de datos

DB_USERNAME=root => usuario de la base de datos

DB_PASSWORD= => password de la base de datos


Una vez hecho esto, tendrás que migrar la base de datos, para ello usas el comando

php artisan migrate

Después solo queda compilar el frontend, por lo que ocupas 2 comandos

npm install

y 

npm run production

Listo, eso es todo 👍
