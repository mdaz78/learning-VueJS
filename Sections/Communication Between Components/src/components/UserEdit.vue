<template>
  <div class="component">
    <h3>You may edit the User here</h3>
    <p>Age = {{ userAge }}</p>
    <p>Edit me!</p>
    <button @click="editAge()">Reset Age</button>
  </div>
</template>

<script>
import { eventBus } from "../main";

export default {
  props: ["userAge"],
  methods: {
    editAge() {
      this.userAge = 30;
      eventBus.changeAge(this.userAge)
    }
  }
};
</script>

<style scoped>
div {
  background-color: lightgreen;
}
</style>
