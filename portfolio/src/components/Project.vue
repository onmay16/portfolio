<template>
<div class="projects">
    <h1 class="projects-title" >Projects</h1>
    <div class="project curave">
        <div class="img-slider">
            <img src="../assets/icons/img-slider-arrow.svg" alt="" class="slider-arrow" @click="prev(curave)">
            <div class="curave-album album curave" >
                <div class="curave-screenshots screenshots curave" >
                    <img src="../assets/projectimgs/curave/curave1.png" alt="" class="screenshot curave-screenshot1 curave"/>
                    <img src="../assets/projectimgs/curave/curave2.png" alt="" class="screenshot curave-screenshot2 curave" />
                    <img src="../assets/projectimgs/curave/curave3.png" alt="" class="screenshot curave-screenshot3 curave" />
                    <img src="../assets/projectimgs/curave/curave4.png" alt="" class="screenshot curave-screenshot4 curave" />
                    <img src="../assets/projectimgs/curave/curave5.png" alt="" class="screenshot curave-screenshot5 curave" />
                    <img src="../assets/projectimgs/curave/curave6.png" alt="" class="screenshot curave-screenshot6 curave" />
                    <img src="../assets/projectimgs/curave/curave7.png" alt="" class="screenshot curave-screenshot7 curave" />
                </div>
            </div>
            <img src="../assets/icons/img-slider-arrow-right.svg" alt="" class="slider-arrow" @click="next(curave)">
        </div>
        <div class="project-heading curave">
            <h2 class="project-title curave">Curave</h2>
            <h5 class="project-period">(2021.12~)</h5>
            <div class="project-summary curave">Music preference sharing social platform</div>
        </div>
        <p class="project-description curave">
            This web application is an social platform that user can share the songs they like and find random users who have similar music preferences. The idea started from the desire to put my favorite musics into just one platform since I lost the list that I wrote down good musics I found from here and there many times. Also, as a person who enjoy to dig new musics time to time, I wanted to try someone else’s favorite musics if there are common musics on our feeds.
        </p>
        <hr class="project-section-divider curave" />
        <div class="proejct-main-features curave">
            <img src="../assets/icons/bullet-icon.svg" alt="" class="project-main-features-icon curave">
            <div class="project-main-features-text curave">Main <br> Features</div>
            <div class="project-main-features-content curave">
                <ul>
                    <li>Feed displaying the songs added by user (looks like instagram)</li>
                    <li>Search function using external APIs from Spotify</li>
                    <li>Random user feed browing through recommended song on the main page</li>
                </ul>
            </div>
        </div>
        <div class="project-skill-stacks curave">
        <div class="project-frontend curave">
            <div class="project-skill-heading frontend curave">
                <img src="../assets/icons/Figma-icon.svg" alt="" class="project-skill-icon frontend curave">
                <div class="project-skill-text frontend curave">Frontend</div>
            </div>
            <div class="project-content frontend curave">React V 6.0</div>
            </div>
        <div class="project-backend curave">
            <div class="project-skill-heading backend curave">
                <img src="../assets/icons/backend-icon.svg" alt="" class="project-skill-icon backend cruave">
                <div class="project-skill-text backend curave">Backend</div>
            </div>
            <div class="project-content backend curave">Django REST Framework</div>
        </div>
        <div class="project-links curave">
            <img src="../assets/icons/github-link-icon.svg" alt="" class="project-skill-icon link curave">
            <div class="project-link-rows cruave">
                <div class="project-link-first-row">
                    <a href="https://github.com/onmay16/my-fav" class="project-link github curave">Github</a>
                    <img src="../assets/icons/dot.svg" alt="" class="project-link-dot curave">
                    <a href="https://www.figma.com/file/7CASYJ6jsYu56UBKiCrm3k/curave?node-id=0%3A1" class="project-link figma curave">Figma</a>
                </div>
                <div class="project-link-second-row">
                    <a href="https://onmay16.github.io/curave/" class="project-link static curave">Static</a>
                    <img src="../assets/icons/dot.svg" alt="" class="project-link-dot curave">
                    <a href="https://marbled-potential-d84.notion.site/Playlist-Sharing-Platform-my-fav-55f3de5e91264e63aa5616982c6a41ee" class="project-link apidoc curave">API Doc</a>
                </div>
            </div>
        </div>
        </div>
    </div>
</div>
</template>

<script>

export default {
    data() {
        return {
            curave: {
                curPos: 0,
                postion: 0,
                start_x:0,
                end_x: 0,
                IMAGE_WIDTH: 1040,
                totalSlide: 6, //should be one less than actual number of slides
                screenshotsClass: '.curave-screenshots'
            },
        }
    },
    methods:{
        prev(project){
            if(project.curPos > 0){
                project.postion += project.IMAGE_WIDTH;
                document.querySelector(project.screenshotsClass).style.transform = `translateX(${project.postion}px)`;
                project.curPos = project.curPos - 1;
            }
        },
        next(project){
            if(project.curPos < project.totalSlide){
                project.postion -= project.IMAGE_WIDTH;
                document.querySelector(project.screenshotsClass).style.transform = `translateX(${project.postion}px)`;
                project.curPos = project.curPos + 1;
            }
        },
    },
    mounted() {
    }
}
</script>

<style>
@import "./Project.css";
</style>