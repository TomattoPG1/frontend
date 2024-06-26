# Descripción

Tomatto es una tienda de comercio electrónico que ofrece una variedad de productos artesanales únicos, incluyendo chaquetas, artesanías y cerámica, entre otros.

# Tecnologías Utilizadas
Next.js 14.0.1
React 18
TypeScript 5
Prisma 5.16.0
Docker
Tailwind CSS 3.3.0
Zustand 4.4.6

# Scripts Disponibles
dev: Ejecuta la aplicación en modo desarrollo.
build: Construye la aplicación para producción.
start: Inicia la aplicación en producción.
seed: Ejecuta el script de seed para poblar la base de datos.

## Configuración y Ejecución

## Correr en dev

Para correr el proyecto en modo desarrollo, sigue estos pasos:

1. Clonar el repositorio.
2. Crear una copia del ```.env.template``` y renombrarlo a ```.env``` y cambiar las variables de entorno.
3. Instalar dependencias ```npm install```
4. Levantar la base de datos ```docker compose up -d```
5. Correr las migraciones de Primsa ```npx prisma migrate dev```
6. Ejecutar seed ```npm run seed```
7. Correr el proyecto ```npm run dev```



## Correr en prod
