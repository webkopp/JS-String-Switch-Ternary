// JS Assets:

// <b>Brief und Postkarte</b> <br>
//     	L: 10 - 23,5 cm
//     	B: 7 - 12,5 cm
//     	H: bis 1 cm

// <b>DHL Paket 2 kg</b> <br>
//       bis 60 x 30 x 15 cm

// <b>DHL Paket 5 kg</b> <br>
//       bis 120 x 60 x 60 cm

// <b>DHL Paket 10 kg</b> <br>
//       bis 120 x 60 x 60 cm

// "<b>Extra große Größe</b>

// Lernziel: Anwendung von Switch/Case.
// Schreibe eine Function, um die Daten der Selectbox zu erhalten.
// HTML und CSS ist vorgegeben (siehe Code-Snippet).
// switch
// case
// default (extragroße Größe)
// Definiere die Function showtxt();

function showtxt() {
    let category = document.querySelector("#mylist").value
    let size = category
    switch (category) {
      case "0":
        size =
          "<b>Brief und Postkarte</b> <br> L: 10 - 23,5 cm B: 7 - 12,5 cm H: bis 1 cm";
        break;
      case "1":
        size = "<b>DHL Paket 2 kg</b> <br> bis 60 x 30 x 15 cm";
        break;
      case "2":
        size = "<b>DHL Paket 5 kg</b> <br> bis 120 x 60 x 60 cm";
        break;
      case "3":
        size = "<b>DHL Paket 10 kg</b> <br> bis 120 x 60 x 60 cm";
        break;
      default:
        size = "<b>Extra große Größe</b>";
        break;
    }
    document.querySelector("#masse").innerHTML = size;
  }