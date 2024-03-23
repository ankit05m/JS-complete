------ JAVASCRIPT ------

- We have javascript engine like node JS, deno JS

<b>LET VAR and CONST</b>

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
-
