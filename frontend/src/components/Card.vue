<template>
    <div class="card">
        <div class="main">
            <p>
                {{ text }}   
            </p>
            <span>{{ name }}</span>
        </div>
    </div>
    
</template>

<script>
export default {
    name: 'Card',
    props: [
        'name',
        'text'
    ]
}
</script>

<style lang="scss" scoped>
.card{
    border: 1px solid #dadada;
    margin-bottom: 10px;
    border-radius:5px;
    box-shadow: 2px 2px 2px #777;

    .main{
        width:100%;
        p{
            text-align:left;
            padding:10px 10px 30px;
        }
        span{
            display: block;
            text-align:right;
            padding:0 10px 10px;
        }
        
    }
}

</style>