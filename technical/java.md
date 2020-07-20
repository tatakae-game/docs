# JAVA Technical

The application is designed to provide administrator services as :

- Manage tickets status
- Resolve customers issues by live chat

## Architecture

The project is composed of four modules.

    tatakae-admin
    |- cli
    |- core
    |- gui
    |- starter 

### Module CLI

This module is the CLI version of the application.
It offers a choice menu interface to the user to let accessible to everyone.

Provide an interface: `MenuInterface`.

### Module CORE

The `core module` is the heart of the application. It contains all logical parts needed in the dependences like CLI and GUI.

Provide an interface: `Plugin`.

### Module GUI

This module is the GUI version of the application.
It contains all controllers and XML files to create the views for the gui interface.

### Module STARTER

The `starter module` is here to route to the appropriate environment at the launch of the application.

In case of any argument while launching the application, the starter will launch the GUI version. Otherwise, the starter will launch the CLI version.

## Plugin manager

The application offers a plugin system permitting users to create and import their own plugin.

To do so, the user must create a class named `Extension` which also must implement the interface `Plugin`.

```
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

In order to make the system working fine, the application uses a feature of Java language: `Reflection`.
