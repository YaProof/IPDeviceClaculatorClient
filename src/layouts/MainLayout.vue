<template>
  <q-layout view="lHh Lpr lFf">
    <q-header elevated>
      <q-toolbar>
        <q-toolbar-title>
          Калькулятор IP-видеокамер
        </q-toolbar-title>

        <q-tabs shrink inline-label>
          <q-route-tab
            v-for="(item, index) in items"
            :key="index"
            :label="item.label"
            :to="item.to"
            :icon="item.icon"
            exact
          />
        </q-tabs>

        <q-chip>
          <q-avatar>
            <img src="https://cdn.quasar.dev/img/boy-avatar.png">
          </q-avatar>
          Илья
        </q-chip>
      </q-toolbar>
    </q-header>

    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script>
import { HOME, SETTING } from '../domain/const/router.type';

export default {
  name: 'MainLayout',
  components: {},
  data () {
    return {
      items: [
        { label: 'Расчет', to: HOME, icon: 'computer' },
        { label: 'Настройки', to: SETTING, icon: 'settings' },
      ]
    }
  }
}
</script>
