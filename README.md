# Para inicializar o projeto Totvs Notes é necessário realizar os seguintes comandos no terminal

* npm install
* ng serve

# Abrir um segundo terminal no VSCode (recomendando utilizar o recurso Split Terminal) para inicializar a Fake Api

* json-server db.json -m ./node_modules/json-server-auth -p 3001

# Certificados

* Angular Parte 1: Fundamentos - https://cursos.alura.com.br/certificate/pedro-missaglia/angular-fundamentos
* Angular Parte 2: Autenticação, Forms e Lazy Loading - https://cursos.alura.com.br/certificate/pedro-missaglia/angular-autenticacao


# Desafio Portinari - 1ºsemetre 2020

A TOTVS quer lançar um site de lista de tarefas. Foi feita uma planning com o time o qual você é integrante e a sprint começou. Suas tarefas são as seguintes:

A página de login deve respeitar as seguintes características:

* Validação do formato de e-mail. :heavy_check_mark:
* Senha não deve ficar visível enquanto digitada. :heavy_check_mark:
* Deve validar o acesso através da API fake. :heavy_check_mark:

Bônus:

* Inserir uma opção "Lembrar-me" que, quando marcada no momento do login, consiste as informações do usuário para que ele não precise fazer login toda vez que a tela recarregar. :heavy_check_mark:

As tarefas pendentes são todas as tarefas criadas por mim que ainda não foram concluídas.

* Preciso conseguir buscar uma tarefa pelo nome, categoria ou data limite :heavy_check_mark:
* Preciso conseguir visualizar o nome da tarefa :heavy_check_mark:
* Preciso conseguir visualizar a data limite da tarefa :heavy_check_mark:
* Preciso conseguir visualizar se a tarefa está atrasada ou não :heavy_check_mark:
* Preciso conseguir visualizar a categoria da tarefa :heavy_check_mark:
* As tarefas que são para hoje ou estão atrasadas, devem ser exibidas com destaque das demais tarefas :heavy_check_mark:

Bônus:

* Caso eu tenha mais que 10 tarefas pendentes, mostrar apenas as 10 mais antigas e exibir uma opção de "Carregar Mais", para evitar sobrecarga no servidor. (Paginação) :heavy_check_mark:

* As categorias podem ser "hard-coded", não é necessário um cadastro específico para elas. Mas tenha em mente que esta informação é usada em diversas partes do sistema. :heavy_check_mark:

* É necessário haver ao menos duas categorias. :heavy_check_mark:

* Preciso conseguir colocar um nome para a tarefa, este nome não pode ser vazio :heavy_check_mark:
* Preciso conseguir colocar um deadline para a tarefa, esta data não pode ser no passado :heavy_check_mark:
* Preciso conseguir definir uma categoria para a tarefa, selecionando de uma lista pré-existente de categorias :heavy_check_mark:

* Ao marcar uma tarefa pendente como concluída, ele deve sumir da minha lista de tarefas pendentes. Eu posso concluir uma tarefa no passado ou no futuro, mas esta informação deve ser mantida como histórico. :heavy_check_mark:

* O histórico deve ter as mesmas caracterísitcas que a lista de tarefas pendentes (busca, filtro, dados), com os seguintes complementos:

* Devo conseguir visualizar a data prevista e a data em que a tarefa foi realizada. :heavy_check_mark:
* A lista não deve mostrar tarefas pendentes :heavy_check_mark:
* Somente tarefas concluídas podem ser excluídas, e deve apresentar uma confirmação ao excluir, questionando se tenho certeza desta ação. :heavy_check_mark:
* Posso alterar apenas as tarefas pendentes. :heavy_check_mark:
* Ao alterar o prazo, não deve ser permitido utilizar uma data no passado. :heavy_check_mark:



##Algumas orientações:

* O projeto deve ser entregue através de um Pull Request neste próprio repositório.
* Utilize uma fake API (http://www.fabricadecodigo.com/json-server/), para simular integração com um servidor REST.
* Seja criativo no layout de suas telas, mas sempre que possível use como base o Guideline de Interfaces da TOTVS.
* O desafio é sobre interação, não precisa fazer tudo, basta ir fazendo os pedaços que se sente mais confortável e entregando aos poucos.
* Organize seus commits. Sua utilização do git faz parte do desafio.