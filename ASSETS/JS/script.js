// document.addEventListener("DOMContentLoaded", function() {
//     var btnSelc = document.querySelector(".btnSelc");
//     var thActions = document.querySelectorAll("th.thActions");
//     var tdActions = document.querySelectorAll("td.action");

//     var toggleDisplay = function(elements) {
//         for (var i = 0; i < elements.length; i++) {
//             elements[i].style.display = elements[i].style.display === "none" || !elements[i].style.display ? "table-cell" : "none";
//         }
//     };

//     btnSelc.addEventListener("click", function() {
//         toggleDisplay(thActions);
//         toggleDisplay(tdActions);
//     });
// });

var tableToggler = new TableToggler({
    // btnSelc: ".customBtn",
    elementsToToggle: ["td.action", ".thActions"],
    // activeClass: ".ativado",
    // activeClass: ".desativado",
});

tableToggler.toggle();
