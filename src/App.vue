<script setup lang="ts">
import { deviceType, deviceModel, deviceVendor, osName, osVersion, browserName, browserVersion, engineName, engineVersion } from '../lib'
</script>

<template>
  <ul>
    <li>Device Type: {{ deviceType() }}</li>
    <li>Device: {{ deviceVendor() }} {{ deviceModel() }}</li>
    <li>OS: {{ osName() }} {{ osVersion() }}</li>
    <li>Browser: {{ browserName() }} {{ browserVersion() }}</li>
    <li>Engine: {{ engineName() }} {{ engineVersion() }}</li>
  </ul>

  <DesktopView>
    <h1>This is rendered only in desktop browser</h1>
  </DesktopView>

  <MobileView>
    <h1>This is rendered only on mobile</h1>
  </MobileView>
</template>
