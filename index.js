const tricolors = {
  red(msg) {
    console.log("\033[0;31m" + msg);
  },
  green(msg) {
    console.log("\033[0;32m" + msg);
  },
  blue(msg) {
    console.log("\033[0;34m" + msg);
  },
};

module.exports = tricolors;
