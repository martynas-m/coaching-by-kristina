<template>
  <section id="about">
    <article v-html="about" />
    <p class="badges">
      <a
        href="https://www.credly.com/badges/faeab874-7936-4111-b2f7-1a6ac6e828b4/embedded"
        target="_blank"
      >
        <img :src="acc" alt="Associate Certified Coach (ACC) - Credly" />
      </a>
      <a
        href="https://www.credly.com/badges/2117c878-d48a-4ff5-90a8-7cc1971a1ba8/public_url"
        target="_blank"
      >
        <img :src="icf" alt="International Coaching Federation (ICF) - Credly" />
      </a>
    </p>
    <article v-html="testimonials" />
  </section>
</template>

<script setup>
import acc from '@/assets/acc.png'
import icf from '@/assets/icf.png'

import { computed } from 'vue'
import { useI18n } from 'vue-i18n'
import MarkdownIt from 'markdown-it'
import MarkdownItAttrs from 'markdown-it-attrs'
import aboutLt from '@/i18n/about.lt.md?raw'
import aboutEn from '@/i18n/about.en.md?raw'
import testimonialsLt from '@/i18n/testimonials.lt.md?raw'
import testimonialsEn from '@/i18n/testimonials.en.md?raw'

const { locale } = useI18n()

const md = MarkdownIt()
md.use(MarkdownItAttrs)
const about = computed(() => md.render(locale.value === 'lt' ? aboutLt : aboutEn))

const testimonials = computed(() =>
  md.render(locale.value === 'lt' ? testimonialsLt : testimonialsEn)
)
</script>
<style>
#about p {
  /* text-align: justify; */
}
#about p.badges {
  text-align: right;
}
#about img {
  margin-top: 1.3em;
  margin-left: 2em;
  height: 100px;
}
#about ul {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  gap: 2em;
  padding: 2em 1.2rem;
  justify-content: center;
}
#about li {
  list-style-type: none;
  flex: 1 1 40%;
  text-align: justify;
  /*max-width: 500px;*/
  padding-left: 1em;
  border-left: 6px solid var(--disabled-color);
}

@media (max-width: 900px) {
  #about ul {
    flex-direction: column;
    align-items: center;
  }
}
</style>
<script setup></script>
