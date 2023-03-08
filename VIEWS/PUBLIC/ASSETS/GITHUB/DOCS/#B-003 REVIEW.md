> Boa tarde

Boa tarde! Em que posso ajudá-lo(a)?

> descreva o código const linhas = document.querySelectorAll('table tbody tr'); console.log(linhas) linhas.forEach(linha => { linha.addEventListener('click', () => { // código a ser executado quando a linha for clicada console.log("Sucesso") }); });

O código começa selecionando todas as linhas (elementos 'tr') dentro do corpo da tabela (elemento 'tbody') utilizando o método 'querySelectorAll' do objeto 'document' e armazenando o resultado na variável 'linhas'.

Em seguida, o código adiciona um 'event listener' de clique a cada uma das linhas utilizando o método 'forEach' para percorrer cada elemento da lista 'linhas'. O 'event listener' é adicionado por meio do método 'addEventListener', que recebe dois argumentos: o primeiro é o tipo de evento que se deseja escutar (no caso, 'click') e o segundo é uma função anônima a ser executada quando o evento ocorrer.

Dentro da função anônima é possível escrever o código que deve ser executado quando o evento 'click' acontecer. No exemplo dado, o código simplesmente imprime a mensagem "Sucesso" no console do navegador. Então, quando o usuário clicar em qualquer uma das linhas da tabela, a mensagem "Sucesso" será impressa no console.

> faça com que o código funcione para "tr" criado dinamicamente após o carregamento do DOM

Para fazer o código funcionar para as linhas criadas dinamicamente, é preciso utilizar a técnica conhecida como "delegação de eventos". Isso significa que, em vez de adicionar o 'event listener' a cada linha individualmente, adicionamos um único 'event listener' ao elemento pai (no caso, a tabela) e verificamos qual elemento filho (no caso, a linha) foi clicado.

Para fazer isso, podemos utilizar o método 'addEventListener' no elemento pai (no caso, a tabela) e especificar o tipo de evento que queremos escutar (no caso, 'click'). Em seguida, dentro da função anônima que será executada quando o evento ocorrer, verificamos se o elemento clicado é uma linha da tabela, utilizando a propriedade 'target' do objeto 'event'.

O código atualizado ficaria assim:

javascript

```javascript
const tabela = document.querySelector('table tbody');

tabela.addEventListener('click', (event) => {
  const linha = event.target.closest('tr');

  if (linha) {
    // código a ser executado quando a linha for clicada
    console.log("Sucesso");
  }
});
```

Neste código, criamos uma variável 'tabela' que armazena o elemento 'tbody' da tabela. Em seguida, adicionamos um 'event listener' de clique a essa tabela utilizando o método 'addEventListener'.

Dentro da função anônima que será executada quando o evento ocorrer, utilizamos a propriedade 'target' do objeto 'event' para obter o elemento que foi clicado. Em seguida, utilizamos o método 'closest' desse elemento para encontrar o elemento pai mais próximo que seja uma linha da tabela ('tr').

Se o elemento clicado for uma linha da tabela, o código dentro do 'if' será executado. Neste caso, estamos apenas imprimindo a mensagem "Sucesso" no console, mas você pode substituir esse código pelo que for necessário para a sua aplicação.

> imprimir no console.log cada linha que foi cliclada

Para imprimir no console cada linha que foi clicada, basta substituir a linha `console.log("Sucesso");` pelo seguinte código:

javascript

```javascript
console.log(linha);
```

Dessa forma, a cada clique em uma linha da tabela, será impresso no console o elemento HTML que representa essa linha. Se você quiser exibir algum conteúdo específico da linha (como o texto de uma célula, por exemplo), pode acessar as propriedades do objeto 'linha' para isso. Por exemplo:

javascript

```javascript
console.log(linha.cells[0].textContent);
```

Neste exemplo, estamos acessando a propriedade 'cells' do objeto 'linha' para obter uma lista de todas as células daquela linha. Em seguida, estamos acessando a primeira célula (índice 0) e obtendo o seu conteúdo de texto utilizando a propriedade 'textContent'.

> implemente esses trechos ao código

Para implementar os trechos de código que você solicitou, podemos fazer as seguintes modificações:

1.  Para adicionar uma classe 'selecionada' à linha que foi clicada, podemos modificar o código dentro do 'if' da seguinte forma:

csharp

```csharp
linha.classList.add('selecionada');
```

Dessa forma, a classe 'selecionada' será adicionada à linha que foi clicada. Para que isso funcione, é preciso ter definido previamente no CSS a aparência da classe 'selecionada', por exemplo:

css

```css
.selecionada {
  background-color: yellow;
}
```

2.  Para remover a classe 'selecionada' das outras linhas quando uma nova linha é selecionada, podemos adicionar o seguinte código antes do 'if':

`t`