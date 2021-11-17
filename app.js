let paragraphes = document.getElementsByTagName("p");

function aleatoire () {
    let alea = Math.trunc(Math.random() * 100);
    return alea;

}

for (i = 0; i < paragraphes.length; i++) {
    paragraphes[i].innerText = aleatoire();
}
