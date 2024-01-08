//os is used for operating system operations
//can tell you about the memory or cpu
const os = require("os");
//get the plaform
const platform = os.platform();
console.log(platform);
//we can get the architecture
const architecture = os.arch();
console.log(architecture);
//I can the cpu info
const cpus = os.cpus();
console.log(cpus);
//os can get you the available memory
const memory = os.freemem();
console.log(memory);
