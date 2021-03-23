<template>
    <div class="container mt-5">
        <div class="alert alert-danger">
            <h3>
                A savoir
            </h3>
            <p>
                Cette page est generee avec aucun systeme de back-end(Aucun serveur).<br>
                Cela affirme qu'il n'y a aucun appel de requete via un vrai serveur mais juste une simulation de timeout pour pouvoir voir les lifecycle(Cycle de vie des composants) d'une vue
            </p>
        </div>

        <h2 class="mt-5" v-show="time">Il est : {{ time }}</h2>
    </div>
</template>

<script>
    const parseNumber = (time) => {
        time = time+""
        return time.length === 2 ?  time : "0"+time
    }
    export default {



        name: "Autre",
        data() {
            return {
                time:null
            }
        },
        mounted() {
            this.timer = setInterval(()=> {
                const currentDate = new Date()
                this.time = parseNumber(currentDate.getHours()) + ':' +parseNumber(currentDate.getMinutes())+ ':' + parseNumber(currentDate.getSeconds())
            },1000)
        },
        destroyed() {
            clearInterval(this.timer)
        }
    }
</script>

<style scoped>

</style>