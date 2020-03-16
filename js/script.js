$(document).ready(function() {
  let naam = "naam";
  let achternaam = "achternaam";
  let rij = 1;
  let formRij =
    '<div class="d-flex flex-row rij">' +
    '<div class="form-group">' +
    '<label class="mr-1" for="temp">Voornaam</label>' +
    '<input class="mr-1" type="text" id="temp" />' +
    '<label class="mr-1" for="temp1">Achternaam</label>' +
    '<input class="mr-1" type="text" id="temp1" />' +
    '<button class="delete btn">X</button>' +
    "</div>" +
    "</div>";

  $("form").on("submit", false);
  $(".ok").on("click", add);
  $(document.body).on("click", ".delete", remove);

  // voeg een nieuwe rij teamvelden toe
  function add() {
    if (rij === 15) {
      alert("Er mogen maximaal 15 teamleden worden toegevoegd");
    } else {
      $("form").append(formRij);
      $('div[class="d-flex flex-row rij"]').attr("class", `rij${rij}`);
      $('label[for="temp"]').attr("for", naam + rij);
      $('input[id="temp"]').attr("id", naam + rij);
      $('label[for="temp1"]').attr("for", achternaam + rij);
      $('input[id="temp1"]').attr("id", achternaam + rij);
      rij++;
    }
  }
  // verwijder onderste rij van teamvelden.
  function remove() {
    $(".rij" + (rij - 1)).remove();
    rij--;
  }
});
