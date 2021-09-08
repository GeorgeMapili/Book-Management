<template>
    <div class="d-flex align-items-center justify-content-center" id="bgColor">
        <img :src="image"/>
    </div>
</template>

<script>
import image from '../assets/lib1.png'

export default {
    data: function () {
        return {
            image: image
        }
    }
}
</script>

<style scoped>
#bgColor{
    background-color: #66ffcc;
    height: 100vh;
}
</style>