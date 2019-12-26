<template>
  <v-row>
    <v-col cols="12" sm="6" md="3">
      <v-text-field :id="id" :label="label" v-model="content" @input="onChange" />
      <div>
        <span>Id:</span>
        {{id}}
      </div>
      <div>
        <span>Counter</span>
        {{counterNum}}
        <div>
          <v-btn @click="incrementCounter({amount: 123})">Increment Counter</v-btn>
        </div>
      </div>
    </v-col>
  </v-row>
</template>

<script>
import EventBus from '../event-bus';
import { mapState, mapActions } from 'vuex';

export default {
  name: "DataInput",
  props: {
    id: String,
    label: String
  },
  data: () => ({
    content: ""
  }),
  mounted() {
    EventBus.$on('afterSpecialEvent', payload => {
      if (this.id === payload.id) {
        this.content = payload.value;
      }
    });
  },
  methods: {
    onChange(value) {
      this.$emit("textChange", this.id, value);
      if (value === "special") {
        let payload = {
          id: this.id,
          value: "QWERTYUI123456789"
        };
        EventBus.$emit("specialEvent", payload);
      }
    },
    getValue() {
      return this.content;
    },
    ...mapActions('counter', [
      'incrementCounter'
    ])
  },
  computed: {
    ...mapState('counter', {
      counterNum: state => state.counter
    })
  }
};
</script>
