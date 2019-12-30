<template>
  <v-app id="app">
    <v-app-bar app clipped-right color="blue-grey" dark>
      <v-app-bar-nav-icon @click.stop="drawer = !drawer" />
      <v-toolbar-title>Toolbar</v-toolbar-title>
      <template v-slot:extension>
        <v-tabs align-with-title>
          <v-tab to="/">DataInput</v-tab>
          <v-tab to="/grid">Grid</v-tab>
          <v-tab to="/help">Help</v-tab>
        </v-tabs>
      </template>
    </v-app-bar>

    <v-navigation-drawer v-model="drawer" app>navigatore sx</v-navigation-drawer>

    <v-navigation-drawer v-model="left" fixed temporary />

    <v-content>
      <router-view></router-view>
    </v-content>

    <v-footer app color="blue-grey" class="white--text">footer</v-footer>
  </v-app>
</template>

<script>
export default {
  data: () => ({
    drawer: null,
    left: false
  })
};
</script>