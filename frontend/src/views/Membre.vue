<template>
    <div class="main" >
        <button @click="scroll()"> bas</button>
        <ul class="message" >
            <li :key="index" v-for="(membre, index) in membres"><card-item :name="membre.name" :text="membre.text"></card-item></li>
        </ul>
        <form class="form">
            <input type="text">
            <button type="submit" class="btn"></button>
        </form>
    </div>
</template>

<script>
import Card from '../components/Card'

export default {
    name: 'Membre',
    data() {
        return {
            membres : [
                {
                    name: 'Michel de la tour',
                    title: 'Le titre de Michel',
                    lien: '#lienMichel',
                    text: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ratione iste fugiat numquam consequuntur similique voluptate, qui eum maxime perferendis minima aspernatur, molestiae ut nisi error quod magnam. Debitis, accusamus non?'
                },
                {
                    name: 'Jacque',
                    title: 'Le titre de jacque',
                    lien: '#lienJacque',
                    text: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Odit possimus omnis assumenda saepe veritatis dolor!'
                },
                {
                    name: 'Marc',
                    title: 'Le titre de Marc',
                    lien: '#lienMarc',
                    text: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Debitis nihil ducimus voluptatem deserunt nostrum, fugit voluptate culpa voluptates, at eius facilis. Debitis incidunt tempora consequatur nam architecto consectetur assumenda similique porro quis cupiditate ad, minima dolorem rerum deserunt praesentium aspernatur.'
                }
            ]
        }
    },
    components : {
        'card-item': Card
    },
    mounted() {
        this.scroll()
    },
    methods: {
        scroll() {
            let element = document.querySelector('.main');
            element.scrollTop = element.scrollHeight;
        }
    }
}
</script>

<style lang="scss" scoped>
.main{
    position:relative;
    margin-top:60px;
    width:100%;
    height:80vh;
    overflow:scroll;

    .message{
        margin-bottom:150px;
        li{
            list-style-type: none;
        }
    }

    .form{
        position:fixed;
        background-color:#f1f1f1;
        bottom:0; left:0; right:0;
        height:50px;
        display:flex;
        justify-content: space-between;
        align-items: center;
        padding:0 25px;
        border-top:2px solid #dadada;

        input{
            border:none;
            width:85%;
            height:30px;
            line-height:30px;
            border:1px solid #dadada;
            border-radius:5px;
            font-size:20px;
            padding:5px;
            outline:none;
        }
        .btn{
            background-image: url("../assets/send-button.png");
            width:30px;
            height:30px;
            border:none;
            background-color:transparent;
            cursor: pointer;
            outline:none;
        }
    }
}
</style>