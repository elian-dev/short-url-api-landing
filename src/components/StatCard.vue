<script setup lang="ts">
defineProps<{
  img: string
  imgAlt: string
  title: string
  text: string
  className?: string
}>()
</script>

<template>
  <article class="card" :class="className">
    <div class="card__thumb">
      <img :src="img" :alt="imgAlt" srcset="" />
    </div>

    <h3>{{ title }}</h3>
    <p>
      {{ text }}
    </p>
  </article>
</template>

<style>
.card {
  background-color: #fff;
  padding: 3rem 2rem;
  position: relative;
  height: fit-content;
  max-height: fit-content;
}

.card h3 {
  font-size: 1.1rem;
  font-weight: 700;
  margin-top: 1rem;
}

.card__thumb {
  width: fit-content;
  background-color: #3a3054;
  padding: 1.3rem 1.3rem;
  border-radius: 50%;
  position: absolute;
  transform: translateY(-50%);
  top: 0;
  display: flex;
  align-items: center;
}

@media screen and (max-width: 900px) {
  .card {
    text-align: center;
  }
  .card__thumb {
    top: 0;
    left: 50%;
    transform: translate(-50%, -50%);
  }
}

</style>
