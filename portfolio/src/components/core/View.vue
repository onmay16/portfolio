<template>
    <div class="content-view">
        <about-me/>
        <project/>
        <career/>
        <contact/>
        <!-- <router-view/> -->
    </div>
</template>

<script>
import AboutMe from '@/components/AboutMe'
import Project from '@/components/Project'
import Career from '@/components/Career'
import Contact from '@/components/Contact'

export default {
    name: 'ContentView',

    components:{
        AboutMe,
        Project,
        Career,
        Contact
    }
    
};
</script>

<style>
@import './View.css'
</style>
