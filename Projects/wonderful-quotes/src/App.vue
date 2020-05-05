<template>
  <div class="container">
    <div class="row">
      <app-header :quotes-count="quotes.length" max-quotes="10"></app-header>
    </div>
    <app-new-quote @quoteAdded="newQuote"></app-new-quote>
    <app-quote-grid
      :quotes="quotes"
      @quoteDeleted="deleteQuote"
    ></app-quote-grid>
    <div class="row">
      <div class="col-sm-12 text-center">
        <div class="alert alert-info">
          Info: Click on a Quote to delete it!
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import QuoteGrid from "./components/QuoteGrid.vue";
import NewQuote from "./components/NewQuote.vue";
import Header from "./components/Header.vue";

export default {
  data: function() {
    return {
      quotes: ["Just a Quote to See Something"],
      maxQuotes: 10
    };
  },
  components: {
    "app-quote-grid": QuoteGrid,
    "app-new-quote": NewQuote,
    "app-header": Header
  },
  methods: {
    newQuote(quote) {
      if (this.quotes.length >= this.maxQuotes) {
        return alert("Please Delete Some Quotes to Add More");
      }
      this.quotes.push(quote);
      console.log(quote);
    },
    deleteQuote(index) {
      this.quotes = this.quotes.filter((quote, i) => i !== index);
      console.log(this.quotes);
    }
  }
};
</script>

<style></style>
