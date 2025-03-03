## vue3-device-detect

[![Version](https://img.shields.io/npm/v/@tenrok/vue3-device-detect.svg)](https://www.npmjs.com/package/@tenrok/vue3-device-detect)
[![License](https://img.shields.io/npm/l/@tenrok/vue3-device-detect.svg)](https://github.com/tenrok/vue3-device-detect/blob/main/LICENSE)
[![vue](https://img.shields.io/badge/vue-3.5.3-brightgreen.svg)](https://github.com/vuejs/vue)
[![GitHub last commit](https://img.shields.io/github/last-commit/tenrok/vue3-device-detect.svg)](https://github.com/tenrok/vue3-device-detect)
[![Downloads](https://img.shields.io/npm/dm/@tenrok/vue3-device-detect.svg)](https://npmcharts.com/compare/@tenrok/vue3-device-detect?minimal=true)

Detect device type and render content based on device type

## Quickstart

Install using

```
npm install @tenrok/vue3-device-detect --save
```

Then, initalize the plugin in the starting point of your app (most likely src/main.js):

```ts
// main.ts
import { DeviceDetectPlugin } from '@tenrok/vue3-device-detect'
app.use(DeviceDetectPlugin)
```

This will globally register the components `DesktopView`, `MobileView` and others and you will be able to use those right away.

<!-- prettier-ignore -->
```html
<template>
  <DesktopView>
    <h1>This is rendered only in desktop browser</h1>
  </DesktopView>

  <MobileView>
    <h1>This is rendered only on mobile</h1>
  </MobileView>
</template>
```

Build-in components:

    AndroidView
    ChromeView
    ChromiumView
    ConsoleView
    DesktopView
    EdgeChromiumView
    EdgeLegacyView
    EdgeView
    ElectronView
    EmbeddedView
    FirefoxView
    IEView
    IOSView
    IPadView
    IPhoneView
    IPodView
    LinuxView
    MacOSView
    MIUIView
    MobileOnlyView
    MobileSafariView
    MobileView
    OperaView
    SafariView
    SamsungBrowserView
    SmartTVView
    TabletView
    WearableView
    WindowsView
    WinPhoneView
    YandexView

You can also determine through the built-in API

```ts
// main.ts
import { isMobile } from '@tenrok/vue3-device-detect'
```

## API

Properties:

| name             | type    | description                             |
| ---------------- | ------- | --------------------------------------- |
| isAndroid        | boolean | The OS is `Android`                     |
| isChrome         | boolean | Browser is `Chrome`                     |
| isChromium       | boolean | Browser is `Chromium`                   |
| isConsole        | boolean | The device type is `console`            |
| isDesktop        | boolean | The device type is `desktop`            |
| isEdge           | boolean | Browser is `Edge` or `Edge Chromium`    |
| isEdgeChromium   | boolean | Browser is `Edge Chromium`              |
| isEdgeLegacy     | boolean | Browser is `Edge`                       |
| isElectron       | boolean | Browser is `Electron`                   |
| isEmbedded       | boolean | The device type is `embedded`           |
| isFirefox        | boolean | Browser is `Firefox`                    |
| isIE             | boolean | Browser is `Internet Explorer`          |
| isIOS            | boolean | The OS is `iOS`                         |
| isIPad           | boolean | is `iPad`                               |
| isIPhone         | boolean | is `iPhone`                             |
| isIPod           | boolean | is `iPod`                               |
| isLinux          | boolean | The OS is `Linux`                       |
| isMacOS          | boolean | The OS is `Mac OS`                      |
| isMIUI           | boolean | Browser is `MIUI Browser`               |
| isMobile         | boolean | The device type is `mobile` or `tablet` |
| isMobileOnly     | boolean | The device type is `mobile`             |
| isMobileSafari   | boolean | Browser is `Mobile Safari`              |
| isOpera          | boolean | Browser is `Opera`                      |
| isSafari         | boolean | Browser is `Safari`                     |
| isSamsungBrowser | boolean | Browser is `Samsung Browser`            |
| isSmartTV        | boolean | The device type is `smarttv`            |
| isTablet         | boolean | The device type is `tablet`             |
| isWearable       | boolean | The device type is `wearable`           |
| isWindows        | boolean | The OS is `Windows`                     |
| isWinPhone       | boolean | The OS is `Windows Phone`               |
| isYandex         | boolean | Browser is `Yandex Browser`             |

Functions:

| name           | return type | description                                                              |
| -------------- | ----------- | ------------------------------------------------------------------------ |
| browserName    | string      | Return browser name                                                      |
| browserVersion | string      | Return browser version                                                   |
| deviceModel    | string      | Return mobile device type (e.g `Nexus 5`)                                |
| deviceType     | string      | Return device type (`mobile` or `tablet`)                                |
| deviceVendor   | string      | Return mobile phone brand (e.g `LG`, `Apple iPhone` etc)                 |
| engineName     | string      | Return browser engine name (e.g `Gecko` for Firefox, `Blink` for Chrome) |
| engineVersion  | string      | Return browser engine version                                            |
| getUA          | string      | Return user agent                                                        |
| osName         | string      | Return OS name                                                           |
| osVersion      | string      | Return OS version                                                        |
