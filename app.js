"use strict";
// ===================================================================================================================
// ===================================================================================================================
// 1- install tsc globally using npm [install transpiler to compile TypeScript to JavaScript] 
// npm install -g typescript
// tsc -v 
// 2- why install typescript compiler ?
/*
[browser can only understand JavaScript]
 because TypeScript is a superset of JavaScript and
 it needs to be transpiled to JavaScript in order to run in the browser
 The TypeScript compiler (tsc) takes the TypeScript code and converts it into JavaScript code
 that can be executed by the JavaScript engine in the browser.
*/
// 3- compile TypeScript to JavaScript 
// tsc app.ts -- watch
// ===================================================================================================================
// ===================================================================================================================
// TypeScript is a strongly typed language.
// Primitive Types:
// string    => Text values
// number    => Numeric values
// boolean   => true / false
// any       => Any type (disables type checking)
// void      => No return value
// null      => Intentional absence of value
// undefined => Variable declared but not assigned
(function () {
    // 1-  declare + initialization
    let msg = "Hello TypeScript";
    let age = 25;
    let isAdmin = true;
    console.log(msg);
    console.log(age);
    console.log(isAdmin);
    // any data type can hold any type of data and can be reassigned to any type of data
    let data = "Hello TypeScript";
    data = 25;
    data = true;
    console.log(data);
    // ===================================================================================================================
    // ===================================================================================================================
    //  2- intialization only
    // TypeScript infers the type of a variable based on the value assigned to it.
    let inferredString = "Hello TypeScript"; // inferred as string
    let inferredNumber = 25; // inferred as number
    let inferredBoolean = true; // inferred as boolean
    // let Word  = "Hello TypeScript"; // inferred as string
    // Word=25; // Error: Type 'number' is not assignable to type 'string'
    // ===================================================================================================================
    // ===================================================================================================================
    // 3-  declare only
    // value now is undefined and type is number 
    // any variable that is declared without init , its value is undefined 
    let len; // len = undefined 
    // console.log(len); // [error] -->> len is declared but not initialized, so it is undefined  and len type is number 
    len = 60;
    console.log(`len: ${len}`);
    // len = "ahmed"; // Error: Type 'string' is not assignable to type 'number'
    // any variable that is declared without an explicit type and without an initial value is of type 'any' by default.
    let s; // s = undefined  and s type is any
    console.log(s); // No Error -->> type of s is any, so it can be assigned any type of value without error
    s = "Hello TypeScript Test";
    console.log(s);
    s = 2500;
    console.log(s);
    // ===================================================================================================================
    // ===================================================================================================================
    //Union Types 
    //[OR operator]  [|]  --> can hold more than one type of data
    // variable can hold more than one type of data using union types
    let values = "Hello TypeScript"; // can hold string [[[[[ or ]]]]] number
    values = 25;
    console.log(values);
    // ===================================================================================================================
    // ===================================================================================================================
    // 2-Array
    // data type []  --> string[] , number[] , boolean[] , any[]
    let names = ["Alice", "Bob", "Charlie"];
    let Mix = ["Hello", 25, "World", 30];
    // tuple
    let student = ["Alice", 25];
    let anyType = ["Hello", 25, true, ["Alice", "Bob"], { name: "Alice", age: 25 }];
    let user = "Hello TypeScript"; // can hold string or number array [[ not ]] array of string or number
    user = [5, 60, 70];
    console.log(names);
    console.log(Mix);
    console.log(student);
    console.log(anyType);
    console.log(user);
    // ===================================================================================================================
    // ===================================================================================================================
    // Functions
    /*
     function fuctionName(param:DataTye):ReturnType{
     }
    */
    function Print() {
        console.log("Hello from Print function!");
    }
    function greet(name) {
        return `Hello, ${name}! Welcome to TypeScript.`;
    }
    function add(a, b) {
        return a + b;
    }
    function PrintArray(arr) {
        arr.forEach(item => {
            console.log(item);
        });
    }
    function getUserInfo(user) {
        return `User Name: ${user.name}, Age: ${user.age ?? 60}`; // how to deal with optional params [??]
    }
    // retuen type can be inferred by TypeScript based on the return statement in the function body,
    // so it is optional to specify it explicitly.
    // but parameter type is required to be specified explicitly 
    // because TypeScript cannot infer the type of parameters based on the function body.
    // function getUserInfoWithInterface(name)//Error: Parameter 'name' implicitly has an 'any' type.
    function getUserInfoWithInterface() {
        const user = { name: "Alice", age: 26 };
        return `User Name: ${user.name}, Age: ${user.age}`;
    }
    Print();
    console.log(greet("Alice"));
    console.log(add(5, 10));
    PrintArray(["Alice", "Bob", "Charlie"]);
    console.log(getUserInfo({ name: "Alice" }));
    console.log(getUserInfoWithInterface());
    // ===================================================================================================================
    // ===================================================================================================================
    // Generics
    function PrintGenericArray(arr) {
        arr.forEach(item => {
            console.log(item);
        });
    }
    let stdNames = ["Alice", "Bob", "Charlie"];
    let stdAges = [25, 30, 35];
    PrintGenericArray(stdNames); // == > PrintGenericArray(stdNames);
    PrintGenericArray(stdAges);
    function DeleteFromArray(arr) {
        arr.splice(0, 1);
        return arr;
        // let result =arr.slice(0,1); 
        // return result;
    }
    let namesToDelete = ["Alice", "Bob", "Charlie"];
    console.log(DeleteFromArray(namesToDelete));
    let agesToDelete = [25, 30, 35];
    console.log(DeleteFromArray(agesToDelete));
    // ===================================================================================================================
    // ===================================================================================================================
    // Objects Vs  Interfaces Vs Classes Vs Type Aliases Vs Enums Vs Namespaces Vs Modules
    // 1- Objects 
    let person = {
        name: "Ahmed",
        age: 30,
        isAdmin: true
    };
    //Problem with using object type :
    // --------------------------------------
    // 1- so we cannot access the properties of the object without type assertion or type casting, and it is not type-safe.
    // 2- it does not provide any information about the properties of the object,
    // console.log(person.name); // Error: Property 'name' does not exist on type 'object'
    console.log(person);
    // Using object[] is not type-safe because TypeScript cannot determine
    // the data types of object properties (id, name, price).
    let products = [
        { id: 1, name: "Product 1", price: 10 },
        { id: 2, name: "Product 2", price: "ahmed" },
        { id: 3, name: "Product 3", price: 30 }
    ];
    products.forEach(product => {
        console.log(product);
    });
    //   price ? :number;    can be optional 
    //    price :number|null;  must provide a value for price property but it can be null
    // if optional only -->> undefined if not provided
    let productWithInterface = {
        id: 1,
        name: "Product 1"
    };
    console.log(productWithInterface); // { id: 1, name: 'Product 1' }
    console.log(productWithInterface.name); // "Product 1"
    console.log(productWithInterface.price ?? 56); // how to deal with optional params [??]  
    let productWithInterface2 = [
        // { id:1,name:"Product 1",price:"ahmed"}, Error
        { id: 1, name: "Product 1", price: 20 },
        { id: 2, name: "Product 2" },
        { id: 3, name: "Product 3", price: null }
    ];
    console.log(productWithInterface2[0].name); // "Product 1"
    console.log(productWithInterface2[1].price); // indefined
    let shop1 = {
        id: 1,
        name: "Shop 1",
        price: 100,
        description: "This is a shop"
    };
    console.log(shop1); // { id: 1, name: 'Shop 1', price: 100, description: 'This is a shop' }
    let user1 = {
        name: "Alice",
        age: 25,
        printInfo(len) {
            return `User Name: ${this.name}, Age: ${this.age}, Length: ${len}`;
        }
    };
    console.log(user1.printInfo(10));
    // Here inteface Not Exist in app.js
    let ss = {
        id: 1,
        name: "Test"
    };
    // obj created in js file :
    /*
      let ss = {
            id: 1,
            name: "Test"
        };
    */
    // ===================================================================================================================
    // ===================================================================================================================
    // Type Aliases 
    let x = "Ahmed";
    let y = 25;
    let z = true;
    let x2 = "Ahmed";
    let y2 = 25;
    let z2 = true;
    // ===================================================================================================================
    // ===================================================================================================================
    // Vs Enums Vs Namespaces Vs Modules
    // numeric enum
    let Direction;
    (function (Direction) {
        Direction[Direction["Up"] = 0] = "Up";
        Direction[Direction["Down"] = 1] = "Down";
        Direction[Direction["Left"] = 2] = "Left";
        Direction[Direction["Right"] = 3] = "Right";
    })(Direction || (Direction = {}));
    let dir = Direction.Up;
    console.log(dir); // 0
    // string enum
    let userRole;
    (function (userRole) {
        userRole["Admin"] = "Admin";
        userRole["User"] = "User";
        userRole["Guest"] = "Guest";
    })(userRole || (userRole = {}));
    let role = userRole.Admin;
    console.log(role); // "Admin"
    let role2 = "Admin";
})();
