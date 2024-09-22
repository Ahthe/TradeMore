<script>
    import CaretDown from 'carbon-icons-svelte/lib/CaretDown.svelte'
    import CaretUp from "carbon-icons-svelte/lib/CaretUp.svelte";
    export let delta, xs=false
    let cl
    export {cl as class}
</script>
<div class="flex items-center font-semibold {cl}" class:text-xs={xs}>
    {#if delta === 0}
        <CaretUp class='text-gray-500 text-xl'/>
        <span class='tabular-nums text-gray-500 ' >({delta.toFixed(2)}%)</span>
    {:else if delta >= 0}
        <CaretUp class='text-green-500'/>
        <span class='tabular-nums text-green-500 ' >({delta.toFixed(2)}%)</span>
    {:else}
        <CaretDown class=' text-red-500'/>
        <span class='tabular-nums text-red-500 '>({delta.toFixed(2)}%)</span>
    {/if}
</div>