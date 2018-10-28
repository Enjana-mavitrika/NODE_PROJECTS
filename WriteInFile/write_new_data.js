const utils = require('./utils');

let path = 'script_data.js';

let new_data = ", {href: ''}, {href : 'output/scenario_s1/rapport_http.txt'}";

let regex = /(];)/;

utils.addToFile(path, regex, new_data);