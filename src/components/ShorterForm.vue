<script setup lang="ts">
  import { ref } from "vue";
  const url = ref("");
  const isError = ref('');

  const emit = defineEmits(["store"]);

  const getCleanUri = async () => {

    const validUrl = isValidUrl()

    if (url.value === '') {
      isError.value = 'Please add a link'
    } else if (!validUrl) {
      isError.value = 'Type a valid url, eg: https://google.com/'
    } else {
      const data = { url: url.value };

      let requestOptions = {
        method: 'POST',
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      };

      const response = await fetch('api/clean-uri', requestOptions)

      if(response.ok) {
        const result = await response.json()
        const faviconUrl = await getFaviconUrl(url.value)
        emit("store", url.value, result, faviconUrl)
        url.value = ''
      }
      
    }
  }

  const validateError = () => {
    if(url.value !== '') {
      isError.value = ''
    } else {
      isError.value = 'Please add a link'
    }
  }

  const isValidUrl = () => {
    try {
      const newUrl = new URL(url.value)
      return newUrl.protocol === 'http:' || newUrl.protocol === 'https:';
    } catch (err) {
      return false
    }
  }

  const getDomainUrl = (url: string) => {
    var parsedUrl = new URL(url);
    var domainWithProtocol = parsedUrl.protocol + "//" + parsedUrl.hostname;
    return domainWithProtocol
  }

  const getFaviconUrl = async (domain: string) => {
    const domainUrl = getDomainUrl(domain)
    const faviconUrl = `https://t0.gstatic.com/faviconV2?client=SOCIAL&type=FAVICON&fallback_opts=TYPE,SIZE,URL&url=${domainUrl}&size=32`
    
    return faviconUrl
  }
</script>
<template>
  <section class="shorter" id="shorten-it">
    <form class="container shorter-form" @submit.prevent="getCleanUri" autocomplete='on'>
      <input
        class="shorter-form--input"
        :class="{error: isError}"
        @change="validateError()"
        @input="validateError()"
        type="text"
        name="url"
        id="url"
        placeholder="Shorten a link here..."
        v-model="url"
        autocomplete="url"
      />
      <input class="button primary shorter-form--submit" type="submit" value="Shorten It!" />
      <Transition>
        <p v-if="isError" class="error-msg">{{ isError }}</p>
      </Transition>
    </form>
  </section>
</template>

<style>
.v-enter-active,
.v-leave-active {
  transition: opacity 0.5s ease;
}

.v-enter-from,
.v-leave-to {
  opacity: 0;
}

.shorter {
  display: block;
  box-sizing: border-box;
  position: relative;
  padding: 0 1.5rem;
  scroll-margin: 5rem;
}
.shorter-form {
  display: grid;
  grid-template-columns: 1fr auto;
  column-gap: 1rem;

  background-color: #3a3054;
  background-image: url(../assets/images/bg-shorten-desktop.svg);
  background-repeat: no-repeat;
  background-size: cover;
  background-position: top right;
  padding: 3rem 4rem;
  border-radius: 10px;

  width: 97%;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}

.shorter-form--input {
  width: 100%;
  padding: 1rem;
  border-radius: 10px;
  flex: 1;
  font-size: 1.1rem;
  border: none;
}
.shorter-form--input:focus {
  outline-color: #2bd0d0;
  border: none;
}
.shorter-form--submit {
  padding: 1rem 2rem;
  background-color: #2bd0d0;
  border-radius: 10px;
  border: none;
  color: #fff;
  font-size: 1.1rem;
  font-weight: 700;
}

.shorter-form--input.error {
  border: 3px solid #F46363;
  outline: none;
}
.shorter-form--input.error::placeholder {
  color: #F46363;
}

.error-msg {
  color: #F46363;
  font-style: italic;
}

@media screen and (max-width: 768px) {
  .shorter-form {
    background-image: url(../assets/images/bg-shorten-mobile.svg);
    background-size: contain;
    width: 90%;
    grid-template-columns: 1fr;
    row-gap: 1rem;
    padding: 1rem;
  }
}
</style>
