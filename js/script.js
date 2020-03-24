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
    "</div>" +
    '<div class="d-flex flex-column flex-lg-row rij">' +
    '<label class="m-1" for="temp3">Postcode</label>' +
    '<input class="m-1" type="text" id="temp3" maxlength="6" minlength="6" width="1rem" required/>' +
    '<label class="m-1" for="temp4">Email</label>' +
    '<input class="m-1" type="email" id="temp4" required />' +
    '<label class="m-1" for="temp5">Plaats</label>' +
    '<input class="m-1" type="text" id="temp5" required />' +
    "</div>" +
    '<div class="d-flex flex-column flex-lg-row rij">' +
    '<label class="m-1" for="temp6">geboortedatum</label>' +
    '<input class="m-1" type="date" id="temp6" required />' +
    '<label class="m-1" for="temp7">vereniging</label>' +
    '<input class="m-1" type="text" id="temp7" required />' +
    '<button class="tempDel btn">X</button>' +
    '<button class="tempOk btn">O</button>' +
    "</div>" +
    "</div>";

  let teamRij = 1;
  let coachRij = 1;

  //huidige datum
  let datum = new Date();
  let locDatum =
    datum.getUTCDate() +
    "/" +
    (datum.getUTCMonth() + 1) +
    "/" +
    datum.getUTCFullYear();
  $("#datum").val(locDatum);

  // event handlers
  $(document.body).on("click", ".coachOk, .teamOk", function(e) {
    let className = this.className;
    AddRow(className);
  });

  $(document.body).on("click", ".teamDel, .coachDel", function(e) {
    let className = this.className;
    RemoveRow(className);
  });

  // formulieren verzenden
  $(".verstuur").on("click", function() {
    document.querySelector(".cordverstuur").click();
    console.log("cord form");
    document.querySelector(".coachverstuur").click();
    console.log("coach form");
    document.querySelector(".teamverstuur").click();
    console.log("team form");
  });

  // voeg een nieuwe rij velden toe.
  function AddRow(className) {
    let counter = 0;
    let type = "";
    let css = "";

    if (className === "teamOk btn btn-primary mt-3 my-lg-0 mx-lg-2") {
      counter = teamRij;
      type = "team";
      if (counter === 15) {
        alert("Er mogen maximaal 15 teamleden worden toegevoegd");
        return;
      } else {
        $("#team").append(form);
      }
    } else {
      counter = coachRij;
      type = "coach";
      if (counter === 3) {
        alert("Er mogen maximaal 3 coaches worden toegevoegd");
        return;
      } else {
        $("#coach").append(form);
      }
    }
    if (counter % 2 > 0) {
      css = color;
    } else {
      css = "";
    }

    //hernoem elementen
    $('div[class="d-flex flex-column flex-lg-row rij"]')
      .attr("class", `d-flex flex-column flex-lg-row ${type}rij${counter}`)
      .css("background-color", css);
    $('label[for="temp"]')
      .attr("for", type + naam + counter)
      .css("background-color", css);
    $('input[id="temp"]')
      .attr("id", type + naam + counter)
      .css("background-color", css);
    $('label[for="temp1"]')
      .attr("for", type + achternaam + counter)
      .css("background-color", css);
    $('input[id="temp1"]')
      .attr("id", type + achternaam + counter)
      .css("background-color", css);
    $('label[for="temp2"]')
      .attr("for", type + adres + counter)
      .css("background-color", css);
    $('input[id="temp2"]')
      .attr("id", type + adres + counter)
      .css("background-color", css);
    $('label[for="temp3"]')
      .attr("for", type + postcode + counter)
      .css("background-color", css);
    $('input[id="temp3"]')
      .attr("id", type + postcode + counter)
      .css("background-color", css);
    $('label[for="temp4"]')
      .attr("for", type + email + counter)
      .css("background-color", css);
    $('input[id="temp4"]')
      .attr("id", type + email + counter)
      .css("background-color", css);
    $('label[for="temp5"]')
      .attr("for", type + plaats + counter)
      .css("background-color", css);
    $('input[id="temp5"]')
      .attr("id", type + plaats + counter)
      .css("background-color", css);
    $('label[for="temp6"]')
      .attr("for", type + geboortedatum + counter)
      .css("background-color", css);
    $('input[id="temp6"]')
      .attr("id", type + geboortedatum + counter)
      .css("background-color", css);
    $('label[for="temp7"]')
      .attr("for", type + vereniging + counter)
      .css("background-color", css);
    $('input[id="temp7"]')
      .attr("id", type + vereniging + counter)
      .css("background-color", css);
    $('button[class="tempDel btn"]').attr(
      "class",
      type + "Del btn btn-primary mt-3 my-lg-0 mx-lg-2"
    );
    $('button[class="tempOk btn"]').attr(
      "class",
      type + "Ok btn btn-primary mt-3 my-lg-0 mx-lg-2"
    );
    counter++;
    if (className === "teamOk btn btn-primary mt-3 my-lg-0 mx-lg-2") {
      teamRij = counter;
    } else {
      coachRij = counter;
    }
  }

  // verwijder onderste rij van team of coach velden.
  function RemoveRow(className) {
    if (className === "teamDel btn btn-primary mt-3 my-lg-0 mx-lg-2") {
      $(".teamrij" + (teamRij - 1)).remove();
      teamRij--;
    } else {
      $(".coachrij" + (coachRij - 1)).remove();
      coachRij--;
    }
  }
});
