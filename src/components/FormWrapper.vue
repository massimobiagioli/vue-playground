<template>
  <v-form>
    <v-container>
      <div class='box'>
        <data-input 
          id="di01" 
          label="Stringa di esempio 01" 
          @textChange="onTextChange" 
          ref="di01comp"/>
        <div class='component-id'><span>S1: </span>{{s1}}</div>
      </div>
      <div class='box'>
        <data-input 
          id="di02" 
          label="Stringa di esempio 02" 
          @textChange="onTextChange" 
          ref="di02comp"/>
        <div class='component-id'><span>S2: </span>{{s2}}</div>
      </div>
      <div>
        <v-btn @click="callChildMethod">Call Child Method</v-btn>
      </div>
    </v-container>
  </v-form>
</template>

<script>
import DataInput from "./DataInput";
import EventBus from "../event-bus";

export default {
  name: "FormWrapper",
  components: {
    DataInput
  },
  data: () => ({
    s1: "",
    s2: ""
  }),
  methods: {
    onTextChange(id, value) {
      switch (id) {
        case "di01":
          this.s1 = value;
          break;
        case "di02":
          this.s2 = value;
          break;
      }
    },
    callChildMethod() {
      let strResult = '';
      for (let key in this.$refs) {
        let value = this.$refs[key].getValue();
        strResult += `Key: ${key}  Value: ${value}\n`;
      }
      alert(strResult);
    }
  },
  mounted() {
    EventBus.$on("specialEvent", payload => {
      switch (payload.id) {
        case "di01":
          this.s1 = payload.value;
          break;
        case "di02":
          this.s2 = payload.value;
          break;
      }
      EventBus.$emit("afterSpecialEvent", { id: payload.id, value: "xyz" });
    });
  }
};
</script>

<style>
  .box {
    border: 1px solid black;
    margin-bottom: 4px;
    padding: 2px 2px;
  }
  .component-id {
    font-weight: bold;
    font-size: 1.1 em;
  }
</style>