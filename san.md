# SAN Language
Simple and elegant, SAN is a programming language designed to develop strong code base that gives control on everything.

# Syntax
The syntax is very inspired from Rust language.

Some specificities:
- Strongly typed
- Architecture near with the compiled output
- The lines are separated by line jumps, nothing else

## Primitive Types
### Signed Integers
- `i8` - 8 bits integer 
- `i16` - 16 bits integer 
- `i32` - 32 bits integer 
- `i64` - 64 bits integer 

### Unsigned Integers
- `u8` - 8 bits integer 
- `u16` - 16 bits integer 
- `u32` - 32 bits integer 
- `u64` - 64 bits integer 

### Floating Points
- `f32` - 32 bits floating point 
- `f64` - 64 bits floating point 

### Boolean
`bool` or `i1`

### Arrays
`T[n]` such as `i8[n]` (constant strings), `f32[n]`, etc...

### Pointers
Pretty much like arrays but without the specified array size: `T[]`.

## Constants
- `Integer` - any number from `-9223372036854775808` (minimal 64 bits signed integer) to `18446744073709551615` (maximal 64 bits unsigned integer)
- `Floating point` - any number from `2.22507e-308` (minimal 64 bits floating point) to `1.79769e+308` (maximal 64 bits floating point)
- `Character` - a ASCII character stored in a 8bit integer
- `String` - a constant 8bit integer array

## Operators
### Binary operators
- `=` - Affectation
- `+` - Addition
- `-` - Substraction
- `*` - Multiplication
- `/` - Division
- `&` - Logical AND
- `|` - Logical OR
- `^` - Logical XOR

### Boolean operators
- `==` - Equal test
- `!=` - Not equal test
- `<` - Lest than test
- `<=` - Lest than or equal test
- `>` - Greater than test
- `>=` - Greater than or not equal test
- `&&` - Conditional logical AND
- `||` - Conditional logical OR

### Other operators
- `:` - Typing

## Variables
In order to store and use any kind of data a variable is what to use.
The syntax is `let <name>: <type> = <value>;`.

```rs
let variable: i16 = 0;
```

## Conditions
What's an algorithm without conditions?

```rs
if 1 == 1 {
  std::print("1 == 1");
} else {
  std::print("1 != 1");
}
```

You can put whatever expression you wants in a condition.

## Loops
### While loop
```rs
let i: i32 = 0

while i < 5 {
  i += 1;
  std::print(std::to_str(i));
}

// Output
1
2
3
4
5
```

### For loop
```rs
for n in 1..6 {
  std::print(std::to_str(i));
}

// Output
1
2
3
4
5
```

## Functions
Program execution starts at the `main` function.
Same thing for SAN.
```rs
fn main() : i32 {
  return 0;
}
```

## Generic functions
```rs
fn add<L, R>(l: L&, r: R&) : L {
  return l + r;
}
```

The typing is not necessary if you're only returning `0` (which is the default [exit status](https://en.wikipedia.org/wiki/Exit_status)).

## Classes
The bases of Object Oriented Programming concept are classes. They are an essential component of modern programming languages as they provide data containers and methods.

Here's an example of a `Person` class:
```rs
class Person {
  firstname: str;
  lastname: str;

  age: i16 = 0;

  fn new(firstname: str, lastname: str) : Person {
    return Person { 
      firstname = firstname,
      lastname = lastname,
    };
  }

  fn new(firstname: str, lastname: str, age: i16) : Person {
    return Person {
      firstname = firstname,
      lastname = lastname,
      age = age,
    };
  }

  fn to_str() {
    return firstname + " " + lastname + " - " + std::to_str(age);
  }
}
```

In this class, we defined 3 properties: `firstname` and `lastname` of type `str` and `age` of type `i16`.

Since SAN doesn't provide an explicit constructor, we uses `new` methods by standard. In this case, we [overloaded](https://en.wikipedia.org/wiki/Function_overloading) the `new` function with one argument (`age`).

Last but not least, `to_str` function can be used to transform the class into a printable string.

Let's see how to use this class:
```rs
fn main() {
  let p1 = Person::new("John", "Doe");
  let p2 = Person::new("Maria", "Springfield", 34);

  p1.firstname = "Johnatan";

  std::print(p1.to_str());
  std::print(p2.to_str());
}
```

This code will outputs:
```
Johnatan Doe - 0
Maria Springfield - 34
```

### Generic classes
Here's a use case of generic classes.
```rs
class List<T> {
  ptr: T[];

  static fn new() : List<T> {
    return List<T> {
      ptr = std::mem::allocate<T>(16),
    };
  }
}
```

## Scope
Having limitations on variables keeps your memory clean and brings a notion of a region where your variable exists only inside of it. In SAN, the scope is defined inside a block (brackets).

A scope can access its parent scope.

Here's a demonstration of this principle:
```rs
// global scope

fn add(n1: i32, n2: i32) : i32 {
  // add's scope
  return n1 + n2;
}

fn main() {
  // main's scope

  // we can access add function because it's in the parent's scope
  let result: i32 = add(3, 4);

  if (result > 6) {
    // current if's scope
    let var: i32 = result / 6;
  }

  // The compiler generates an error because 'var' is not declared in the current scope
  let value: i32 = var + 2;
}
```

## Comments
To note important information about any part of your code, comments comes very useful and are a necessity in programming languages.

In SAN, comments are the same as in most of the popular programming languages out there:
```rs
// single line comment

/**
 * Multiple
 * lines
 * comment
 */
```
