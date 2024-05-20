const button = document.querySelector(".button-tarefa");
const input = document.querySelector(".input-tarefa");
const listaCompleta = document.querySelector(".list-tarefa")

let listaTarefas = []

function adicionarTarefa(){
    listaTarefas.push({
        tarefa: input.value,
        conluida: false
    })
    
    input.value = ""

    mostrarTarefas()
}

function mostrarTarefas(){
    let novaLi = ""

    listaTarefas.forEach((item, indice) => {
        novaLi = novaLi + `    
        
        <li class="tarefa ${item.conluida && "done"}">
        <img src="img/check.png" onclick = "concluirTarefa(${indice})">
        <p>${item.tarefa}</p>
        <img src="img/lixo.png" onclick = "deletarItem(${indice})">
        </li>

        `
    })

    listaCompleta.innerHTML = novaLi

    localStorage.setItem("lista", JSON.stringify(listaTarefas))

}

function concluirTarefa(indice){
    listaTarefas[indice].conluida = !listaTarefas[indice].conluida
    
    mostrarTarefas()
}

function deletarItem(indice){
    listaTarefas.splice(indice, 1)
    
    mostrarTarefas()
}

function recarregarTarefas(){
    const tarefasLocalStorage = localStorage.getItem("lista")
    
    if(tarefasLocalStorage){
        listaTarefas = JSON.parse(tarefasLocalStorage)
    }

    mostrarTarefas()
}

recarregarTarefas()

button.addEventListener("click", adicionarTarefa )