import Vue from "vue";
import App from "./App.vue";

Vue.directive("highlight", {
  bind(el, binding, vnode) {
    console.log("called");
    console.log(el);
    console.log(binding);
    console.log(vnode);
    el.style.backgroundColor = binding.value;
  }
});

new Vue({
  el: "#app",
  render: h => h(App)
});
