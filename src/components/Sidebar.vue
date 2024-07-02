<template>

    <!-- user -->
    <div class="absolute top-5 right-5 md:relative flex justify-end items-center mr-5 cursor-pointer">
        <span class="pr-5 text-gray-500 text-sm font-bold">User</span>
        <div class="fa fa-user-o text-2xl text-white bg-pink-300 p-1 text-center md:w-11 md:h-11 w-10 h-10 rounded-full"></div>
    <div class="absolute md:-mr-[.47rem] -mr-[.33rem]  border-2 border-dashed border-pink-300 md:p-7 p-6 rounded-full hover:animate-spin-slow hover:rotate-180"></div>
    </div>

    <!-- button responsive -->
    <div class="relative m-5 md:hidden" v-show="showBtnTune" @click="showSidebar">
        <span class="material-symbols-outlined text-pink-300 p-2 border-2 border-dashed border-pink-300 rounded-xl cursor-pointer hover:border-solid hover:border-pink-300 hover:bg-pink-100 hover:shadow-lg hover:scale-105 duration-200">tune</span>
    </div>
    
    <div class="absolute top-0 left-0 hidden md:block z-40 bg-white md:fixed font-[Nunito] md:w-72 w-3/4 h-[100rem] border-r-2 border-dashed border-pink-200" v-show="openSidebar" :style="{display: displaySidebar, animationDuration: '0.2s'}" :class="{animate__fadeInLeftBig: anima}">
        <!-- title & image & close rseponsive -->
        <div class="md:pt-5 pt-1 flex flex-col gap-2 items-center">
            <!-- close button responsive -->
            <div class="md:hidden flex justify-end w-full mr-5 " @click="closeSidebar">
                <button class="px-1 py-2 border-2 border-dashed border-pink-300 rounded-xl text-sm text-gray-600 hover:border-solid hover:border-pink-300 hover:bg-pink-100 hover:shadow-lg hover:scale-105 duration-200">Close</button>
            </div>
            <span class="text-[40px] text-center font-black text-[#12265a] cursor-pointer">Kids Room</span>
            <router-link class="mb-4" to="/">
                <img class="w-32 h-32 mx-auto" src="./../../public/images/dinosaur.png" alt="dinosaur">
            </router-link>
        </div>
        <!-- options -->
            <div class="flex items-center mt-5 gap-x-2 pl-1 border-2 border-dashed border-pink-300 mx-2 py-2 rounded-2xl text-[#45b3df] cursor-pointer duration-200 hover:text-white hover:bg-pink-300" v-for="x in options" @click="sidebarOptions(x.id)">
                <i class="pl-2 text-2xl" :class="x.icon"></i>
                <span class="font-black">{{ x.text }}</span>
            </div>
    </div>

</template>

<script>
    export default {
        data() {
            return {
                options: [
                {icon: 'fa fa-home', text: 'Home', id: 1},
                {icon: 'fa fa-book', text: 'My Books', id: 2},
                {icon: 'fa fa-user', text: 'Profile', id: 3},
                {icon: 'fa fa-credit-card', text: 'Price', id: 4},
                {icon: 'fa fa-shopping-bag', text: 'New Order', id: 5},
                {icon: 'fa fa-sign-out', text: 'Exit', id: 6}
                ],
                openSidebar: true,
                showBtnTune: true,
                displaySidebar: 'none',
                anima: false
            }
        },
        methods: {
            closeSidebar() {
                this.openSidebar = false
                this.anima = false
            },
            showSidebar() {
                this.openSidebar = true
                this.displaySidebar = 'block'
                this.anima = true
            },
            sidebarOptions(optionId) {
                if (optionId == 1) {
                    this.$router.push({ name: 'home', params: { id: optionId } })
                } 
                else if (optionId == 4) {
                    this.$router.push({ name: 'credit', params: { id: optionId } })
                } else if (optionId == 3) {
                    this.$router.push({ name: 'profile', params: { id: optionId } })
                }
            }
        }
    }
</script>