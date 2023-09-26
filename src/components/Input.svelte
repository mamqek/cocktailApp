<script>
    import { onMount } from "svelte";

    export let name; 
    export let type;

    let label;

    onMount(() => {
        label.innerHTML = label.innerText.split('').map((letters, i) => `<span style="transition-delay: ${i * 50}ms" >${letters}</span>`).join('');
    })
</script>

<div class="inputBox">
    <input type="{type}" id="{name}" name="{name}" required>
    <label bind:this={label} for="{name}">{name}</label>
</div>


<style>

    :root{
        --clr: antiquewhite;
    }

    .inputBox{
        position: relative;
        width: 300px;
        margin-bottom: 40px;
    }

    .inputBox input{
        position: relative;
        width: 100%;
        padding: 10px 0;
        border: none;
        outline: none;
        background: transparent;
        border-bottom: 2px solid #999;
        color: #fff;
        font-size: 1em;
        text-transform: uppercase;
        letter-spacing: 0.15em;
    }

    .inputBox input:focus,
    .inputBox input:valid{
        border-bottom: 2px solid var(--clr);
    }

    .inputBox label{
        position: absolute;
        left: 0;
        padding: 10px 0;
        pointer-events: none;
        color: #999;
        text-transform: uppercase;
    }

    .inputBox label {
        letter-spacing: 0.05em;
        transition: 0.2s ease-in-out;
    }

    .inputBox input:focus ~ label,
    .inputBox input:valid ~ label{
        color: var(--clr);
        letter-spacing: 0.2em;
        transform: translateY(-25px);
    }
</style>