# SAN Compiler usage
```
Usage: san [OPTIONS] [SUBCOMMAND]

Options:
  -h,--help                   Print this help message and exit

Subcommands:
  build                       Build sources
  run                         Run sources
```

## Build subcommand
This command generates an executable.

```
Usage: san build [OPTIONS] ENTRY

Positionals:
  ENTRY TEXT:FILE REQUIRED    Entry file

Options:
  -h,--help                   Print this help message and exit
  -O TEXT=0                   Optimization level
  -I TEXT=[] ...              Include paths
  --arch TEXT=x86_64          Target architecture
  --os TEXT=darwin            Target operating system
  -l TEXT ...                 Libraries to link with
  --args TEXT                 Custom linker arguments
  -o,--output TEXT=out        The output file
  --print-llvm                Print generated LLVM bytecode
  --timer                     Output the elapsed build time
  --verbose                   Verbose mode
```

### Common usages
```bash
# Compile and output to 'out'
san build -o out main.sn
```
---
```bash
# Print LLVM output
san build --print-llvm main.sn
```
---
```bash
# Build for i386 architecture
san build --arch i386 main.sn
```

## Run subcommand
Compile and run your code directly Just In Time.

```
Usage: san run [OPTIONS] ENTRY

Positionals:
  ENTRY TEXT:FILE REQUIRED    Entry file

Options:
  -h,--help                   Print this help message and exit
  -O TEXT                     Optimization level
  -I TEXT ...                 Include paths
  --arch TEXT=x86_64          Target architecture
  --os TEXT=darwin            Target operating system
  -l TEXT ...                 Libraries to link with
  --args TEXT                 Custom linker arguments
  --verbose                   Verbose mode
```

### Common usages
```bash
# Directly run the code with main.sn as entrypoint
san run main.sn
```
---
```bash
# Pass custom arguments to the program
san run main.sn -- arg1 arg2
```
```rs
// main.sn
fn main(argc: i32, argv: i8**) {
    std::print(argv[1]); // arg1
    std::print(argv[2]); // arg2
}
```
