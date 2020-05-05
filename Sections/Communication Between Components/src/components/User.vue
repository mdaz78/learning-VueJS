<template>
    <div class="component">
        <h1>The User Component</h1>
        <p>I'm an awesome User!</p>
        <p>Name: {{ name }}</p>
        <p>Age: {{ age }}</p>
        <button @click="changeName">Change my name</button>
        <hr/>
        <div class="row">
            <div class="col-xs-12 col-sm-6">
                <app-user-detail
                        :name="name"
                        @resetName="name = $event"
                        :resetFunction="resetFunction"
                        :age="age"
                ></app-user-detail>
            </div>
            <div class="col-xs-12 col-sm-6">
                <app-user-edit :userAge="age" :resetAge="resetAge"></app-user-edit>
            </div>
        </div>
    </div>
</template>

<script>
  import UserDetail from "./UserDetail.vue";
  import UserEdit from "./UserEdit.vue";

  export default {
    data: function () {
      return {
        name: "Max",
        age: 24
      };
    },
    methods: {
      changeName() {
        this.name = "Anna";
      },
      resetFunction() {
        this.name = "Zafar";
      },
      resetAge() {
        this.age = 26;
      }
    },
    components: {
      appUserDetail: UserDetail,
      appUserEdit: UserEdit
    }
  };
</script>

<style scoped>
    div {
        background-color: lightblue;
    }
</style>
