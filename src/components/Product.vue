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
                    <p class="md:max-w-3xl max-w-xs text-left text-md leading-7 text-gray-500 mb-4 md:mb-0 px-2 md:p-0">{{ d.story }}</p>
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
                    {url: './../../public/images/ger_01.jpg', title: 'Die Bremer Stadtmusikanten', price: '$5', story: "Sophie was always ponders big questions, like Why is the sky blue? Why are raindrops wet? What are stars made of? But when Sophie starts school, there's a wobbly feeling in her tummy and she can't help popping back into her shell. She is left with one big question: Why am I so shy? When Sophie meets Stanley, she realizes that she's not the only one who feels shy. Can she gain the confidence to help a new friend? A heart warming tale about a sensitive snail who overcomes her shyness with a little help from her new friends.", id: 1},
                    {url: './../../public/images/Sophies_Shell_[0].jpg', title: 'Sophies Shell', price: '$5', story: "Sophie was always ponders big questions, like Why is the sky blue? Why are raindrops wet? What are stars made of? But when Sophie starts school, there's a wobbly feeling in her tummy and she can't help popping back into her shell. She is left with one big question: Why am I so shy? When Sophie meets Stanley, she realizes that she's not the only one who feels shy. Can she gain the confidence to help a new friend? A heart warming tale about a sensitive snail who overcomes her shyness with a little help from her new friends.", id: 2},
                    {url: './../../public/images/Pooka_&_Bunni_[0].jpg', title: 'Pooka & Bunni', price: '$5', story: "Oh no! Pooka knocked down her big sister Bunni’s pillow castle! Pooka needs to fix it before Bunni returns. Even though she’s small, Pooka uses her big imagination, creativity, and perseverance to figure out how to build an even better castle. This clever story highlights sibling bonding and how big sisters can learn a lot from their little sisters!", id: 3},
                    {url: './../../public/images/How_Can_I_Wait_[0].jpg', title: 'How Can I Wait', price: '$5', story: "It’s hard for some kids to wait for something that they really want! A marshmallow now or ice cream later? In this lively, rhyming picture book, twins Dell and Pete face a series of humorous choices that test their ability to stay strong in the face of temptation. Includes a Note to Parents and Caregivers that explores techniques to help kids build impulse control and learn to delay gratification. Includes a Note to Parents and Caregivers that explores techniques to help kids build impulse control and learn to delay gratification.", id: 4},
                    {url: './../../public/images/Giraffe_Asks_For_Help_[0].jpg', title: 'Giraffe Asks For Help', price: '$5', story: "Gary Giraffe is so excited to finally turn six — now he should be able to reach the acacia leaves all on his own! When things don't go exactly as he'd planned, Gary is distraught. He tries and tries to get to the leaves himself, but he's just not tall enough. The other giraffes can do it — why can't he? Gary doesn't want to have to ask for help, but his friends convince him that everyone needs help sometimes. And that's OK! Includes a Note to Parents & Caregivers with more information on help-seeking and independence in children.", id: 5},
                    {url: './../../public/images/fantas....jpg', title: 'Fantastic You', price: '$5', story: "There's one special person you get to spend your whole life with: YOU! Which means there's no one you should take better care of! When you cheer yourself on and cheer yourself up, you make the world a happier place. Life is amazing when you share it with the people you love: family, friends, and always with YOU! Fantastic You shows readers how to develop and nurture a loving and positive relationship with themselves. Kids will learn that self-care includes positive self-talk and self-compassion for a happy, self-empowered life.", id: 6},
                    {url: './../../public/images/A_Terrible_Thing_Happened_[0].jpg', title: 'A Terrible Thing Happened', price: '$5', story: "Sherman Smith saw the most terrible thing happen. At first he tried to forget about it, but soon something inside him started to bother him. He felt nervous for no reason. Sometimes his stomach hurt. He had bad dreams. And he started to feel angry and do mean things, which got him in trouble. Then he met Ms. Maple, who helped him talk about the terrible thing that he had tried to forget. Now Sherman is feeling much better. This gently told and tenderly illustrated story is for children who have witnessed any kind of violent or traumatic episode, including physical abuse, school or gang violence, accidents, homicide, suicide, and natural disasters such as floods or fire. An afterword by Sasha J. Mudlaff written for parents and other caregivers offers extensive suggestions for helping traumatized children, including a list of other sources that focus on specific events.", id: 7},
                    {url: './../../public/images/A_Box_of_Butterfiles_[1].jpg', title: 'A Box of Butterfiles', price: '$5', story: "Robot is just a machine. Robot cannot feel love. Robot is just a machine. Robot cannot feel love. Robot paused for a moment and said, What does love feel like?", id: 8},
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