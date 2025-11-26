class Person{
    eat(){
        console.log("eat");
    }
    sleep(){
        console.log("sleep");
    }
}

class Engineer extends Person{
    work(){
        console.log("She/He is working on project");
    }
}

let obj1 = new Engineer();
