# Development

Pasos para levantar la app de desarrollo

1. Levantar la base de datos

```
docker compuse up -d

```

2. Renombrar el .env.template a .env
3. Reemplazar las variables de entorno
4. Ejecutar el Seed para [crear la base de datoslocal](localhost:3000/api/seed)

# Prisma Commands

```

npx prisma init
npx prisma migrate dev
npx prisma generate

```

!
