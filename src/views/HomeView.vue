<script setup lang="ts">
import HeroSection from '@/components/HeroSection.vue'
import ShorterForm from '@/components/ShorterForm.vue'
import StatsSection from '@/components/StatsSection.vue'
import Footer from '@/components/FooterContainer.vue';
import CTA from '@/components/CTA.vue';
import Results from '@/components/ResultsUri.vue';
</script>

<template>
  <HeroSection></HeroSection>
  <ShorterForm></ShorterForm>
  <Results url="/"></Results>
  <StatsSection></StatsSection>
  <CTA></CTA>
  <Footer></Footer>
</template>
