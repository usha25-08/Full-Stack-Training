let arrFun=()=>console.log("This is arrow");
arrFun();
arrFun();
arrFun();

let arrFunc=()=> {
    let a=10;
    console.log("This is arrow");
    console.log(a);
}
arrFunc();

let obj={
    name:"sai",
    age:20,
    fun:function(){
        console.log(this.age);
    }
}
obj.fun();

//arrow function with parameters
const loginDetails=(username, password)=>{
    console.log(`Username : ${username}`);
    console.log(`Password: ${password}`);
    return "Login successful";
}
//let res=loginDetails("adimin212","admin");
//console.log(res);
console.log(loginDetails("adimin212","admin"));


