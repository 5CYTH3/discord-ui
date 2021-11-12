<script>
    import Search from './Search.svelte'
</script>

<main class="flex flex-1 h-screen bg-dark3 text-white">
    <div class="flex h-14 w-full shadow border-b border-black items-center justify-between">
        <div class="flex border-red border-2 text-lg font-medium ml-6 items-center">
            <svg class="w-6 h-6 mr-1.5 text-darkgray text-xl font-black" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M9.243 3.03a1 1 0 01.727 1.213L9.53 6h2.94l.56-2.243a1 1 0 111.94.486L14.53 6H17a1 1 0 110 2h-2.97l-1 4H15a1 1 0 110 2h-2.47l-.56 2.242a1 1 0 11-1.94-.485L10.47 14H7.53l-.56 2.242a1 1 0 11-1.94-.485L5.47 14H3a1 1 0 110-2h2.97l1-4H5a1 1 0 110-2h2.47l.56-2.243a1 1 0 011.213-.727zM9.03 8l-1 4h2.938l1-4H9.031z" clipRule="evenodd" /></svg>
            <span>Medias</span>
        </div>
        <div class="mr-6">
            <div>
                <!-- threads icon -->
                <!-- notifications icons -->
                <!-- pinned icon -->
                <!-- member list icon -->
                <Search/>
                <!-- inbox icon -->
                <!-- help icon -->
            </div>
        </div>
    </div>
</main>