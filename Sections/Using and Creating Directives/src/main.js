import Vue from "vue";
import App from "./App.vue";

Vue.directive("highlight", {
  bind(el, binding, vnode) {
    console.log("called");
    console.log(el);
    console.log(binding);
    console.log(vnode);
    if (binding.arg == 'background') {
      el.style.backgroundColor = binding.value;
    } else {
      el.style.color = binding.value;
    }
  }
});

new Vue({
  el: "#app",
  render: h => h(App)
});
