const tricolors = {
  red(msg) {
    return "\033[0;31m" + msg;
  },
  green(msg) {
    return "\033[0;32m" + msg;
  },
  blue(msg) {
    return "\033[0;34m" + msg;
  }
};

module.exports = tricolors;
