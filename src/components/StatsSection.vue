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
        <Card
          :img="DetailedIcon"
          img-alt="Detailed Records"
          title="Detailed Records"
          text="Gain insights into who is clicking your links. Knowing when and where people engage with your content helps inform better decisions."
        />
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
  width: 85%;
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

.stats-card {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  column-gap: 1rem;
  margin-top: 6rem;
}
</style>
