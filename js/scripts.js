var vowels = ["a", "e", "i", "o", "u", "A", "E", "I", "O", "U",]
$(document).ready(function() {
  $("form#sentence").submit(function(event) {
    event.preventDefault();
    var input = $("input#word").val()
    var sentences = input.split("");
    for (var x = 0; x < sentences.length; x += 1) {
      vowels.forEach(function(vowel) {
        if (sentences[x] === vowel) {
          sentences[x] = "-"
        };
      });
    };
    var sentences2 = sentences.join("")
    $(".output").append("<p>" + sentences2 + "</p>")
    $(".output").show()
  });
});
