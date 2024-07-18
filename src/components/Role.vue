<template>
    <div class="md:absolute flex flex-col justify-center items-center bg-white rounded-lg font-[Nunito]">
        <div class="mb-8 text-center">
            <h3 class="text-[#12265a] font-black text-[2.7rem] leading-[3rem]">Which user are you registering as?</h3>
        </div>
        <div class="md:flex md:flex-row flex flex-wrap justify-center md:gap-4 gap-8 mb-5 md:mb-0" @click="backProfile">
            <div class="flex flex-col items-center p-2 border-2 border-dashed border-pink-300 rounded-2xl shadow-lg cursor-pointer hover:bg-pink-100 transition hover:scale-110 duration-200" v-for="role in roles">
                <img class="w-28 p-2" :src="role.url">
                <span class="text-gray-700 font-bold text-sm pt-2">{{ role.rule }}</span>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                roles: [
                {rule:'Student', url:'./../../public/Images/student.png'},
                {rule:'Parent', url:'./../../public/Images/family.png'},
                {rule:'Teacher', url:'./../../public/Images/classroom.png'},
                {rule:'Psychology', url:'./../../public/Images/psychology.png'},
                {rule:'Kindergarten', url:'./../../public/Images/kindergarten.png'}
                ]
            }
        },
        methods: {
            backProfile() {
                this.$emit('backProfile')
            }
        }
    }
</script>