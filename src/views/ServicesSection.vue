<template>
  <section id="services">
    <article class="individual">
      <aside v-html="individual" />
      <img
        :src="icfCertificate"
        alt="icf certificate"
        @click="showFull(icfCertificate)"
      />
    </article>
    <hr />
    <article class="team">
      <aside v-html="team" />
      <img
        :src="gtci"
        alt="gtci graduation certificate"
        @click="showFull(gtci)"
      />
      <img
        :src="systematicTeamCoaching"
        alt="systematic team coaching graduation certificate"
        @click="showFull(systematicTeamCoaching)"
      />
    </article>
  </section>
  <div v-if="showImage" id="full-size" @mousedown="() => (showImage = false)">
    <img :src="fullImage" alt="image" />
  </div>
</template>

<script setup>
import { ref, computed } from "vue";

import icfCertificate from "@/assets/icf-credential.png";
import gtci from "@/assets/gtci-graduation.png";
import systematicTeamCoaching from "@/assets/systemic-team-coaching.png";

import { useI18n } from "vue-i18n";
import MarkdownIt from "markdown-it";
import individualServicesLt from "@/i18n/services.individual.lt.md?raw";
import individualServicesEn from "@/i18n/services.individual.en.md?raw";
import teamServicesLt from "@/i18n/services.team.lt.md?raw";
import teamServicesEn from "@/i18n/services.team.en.md?raw";

const { locale } = useI18n();

const md = MarkdownIt();
const individual = computed(() =>
  md.render(locale.value === "lt" ? individualServicesLt : individualServicesEn)
);
const team = computed(() =>
  md.render(locale.value === "lt" ? teamServicesLt : teamServicesEn)
);

const showImage = ref(false);
let fullImage = null;

const showFull = (image) => {
  fullImage = image;
  showImage.value = true;
};
</script>

<style>
.team {
  flex-wrap: wrap;
}
.team > aside {
  flex-grow: 2;
}
.individual p,
.team p {
  text-align: justify;
}
.individual ul,
.team ul {
  text-align: justify;
  padding-right: 1.2rem;
}
.individual li,
.team li {
  list-style: circle;
}
</style>
<style scoped>
.individual,
.team {
  display: flex;
  flex-direction: row;
}
img {
  object-fit: contain;
  cursor: zoom-in;
}
.individual > img {
  width: 400px;
  padding-right: 1.2em;
}
.team > img {
  width: 300px;
  padding-left: 1.2em;
}
#full-size {
  width: 100%;
  height: 100%;
  background-color: #00000099;
  position: fixed;
  top: 50%;
  left: 50%;
  /* bring your own prefixes */
  transform: translate(-50%, -50%);
  display: flex;
  align-items: center;
}
#full-size > img {
  margin-left: auto;
  margin-right: auto;
  height: 90vh;
  width: 90vw;
  object-fit: contain;
  cursor: zoom-out;
}
hr {
  margin: 3em 1.2em;
  border: 0;
  height: 1px;
  background-image: linear-gradient(
    to right,
    var(--background-row-1),
    var(--hero-bg-color),
    var(--background-row-1)
  );
}
@media (max-width: 900px) {
  .individual {
    flex-direction: column;
    align-items: center;
  }
  .team {
    flex-direction: column;
    align-items: center;
  }
  .individual > img {
    width: 90vw;
    padding: 0.2em;
  }
  .team > img {
    width: 90vw;
    padding: 0.2em;
  }
}
</style>
