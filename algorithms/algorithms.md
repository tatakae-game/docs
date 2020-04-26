# Algorithms
# Security algorithm
Today's needs about security became one of the major aspect of any modern software. One of the most critical part of a software is authentication, it's the only barrier between a user's identity and the software.

## Tokens
A way and also our chosen solution is the use of tokens to authenticate users. Once the user's credentials are sent to the server, a token is sent back.

One of the most known token solution being JSON Web Token (JWT). We could use JWT but we decided to create our own algorithm.

## Saving the tokens
Modern web browsers have something called `Local Storage`, it's basically a database which is not sent automatically to the server like cookies does. This let us manage the token's transmission as we like.

To kind of "hide" the session's data to the user, it's transformed to Base64.


# SAN's generics
Generics are a really technically particular functionality of advanced programming languages. This document serves to explain how we handled generics in the current SAN compiler.

## Demonstration and explanation
### Classes
```
class Array<T> {
    values: T[];
    size: u64;

    static fn new(capacity: u64) : Array<T> {
        return Array<T> {
            values = std::mem::allocate<T>(capacity),
        };
    }

    fn push(value: T) : u64 {
        values[size] = value;
        return size += 1;
    }
}

# Use
let arr = Array<i32>::new(12); # Create an array of 12 i32
arr.push(5); # Push the value `5` in the array
```

### Fonctions
```
fn allocate<T>(count: u64) : T[] {
    return calloc(count, sizeof T);
}

# Use
allocate<i32>(4); # Allocate 4 i32 in memory
```

### Explanation
`T` here is an arbitrary name, it can be absolutely anything but by convention we named it `T` (first letter of `Type`).

So what's going on behind?
The compiler will generate the called generic class or function at use. Since a compiled language generates assembly instructions that will later be stored in memory, we can't generate a version of each generics for each existing types and we can't have deductible types at runtime in assembly.

So basically when you use `Array<i32>` with the above code it will generates something like this:

```
class Arrayi32 {
    values: i32[];
    size: u64;

    static fn new(capacity: u64) : Arrayi32 {
        return Arrayi32 {
            values = std::mem::allocate<i32>(capacity),
        };
    }

    fn push(value: i32) : u64 {
        values[size] = value;
        return size += 1;
    }
}
```

One of the generics downsides is that each time you use a newer type that hasn't been generated, it will generate it. It means that it will generates a lot of code.

Generic functions basically works the same.
