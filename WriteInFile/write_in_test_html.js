const utils = require('./utils');

let path = 'test.html';

let script = '\n\t<script src="script_data.js" type="application\/javascript"><\/script>\n \n\t<script src="script.js" type="application\/javascript"><\/script>\n';

let regex = /(<\/body>)/;

utils.addToFile(path, regex, script);
