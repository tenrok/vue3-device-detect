import { UAParser } from 'ua-parser-js'
import { BrowserName, DeviceType, OSName } from 'ua-parser-js/enums'
import { defineComponent, h, type Plugin } from 'vue'

const UA = new UAParser()
const device = UA.getDevice()
const os = UA.getOS()
const browser = UA.getBrowser()
const engine = UA.getEngine()
const userAgent = UA.getUA()

const detectIPad = () => /iPad/.test(userAgent)
const detectEdgeChromium = () => os.name === OSName.WINDOWS && os.version === '10' && userAgent.indexOf('Edg/') !== -1

const isAndroid = os.name === OSName.ANDROID
const isChrome = browser.name === BrowserName.CHROME
const isChromium = browser.name === BrowserName.CHROMIUM
const isConsole = device.type === DeviceType.CONSOLE
const isDesktop = !device.type || device.type === DeviceType.DESKTOP
const isEdge = browser.name === BrowserName.EDGE || detectEdgeChromium()
const isEdgeChromium = detectEdgeChromium()
const isEdgeLegacy = browser.name === BrowserName.EDGE
const isElectron = /electron/.test(userAgent.toLowerCase())
const isEmbedded = device.type === DeviceType.EMBEDDED
const isFirefox = browser.name === BrowserName.FIREFOX
const isIE = browser.name === BrowserName.IE
const isIOS = os.name === OSName.IOS || detectIPad()
const isIPad = detectIPad()
const isIPhone = /iPhone/.test(userAgent)
const isIPod = /iPod/.test(userAgent)
const isLinux = os.name === OSName.LINUX
const isMacOS = os.name === OSName.MACOS
const isMIUI = browser.name === BrowserName.MIUI
const isMobile = device.type === DeviceType.MOBILE || device.type === DeviceType.TABLET || detectIPad()
const isMobileOnly = device.type === DeviceType.MOBILE
const isMobileSafari = browser.name === BrowserName.SAFARI_MOBILE || detectIPad()
const isOpera = browser.name === BrowserName.OPERA
const isSafari = browser.name === BrowserName.SAFARI || browser.name === BrowserName.SAFARI_MOBILE
const isSamsungBrowser = browser.name === BrowserName.SAMSUNG
const isSmartTV = device.type === DeviceType.SMARTTV
const isTablet = device.type === DeviceType.TABLET || detectIPad()
const isWearable = device.type === DeviceType.WEARABLE
const isWindows = os.name === OSName.WINDOWS
const isWinPhone = os.name === OSName.WINDOWS_PHONE
const isYandex = browser.name === BrowserName.YANDEX
const browserName = () => browser.name
const browserVersion = () => browser.version
const deviceModel = () => device.model
const deviceType = () => device.type || DeviceType.DESKTOP
const deviceVendor = () => device.vendor
const engineName = () => engine.name
const engineVersion = () => engine.version
const getUA = () => userAgent
const osName = () => os.name
const osVersion = () => os.version

const checklist = {
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
}

const DeviceDetectPlugin: Plugin = {
  install(app) {
    for (const [key, value] of Object.entries(checklist)) {
      const name = `${key.substring(2)}View`
      const component = defineComponent({
        name,
        props: {
          tagName: { type: String, default: 'div' },
        },
        setup(props, { slots }) {
          return () => {
            return value ? h(props.tagName, slots.default?.()) : null
          }
        },
      })
      app.component(name, component)
    }
  },
}

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
