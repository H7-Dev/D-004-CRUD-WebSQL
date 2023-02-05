
> ### **🚧⛔ 01.03 [-g save] alternaClasses (classesToggler)**
> #### **Descrição**
>
>     A função "alternaClasses" é um construtor que cria objetos para alternar a exibição de elementos na página HTML.     Quando uma instância da função é criada, ela recebe um objeto de opções como argumento, que permite personalizar     diversos aspectos da funcionalidade.
>
>     As seguintes propriedades do objeto de opções são usadas para personalizar a funcionalidade:
>
>
>     ✔️ btnSelc: seletor de botão para alternar a exibição dos elementos.
>     ✔️ elementsToToggle: uma matriz de seletores para os elementos que devem ser alternados.
>     ✔️ activeClass: nome da classe a ser aplicada aos elementos exibidos.
>     ✔️ disabledClass: nome da classe a ser aplicada aos elementos escondidos.
>     ✔️ animeClass: nome da classe de animação a ser aplicada aos elementos exibidos.
>     ✔️ animeOutClass: nome da classe de animação a ser aplicada aos elementos escondidos.
>     ✔️ delay: atraso em milissegundos antes de aplicar a classe disabledClass aos elementos escondidos.
>
>     A função também define uma função interna "toggleDisplay", que é responsável por alternar a exibição dos elementos.     Ela verifica se cada elemento tem a classe "disabledClass" e, se tiver, remove essa classe e adiciona as classes     "activeClass" e "animeClass". Se não tiver, a função adiciona a classe "animeOutClass" e, após um atraso     especificado pela opção "delay", remove as classes "activeClass", "animeClass" e "animeOutClass" e adiciona a     classe "disabledClass".
>
>     Se um seletor de botão é fornecido na opção "btnSelc", um event listener é adicionado ao botão para chamar a função     "toggleDisplay" quando o botão é clicado. Além disso, a função também define um método "toggle", que permite     alternar a exibição dos elementos programaticamente.
>
>
>    ![🚧⛔ 01 03  -g save  options animeOutClass](https://user-images.githubusercontent.com/93455937/216815214-11ed7140-6d8d-4793-b007-e3732522f732.gif)
>
>#### ***✍️Exemplo de código JS***
> ``` JS
> // p.alternaClasses.1.0.0.js
> var alternaClasses = function(options) {
>     options = options || {};
>     var btnSelc = document.querySelector(options.btnSelc || ".btnSelc");
>     var elementsToToggle = [];
>     options.elementsToToggle.forEach(function(element) {
>       var elements = document.querySelectorAll(element);
>       elementsToToggle = elementsToToggle.concat([].slice.call(elements));
>     });
>     var activeClass = options.activeClass || "active";
>     var disabledClass = options.disabledClass || "disabled";
>     var animeClass = options.animeClass || "anime";
>     var animeOutClass = options.animeOutClass || "animeOut";
>     var delay = options.delay || 1100;
>
>     var toggleDisplay = function(elements) {
>       for (var i = 0; i < elements.length; i++) {
>         if (elements[i] && elements[i].classList) {
>           if (elements[i].classList.contains(disabledClass)) {
>             elements[i].classList.remove(disabledClass);
>             elements[i].classList.add(activeClass);
>             elements[i].classList.add(animeClass);
>           } else {
>             elements[i].classList.add(animeOutClass);
>             (function(index) {
>               setTimeout(function() {
>                 if (elements[index] && elements[index].classList) {
>                   elements[index].classList.remove(activeClass);
>                   elements[index].classList.remove(animeClass);
>                   elements[index].classList.remove(animeOutClass);
>                   elements[index].classList.add(disabledClass);
>                 }
>               }, delay);
>             })(i);
>           }
>         }
>       }
>     };
>
>     if (btnSelc) {
>       btnSelc.addEventListener("click", function() {
>         toggleDisplay(elementsToToggle);
>       });
>     }
>
>     this.toggle = function() {
>       toggleDisplay(elementsToToggle);
>     };
>   };
>
>  // Exemplo básico de como instânciar
>   var alternaClasses = new alternaClasses({
>     // btnSelc: ".customBtn",
>     elementsToToggle: ["td.action", ".thActions"],
>     // activeClass: ".customAtivado",
>     // disabledClass: "customDesativado",
>     // animeClass: "customAnime",
>     // animeOut: "customAnimeOut",
> })
> alternaClasses.toggle()
>
>
> // Neste exemplo, estamos criando uma nova instância da função "alternaClasses" e passando um objeto de opções como argumento. O objeto de opções especifica que o botão para alternar a exibição dos elementos será selecionado pelo ID "toggleBtn", que os elementos a serem alternados serão selecionados pelo seletor ".tableRow", e que as classes "rowShown" e "rowHidden" serão usadas para exibir ou esconder os elementos, respectivamente. Além disso, as classes "fadeIn" e "fadeOut" serão usadas para animar a entrada e saída dos elementos, respectivamente, e o atraso antes de esconder os elementos será de 500 milissegundos.
> var toggleOptions = {
>   btnSelc: "#toggleBtn",
>   elementsToToggle: [".tableRow"],
>   activeClass: "rowShown",
>   disabledClass: "rowHidden",
>   animeClass: "fadeIn",
>   animeOutClass: "fadeOut",
>   delay: 500
> };
> var alternaClasses = new alternaClasses(toggleOptions);
> // A instância da função é armazenada na variável "alternaClasses". Você pode chamar o método "toggle" nessa instância a qualquer momento para alternar a exibição dos elementos programaticamente.
>
> ```
>

>#### ***✍️Exemplo de código SCSS***
> ``` SCSS
> *,
> *::before,
> *::after {
>     margin: 0;
>     padding: 0;
>     box-sizing: border-box;
>     // NOTE[id=nota-teste]
> }
>
>
> // * define o css raiz do html
> :root {
>     font-family: 'Segoe UI';
>     font-family: system-ui, -apple-system, -apple-system-font, 'Segoe UI', 'Roboto', sans-serif;
>     margin: 0;
>     padding: 0;
> }
>
> html {
>     // overflow: hidden;
>     touch-action: manipulation;
>
>     // ! REVIEW #L-001 Reduced Motion Media Query
>     // TODO ✔️ Questão resolvido e NÃO compreendida
>     // LINK https://alvarotrigo.com/blog/sticky-navbar/
>     scroll-behavior: smooth;
>
> }
>
> body {
>     background-color: red;
>     padding: 4px;
>     // background-image: linear-gradient(to bottom, #F7F7F7 2%, #ffffff 51%);
>     height: 100vh;
>     width: 100%;
>
>     display: flex;
>     align-items: center;
>     overflow: hidden;
> }
>
> div.crud {
>     background-color: #F4F4F4;
>     padding: 5px 10px;
>     height: 100%;
>     width: 100%;
>
>     display: grid;
>     gap: 5px;
>     grid-template-rows: auto auto 1fr auto;
>     grid-template-rows: 0.1fr .1fr 1fr .1fr;
>     grid-template-columns: 1fr;
>
>
>     >div.header {
>         background-color: #F8F8F8;
>
>         >span.titulo {
>             color: #F26B6B;
>             font-size: 2.1rem;
>             font-family: DosisLight, 'Segoe UI', sans-serif;
>             display: grid;
>             align-items: flex-end;
>         }
>
>         >span.subtitulo {
>             color: #003C8C;
>             font-size: 1rem;
>             font-family: "JosefinSansRegular", "OpenSansSemiBold", "Segoe UI", sans-serif;
>             letter-spacing: normal;
>             font-weight: normal;
>         }
>     }
>
>     >nav {
>         display: grid;
>         gap: 14px;
>         grid-template-columns: auto auto auto 1fr;
>
>         grid-auto-flow: column;
>         align-content: center;
>         align-items: center;
>         justify-content: end;
>
>         >span.spTodos,
>         span.spMasculino,
>         span.spFemenino {
>             color: crimson;
>             font-size: 1rem;
>             font-family: "JosefinSansRegular", "OpenSansSemiBold", "Segoe UI", sans-serif;
>             letter-spacing: normal;
>             font-weight: normal;
>             border-bottom: 2px solid #003C8C;
>         }
>
>         >label.in_serch {
>             background-color: #F0F0F0;
>             background-color: #00000003;
>             padding: 4px 6px;
>             height: fit-content;
>             width: 100%;
>             display: grid;
>             gap: 4px;
>             grid-template-columns: auto 1fr auto;
>             border-bottom: 1px solid #0000;
>             border-radius: 8px;
>             border: 1px solid rgb(0 0 0 / 2%);
>             box-shadow: 0px 1px 3px 0px rgba(0, 60, 140, 0.0);
>
>             &:hover {
>                 background-color: rgba(0, 0, 0, 0.03);
>                 border: 1px solid rgb(0 0 0 / 3%);
>             }
>
>             &:active {
>                 background-color: rgba(0, 0, 0, 0.03);
>                 border: 1px solid rgba(0 61 140 / 4%);
>
>             }
>
>             &:focus-within {
>                 background-color: rgba(0, 0, 0, 0.03);
>                 border: 1px solid rgb(0 61 140 / 5%);
>             }
>
>             >button {
>                 color: tomato;
>                 background-color: transparent;
>                 outline: none;
>                 border: none;
>
>                 >svg {
>                     fill: #003c8c;
>                     height: 12pt;
>                 }
>             }
>
>             >input {
>                 font-size: 0.8rem;
>                 font-family: 'OpenSansSemiBold', 'Segoe UI', sans-serif;
>
>                 color: #003c8c;
>                 // background-color: gainsboro; /* desktop*/
>                 // background-color: #f5f6fa; /* mobile */
>                 background-color: transparent;
>
>                 padding: 0.2rem 0.1rem;
>                 width: 100%;
>                 border: none;
>                 outline: none;
>                 border-radius: 4px;
>
>                 &::placeholder {
>                     /* Chrome, Firefox, Opera, Safari 10.1+ */
>                     font-size: 0.8rem;
>                     font-family: 'Open Sans Regular', 'Segoe UI', sans-serif;
>                     color: #b9babe;
>                     color: #003c8c;
>                     opacity: 1;
>                     /* Firefox */
>                 }
>             }
>         }
>
>         >label.in_marcador,
>         .in_assoc,
>         .in_temas {
>             background-color: #0000;
>             padding: 4px 6px;
>             height: fit-content;
>             min-width: 150px;
>             max-width: 150px;
>             display: grid;
>             gap: 4px;
>             grid-auto-flow: row;
>             // grid-template-rows: auto 1fr;
>             align-items: center;
>
>             border-bottom: 1px solid rgba(0, 0, 0, 0);
>             border-radius: 8px;
>
>             &:hover {
>                 background-color: #F0F0F0;
>             }
>
>             &:active {
>                 background-color: #F0F0F0;
>             }
>
>             &:focus {
>                 background-color: #F0F0F0;
>             }
>
>             &:focus-within {
>                 background-color: #F0F0F0;
>             }
>
>
>             >span {
>                 width: 100%;
>                 color: #003c8c;
>                 font-size: .95rem;
>                 font-family: OpenSansRegular, 'Segoe UI', sans-serif;
>
>             }
>
>             // ANCHOR input
>             >input {
>                 font-size: 0.8rem;
>                 font-family: 'OpenSansSemiBold', 'Segoe UI', sans-serif;
>
>                 color: #707277;
>                 background-color: transparent;
>
>                 padding: 0.2rem 0.1rem;
>                 width: 100%;
>                 border: none;
>                 outline: none;
>                 border-radius: 4px;
>
>                 &::placeholder {
>                     /* Chrome, Firefox, Opera, Safari 10.1+ */
>                     font-size: 0.8rem;
>                     font-family: 'Open Sans Regular', 'Segoe UI', sans-serif;
>                     color: #b9babe;
>                     color: #003c8c;
>                     opacity: 1;
>                     /* Firefox */
>                 }
>             }
>
>             // ANCHOR textarea
>             >textarea {
>                 font-size: .95rem;
>                 font-family: OpenSansRegular, 'Segoe UI', sans-serif;
>
>
>                 color: #707277;
>                 // background-color: gainsboro; /* desktop*/
>                 background-color: #f5f6fa;
>                 background-color: #0000;
>                 /* mobile */
>
>                 padding: 0.2rem 0.1rem;
>                 width: 100%;
>                 border: none;
>                 outline: none;
>                 border-radius: 4px;
>
>                 &::placeholder {
>                     /* Chrome, Firefox, Opera, Safari 10.1+ */
>                     font-size: .95rem;
>                     font-family: OpenSansRegular, 'Segoe UI', sans-serif;
>
>                     color: #b9babe;
>                     opacity: 1;
>                     /* Firefox */
>                 }
>
>             }
>
>             // ANCHOR dropdownSelc
>             >.dropdownSelc {
>                 // background-color: white;
>                 background-color: #0000;
>                 /* mobile */
>
>                 // padding: 0 10px 0 0;
>                 min-width: fit-content;
>                 // height: 21px;
>                 display: grid;
>                 gap: 0px 5px;
>                 grid-auto-flow: column;
>                 grid-auto-columns: 1.5fr auto auto;
>                 // align-items: center;
>                 // box-shadow: 0 5px 20px rgba(0, 0, 0, 0.21);
>                 border-radius: 4px;
>
>                 >button.btnClean {
>                     display: none;
>                     color: #2D4B73;
>                     font-size: 0.85rem;
>                 }
>
>                 >button {
>                     // background-color: blue;
>                     /* width: 12px; */
>                     background-color: transparent;
>                     border-radius: 50%;
>                     padding: 5px;
>                     /* height: 100%; */
>                     outline: 0;
>                     border: 0;
>                     transition: 0.5s;
>
>                     &:hover {
>                         cursor: pointer;
>                     }
>
>                     >div {
>                         width: 8px;
>                         height: 8px;
>                         // border: 1px solid gray;
>                         border-top: 2px solid transparent;
>                         /*tem que a mesma cor do background */
>                         border-bottom: 1px solid #2D4B73;
>                         border-right: 2px solid transparent;
>                         /*tem que a mesma cor do background */
>                         border-left: 1px solid #2D4B73;
>                         transform: rotate(-45deg);
>                         transition: 0.5s;
>
>                     }
>                 }
>
>                 >input {
>                     font-size: 0.8rem;
>                     font-family: "OpenSansSemiBold", "Segoe UI", sans-serif;
>                     color: #707277;
>                     background-color: transparent;
>
>                     padding: 0.2rem 0.1rem;
>                     min-width: 100%;
>                     border: none;
>                     outline: none;
>                     // border-radius: 4px;
>
>                     &::placeholder {
>                         /* Chrome, Firefox, Opera, Safari 10.1+ */
>                         font-size: 0.8rem;
>                         font-family: 'Open Sans Regular', 'Segoe UI', sans-serif;
>                         color: #b9babe;
>                         color: #003c8c;
>                         opacity: 1;
>                         /* Firefox */
>                     }
>                 }
>
>                 >div.optsDropdown {
>                     position: absolute;
>                     display: none;
>
>                     >div {
>                         // padding: 6px;
>                         position: absolute;
>                         top: 48px;
>                         min-height: 150px;
>                         max-height: 150px;
>                         width: 100%;
>                         background-color: white;
>                         box-shadow: 0 5px 10px rgba(0, 0, 0, 0.20);
>                         border-radius: 4px;
>                         overflow: scroll;
>
>                         transition: 0.5s;
>                         display: block;
>                         z-index: 9999;
>
>                         &::-webkit-scrollbar {
>                             width: 8px
>                         }
>
>                         &::-webkit-scrollbar-track {
>                             background: #ffffff;
>                             border-radius: 0px
>                         }
>
>                         &::-webkit-scrollbar-thumb {
>                             background: #d6d6d6;
>                             border-radius: 0px
>                         }
>
>                         >div {
>                             padding: 8px 12px;
>                             cursor: pointer;
>                             display: grid;
>                             color: #9d9ea2;
>                             font-size: 0.8rem;
>                             font-family: "OpenSansSemiBold", "Segoe UI", sans-serif;
>                             color: #707277;
>                             letter-spacing: normal;
>                             line-height: normal;
>                             text-align: left;
>                             white-space: nowrap;
>
>                             &:hover {
>                                 background-color: #2D4B73;
>                                 color: white;
>                             }
>
>                             >.btnAdd {
>                                 height: min-content;
>                                 width: max-content;
>                                 padding: 4px 16px;
>                                 display: grid;
>                                 gap: 15px;
>                                 border: none;
>                                 outline: 0;
>                                 grid-auto-flow: column;
>                                 border-radius: 4px;
>                                 animation-fill-mode: both;
>                                 animation-duration: 400ms;
>                                 transition: 400ms ease-out;
>                                 align-self: center;
>                                 justify-self: center;
>                                 align-items: center;
>
>                                 &:hover {
>                                     background-color: gainsboro;
>
>                                     >svg {
>                                         fill: #003c8c;
>                                     }
>                                 }
>
>                                 span {
>                                     width: 100%;
>                                     color: #003c8c;
>                                     font-size: 0.8rem;
>                                     font-family: "OpenSansRegular", "Segoe UI", sans-serif;
>                                 }
>
>                                 >svg {
>                                     fill: #003c8c;
>                                     height: 15px;
>                                 }
>                             }
>                         }
>
>
>                     }
>                 }
>             }
>
>             >button.btnFavorito {
>                 background-color: inherit;
>                 padding: 4px;
>                 width: fit-content;
>                 border-radius: 4px;
>                 outline: 0;
>                 border: 1px solid #0000;
>
>                 &:hover {
>                     background-color: #003c8c1f;
>
>                     >svg {
>                         fill: tomato;
>                     }
>                 }
>
>                 >svg.n {
>                     display: grid;
>                     height: 28px;
>                     fill: #003C8C;
>                 }
>
>                 >svg.s {
>                     display: none;
>                     height: 28px;
>                     fill: #003C8C;
>                 }
>             }
>         }
>
>         >button.btnPesquisar {
>             background-color: #fff;
>             padding: 5px 10px;
>             height: fit-content;
>             // min-width: 150px;
>             display: grid;
>             align-self: center;
>             gap: 0 5px;
>             // grid-template-columns: auto 1fr;
>             align-items: center;
>             outline: 0;
>             border-radius: 4px;
>             border: 1px solid #0000;
>             box-shadow: 0px 1px 3px 0px rgba(0, 60, 140, 0.15);
>
>             &:hover {
>                 background-color: #f8f8f8;
>                 border: 1px solid rgba(0, 61, 140, 0.180);
>             }
>
>             &:active {
>                 background-color: #f5f5f5;
>                 box-shadow: 0px 1px 3px 0px rgba(0, 60, 140, 0.15);
>             }
>
>             &:focus {
>                 background-color: #f8f8f8;
>                 box-shadow: 0px 1px 3px 0px rgba(0, 60, 140, 0.15);
>                 border: 1px solid rgba(0, 61, 140, 0.280);
>             }
>
>             >span {
>                 width: 100%;
>                 color: #003d8c;
>                 font-size: 0.9rem;
>                 font-family: "DosisMedium", "OpenSansSemiBold", "Segoe UI", sans-serif;
>                 white-space: nowrap;
>                 text-overflow: ellipsis;
>                 overflow: hidden;
>             }
>         }
>
>         >button.btnLimparFiltro,
>         >button.btnMaisFiltros {
>             background-color: #fff;
>             padding: 4px 7px;
>             height: fit-content;
>             width: fit-content;
>             display: grid;
>             align-items: center;
>             outline: 0;
>             border-radius: 4px;
>             border: 1px solid #0000;
>             white-space: nowrap;
>             align-self: center;
>
>             box-shadow: 0px 1px 3px 0px rgba(0, 60, 140, 0.15);
>
>             &:hover {
>                 background-color: #f8f8f8;
>                 border: 1px solid rgba(0, 61, 140, 0.180);
>             }
>
>             &:active {
>                 background-color: #f5f5f5;
>                 box-shadow: 0px 1px 3px 0px rgba(0, 60, 140, 0.15);
>             }
>
>             &:focus {
>                 background-color: #f8f8f8;
>                 box-shadow: 0px 1px 3px 0px rgba(0, 60, 140, 0.15);
>                 border: 1px solid rgba(0, 61, 140, 0.280);
>             }
>
>             >svg {
>                 height: 12pt;
>                 fill: tomato;
>             }
>
>             >span {
>                 width: 100%;
>                 color: tomato;
>                 font-size: 1.1rem;
>                 font-family: 'DosisMedium', 'OpenSansSemiBold', 'Segoe UI', sans-serif;
>                 letter-spacing: 1px;
>                 // text-align: left;
>             }
>         }
>     }
>
>     >div.main {
>         background-color: rgba(0, 0, 0, 0);
>         padding: 5px;
>         display: grid;
>         overflow: hidden;
>
>         >.tbBaralhos {
>             height: 80%;
>             width: 80%;
>             display: grid;
>             grid-template-rows: auto 1fr;
>             grid-template-columns: 1fr;
>             align-self: center;
>             justify-self: center;
>
>             overflow: hidden;
>
>             // ANCHOR header
>             >header {
>                 background-color: lightgray;
>                 background-color: #FFF;
>                 padding: 8px 4px;
>                 width: 100%;
>                 display: grid;
>                 gap: 5px 10px;
>                 grid-template-columns: min-content 1fr;
>                 align-items: center;
>                 box-shadow: 0px 1px 2px 0px rgba(0, 0, 0, 0.400);
>                 // position: relative;
>                 // z-index: 1;
>
>                 // ANCHOR btnAdd
>                 >.btnAdd {
>                     height: min-content;
>                     width: max-content;
>                     padding: 15px;
>                     display: grid;
>                     border: none;
>                     outline: 0;
>                     border-radius: 50%;
>                     animation-fill-mode: both;
>                     animation-duration: 400ms;
>                     transition: 400ms ease-out;
>
>                     &:hover {
>                         background-color: #003c8c;
>
>
>                         >svg {
>                             fill: #FFF;
>                         }
>                     }
>
>
>                     >svg {
>                         fill: #003c8c;
>                         height: 21px;
>                     }
>
>                 }
>
>                 // ANCHOR sp_tituloTable
>                 >.sp_tituloTable {
>                     color: tomato;
>                     font-size: 1.1rem;
>                     justify-self: center;
>                 }
>
>
>             }
>
>             // ANCHOR main
>             >main {
>                 // background-color: #555555;
>                 display: grid;
>                 // padding: 4px;
>                 overflow: hidden;
>                 border-top: 10px solid slategray;
>                 border-bottom: 5px solid slategray;
>
>                 >.containerTable {
>                     overflow: auto;
>                     border: 1px solid gainsboro;
>
>                     // * {
>                     //   scrollbar-width: thin;
>                     //   scrollbar-color: blue orange;
>                     // }
>
>
>                     /* Works on Chrome, Edge, and Safari */
>                     &::-webkit-scrollbar {
>                         width: 10px;
>                         height: 8px;
>                     }
>
>                     &::-webkit-scrollbar-track {
>                         background: rgb(235, 235, 235);
>                     }
>
>                     &::-webkit-scrollbar-thumb {
>                         background-color: #fff;
>                         // border-radius: 5px;
>                         border: 1px solid rgb(235, 235, 235);
>                     }
>
>                     >table {
>                         /* Not required only for visualizing */
>                         border-collapse: collapse;
>                         width: 100%;
>
>                         >caption {
>                             background-color: #F7F8FA; // !important mesma cor do background principal
>                             // padding: 0.4rem;
>
>                             position: sticky; // !important
>                             z-index: 100; // !important
>                             top: 0; // !important
>
>                             >div {
>                                 background-color: #FFF;
>                                 padding: 8px;
>                                 min-height: 70px;
>                                 display: grid;
>                                 gap: 5px 15px;
>                                 justify-content: start;
>
>                                 >span {
>                                     color: #F26B6B;
>                                     font-size: 1.5rem;
>                                     font-family: DosisLight, 'Segoe UI', sans-serif;
>                                     display: grid;
>                                     align-items: flex-end;
>                                 }
>
>                                 >span:nth-child(2) {
>                                     color: #003c8c;
>                                     font-size: 1.2rem;
>                                     font-family: DosisLight, 'Segoe UI', sans-serif;
>                                     text-align: left;
>                                 }
>                             }
>                         }
>
>                         >thead {
>                             // background-color:#0000; // ! mesma cor do fundo
>
>                             >tr {
>                                 >th {
>                                     color: #707277;
>                                     color: #003c8c;
>                                     font-size: 0.85rem;
>                                     font-family: 'OpenSansRegular', 'Segoe UI', sans-serif;
>                                     text-align: left;
>
>                                     background-color: #fff; // ! mesma cor do fundo
>                                     padding: 5px 10px; // ! importan padding left e right estarema menor ou igual ao td
>
>                                     // !important
>                                     position: sticky;
>                                     // z-index: 100;
>                                     top: 0px;
>                                     white-space: nowrap;
>                                     // !important
>
>                                     >div {
>                                         display: flex;
>                                         /* justify-items: stretch; */
>                                         align-content: center;
>                                         align-items: center;
>                                         justify-content: space-between;
>                                         cursor: default;
>
>                                         >button {
>                                             // background-color: blue;
>                                             /* width: 12px; */
>                                             background-color: transparent;
>                                             border-radius: 50%;
>                                             padding: 5px;
>                                             /* height: 100%; */
>                                             outline: 0;
>                                             border: 0;
>                                             transition: 0.5s;
>
>                                             >div {
>                                                 width: 8px;
>                                                 height: 8px;
>                                                 // border: 1px solid gray;
>                                                 border-top: 2px solid transparent;
>                                                 /*tem que a mesma cor do background */
>                                                 border-bottom: 1px solid #555;
>                                                 border-right: 2px solid transparent;
>                                                 /*tem que a mesma cor do background */
>                                                 border-left: 1px solid #555;
>                                                 transform: rotate(-45deg);
>                                                 transition: 0.5s;
>                                                 cursor: default;
>
>
>                                             }
>                                         }
>                                     }
>
>                                 }
>
>                                 >th.thActions {
>                                     display: none;
>                                 }
>                             }
>                         }
>
>                         >tbody {
>                             color: #707277;
>                             font-size: 0.85rem;
>                             font-family: 'OpenSansRegular', 'Segoe UI', sans-serif;
>
>                             >tr {
>                                 border-bottom: 1px solid #E8E9F2;
>
>                                 &:hover {
>                                     background-color: #E8E9F2;
>                                     color: #8D8BB3;
>                                     // color: #003C8C;
>                                     font-weight: bold;
>                                     border-bottom: 1px solid #E8E9F2;
>                                 }
>
>                                 >td {
>                                     padding: 15px 10px; // ! importan padding left e right estarema menor ou igual ao td
>                                     white-space: nowrap;
>                                     overflow: hidden;
>                                     text-overflow: ellipsis;
>                                     max-width: 200px;
>                                 }
>
>                                 >td.tdFavorito {
>                                     padding: 15px 10px; // ! importan padding left e right estarema menor ou igual ao td
>                                     white-space: nowrap;
>                                     overflow: hidden;
>                                     text-overflow: ellipsis;
>                                     max-width: 200px;
>
>                                     >svg.n {
>                                         display: grid;
>                                         fill: #003C8C;
>                                     }
>
>                                     >svg.s {
>                                         display: none;
>                                         fill: #003C8C;
>                                     }
>                                 }
>
>
>                                 >td.action {
>                                     padding: 4px;
>                                     width: 20px;
>                                     min-width: 20px;
>                                     max-width: 20px;
>
>                                     display: none;
>                                     overflow: hidden;
>                                     white-space: nowrap;
>
>                                     >input.checkDel {
>                                         width: 20px;
>                                         height: 20px;
>                                         appearance: none;
>                                         background-color: #fff;
>                                         border: 1px solid darkgrey;
>                                         border-radius: 50%;
>                                         transition: all 0.2s ease-in-out;
>                                         position: relative;
>
>                                         // overflow: hidden;
>                                         &:checked {
>                                             background-color: #b9babe3b;
>                                             animation: check-animation 0.3s ease-in-out;
>                                         }
>
>                                         &.checkDel:checked::after {
>                                             content: "✔";
>                                             font-size: 1.5rem;
>                                             color: green;
>                                             display: block;
>                                             position: absolute;
>                                             // top: 50%;
>                                             // left: 50%;
>                                             top: 30%;
>                                             left: 73%;
>                                             transform: translate(-50%, -50%);
>                                             opacity: 1;
>                                             animation: check-after-animation 0.3s ease-in-out;
>                                         }
>                                     }
>
>                                     @keyframes check-animation {
>                                         0% {
>                                             transform: scale(1);
>                                         }
>
>                                         50% {
>                                             transform: scale(1.5);
>                                         }
>
>                                         100% {
>                                             transform: scale(1);
>                                         }
>                                     }
>
>                                     @keyframes check-after-animation {
>                                         0% {
>                                             opacity: 0;
>                                         }
>
>                                         100% {
>                                             opacity: 1;
>                                         }
>                                     }
>
>
>                                 }
>
>                                 >td.tbTema {
>                                     // width: 80px;
>                                     text-overflow: ellipsis; // !important (add reticências)
>                                     overflow: hidden; // !important (add reticências)
>                                     white-space: nowrap; // !important (add reticências)
>
>                                 }
>                             }
>                         }
>
>                     }
>                 }
>             }
>
>             // ANCHOR footer
>             >footer {
>                 background-color: #FFF;
>                 padding: 4px;
>                 display: grid;
>                 grid-template-columns: min-content 1fr auto;
>                 align-items: center;
>
>                 span.spTotal {
>                     color: #003C8C;
>                     font-size: 1rem;
>                     font-family: "JosefinSansRegular", "OpenSansSemiBold", "Segoe UI", sans-serif;
>                     letter-spacing: normal;
>                     font-weight: normal;
>
>                     white-space: nowrap;
>                     text-overflow: ellipsis;
>                     overflow: hidden;
>                 }
>
>                 >div.pagination {
>                     // background-color: lightcyan;
>                     padding: 6px 10px;
>                     width: 100%;
>                     display: grid;
>                     gap: 8px;
>                     grid-auto-flow: column;
>
>
>                     >label.in_pageSelc {
>                         background-color: #F0F0F0;
>                         // background-color: #00000003;
>                         padding: 2px 5px;
>                         height: fit-content;
>                         width: min-content;
>                         min-width: 80px;
>                         display: grid;
>                         gap: 4px;
>                         grid-template-columns: auto 1fr auto;
>                         border-bottom: 1px solid #0000;
>                         border-radius: 5px;
>                         border: 1px solid rgb(0 0 0 / 2%);
>                         box-shadow: 0px 1px 3px 0px rgba(0, 60, 140, 0.0);
>
>                         &:hover {
>                             background-color: rgba(0, 0, 0, 0.03);
>                             border: 1px solid rgb(0 0 0 / 3%);
>                         }
>
>                         &:active {
>                             background-color: rgba(0, 0, 0, 0.03);
>                             border: 1px solid rgba(0 61 140 / 4%);
>
>                         }
>
>                         &:focus-within {
>                             background-color: rgba(0, 0, 0, 0.03);
>                             border: 1px solid rgb(0 61 140 / 5%);
>                         }
>
>                         >span {
>                             width: 100%;
>                             color: #003d8c;
>                             font-size: 0.9rem;
>                             font-family: "DosisMedium", "OpenSansSemiBold", "Segoe UI", sans-serif;
>                             white-space: nowrap;
>                             text-overflow: ellipsis;
>                             overflow: hidden;
>                         }
>
>                         >input {
>                             font-size: 0.8rem;
>                             font-family: 'DosisMedium', 'Segoe UI', sans-serif;
>
>                             color: #003c8c;
>                             // background-color: gainsboro; /* desktop*/
>                             // background-color: #f5f6fa; /* mobile */
>                             background-color: transparent;
>                             text-align: center;
>
>                             padding: 0.2rem 0.1rem;
>                             width: 100%;
>                             border: none;
>                             outline: none;
>                             border-radius: 4px;
>
>                             &::placeholder {
>                                 /* Chrome, Firefox, Opera, Safari 10.1+ */
>                                 font-size: 0.8rem;
>                                 font-family: 'DosisMedium', 'Segoe UI', sans-serif;
>                                 color: #b9babe;
>                                 color: #003c8c;
>                                 opacity: 1;
>                                 /* Firefox */
>                             }
>                         }
>                     }
>
>                     >label.in_rowsPagLimit {
>                         background-color: #F0F0F0;
>                         // background-color: #00000003;
>                         padding: 2px 5px;
>                         height: fit-content;
>                         width: min-content;
>                         min-width: 120px;
>                         display: grid;
>                         gap: 4px;
>                         grid-template-columns: auto 1fr auto;
>                         border-bottom: 1px solid #0000;
>                         border-radius: 5px;
>                         border: 1px solid rgb(0 0 0 / 2%);
>                         box-shadow: 0px 1px 3px 0px rgba(0, 60, 140, 0.0);
>
>                         &:hover {
>                             background-color: rgba(0, 0, 0, 0.03);
>                             border: 1px solid rgb(0 0 0 / 3%);
>                         }
>
>                         &:active {
>                             background-color: rgba(0, 0, 0, 0.03);
>                             border: 1px solid rgba(0 61 140 / 4%);
>
>                         }
>
>                         &:focus-within {
>                             background-color: rgba(0, 0, 0, 0.03);
>                             border: 1px solid rgb(0 61 140 / 5%);
>                         }
>
>                         >span {
>                             width: 100%;
>                             color: #003d8c;
>                             font-size: 0.9rem;
>                             font-family: "DosisMedium", "OpenSansSemiBold", "Segoe UI", sans-serif;
>                             white-space: nowrap;
>                             text-overflow: ellipsis;
>                             overflow: hidden;
>                         }
>
>                         >input {
>                             font-size: 0.8rem;
>                             font-family: 'DosisMedium', 'Segoe UI', sans-serif;
>
>                             color: #003c8c;
>                             text-align: center;
>                             // background-color: gainsboro; /* desktop*/
>                             // background-color: #f5f6fa; /* mobile */
>                             background-color: transparent;
>
>                             padding: 0.2rem 0.1rem;
>                             width: 100%;
>                             border: none;
>                             outline: none;
>                             border-radius: 4px;
>
>                             &::placeholder {
>                                 /* Chrome, Firefox, Opera, Safari 10.1+ */
>                                 font-size: 0.8rem;
>                                 font-family: 'DosisMedium', 'Segoe UI', sans-serif;
>                                 color: #b9babe;
>                                 color: #003c8c;
>                                 opacity: 1;
>                                 /* Firefox */
>                             }
>                         }
>                     }
>
>                     >label.in_rowsAtual {
>                         background-color: #F0F0F0;
>                         // background-color: #00000003;
>                         padding: 2px 5px;
>                         height: fit-content;
>                         width: min-content;
>                         min-width: 100px;
>                         display: grid;
>                         gap: 4px;
>                         grid-template-columns: auto 1fr auto;
>                         border-bottom: 1px solid #0000;
>                         border-radius: 5px;
>                         border: 1px solid rgb(0 0 0 / 2%);
>                         box-shadow: 0px 1px 3px 0px rgba(0, 60, 140, 0.0);
>
>                         -webkit-user-select: none;
>                         /* Safari */
>                         -ms-user-select: none;
>                         /* IE 10 and IE 11 */
>                         user-select: none;
>                         /* Standard syntax */
>
>
>                         &:hover {
>                             background-color: rgba(0, 0, 0, 0.03);
>                             border: 1px solid rgb(0 0 0 / 3%);
>                         }
>
>                         &:active {
>                             background-color: rgba(0, 0, 0, 0.03);
>                             border: 1px solid rgba(0 61 140 / 4%);
>
>                         }
>
>                         &:focus-within {
>                             background-color: rgba(0, 0, 0, 0.03);
>                             border: 1px solid rgb(0 61 140 / 5%);
>                         }
>
>                         >span {
>                             width: 100%;
>                             color: #003d8c;
>                             font-size: 0.9rem;
>                             font-family: "DosisMedium", "OpenSansSemiBold", "Segoe UI", sans-serif;
>                             white-space: nowrap;
>                             text-overflow: ellipsis;
>                             overflow: hidden;
>                         }
>
>                         >input {
>                             font-size: 0.8rem;
>                             font-family: 'DosisMedium', 'Segoe UI', sans-serif;
>
>                             color: #003c8c;
>                             text-align: center;
>                             // background-color: gainsboro; /* desktop*/
>                             // background-color: #f5f6fa; /* mobile */
>                             background-color: transparent;
>
>                             padding: 0.2rem 0.1rem;
>                             width: 100%;
>                             border: none;
>                             outline: none;
>                             border-radius: 4px;
>                             pointer-events: none;
>
>                             &::placeholder {
>                                 /* Chrome, Firefox, Opera, Safari 10.1+ */
>                                 font-size: 0.8rem;
>                                 font-family: 'DosisMedium', 'Segoe UI', sans-serif;
>                                 color: #b9babe;
>                                 color: #003c8c;
>                                 opacity: 1;
>                                 /* Firefox */
>                             }
>                         }
>                     }
>
>                     >button {
>                         background-color: #fff;
>                         padding: 2px 10px;
>                         height: fit-content;
>                         // min-width: 150px;
>                         display: grid;
>                         align-self: center;
>                         gap: 0 5px;
>                         // grid-template-columns: auto 1fr;
>                         align-items: center;
>                         outline: 0;
>                         border-radius: 4px;
>                         border: 1px solid #0000;
>                         box-shadow: 0px 1px 3px 0px rgba(0, 60, 140, 0.15);
>
>                         &:hover {
>                             background-color: #f8f8f8;
>                             border: 1px solid rgba(0, 61, 140, 0.180);
>                         }
>
>                         &:active {
>                             background-color: #f5f5f5;
>                             box-shadow: 0px 1px 3px 0px rgba(0, 60, 140, 0.15);
>                         }
>
>                         &:focus {
>                             background-color: #f8f8f8;
>                             box-shadow: 0px 1px 3px 0px rgba(0, 60, 140, 0.15);
>                             border: 1px solid rgba(0, 61, 140, 0.280);
>                         }
>
>                         >svg {
>                             fill: #003d8c;
>                         }
>                     }
>                 }
>             }
>         }
>
>     }
>
>     >footer {
>         background-color: #ffff;
>         padding: 4px 10px;
>         height: fit-content;
>         display: grid;
>         gap: 0 15px;
>         grid-template-columns: min-content auto 1fr;
>         justify-items: center;
>
>         >div.infos {
>             // background-color: lightblue;
>             min-width: max-content;
>             display: grid;
>             // grid-template-columns: min-content ;
>
>             >span.titulo {
>                 color: #003d8c;
>                 font-size: 1rem;
>                 font-family: "JosefinSansRegular", "OpenSansSemiBold", "Segoe UI", sans-serif;
>                 align-self: center;
>                 //
>                 // text-align: left;
>                 white-space: nowrap;
>                 text-overflow: ellipsis;
>                 overflow: hidden;
>                 cursor: default
>             }
>         }
>
>         >div.actions {
>             background-color: white;
>             background-color: #f0f0f0;
>             background-color: #f0f0f047;
>             margin: 0 0 0 15px;
>             padding: 6px 10px;
>             width: fit-content;
>             display: grid;
>             grid-auto-flow: column;
>             gap: 8px;
>             // grid-template-rows: 1fr;
>             // grid-template-columns: 1fr 1fr 1fr;
>             border-radius: 8px;
>
>             >button.btnAddBar,
>             >button.btnSelc,
>             >button.btnDel,
>             >button.btnUpdate {
>                 background-color: #0000;
>                 padding: 4px 7px;
>                 height: fit-content;
>                 width: fit-content;
>                 display: grid;
>                 align-items: center;
>                 outline: 0;
>                 border-radius: 4px;
>                 border: 1px solid #0000;
>                 white-space: nowrap;
>                 align-self: center;
>
>                 &:hover {
>                     background-color: #fafafa;
>                     box-shadow: 0px 1px 3px 0px rgba(0, 60, 140, 0.15);
>                 }
>
>                 &:active {
>                     background-color: #fafafa;
>                     box-shadow: 0px 1px 3px 0px rgba(0, 60, 140, 0.15);
>                 }
>
>                 &:focus {
>                     background-color: #fafafa;
>                     box-shadow: 0px 1px 3px 0px rgba(0, 60, 140, 0.15);
>                 }
>
>                 >svg {
>                     height: 14pt;
>                     fill: crimson;
>                     fill: #003c8c;
>                 }
>             }
>
>             >button.btnDel {
>                 display: none !important;
>
>                 >svg {
>                     height: 14pt;
>                     fill: crimson;
>                     // fill: #003c8c;
>                 }
>             }
>
>             >button.btnUpdate {
>                 display: none !important;
>
>                 >svg {
>                     height: 14pt;
>                     fill: crimson;
>                     // fill: #003c8c;
>                     fill: goldenrod;
>
>                 }
>             }
>         }
>
>     }
> }
>
> .active {
>     display: block !important;
>     display: revert !important;
>     // opacity: 0;
> }
>
> .disabled {
>     display: none !important;
>
> }
>
> // .anime {
> //     background-color: red !important;
> // }
> .anime {
>     opacity: 0;
>     animation: bounceIn 1s ease-out forwards;
>
>     @keyframes bounceIn {
>         0% {
>             transform: scale(0.3);
>             opacity: 0;
>         }
>
>         50% {
>             transform: scale(1.05);
>             opacity: 1;
>         }
>
>         70% {
>             transform: scale(0.9);
>         }
>
>         100% {
>             transform: scale(1);
>             opacity: 1;
>         }
>     }
> }
>
> .animeOut {
>     -webkit-animation-name: bounceOut;
>     animation-name: bounceOut;
>     -webkit-animation-duration: .75s;
>     animation-duration: .75s;
>     -webkit-animation-duration: 1s;
>     animation-duration: 1s;
>     -webkit-animation-fill-mode: both;
>     animation-fill-mode: both;
> }
>
> @-webkit-keyframes bounceOut {
>     20% {
>         -webkit-transform: scale3d(.9, .9, .9);
>         transform: scale3d(.9, .9, .9);
>     }
>
>     50%,
>     55% {
>         opacity: 1;
>         -webkit-transform: scale3d(1.1, 1.1, 1.1);
>         transform: scale3d(1.1, 1.1, 1.1);
>     }
>
>     100% {
>         opacity: 0;
>         -webkit-transform: scale3d(.3, .3, .3);
>         transform: scale3d(.3, .3, .3);
>     }
> }
>
> @keyframes bounceOut {
>     20% {
>         -webkit-transform: scale3d(.9, .9, .9);
>         transform: scale3d(.9, .9, .9);
>     }
>
>     50%,
>     55% {
>         opacity: 1;
>         -webkit-transform: scale3d(1.1, 1.1, 1.1);
>         transform: scale3d(1.1, 1.1, 1.1);
>     }
>
>     100% {
>         opacity: 0;
>         -webkit-transform: scale3d(.3, .3, .3);
>         transform: scale3d(.3, .3, .3);
>     }
> }
> ```
>
>