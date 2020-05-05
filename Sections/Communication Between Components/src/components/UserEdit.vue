<template>
    <div class="component">
        <h3>You may edit the User here</h3>
        <p>Age = {{userAge}}</p>
        <p>Edit me!</p>
        <button @click="resetAge()">Reset Age</button>
    </div>
</template>

<script>
    export default {
      props: ['userAge', 'resetAge'],
    }
</script>

<style scoped>
    div {
        background-color: lightgreen;
    }
</style>
