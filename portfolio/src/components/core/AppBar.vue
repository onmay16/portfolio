<template>
<div>
    <v-app-bar dense dark>
        <ul class="menu">
        <li><router-link to="/"><v-btn plain>Home</v-btn></router-link></li>
        <li><router-link to="/project"><v-btn plain>Projects</v-btn></router-link></li>
        <li><router-link to="/about"><v-btn plain>About</v-btn></router-link></li>
        <li><router-link to="/contact"><v-btn plain>Contact</v-btn></router-link></li>
        </ul>
    </v-app-bar>
</div>
</template>

<script>
export default {

    // methods: {
    //     toHome(){this.$router.push("/")},
    //     toProject(){this.$router.push("/project")},
    //     toAbout(){this.$router.push("/about")},
    //     toContact(){this.$router.push("/contact")},
    // }

}
</script>

<style>
ul.menu li{
    display: inline;
}
</style>