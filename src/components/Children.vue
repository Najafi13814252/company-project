<template>

    <div class="overflow-hidden md:max-w-none flex flex-col justify-center items-center font-[Mulish]" :class="{bgFilter: filter}">
        <!-- header -->
        <div class="md:mt-10 mt-2 md:ml-48 w-[80rem] md:w-full">
            <img class="h-80" src="./../../public/images/page_title_bg.png" alt="headerProfile">
            <div class="relative md:bottom-52 bottom-64 flex flex-col justify-center items-center">
                <h1 class="text-5xl max-w-72 md:max-w-none text-center font-black text-[#12265a] font-[Nunito]">Children accounts</h1>
                <ul class="flex items-center mt-2 gap-x-2">
                    <i class="fa fa-circle text-[6px] mt-1 text-cyan-500"></i>
                    <router-link to="/">
                        <li class="text-[#12265a] opacity-70 font-extrabold hover:opacity-100 duration-200 cursor-pointer">Home</li>
                    </router-link>
                    <i class="fa fa-circle text-[6px] mt-1 text-cyan-500"></i>
                    <router-link to="/profile">
                        <li class="text-[#12265a] opacity-70 font-extrabold hover:opacity-100 duration-200 cursor-pointer">Profile</li>
                    </router-link>
                    <i class="fa fa-circle text-[6px] mt-1 text-cyan-500"></i>
                    <li class="text-[#12265a] font-extrabold"> Children account</li>
                </ul>
            </div>
        </div>
        <!-- new account -->
        <div class="md:w-[800px] md:ml-48 flex flex-wrap w-full justify-center md:block relative md:bottom-16 bottom-36 font-[Nunito]">
            <div class="inline-flex items-center gap-2 bg-pink-400 py-1 px-4 mx-1 md:mx-0 rounded-2xl cursor-pointer hover:scale-105 hover:bg-orange-400 duration-200" @click="openForm">
                <img class="w-14 p-1" src="./../../public/images/add-group.png" alt="new-account">
                <span class="font-black text-white">Create a new account</span>
            </div>
            <div class="p-4 border-2 border-dashed border-pink-300 rounded-2xl gap-4 mt-6 mx-1 md:mx-0">
                <div class="p-2 text-xl font-black text-center bg-gray-100 text-gray-500 rounded-2xl" v-show="showEmptyForm">No account has been created yet</div>
                <ul class="flex flex-col gap-y-4">
                    <li class="flex gap-x-20 md:gap-5 items-center justify-between bg-gradient-to-br from-sky-400 to-sky-300 py-2 px-4 drop-shadow-lg rounded-2xl" v-for="(todo, index) in todos" :key="index">
                        <div class="flex gap-x-4 items-center">
                            <img class="w-16" :src="todo.image" alt="image-of-list">
                            <span class="font-black text-lg text-gray-700">{{ todo.name }}</span>
                        </div>
                        <div class="flex items-center gap-x-2 cursor-pointer">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-10 h-10 p-1 text-white bg-gray-400 rounded-lg hover:scale-110 hover:bg-gray-500 duration-200" @click.prevent="editAccount">
                                <path stroke-linecap="round" stroke-linejoin="round" d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L10.582 16.07a4.5 4.5 0 01-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 011.13-1.897l8.932-8.931zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0115.75 21H5.25A2.25 2.25 0 013 18.75V8.25A2.25 2.25 0 015.25 6H10"></path></svg>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-10 h-10 p-1 text-white bg-orange-400 rounded-lg hover:scale-110 hover:bg-orange-500 duration-200" @click="deleteAccount">
                                <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12"></path></svg>
                        </div>
                    </li>
                </ul>
            </div>
        </div>
    </div>

    <account class="absolute md:left-1/3 top-28" v-show="showForm" @close-form="closeForm" @add="addAccount" :edit="edit" @edit="editAcc"/>

    <delete class="absolute md:left-[37%] top-48" v-show="showDelete" @cancel="cancel" @remove-todo="removeTodo"/>

</template>

<script>

    const STORAGE_KEY = 'todo-list'

    export default {
        data() {
            return {
                showForm: false,
                filter: false,
                showEmptyForm: false,
                showDelete: false,
                name: "",
                imageOfList: "",
                id: 0,
                todos: [], 
                edit: 'Add'
            }
        },
        created() {
            this.todos = JSON.parse(localStorage.getItem(STORAGE_KEY) || '[]')
            localStorage.key = this.todos.length
            if (this.todos == "") {
                this.showEmptyForm = true
            }
        },
        methods: {
            openForm() {
                this.showForm = true
                this.filter = true
                this.edit = 'Add'
            },
            closeForm() {
                this.showForm = false
                this.filter = false
            },
            addAccount(account) {
                this.name = account.name
                this.imageOfList = account.image.url
                this.id = account.id
                this.showForm = false
                this.filter = false
                this.showEmptyForm = false
                if (this.name !== "" && this.edit == 'Add') {
                    this.todos.push({name:this.name, image:this.imageOfList, id:this.id})
                }
                if (this.edit == 'Edit') {
                    this.todos[this.id - 1].name = this.name
                    this.todos[this.id - 1].image = this.imageOfList
                }
                localStorage.setItem(STORAGE_KEY, JSON.stringify(this.todos))
            },
            editAccount() {
                this.showForm = true
                this.filter = true
                this.edit = 'Edit'
            },
            deleteAccount() {
                this.showDelete = true
                this.filter = true
            },
            cancel() {
                this.showDelete = false
                this.filter = false
            },
            removeTodo(idAccount) {
                this.todos.forEach((item, indexItem) => {
                    if (idAccount === indexItem) {
                        this.todos.splice(idAccount, 1)         
                    }
                })
                localStorage.setItem(STORAGE_KEY, JSON.stringify(this.todos))
                this.showDelete = false
                this.filter = false
            }
        }
    }
</script>

<style>
    .bgFilter {
        filter: blur(4px);
    }
</style>