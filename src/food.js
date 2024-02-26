// this uses global information 

class Food_print{
    constructor(dtype) {
        this.diet = dtype
        // 1 for vegetarian and 2 for non vegetarian 
    }

    getCarbonFootprint() {
        if (this.dtype === "vegetarian"){
            return ((0.58 + 0.66 + 0.72)/3)/907.2
        }
        else{
            return ((1.03 + 0.68)/2)/907.2
        }
    }
}

// const electricityInstance = new Electricity(100);
// console.log(electricityInstance.getCarbonFootprint());
export default Food_print;