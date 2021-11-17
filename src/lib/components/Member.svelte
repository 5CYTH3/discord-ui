<script>
    export let avatar="https://discordapp.com/assets/322c936a8c8be1b803cd94861bdfa868.png";
    export let activity = "👍 Being Cool";
    export let color = "white";
</script>



<main class="flex items-center w-auto hover:bg-dark4 p-2 m-1 rounded-md ml-2 mr-2">
    <img class="w-10 h-10 rounded-full ml-2 mr-4" src={avatar} alt="avatar"/>
    <div class="flex flex-col">
        {#if color == "blue"}
            <div class="text-blue">
                <slot></slot>
            </div>
        {:else if color == "green"}
            <div class="text-green">
                <slot></slot>
            </div>
        {:else}
            <div class="text-white">
                <slot></slot>
            </div>
        {/if}
        <span class="text-xs text-lightgray font-bold">{activity}</span>
    </div>
        
</main>
