new Vue({
  el: '#exercise',
  data: {
    effectClass: {
      highlight: true,
      shrink: false
    },
    userClass: '',
    isVisible: true,
    myStyle: {
      width: '200px',
      height: '500px',
      backgroundColor: 'gray'
    },
    progressBar: {
      width: '0px',
      height: '20px',
      backgroundColor: 'red'
    }
  },
  methods: {
    startEffect: function () {
      const vm = this;
      setInterval(function () {
        vm.effectClass.highlight = !vm.effectClass.highlight;
        vm.effectClass.shrink = !vm.effectClass.shrink;
      }, 1000)
    },
    startProgress: function() {
      const vm = this;
      let width = 10;
      const move = function() {
        width = width + 10;
        console.log("running")
        if (width < 500) {
          vm.progressBar.width = width + "px";
        } else {
          clearInterval(interval)
        }
      }
      const interval = setInterval(move,500)
    }
  }
});
