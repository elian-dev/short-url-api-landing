<script setup lang="ts">
import HeroSection from '@/components/HeroSection.vue'
import ShorterForm from '@/components/ShorterForm.vue'
import StatsSection from '@/components/StatsSection.vue'
import Footer from '@/components/FooterContainer.vue';
import CTA from '@/components/CTA.vue';
import Results from '@/components/ResultsUri.vue';

import { ref, onMounted, computed, watch } from "vue";

interface UriObject {
  newUrl: string;
  oldUrl: string;
  favicon: string;
  createdAt: Date;
}

const uris = ref<UriObject[]>([])

const uris_asc = computed(() => uris.value.sort((a: any, b: any) => {
    return b.createdAt - a.createdAt;
}))

watch(
  uris,
  (newVal) => {
    localStorage.setItem("uris", JSON.stringify(newVal));
  },
  { deep: true }
);

onMounted(() => {
  const storedUris = JSON.parse(localStorage.getItem("uris") || "[]") as UriObject[]
  uris.value = storedUris.sort((a: any, b: any) => b.createdAt - a.createdAt)
})

const addUri = (url: string, cleanUri: any, icon: string) => {
  const result: any = {
    oldUrl: url,
    newUrl: cleanUri.result_url,
    favicon: icon,
    createdAt: new Date().getTime(),
  }
  uris.value.push(result)
}

const removeUri = (uri: any) => {
  uris.value = uris.value.filter((t) => t !== uri)
}
</script>

<template>
  <HeroSection></HeroSection>
  <ShorterForm @store="addUri"></ShorterForm>
  <Results :uris="uris_asc" @remove="removeUri"></Results>
  <StatsSection></StatsSection>
  <CTA></CTA>
  <Footer></Footer>
</template>
