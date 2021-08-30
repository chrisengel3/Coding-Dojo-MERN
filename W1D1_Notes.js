// FUNCTION VS ARROW 

function sayHello(name) {
    console.log("hello" + name);
};

const sayHello2 = (name) => console.log('Hello' + name); 


// TERNARY OPERATOR

var x = 11;

// non ternary
if(x>10){
    return "yes"
} else {
    return "no"
}

// ternary operator version
y = x > 10 ? "yes" : "no";

// if condition is true load the div if not loading
x > 10 ? "<div> </div>" : "loading..."


// SPREAD OPERATOR
let a = [10,20,30];

// copies all of a into b
let b = [...a];