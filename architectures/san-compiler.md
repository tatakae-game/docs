# SAN compiler
## Files architecture
Following C++ common architecture, the compiler's sources will be separated in different directories matching their purpose.

The `include` directory contains all header files in order to be easier to include in our source files or in other header files.

The `libs` directory is used to store 3rd party libraries used in the later development of the compiler.

The `src` directory contains the source files as C++ uses `.cpp` (source) and `.hpp` (header) files.

To sum up what has been said, here's the layout of our architecture for this C++ SAN compiler:
```
san
├── include
│   └── san
│       └── **/*.hpp
├── libs
│   └── *
└── src
    └── **/*.(hpp|cpp)
```

Some other directories may come now or later in order to assist and speed up the development process.

## Used librairies
### LLVM
LLVM helps generating an instruction set for any architecture without having us to manually deal with processor instructions.

With this library it's very easy to export the code to x86, ARM and such.

### ANTLR4
Writing EBNF to parse the code comes very handy in needs of fast production like this project. ANTLR4 totally does the job and also provide a reliable architecture to write C++ code behind parsing rules.

### LLD
Each operating system has its own linker, it's really not convenient to have to manage a big amount of cases for each platforms. LLD provide a cross-platform linker which gives us linker consistency, thus ease linking.
