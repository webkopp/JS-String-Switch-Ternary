// Es geht weiter mit dem Befehl slice(). Slice extrahiert Inhalte der Variable und gibt es in Form eines Arrays zurück.
// Probiere es mit const A = 'Susi is going to codingschool' aus und wende slice() an, um in deinem HTML Folgendes angezeigt zu bekommen:
// Susi
// is
// is going to school
// school
// Susi is school
// Speichere jedes Ergebnis in einer Variablen und verwende document.write(myVar+"
// "), um das Ergebnis im Dokument auszugeben. myVar ist hier nur ein Beispiel und kann durch den Namen deiner Variablen ersetzt werden.

const A = "Susi is going to codingschool"
console.log(A)

let var1 = A.slice(0, 4)
console.log(var1)
document.write(var1 + " " + "<br>")

let var2 = A.slice(5, 7)
console.log(var2)
document.write(var2 + " " + "<br>")

let var3 = A.slice(5, 16)
console.log(var3)
document.write(var3 + " " + "<br>")

let var4 = A.slice(23, 29)
console.log(var4)
document.write(var4 + " " + "<br>")

let var5 = A.slice()
console.log(var3)
document.write(var1 + " " + var2 + " " + var4 + "<br>")






