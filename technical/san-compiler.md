# SAN Compiler - Technical
The compiler is using `ANTLR4` for lexical code analysis, parsing and Abstract Syntax Tree generation which is used after in a "visitor", basically a recursive AST travelling algorithm. In this "visitor", semantic analysis could (and will) be done as well as Intermediate Representation generation using `LLVM` which will then be compiled into platform-depend machine code in the form of an object file.

As an example, here's the ANTLR4 (EBNF) implementation of type syntax in SAN:
```ebnf
type:
	type '[' expression ']'                 # TypeArray
	| type Const? '*'                       # TypePointer
	| type Const? '&'                       # TypeReference
	| Const? (scopedName | functionType)    # TypeName;
```

In order to link the generated object file with system or external libraries, the compiler uses `LLD`, a cross-platform linker made by the same people who did `LLVM`.

## Implementations
Outside of binary operations, conditions, loops and such, we would like to access and execute platform-specific system calls.

### Windows
With the use of `kernel32` and `ntdll` WinAPI libraries, functions like `VirtualAlloc` or `WriteConsoleA` could then be used by requiring them in SAN like so:

```rs
extern fn VirtualAlloc(void*, u64, u64, u64) : void*;
```

Some functions should also be defined for the proper functioning of the language on Windows. `__chkstk`, `__alldiv` and `__allrem` being the most required ones by WinAPI libraries.

### Linux
Trickier than Windows, the Linux implementations directly needed assembly code to execute syscalls. That's where inline assembly came in SAN! Once implementing inline assembly, implementing syscalls as usable functions was easy.

The most hardeous task encountered was memory allocation. There is no native syscall or helper for memory allocation on Linux. So it needed to be done by hand. Using the `mmap` syscall with some algorithm lead to a proper memory allocation function.

There was also the need for Linux to have a `_start` function located somewhere in the stack as it's used as the main entrypoint in a standard Linux software.

Here's the `x86_64` implementation of `_start` in SAN:
```rs
import "linux/syscalls"

#[target_os = "linux"]
#[target_arch = "x86_64"]
fn _start() : i32 {
    asm("pop %rax\n"
        "xor %ebp, %ebp\n"
        "mov (%rsp), %edi\n"
        "lea 8(%rsp), %rsi\n"
        "lea 16(%rsp,%rdi,8), %rdx\n"
        "xor %eax, %eax\n"
        "call main\n"
        : : : "cc", "memory");

    linux::syscalls::exit(0);
}
```