$(document).ready(function() {
  const naam = "naam";
  const achternaam = "achternaam";
  const adres = "adres";
  const postcode = "postcode";
  const email = "email";
  const plaats = "plaats";
  const geboortedatum = "geboortedatum";
  const vereniging = "vereniging";
  const coach = "coach";
  let teamRij = 1;
  let coachRij = 1;
  let form =
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

  // event handlers
  $("form").on("submit", false);
  $(".ok").on("click", teamAdd);
  $(document.body).on("click", ".delete", removeTeam);
  $(".coachok").on("click", coachAdd);
  $(document.body).on("click", ".coachDel", removeCoach);

  // voeg een nieuwe rij teamvelden toe
  function teamAdd() {
    if (teamRij === 15) {
      alert("Er mogen maximaal 15 teamleden worden toegevoegd");
    } else {
      $('[name="team"]').append(form);
      if (teamRij % 2 > 0) {
        $('div[class="d-flex flex-column flex-lg-row rij"]')
          .attr("class", `d-flex flex-column flex-lg-row rij${teamRij}`)
          .css("background-color", "lightgrey");
        $('label[for="temp"]')
          .attr("for", naam + teamRij)
          .css("background-color", "lightgrey");
        $('input[id="temp"]')
          .attr("id", naam + teamRij)
          .css("background-color", "lightgrey");
        $('label[for="temp1"]')
          .attr("for", achternaam + teamRij)
          .css("background-color", "lightgrey");
        $('input[id="temp1"]')
          .attr("id", achternaam + teamRij)
          .css("background-color", "lightgrey");
        $('label[for="temp2"]')
          .attr("for", adres + teamRij)
          .css("background-color", "lightgrey");
        $('input[id="temp2"]')
          .attr("id", adres + teamRij)
          .css("background-color", "lightgrey");
        $('label[for="temp3"]')
          .attr("for", postcode + teamRij)
          .css("background-color", "lightgrey");
        $('input[id="temp3"]')
          .attr("id", postcode + teamRij)
          .css("background-color", "lightgrey");
        $('label[for="temp4"]')
          .attr("for", email + teamRij)
          .css("background-color", "lightgrey");
        $('input[id="temp4"]')
          .attr("id", email + teamRij)
          .css("background-color", "lightgrey");
        $('label[for="temp5"]')
          .attr("for", plaats + teamRij)
          .css("background-color", "lightgrey");
        $('input[id="temp5"]')
          .attr("id", plaats + teamRij)
          .css("background-color", "lightgrey");
        $('label[for="temp6"]')
          .attr("for", geboortedatum + teamRij)
          .css("background-color", "lightgrey");
        $('input[id="temp6"]')
          .attr("id", geboortedatum + teamRij)
          .css("background-color", "lightgrey");
        $('label[for="temp7"]')
          .attr("for", vereniging + teamRij)
          .css("background-color", "lightgrey");
        $('input[id="temp7"]')
          .attr("id", vereniging + teamRij)
          .css("background-color", "lightgrey");
        $('button[class="tempDel btn"]').attr("class", "delete btn");
        teamRij++;
      } else {
        $('div[class="d-flex flex-column flex-lg-row rij"]').attr(
          "class",
          `d-flex flex-column flex-lg-row rij${teamRij}`
        );
        $('label[for="temp"]').attr("for", naam + teamRij);
        $('input[id="temp"]').attr("id", naam + teamRij);
        $('label[for="temp1"]').attr("for", achternaam + teamRij);
        $('input[id="temp1"]').attr("id", achternaam + teamRij);
        $('label[for="temp2"]').attr("for", adres + teamRij);
        $('input[id="temp2"]').attr("id", adres + teamRij);
        $('label[for="temp3"]').attr("for", postcode + teamRij);
        $('input[id="temp3"]').attr("id", postcode + teamRij);
        $('label[for="temp4"]').attr("for", email + teamRij);
        $('input[id="temp4"]').attr("id", email + teamRij);
        $('label[for="temp5"]').attr("for", plaats + teamRij);
        $('input[id="temp5"]').attr("id", plaats + teamRij);
        $('label[for="temp6"]').attr("for", geboortedatum + teamRij);
        $('input[id="temp6"]').attr("id", geboortedatum + teamRij);
        $('label[for="temp7"]').attr("for", vereniging + teamRij);
        $('input[id="temp7"]').attr("id", vereniging + teamRij);
        $('button[class="tempDel btn"]').attr("class", "delete btn");
        teamRij++;
      }
    }
  }

  // voeg een nieuwe rij coach velden toe
  function coachAdd() {
    if (coachRij === 3) {
      alert("Er mogen maximaal 3 coaches worden toegevoegd");
    } else {
      $('[name="coach"]').append(form);
      if (coachRij % 2 > 0) {
        $('div[class="d-flex flex-column flex-lg-row rij"]')
          .attr("class", `d-flex flex-column flex-lg-row coachrij${coachRij}`)
          .css("background-color", "lightgrey");
        $('label[for="temp"]')
          .attr("for", coach + naam + coachRij)
          .css("background-color", "lightgrey");
        $('input[id="temp"]')
          .attr("id", coach + naam + coachRij)
          .css("background-color", "lightgrey");
        $('label[for="temp1"]')
          .attr("for", coach + achternaam + coachRij)
          .css("background-color", "lightgrey");
        $('input[id="temp1"]')
          .attr("id", coach + achternaam + coachRij)
          .css("background-color", "lightgrey");
        $('label[for="temp2"]')
          .attr("for", coach + adres + coachRij)
          .css("background-color", "lightgrey");
        $('input[id="temp2"]')
          .attr("id", coach + adres + coachRij)
          .css("background-color", "lightgrey");
        $('label[for="temp3"]')
          .attr("for", coach + postcode + coachRij)
          .css("background-color", "lightgrey");
        $('input[id="temp3"]')
          .attr("id", coach + postcode + coachRij)
          .css("background-color", "lightgrey");
        $('label[for="temp4"]')
          .attr("for", coach + email + coachRij)
          .css("background-color", "lightgrey");
        $('input[id="temp4"]')
          .attr("id", coach + email + coachRij)
          .css("background-color", "lightgrey");
        $('label[for="temp5"]')
          .attr("for", coach + plaats + coachRij)
          .css("background-color", "lightgrey");
        $('input[id="temp5"]')
          .attr("id", coach + plaats + coachRij)
          .css("background-color", "lightgrey");
        $('label[for="temp6"]')
          .attr("for", coach + geboortedatum + coachRij)
          .css("background-color", "lightgrey");
        $('input[id="temp6"]')
          .attr("id", coach + geboortedatum + coachRij)
          .css("background-color", "lightgrey");
        $('label[for="temp7"]')
          .attr("for", coach + vereniging + coachRij)
          .css("background-color", "lightgrey");
        $('input[id="temp7"]')
          .attr("id", coach + vereniging + coachRij)
          .css("background-color", "lightgrey");
        $('button[class="tempDel btn"]').attr("class", "coachDel btn");
        coachRij++;
      } else {
        $('div[class="d-flex flex-column flex-lg-row rij"]').attr(
          "class",
          `d-flex flex-column flex-lg-row coachrij${coachRij}`
        );
        $('label[for="temp"]').attr("for", coach + naam + coachRij);
        $('input[id="temp"]').attr("id", coach + naam + coachRij);
        $('label[for="temp1"]').attr("for", coach + achternaam + coachRij);
        $('input[id="temp1"]').attr("id", coach + achternaam + coachRij);
        $('label[for="temp2"]').attr("for", coach + adres + coachRij);
        $('input[id="temp2"]').attr("id", coach + adres + coachRij);
        $('label[for="temp3"]').attr("for", coach + postcode + coachRij);
        $('input[id="temp3"]').attr("id", coach + postcode + coachRij);
        $('label[for="temp4"]').attr("for", coach + email + coachRij);
        $('input[id="temp4"]').attr("id", coach + email + coachRij);
        $('label[for="temp5"]').attr("for", coach + plaats + coachRij);
        $('input[id="temp5"]').attr("id", coach + plaats + coachRij);
        $('label[for="temp6"]').attr("for", coach + geboortedatum + coachRij);
        $('input[id="temp6"]').attr("id", coach + geboortedatum + coachRij);
        $('label[for="temp7"]').attr("for", coach + vereniging + coachRij);
        $('input[id="temp7"]').attr("id", coach + vereniging + coachRij);
        $('button[class="tempDel btn"]').attr("class", "coachDel btn");
        coachRij++;
      }
    }
  }

  // verwijder onderste rij van teamvelden.
  function removeTeam() {
    $(".rij" + (teamRij - 1)).remove();
    teamRij--;
  }

  function removeCoach() {
    $(".coachrij" + (coachRij - 1)).remove();
    coachRij--;
  }
});
