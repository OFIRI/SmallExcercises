var letterWidth = 4;
var letterHeight = 5;
var text = "manhattan"
var letters = [
    " #  ##   ## ##  ### ###  ## # # ###  ## # # #   # # ###  #  ##   #  ##   ## ### # # # # # # # # # # ### ### ",
    "# # # # #   # # #   #   #   # #  #    # # # #   ### # # # # # # # # # # #    #  # # # # # # # # # #   #   # ",
    "### ##  #   # # ##  ##  # # ###  #    # ##  #   ### # # # # ##  # # ##   #   #  # # # # ###  #   #   #   ## ",
    "# # # # #   # # #   #   # # # #  #  # # # # #   # # # # # # #    ## # #   #  #  # # # # ### # #  #  #       ",
    "# # ##   ## ##  ### #    ## # # ###  #  # # ### # # # #  #  #     # # # ##   #  ###  #  # # # #  #  ###  #  "];


var printText = function(){
    var dataToPrint = [];
    for (var rowIndex=0; rowIndex<letterHeight; rowIndex++) {
        dataToPrint.push("");
    }

    for(var letter of text){
        var charIndex = letter.toUpperCase().charCodeAt(0) - 65;
        charIndex = validateIndex(charIndex);

        for (var cell of letters) {
            var letterPartInThisLine = "";

            for (var j=0; j < letterWidth; j++){
                letterPartInThisLine += cell[charIndex * letterWidth + j];
            }

            dataToPrint[letters.indexOf(cell)] += letterPartInThisLine;
        }
    }

    for (var row of dataToPrint) {
        console.log(row);
    }

};

var validateIndex = function(index) {
  if (index < 0 || index > 25) {
      index = 26;
  }

  return index;
};

printText();