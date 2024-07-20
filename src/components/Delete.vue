<template>
    <div class="container mx-auto px-2 md:w-fit">
        <div class="max-w-full w-96 p-4 bg-white rounded-2xl shadow-xl font-[Nunito]">
            <div class="flex flex-col p-4 border-2 border-dashed rounded-2xl border-orange-500">
                <div class="flex flex-col justify-center items-center">
                    <img class="w-32 p-2" src="./../../public/images/warning.png" alt="warning">
                    <span class="mt-4 text-center text-[#70747f] font-black text-xl">Are you sure to delete the account?</span>
                </div>
                <div class="flex mt-4 gap-4">
                    <button class="font-black bg-orange-400 text-white py-3 px-6 rounded-xl shadow hover:bg-orange-500 duration-200" @click="removeTodo">Yes</button>
                    <button class="font-black bg-blue-300 text-white py-3 px-6 rounded-xl shadow hover:bg-blue-400 duration-200" @click="cancelDelete">Cansel</button>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        props: ['indexofTodo'],
        data() {
            return {
                // index: 0
            }
        },
        methods: {
            cancelDelete() {
                this.$emit('cancel')
            },
            removeTodo() {
                // this.index += 1
                this.$emit('remove-todo', this.indexofTodo)
            }
        }
    }
</script>