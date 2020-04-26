# External usages : Api, Framework and additional containt
## Babel
Babel is a "toolchain that is mainly used to convert ECMAScript 2015+ code into a backwards compatible version of JavaScript in current and older browsers or environments" as the website of the tool say itself, meaning the produced code will first be compiled and transformed in an environnement-friendly code, able to be runned on any brower. The choice of this technology has been made to allow any browser on any OS to turn Tatakae API, as the tools of our team wasn't the same. Moreover, some of the ECMAScript native functionnalities wasn't available in a Node native environnement. Babel allowed us to use those. 

## Wandbox
Wandbox is an online compiler, whose usage is to execute code in a contenerized environnment. As most of the user code may interract with our own system, we want Wandbox to execute it for us, in a totaly neutral environment. We only have to get its output as our own, sanitize it then send it to the client. 

