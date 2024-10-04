<template>
  <section id="contacts">
    <article>
      <h1>{{ $t('contacts.h1') }}</h1>
      <a href="mailto:coachingbykristina@outlook.com">
        <i class="fa-solid fa-envelope"></i> coachingbykristina@outlook.com
      </a>
      <a target="_blank" href="https://www.linkedin.com/in/kristinamarkunaite">
        <i class="fa-brands fa-linkedin"></i> kristinamarkunaite
      </a>
      <a
        class="register"
        href="https://calendly.com/coachingbykristina/pazintine_sesija"
        target="_blank"
      >
        <i class="fa-solid fa-calendar-days"></i>
        <span>
          {{ $t('contacts.register') }}
        </span>
      </a>
    </article>
  </section>
</template>
<style scoped>
#contacts {
  display: flex;
  height: 600px;
  background-image: url('/Kristina-3.png');
  background-size: 550px;
  background-position: 0 -100px;
  background-repeat: no-repeat;
  background-color: var(--contacts-bg-color);
}

#contacts h1 {
  padding: 0;
}

#contacts article {
  display: flex;
  gap: 0.5em;
  flex-direction: column;
  padding: 1.2rem;
  height: 500px;
  margin-left: 550px;
  color: var(--contacts-text-color);
  background-color: var(--contacts-bg-color-alpha);
}

.register {
  margin-top: 1.3em;
  display: flex;
  gap: 1em;
}

#contacts .register i {
  font-size: 2em;
}

a.register > span {
  white-space: normal;
  font-weight: 300;
  max-width: 300px;
  /* text-align: justify; */
}

#contacts a,
#contacts a:visited {
  color: var(--contacts-text-color);
  text-overflow: ellipsis;
  overflow: hidden;
  font-weight: 300;
}

@media (max-width: 900px) {
  #contacts {
    /*
    height: auto;
    padding: 0;
    background-image: none;
    */

    height: 700px;
    flex-direction: column-reverse;
    padding: 0;
    margin: 0;
    background-image: url('/Kristina-3-phone.png');
    background-size: cover;
    background-position: center 0;
  }

  #contacts article {
    height: auto;
    flex-basis: auto;
    margin: 0;
    padding: 0.8rem;
  }

  #contacts h1 {
    margin-top: 0.5em;
  }
}
</style>
