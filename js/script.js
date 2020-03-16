$(document).ready(function() {
  let naam = "naam";
  let achternaam = "achternaam";
  let rij = 1;
  let formRij =
    '<div class="d-flex flex-row rij">' +
    '<label for="temp">voornaam</label>' +
    '<input type="text" id="temp" />' +
    '<label for="temp1">Achternaam</label>' +
    '<input type="text" id="temp1" />' +
    '<button class="delete btn">X</button>' +
    "</div>";

  $("form").on("submit", false);
  $(".ok").on("click", add);
  $(document.body).on("click", ".delete", remove);

  function add() {
    //maak nieuwe inputs
    $("form").append(formRij);
    $('div[class="d-flex flex-row rij"]').attr("class", `rij${rij}`);
    $('label[for="temp"]').attr("for", naam + rij);
    $('input[id="temp"]').attr("id", naam + rij);
    $('label[for="temp1"]').attr("for", achternaam + rij);
    $('input[id="temp1"]').attr("id", achternaam + rij);
    rij++;
  }

  function remove() {
    $(".rij" + (rij - 1)).remove();
    rij--;

    console.log("remove einde");
  }
});
