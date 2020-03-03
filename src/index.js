module.exports = function check(str, bracketsConfig) {
  // your solution
  let openingBracketsStack = [];                                   //create stack for opening brackets
for (let s of str) {
    //count coordinates of s in bracketsConfig
    let i = bracketsConfig.findIndex((item) => item.includes(s));  
    let j;
    if (!(bracketsConfig[i][0] === bracketsConfig[i][1])){         //if brackets are different 
        j = bracketsConfig[i].findIndex((item) => item === s); //open j==0, close j==1;
    } else {                                                        // if brackets are the same
        if (openingBracketsStack.length === 0 || !(openingBracketsStack[openingBracketsStack.length-1].s === s)) { //если стек пуст или последний в стеке не равен текущему символу тогда считаем его открывающей скобкой, иначе закрыв.                                                 
            j = 0;
        } else j = 1;
    }                                                           
    
    if (j===0) openingBracketsStack.push({s,i,j});              // if opening put into stack with coordinates
    else {                                                      // if closing - pop last opening bracket from stack and check
        let lastOpeningBracket = openingBracketsStack.pop();
        if (lastOpeningBracket === undefined) return false;
        if (!(lastOpeningBracket.i === i)) return false;
        else continue
    }                                                     
}

    if (openingBracketsStack.length != 0) return false;           // if opening brackets left in stack  - false
    return true;
}
