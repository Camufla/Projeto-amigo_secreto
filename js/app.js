let amigos = [];

function adicionar() {
  // //busca do input de nomes e da lista para adicionar os mesmo
  let amigo = document.getElementById('nome-amigo');
  
  //codicional que impede de adicionar elementos vazios na lista de nomes
  if(amigo.value == ""){
    alert('Informe o nome de um amigo!')
    return
  }

  //condiciona que verifica se o nome a incluir já existe na lista de nomes.
  if(amigos.includes(amigo.value)) {
    alert('Informe o nome de um amigo!')
    return
  }

  let lista = document.getElementById('lista-amigos');
  
  amigos.push(amigo.value);
  //condicional por que se já existe nome na lista, deve adicionar mais um nome separado por virgula
  if(lista.textContent == '') {
    lista.textContent = amigo.value
   
  } else {
    //lista mantem o nome que já tem e adiciona novo nome
    lista.textContent = lista.textContent + ', ' + amigo.value
  }
  amigo.value = '';
}

function sortear() {
  if(amigos.length < 4) {
    alert('Adicione pelo menos 4 amigos!')
  }
  embaralha(amigos);
  let sorteio = document.getElementById('lista-sorteio');

  for(let i = 0; i < amigos.length; i++) {

    if(i == amigos.length -1){
      sorteio.innerHTML = sorteio.innerHTML + amigos[i] + ' --> ' + amigos[0] + '<br>';
    } else {
      //injetando os textos na lista de sorteados
      sorteio.innerHTML = sorteio.innerHTML + amigos[i] + ' --> ' + amigos[i +1] + '<br>';
      
    }
  }
}

function embaralha(lista) {

  for (let indice = lista.length; indice; indice--) {

      const indiceAleatorio = Math.floor(Math.random() * indice);

      // atribuição via destructuring
      [lista[indice - 1], lista[indiceAleatorio]] = 
          [lista[indiceAleatorio], lista[indice - 1]];
  }
}

function reiniciar() {
  amigos = [];
  document.getElementById('lista-sorteio').textContent= '';
  document.getElementById('lista-amigos').textContent= '';

}