------ JAVASCRIPT ------

- We have javascript engine like node JS, deno JS

<b>LET, VAR and CONST</b>

- For storing something in a space we need a variables
- For assigning values in memory we use variables

1. var and let create variables that can be reassigned another value.
2. const creates "constant" variables that cannot be reassigned another value.
3. developers shouldn't use var anymore. They should use let or const instead.
4. if you're not going to change the value of a variable, it is good practice to use const

The scope of variables declared with var :

1. Variables declared with var can have a global or local scope
2. so you can access it everywhere (inside and outside functions).
3. Redeclare and reassign variables declared with var
4. Variables declared with var are hoisted to the top of their global or local scope, which makes them accessible before the line they are declared.
5. the variable is hoisted with a default value of undefined.

The scope of variables declared with let :

1. Variables declared with let can have a global, local, or block scope.
2. variables declared with let can be reassigned to other values, but they cannot be redeclared.
3. Variables declared with let are hoisted to the top of their global, local, or block scop. But, let variables are hoisted without a default initialization. By trying to access this variable before the line of declaration, we get ReferenceError: Cannot access 'number' before initialization.

The scope of variables declared with const :

1. variables can have a global, local, or block scope.
2. variables cannot be redeclared, and neither can they be reassigned to other values. Attempting such would throw an error.
3. Variables declared with let are hoisted to the top of their global, local, or block scop. But, let variables are hoisted without a default initialization. By trying to access this variable before the line of declaration, we get ReferenceError: Cannot access 'number' before initialization.

<b>Data types :</b>

- Primitive
  number, bigint, string, boolean, null, undefined, symbol
  Stack memory use

- Non Primitive
  Array, objects, function
  Heap memory use ( for give Reference )

typeof : // use to find the data type of a value

- typeof undefined // undefined
- typeof null // object

<b>Stack and Heap memory in javascript</b>

- Two types of memory stack and heap
- Primitive use stack memory & Non primitive use Heap memory
- Stack memory provide a copy & Heap memory provide a reference

<b>Strings in javascript</b>

const name = "Ravi"
const repoCount = 50
// console.log(name+' - '+repoCount)
// console.log(`Hello my name is ${name}`)

const game = new String("Car Drive")

- this string have many type of prototypes, and it print like a object
  string.**proto** (show all prototypes methods)
  length, toUpperCase(), chatAt(), indexOf(), substring(0,4), slice(0,4), trim(), includes()

<b>Numbers</b>

- const num = new Number(100)
  num.length, num.toString(), num.toFixed(2), num.toPrecision(2),
  num.toLocalString('en-IN') (for format with comma)

<b>Date and time</b>

- let myDate = new Date() // its object
  myDate.toString() // in GMT
  myDate.toDateString()
  myDate.toLocalString()

* let myCreatedDate = new Date(2023, 0, 23) // toDateString // Mon Jan 23 2023
* let myCreatedDate = new Date(2023, 0, 23, 5 , 3) // toLocalString // Mon Jan 23 2023 5:03:00
* let myTimestamp = Date.now() // Timestamp (it can compare easily - milliseconds)
* Math.floor(Date.now()/1000) // compare in seconds
* let newDate = new Date() // newDate.getMonth()
* newDate.toLocalString('default', {weekday:'long', timezone:''})

<b>Array</b>

const myArr = [1,2,3,4,5,6]

- can be different types of element
- array is object of collection of items
- array is resizable
- array indexing start from zero
- array copy operation create shallow copy
- shallow copy (copy to the same reference point) & Depp copy (do not share the same reference)

* const myArr2 = new Array(1,2,3,4) // provide prototypes

Array's methods

- myArr.push(6)
- myArr.pop()
- myArr.unshift(9)
- myArr.shift()
- myArr.includes(9)
- myArr.indexOf(9)
- const newArr = myArr.join() // convert it in string

* const marvel_heros = ["thor", "Ironman", "spiderman"]
  const dc_heros = ["superman", "flash", "batman"]
  marvel_heros.push(dc_heros) // push dc complete array in marvel array as element

  const all_heros = marvel_heros.concat(dc_heros) // proper merge both array

  const all_new_heros = [...marvel_heros, ..dc_heros]; // merge

  const anotherArray = [1,2,3, [4,5,6], 7, [6,7, [4,5]]];
  const newAnotherArray = anotherArray.flat(Infinity)

  Array.isArray("Hitesh") // False
  Array.from("Hitesh") // convert in array
  Array.from({name:"Hitesh"}) // return blank array

  let score1 = 100;
  let score2 = 100;
  let score3 = 100;
  Array.of(score1, score2, score3); // make an array
