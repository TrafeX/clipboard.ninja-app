# Clipboard.ninja Android app

Android app for [https://clipboard.ninja](https://clipboard.ninja).

* Download the [Android App in the Play Store](https://play.google.com/store/apps/details?id=nl.trafex.apps.clipboardninja)

See the [source of the website on GitHub](https://github.com/TrafeX/clipboard.ninja)

## Features

Clipboard.ninja is a quick and secure way to share text between devices.

 * It's realtime; you'll see the text immediately appear on the receiving device.
 * It's secure; the connection to the server is encrypted with SSL.
 * It's private; you first need to connect to the other device before you can send something, this way the data never has to be (temporarily) stored on the server.
 * You can connect with multiple devices, simultaneously receiving the text.
 * No registration is needed, a 6 digit number is enough to connect the devices.

The app itself is a thin React Native wrapper around a single WebView — the website does all
the work. It is Android-only.

## Development

### Requirements

- **JDK 21** — `sudo apt install openjdk-21-jdk`
- **Node.js ≥ 22.13**
- **Android SDK.** `sdkmanager` is not an apt package; it ships only in Google's
  [command line tools](https://developer.android.com/studio#command-line-tools-only) zip:

  ```shell
  export ANDROID_HOME="$HOME/Android/Sdk"
  mkdir -p "$ANDROID_HOME/cmdline-tools"
  cd /tmp
  curl -O https://dl.google.com/android/repository/commandlinetools-linux-15859902_latest.zip
  unzip -q commandlinetools-linux-15859902_latest.zip
  mv cmdline-tools "$ANDROID_HOME/cmdline-tools/latest"
  export PATH="$ANDROID_HOME/cmdline-tools/latest/bin:$PATH"

  yes | sdkmanager --licenses
  sdkmanager "platform-tools" "platforms;android-37.0" "platforms;android-36" \
             "build-tools;37.0.0" "ndk;27.1.12297006" "cmake;3.22.1"
  ```

  > Note the platform ID is `platforms;android-37.0`, **not** `android-37`. Android uses minor
  > SDK versions now, and passing the wrong ID makes `sdkmanager` skip the entire install while
  > still exiting 0.

- KVM for the emulator: `sudo apt install qemu-kvm && sudo usermod -aG kvm "$USER"` (then log
  out and back in).

Environment variables:

```shell
export JAVA_HOME=/usr/lib/jvm/java-21-openjdk-amd64
export ANDROID_HOME=$HOME/Android/Sdk
export PATH=$PATH:$ANDROID_HOME/cmdline-tools/latest/bin
export PATH=$PATH:$ANDROID_HOME/platform-tools
export PATH=$PATH:$ANDROID_HOME/emulator
```

### Run

```shell
npm install
npm start            # Metro, in one terminal
npm run android      # build + install on a running device/emulator
```

Create an emulator (use the 16 KB page-size image — it is what Play requires):

```shell
sdkmanager "emulator" "system-images;android-36;google_apis_ps16k;x86_64"
avdmanager create avd -n rn87_api36_16k \
  -k "system-images;android-36;google_apis_ps16k;x86_64" -d pixel_7
emulator -avd rn87_api36_16k
```

### Checks

```shell
npm run lint
npm run typecheck
npm test
```

## Create a release

Release signing credentials live **outside this repository**, in `~/.gradle/gradle.properties`
(mode `600`):

```properties
MYAPP_RELEASE_STORE_FILE=/home/tpater/Projects/clipboard.ninja-app/android/app/first.keystore
MYAPP_RELEASE_KEY_ALIAS=trafex
MYAPP_RELEASE_STORE_PASSWORD=...
MYAPP_RELEASE_KEY_PASSWORD=...
```

Never commit keystores or passwords. If these properties are missing, the release build falls
back to the debug key so CI still produces an artifact — that build cannot be uploaded to Play.

Bump `versionCode` (must increase) and `versionName` in `android/app/build.gradle`, then:

```shell
cd android/
./gradlew bundleRelease
```

The bundle lands in `android/app/build/outputs/bundle/release/app-release.aab`.

Upload it to the Play Console **internal testing** track first — Play validates the signing
certificate, `targetSdk`, and 16 KB page alignment at upload time.
