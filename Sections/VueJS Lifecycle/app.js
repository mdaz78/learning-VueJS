new Vue({
  el: '#app',
  data: {
    title: 'The VueJS Instance',
  },
  methods: {
    updateTitle: function () {
      this.title = 'Changed'
    },
    destroy: function () {
      // this method removes all the js functionality
      // i.e. Click and other connections are lost
      this.$destroy()
    },
  },
  beforeCreate: function () {
    console.log('beforeCreate()')
  },
  created: function () {
    console.log('created()')
  },
  beforeMount: function () {
    console.log('beforeMount()')
  },
  mounted: function () {
    console.log('mounted()')
  },
  beforeUpdate: function () {
    console.log('beforeUpdate()')
  },
  updated: function () {
    console.log('updated()')
  },
  beforeDestroy: function () {
    console.log('beforeDestroy()')
  },
  destroyed: function () {
    console.log('destroyed()')
  },
})
