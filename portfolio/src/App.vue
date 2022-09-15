<template>
  <v-app style="background-color: #FFF6BF">
    <app-bar />
    <content-view />
    <custom-footer author="May" />
  </v-app>
</template>

<script>
import AppBar from '@/components/core/AppBar'
import ContentView from '@/components/core/View'
import CustomFooter from '@/components/core/Footer'

export default {
  name: 'App',

  components: {
    AppBar,
    ContentView,
    CustomFooter
  },
};
</script>
