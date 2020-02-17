# Tatakae
Robot AI development game.

# Manual building
## Requirements
- [Node >= 10.13.0](https://nodejs.org/en/download/)
- npm >= 6.11.0 (contained with Node)
    - [@angular/cli](https://angular.io/guide/setup-local#step-1-install-the-angular-cli)
- [JDK >= 13](https://www.oracle.com/java/technologies/javase-jdk13-downloads.html)
- C++ >= 17 compiler
    - [MSVC](https://visualstudio.microsoft.com/fr/vs/features/cplusplus/) (Windows)
    - GCC/G++ (Linux / macOS)
- [CMake](https://cmake.org/download/)
- [ANTLR 4](https://github.com/antlr/antlr4/blob/master/doc/getting-started.md)

## Setup the "dev" folder
In the folder you want to settup the environment do:
```bash
git clone git@github.com:tatakae-game/tatakae-api.git
git clone git@github.com:tatakae-game/tatakae-client.git
git clone git@github.com:tatakae-game/tatakae-admin.git
git clone git@github.com:tatakae-game/san.git
```

And you're set!

## SAN compiler
Create a build directory.
```bash
# in `compiler` directory
mkdir build
cd build
```

Then compile using CMake.
```bash
# in `compiler` directory
cmake ..
cmake --build .
```

The compiler's executable will be available in the `build` directory root or in the `build/Debug` directory.


## API
*For development **and** production.*

```bash
# in `api` directory
npm start
```

## Web client
### Running
*Don't use `ng serve` in production - it's for development only.*

```bash
# in `client` directory
ng serve --open
```

In this context every time you edit a file the server will restarts itself.

### Building for production
```bash
# in `client` directory
ng build --configuration="production"
```

The generated static files are in `dist/tatakae-client` directory and it's now ready for production.

## Admin client
```bash
# in `admin-client` directory
mvn clean package
```
