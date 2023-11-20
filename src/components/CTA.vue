<script setup lang="ts">
    import Button from '@/components/ButtonVariants.vue'
</script>
<template>
    <section class="cta">
        <div class="container cta-content animate">
            <h3>Boost your links today</h3>
            <Button type="cta" link="#shorten-it" variant="primary"> Get Started </Button>
        </div>
    </section>
</template>

<style>
    .cta {
        background-image: url(../assets/images/bg-boost-desktop.svg);
        background-color: #3A3054;
        background-repeat: no-repeat;
        background-position: center;
        background-size: cover;
    }

    .cta-content {
        display: grid;
        place-items: center;
        padding: 4rem 0;
    }

    .cta-content h3 {
        color: white;
        margin-bottom: 1rem;
        font-size: 2.5rem;
        font-weight: 600;
        text-align: center;
    }

    .cta-content a {
        padding: 1rem 2rem;
        font-size: 1.2rem;
    }

    @media screen and (max-width: 768px) {
        .cta {
            background-image: url(../assets/images/bg-boost-mobile.svg);
        }
    }
</style>