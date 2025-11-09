function Matches(team1, team2, date, time, stadium) {
  this.team1 = team1;
  this.team2 = team2;
  this.date = date;
  this.time = time;
  this.stadium = stadium;
}
var ajaVben = new Matches(
  "AJX",
  "BEN",
  "25 Nov",
  "10:45 P.M.",
  "Johan Cruijff ArenA"
);
var galaVusg = new Matches("GAL", "USG", "25 Nov", "10:45 P.M.", "Rams Park");
var bgVjuv = new Matches(
  "BOD",
  "JUV",
  "26 Nov",
  "1:00 A.M.",
  "Aspmyra Stadion"
);
var napVqfk = new Matches(
  "NAP",
  "QAR",
  "26 Nov",
  "1:00 A.M.",
  "Stadio Diego Armando Maradona"
);
var marVnew = new Matches(
  "MAR",
  "NEW",
  "26 Nov",
  "1:00 A.M.",
  "Stade Velodrome"
);
var bvbVvil = new Matches(
  "BVB",
  "VIL",
  "26 Nov",
  "1:00 A.M.",
  "Signal Iduna Park"
);
var cheVbar = new Matches(
  "CHE",
  "BAR",
  "26 Nov",
  "1:00 A.M.",
  "Stamford Bridge"
);
var manVlev = new Matches(
  "MCI",
  "LEV",
  "26 Nov",
  "1:00 A.M.",
  "Etihad Stadium"
);
var spVath = new Matches("SLA", "ATH", "26 Nov", "1:00 A.M.", "Fortuna Arena");
var pafVmon = new Matches(
  "PAF",
  "MON",
  "26 Nov",
  "10:45 P.M.",
  "Stelios Kyriakides Stadium"
);
var copVka = new Matches("CPH", "KAI", "26 Nov", "10:45 P.M.", "Parken");
var olyVrma = new Matches(
  "OLY",
  "RMA",
  "27 Nov",
  "1:00 A.M.",
  "Karaiskakis Stadium"
);
var spoVcb = new Matches(
  "SPO",
  "BRU",
  "27 Nov",
  "1:00 A.M.",
  "Estadio Jose Alvalade"
);
var efVatl = new Matches(
  "FRA",
  "ATA",
  "27 Nov",
  "1:00 A.M.",
  "Deutsche Bank Park"
);
var livVpsv = new Matches("LIV", "PSV", "27 Nov", "1:00 A.M.", "Anfield");
var atletiVinter = new Matches(
  "ATM",
  "INT",
  "27 Nov",
  "1:00 A.M.",
  "Riyadh Air Metropolitano"
);
var arsVbay = new Matches("ARS", "BAY", "26 Nov", "1:00 A.M.", "Emirates");
var psgVtot = new Matches(
  "PSG",
  "TOT",
  "27 Nov",
  "1:00 A.M.",
  "Parc des Princes"
);

var allMatches = [
  ajaVben,
  galaVusg,
  bgVjuv,
  napVqfk,
  marVnew,
  bvbVvil,
  cheVbar,
  manVlev,
  spVath,
  pafVmon,
  copVka,
  olyVrma,
  spoVcb,
  efVatl,
  livVpsv,
  atletiVinter,
  arsVbay,
  psgVtot,
];

var cardsContainer = document.getElementById("cards");

for (var i = 0; i < allMatches.length; i++) {
  var match = allMatches[i];
  var card = document.createElement("div");
  card.className = "card";

  card.innerHTML =
    "<div class='teams'>" +
    match.team1 +
    " <span style='color:#ccc;'>VS</span> " +
    match.team2 +
    "</div>" +
    "<div class='time'>" +
    match.time +
    "</div>" +
    "<div class='date'>" +
    match.date.toUpperCase() +
    "</div>" +
    "<div class='stadium'>" +
    match.stadium +
    "</div>";

  cardsContainer.appendChild(card);
}
