const sayHi = require("./hello-function"); //invoking the mind-granade module, even though we didn't export it. Importing the file automatically runs the code in this file.
const names = require("./names");
require("./mind-granade"); // this will run the code in the mind-grenade file, even though we didn't export it. Importing the file automatically runs the code in this file.
sayHi(names.john);

sayHi(names.stephane);
