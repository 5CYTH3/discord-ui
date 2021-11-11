<script>
    import Category from "./Category.svelte"
</script>

<div class="flex-col bg-dark2 w-60 h-screen">
    <div class="flex h-14 w-full border-b-2 shadow-lg border-dark1 text-white items-center justify-between font-mono font-bold hover:bg-dark4 cursor-pointer">
        <div class="m-3">
            <span>HERBE MALVEILLANTE</span>
            <span class="font-black text-2xl">⌵</span>
        </div>
    </div>


    <Category name="INFORMATION" channels={["rôles", "ressources"]}/>
</div>
