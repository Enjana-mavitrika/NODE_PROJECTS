let body = document.getElementsByTagName('body')[0];
let pElt = document.createElement('p');
pElt.textContent = 'Texte rajouter par le script script_1.js';
body.appendChild(pElt);

console.log(files);
console.log(files[0].href);

let bodyContainer = document.querySelector("tbody");
let headContainer = document.querySelector("thead > tr")

let currentLine = bodyContainer.firstElementChild;

thElt = document.createElement('th');
thElt.textContent = "http request";

// ajout colonne http request
if (files.length > 0)
    headContainer.appendChild(thElt);

// traitement des fichiers
files.forEach((file) => {
    let tdElt = document.createElement('td');
    if (file.href.length > 0) {
        let aElt = document.createElement('a');
        aElt.setAttribute('href', file.href);
        aElt.setAttribute('download', '');
        aElt.textContent = file.href;
        tdElt.appendChild(aElt);
    }
    else {
        tdElt.textContent = "empty";
    }
    
    currentLine.appendChild(tdElt);

    // move to the next line
    currentLine = currentLine.nextElementSibling;
});
