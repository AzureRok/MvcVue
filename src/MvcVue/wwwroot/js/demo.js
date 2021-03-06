Vue.component("button-counter1", {
  //props: ["test"],
  data: function () {
    return {
      count: 0
    };
  },
  methods: {
    incrementCount: function () {
      var self = this;
      self.count++;
    },
    incrementCount2: function () {
      demo.buttonCount3.incrementCount();
    }
  },
  template: "\n<div>\n    <button v-on:click=\"incrementCount()\">You clicked me {{ count }} times!</button>\n    <br />\n    <button v-on:click=\"incrementCount2()\">Increment button 3 from this component</button>\n</div>\n\n"
});
Vue.component('button-counter2', {
  data: function () {
    return {
      count: 0
    }
  },
  template: '<button v-on:click="count++">You clicked me {{ count }} times.</button>'
});



demo.buttonCount3 = new Vue({
    el: "#button-counter3",
    data: {
        count: 1
    },
    methods: {
        incrementCount: function () {
            this.count++;
        }
    }
});