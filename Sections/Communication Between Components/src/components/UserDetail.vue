<template>
  <div class="component">
    <h3>You may view the User Details here</h3>
    <p>Many Details</p>
    <p>User Name: {{ switchName() }}</p>
    <p>Age: {{ age }}</p>
    <button @click="resetFunction()">Reset Name</button>
  </div>
</template>

<script>
import { eventBus } from "../main";

export default {
  props: {
    name: {
      type: String,
      required: true // You don't use default if you are using required
    },
    resetFunction: {
      type: Function,
      required: true
    },
    age: {
      type: Number,
      required: true
    }
  },
  methods: {
    switchName() {
      return this.name
        .split("")
        .reverse()
        .join("");
    },
    resetName() {
      let name = "zafar";
      this.$emit("resetName", name);
    }
  },
  created() {
    eventBus.$on('ageWasEdited', (age) => this.age = age);
  }
};
</script>

<style scoped>
div {
  background-color: lightcoral;
}
</style>
