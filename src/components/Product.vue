<template>
    
    <div class="flex justify-center items-center selection:bg-[#df7a97] selection:text-white">
        <!-- Introduction -->
        <div class="flex flex-col justify-center items-center mt-10 " v-for="d in details" :key="d.id" v-show="id == d.id">
            <div class="md:flex md:flex-row flex flex-col gap-x-4 md:ml-72">
                <div class="mx-auto md:mx-0 md:w-96 w-56 order-2 md:order-none p-2 border-2 border-dashed border-pink-300 rounded-2xl">
                    <img class="rounded" :src="d.url">
                </div>
                <div class="flex flex-col text-center md:text-left gap-y-2 font-[Mulish]">
                    <h2 class="text-4xl font-black text-[#12265a] font-[Nunito]">{{ d.title }}</h2>
                    <span class="text-2xl font-bold text-[#45b3df]">{{ d.price }}</span>
                    <span class="text-xl font-bold text-[#12265a]">Category: <span class="text-base font-medium text-gray-500">Book</span></span>
                    <p class="md:max-w-3xl max-w-xs text-left text-md leading-7 text-gray-500 mb-4 md:mb-0 px-2 md:p-0">Sophie was always ponders big questions, like Why is the sky blue? Why are raindrops wet? What are stars made of? But when Sophie starts school, there's a wobbly feeling in her tummy and she can't help popping back into her shell. She is left with one big question: Why am I so shy? When Sophie meets Stanley, she realizes that she's not the only one who feels shy. Can she gain the confidence to help a new friend? A heart warming tale about a sensitive snail who overcomes her shyness with a little help from her new friends.</p>
                </div>
            </div>

            <!-- Including  -->
            <div class="md:flex md:flex-row flex flex-col gap-x-6 mt-10 cursor-pointer ml-12 md:ml-52 mb-5 md:mb-32">
                <span class="md:ml-3 font-semibold text-xl text-[#12265a]">Including :</span>
                <div class="relative right-6 flex mt-10 flex-col items-center px-3 py-2 border-2 border-dashed border-pink-300 rounded-2xl bg-pink-50 shadow-md hover:bg-pink-100 hover:border-solid hover:scale-105 hover:shadow-2xl duration-200" v-for="contain in containing" :key="contain.id">
                    <img class="w-36 my-1" :src="contain.url">
                    <span class="text-md font-bold text-gray-500 py-1 font-[Mulish]">{{ contain.title }}</span>
                </div>
            </div>
        </div>
    </div>

</template>

<script>
    export default {
        props: {id: String, title: String},
        data() {
            return {
                details: [
                    {url: './../../public/images/ger_01.jpg', title: 'Die Bremer Stadtmusikanten', price: 'Free', id: 1},
                    {url: './../../public/images/Sophies_Shell_[0].jpg', title: 'Sophies Shell', price: 'Free', id: 2},
                    {url: './../../public/images/Pooka_&_Bunni_[0].jpg', title: 'Pooka & Bunni', price: 'Free', id: 3},
                    {url: './../../public/images/How_Can_I_Wait_[0].jpg', title: 'How Can I Wait', price: 'Free', id: 4},
                    {url: './../../public/images/Giraffe_Asks_For_Help_[0].jpg', title: 'Giraffe Asks For Help', price: 'Free', id: 5},
                    {url: './../../public/images/fantas....jpg', title: 'Fantastic You', price: 'Free', id: 6},
                    {url: './../../public/images/A_Terrible_Thing_Happened_[0].jpg', title: 'A Terrible Thing Happened', price: 'Free', id: 7},
                    {url: './../../public/images/A_Box_of_Butterfiles_[1].jpg', title: 'A Box of Butterfiles', price: 'Free', id: 8},
                ],
                containing: [
                    {url: './../../public/images/read-other.png', title: 'Digital Book', id: 1},
                    {url: './../../public/images/rubik.png', title: 'Games', id: 2},
                    {url: './../../public/images/youtube.png', title: 'Video', id: 3},
                    {url: './../../public/images/ar-other.png', title: 'AR and VR', id: 4},
                    {url: './../../public/images/audio-waves.png', title: 'Podcast', id: 5},
                ]
            }
        }
    }
</script>