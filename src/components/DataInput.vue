<template>
  <v-row>
    <v-col cols="12" sm="6" md="3">
      <v-text-field :id="id" :label="label" v-model="content" @input="onChange" />
      <div>
        <span>Id:</span>
        {{id}}
      </div>
    </v-col>
  </v-row>
</template>

<script>
import EventBus from "../event-bus";

export default {
  name: "DataInput",
  props: {
    id: String,
    label: String
  },
  data: () => ({
    content: ""
  }),
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
    }
  },
  mounted() {
    EventBus.$on("afterSpecialEvent", payload => {
      if (this.id === payload.id) {
        this.content = payload.value;
      }
    });
  }
};
</script>
