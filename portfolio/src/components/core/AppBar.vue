<template>
<div class="appbar">
    <div class="nav-logo">Hello, world!<br>This is May.</div>
    <div class="nav-bar">
        <ul class="menu">
            <li><router-link to="/">About me</router-link></li>
            <li><router-link to="/project">Projects</router-link></li>
            <li><router-link to="/career">Career</router-link></li>
            <li><router-link to="/contact">Contact</router-link></li>
        </ul>
    </div>
</div>
</template>

<script>
export default {

    methods: {
        toAboutMe(){this.$router.push("/")},
        toProject(){this.$router.push("/project")},
        toCareer(){this.$router.push("/career")},
        toContact(){this.$router.push("/contact")},
    }

}
</script>

<style>
@import './AppBar.css'
</style>