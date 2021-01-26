var myfunc = function(){
    return "Hello";
}

console.log(myfunc());

/*
Arrow function:
1) var variable_name = () => {
    function body
}
2) Arrow functions can not be used as constructors
*/


var MyArrow = (...u) => {
    return u;
}
console.log(MyArrow(10,23,56,3,4,5,6,7,8,9,2));