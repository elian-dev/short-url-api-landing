<script setup lang="ts">
defineProps(['type', 'variant', 'link', 'target'])
</script>

<template>
  <a
    href="link"
    target="target"
    class="button"
    :class="[{ primary: variant == 'primary' }, { secondary: variant == 'secondary' }]"
    v-if="type == 'cta'"
  >
    <slot></slot>
  </a>
  <button
    class="button"
    :class="[{ primary: variant == 'primary' }, { secondary: variant == 'secondary' }]"
    v-else
  >
    <slot></slot>
  </button>
</template>

<style>
.button {
  font-size: 15px;
  font-weight: 700;
  border-radius: 28px;
  padding: 10px 20px;
  color: #fff;
  border: none;
  text-decoration: none;
}
.button:hover {
  cursor: pointer;
}
.button.primary {
  background-color: #2bd0d0;
}
.button.secondary {
  background-color: #3a3054;
}

.button.primary:hover {
  background-color: #9ae3e3;
}
</style>
