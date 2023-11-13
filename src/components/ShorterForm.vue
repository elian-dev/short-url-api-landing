<script setup>
  import { ref } from "vue";
  const url = ref("");

  const getCleanUri = async (longUrl) => {
    console.log(longUrl)
    const baseUrl = 'https://cleanuri.com/api/v1/shorten';

    var formdata = new FormData();
    formdata.append("url", longUrl);

    var requestOptions = {
      method: 'POST',
      body: formdata,
      headers: {
        'Access-Control-Allow-Origin': '*',
        'Accept': '*/*'
      },
      redirect: 'follow'
    };

    await fetch(baseUrl, requestOptions)
      .then(response => response.json())
      .then(data => console.log(data))
      .then(error => console.log(error))
    
  }
</script>
<template>
  <section class="shorter">
    <form class="container shorter-form" @submit.prevent="getCleanUri(url)">
      <input
        class="shorter-form--input"
        type="text"
        name="url"
        id="url"
        placeholder="Shorten a link here..."
        v-model="url"
      />
      <input class="button vprimary shorter-form--submit" type="submit" value="Shorten It!" />
    </form>
    <div>
      {{ url }}
    </div>
  </section>
</template>

<style>
.shorter {
  display: block;
  box-sizing: border-box;
  position: relative;
  padding: 0 1.5rem;
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
