// Baden-Württemberg hat 10,880 Mio Einwohner und Stuttgart ist die Hauptstadt

// Bayern hat 12,844 Mio Einwohner und München ist die Hauptstadt

// Berlin hat 3,520 Mio Einwohner und Berlin ist die Hauptstadt

// Brandenburg hat 2,485 Mio Einwohner und Potsdam ist die Hauptstadt

// Bremen hat 0,671 Mio Einwohner und Bremen ist die Hauptstadt

// Hamburg hat 1,787 Mio Einwohner und Hamburg ist die Hauptstadt

// Hessen hat 6,176 Mio Einwohner und Wiesbaden ist die Hauptstadt

// Mecklenburg-Vorpommern hat 1,612 Mio Einwohner und Schwerin ist die Hauptstadt

// Niedersachsen hat 7,927 Mio Einwohner und Hannover ist die Hauptstadt

// Nordrhein-Westfalen hat 17,865 Mio Einwohner und Düsseldorf ist die Hauptstadt

// Rheinland-Pfalz hat 4,053 Mio Einwohner und Mainz ist die Hauptstadt

// Saarland hat 0,996 Mio Einwohner und Saarbrücken ist die Hauptstadt

// Sachsen hat 4,085 Mio Einwohner und Dresden ist die Hauptstadt

// Sachsen-Anhalt hat 2,245 Mio Einwohner und Magdeburg ist die Hauptstadt

// Schleswig-Holstein hat 2,859 Mio Einwohner und Kiel ist die Hauptstadt

// Thüringen hat 2,171 Mio Einwohner und Erfurt ist die Hauptstadt

// Ein solches Bundesland gibt es in Deutschland nicht.

// Schreibe eine Funktion, um Daten über die Bundesländer zu erhalten.
// Nutze dafür das vorgegebene HTML und CSS, und lasse dir mit switch, case, break und default die Textschnipsel (auch im Code-Snippet) ausgeben.

function check() {
    BL = document.querySelector("#bundeslandInfo").value;
    ausgabe = BL;
  
    switch (ausgabe) {
      case "Bayern":
        ausgabe =
          "Bayern hat 12,844 Mio Einwohner und München ist die Hauptstadt";
        break;
      default:
        ausgabe = "Ein solches Bundesland gibt es in Deutschland nicht.";
        break;
    }
    document.querySelector("#bundeslandInfoErgebnis").innerHTML = ausgabe;
}