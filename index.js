const tricolors = {
  red(msg) {
    return "\033[0;31m" + msg + "\033[0m";
  },
  green(msg) {
    return "\033[0;32m" + msg + "\033[0m";
  },
  blue(msg) {
    return "\033[0;34m" + msg + "\033[0m";
  },
  redLog(msg) {
    console.log(red(msg));
  },
  greenLog(msg) {
    console.log(green(msg));
  },
  blueLog(msg) {
    console.log(blue(msg));
  }
};

module.exports = tricolors;
