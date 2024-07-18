<template>

    <user />

    <div class="md:flex md:flex-row flex flex-col text-center justify-center items-center md:mt-8 mt-20 mb-20 md:mb-0 gap-x-8  md:gap-y-0 gap-y-20 md:ml-72 font-[Mulish]">
        <div class="w-72 bg-gray-100 rounded-2xl shadow-md" v-for="card in credits" :key="card.id">
            <div class="flex flex-col p-8 rounded-t-xl" :style="{backgroundColor: card.color}">
                <span class="font-bold text-2xl text-white">{{ card.price }}</span>
                <span class="font-bold text-lg mt-4 text-white opacity-50">{{ card.credit }}</span>
            </div>
            <div class="mx-auto w-fit -mt-5 px-6 py-2 font-bold rounded-xl text-white" :style="{backgroundColor: card.levelColor }">{{ card.level }}</div>
            <div class="flex flex-col gap-5 mt-8 mb-4 text-lg font-bold text-gray-500">
                <span>Full access</span>
                <span>Product update</span>
                <span>Family subscribtion</span>
                <span>Up to {{ card.user }} user</span>
            </div>
            <div class="relative top-7 w-fit mx-auto p-1 rounded-full cursor-pointer hover:scale-110 duration-200 " :style="{backgroundColor: card.color}">
                <div class="px-10 py-3 border-2 border-dashed border-white rounded-full text-white font-bold">Choose plan</div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                credits: [
                    {price: '€5.99', credit: 'Monthly', level: 'Basic', user: 3, color: '#3b82f6', levelColor: '#93c5fd', id: 1},
                    {price: '€49.99', credit: 'Annual', level: 'Pro', user: 5, color: '#ec4899', levelColor: '#f9a8d4', id: 2}
                ]
            }
        }
    }
</script>