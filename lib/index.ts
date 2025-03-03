import { UAParser } from 'ua-parser-js'
import { DeviceTypes, OSTypes, BrowserTypes } from './constants'
import { defineComponent, h, type Plugin } from 'vue'

const UA = new UAParser()
const device = UA.getDevice()
const os = UA.getOS()
const browser = UA.getBrowser()
const engine = UA.getEngine()
const userAgent = UA.getUA()

const detectIPad = () => /iPad/.test(userAgent)
const detectEdgeChromium = () => os.name === OSTypes.WINDOWS && os.version === '10' && userAgent.indexOf('Edg/') !== -1

const isAndroid = os.name === OSTypes.ANDROID
const isChrome = browser.name === BrowserTypes.CHROME
const isChromium = browser.name === BrowserTypes.CHROMIUM
const isConsole = device.type === DeviceTypes.CONSOLE
const isDesktop = device.type === DeviceTypes.DESKTOP
const isEdge = browser.name === BrowserTypes.EDGE || detectEdgeChromium()
const isEdgeChromium = detectEdgeChromium()
const isEdgeLegacy = browser.name === BrowserTypes.EDGE
const isElectron = /electron/.test(userAgent.toLowerCase())
const isEmbedded = device.type === DeviceTypes.EMBEDDED
const isFirefox = browser.name === BrowserTypes.FIREFOX
const isIE = browser.name === BrowserTypes.INTERNET_EXPLORER || browser.name === BrowserTypes.IE
const isIOS = os.name === OSTypes.IOS || detectIPad()
const isIPad = detectIPad()
const isIPhone = /iPhone/.test(userAgent)
const isIPod = /iPod/.test(userAgent)
const isLinux = os.name === OSTypes.LINUX
const isMacOS = os.name === OSTypes.MAC_OS
const isMIUI = browser.name === BrowserTypes.MIUI
const isMobile = device.type === DeviceTypes.MOBILE || device.type === DeviceTypes.TABLET || detectIPad()
const isMobileOnly = device.type === DeviceTypes.MOBILE
const isMobileSafari = browser.name === BrowserTypes.MOBILE_SAFARI || detectIPad()
const isOpera = browser.name === BrowserTypes.OPERA
const isSafari = browser.name === BrowserTypes.SAFARI || browser.name === BrowserTypes.MOBILE_SAFARI
const isSamsungBrowser = browser.name === BrowserTypes.SAMSUNG_BROWSER
const isSmartTV = device.type === DeviceTypes.SMART_TV
const isTablet = device.type === DeviceTypes.TABLET || detectIPad()
const isWearable = device.type === DeviceTypes.WEARABLE
const isWindows = os.name === OSTypes.WINDOWS
const isWinPhone = os.name === OSTypes.WINDOWS_PHONE
const isYandex = browser.name === BrowserTypes.YANDEX
const browserName = () => browser.name
const browserVersion = () => browser.version
const deviceModel = () => device.model
const deviceType = () => device.type || 'desktop'
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
