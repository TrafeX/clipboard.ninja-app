# Clipboard.ninja Android app

Android and (soon/maybe) IOS app for [https://clipboard.ninja](https://clipboard.ninja).

* Download the [Android App in the Play Store](https://play.google.com/store/apps/details?id=nl.trafex.apps.clipboardninja)

See the [source of the website on GitHub](https://github.com/TrafeX/clipboard.ninja)

## Features

Clipboard.ninja is a quick and secure way to share text between devices.

 * It's realtime; you'll see the text immediately appear on the receiving device.
 * It's secure; the connection to the server is encrypted with SSL.
 * It's private; you first need to connect to the other device before you can send something, this way the data never has to be (temporarily) stored on the server. 
 * You can connect with multiple devices, simultaneously receiving the text.
 * No registration is needed, a 6 digit number is enough to connect the devices.

## Development
Also see [Running React Native app in Ubuntu](https://medium.com/@dooboolab/running-react-native-app-in-ubuntu-18-04-7d1db4ac7518)

### Requirements
- `sudo apt install openjdk-8-jre openjdk-8-jdk`
- `sudo apt install qemu-kvm libvirt-bin`

### Run emulator

- Start Android emulator
```shell
cd ~/Android/Sdk/tools
emulator -use-system-libs -avd Android13
```

- Run Android devserver
```shell
node_modules/.bin/react-native start
node_modules/.bin/react-native run-android
```

### Create release

```shell
cd android/
./gradlew bundleRelease
```
File can be found in `app/build/outputs/bundle/app-release.aab`
