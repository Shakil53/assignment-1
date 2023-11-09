{
    // --------------------1---------------------------------
    const checkNumberOrString = (param: string | number) => {
        if (typeof param === 'string') {
            return param.length;
        }
        else if (typeof param === 'number') {
            return param * param;
        }
        else {
            throw new Error('Input either string or number')
        }
    }

    checkNumberOrString(2);
}

// ----------------------------2-----------------------------

{
    interface Address {
        city: string;
        street: string;
    }

    interface Person {
        address?: Address;
        phone?: string;
    }

    const getAddressCity = (person: Person): string | undefined =>
        person?.address?.city;


    const person1: Person = {
        address: {
            city: 'Ctg',
            street: 'Ctg 232',
        },
        phone: '0154884555',
    };

    const person2: Person = {
        phone: '02151515444',
    };

    console.log(getAddressCity(person1))
    console.log(getAddressCity(person2))

}

// -------------------------3--------------------------------
{

    type Animal = {
        name: string;

    }
    type Cat = {
        name: string;
        species: string;
    }

    // const isCat = (animal: Animal) => {
    //     return animal instanceof Cat
    // }
    const isCat = (param: Animal | Cat) => {
        if ("species" in param) {
            console.log(`yes, it's a cat`)
        }
        else {
            console.log(`no, it's not a cat`)
        }
    }

    // -----------------------Or 3 ------------------
    {

        class Animal {
            name: string;
            species: string;

            constructor(name: string, species: string) {
                this.name = name;
                this.species = species;
            }
            makeSound() {

            }

        }
        class Cat extends Animal {
            constructor(name: string, species: string) {
                super(name, species)
            }
            makeMeaw() {
                console.log(`yes, it's a cat`)
            }
        }
        class Dog extends Animal {
            constructor(name: string, species: string) {
                super(name, species)
            }
            makeBark() {
                console.log(`no, it's not a cat`)
            }
        }
        const isCat = (animal: Animal) => {
            if (animal instanceof Dog) {
                animal.makeBark()
            }
            else if (animal instanceof Cat) {
                animal.makeMeaw()
            }

        }
        const dog = new Dog("Dog bhai", 'Dog');
        const cat = new Cat("Cat bhai", 'cat');

        isCat(dog)


    }




}


// ---------------------4-----------------------
{

    const sumNumbers = (mixedData: (number | string)[]): any => {
        let total = 0;
        for (const item of mixedData) {
            if (typeof item === 'number') {
                total = total + item
            }
        }
        return total;
    }

    const mixedData: (number | string)[] = [1, 'two', 3, 'four', 5];
    const result: number = sumNumbers(mixedData);
    console.log(result);

    const mixedNoNumbers: (number | string)[] = ['one', 'two', 'three'];
    const resultNoNumbers: number = sumNumbers(mixedNoNumbers);
    console.log(resultNoNumbers);



}

// ----------------------------5-------------------------

{
    //

    interface Car {
        make: string;
        model: string;
        year: number;
    }

    interface Driver {
        name: string;
        licenseNumber: string;
    }

    const CarAndDriver = (car: Car, driver: Driver): { car: Car, driver: Driver } => {
        return {
            car,
            driver,
        }
    }

    const myCar: Car = {
        make: 'Toyota',
        model: 'BMW',
        year: 2023,
    };

    const myDriver: Driver = {
        name: 'Mr X',
        licenseNumber: '1255454',
    };

    const combinedData = CarAndDriver(myCar, myDriver);
    console.log(combinedData);



    // --------------------------6----------------------
    {
        // 
        const calculateSum = (param: unknown): void => {
            if (Array.isArray(param)) {
                let sum = 0
                for (const item of param) {
                    if (typeof item === 'number') {
                        sum = sum + item;
                    } else {
                        console.log("Parameter not an array.");
                    }
                }
            }


            calculateSum([1, 2, 3, 4, 5])
            calculateSum("Not an array");




            // 
        }

    }

    // -----------------------7---------------------
    {
        // 
        const findFirstOccurrence = <T>(arr: T[], target: T) => arr.findIndex((item) => item === target);

        const numbers: number[] = [1, 2, 3, 4, 5, 2];
        const strings: string[] = ["apple", "banana", "cherry", "date", "apple"];
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
        interface Product {
            name: string;
            price: number;
            quantity: number;
        }

        const calculateTotalCost = (cart: Product[]): number => {
            let totalCost = 0;
            for (const item of cart) {
                totalCost = totalCost + item.price * item.quantity;
            }
            return totalCost;
        }

        const cart: Product[] = [
            { name: 'Product 1', price: 10, quantity: 2 },
            { name: 'Product 2', price: 15, quantity: 1 },
            { name: 'Product 3', price: 5, quantity: 3 },
        ];

        const totalCost = calculateTotalCost(cart);
        console.log(`Total cost: $${totalCost}`);










    }


