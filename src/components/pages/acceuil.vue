<template>

    <div class="container mt-5">
            <div class="alert alert-info col-12" v-show="!data.length">
                <icons icon="info" /> Chargement en cours
            </div>
            <transition-group name="fade" tag="div" class="row">
                <div class="col-sm-12 col-md-6 col-lg-4 mb-3" v-for="car in data" :key="car.id">
                    <Card :car="car" :edit="edit" :remove="remove"/>
                </div>
            </transition-group>
        </div>

</template>

<script>
    import Card from "../_components/card";
    import Vuex from "vuex"
    import {FETCH_SIMULATING_API} from "../../Api/FETCH_SIMULATING";
    import Icons from "../icons";

    export default {
        name: "acceuil",
        components: {Icons, Card},
        data() {
            return {
                data: []
            }
        },
        mounted() {
            document.title = "Acceuil | Car"
            FETCH_SIMULATING_API(this.cars).then(data => {
                this.data = data
            })
        },
        methods: {
            ...Vuex.mapActions({
               editCar: 'editCar',
                removeCar: 'removeCar'
            }),
            edit(car,description) {
                this.editCar({car:car,description:description})
            },
            remove(car){

                this.removeCar(JSON.stringify(car))
            }
        },
        computed: {
            ...Vuex.mapGetters([
                "cars"
            ])
        }
    }
</script>

<style lang="scss">


</style>