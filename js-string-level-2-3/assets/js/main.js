// Erstelle eine Funktion, die ein bestimmtes Wort, überall wo es vorkommt, in einem Artikel hervorhebt.
// Nutze dafür den vorgebenen Code.

// Dazu kannst du die replaceAll-Methode des String-Objekts verwenden.
// Mit der innerText-Eigenschaft des Elements kannst du nur den Text des Artikels erhalten und mit der innerHTML-Eigenschaft kannst du den HTML-Inhalt des Artikels festlegen.
// Du kannst ein span-Element verwenden, um die Wörter hervorzuheben.

function mickey() {
    const txt = document.querySelector("article")
    const input = document.querySelector("#search-input").value

    console.log(input)

    txt.innerHTML = txt.innerText.replaceAll(input, "<span style='background-color: yellow;''>" + input + "</span>")
    
}