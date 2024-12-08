// Mapeia cada atividade para seu texto correspondente
const atividades = {
  "atividade 1":
    "1. Variáveis e tipos de dados: Escreva um programa que declare duas variáveis, “nome” e “idade”, e as imprima em um console em uma frase que diga “Olá, meu nome é [nome] e eu tenho [idade] anos”.",
  "atividade 2":
    "2. Operadores: Crie um programa que solicite ao usuário dois números e exiba o resultado da soma, subtração, multiplicação e divisão desses números.",
  "atividade 3":
    "3. Condições: Escreva um programa que pergunte ao usuário sua idade e imprima se ele é maior ou menor de idade.",
  "atividade 4":
    "4. Loops: Crie um loop que imprima todos os números de 1 a 100.",
  "atividade 5":
    "5. Funções: Escreva uma função que aceite dois números como argumentos e retorne sua soma.",
  "atividade 6":
    "6. Arrays: Escreva um programa que declare um array de suas frutas favoritas e imprima cada fruta na lista usando um loop.",
  "atividade 7":
    "7. Objetos: Crie um objeto que represente um livro, com propriedades para título, autor e número de páginas. Imprima cada propriedade no console.",
  "atividade 8":
    "8. Eventos DOM: Crie uma página HTML com um botão que, quando clicado, exiba um alerta que diga “Você clicou no botão!”.",
  "atividade 9":
    "9. Manipulação de Strings: Escreva uma função que receba uma string e retorne a mesma string, mas com a primeira letra de cada palavra em maiúsculas.",
  "atividade 10":
    "10. Promises e Fetch API: Use a Fetch API para fazer uma chamada para uma API pública (como a API do JSONPlaceholder) e exibir os resultados no console.",
};

var section = document.querySelector("#atividade"); // Seleciona o elemento <section> com id 'atividade'
var body = document.querySelector("body"); // Seleciona o elemento <body>

// Cria botões novos
section.innerHTML =
  "<button class='exercicios' id='atividade1'>atividade 1</button>" +
  "<button class='exercicios' id='atividade2'>atividade 2</button>" +
  "<button class='exercicios' id='atividade3'>atividade 3</button>" +
  "<button class='exercicios' id='atividade4'>atividade 4</button>" +
  "<button class='exercicios' id='atividade5'>atividade 5</button>" +
  "<button class='exercicios' id='atividade6'>atividade 6</button>" +
  "<button class='exercicios' id='atividade7'>atividade 7</button>" +
  "<button class='exercicios' id='atividade8'>atividade 8</button>" +
  "<button class='exercicios' id='atividade9'>atividade 9</button>" +
  "<button class='exercicios' id='atividade10'>atividade 10</button>";

var buttons = document.querySelectorAll(".exercicios"); // Seleciona todos os elementos com a classe 'exercicios'

// Itera sobre cada botão e adiciona um evento de clique
buttons.forEach(function (button, index) {
  button.addEventListener("click", function () {
    // Adiciona um evento de clique a cada botão
    section.innerHTML =
      "<div id='pergunta'></div>" + "<div id='resposta'></div>"; // Define o conteúdo do <section> com um div para 'pergunta' e outro para 'resposta'

    // Define o estilo do elemento <section>
    section.style.display = "flex";
    section.style.flexDirection = "column";
    section.style.justifyContent = "center";
    section.style.alignItems = "center";
    section.style.alignContent = "center";
    section.style.flexWrap = "wrap";
    section.style.width = "80vw";
    section.style.height = "80vh";
    section.style.padding = "30px";

    var divs = document.querySelectorAll("div"); // Seleciona todos os elementos <div>
    var div_pergunta = document.querySelector("#pergunta"); // Seleciona o elemento <div> com id 'pergunta'
    var div_resposta = document.querySelector("#resposta"); // Seleciona o elemento <div> com id 'resposta'

    // Verifica se a atividade existe no mapeamento e define o conteúdo
    if (atividades[button.textContent]) {
      div_pergunta.innerHTML = atividades[button.textContent]; // Define o conteúdo do div 'pergunta'
      div_pergunta.style.display = "flex"; // Configura o display como flex
      div_pergunta.style.flexDirection = "column"; // Coloca em coluna
      div_pergunta.style.alignItems = "center"; // Centraliza os itens horizontalmente
      div_pergunta.style.justifyContent = "center"; // Centraliza os itens verticalmente

      if (div_resposta) {
        div_resposta.innerHTML = ""; // Limpa o conteúdo do div 'resposta'
        div_resposta.style.display = "flex"; // Configura o display como flex
        div_resposta.style.flexDirection = "column"; // Coloca em coluna
        div_resposta.style.alignItems = "center"; // Centraliza os itens horizontalmente
        div_resposta.style.justifyContent = "center"; // Centraliza os itens verticalmente

        // Apenas chama a função para criar o formulário para a atividade correspondente
        if (button.textContent === "atividade 1") {
          respostaAtividade1();
        } else if (button.textContent === "atividade 2") {
          respostaAtividade2(); // Chama a função respostaAtividade2 ao clicar no botão "atividade 2"
        }
      } else {
        console.error("div_resposta não encontrado");
      }
    } else {
      console.error("Atividade não encontrada");
    }

    // Define o estilo para todos os elementos <div>
    divs.forEach(function (div) {
      div.style.width = "50vw";
      div.style.height = "10vh";
      div.style.margin = "20px";
      div.style.textAlign = "center";
    });

    if (div_resposta) {
      // Verifica se div_resposta não é null
      div_resposta.style.height = "50vh"; // Define a altura do div 'resposta'
    }
  });
});

