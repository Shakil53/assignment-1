"use strict";
{
    // --------------------1---------------------------------
    const checkNumberOrString = (param) => {
        if (typeof param === 'string') {
            return param.length;
        }
        else if (typeof param === 'number') {
            return param * param;
        }
        else {
            throw new Error('Input either string or number');
        }
    };
    checkNumberOrString(2);
}
const getAddressCity = (person) => {
    var _a;
    return (_a = person.address) === null || _a === void 0 ? void 0 : _a.city;
};
// -------------------------3--------------------------------
{
    // const isCat = (animal: Animal) => {
    //     return animal instanceof Cat
    // }
    const isCat = (param) => {
        if ("species" in param) {
            console.log(`yes, it's a cat`);
        }
        else {
            console.log(`no, it's not a cat`);
        }
    };
    // -----------------------Or 3 ------------------
    {
        class Animal {
            constructor(name, species) {
                this.name = name;
                this.species = species;
            }
            makeSound() {
            }
        }
        class Cat extends Animal {
            constructor(name, species) {
                super(name, species);
            }
            makeMeaw() {
                console.log(`yes, it's a cat`);
            }
        }
        class Dog extends Animal {
            constructor(name, species) {
                super(name, species);
            }
            makeBark() {
                console.log(`no, it's not a cat`);
            }
        }
        const isCat = (animal) => {
            if (animal instanceof Dog) {
                animal.makeBark();
            }
            else if (animal instanceof Cat) {
                animal.makeMeaw();
            }
        };
        const dog = new Dog("Dog bhai", 'Dog');
        const cat = new Cat("Cat bhai", 'cat');
        isCat(dog);
    }
}
// ---------------------4-----------------------
{
    const sumNumbers = (mixedData) => {
        let total = 0;
        for (const item of mixedData) {
            if (typeof item === 'number') {
                total = total + item;
            }
        }
        return total;
    };
    const mixedData = [1, 'two', 3, 'four', 5];
    const result = sumNumbers(mixedData);
    console.log(result);
    const mixedNoNumbers = ['one', 'two', 'three'];
    const resultNoNumbers = sumNumbers(mixedNoNumbers);
    console.log(resultNoNumbers);
}
// ----------------------------5-------------------------
{
    const CarAndDriver = (car, driver) => {
        return {
            car,
            driver,
        };
    };
    const myCar = {
        make: 'Toyota',
        model: 'BMW',
        year: 2023,
    };
    const myDriver = {
        name: 'Mr X',
        licenseNumber: '1255454',
    };
    const combinedData = CarAndDriver(myCar, myDriver);
    console.log(combinedData);
    // --------------------------6----------------------
    {
        // 
        const calculateSum = (param) => {
            if (Array.isArray(param)) {
                let sum = 0;
                for (const item of param) {
                    if (typeof item === 'number') {
                        sum = sum + item;
                    }
                    else {
                        console.log("Parameter not an array.");
                    }
                }
            }
            calculateSum([1, 2, 3, 4, 5]);
            calculateSum("Not an array");
            // 
        };
    }
    // -----------------------7---------------------
    {
        // 
        const findFirstOccurrence = (arr, target) => arr.findIndex((item) => item === target);
        const numbers = [1, 2, 3, 4, 5, 2];
        const strings = ["apple", "banana", "cherry", "date", "apple"];
        const targetNumber = 2;
        const targetString = "cherry";
        const indexInNumbers = findFirstOccurrence(numbers, targetNumber);
        const indexInStrings = findFirstOccurrence(strings, targetString);
        console.log(indexInNumbers);
        console.log(indexInStrings);
        // 
    }
    // -----------------------8-------------------------
    {
        const calculateTotalCost = (cart) => {
            let totalCost = 0;
            for (const item of cart) {
                totalCost = totalCost + item.price * item.quantity;
            }
            return totalCost;
        };
        const cart = [
            { name: 'Product 1', price: 10, quantity: 2 },
            { name: 'Product 2', price: 15, quantity: 1 },
            { name: 'Product 3', price: 5, quantity: 3 },
        ];
        const totalCost = calculateTotalCost(cart);
        console.log(`Total cost: $${totalCost}`);
    }
}
