<template>
    
    <user v-show="showUserIcon"/>

    <div class="fadeIn md:overflow-hidden md:max-w-none font-[Mulish]">
        <div class="flex flex-col justify-center items-center overflow-hidden" v-show="showProfile">
            <!-- header -->
            <div class="md:mt-10 mt-2 md:ml-48 w-[60rem] md:w-full md:pl-48">
                <img class="h-80" src="./../../public/images/page_title_bg.png" alt="headerProfile">
                <div class="relative md:right-24 bottom-52 flex flex-col justify-center items-center">
                    <h1 class="text-5xl font-black text-[#12265a] font-[Nunito]">Profile</h1>
                    <ul class="flex items-center mt-2 gap-x-2">
                        <i class="fa fa-circle text-[6px] mt-1 text-cyan-500"></i>
                        <router-link to="/">
                            <li class="text-[#12265a] opacity-70 font-extrabold hover:opacity-100 duration-200 cursor-pointer">Home</li>
                        </router-link>
                        <i class="fa fa-circle text-[6px] mt-1 text-cyan-500"></i>
                        <li class="text-[#12265a] font-extrabold">Profile</li>
                    </ul>
                </div>
            </div>
            <div class="md:w-[800px] md:ml-48 flex flex-wrap md:block w-full p-2 md:p-0 relative bottom-16">
                <!-- Children Account -->
                <div class="flex flex-wrap md:justify-between justify-center items-center p-4 mb-8 border-2 border-dashed border-pink-300 rounded-2xl gap-4">
                    <router-link to="/profile/children">
                        <div class="flex bg-pink-400 py-1 px-4 gap-2 rounded-2xl shadow-lg hover:scale-105 hover:bg-orange-400 duration-200 hover:shadow-xl">
                            <div class="relative">
                                <div class="border-2 absolute left-0 top-0 border-dashed border-white rounded-full w-full h-full animate-spin-very-slow rotate-180"></div>
                                <img class="w-16 p-2" src="./../../public/images/children.png" alt="children">
                            </div>
                            <button class="font-bold text-white" >Children Account (<span>{{ localLength }}</span>)</button>
                        </div>
                    </router-link>
                    <div class="flex flex-wrap items-center gap-2 cursor-pointer"> 
                        <button class="py-5 px-4 bg-purple-400 text-white rounded-2xl font-bold shadow-lg hover:scale-105 hover:bg-blue-500 duration-200 hover:shadow-xl" @click="changeAccount">Change Account</button>
                        <button class="py-5 px-4 bg-cyan-400 text-white rounded-2xl font-bold shadow-lg hover:scale-105 hover:bg-cyan-500 duration-200 hover:shadow-xl" @click="changeRole">Change Role</button>
                    </div>
                </div>
                <!-- user changes -->
                <div class="md:flex md:flex-col flex flex-wrap w-full mb-8 md:gap-2 gap-5 p-4 bg-gray-100 border-2 border-dashed border-pink-300 rounded-2xl" v-for="box in profile" :key="box.id">
                    <h4 class="font-black text-4xl px-2 text-[#12265a] font-[Nunito]">{{ box.title }}</h4>
                    <div class="flex items-center py-2 px-4">
                        <label class="md:w-72 mr-2 font-bold text-gray-500">{{ box.label1 }}</label>
                        <input class="flex-1 md:w-96 w-full rounded-full py-3 px-4 border border-gray-200" :type="box.typeLabel1">
                    </div>
                    <div class="flex items-center py-2 px-4 rounded-2xl">
                        <label class="md:w-72 mr-2 font-bold text-gray-500">{{ box.label2 }}</label>
                        <input class="flex-1 md:w-96 w-full rounded-full py-3 px-4 border border-gray-200" :type="box.typeLabel2">
                    </div>
                    <button class="py-3 px-8 border-2 border-pink-300 w-fit mx-auto rounded-full text-pink-300 font-black hover:bg-pink-400 hover:text-white duration-200">{{ box.textBtn }}</button>
                </div>
            </div> 
        </div>  
        
        <!-- change accounts -->
        <div class="fadeIn w-fit bg-white flex justify-center flex-col absolute top-0 md:static md:h-screen mx-auto text-center font-[Nunito]" v-show="showAccount">
            <span class="md:absolute top-5 right-5 m-4 md:m-0 self-end border border-[#fa9db7] px-8 py-4 text-[#fa9db7] text-lg font-black rounded-full cursor-pointer duration-200 hover:bg-[#fa9db7] hover:text-white" @click="backProfile">Back</span>
            <div class="px-8 mt-20 md:px-0 md:mt-0">
                <span class="font-black text-4xl text-blue-500">Select your account</span>
                <span class="text-orange-400 flex justify-center mt-5 bg-white border border-dashed border-orange-300 px-6 py-3 rounded-2xl text-lg font-bold shadow-md font-[Mulish]" v-show="showEmptyAccount">You don't have another account.</span>
                <ul class="mt-8 flex flex-col gap-4">
                    <li class="flex items-center p-2 gap-4 border-2 border-dashed border-pink-300 rounded-2xl hover:scale-105 hover:bg-pink-100 duration-200 shadow-lg cursor-pointer" v-for="(acc, index) in accounts" :key="index">
                        <img class="w-20" :src="acc.image" alt="profile">
                        <span class="font-black text-xl text-gray-500">{{ acc.name }}</span>
                    </li>
                </ul>
            </div>
        </div>
    </div>

    <role class="fadeIn mx-auto h-screen w-full absolute top-0 pt-10 md:pt-0" v-show="showRole" @backProfile="backtoProfile"/>

</template>

<script>

    const LOCAL_LENGTH = localStorage.getItem('key')
    console.log(LOCAL_LENGTH);

    export default {
        data() {
            return {
                profile: [
                    {title: 'Profile', label1: 'Name', label2: 'Email', textBtn: 'Save', typeLabel1: 'text', typeLabel2: 'email', id: 1},
                    {title: 'Password', label1: 'Current Password', label2: 'New Password', textBtn: 'Change', typeLabel1: 'password', typeLabel2: 'password', id: 2}  
                ],
                localLength: LOCAL_LENGTH,
                accounts: "",
                showAccount: false,
                showProfile: true,
                showUserIcon: true,
                showRole: false,
                showEmptyAccount: false
            }
        },
        mounted() {
            this.accounts = JSON.parse(localStorage.getItem('todo-list'))
            if (this.accounts == "") {
                this.showEmptyAccount = true
            }
        },
        methods: {
            changeAccount() {
                this.showAccount = true
                this.showProfile = false
                this.showUserIcon = false
            },
            backProfile() {
                this.showAccount = false
                this.showProfile = true
                this.showUserIcon = true
            },
            changeRole() {
                this.showRole = true
                this.showProfile = false
                this.showUserIcon = false
            },
            backtoProfile() {
                this.showRole = false
                this.showProfile = true
                this.showUserIcon = true
            }
        }
    }
</script>