<script>
    export let author = "HerbeMalveillante";
    export let profilepic = "https://discordapp.com/assets/322c936a8c8be1b803cd94861bdfa868.png";
    export let date = "Yersteday at 16:34";
</script>


<main class="flex w-full hover:bg-dark2 group mb-2 mt-2 items-center">
    <img src={profilepic} alt="profile pic" class="w-12 h-12 rounded-full mr-5 ml-5 mt-2 mb-2">
    <div class="flex flex-col">
        <div class="flex items-end">
            <span class="mr-2 text-white">{author}</span>
            <span class="text-darkgray text-sm">{date}</span>
        </div>
        <slot></slot>
    </div>
</main>