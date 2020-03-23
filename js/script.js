$(document).ready(function() {
  const naam = "naam";
  const achternaam = "achternaam";
  const adres = "adres";
  const postcode = "postcode";
  const email = "email";
  const plaats = "plaats";
  const geboortedatum = "geboortedatum";
  const vereniging = "vereniging";

  const color = "lightgrey";

  const form =
    '<div class="form-group">' +
    '<div class="d-flex flex-column flex-lg-row rij">' +
    '<label class="m-1" for="temp">Voornaam</label>' +
    '<input class="m-1" type="text" id="temp" required/>' +
    '<label class="m-1" for="temp1">Achternaam</label>' +
    '<input class="m-1" type="text" id="temp1" required/>' +
    '<label class="m-1" for="temp2">Adres</label>' +
    '<input class="m-1" type="text" id="temp2" placeholder="straat 1" required />' +
    '<label class="m-1" for="temp3">Postcode</label>' +
    '<input class="m-1" type="text" id="temp3" maxlength="6" minlength="6" width="1rem" required/>' +
    "</div>" +
    '<div class="d-flex flex-column flex-lg-row rij">' +
    '<label class="m-1" for="temp4">Email</label>' +
    '<input class="m-1" type="email" id="temp4" required />' +
    '<label class="m-1" for="temp5">Plaats</label>' +
    '<input class="m-1" type="text" id="temp5" required />' +
    '<label class="m-1" for="temp6">geboortedatum</label>' +
    '<input class="m-1" type="date" id="temp6" required />' +
    '<label class="m-1" for="temp7">vereniging</label>' +
    '<input class="m-1" type="text" id="temp7" required />' +
    '<button class="tempDel btn">X</button>' +
    "</div>" +
    "</div>";

  let teamRij = 1;
  let coachRij = 1;

  // event handlers
  $("form").on("submit", false);
  $(".coachok, .ok").on("click", function(e) {
    let className = this.className;
    addRow(className);
  });

  $(document.body).on("click", ".Del, .coachDel", function(e) {
    let className = this.className;
    removeRow(className);
  });

  // voeg een nieuwe rij velden aan.
  function addRow(className) {
    let counter = 0;
    let coach = "";
    let css = "";

    if (className === "ok btn btn-primary") {
      counter = teamRij;
      coach = "";
      if (counter === 15) {
        alert("Er mogen maximaal 15 teamleden worden toegevoegd");
        return;
      } else {
        $('[name="team"]').append(form);
      }
    } else {
      counter = coachRij;
      coach = "coach";
      if (counter === 3) {
        alert("Er mogen maximaal 3 coaches worden toegevoegd");
        return;
      } else {
        $('[name="coach"]').append(form);
      }
    }
    if (counter % 2 > 0) {
      css = color;
    } else {
      css = "";
    }

    //hernoem elementen
    $('div[class="d-flex flex-column flex-lg-row rij"]')
      .attr("class", `d-flex flex-column flex-lg-row ${coach}rij${counter}`)
      .css("background-color", css);
    $('label[for="temp"]')
      .attr("for", coach + naam + counter)
      .css("background-color", css);
    $('input[id="temp"]')
      .attr("id", coach + naam + counter)
      .css("background-color", css);
    $('label[for="temp1"]')
      .attr("for", coach + achternaam + counter)
      .css("background-color", css);
    $('input[id="temp1"]')
      .attr("id", coach + achternaam + counter)
      .css("background-color", css);
    $('label[for="temp2"]')
      .attr("for", coach + adres + counter)
      .css("background-color", css);
    $('input[id="temp2"]')
      .attr("id", coach + adres + counter)
      .css("background-color", css);
    $('label[for="temp3"]')
      .attr("for", coach + postcode + counter)
      .css("background-color", css);
    $('input[id="temp3"]')
      .attr("id", coach + postcode + counter)
      .css("background-color", css);
    $('label[for="temp4"]')
      .attr("for", coach + email + counter)
      .css("background-color", css);
    $('input[id="temp4"]')
      .attr("id", coach + email + counter)
      .css("background-color", css);
    $('label[for="temp5"]')
      .attr("for", coach + plaats + counter)
      .css("background-color", css);
    $('input[id="temp5"]')
      .attr("id", coach + plaats + counter)
      .css("background-color", css);
    $('label[for="temp6"]')
      .attr("for", coach + geboortedatum + counter)
      .css("background-color", css);
    $('input[id="temp6"]')
      .attr("id", coach + geboortedatum + counter)
      .css("background-color", css);
    $('label[for="temp7"]')
      .attr("for", coach + vereniging + counter)
      .css("background-color", css);
    $('input[id="temp7"]')
      .attr("id", coach + vereniging + counter)
      .css("background-color", css);
    $('button[class="tempDel btn"]').attr(
      "class",
      coach + "Del btn btn-primary"
    );

    counter++;
    if (className === "ok btn btn-primary") {
      teamRij = counter;
    } else {
      coachRij = counter;
    }
  }

  // verwijder onderste rij van team of coach velden.
  function removeRow(className) {
    if (className === "Del btn btn-primary") {
      $(".rij" + (teamRij - 1)).remove();
      teamRij--;
    } else {
      $(".coachrij" + (coachRij - 1)).remove();
      coachRij--;
    }
  }
});
