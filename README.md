![# Tatakae](resources/logo.png)
Robot AI development game.

# Documentation
- [Game Mechanics](game-mechanics.md)

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
- [MongoDB](https://docs.mongodb.com/manual/administration/install-community/)

## Setup the "dev" folder
The following commands must be done in the folder you want to setup the environment.

### UNIX-like systems using curl
```bash
curl https://raw.githubusercontent.com/tatakae-game/docs/master/scripts/init.sh | bash
```

### UNIX-like systems using wget
```bash
wget -O - -o /dev/null https://raw.githubusercontent.com/tatakae-game/docs/master/scripts/init.sh | bash
```

### Windows using cmd
```powershell
@"%SystemRoot%\System32\WindowsPowerShell\v1.0\powershell.exe" -NoProfile -InputFormat None -ExecutionPolicy Bypass -Command "iex ((New-Object System.Net.WebClient).DownloadString('https://raw.githubusercontent.com/tatakae-game/docs/master/scripts/init.ps1'))"
```

### Windows using PowerShell
```powershell
iex ((New-Object System.Net.WebClient).DownloadString('https://raw.githubusercontent.com/tatakae-game/docs/master/scripts/init.ps1'))
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
