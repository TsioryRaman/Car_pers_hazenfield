<template>
    <div class="card" :class="{'bg-success': car.sale,'text-white':car.sale}">
        <div class="card-header">
            <div class="card-title">
                {{car.marque}}
                <span class="ml-auto">{{car.type}}</span>
                <span class="float-right" v-show="car.sale">Vendu</span>
            </div>
        </div>
        <div class="card-img">
            <img src="../../assets/images/car.png" alt="img">
        </div>
        <div class="card-body">
            <h5>Description</h5>
                <p v-show="!activeEdit">
                    {{ car.description }}
                </p>
                <textarea name="desciption" id="" cols="30" rows="7" v-model="description" class="form-control" v-show="activeEdit"></textarea>
        </div>
        <div class="card-footer">
            <p>Annee : {{ car.annee }}
                <span v-show="!activeEdit && !car.sale" @click="remove(car)" class="float-right badge badge-danger ml-2">
                    <Icons icon="trash" />
                </span>
                <span v-show="!activeEdit && !car.sale" class="float-right badge badge-success" @click="toggleEdit">
                    <Icons icon="edit" />
                </span>
                <span v-show="activeEdit && !car.sale" class="float-right badge badge-success" @click="editOk">
                    <Icons icon="check" />
                </span>
            </p>


        </div>
    </div>
</template>

<script>
    import Icons from "../icons";
    export default {
        name: "card",
        data() {
            return {
                activeEdit:false,
                description: {type:String}
            }
        },
        components: {Icons},
        props:{
            car:Object,
            edit: {
                type: Function
            },
            remove: {
                type: Function
            }
        },
        methods: {
            toggleEdit: function () {
                this.activeEdit = !this.activeEdit
            },
            editOk: function () {
                this.edit(this.car,this.description)
                this.toggleEdit()
            },

        },
        mounted() {
            this.description = this.car.description
        }
    }
</script>

<style scoped>
    .badge {
        cursor: pointer;
    }
    img{
        background-repeat: no-repeat;
        width: 100%;
        height: auto;
    }
</style>