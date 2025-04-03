/*abaixo criamos uma função que cria tarefas na tela, ela interage com o código do HTML - criamos uma função, essa função chama: 
adicionarTarefas entre parenteses e abre com chaves, a função que vai ser adicionada dentro dos parenteses é criado a frente dentro de 
chaves */
function adicionarTarefa() {
    
    /* abaixo foi criada uma variavel com a id inputTarefa referente ao campo do input no HTML que vai receber a informação que vai ser
    pego no documento HTML o elemento do Id inputTarefa */
    let inputTarefa = document.getElementById("inputTarefa")

    /* abaixo foi criado uma variável que atribuimos o nome tarefa que vai receber o valor atribuido no campo de texto do input
    esse texto vai se transformar em uma novaTarefa posteriormente na continuação do código. */
    let tarefa = inputTarefa.value

    if(tarefa == null || tarefa == ""){
        document.getElementById("mensagemErro").textContent = "Você deixou o campo vazio, escreva uma tarefa!"
        return
    }

    /* abaixo chamamos o elemento que foi atribuido como mensagem no id do parágrafo e printamos na tela com um ponto mais textContent
    um conteúdo de texto com que esta dentro da variavel mensagem que foi adicionado entre aspas lá acima no código */
    document.getElementById("mensagem").textContent = "Tarefa adicionada com sucesso!"




        /* abaixo criamos uma variável listaTarefas que recebeu o id do elemento que esta no documento HTML que esta no elemento ul
        chamado listaTarefas, onde vai ser criado posteriormente de maneira automática vários li's com componentes e conteúdos com valores
        atribuidos dentro do input de texto */
        let listaTarefas = document.getElementById("listaTarefas")

        /* abaixo criamos uma variável novaTarefa que vai receber o novo valor criado a partir do input de texto, porém ele
        não existe no código HTML, ele vai ser criado automaticamente, quando o usuário interagir com a página, adicionando
        uma nova tarefa, isso vai ser incrementado, automaticamente novas li's */
        let novaTarefa = document.createElement("li")
        
        /* abaixo a nova tarefa que vai ser incrementada automáticamente ao código, a partir de um novo item digitado no campo
        de texto no input, em que o usuário vai interagir com a página, vai criar um novo componente/conteúdo de texto que
        é igual a uma nova tarefa, isso vai ser criado novos componentes na lista de tarefas automáticamente */
        novaTarefa.textContent = tarefa

        /* abaixo criamos uma lista de tarefas com componentes na parte interna do ul, com um componente atribuido de novaTarefa
        a parte interior do ul é o filho do ul, que são os li, por isso chamamos de appendChild que nomeamos como novaTarefa */
        listaTarefas.appendChild(novaTarefa)

        /* abaixo pegamos o valor do input que foi escrito uma nova tarefa e adicionamos um valor vazio, a partir das aspas vazias. */   
        inputTarefa.value = ""    
    }
        


