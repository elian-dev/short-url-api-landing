<script setup>
import Button from '@/components/Button.vue'
</script>
<template>
  <section class="container hero">
    <div class="hero__img">
      <img class="" src="@/assets/images/illustration-working.svg" alt="" srcset="" />
    </div>

    <article class="hero__content">
      <h1 class="hero__title">More than just shorter links</h1>
      <p class="hero__text">
        Build your brand’s recognition and get detailed insights on how your links are performing.
      </p>
      <Button type="button" variant="primary"> Get started </Button>
    </article>
  </section>
</template>

<style>
.hero {
  max-width: 100%;

  display: grid;
  position: relative;
  padding-top: 3rem;
  padding-bottom: 10rem;
}

.hero .hero__img {
  display: flex;
  justify-content: center;
}

.hero .hero__img img {
  max-width: 30rem;
}

.hero .hero__title {
  font-size: 42px;
  font-weight: 700;
  text-align: center;
  line-height: 48px;
}

.hero .hero__text {
  font-size: 18px;
  text-align: center;
  color: #9e9aa8;
}

.hero .hero__content {
  max-width: 100vw;
  padding-left: 1.5rem;
  padding-right: 1.5rem;

  display: grid;
}

.hero .hero__content .button {
  font-size: 20px;

  max-width: fit-content;
  margin-left: auto;
  margin-right: auto;
  margin-top: 2rem;
  margin-bottom: 1rem;
  padding-top: 15px;
  padding-bottom: 15px;
}

@media screen and (min-width: 768px) {
  .hero {
    grid-template-rows: 1fr;
    grid-template-columns: 1fr 1fr 42%;
    place-items: start;
  }
  .hero .hero__img {
    grid-row: 1;
    grid-column: 3;
  }

  .hero .hero__img img {
    max-width: 50rem;
  }

  .hero__content {
    grid-row: 1;
    grid-column: 1/3;
  }

  .hero .hero__title {
    font-size: 80px;
    line-height: 90px;
    text-align: left;
  }

  .hero .hero__text {
    text-align: left;
  }

  .hero .hero__content .button {
    margin-left: 0;
  }
}

@media screen and (min-width: 768px) and (max-width: 1000px) {
  .hero {
    grid-template-columns: 1fr 1fr 40%;
  }
  .hero .hero__img img {
    max-width: 40rem;
  }
  .hero .hero__title {
    font-size: 60px;
    line-height: 70px;
    text-align: left;
  }
}
</style>
