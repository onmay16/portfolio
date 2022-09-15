<template>
    <div class="about-me">
        <div class="profile-section">
            <img src="../assets/icons/ProfilePic.svg" alt="profile_image" class="profile-pic">
            <div class="right-section">
                <div class="profile-name">May</div>
                <div class="profile-title">Junior Software Engineer</div>
                <div class="profile-introduction">I love web development including web design, games and pixel art
                    I spend my spare time on drawing pixel art these days!</div>
                <div class="contacts">
                    <a href="mailto:onmay16@gmail.com"><img src="../assets/icons/email.svg" alt="Email me!" class="email-icon"></a>
                    <a href="https://github.com/onmay16/"><img src="../assets/icons/profile-github.svg" alt="My Github Profile" class="github-icon"></a>
                    <a href="https://www.linkedin.com/in/sugyeong-hong-01a04317a/"><img src="../assets/icons/linkedin.svg" alt="My LinkedIn Profile" class="linkedin-icon"></a>
                </div>
            </div>
        </div>
        <div class="what-do-i-have">
            <h1 class="what-do-i-have-title">What Do I Have?</h1>
            <div class="skills">
                <div class="skill-column fontend">
                    <img src="../assets/icons/frontend-title.svg" alt="" class="skill-title frontend-title">
                    <div class="flex-row frontend-first-row">
                        <img src="../assets/icons/html.svg" alt="" class="skill html">
                        <img src="../assets/icons/css.svg" alt="" class="skill css">
                        <img src="../assets/icons/js.svg" alt="" class="skill js">
                    </div>
                    <div class="flex-row frontend-second-row">
                        <img src="../assets/icons/react.svg" alt="" class="skill react">
                        <img src="../assets/icons/vue.svg" alt="" class="skill vue">
                    </div>
                </div>
                <div class="skill-column backend-deployment">
                    <img src="../assets/icons/backend-title.svg" alt="" class="skill-title backend-title">
                    <div class="flex-row backend">
                        <img src="../assets/icons/python.svg" alt="" class="skill python">
                        <img src="../assets/icons/django.svg" alt="" class="skill django">
                    </div>
                    <div class="flex-column deployment">
                        <img src="../assets/icons/deployment-title.svg" alt="" class="skill-title deployment-title">
                        <img src="../assets/icons/docker.svg" alt="" class="skill docker">
                    </div>
                </div>
                <div class="design-vcs">
                    <img src="../assets/icons/vcs-design-title.svg" alt="" class="skill-title vcs-design-title">
                    <div class="flex-row design-vcs-first-row">
                        <img src="../assets/icons/git.svg" alt="" class="skill git">
                        <img src="../assets/icons/skill-github.svg" alt="" class="skill github">
                        <img src="../assets/icons/gitlab.svg" alt="" class="skill gitlab">
                    </div>
                    <div class="flex-row design-vcs-second-row">
                        <img src="../assets/icons/figma.svg" alt="" class="skill figma">
                        <img src="../assets/icons/aseprite.svg" alt="" class="skill aseprite">
                    </div>
                </div>
            </div>
            
        </div>
    </div>
    
</template>

<script>
export default {

};
</script>

<style>
@import './AboutMe.css'
</style>
