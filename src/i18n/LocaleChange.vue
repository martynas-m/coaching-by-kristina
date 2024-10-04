<template>
  <div class="container" @click="changeLocale">
    <div :class="{ inactive: locale == 'lt' }">LT</div>
    <div :class="{ inactive: locale == 'en' }">EN</div>
  </div>
</template>
<script setup>
import { useI18n } from 'vue-i18n'
const { locale } = useI18n()

const changeLocale = () => {
  locale.value = locale.value === 'lt' ? 'en' : 'lt'
  localStorage.setItem('locale', locale.value)
}
</script>
<style scoped>
.container {
  display: flex;
  flex-direction: column;
  cursor: pointer;
}
.container > div {
  padding: 0 1em;
  font-weight: 400;
}
div.inactive {
  color: var(--disabled-color);
  font-weight: 400;
}
</style>
