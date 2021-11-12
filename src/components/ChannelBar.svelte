<script>
    import Category from "./Category.svelte"
</script>

<div class="flex flex-col bg-dark2 w-60 h-screen justify-between">

    <div>
        <div class="flex h-14 w-full border-b-2 shadow-lg border-dark1 text-white items-center justify-between font-mono font-bold hover:bg-dark4 cursor-pointer">
            <div class="m-3">
                <span>HERBE MALVEILLANTE</span>
                <span class="font-black text-2xl">⌵</span>
            </div>
        </div>


        <Category name="📌 INFO" channels={[{name:"roles", type:"text"},{name:"info", type:"text"}]}/>
        <Category name="🗣 GENERAL" channels={[{name:"🇫🇷 french", type:"text"},
                                            {name:"🇬🇧 english", type:"text"},
                                            {name:"📷 media", type:"text"},
                                            {name:"🔊 vocal", type:"vocal"},
                                            {name:"🎶 music", type:"vocal"}]}/>
        <Category name="💻 development" channels={[
            {name:"📦 packages", type:"text"},
            {name:"html-css", type:"text"},
            {name:"javascript", type:"text"},
            {name:"python", type:"text"}
        ]}/>

    </div>

    <div class="flex h-auto w-full bg-dark1_5">
        <div class="m-3">
            <span>HERBE MALVEILLANTE</span>
            <span class="font-black text-2xl">⌵</span>
        </div>
    </div>
    
    
</div>
