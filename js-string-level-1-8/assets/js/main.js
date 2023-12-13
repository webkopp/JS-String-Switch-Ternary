// Verwende den Befehl toUpperCase(), um aus der Variable const text = "Sam is going to codingschool" die veränderte Zeichenkette zu erhalten: SAM IS GOING TO SCHOOL.
// Neben toUpperCase() gibt es auch noch den Befehl toLowerCase(). Schaue, was passiert, wenn du dies auf die Variable text anwendest.
// Erzeuge mit den beiden Befehlen folgende Zeichenketten und gib sie in deinem HTML aus:
// SAM is going to SCHOOL
// sam IS GOING TO school
// Sam Is Going To School

console.log(text.toLowerCase())

const text = "Sam is going to codingschool";
let textSchool = text.replace("coding", "");
let textUpperCase = textSchool.toUpperCase();
let textLowerCase = textSchool.toLowerCase();
let exampleOne =
  textUpperCase.slice(0, 4) +
  textLowerCase.slice(4, 16) +
  textUpperCase.substring(16);

let exampleTwo =
  textLowerCase.slice(0, 4) +
  textUpperCase.slice(4, 16) +
  textLowerCase.substring(16);

let exampleThree =
  textSchool.charAt(0).toUpperCase() +
  textSchool.slice(1, 4) +
  textSchool.charAt(4).toUpperCase() +
  textSchool.slice(5, 7) +
  textSchool.charAt(7).toUpperCase() +
  textSchool.slice(8, 13) +
  textSchool.charAt(13).toUpperCase() +
  textSchool.slice(14, 16) +
  textSchool.charAt(16).toUpperCase() +
  textSchool.slice(17, 22);

document.write(textLowerCase + "</br>");
document.write(textUpperCase + "</br>");
document.write(exampleOne + "</br>");
document.write(exampleTwo + "</br>");
document.write(exampleThree + "</br>");