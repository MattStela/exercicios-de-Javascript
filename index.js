// Mapeia cada atividade para seu texto correspondente
const atividades = {
  "atividade 1":
    "1. Variáveis e tipos de dados: Escreva um programa que declare duas variáveis, “nome” e “idade”, e as imprima em um console em uma frase que diga “Olá, meu nome é [nome] e eu tenho [idade] anos”.",
  "atividade 2":
    "2. Operadores: Crie um programa que solicite ao usuário dois números e exiba o button_atividade da soma, subtração, multiplicação e divisão desses números.",
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
    "10. Promises e Fetch API: Use a Fetch API para fazer uma chamada para uma API pública (como a API do JSONPlaceholder) e exibir os button_atividades no console.",
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
    div_pergunta.style.display = "flex"; // Configura o display como flex
    div_pergunta.style.flexDirection = "column"; // Coloca em coluna
    div_pergunta.style.alignItems = "center"; // Centraliza os itens horizontalmente
    div_pergunta.style.justifyContent = "center"; // Centraliza os itens verticalmente
    div_resposta.style.display = "flex"; // Configura o display como flex
    div_resposta.style.flexDirection = "column"; // Coloca em coluna
    div_resposta.style.alignItems = "center"; // Centraliza os itens horizontalmente
    div_resposta.style.justifyContent = "center"; // Centraliza os itens verticalmente
    // Verifica se a atividade existe no mapeamento e define o conteúdo
    if (atividades[button.textContent]) {
      div_pergunta.innerHTML = atividades[button.textContent]; // Define o conteúdo do div 'pergunta'

      if (div_resposta) {
        div_resposta.innerHTML = ""; // Limpa o conteúdo do div 'resposta'

        // Apenas chama a função para criar o formulário para a atividade correspondente
        var button_atividade =
          button.textContent === "atividade 1"
            ? respostaAtividade1()
            : button.textContent === "atividade 2"
            ? respostaAtividade2()
            : button.textContent === "atividade 3"
            ? respostaAtividade3()
            : button.textContent === "atividade 4"
            ? respostaAtividade4()
            : button.textContent === "atividade 5"
            ? respostaAtividade5()
            : button.textContent === "atividade 6"
            ? respostaAtividade6()
            : button.textContent === "atividade 7"
            ? respostaAtividade7()
            : button.textContent === "atividade 8"
            ? respostaAtividade8()
            : button.textContent === "atividade 9"
            ? respostaAtividade9()
            : button.textContent === "atividade 10"
            ? respostaAtividade10()
            : null;
        button.textContent = button_atividade;
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

    function respostaAtividade1() {
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
      div_resposta.appendChild(nomeLabel);
      div_resposta.appendChild(nomeInput);
      div_resposta.appendChild(br);
      div_resposta.appendChild(idadeLabel);
      div_resposta.appendChild(idadeInput);
      div_resposta.appendChild(br);
      div_resposta.appendChild(botao);
      div_resposta.appendChild(br);
      div_resposta.appendChild(mostraInputs);

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

      div_resposta.innerHTML =
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

      var botaoConfirmar = document.getElementById("confirmarButton");

      // Verifica se o botão foi encontrado
      if (!botaoConfirmar) {
        console.error("O botão confirmarButton não foi encontrado");
      } else {
        botaoConfirmar.addEventListener("click", function () {
          console.log("Botão clicar foi acionado");

          // Obtém os valores dos inputs como strings
          var valor1 = document.getElementById("numero1");
          var valor1input = valor1 ? valor1.value : null;
          var valor2 = document.getElementById("numero2");
          var valor2input = valor2 ? valor2.value : null;

          // Converte os valores para números usando Number()
          var numero1 = Number(valor1input);
          var numero2 = Number(valor2input);

          // Contas
          var soma = numero1 + numero2;
          var subt = numero1 - numero2;
          var mult = numero1 * numero2;
          var divi = numero1 / numero2;

          //atribui os valores
          document.getElementById("soma").textContent = soma;
          document.getElementById("subt").textContent = subt;
          document.getElementById("mult").textContent = mult;
          document.getElementById("divi").textContent = divi;
        });
      }
    }

    function respostaAtividade3() {
      div_resposta.innerHTML =
        "<div id='input_idade'><p>escreva aqui sua idade:</p>&nbsp;<input size='1' id='idade'></div>" +
        "<div id='sua_idade'>será que funciona?</div><br>" +
        "<button id='confirmar_button'>confirmar</button>";

      button = document.querySelector("#confirmar_button");
      input_idade = document.querySelector("#input_idade");
      input_idade.style.display = "flex"; //o padrão do flex-direction é row
      input_idade.style.alignItems = "center"; // Centraliza verticalmente

      button.addEventListener("click", function () {
        var idade = parseInt(document.getElementById("idade").value);

        if (isNaN(idade)) {
          document.querySelector("#sua_idade").textContent =
            "Por que você clicou no botão se nem colocou a idade ainda?";
          return; //interrompe a execução da função se a condição isNaN(idade) for verdadeira
        }

        var mensagem =
          idade >= 100
            ? "Impossivelmente velho"
            : idade >= 70
            ? "Que isso? Aí já é muito velho"
            : idade >= 57
            ? "Tá ficando idoso já"
            : idade >= 18
            ? "Você é maior de idade e aparentemente funciona mesmo"
            : "Você é menor de idade mesmo hein";

        document.querySelector("#sua_idade").textContent = mensagem;
      });
    }

    function respostaAtividade4() {
      // definição dos elementos
      var div1 = document.createElement("div");
      div1.setAttribute("id", "resposta_div");
      var div2 = document.createElement("div");
      var div3 = document.createElement("div");
      var primeiro_input = document.createElement("input");
      primeiro_input.setAttribute("id", "primeiro_input");
      primeiro_input.setAttribute("class", "inputs");
      primeiro_input.setAttribute("size", "1");
      var segundo_input = document.createElement("input");
      segundo_input.setAttribute("id", "segundo_input");
      segundo_input.setAttribute("class", "inputs");
      segundo_input.setAttribute("size", "1");
      var button = document.createElement("button");
      var space1 = document.createElement("span");
      var space2 = document.createElement("span");
      space1.innerHTML = "&nbsp;";
      space2.innerHTML = "&nbsp;";
      var paragrafo1 = document.createElement("p");
      var paragrafo2 = document.createElement("p");

      //estilos
      div2.style.justifyContent = "center"; // Centraliza horizontalmente
      div2.style.alignItems = "center"; // Centraliza verticalmente
      button.style.borderRadius = "50px";
      button.style.fontFamily = "Arial";
      button.style.backgroundColor = "blue";
      button.style.color = "white";

      // Definição do conteúdo escrito
      div2.innerHTML = "Serão mostrados os valores de&nbsp;";
      paragrafo1.innerHTML = "a&nbsp;";
      paragrafo2.innerHTML = " acima";

      div_resposta.appendChild(div1); // resposta

      div_resposta.appendChild(div2); // inputs
      div2.style.display = "flex";
      div2.style.flexDirection = "row";
      div2.classList.add("divs");

      div2.appendChild(primeiro_input);
      div2.appendChild(space1);
      div2.appendChild(paragrafo1);
      div2.appendChild(segundo_input);
      div2.appendChild(space2);
      div2.appendChild(paragrafo2);

      div_resposta.appendChild(div3); // botão
      div3.appendChild(button);
      button.textContent = "confirmar";

      button.addEventListener("click", confirmar);
      function confirmar() {
        var primeiro_numero = parseInt(
          document.querySelector("#primeiro_input").value
        );
        var segundo_numero = parseInt(
          document.querySelector("#segundo_input").value
        );

        // Limpa o conteúdo anterior
        document.querySelector("#resposta_div").textContent = "";

        // Inicializa a variável i com o primeiro número
        var i = primeiro_numero;
        while (i >= primeiro_numero && i <= segundo_numero) {
          document.querySelector("#resposta_div").textContent += i + " ";
          i++;
        }
      }
    }

    function respostaAtividade5() {
      div_resposta.innerHTML =
        "<div id='resposta_atv5'>a resposta fica aqui</div><br>" +
        "<div class='inputs'><p>primeiro número: </p>&nbsp;<input size='1'  id = 'input1'></div>" +
        "<div class='inputs'><p>segundo número: </p>&nbsp;<input size='1'  id = 'input2'></div>" +
        "<button id = 'button'>confirmar</button>";
      div_resposta.style.display = "flex";
      div_resposta.style.flexDirection = "column";
      div_resposta.style.alignItems = "center";
      div_resposta.style.justifyContent = "center";

      inputs = document.querySelectorAll(".inputs");
      inputs.forEach(function (input) {
        input.style.marginBottom = "20px";
        input.style.display = "flex";
        input.style.flexDirection = "row";
        input.style.alignItems = "center";
        input.style.justifyContent = "center";
        input.style.width = "50vw";
        input.style.height = "5%";
      });

      button_atv5 = document.querySelector("#button");
      button_atv5.addEventListener("click", function () {
        function soma_atv5(numero1, numero2) {
          var numero1 = parseInt(document.querySelector("#input1").value);
          var numero2 = parseInt(document.querySelector("#input2").value);
          return numero1 + numero2;
        }
        document.getElementById("resposta_atv5").textContent =
          "a resposta é " + soma_atv5();
      });
    }

    function respostaAtividade6() {
      div_resposta.innerHTML =
        "<div id='linha'>" +
        "<div class='coluna' id='coluna1'>" +
        "<div class='inputs'><p>primeira fruta: </p>&nbsp;<input size='10' class='frutas' id = 'input1'></div>" +
        "<div class='inputs'><p>segunda fruta: </p>&nbsp;<input size='10' class='frutas' id = 'input2'></div>" +
        "<div class='inputs'><p>terceira fruta: </p>&nbsp;<input size='10' class='frutas' id = 'input3'></div>" +
        "</div>" +
        "<div class='coluna' id = 'coluna2'>" +
        "<div class='inputs'><p>quarta fruta: </p>&nbsp;<input size='10' class='frutas' id = 'input4'></div>" +
        "<div class='inputs'><p>quinta fruta: </p>&nbsp;<input size='10' class='frutas' id = 'input5'></div>" +
        "<div class='inputs'><p>sexta fruta: </p>&nbsp;<input size='10' class='frutas' id = 'input6'></div>" +
        "</div>" +
        "</div>" +
        "<button id = 'button'>mostrar lista</button>";

      div_resposta.style.display = "flex";
      div_resposta.style.flexDirection = "column";
      div_resposta.style.alignItems = "center";
      div_resposta.style.justifyContent = "center";

      var colunas = document.querySelector(".coluna");
      colunas.style.display = "flex";
      colunas.style.flexDirection = "column";
      colunas.style.alignItems = "center";
      colunas.style.justifyContent = "center";

      var linha = document.querySelector("#linha");
      linha.style.display = "flex";
      linha.style.flexDirection = "linha";

      inputs = document.querySelectorAll(".inputs");
      inputs.forEach(function (input) {
        input.style.marginBottom = "20px";
        input.style.display = "flex";
        input.style.flexDirection = "row";
        input.style.alignItems = "center";
        input.style.justifyContent = "center";
        input.style.width = "50vw";
        input.style.height = "2vh";
      });

      button_atv6 = document.querySelector("#button");
      button_atv6.addEventListener("click", function () {
        var frutasElementos = document.querySelectorAll(".frutas");
        var frutasArray = [];
        frutasElementos.forEach(function (frutaElemento) {
          frutasArray.push(frutaElemento.value);
          linha.innerHTML =
            "a primeira fruta é&nbsp;" +
            frutasArray[0] +
            ", a segunda é&nbsp;" +
            frutasArray[1] +
            ", a terceira é&nbsp;" +
            frutasArray[2] +
            ", a quarta é&nbsp;" +
            frutasArray[3] +
            ", a quinta é&nbsp;" +
            frutasArray[4] +
            "&nbsp;e a sexta é&nbsp;" +
            frutasArray[5];
        });
      });
    }

    function respostaAtividade7() {
      div_resposta.innerHTML =
        "<div id='linha'>" +
        "<div class='coluna' id='coluna1'>" +
        "<div class='inputs'><p>Título: </p>&nbsp;<input size='30' class='livro' id='input_titulo'></div>" +
        "<div class='inputs'><p>Autor: </p>&nbsp;<input size='30' class='livro' id='input_autor'></div>" +
        "</div>" +
        "<div class='coluna' id='coluna2'>" +
        "<div class='inputs'><p>Número de Páginas: </p>&nbsp;<input size='10' class='livro' id='input_paginas'></div>" +
        "<div class='inputs'><p>Editora: </p>&nbsp;<input size='30' class='livro' id='input_editora'></div>" +
        "</div>" +
        "</div>" +
        "<button id='button'>mostrar lista</button>";

      div_resposta.style.display = "flex";
      div_resposta.style.flexDirection = "column";
      div_resposta.style.alignItems = "center";
      div_resposta.style.justifyContent = "center";

      var colunas = document.querySelector(".coluna");
      colunas.style.display = "flex";
      colunas.style.flexDirection = "column";
      colunas.style.alignItems = "center";
      colunas.style.justifyContent = "center";

      var linha = document.querySelector("#linha");
      linha.style.display = "flex";
      linha.style.flexDirection = "linha";

      inputs = document.querySelectorAll(".inputs");
      inputs.forEach(function (input) {
        input.style.marginBottom = "20px";
        input.style.display = "flex";
        input.style.flexDirection = "row";
        input.style.alignItems = "center";
        input.style.justifyContent = "center";
        input.style.width = "50vw";
        input.style.height = "2vh";
      });

      button_atv7 = document.querySelector("#button");
      button_atv7.addEventListener("click", function () {
        var titulo = document.querySelector("#input_titulo").value;
        var autor = document.querySelector("#input_autor").value;
        var numero_de_paginas = document.querySelector("#input_paginas").value;
        var editora = document.querySelector("#input_editora").value;

        var livro = {
          titulo: titulo,
          autor: autor,
          paginas: numero_de_paginas,
          editora: editora,
        };

        inputs = document.querySelectorAll(".livro");
        inputs.forEach(function (input) {
          input.value = "";
        });

        div_resposta.innerHTML =
          "Este livro contém o título de&nbsp;'" +
          livro.titulo +
          "', o autor é&nbsp;" +
          livro.autor +
          ", tem&nbsp;" +
          livro.paginas +
          "&nbsp;páginas, e a editora é &nbsp;" +
          livro.editora +
          ".";
      });
    }

    function respostaAtividade8() {
      div_resposta.innerHTML =
        "<button id='button'>tá aqui seu botão,<br> aqui ele aqui ó</button>";

      div_resposta.style.display = "flex";
      div_resposta.style.flexDirection = "column";
      div_resposta.style.alignItems = "center";
      div_resposta.style.justifyContent = "center";

      button_atv8 = document.querySelector("#button");
      button_atv8.addEventListener("click", function () {
        alert("Você clicou nesse botão grandão aí, e agora?");
      });
    }

    function respostaAtividade9() {
      div_resposta.innerHTML =
        "<div id='div_texto'>&nbsp;<textarea id='texto'></textarea></div><br><br><br>" +
        "<button id='button_atv9'>confirmar</button>";

      button_atv9 = document.querySelector("#button_atv9");
      button_atv9.style.borderRadius = "50px";
      button_atv9.style.fontFamily = "Arial";
      button_atv9.style.backgroundColor = "blue";
      button_atv9.style.color = "white";

      var div_texto = document.querySelector("#div_texto");
      div_texto.style.height = "100%";
      div_texto.style.width = "100%";

      var texto = document.querySelector("#texto");
      texto.style.height = "100%";
      texto.style.width = "100%";

      texto.style.textAlign = "left";
      texto.style.verticalAlign = "top";

     

      button_atv9.addEventListener("click", function () {
        var guarda_texto = [document.querySelector("#texto").value];
        
        var frasesCapitalizadas = guarda_texto.map(function(frase) {
          return frase.split(' ').map(function(palavra) {
            return palavra.charAt(0).toUpperCase() + palavra.slice(1).toLowerCase();
          }).join(' ');
        });
        
        div_texto.innerHTML = frasesCapitalizadas



      });
    }
  });
});
