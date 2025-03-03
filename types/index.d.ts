import { type Plugin } from 'vue'

declare module 'vue' {
  interface GlobalComponents {
    AndroidView: void
    ChromeView: void
    ChromiumView: void
    ConsoleView: void
    DesktopView: void
    EdgeChromiumView: void
    EdgeLegacyView: void
    EdgeView: void
    ElectronView: void
    EmbeddedView: void
    FirefoxView: void
    IEView: void
    IOSView: void
    IPadView: void
    IPhoneView: void
    IPodView: void
    LinuxView: void
    MacOSView: void
    MIUIView: void
    MobileOnlyView: void
    MobileSafariView: void
    MobileView: void
    OperaView: void
    SafariView: void
    SamsungBrowserView: void
    SmartTVView: void
    TabletView: void
    WearableView: void
    WindowsView: void
    WinPhoneView: void
    YandexView: void
  }
}

declare const isAndroid: boolean
declare const isChrome: boolean
declare const isChromium: boolean
declare const isConsole: boolean
declare const isDesktop: boolean
declare const isEdge: boolean
declare const isEdgeChromium: boolean
declare const isEdgeLegacy: boolean
declare const isElectron: boolean
declare const isEmbedded: boolean
declare const isFirefox: boolean
declare const isIE: boolean
declare const isIOS: boolean
declare const isIPad: boolean
declare const isIPhone: boolean
declare const isIPod: boolean
declare const isLinux: boolean
declare const isMacOS: boolean
declare const isMIUI: boolean
declare const isMobile: boolean
declare const isMobileOnly: boolean
declare const isMobileSafari: boolean
declare const isOpera: boolean
declare const isSafari: boolean
declare const isSamsungBrowser: boolean
declare const isSmartTV: boolean
declare const isTablet: boolean
declare const isWearable: boolean
declare const isWindows: boolean
declare const isWinPhone: boolean
declare const isYandex: boolean
declare function browserName(): string
declare function browserVersion(): string
declare function deviceModel(): string
declare function deviceType(): string
declare function deviceVendor(): string
declare function engineName(): string
declare function engineVersion(): string
declare function getUA(): string
declare function osName(): string
declare function osVersion(): string

declare const DeviceDetectPlugin: Plugin

export {
  DeviceDetectPlugin,
  isAndroid,
  isChrome,
  isChromium,
  isConsole,
  isDesktop,
  isEdge,
  isEdgeChromium,
  isEdgeLegacy,
  isElectron,
  isEmbedded,
  isFirefox,
  isIE,
  isIOS,
  isIPad,
  isIPhone,
  isIPod,
  isLinux,
  isMacOS,
  isMIUI,
  isMobile,
  isMobileOnly,
  isMobileSafari,
  isOpera,
  isSafari,
  isSamsungBrowser,
  isSmartTV,
  isTablet,
  isWearable,
  isWindows,
  isWinPhone,
  isYandex,
  browserName,
  browserVersion,
  deviceModel,
  deviceType,
  deviceVendor,
  engineName,
  engineVersion,
  getUA,
  osName,
  osVersion,
}
