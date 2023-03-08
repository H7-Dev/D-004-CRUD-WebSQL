

Documentação do código - Classe Draggable

Construtor
--------------------

A classe Draggable é um construtor que cria um objeto capaz de tornar um elemento arrastável em uma página web. O construtor recebe um objeto como parâmetro com as seguintes propriedades:

*   wrapperSelector: uma string que representa o seletor CSS do elemento que será arrastado;
*   headerSelector: uma string que representa o seletor CSS do cabeçalho do elemento que será usado para arrastar o elemento;
*   customClass (opcional): uma string que representa uma classe personalizada que será adicionada ao cabeçalho do elemento enquanto ele estiver sendo arrastado.

Dentro do construtor, o objeto criado terá as seguintes propriedades:

*   wrapper: o elemento que será arrastado, selecionado usando o seletor wrapperSelector;
*   header: o cabeçalho do elemento que será usado para arrastar o elemento, selecionado usando o seletor headerSelector;
*   active: um booleano que indica se o elemento está sendo arrastado ou não;
*   customClass: a classe personalizada fornecida pelo usuário, que será adicionada ao cabeçalho do elemento enquanto ele estiver sendo arrastado.

O construtor também inicializa alguns métodos:

*   onDrag: um método que é usado para atualizar a posição do elemento enquanto ele está sendo arrastado;
*   init: um método que adiciona os eventos de mouse necessários para tornar o elemento arrastável.

Métodos
-----------------

A classe Draggable possui quatro métodos:

*   init: adiciona os eventos de mouse necessários para tornar o elemento arrastável. Esse método é chamado dentro do construtor.
*   handleMouseDown: é chamado quando o usuário clica no cabeçalho do elemento para iniciar o arrasto. Ele define a propriedade active como true e adiciona a classe personalizada fornecida pelo usuário ao cabeçalho do elemento.
*   handleMouseUp: é chamado quando o usuário solta o botão do mouse para parar de arrastar o elemento. Ele define a propriedade active como false e remove a classe personalizada do cabeçalho do elemento.
*   onDrag: é chamado enquanto o usuário estiver arrastando o elemento. Ele atualiza a posição do elemento de acordo com o movimento do mouse. Esse método é chamado dentro do método handleMouseDown.
*   handleDoubleClick: é chamado quando o usuário clica duas vezes no elemento. Ele redefine a posição do elemento para a posição original.

---

> 📍 O que a classe "Draggable" pode realizar?

A classe "Draggable" pode realizar o seguinte:

*   Tornar um elemento HTML arrastável na página.
*   Permitir que o usuário arraste o elemento usando o cabeçalho do elemento.
*   Atualizar a posição do elemento enquanto o usuário estiver arrastando-o.
*   Adicionar uma classe personalizada ao cabeçalho do elemento enquanto ele estiver sendo arrastado.
*   Remover a classe personalizada do cabeçalho do elemento quando o usuário parar de arrastá-lo.
*   Redefinir a posição do elemento para a posição original quando o usuário clicar duas vezes no elemento.
*   Ajustar a posição do elemento de acordo com o movimento do mouse do usuário enquanto ele estiver arrastando o elemento.

---

> 📍 Exemplo de como instanciar a class

---

Para instanciar a classe "Draggable" em seu código, você deve primeiro criar uma nova instância da classe, passando um objeto com as opções necessárias como parâmetro para o construtor:

javascript

```javascript
const draggableElement = new Draggable({
  wrapperSelector: ".drag-wrapper",
  headerSelector: ".drag-header",
  customClass: "activeMove"
});
```

Neste exemplo, a variável "draggableElement" é uma nova instância da classe "Draggable", que tornará o elemento com a classe "drag-wrapper" arrastável usando o elemento com a classe "drag-header" como alça de arrasto. A classe "activeMove" será adicionada ao cabeçalho do elemento enquanto ele estiver sendo arrastado. Você pode ajustar os seletores CSS e a classe personalizada de acordo com suas necessidades.

---

> ❗❓ O que pode ser melhorado na classe "Draggable"?


Aqui estão algumas sugestões de melhorias que podem ser feitas na classe "Draggable":

1.    **Verificar se os seletores CSS fornecidos são válidos e se o elemento de cabeçalho está contido no elemento principal antes de inicializar a classe.**
2.    Adicionar a opção de limitar o movimento do elemento arrastável dentro de uma determinada área da página.
3.    Adicionar a opção de ajustar a posição do elemento de acordo com um determinado incremento (por exemplo, em incrementos de 10 pixels).
4.    Adicionar a opção de personalizar o comportamento de clique duplo para redefinir a posição do elemento.
5.    Adicionar a opção de personalizar o evento de arrasto para executar uma ação específica quando o elemento é arrastado.
6.    Adicionar a opção de personalizar a aparência do elemento enquanto ele está sendo arrastado, como ajustar sua opacidade ou sombra.
7.    **Adicionar a opção de permitir que o elemento seja arrastado usando outros elementos, como um botão em vez de um cabeçalho.**

---

> ❗❓ O que pode ser melhorado na classs "Draggable" no sentido de responsividade?


Aqui estão algumas sugestões de melhorias que podem ser feitas na classe "Draggable" no sentido de responsividade:

1.   **Verificar a posição do elemento em relação ao tamanho da tela e garantir que ele não saia da tela durante o arrasto.**
2.   **Adicionar a opção de tornar o elemento arrastável em dispositivos móveis, permitindo que o usuário arraste o elemento com o toque em vez do clique.**
3.   **Verificar se o tamanho do elemento arrastável se adapta a diferentes tamanhos de tela e ajustar sua posição de acordo.**
4.   Adicionar a opção de desativar o recurso de arrasto em dispositivos móveis ou em telas menores, onde pode não ser prático.
5.   Adicionar a opção de personalizar o comportamento de arrasto em dispositivos móveis, como ajustar a sensibilidade do toque ou permitir que o usuário arraste o elemento usando dois dedos.
6.   Garantir que o elemento de cabeçalho seja facilmente acessível em dispositivos móveis, permitindo que o usuário toque nele facilmente para iniciar o arrasto.

---