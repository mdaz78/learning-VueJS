<template>
  <div class="container">
    <div class="row">
      <div class="col-xs-12">
        <myQuote>
          <h2>Quote</h2>
          <p>A Wonderful Quote!</p>
        </myQuote>
      </div>
    </div>
  </div>
</template>

<script>
import Quote from "./components/Quote.vue";

export default {
  data: function() {
    return {
      quote: "A Wonderful Quote!"
    };
  },
  components: {
    myQuote: Quote
  }
};
</script>

<style></style>
