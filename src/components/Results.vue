<script setup>
import Button from '@/components/Button.vue'
</script>
<template>
    <section class="results">
        <ul class="container results-list">
            <li class="item">
                <p class="old-url">https://www.frontendmentor.io</p>

                <div class="new-url">
                    <span><b>https://rel.ink/k4lKyk</b></span>
                    <Button type="button" variant="primary"> Copy </Button>
                </div>
            </li>


            <li class="item">
                <p class="old-url">https://www.frontendmentor.io</p>

                <div class="new-url">
                    <span><b>https://rel.ink/k4lKyk</b></span>
                    <Button type="button" variant="primary"> Copy </Button>
                </div>
            </li>

            <li class="item">
                <p class="old-url">https://www.frontendmentor.io</p>

                <div class="new-url">
                    <span><b>https://rel.ink/k4lKyk</b></span>
                    <Button type="button" variant="primary"> Copy </Button>
                </div>
            </li>
        </ul>

    </section>
</template>

<style>
.results {
    padding-top: 7rem;
    background-color: #eff1f7;
}

.results-list {
    list-style-type: none;
    padding: 0;
    display: grid;
    row-gap: 1.5rem;
    width: 90%;
}

.results-list .item {
    background-color: white;
    
    display: grid;
    max-width: 100%;
    border-radius: 5px;
}

.item .old-url {
    padding: 1rem;

    font-size: 1rem;
    letter-spacing: 0.15px;
    font-weight: 500;
    color: #34313D;
}

.item .new-url {
    display: grid;
    grid-template-columns: 1fr;
    align-items: center;
    color: #2BD0D0;
    border-top: 1px solid #eff1f7;
    padding: 1rem;
}

.item .new-url button {
    border-radius: 5px;
    padding: 0.8rem 0;
    font-size: 1rem;
    width: 100%;
    margin-top: 1rem;
}

@media screen and (min-width: 768px) {
    .item .new-url {
        grid-template-columns: 1fr auto;
        font-size: 1.2rem;
    }

    .item .new-url button {
        margin-top: 0;
        padding: 0.8rem 2rem;
        font-size: 1rem;
        width: fit-content;
    }
}

@media screen and (min-width: 1024px) {
    .results-list .item {
        grid-template-columns: 1fr auto;
        align-items: center;
    }

    .item .old-url {
        font-size: 1.2rem;
    }

    .item .new-url {
        column-gap: 1.5rem;
        font-size: 1.2rem;
    }

}
</style>