const tricolors = {
  red(msg) {
    return "\033[0;31m" + msg;
  },
  green(msg) {
    return "\033[0;32m" + msg;
  },
  blue(msg) {
    return "\033[0;34m" + msg;
  },
  logRed(msg) {
    console.log(red(msg));
  },
  logGreen(msg) {
    console.log(green(msg));
  },
  logBlue(msg) {
    console.log(blue(msg));
  }
};

module.exports = tricolors;
