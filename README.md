# ToDo List Web 📑
Essa To Do List Web foi criada para estudar as integrações entre um backend com banco de dados e um frontend, além de usar padrões de projeto e uma API que fiz ser pública. Deixo ela em aberto para melhorias.

*******
**Sumário**

 * [Frontend](#frontend)
 * [Backend](#backend)
 * [Database](#database)
 * [Instalação](#instalação)
 * [Descrição](#descrição)
 * [Rodapé](#rodapé)

*******


## Frontend

![todo-list](https://github.com/sousadevelop/ToDo-List_FullStack_in_Web/assets/92130316/145088aa-22d9-432c-835d-7f413e270654)

> O frontend é uma aplicação web implementada usando puramente `HTML`, `CSS` e `Javascript`. Ele permite que os usuários criem, editem e excluam tarefas da lista.

## Backend

![back-todo-list](https://github.com/sousadevelop/ToDo-List_FullStack_in_Web/assets/92130316/0768094c-ff0f-4f49-aca3-fabda85dcfbb)

> O backend é um servidor web implementado com `Node.js` e `Express`. Ele fornece uma API RESTful para gerenciar as tarefas da lista.


## Database

O banco de dados é um `MySQL` em container Docker que armazena os dados das tarefas.
As tasks são guardadas na tabela no formato:

**Tasks**

| ID  | Titulo  | Created_at | Status |
|--------------|--------------|-------------|-------------|
| int | varchar(45)  | varchar(45)  | varchar(45)    |


---

## Instalação

Para instalar o projeto, siga estas etapas:

1. Clone o repositório:

```
git clone https://github.com/sousadevelop/ToDo-List_FullStack_in_Web.git
```

2. Instale as dependências:

```
cd ToDo-List_FullStack_in_Web
npm install
```

3. Crie um arquivo `.env` na raiz do projeto e defina as seguintes variáveis de ambiente:

```
PORT=3000
MYSQL_HOST=localhost
MYSQL_USER=
MYSQL_PASSWORD=
MYSQL_DB=todolist
```

4. Inicie o backend:

```
npm start
```

5. Abra o frontend em um navegador web:

```
http://localhost:3000/tasks
```

**Uso**

Para usar o projeto, siga estas etapas:

1. Crie uma tarefa.
2. Edite ou exclua uma tarefa.
3. Visualize suas tarefas.

---

## Lista de erros que você pode enfrentar trabalhando nesse projeto:

-->> Erro por falta da validação de um parâmetro, sendo assim quando você não passar o que precisa na request o backend vai quebrar
-> Resolução: 
	É preciso criar uma função middleware para ficar no meio da rota filtrando os erros 
Error: Bind parameters must not contain undefined. To pass SQL NULL specify JS null

********************

-->> Erro de outro mysql rodando, seja o mysql workbach ou em docker
-> Resolução: 
	Entre com cmd + r
	Digite "services.msc" e dê enter
	Depois procure por MYSQL e pare totalmente
	Por fim rode novamente o comando no terminal "docker start code_docker"
Error response from daemon: Ports are not available: exposing port TCP 0.0.0.0:3306 -> 0.0.0.0:0: listen tcp 0.0.0.0:3306: bind: Normalmente é permitida apenas uma utilização de cada endereço de soquete (protocolo/endereço de rede/porta).
Error: failed to start containers: code_docker

*********************

-->> Erro por ter algum caracter errado no json da requisição em que foi mandada, ou seja, é fora do código do backend
-> Resolução: 
	Leia atentamente a requisição escrita em JSON que foi passada e verifique se não há, aspas, virgula, [, { a mais ou a menos
SyntaxError: Unexpected token } in JSON at position 39

---

## Descrição

**Estrutura do projeto**

O projeto é dividido nos seguintes diretórios:

* `backend`: Contém o código do servidor que cuida da API.
* `frontend`: Contém o código do layout da página.
* `database`: Contém a arquitetura do armazenamento dos dados.
* `container`: Usado pelo docker.

**Arquivos importantes**

* `server.js` e `app.js`: Arquivo principal do backend.
* `script.js`: Arquivo principal do frontend.
* `package.json`: Arquivo de gerenciamento das dependências do projeto.

**Diagrama de arquitetura**

O diagrama a seguir mostra a arquitetura do projeto:

```
Frontend
   |
   |
   |
Backend
   |
   |
   |
Banco de dados
```

## Rodapé

**Dica de segurança**

* Crie um usuário e senha forte para as suas variáveis do arquivo .env

---

### Contribuições

Contribuições são bem-vindas. Por favor, crie um issue ou fork o repositório e crie um pull request.

### Fruto das Aulas

https://www.youtube.com/@ManualdoDev
