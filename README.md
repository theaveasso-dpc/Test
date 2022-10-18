
## Awesome command prompt

### Docker
```
docker-compose up -d 
```

### Prisma
```shell
# pushing the model schema to db
npx prisma db push
```
```shell
# reset and seed db
npx prisma db push --force-reset && npx prisma db seed
```
How do you seed a database with Prisma?
```shell
yarn add -D ts-node
```
```json
// update package.json
"prisma": {
  "seed": "ts-node prisma/seed.ts"
}
// update tsconfig.json "compilerOptions"
"ts-node": {
  "compilerOptions": { "module": "commonjs" }
}
```

