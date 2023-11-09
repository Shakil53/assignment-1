{

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

// ----------------------------2--------------------------------
{

    interface Person {
        address?: {
            city: string;
            street: string;
        };
        phone?: number;
    }

    const getAddressCity = (person: Person): string => {
        if (!person.address) {
            return "No Address here";
        }
        return person?.address?.city;
    }

    const user = {
        address: {
            city: "New York",
            street: "Broadway"
        },
        phone: 123456
    }
    console.log(getAddressCity(user))
}
// ----------------------------3-------------------------------------

{

    class Cat {
        name: string;
        constructor(name: string) {
            this.name = name
        }
    }

    const isCat = (checkCat: any) => {
        if (checkCat instanceof Cat) {
            return true;
        }
        return false;
    }

    const myCat = new Cat("max")

    if (isCat(myCat)) {
        console.log("Yes, it's a cat.");
    } else {
        console.log("No, it's not a cat.");
    }
}
// ----------------------------4-----------------------------------
{

    const getMixed = (params: (string | number)[]) => {
        let num = 0
        for (let i = 0; i < params.length; i++) {
            const el = params[i];
            if (typeof el === 'number') {
                num = num + el
            }

        }
        return num
    }
    getMixed([1, 'two', 3, 'four', 5, 8])
}
// ---------------------------5------------------------------
{

    interface Car {
        make: string;
        model: string,
        year: number,
    }
    interface Driver {
        name: string,
        licenseNumber: string
    }

    const combineCarDriver = (car: Car, driver: Driver) => {
        return Object.assign(car, driver)
    }
    const carIs: Car = {
        make: "ABSC",
        model: "HDS23",
        year: 2021,
    }
    const driverIs: Driver = {
        name: "Arif",
        licenseNumber: '234234'
    }
    console.log(combineCarDriver(carIs, driverIs))
}

// ----------------------------6----------------------------------
{

    const unknownParamsSum = (params: unknown): void => {
        if (Array.isArray(params) && params.every((num) => typeof num === 'number')) {
            const sum = params.reduce((acc, num) => acc + num, 0);
            console.log(sum)
        } else {
            console.error("The parameter is not an array of numbers.")
        }
    };
    console.log(unknownParamsSum([1, 2, 3, 4]))
}
// ----------------------------7------------------------------------------
{

    const findFirstOccurrence = (params: (string | number)[], target: string | number) => {
        return params.indexOf(target, 0)
    }
    const numbers: number[] = [1, 2, 3, 4, 5, 2];
    const targetNumber = 5;
    const indexInNumbers = findFirstOccurrence(numbers, targetNumber);
    console.log(indexInNumbers);
}
// ---------------------------8---------------------------------
{

    interface Product {
        name: string,
        price: number,
        quantity: number,
    }

    const carts: Product[] = [
        { name: "A", price: 23, quantity: 4 },
        { name: "A", price: 56, quantity: 2 },
        { name: "A", price: 32, quantity: 7 },
    ]

    const totalCost = (params: Product[]): number => {
        let totalCost = 0
        for (let i = 0; i < params.length; i++) {
            const el = params[i];
            totalCost = totalCost + (el.price * el.quantity)
        }
        return totalCost
    }

    console.log(totalCost(carts))

}