# Lab 01: Setting up the development environment
This page will help you install and build your first React Native app.

## Instructions
### Installing dependencies
You will need Node, the React Native command line interface, a JDK, and Android Studio.

#### Setup NodeJS
Download the Node.js installer for your platform at https://nodejs.org/en/download

#### Android OS
- JDK: 
Download: https://www.oracle.com/java/technologies/javase/jdk11-archive-downloads.html
- Android Studio
Download: https://developer.android.com/studio

#### iOS
- XCODE
The easiest way to install Xcode is via the Mac App Store
https://apps.apple.com/us/app/xcode/id497799835?mt=12
- CocoaPods
Install: sudo gem install cocoapods
more detail: https://guides.cocoapods.org/using/getting-started.html

#### React Native command line
React Native has a built-in command line interface. Rather than install and manage a specific version of the CLI globally, we recommend you access the current version at runtime using npx, which ships with Node.js. With npx react-native <command>, the current stable version of the CLI will be downloaded and executed at the time the command is run.

Example: Creating a new application called "AwesomeProject"

> **Note**: npx react-native@latest init AwesomeProject

#### Using Typescript
Creating a new application called "MyApp"
> **Note**: npx react-native init --template react-native-template-typescript MyApp