import Vue from "vue";
import App from "./App.vue";

Vue.directive("highlight", {
  bind(el, binding, vnode) {
    console.log("called");
    console.log(el);
    console.log(binding);
    console.log(vnode);
    let delay = 0;
    if (binding.modifiers["delay"]) {
      delay = 5000;
    }
    setTimeout(() => {
      if (binding.arg == "background") {
        el.style.backgroundColor = binding.value;
      } else {
        el.style.color = binding.value;
      }
    }, delay);
  }
});

new Vue({
  el: "#app",
  render: h => h(App)
});
