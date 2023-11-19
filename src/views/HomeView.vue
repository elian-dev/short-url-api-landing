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
const pages = ref(0)
const page = ref(1)
const step = ref(4)
const paginatedBy = ref(4)
const pagination =  ref(false)

const uris_asc = computed(() => { 
  return uris.value.sort((a: any, b: any) => { return b.createdAt - a.createdAt;})
})

const uris_paginated = computed(() => {
  return uris_asc.value.slice(0, step.value)
})

const total_pages = computed(() => {
  return Math.ceil(uris_asc.value.length / paginatedBy.value)
})

const view_more = computed(() => {
  return page.value < total_pages.value ? true : false
})


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
  pagination.value = uris_asc.value.length > paginatedBy.value ? true : false
  pages.value = Math.ceil(uris_asc.value.length / paginatedBy.value)
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

const paginateResult = (newStep: number) => {
  page.value = page.value + 1
  console.log(page.value)
  console.log(total_pages.value)

  if(page.value <= total_pages.value) {
    step.value = newStep
  }
}
</script>

<template>
  <HeroSection></HeroSection>
  <ShorterForm @store="addUri"></ShorterForm>
  <Results 
    :uris="uris_paginated" 
    :pagination="view_more"
    :paginatedBy="paginatedBy"
    :step="step"
    @remove="removeUri"
    @paginate="paginateResult"
  />
  <StatsSection></StatsSection>
  <CTA></CTA>
  <Footer></Footer>
</template>
