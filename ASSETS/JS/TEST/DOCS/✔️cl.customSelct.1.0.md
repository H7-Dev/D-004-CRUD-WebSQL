
---

A classe `customSelc` representa um seletor personalizado que pode ser usado para criar uma lista suspensa (dropdown) com opções personalizadas.

Construtor
----------

O construtor da classe `customSelc` recebe três parâmetros:

*   `btnOptsSelector`: um seletor de string que representa o botão que acionará a lista suspensa;
*   `ulOptionsSelector`: um seletor de string que representa a lista suspensa de opções;
*   `liOptsSelector`: um seletor de string que representa as opções de lista suspensa.

O construtor inicializa as seguintes propriedades:

*   `btnOptsList`: um objeto NodeList que contém todos os elementos do DOM correspondentes ao seletor `btnOptsSelector`;
*   `ulOptionsList`: um objeto NodeList que contém todos os elementos do DOM correspondentes ao seletor `ulOptionsSelector`;
*   `liOptsSelector`: uma string que contém o seletor `liOptsSelector`.

O construtor também verifica se os elementos foram encontrados no DOM. Se algum elemento não foi encontrado, ele exibe uma mensagem de erro no console.

O construtor define um ouvinte de evento de clique em cada botão e em cada opção da lista suspensa. Quando um usuário seleciona uma opção, o método `onOptionSelected` é chamado. Quando um usuário clica no botão, o método `onButtonClicked` é chamado. Quando um usuário clica em qualquer lugar fora da lista suspensa, o método `onDocumentClicked` é chamado.

Métodos
-------

### `onOptionSelected`

O método `onOptionSelected` recebe três parâmetros:

*   `btnOpts`: o botão que acionou a lista suspensa;
*   `liOpts`: a opção selecionada na lista suspensa;
*   `ulOptions`: a lista suspensa.

O método atualiza o texto do botão para o texto da opção selecionada e atualiza o valor do campo de entrada correspondente com o valor da opção selecionada. Ele remove a classe `show` da lista suspensa e a classe `active` do botão.

### `onButtonClicked`

O método `onButtonClicked` recebe dois parâmetros:

*   `btnOpts`: o botão que acionou a lista suspensa;
*   `ulOptions`: a lista suspensa.

O método determina a largura do botão e define a posição e a largura da lista suspensa. Se a lista suspensa já estiver visível, ele a esconde e remove a classe `active` do botão. Se a lista suspensa ainda não estiver visível, ele a exibe e adiciona a classe `active` ao botão.

### `onDocumentClicked`

O método `onDocumentClicked` recebe três parâmetros:

*   `event`: o objeto de evento de clique;
*   `btnOpts`: o botão que acionou a lista suspensa;
*   `ulOptions`: a lista suspensa.

O método verifica se o clique ocorreu dentro ou fora da lista suspensa. Se o clique ocorreu fora da lista suspensa, ele a esconde e remove a classe `active` do botão.

---

> 📍 O que a classe "customSelc" pode realizar.


A classe "customSelc" cria um menu suspenso personalizado (ou "dropdown") para um ou mais botões na página web. Quando um botão é clicado, a classe exibe uma lista de opções que o usuário pode escolher. A classe é capaz de lidar com múltiplos botões e listas de opções, que podem ser especificados pelos seletores passados para o construtor da classe.

A classe "customSelc" também é responsável por atualizar o texto do botão selecionado e o valor do input associado com o valor da opção selecionada pelo usuário. Além disso, a classe adiciona e remove classes CSS para estilização do botão e da lista de opções. A classe lida com eventos de clique no botão, nas opções da lista e no documento para controlar a exibição e ocultação da lista de opções.

Em caso de falha na seleção dos elementos HTML especificados pelos seletores passados para o construtor, a classe emite mensagens de erro no console do navegador.

---

> 📍 Exemplo de como instanciar a class


Para instanciar a classe `customSelc`, é necessário criar um novo objeto usando o operador `new` e passar três seletores como parâmetros para o construtor da classe. O primeiro seletor deve corresponder ao botão que aciona a lista de opções. O segundo seletor deve corresponder à lista de opções que será exibida quando o botão for clicado. O terceiro seletor deve corresponder a cada opção da lista.

Por exemplo, para instanciar a classe `customSelc` para um botão com a classe `my-btn`, uma lista de opções com a classe `my-options` e opções com a classe `my-option`, podemos fazer o seguinte:

javascript

```javascript
const dropdown = new customSelc('.my-btn', '.my-options', '.my-option');
```

Isso criará uma nova instância da classe `customSelc` para o botão, a lista de opções e as opções especificadas pelos seletores.

---

> ❗❓ O que pode ser melhorado na classs "customSelc"?


Aqui estão algumas sugestões de melhorias que podem ser feitas na classe "customSelc":

1.  Permitir que a classe seja configurada para ativar a exibição da lista de opções em resposta a eventos diferentes do clique do botão, como o hover do mouse ou o pressionamento de uma tecla. Isso pode tornar a classe mais flexível e adaptável às necessidades de diferentes projetos.

2.  Melhorar a acessibilidade da classe, permitindo que ela seja usada com teclado ou outras formas de entrada não-mouse. Por exemplo, adicionar suporte para focar as opções da lista usando a tecla Tab e selecionar opções usando a tecla Enter.

3.  Adicionar opções de personalização adicionais para estilos de botão e lista de opções, permitindo que desenvolvedores personalizem facilmente a aparência da classe para se adequar ao design de suas páginas.

4.  Lidar com a seleção de opções de lista usando um evento diferente de "click". Por exemplo, a classe poderia lidar com seleções de opções quando um evento "change" é emitido pelo input associado.

5.  Adicionar suporte para exibir múltiplas opções selecionadas em um botão de menu suspenso, permitindo que o usuário selecione várias opções da lista e as exiba no botão de menu suspenso.


---

> ❗❓ O que pode ser melhorado na classs "customSelc" no sentido de responsividade (quanto ao posicionamento do lista)?

---

Aqui estão algumas sugestões de melhoria que podem ser feitas na classe "customSelc" para torná-la mais responsiva em relação ao posicionamento da lista de opções:

1.  Tornar a posição da lista de opções adaptável ao tamanho da tela. Isso pode ser feito usando consultas de mídia para ajustar a posição da lista de opções com base no tamanho da tela em que a página está sendo exibida.

2.  Permitir que a posição da lista de opções seja personalizada pelo desenvolvedor, permitindo que ela seja posicionada à esquerda, direita, acima ou abaixo do botão de seleção com base nas necessidades de layout da página.

3.  Permitir que a largura da lista de opções seja ajustada automaticamente com base no tamanho do conteúdo, em vez de ser definida manualmente pelo desenvolvedor. Isso pode ser feito usando JavaScript para determinar o tamanho do conteúdo da lista de opções e ajustar a largura da lista de opções de acordo.

4.  Adicionar suporte para opções de exibição de lista de opções em tela cheia para dispositivos móveis. Isso pode ser feito criando uma versão de tela cheia da lista de opções que ocupa toda a tela quando o usuário toca no botão de seleção em um dispositivo móvel.

5. ❗ Permitir que a posição da lista de opções seja ajustada automaticamente com base na posição do botão de seleção na página. Isso pode ser feito usando JavaScript para determinar a posição do botão de seleção e ajustar a posição da lista de opções de acordo❗.


---