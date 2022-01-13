# Marketplace Healthy life API
## API REST criada para suprir as demandas do Marketplace Healthy life

[![N|Solid](https://i.ibb.co/gWjkJJ0/Captura-de-tela-2021-12-27-222135-removebg-preview-1.png)](https://front-teste-e73or738f-lua-programmer.vercel.app/)

## Tech

As tecnologias utilizadas no desenvolvimento dessa API foram:

- Node.js
- Nest.js - fast node.js network app framework
- Prisma Client - ORM
- PostegreSQL - Database


## Installation

```sh
git clone: "https://github.com/Lua-programmer/Marketplace_Back_Bootcamp.git"
cd Marketplace_Back_Bootcamp
npm install
npm run start:dev
```

## Documentation

```sh
URL:https://marketplace-healthy-life.herokuapp.com/
```

ROTAS:

### POST =>Login
```sh
https://marketplace-healthy-life.herokuapp.com/auth/login
```

> {
>	"email":"",
>	"password":""
> }

 ### POST =>Criar usuário
```sh
https://marketplace-healthy-life.herokuapp.com/users/create-user
```

> {
    "name": "Exemplo",
    "email": "exemplo@gmail.com",
    "cpf": "11144754520",
    "password": "1579322",
    "passwordConfirmation": "1579322",
    "address": "rua senador rui palmeira",
    "city": "Maceió",
    "cep": "57035250",
    "country": "Brasil",
    "uf": "Al",
    "tel": "83988888888",
    "image": http://www.google.com/
> }

### POST =>Criar usuárioadmin

```sh
https://marketplace-healthy-life.herokuapp.com/users/create-admin
```

### GET =>Listar todos os usuários
```sh
https://marketplace-healthy-life.herokuapp.com/users/find-all
```

### GET =>Listarusuário por ID
```sh
https://marketplace-healthy-life.herokuapp.com/users/find/ID
```
### PATH =>Atualizar usuário por ID
```sh
https://marketplace-healthy-life.herokuapp.com/users/update/ID
```
### DELETE =>Deletar usuário por ID
```sh
https://marketplace-healthy-life.herokuapp.com/users/delete/ID
```
>
> 

### POST =>Criar Empresas
```sh
https://marketplace-healthy-life.herokuapp.com/companies/create-company
```

> {
	"name": "Strong Gym",
	"email": "strongmm@gmail.com",
	"cnpj": "24100554000129",
	"password":"123456",
	"passwordConfirmation": "123456",
	"image": "google.com",
	"address": "Avenida Liberdade, 400",
	"city": "Bayeux",
	"uf": "PB",
	"cep": "58308286",
	"country": "Brasil",
	"tel": "8332323232"
> }

### GET =>Listar todas as empresas

```sh
https://marketplace-healthy-life.herokuapp.com/companies/find-all
```
### GET =>Listarempresa por ID
```sh
https://marketplace-healthy-life.herokuapp.com/companies/find/ID
```
### PATH =>Atualizar empresa por ID
```sh
https://marketplace-healthy-life.herokuapp.com/companies/update/ID
```
### DELETE =>Deletar empresa por ID
```sh
https://marketplace-healthy-life.herokuapp.com/companies/delete/ID
```
>
>

### POST =>Criar categoria
```sh
https://marketplace-healthy-life.herokuapp.com/categories/create-category
```

> {
	"name":"Musculação",
	"image": "https://files.com"
> }

### GET =>Listar todas as categorias
```sh
https://marketplace-healthy-life.herokuapp.com/categories/find-all
```
### GET =>Listarcategoria por ID
```sh
https://marketplace-healthy-life.herokuapp.com/categories/find/ID
```
### PATH =>Atualizarcategoria por ID
```sh
https://marketplace-healthy-life.herokuapp.com/categories/update/ID
```
### DELETE =>Deletar categoria por ID

```sh
https://marketplace-healthy-life.herokuapp.com/categories/delete/ID
```
>
>


### POST =>Criar produtos

```sh
https://marketplace-healthy-life.herokuapp.com/products/create-product
```

> {
	"name":"Kit Fitness 40Kg + 2 Barras 40cm C/Rosca + 1 Barra 120cm C/Presilhas + Corda",
	"price":"R$ 529",
	"description": "Composto por:- 40kg de anilhas enviado na seguinte configuração: (4x5KG, 4x3KG e 4x2KG)- 1 Barra de 1,20m Tubular com PRESILHAS- 2 Barras de 40cm com ROSCA e Pegada Emborrachada- 1 Corda de Pular Giratória de 2,6m",
	"image": "https://m.media-amazon.com/images/I/61JmX6f4a+L._AC_SY355_.jpg",
	"category": [1]id da categoria
> }

### GET =>Listar todos os produtos
```sh
https://marketplace-healthy-life.herokuapp.com/products/find-all
```
### GET =>Listarproduto por ID
```sh
https://marketplace-healthy-life.herokuapp.com/products/find/ID
```
### PATH =>Atualizar produto por ID

```sh
https://marketplace-healthy-life.herokuapp.com/products/update/ID
```
### DELETE =>Deletar produto por ID
```sh
https://marketplace-healthy-life.herokuapp.com/products/delete/ID
```
