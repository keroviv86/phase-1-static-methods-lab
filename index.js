class Formatter {
  static capitalize(str) {
    return str[0].toUpperCase() + str.slice(1)
  }

  static sanitize(str) {
    return str.replaceAll(/[^A-z0-9' -]|\^/g, '')
  }

  static titleize(str) {
    
  }
}