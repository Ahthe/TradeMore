<script>
    import ChevronRightGlyph from 'carbon-icons-svelte/lib/ChevronRightGlyph'

    export let subPath = undefined

</script>

<nav class='items-center border-b border-gray-light flex flex-grow py-2 px-4 '>
    <a class='inline-flex items-center font-bold hover:underline active:underline'
       href='https://davjhan.com'>
        <svg class='inline-block mr-1' height='16' width='16'>
            <circle cx='8' cy='8' fill='#ffd803' r='6' stroke='black' stroke-width='2' />
        </svg>
        <span class='inline-block '>davjhan.com</span>
    </a>
    {#if subPath}
        <ChevronRightGlyph class='ml-2' />
        <a class='ml-2 text-gray-dark hover:underline active:underline' href='/'>{subPath}</a>
    {/if}
    <div class="flex-grow"></div>
</nav>