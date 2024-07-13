<template>
    <div class="container mx-auto px-2 md:w-fit">
        <div class="max-w-full w-[500px] p-4 bg-white rounded-2xl shadow-xl font-[Nunito]">
            <div class="flex flex-col gap-3 p-4">
                <div class="flex flex-col">
                    <label class="font-black text-lg text-gray-500 mb-1">Name</label>
                    <input class="w-full py-3 px-5 rounded-3xl border border-pink-300" type="text" v-model="inpName">
                    <!-- <span class="ml-5 mt-2 font-medium text-red-500">This field cannot be empty!</span> -->
                </div>
                <div class="flex flex-col">
                    <label class="font-black text-lg text-gray-500 mb-1">Brith</label>
                    <select class="w-full bg-white text-gray-500 py-3 px-5 rounded-3xl border border-pink-300">
                        <option v-for="year in years" :value="year">{{ year }}</option>
                    </select>
                </div>
                <div class="p-2 flex flex-col">
                    <label class="font-black text-lg text-gray-500 mb-1">Icon</label>
                    <div class="flex flex-wrap w-full justify-center gap-2 mt-3 md:ml-3 cursor-pointer">
                        <img class="bg-pink-50 w-24 p-2 rounded-xl hover:scale-110 hover:border-2 hover:border-dashed hover:border-green-200 hover:bg-pink-100 duration-200 active:border-2" v-for="image in images" :key="image.id" :src="image.url" :class="{borderActive: borderAct === image.id}" @click="toggleActive(image.id)" alt="profile">
                    </div>
                </div>
                <div class="flex justify-center gap-4">
                    <button class="py-3 px-8 text-lg font-black rounded-full border border-pink-300 text-pink-300 hover:bg-pink-400 hover:text-white duration-200" @click="add">{{ edit }}</button>
                    <button class="py-3 px-8 text-lg font-black rounded-full border border-blue-300 text-blue-300 hover:bg-blue-400 hover:text-white duration-200" @click="closeForm">Cancel</button>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        props: ['edit'],
        data() {
            return {
                years: Array.from({ length: 24 }, (_, index) => 2000 + index),
                images: [
                    {url: './../../public/images/dino.png', id: 1},
                    {url: './../../public/images/dinosaur.png', id: 2},
                    {url: './../../public/images/dinosaur(1).png', id: 3},
                    {url: './../../public/images/egg.png', id: 4}
                ],
                borderAct: 1,
                inpName: "",
                id: 0
            }
        },
        methods: {
            toggleActive(imageId) {
                this.borderAct = imageId
            },
            closeForm() {
                this.$emit('close-form')
            },
            add() {
                this.id += 1
                this.$emit('add', {
                    name:this.inpName,
                    image: this.images[this.borderAct - 1],
                    id:this.id
                })
                this.inpName = ""
                this.borderAct = 1
            }
        }
    }
</script>

<style scoped>
    .borderActive {
        border: 2px dashed rgb(244, 114, 182);
    }
    .borderActive:hover {
        border: 2px dashed rgb(244, 114, 182);
    }
</style>