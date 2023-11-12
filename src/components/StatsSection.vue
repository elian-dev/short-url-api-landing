<script setup lang="ts">
import Card from '@/components/Card.vue'
import BrandIcon from '@/assets/images/icon-brand-recognition.svg'
import DetailedIcon from '@/assets/images/icon-detailed-records.svg'
import FullyIcon from '@/assets/images/icon-fully-customizable.svg'
</script>
<template>
  <section class="stats">
    <div class="container content">
      <h2 class="title">Advanced Statistics</h2>
      <p class="text">
        Track how your links are performing across the web with our <br />
        advanced statistics dashboard.
      </p>

      <section class="stats-card">
        <Card
          :img="BrandIcon"
          img-alt="Brand recognition"
          title="Brand Recognition"
          text="Boost your brand recognition with each click. Generic links don’t mean a thing. Branded links help instil confidence in your content."
        />
        <div class="stats-separator"></div>
        <Card
          :img="DetailedIcon"
          img-alt="Detailed Records"
          title="Detailed Records"
          text="Gain insights into who is clicking your links. Knowing when and where people engage with your content helps inform better decisions."
        />
        <div class="stats-separator"></div>
        <Card
          :img="FullyIcon"
          img-alt="Fully Customizable"
          title="Fully Customizable"
          text="Improve brand awareness and content discoverability through customizable links, supercharging audience engagement."
        />
      </section>
    </div>
  </section>
</template>

<style>
.stats {
  background-color: #eff1f7;
  padding-top: 10rem;
}

.stats .content {
  width: 90%;
  padding-bottom: 2rem;
}

.stats .content .title {
  font-size: 2rem;
  line-height: 30px;
  font-weight: 700;
  text-align: center;
  padding-bottom: 1rem;
}

.stats .content .text {
  text-align: center;
  color: #9e9aa8;
  margin: auto;
}

@media screen and (max-width: 768px) {
  .stats .content .text br {
    display: none;
  }
}

/* Grid for stats cards */
.stats-card {
  display: grid;
  justify-items: center;
  margin-top: 6rem;
  margin-bottom: 6rem;
}

.stats-separator {
  background-color: #2BD0D0;
  width: 8px;
  height: 5rem;
  margin-top: 0;
}

@media screen and (min-width: 900px) {
  .stats-card {
    grid-template-columns: 1fr 3% 1fr 3% 1fr;
    grid-template-rows: 20% 20% 1fr;
  }

  .stats-separator {
    width: 100%;
    height: 8px;
    margin-top: 3.5rem;
  }

  .stats-card .card:nth-child(1) {
    grid-column-start: 1;
    grid-column-end: 2;
    grid-row-start: 1;
    grid-row-end: 4;
  }
  .stats-card .stats-separator:nth-child(2) {
    grid-column-start: 2;
    grid-column-end: 3;
    grid-row-start: 3;
    grid-row-end: 4;
  }
  .stats-card .card:nth-child(3) {
    grid-column-start: 3;
    grid-column-end: 4;
    grid-row-start: 2;
    grid-row-end: 4;
  }

  .stats-card .stats-separator:nth-child(4) {
    grid-column-start: 4;
    grid-column-end: 5;
    grid-row-start: 3;
    grid-row-end: 4;
  }

  .stats-card .card:nth-child(5) {
    grid-column-start: 5;
    grid-column-end: 6;
    grid-row-start: 3;
    grid-row-end: 4;
  }
}
</style>
