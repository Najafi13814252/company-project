<template>

    <div class="fadeIn md:ml-80 overflow-hidden font-[Nunito] selection:bg-[#df7a97] selection:text-white">
        <!-- cards & searchBox -->
        <main class="mx-auto max-w-5xl py-5">
            <!-- searchBox -->
            <div class="md:ml-10 ml-6 w-full mb-7 flex justify-center md:justify-stretch items-center rounded-full font-[Mulish]">
                <input class="bg-[#fcf9f4] rounded-full px-8 py-3 placeholder:text-sm placeholder:text-gray-500" type="text" placeholder="Search products...">
                <div class="bg-white relative p-1 right-12 rounded-full">
                    <button class="fa fa-search text-xl w-10 h-10 font-bold bg-amber-400 text-white rounded-full"></button>
                </div>
            </div>

            <!-- cards -->
            <div class="flex flex-wrap justify-center items-center gap-y-12 gap-x-4 mt-2 mb-5">
                <div class="flex flex-col text-center w-fit items-center border-2 border-dashed border-pink-300 rounded-3xl pt-5 hover:scale-105 duration-200 cursor-pointer" v-for="(card, index) in cards" :key="index" v-show="index < visibleItems" @click="showDetails(card.id)" >
                    <img class="m-2 h-72 w-72 rounded" :src="card.url" alt="images">
                    <span class="text-[#12265a] font-black text-xl mt-5 cursor-pointer">{{ card.title }}</span>
                    <span class="text-[#45b3df] font-black text-2xl mb-10 cursor-pointer">{{ card.price }}</span>
                    <div class="-mb-7">
                        <button class="bg-pink-300 text-white font-bold text-xl rounded-full px-16 py-3 hover:bg-orange-400 duration-200">Add to cart</button>
                    </div>
                </div>
            </div>
        </main>
    </div>

</template>

<script>
    export default {
        data() {
            return {
                cards: [
                    {url: './../../public/images/ger_01.jpg', title: 'Die Bremer Stadtmusikanten', price: '$5', id: 1},
                    {url: './../../public/images/Sophies_Shell_[0].jpg', title: 'Sophies Shell', price: '$5', id: 2},
                    {url: './../../public/images/Pooka_&_Bunni_[0].jpg', title: 'Pooka & Bunni', price: '$5', id: 3},
                    {url: './../../public/images/How_Can_I_Wait_[0].jpg', title: 'How Can I Wait', price: '$5', id: 4},
                    {url: './../../public/images/Giraffe_Asks_For_Help_[0].jpg', title: 'Giraffe Asks For Help', price: '$5', id: 5},
                    {url: './../../public/images/fantas....jpg', title: 'Fantastic You', price: '$5', id: 6},
                    {url: './../../public/images/A_Terrible_Thing_Happened_[0].jpg', title: 'A Terrible Thing Happened', price: '$5', id: 7},
                    {url: './../../public/images/A_Box_of_Butterfiles_[1].jpg', title: 'A Box of Butterfiles', price: '$5', id: 8},
                    {url: './../../public/images/A_Box_of_Butterfiles_[1].jpg', title: 'A Box of Butterfiles', price: 'free', id: 9},
                    {url: './../../public/images/A_Box_of_Butterfiles_[1].jpg', title: 'A Box of Butterfiles', price: 'free', id: 10},
                    {url: './../../public/images/A_Box_of_Butterfiles_[1].jpg', title: 'A Box of Butterfiles', price: 'free', id: 11},
                    {url: './../../public/images/A_Box_of_Butterfiles_[1].jpg', title: 'A Box of Butterfiles', price: 'free', id: 12},
                    // Add to cards
                ],
                visibleItems: 8
            }
        },
        mounted() {
            window.addEventListener('scroll', this.handleScroll)
        },
        methods: {
            handleScroll() {
                const scrollPosition = window.scrollY + window.innerHeight
                if (scrollPosition >= document.body.clientHeight) {
                    this.visibleItems += 0
                }
            },
            showDetails(cardId) {
                this.$router.push({ name: 'details', params: { id: cardId } })
            }
        }
    }

</script>