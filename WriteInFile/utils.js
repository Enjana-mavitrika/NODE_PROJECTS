const fs = require("fs");

/**
 *
 * Fonction permettant d'écrire dans un fichier en utilisant une expression régulière pour permettre de modifier le fichier avec plus de précision
 *
 * @param {string} chemin du fichier à modifier
 *
 * @param {RegExp} regex Expression
 * 
 * @param {string} text
 *
 */
exports.addToFile = (path, regex, text) => {
    let content = fs.readFileSync(path).toString();

    content = content.replace(regex, `${text} $1`);

    fs.writeFileSync(path, content, 'utf8');
    console.log(content);
}

