// Lernziel: Verstehen und Anwenden des Ternary Operators.
// Nun sollst du eine Abfrage erstellen, in der du prüfst, ob das User:innen-Passwort „sicher“ genug ist.
// Als Anforderung für das Passwort gilt, dass es mindestens 8 Zeichen lang sein muss.

// Bei dieser Abfrage brauchst du den ternary operator und .length.

function checkNancy() {
    let passLong = document.querySelector("#password").value.length
    let pwSafe =
      passLong > 8
        ? "Das Passwort ist sicher."
        : "Das Passwort muss mindestens 8 Zeichen lang sein."
    document.querySelector("p").innerHTML = `<p>${pwSafe}</p>`
  }