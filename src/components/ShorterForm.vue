<template>
  <section class="shorter">
    <form class="container shorter-form" @submit.prevent>
      <input
        class="shorter-form--input"
        type="text"
        name="url"
        id="url"
        placeholder="Shorten a link here..."
      />
      <input class="button vprimary shorter-form--submit" type="submit" value="Shorten It!" />
    </form>
  </section>
</template>

<style>
.shorter {
  position: relative;
}
.shorter-form {
  display: flex;
  gap: 1rem;

  background-color: #3a3054;
  background-image: url(../assets/images/bg-shorten-desktop.svg);
  background-repeat: no-repeat;
  background-size: cover;
  background-position: top right;
  padding: 3rem 4rem;
  width: 90%;
  border-radius: 10px;

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
    flex-direction: column;
    background-size: contain;
    padding: 2rem;
  }
}
</style>
