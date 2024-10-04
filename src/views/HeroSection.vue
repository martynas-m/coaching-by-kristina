<template>
  <section id="hero">
    <article>
      <h1>KRISTINA MARKŪNAITĖ</h1>
      <h2>{{ $t('hero.l1') }}</h2>
      <h2>{{ $t('hero.l2') }}</h2>
    </article>
  </section>
</template>
<style scoped>
#hero {
  display: flex;
  height: 600px;
  gap: 2em;
  background-image: url('/Kristina-1-square.png');
  background-size: auto;
  background-repeat: no-repeat;
  background-position: left 500px top 0;
  background-color: var(--hero-bg-color);
  color: var(--hero-text-color);
}

#hero > article {
  /*flex: 1 1 43%;*/
  padding-top: 10em;
  flex-basis: 40%;
  background-color: var(--hero-bg-color-alpha);
  align-self: center;
}

#hero h1 {
  font-size: 2em;
  line-height: 1.1em;
  font-weight: 300;
  text-align: right;
  white-space: nowrap;
  padding: 0;
  padding-left: 1.2rem;
  margin: 0 0 1em 0;
}

#hero h2 {
  padding: 0;
  margin: 0;
  font-size: 1.5em;
  line-height: 1.6em;
  text-align: right;
}

@media (max-width: 900px) {
  #hero {
    background-size: cover;
    background-position: center;
  }

  #hero h1 {
    white-space: normal;
  }

  #hero > article {
    padding: 10px;
    flex: 1 1 100%;
    align-self: flex-end;
  }
}
</style>
