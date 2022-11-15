"use strict";

/*** Rechner */
/*
0. a+b / a-b/ a*b / a/b  // ergebnis c 
1. Dateneingabe + -überprüfung :
2. Auswahl Rechenart : check!
3. Fkt. Grundrechenarten : check!
4. Ausgabe in Konsole : check!
*/


// Globale Variable
let isNotAborted; 

// application / App
startApp();
function startApp() {
    let num1,num2,op;
    isNotAborted = true;

    if (isNotAborted){num1 = getNumber("1st");}
    if (isNotAborted){num2 = getNumber("2nd");}
    if (isNotAborted){op = getOp();}
    
    if (isNotAborted){
        output(calculator(num1,num2,op)); 
    } else{
        output("Aborted by user!");
    }
}

// module: data input | test:
//output(getNumber("1st"));
function getNumber(figure) {
    const displayStr = "Please insert " + figure + " number:";
    let inputStr = prompt(displayStr) 
    let num = parseInt(inputStr);

    // if num is NOT a number AND user DIDN'T click at Abbrechen
    while (isNaN(num) && (inputStr !== null)) {
        inputStr =  prompt(displayStr);
        num = parseInt(inputStr); 
    }
    
    // if this is aborted, ALL gets aborted ...
    if(inputStr == null){isNotAborted = false;}
    return num;
        
}

// module: input operator | Test:
//output(getOp());
function getOp() {
    const displayStr = "Please insert correct operator [ + | - | * | : | / ]:";
    let op = prompt(displayStr); 

    // if op is NOT valid AND user DIDN'T click at Abbrechen
    while (isNotValidOp(op) && (op !== null)) {
        op = prompt(displayStr);
    }

    if (op == null){isNotAborted = false;}
    return op;
}

// module: check operator | Test:
// agreement : "+","-","*",":","/"
// output(isNotValidOp("+"));
// output(isNotValidOp("-"));
// output(isNotValidOp("*"));
// output(isNotValidOp(":"));
// output(isNotValidOp("/"));
// output(isNotValidOp("#?#"));
// output(isNotValidOp(""));
function isNotValidOp(op) {
    return op != "+" && op != "-" && op != "*" && op != ":" && op != "/";
}

// module: calculator | tests:
// agreement : "+","-","*",":"
// output(calculator(2,2,"+"));
// output(calculator(2,2,"-"));
// output(calculator(2,2,"*"));
// output(calculator(2,2,":"));
// output(calculator(2,0,"/"));
// output(calculator(2,2,"#?!"));
function calculator(a,b,op) {
    switch (op) {
        case "+": // addition
            return add(a,b);
        case "-": // subtraktion
            return subtract(a,b);
        case "*": // multiplikation
            return multiply(a,b);
        case ":": // divison
        case "/": // divison
            return divide(a,b);
        default:  // Error ...
            return "Something went wrong!";
    }
}

// module: division a / b |  test:
// output(divide(2,3));
// output(divide(2,-3));
// output(divide(2,0));
// output(divide(0,2));
function divide(a,b) {
    if (b == 0) {
        return "Division by 0 not possible!"; 
    }
    return a / b; 
 }

// module: multiplication a * b |  test:
// output(multiply(2,3));
// output(multiply(2,-3));
// output(multiply(2,0));
function multiply(a,b) {
    return a * b; 
 }

// module: subtraction a - b |  test:
// output(subtract(2,3));
// output(subtract(2,-3));
// output(subtract(2,0));
function subtract(a,b) {
    return a - b; 
 }
 
// module: addition a + b |  test:
// output(add(2,3));
// output(add(2,-3));
// output(add(2,0));
function add(a,b) {
   return a + b; 
}

// module: console output | test:
// output("hello");
// output(2);
function output(outputData) {
   //console.log(typeof outputData);
    if (typeof outputData == "number") {
        console.log("The result is: " + outputData); 
    } else {
        console.log("ERROR: " + outputData); 
    }
}