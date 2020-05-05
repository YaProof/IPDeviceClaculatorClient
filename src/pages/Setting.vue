<template>
  <q-page>
    <q-splitter v-model="splitterModel">
      <template v-slot:before>
        <q-tabs
          v-model="tab"
          vertical
          no-caps
          class="text-teal"
        >
          <q-tab
            v-for="(item, index) in items"
            :key="index"
            :name="item.name"
            :icon="item.icon"
            :label="item.label"
          />
        </q-tabs>
      </template>

      <template v-slot:after>
        <q-tab-panels
          v-model="tab"
          animated
          swipeable
          vertical
          transition-prev="jump-up"
          transition-next="jump-up"
        >
          <q-tab-panel
            v-for="(item, index) in items"
            :key="index"
            :name="item.name"
          >
            <reference-editor :reference="item.name" />
          </q-tab-panel>
        </q-tab-panels>
      </template>
    </q-splitter>
  </q-page>
</template>

<script>
import ReferenceEditor from '../components/setting/ReferenceEditor.vue';
export default {
  name: 'SettingPage',
  components: {
    ReferenceEditor
  },
  data () {
    return {
      splitterModel: 20,
      tab: "platform",
      items: [
        { name: 'platform', label: 'Платформа', icon: 'developer_board' },
        { name: 'typeOfMemory', label: 'Тип памяти', icon: 'sd_card' },
        { name: 'formFactor', label: 'Форм-фактор', icon: 'transform' },
        { name: 'socket', label: 'Сокет', icon: 'device_hub' },
        { name: 'motherboard', label: 'Материнская плата', icon: 'crop_16_9' },
        { name: 'ram', label: 'Оперативная память', icon: 'memory' },
      ]
    }
  }
}
</script>
