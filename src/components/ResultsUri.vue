<script setup lang="ts">
    import Button from '@/components/ButtonVariants.vue'
    import trashIcon from '@/assets/images/trash-icon.svg?raw'
    import { ref } from "vue";
    
    const emit = defineEmits(['remove', 'paginate'])
    const stepQ = ref(0) 

    interface UriObject {
        newUrl: string;
        oldUrl: string;
        favicon: string;
        createdAt: Date;
    }

    // Props
    const props = defineProps<{
        uris: UriObject[],
        pagination: Boolean,
        paginatedBy: number,
        step: number
    }>()

    // Methods
    const copyUrl = (url: string) => {
        navigator.clipboard.writeText(url)

        const buttonEvent = event as MouseEvent;
        const copyBtn = buttonEvent.target as HTMLElement

        copyBtn?.classList.add('copied')
        copyBtn.innerHTML = "Copied!"

        setTimeout(() => {
            copyBtn?.classList.remove('copied')
            copyBtn.innerHTML = 'Copy'
        }, 2000)
    }

    const removeUrl = (url: any) => {
        const confirm = window.confirm(
            "Are you sure to delete this url? \nThis action can be reverted"
        )

        if (confirm) {
            emit("remove", url);
        } else {
            return;
        }
    }

    stepQ.value = props.step
    const loadMore = () => {
        console.log(props.paginatedBy)
        stepQ.value = stepQ.value + props.paginatedBy
        emit("paginate", stepQ.value);
    }

</script>
<template>
    <section class="results">
        <TransitionGroup class="container results-list" name="fade" tag="ul" >
            <li class="item" v-for="uri in uris" :key="uri">
                <p class="old-url">
                    <img :src="uri.favicon" :alt="uri.oldUrl">
                    {{ uri.oldUrl }}
                </p>

                <div class="new-url">
                    <span><b>{{ uri.newUrl }}</b></span>
                    <Button id="copy-url" type="button" variant="primary" @click="copyUrl(uri.newUrl)"> Copy </Button>

                    <button id="remove-btn" type="button" @click="removeUrl(uri)" v-html="trashIcon"></button>
                </div>
            </li>
        </TransitionGroup>

        <div class="container view-more">
            <Button 
                v-show="pagination"
                id="view-more" 
                type="button" 
                variant="secondary"
                @click="loadMore"
            >
                View More
            </Button>
        </div>
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
    position: relative;
}

.results-list .item {
    background-color: white;
    
    display: grid;
    max-width: 100%;
    border-radius: 5px;
    padding: 1rem;
    box-sizing: border-box;
}

.item .old-url {
    display: grid;
    grid-template-columns: auto 1fr;
    column-gap: 1rem;
    align-items: center;
    font-size: 1rem;
    letter-spacing: 0.15px;
    font-weight: 500;
    color: #34313D;
    word-break: break-all;
    padding-bottom: 1rem;
    width: 95%;
}

.item .old-url img {
    width: 28px;
}

.item .new-url {
    display: grid;
    grid-template-columns: 1fr auto;
    grid-template-rows: 1fr 1fr;
    column-gap: 1rem;
    align-items: center;
    color: #2BD0D0;
    border-top: 1px solid #eff1f7;
    word-break: break-all;
    font-size: 1.3rem;
    padding: 1rem 0;
}

.item .new-url span {
    grid-column-start: 1;
    grid-column-end: 3;
}

.item .new-url button {
    border-radius: 5px;
    padding: 0.8rem 0;
    font-size: 1rem;
    width: 100%;
    margin-top: 1rem;
}

#copy-url.copied {
    background-color: #3A3054;
}

#remove-btn {
    padding: 0.2rem;
    background-color: transparent;
    border: none;
    cursor: pointer;
}

#remove-btn:hover svg path {
    fill: #F36262;
}

.view-more {
    display: flex;
    padding: 1rem 0;
}
#view-more {
    margin: auto;
    padding: 0.8rem 1.2rem;
    border-radius: 5px;
}


@media screen and (min-width: 768px) {
    .item .new-url {
        grid-template-columns: 1fr auto auto;
        grid-template-rows: 1fr;
        font-size: 1.2rem;
        border: none;
    }

    .item .new-url span {
        grid-column: 1/2;
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
        grid-template-columns: 1fr auto auto;
        align-items: center;
    }

    #copy-url {
        width: 140px;
    }

    .item .old-url {
        width: 80%;
        max-width: 80%;
        font-size: 1.2rem;
        padding: 0;
    }

    .item .new-url {
        column-gap: 1.5rem;
        font-size: 1.2rem;
        padding: 0;
    }

}

/* 1. declare transition */
.fade-move,
.fade-enter-active,
.fade-leave-active {
  transition: all 0.5s cubic-bezier(0.55, 0, 0.1, 1);
}

/* 2. declare enter from and leave to state */
.fade-enter-from,
.fade-leave-to {
  opacity: 0;
  transform: scaleY(0.01) translate(30px, 0);
}

/* 3. ensure leaving items are taken out of layout flow so that moving
      animations can be calculated correctly. */
.fade-leave-active {
  position: absolute;
}
</style>