<script>

    import Channel from "./Channel.svelte"

    export let name;
    export let channels;
</script>


<details >
    <summary>{name}</summary>
    <div class="flex flex-col">
        {#each channels as channel}
            <Channel name={channel} />
        {/each}
    </div>
</details>