function respostaAtividade1() {
  // Seleciona a seção onde os elementos serão inseridos
  var section = document.querySelector("#resposta");

  // Cria o parágrafo para o nome
  var nomeLabel = document.createElement("p");
  nomeLabel.textContent = "nome:";

  // Cria o input para o nome
  var nomeInput = document.createElement("input");
  nomeInput.type = "text";
  nomeInput.id = "nome";

  // Quebra de linha
  var br = document.createElement("br");

  // Cria o parágrafo para a idade
  var idadeLabel = document.createElement("p");
  idadeLabel.textContent = "idade:";

  // Cria o input para a idade
  var idadeInput = document.createElement("input");
  idadeInput.type = "text";
  idadeInput.id = "idade";

  // Cria o botão
  var botao = document.createElement("button");
  botao.textContent = "Mostrar Resposta";
  botao.onclick = function () {
    mostrarResposta();
  };

  // Cria a div para mostrar as entradas
  var mostraInputs = document.createElement("div");
  mostraInputs.id = "mostra_inputs";

  // Adiciona todos os elementos na seção
  section.appendChild(nomeLabel);
  section.appendChild(nomeInput);
  section.appendChild(br);
  section.appendChild(idadeLabel);
  section.appendChild(idadeInput);
  section.appendChild(br);
  section.appendChild(botao);
  section.appendChild(br);
  section.appendChild(mostraInputs);

  // Função mostrarResposta corrigida (e chamada corretamente)
  function mostrarResposta() {
    let nome = document.querySelector("#nome").value;
    let idade = document.querySelector("#idade").value;
    let mostra_inputs = document.querySelector("#mostra_inputs");
    if (mostra_inputs) {
      // Verifica se mostra_inputs não é null
      mostra_inputs.innerHTML = `seu nome é ${nome}, e a idade é ${idade} anos.`;
      console.log("é um teste mas deu certo? que engraçado");
    } else {
      console.error("mostra_inputs não encontrado");
    }
  }
}

function respostaAtividade2() {
  // Seleciona a seção onde os elementos serão inseridos
  var section = document.querySelector("#resposta");
  section.style.margin = "10px";

  section.innerHTML =
    "<div class='form' ><p>primeiro número:</p>&nbsp;<input name='numero1' placeholder='numero 1' id = 'numero1' size='1'></div>" +
    "<div class='form' ><p>segundo número:</p>&nbsp;<input name ='numero2' placeholder='numero 2' id = 'numero2' size='1'></div>" +
    "<div class='form operador'><p>soma:</p>&nbsp;<p id='soma'></p></div>" +
    "<div class='form operador'><p>subtração:</p>&nbsp;<p id='subt'></p></div>" +
    "<div class='form operador'><p>multiplicação:</p>&nbsp;<p id='mult'></p></div>" +
    "<div class='form operador'><p>divisão:</p>&nbsp;<p id='divi'></p></div>" +
    "<button class='form' id='confirmarButton'>confirmar</button>";

  //define estilos para o formulário
  var form = document.querySelectorAll(".form");
  form.forEach(function (item) {
    item.style.display = "flex";
    item.style.flexDirection = "row";
    item.style.justifyContent = "center"; // Centraliza horizontalmente
    item.style.alignItems = "center"; // Centraliza verticalmente
    item.style.textAlign = "center";
    item.style.width = "120%";
    item.style.height = "10%";
    item.style.marginBottom = "1%";
    item.style.backgroundColor = "#f0f0f0"; // Adiciona um fundo para melhor visualização
  });

  var botaoConfirmar = document.getElementById('confirmarButton');

// Verifica se o botão foi encontrado
if (!botaoConfirmar) {
  console.error('O botão confirmarButton não foi encontrado');
} else {
  botaoConfirmar.addEventListener('click', function() {
    console.log('Botão clicar foi acionado');

    // Obtém os valores dos inputs como strings
    var valor1 = document.getElementById('numero1');
    var valor1input = valor1 ? valor1.value : null;
    var valor2 = document.getElementById('numero2');
    var valor2input = valor2 ? valor2.value : null;

    console.log('Valor 1:', valor1input);
    console.log('Valor 2:', valor2input);

    // Converte os valores para números usando Number()
    var numero1 = Number(valor1input);
    var numero2 = Number(valor2input);

    // Contas
    var soma = numero1 + numero2;
    var subt = numero1 - numero2;
    var mult = numero1 * numero2;
    var divi = numero1 / numero2;

    //atribui os valores
    document.getElementById('soma').textContent = soma;
    document.getElementById('subt').textContent = subt;
    document.getElementById('mult').textContent = mult;
    document.getElementById('divi').textContent = divi;

    // Exibe o resultado no console
    console.log('A soma é: ' + soma);
  });
}

  
  



























  
  

}
