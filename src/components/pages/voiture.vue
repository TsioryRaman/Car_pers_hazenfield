<template>
    <div>
        <div class="container mt-5">
            <h3 class="text-center">Voitures</h3>
            <p class="text-center">Creer ou administez votre voiture</p>
            <div class="form-group text-center mt-5 pt-5">
                <button class="btn  btn-info" @click="getFilter(`ALL`)">
                    Afficher tout les voitures
                </button>
                <button class="btn btn-danger ml-2 mr-2" @click="getFilter(`NOT_SALE`)">
                    Non vendu
                </button>
                <button class="btn btn-dark" @click="getFilter(`SALE`)">
                    Vendu
                </button>
                <button class="btn btn-dark ml-2" @click="getFilter()">
                    Masque
                </button>
            </div>
            <div class="row mt-5" v-show="input_create">
                <div class="col-sm-12 col-md-6">
                    <div class="form-group">
                        <label for="type">Type</label>
                        <input type="text" class="form-control" placeholder="type" v-model="type">
                    </div>
                </div>
                <div class="col-sm-12 col-md-6">
                    <div class="form-group">
                        <label for="modele">Modele</label>
                        <input type="text" class="form-control" placeholder="Modele" v-model="modele">
                    </div>
                </div>
                <div class="col-sm-12 col-md-6">
                    <div class="form-group">
                        <label for="annee">Annee</label>
                        <input type="text" class="form-control" placeholder="annee" v-model="annee">
                    </div>
                </div>
                <div class="col-sm-12 col-md-6">
                    <div class="form-group">
                        <label for="type">Description</label>
                        <textarea class="form-control" placeholder="Description" v-model="Description" />
                    </div>
                </div>
                <div class="col-sm-12">
                    <div class="form-group">
                        <div class="btn btn-success" @click="addCar">Creer</div>
                        <div class="btn btn-danger ml-3" @click="cancel">Annuler</div>
                    </div>
                </div>
            </div>
            <div class="container" v-show="carFiltered.length !== 0">
                <ul class="list-group">
                    <li class="list-group-item" v-for="car in carFiltered" :key="car.id">
                        {{car.type}}
                    </li>
                </ul>
            </div>
            <div class="form-group text-center">
                <button v-show="!input_create" @click="show_input" class="icon_round mt-5">
                    <Icons icon="plus" size="75px" />
                </button>
            </div>


        </div>
    </div>
</template>

<script>
    import store from "../CarStore"
    import Vuex from "vuex"
    import Icons from "../icons";



    export default {
        name: "voiture",
        components: {Icons},
        data()
        {
            return {
                input_create:false,
                type:        '',
                Description:  '',
                annee: '',
                modele: '',
                carFiltered: []
            }

        },
        store:store,
        mounted() {
            console.log(this.cars)
        },
        computed: {
            ...Vuex.mapGetters([
                'cars',
                'carsNotSale',
                'carsSaled'
            ]),
        },
        methods: {
            ...Vuex.mapActions({
                addCarStore: 'addCar'
            }),
            show_input: function () {
                this.getFilter()
                this.input_create = !this.input_create
            },
            addCar: function () {
                this.addCarStore({type:this.type,description:this.Description,annee:this.annee,modele: this.modele})
                this.reset()
            },
            reset: function () {
                this.type = ""
                this.Description = ''
                this.modele = ''
                this.annee = ''
            },
            cancel: function () {
                this.input_create = !this.input_create
            },
            getFilter(filter) {
                switch (filter) {
                    case "ALL":
                        this.carFiltered = this.cars
                        break
                    case 'NOT_SALE':
                        this.carFiltered = this.carsNotSale
                        break
                    case 'SALE':
                        this.carFiltered = this.carsSaled
                        break
                    default:
                        this.carFiltered = []
                }
            }
        }
    }
</script>

<style scoped>
.icon_round{
    width: 75px;
    height: 75px;
    border: none;
    background-color: transparent;
    border-radius: 50%;
    text-align: center;
    color: #a8b1b1;
}
</style>