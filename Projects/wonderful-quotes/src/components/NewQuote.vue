<template>
  <div class="row">
    <div class="col-sm-8 col-sm-offset-2 col-xs-12 col-md-6 col-md-offset-3">
      <label for="quote">Quote</label>
      <textarea
        name="quote"
        id="quote"
        cols="20"
        rows="7"
        class="form-control"
        v-model="quote"
      >
      </textarea>
    </div>
    <div class="col-sm-8 col-sm-offset-2 col-xs-12 col-md-6 col-md-offset-3">
      <button class="btn btn-primary" @click.prevent="createNew">
        Add Quote
      </button>
    </div>
  </div>
</template>

<script>
export default {
  data: function() {
    return {
      quote: ""
    };
  },
  methods: {
    createNew() {
      this.$emit("quoteAdded", this.quote);
      this.quote = "";
    }
  }
};
</script>

<style scoped>
  button {
    display: block;
    margin: 10px 0;
  }
</style>
