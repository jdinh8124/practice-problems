// - changeElements: Change any element with a given class (for example "numConvert")
//   - grab their text, which will be a number in word form(ie one, three, nine)
//     - The numbers will only be from one to nine
//       - Change their text to the numeric form(1 - 9)
//         - If it doesn't understand the word, it leaves it unchanged


function changeElements(element){
    var numtext = $(element).text();
    switch (numtext){
      case "one":
        numtext = 1;
        break;
      case "two":
        numtext = 2;
        break;
      case "three":
        numtext = 3;
        break;
      case "four":
        numtext = 4;
        break;
      case "five":
        numtext = 5;
        break;
      case "six":
        numtext = 6;
        break;
      case "seven":
        numtext = 7;
        break;
      case "eight":
        numtext = 8;
        break;
      case "nine":
        numtext = 9;
        break;
        default:
        return;
    }
    return $(element).text(numtext);
}

function appendTextToElement(){

}

function addClass(){
}

function removeElements(){

}
