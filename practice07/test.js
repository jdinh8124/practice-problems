// ## Igpay Atinlay

// Build a function that will translate text into "Pig Latin" Take the first consonant and move it to the end of a word and then affix "ay" to the end of that word."

//   - Write a function that takes one parameter
//     - Parameter 1 - A string
//       - The function should output your input string translated into Pig Latin
//         - Example:
// - `var myString = "Hello my name is Stu"`
//   - `translate(myString);
// 		- Output - `"ellohay ymay ameya siay tusay"`

// #### Making it better!

// - There are several more rules to Pig Latin, try incorporating as many as you can into your function.
// 	- There are different rules for words that start with vowel sounds or silent letters for example.
// 	- <a href="http://en.wikipedia.org/wiki/Pig_Latin">Here</a> is a link to an explanation of all the rules.
// - Also try maintaining capitalization of words that are capitalized in your input string.
// 	- Example:
// 		- `"Hello there"` would be `"Ellohay heretay"`
var myString = "Hello my name is Stu"

function translate(string){
  var outputPig = [];
  var split = string.split(" ");
  for(var i = 0; i <split.length; i++){
    if(split[i][0] === 'a' || split[i][0] === 'e' || split[i][0] === 'i' || split[i][0] === 'o' || split[i][0] === 'u'){
    var one = (split[i] + "ay").toLowerCase();
    var three = one.slice(1);
    var two = one[0].toUpperCase();
      outputPig.push(two + three);
    }else{
      var lostOneLetter = split[i].slice(1);
      var combined = (lostOneLetter + split[i][0] + "ay").toLowerCase();
      var sliced = combined.slice(1);
      var letter = combined[0].toUpperCase()
      outputPig.push(letter+sliced);

  }
    outputPig[i].toLowerCase();
    outputPig[i][0].toUpperCase();
  }
  return outputPig;
}
console.log(translate(myString));
