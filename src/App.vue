<script setup>
import { RouterLink, RouterView } from 'vue-router'
import LocaleChange from '@/i18n/LocaleChange.vue'
</script>

<template>
  <header>
    <RouterLink to="/"><img src="/logo.svg" alt="logo" /></RouterLink>
    <locale-change id="localeChange" />
    <div class="spacer"></div>
    <nav>
      <RouterLink to="/home#about">{{ $t('menu.about') }}</RouterLink>
      <RouterLink to="/services" exact>{{ $t('menu.services') }}</RouterLink>
      <RouterLink to="/home#contacts" exact>{{ $t('menu.contacts') }}</RouterLink>
    </nav>
    <input type="checkbox" id="checkbox_toggle" />
    <label for="checkbox_toggle" class="hamburger">&#9776;</label>
  </header>
  <main>
    <RouterView />
  </main>
</template>

<style scoped>
header {
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-top: 1em;
}

.sticky {
  position: fixed;
  min-height: 50px;
  margin-top: 0;
  width: 100%;
  background: var(--background-row-1-alpha);
  box-shadow: 0 0 15px var(--background-row-1);
  border-bottom: 1px solid var(--hero-bg-color);
}

.sticky + main {
  scroll-padding-top: 60px;
}

header > a > img {
  height: 80px;
  padding: 10px;
}

nav {
  display: flex;
  gap: 2em;
  list-style-type: none;
  padding: 1em;
}

header .spacer {
  flex-grow: 1;
}

nav a,
nav a:visited {
  text-decoration: none;
  font-weight: 500;
  padding: 5px 10px;
  border-left: 2px dotted transparent;
  color: var(--primary-color);
  transition: 500ms;
}

/*.router-link-active {*/
nav a:hover {
  border-left: 2px dotted var(--primary-color);
}

.hamburger {
  font-size: 2.5em;
  cursor: pointer;
  padding: 0 0.5em;
  display: none;
}

#checkbox_toggle {
  display: none;
}

nav:has(+ input[type='checkbox']:checked) {
  display: flex;
}

header:has(#checkbox_toggle:checked) #localeChange,
header:has(#checkbox_toggle:checked) img {
  display: none;
}

@media (max-width: 900px) {
  header {
    justify-content: space-between;
  }

  header > nav {
    display: none;
  }

  nav {
    flex-direction: column;
    gap: 1em;
  }

  .hamburger {
    display: inline;
  }
}
</style>
