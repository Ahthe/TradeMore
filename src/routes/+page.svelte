<!-- <h1>Welcome to SvelteKit</h1>
<p>Visit <a href="https://kit.svelte.dev">kit.svelte.dev</a> to read the documentation</p> -->
<script context="module">

    export const prerender = true

</script>
<script>
    import CheckoutOtherProjects from '../components/CheckoutOtherProjects.svelte'
    import StockGraphView from '../components/StockGraphView.svelte'
    import { goto } from '$app/navigation'   
    import { PaperTradingGame } from '../logic/game'

    const exampleGame = PaperTradingGame.newGame('')
    exampleGame.priceData[exampleGame.priceData.length - 1] = exampleGame.priceData[exampleGame.priceData.length - 2] + 1
</script>

<style>
    button {
        touch-action: manipulation;
    }
</style>
<main class='p-4 flex flex-col '>

    <h1 class='mt-4 mb-1 self-center'> Stock Trading Game</h1>
    <h4 class='mb-8 self-center text-sm'>(Duration: 45s)</h4>
    <button class='reg my-4 self-center w-40 animate-throb' on:click={()=>goto('/game')}>Start Game</button>

    <span class='mb-2 font-semibold text-gray-500'>How to play</span>
    <ol class='mb-4 ml-2 list-decimal list-inside'>
        <li>
            You are given <b>$100</b> dollars and a fake, simulated
            stock.
        </li>
        <li>
            Make as much money as you can in <b>45 seconds</b>.
        </li>
    </ol>
    <span class='italic mb-2 font-semibold text-gray-500'>Example:</span>
    <div class="border-2 rounded border-black p-4">
        <div class="border-2 rounded border-black p-4">
            <StockGraphView priceData={exampleGame.priceData} holdsPosition={true} class=""/>
        </div>
    </div>
    <CheckoutOtherProjects class='mt-12'/>
</main>