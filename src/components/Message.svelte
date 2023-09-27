<script>
    import { onMount } from 'svelte';
    import { fade, blur, fly, slide, scale, draw, crossfade } from 'svelte/transition';


    /** @type {string} */
    export let message;

    /** @type {number} */
    export let timeout;
    

    $: {
        if (message && timeout) {
            setTimeout(() => {
            message = ""
            }, timeout*1000); // Message will disappear after 3 seconds
        }
    }
</script>

{#if message} 
    <p class="response" transition:slide={{ duration: 500 }}> {message} </p> 
{/if}

<style>
    .response {
        font-family: 'Bebas Neue', sans-serif;

        color: var(--light-text-clr);
        display: flex;
        justify-content: center;
        font-weight: 600;
        margin-top: 30px;
    }
</style>