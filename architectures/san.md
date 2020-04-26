# SAN compiler
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
