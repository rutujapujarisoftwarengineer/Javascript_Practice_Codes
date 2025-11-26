class ToyotaCar{
    constructor(brand, mileage){
        console.log("Creating new object");
        this.brand = brand;
        this.mileage = mileage;
    }
    start(){
        console.log("Start car");
    }
    stop(){
        console.log("Stop car");
    }

//     setBrand(brand){
//     this.brandName = brand;
// }
}



let fortuner = new ToyotaCar("fortuner", 20);
//fortuner.setBrand("Fortuner");
let lexus = new ToyotaCar("lexus", 12);
//lexus.setBrand("lexus");
