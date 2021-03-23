<template>
    <div class="navbar navbar-expand-sm bg-transparent">
        <div class="container container_nav">
            <div class="navbar-collapse collapse">
                <ul class="nav navbar-nav">
                    <li class="nav-item"><router-link :to="{name : 'acceuil'}" class="nav-link"><Icons icon="home"/></router-link></li>
                    <li class="nav-item"><router-link :to="{name: 'presentation'}" class="nav-link"><Icons icon="fingerprint" />Presentation</router-link></li>
                    <li class="nav-item"><router-link to="/voiture" class="nav-link"><Icons icon="plus"/>Voiture</router-link></li>
                    <li class="nav-item"><router-link :to="{name: 'autre'}" class="nav-link">Autre</router-link></li>
                    <li class="nav-item"><router-link to="/concept" class="nav-link">Concepteur</router-link></li>
                </ul>
            </div>
        </div>
    </div>
</template>

<script>
    // Navbar de l'application
    import Icons from "./icons";
    export default {
        name: "Navbar",
        components: {Icons}
    }
</script>