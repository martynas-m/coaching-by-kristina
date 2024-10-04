import './assets/main.css'

import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import { createI18n } from 'vue-i18n'
import { messages } from './i18n/messages'

const currentLocale = localStorage.getItem("locale") ?? "lt";
const app = createApp(App)
const i18n = createI18n({
  legacy: false,
  locale: currentLocale,
  fallbackLocale: "lt",
  messages
})

app.use(i18n)
app.use(router)

app.mount('#app')

window.onscroll = function () { myFunction() };

// Get the header
var header = document.getElementsByTagName('header')[0]


// Get the offset position of the navbar
var sticky = header.offsetTop;

// Add the sticky class to the header when you reach its scroll position. Remove "sticky" when you leave the scroll position
function myFunction() {
  if (window.scrollY > sticky) {
    header.classList.add("sticky");
  } else {
    header.classList.remove("sticky");
  }
}