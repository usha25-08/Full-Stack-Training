function* genFun(){
    yield a=10;
    yield b=20;
    console.log("generator fucntion");
}
let res=genFun();
//console.log(res.next().value);
console.log(res.next());
console.log(res.next());
console.log(res.next());

