# JAVA  client - TATAKAE Admin

## Usage documentation

Tatakae admin is a standalone java client allowing administrator to handle and help user of tatakae.

There is two way to execute its .jar file. Both contains the same features and possibilies.

## GUI client 

This is the graphical interface application. 

![JAVA NO PICTURE](https://nsa40.casimages.com/img/2020/07/20/200720114516749553.png)

## Home page

This is the lobby, the main view where you'll be able to choose between all of the features.

![JAVA NO PICTURE](https://nsa40.casimages.com/img/2020/07/20/200720114806532490.png)

Here you may choose between stand alone features as plugin management and tickets answering.

When you'll have an installed plugin, you'll be able to use it by clicking on its name on this interface.

## Ticket manager

On this same page, you may interact with regular user tickets, answer to it, open and close it.

![JAVA NO PICTURE](https://nsa40.casimages.com/img/2020/07/21/200721120300100605.png)

![JAVA NO PICTURE](https://nsa40.casimages.com/img/2020/07/21/200721120801846470.png)

## Plugin manager

On this interface, it is possible to pull personal plugin, enable and disable it. You may see its description too.

![JAVA NO PICTURE](https://nsa40.casimages.com/img/2020/07/21/200721120613532562.png)


## How to create a plugin

In order to create a plugin, you have to follow the rules of the Plugin interface, implemented on a class named extension.


```java

public interface Plugin {
    void start();

    String getMainViewName();

    String getName();

    String getDescription();

    void startCLI();

    Object getController();

    ArrayList<String> getClassesName(Path source);

    void autoExtractResources(Path jarSource, Path destination);

    String getExtractionDirectoryName();
}
```

## Here we are !