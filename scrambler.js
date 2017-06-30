function scramble(password) {
  var letters = "abcdefghijklmnopqrstuvwxyzA";
  var output = []
  for (var i = 0; i < password.length; i++) {
    if (password[i] === " ") {output.push(password[i]); continue}
    var newLetter = letters[letters.search(password[i]) + 1]
    output.push(newLetter)
  }
  var outputToString = function() {
    return output.join("")
  }()
  return outputToString
}

module.exports = {
  scramble: scramble
}