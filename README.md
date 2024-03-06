# Development

Pasos para levantar la app de desarrollo

1. Levantar la base de datos

```
docker compuse up -d

```

2. Crear una copia de el .env.template y renombrarlo a .env
3. Reemplazar las variables de entorno
4. Ejecutar el comando `npm install` para reconstruir los modulos de node
5. Ejecutar el comando `npm run dev` para ejecutar la aplicacion en desarrollo
6. Ejecutar estos comandos de Prisma

```
npx prisma migrate dev
npx prisma generate
```

7. Ejecutar el Seed para [crear la base de datoslocal](localhost:3000/api/seed)

## Nota: Usuario por defecto

**usuario** test1@google.com
**password** 123456

# Prisma Commands

```

npx prisma init
npx prisma migrate dev
npx prisma generate

```

# Prod

# Stage
