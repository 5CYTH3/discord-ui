<script>
    import Channel from "./Channel.svelte"

    export let name;
    export let channels;
    let open = true;

    function toggleClick() {
        open = !open;
    }

</script>


<div class="text-darkgray font-bold">
    <span class="flex items-center m-3 hover:text-white">
        {#if open}
        <svg class="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" /></svg>
        {:else}
        <svg class="w-4 h-4 mr-1 -rotate-90" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" /></svg>
        {/if}
        <span class="w-full"on:click={toggleClick}>
            {name}
        </span>
    </span>
    <div class = "flex flex-col">
        {#if open}
            {#each channels as channel}
                <Channel name={channel}/>
            {/each}
        {/if}
    </div>
</div>