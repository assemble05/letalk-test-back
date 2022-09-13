<h1  align="center">API - Letalk Emprestimos</h1>

<h2 align="center">Introdução</h2>
   
   Essa aplicação foi construida com intuito de calcular o valor de um emprestimo com base em juros mensais, e assim retornan para o front-end todas as informações tratadas, sobrando apenas para o front a renderização e estilização da informações.
    
##

<h2 align="center"> Desenvolvido com:</h2>
<div align="center" style="display: inline_block">
  <img align="center" alt="Typescript" height="30" width="40" src="https://raw.githubusercontent.com/devicons/devicon/master/icons/typescript/typescript-plain.svg">
  <img align="center" alt="Node" height="30" width="40" src="https://raw.githubusercontent.com/devicons/devicon/master/icons/nodejs/nodejs-original.svg">
  <img align="center" alt="heroku" height="30" width="40" src="https://github.com/devicons/devicon/blob/master/icons/heroku/heroku-original.svg">
  <img align="center" alt="express" height="30" width="40" src="https://github.com/devicons/devicon/blob/master/icons/express/express-original.svg">
  
 </div>
 
   ##
   
<div align="center" style="display: inline_block">
 <h2  align="center">Rotas</h2>
</div>
<div align="center" style="display: inline_block">
 <h4  align="center">API URL : [https://api-letalk-test.herokuapp.com/] </h2>
</div>
<div align="center" style="display: inline_block"> 
<h3>Loan - Emprestimo</h3>
</div>

<div align="left" style="display: inline_block">

Rota destinada fazer todos os calculos e previsões de custos,

`POST /loan - Calcular empréstimo - FORMATO DA REQUISIÇÂO - STATUS 200`

> ```json
> {
>{
>	"cpf": "123123123",
>	"uf": "MG",
>	"birth_date": "13-02-2002",
>	"value": 90000,
>	"portion": 15000
>}
> }
> ```


`POST /loan - Calcular empréstimo - FORMATO DE RESPOSTA - STATUS 200`

> ```json
>{
>"cpf": "123123123",
>"fees": "R$ 3.406,59",
>"monthToPay": "8 MESES",
>"required_value": "R$ 90.000,00",
>"fessPerMonth": "1% ao mês",
>"amountPeerMonth": "R$ 15.000,00",
>"totalToPay": "R$ 93.406,59",
>"installments": [
>	{
>	"debt": "R$ 90.900,00",
>	"fees": "R$ 900,00",
>    "month": "13/9/22",
>	"debit_value": "R$ 90.000,00",
>	"installment": "R$ 15.000,00"
>	},
>   ...
>    ]
>}
> ```

`POST /loan/confirmation - Confirmar a realização do emprestimo - FORMATO DA REQUISIÇãO - STATUS 200`

> ```json
> {
>{
>	"cpf": "123123123",
>	"uf": "MG",
>	"birth_date": "13-02-2002",
>	"value": 90000,
>	"portion": 15000
>}
> }
> ```


<div align="left" style="display: inline_block">

Rota para busca de todos os empréstimos feitos até o momento

`GET /loan - Buscar todos os empréstimos - FORMATO DE RESPOSTA - STATUS 200`


> ```json
>[{
>"cpf": "123123123",
>"fees": "R$ 3.406,59",
>"monthToPay": "8 MESES",
>"required_value": "R$ 90.000,00",
>"fessPerMonth": "1% ao mês",
>"amountPeerMonth": "R$ 15.000,00",
>"totalToPay": "R$ 93.406,59",
>"installments": [
>	{
>	"debt": "R$ 90.900,00",
>	"fees": "R$ 900,00",
>    "month": "13/9/22",
>	"debit_value": "R$ 90.000,00",
>	"installment": "R$ 15.000,00"
>	},
>   ...
>    ]
>},
>"cpf": "123123123",
>"fees": "R$ 3.406,59",
>"monthToPay": "8 MESES",
>"required_value": "R$ 90.000,00",
>"fessPerMonth": "1% ao mês",
>"amountPeerMonth": "R$ 15.000,00",
>"totalToPay": "R$ 93.406,59",
>"installments": [
>	{
>	"debt": "R$ 90.900,00",
>	"fees": "R$ 900,00",
>    "month": "13/9/22",
>	"debit_value": "R$ 90.000,00",
>	"installment": "R$ 15.000,00"
>	},
>   ...
>    ]
>},
>]
> ```
