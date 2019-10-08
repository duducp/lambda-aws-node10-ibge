# IBGE - Function Serverless AWS - Node.Js 10

Essa lambda é responsável por buscar estados e cidades direto no site do IBGE.

## Descrição

Para a criação dessa função foi utilizado o framework [Serverless](https://serverless.com/).

Instalação:
```
npm i serverless -g
```

Template utilizado
```
serverless create --template aws-nodejs
```

Configurar credenciais da AWS
```
serverless config credentials -o --provider aws --key=SUA_KEY -- secret SUA_SECRET
```

Fazer deploy da função para o S3
```
serverless deploy -v
```

Remover função da AWS
```
serverless remove
```

## API

Buscar estados
```
GET /estados
```

Buscar cidades
```
GET /cidades/<id_estado>
```

## Links
[API IBGE - LOCALIDADES](https://servicodados.ibge.gov.br/api/docs/localidades?versao=1)