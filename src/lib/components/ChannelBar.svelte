<script>
    import Category from "./Category.svelte"
    import Channel from "./Channel.svelte";
</script>

<div class="flex flex-col bg-dark2 w-60 h-screen justify-between">

    <div>
        <div class="flex h-14 w-full border-b-2 shadow-lg border-dark1 text-white items-center justify-between font-mono font-bold hover:bg-dark4 cursor-pointer">
            <div class="m-3">
                <span>HERBE MALVEILLANTE</span>
                <span class="font-black text-2xl">⌵</span>
            </div>
        </div>
        <Category name="📌 INFO">
            <Channel name="roles" type="text"/>
            <Channel name="info" type="text"/>
        </Category>
        <Category name="🗣 GENERAL">
            <Channel name="🇫🇷 french" type="text"/>
            <Channel name="🇬🇧 english" type="text"/>
            <Channel name="📷 media" type="text"/>
            <Channel name="🔊 vocal" type="vocal"/>
            <Channel name="🎶 music" type="vocal"/>
        </Category>
        <Category name="💻 development">
            <Channel name="📦 packages" type="text"/>
            <Channel name="html-css" type="text"/>
            <Channel name="javascript" type="text"/>
            <Channel name="python" type="text"/>
        </Category>
    </div>
    <div class="flex h-auto w-full bg-dark1_5 text-white">
        <div class="m-3">
            <span>HerbeMalveillante</span>
        </div>
    </div>
    
    
</div>
