<template>
    <svg class="className"  :width="size" :height="size">
        <use :xlink:href="getLink" />
    </svg>
</template>

<script>

    // Importer les icons dynamiquement depuis le fichier sprite
    //Sprite contient des codes SVG
    export default {
        name: "icons",
        props: {
            icon: String,
            className: String,
            size: {type:String, default:"20px"}
        },
        computed: {
            getLink: function () {
                return "sprite.svg#" + this.icon
            }
        }
    }
</script>

<style scoped>

</style>