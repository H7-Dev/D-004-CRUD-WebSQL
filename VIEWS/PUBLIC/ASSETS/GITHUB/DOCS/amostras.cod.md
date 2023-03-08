# 📝 amostra de códigos

[Métodos Jquery]() |
[Métodos Jquery e JS]() |
[Métodos Javascript]() |
[📝 Legendas](https://github.com/H7-Dev/legendas/edit/master/legendas.md) |


> ### 01.01 [Jquery & JS]
> 
> - ## ✅ [Set date in input type date | Convert data simples de pt-BR para en-US ](https://stackoverflow.com/questions/12346381/set-date-in-input-type-date)
>
> - Descrição...: converte uma data simple do formato pt-BR (01-01-2020) para o formato en-US (2020-01-01). Se o código for invertido a conversão também pode acontecer no sentido contrário
> - Obs.........: serve somente para data simples com dia mes e ano. O separador pode ser qualquer um, mas é necessário especificar.
> - Tag.........: ***You can only use date in input type="date" as in format YYYY-MM-DD***
> - 👉⚡ Amostra
> ```JS
>     var rows = results.rows>
>     data = rows.c_dt; // exe entrada: 25/12/2021
>     arr = data.split("/").reverse()
>     splitDia = data.split('/')[0]
>     splitMes = data.split('/')[1]
>     splitAno = data.split('/')[2]
>     dtFmUS = splitAno+'-'+splitMes+'-'+split>
>     // console.log('c_dt...........: '+rows.c_dt)
>     console.log('splitDia.......: '+splitDia)
>     console.log('splitMes.......: '+splitMes)
>     console.log('splitAno.......: '+splitAno)
>     console.log('arrData........: '+dtFmUS) // exe saída: 2021/12>
>     $(app_p1.in_curso).val(rows.c_curso)
>     $(app_p1.in_duracao).val(rows.c_duracao)
>     $(app_p1.in_dt).val(dtFmUS)
> ```


> ### 01.00 [Jquery & JS]
>
> - Descrição...: Padrão Estrutural e inicialização genérica de arquivos e métidos js/jquery
> - Obs.........: Amostragem de código inicial
> - Tags........: n/n
>
> - 👉⚡ Amostra
> ```JS
> const testeInit = {
>     doc           : $(document),
>     btnFechar     : '#inibtnFechar',
>     init: () => {
>         setTimeout(function () {
>             console.log('init teste -g')
>             testeInit.Ouvintes()
>         }, 400);
>     },
>     Ouvintes: () => {
>         // → exemplo de evento on, ou seja para els criados de forma dinâmica, neste caso, adicina o evento click a um els criado após o dom ser carregado
>         testeInit.doc.on('click', testeInit.btnFechar, function (e) {
>             console.log('Evento Click Funcional!')
>             console.log('Inicial teste de calback')
>             let $this = $(this)
>             console.log($this)
>             setTimeout(function () {
>                 testeInit.exe_callbackComParametros($this)
>             }, 1000);
>         })
>     },
>     exe_callbackComParametros: function (_el) {
>         console.log(_el)
>     },
> }
> testeInit.init()
> ```
