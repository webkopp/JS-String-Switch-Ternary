// Eine weitere string-Methode ist: replace(). Auch diesen Befehl kannst du verwenden, um die gewünschten Zeichenketten zu erhalten.
// Nutze wiedereinmal die folgende Variable const text = "Sam is good at codingschool" und zeige mit der Methode "replace" folgende Ausgabe in einem HTML-Dokument an:
// Sam is bad at school
// Susi is good at school
// Sam is good at tennis
// Speichere jedes Ergebnis in einer Variablen und verwende document.write(myVar + "<br>"), um das Ergebnis anzuzeigen. myVar ist hier nur ein Beispiel und kann durch den Namen deiner Variablen ersetzt werden.

const text = "Sam is good at codingschool"
console.log(text)
document.write(text + "<br>")

let var1 = text.replace("codingschool", "school")
console.log(var1)
document.write(var1 + "<br>")

let var2 = var1.replace("good", "bad")
console.log(var2)
document.write(var2 + "<br>")

let var3 = var1.replace("Sam", "Susi")
console.log(var3)
document.write(var3 + "<br>")

let var4 = var1.replace("school", "tenis")
console.log(var4)
document.write(var4 + "<br>")