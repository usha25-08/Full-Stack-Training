//nested functions
function outerFun(){
    console.log("Outer executing...");
    let a=10;
    function innerFun(){
        console.log("Inner executing....");
        //console.log(a);
        return a++;
    }
    return innerFun();
}
//outerFun();
let result=outerFun();

console.log(result);
console.log(result);
console.log(result);
console.log(result);


// any functions accept another function as a parameter
function HomePage(){
    console.log("this is a home page")
}
function LoginPage(){
    console.log("user login successfully");
}
function RegisterPage(){
    console.log("User register successfully");
};
HomePage(RegisterPage(), LoginPage());//loginpage and registerpage are callback functions





function Display(setValues, getValues){
   setValues();
   getValues();
}
Display(()=>)
