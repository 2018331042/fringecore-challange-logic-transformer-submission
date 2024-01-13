const weirdExpressions = [
  "a othoba b",
  "b ebong c othoba d",
  "ebong ebong othoba othoba ebong",
  "((ebong) othoba ebong) ebong othoba",
  "(ebong othoba (ebong ebong ((othoba)othoba(ebong))))",
  "ebong",
];


for (const expression of weirdExpressions) {
  // fill this in
  console.log(convertExpresstion(expression));
}

function convertExpresstion(expression){
  let output = ""; // output string
  let currentWord = ""; // adding the characters and find the current word before space or parenthesis
  let prevWord = false; // if found a variable then true otherwise false

  for(let char of expression){
    if(char === "(" || char === ")" || char === " "){
      // wether the current char is available or not
      if(currentWord !== ""){
        if(currentWord === "ebong" || currentWord === "othoba"){
          //if not found any variable then add the current char to the output string
          if(!prevWord){
            output += currentWord;
            prevWord = true;
          }else{ // if found the variable then add the operator to the output string
            prevWord = false;
            if(output[output.length - 1] !== " "){ // check wether the last char of the output string is space or not. if not then add a space before the operator
              output += " ";
            }
            if(currentWord === "ebong"){
              output += "&&";
            }else {
              output += "||";
            }
            currentWord = ""; // make the current word empty
            if(char !== " "){ // check wether the char is space or not. if not then add a space after the operator.
              output += " ";
            }
          }
          currentWord = "";
          output += char;
         
        }else{
          output += currentWord;
          prevWord = true;
          output += " "
          currentWord = "";
        }
        
      }else{
        output += char;
      }
    }else {
      currentWord += char;
    }
  }
  return output + currentWord; // return the output string and add the current word as well to make sure we dont miss the last word
}