Vue.component("button-counter1", {
  props: ["test"],
  data: function () {
    return {
      count: 0
    };
  },
  methods: {
    incrementCount: function () {
      count++;
    }
  },
  template: "\n<button v-on:click=\"incrementCount()\">You clicked me {{ count }} times.</button>\n"
});
demo.button2 = Vue.component('button-counter2', {
  data: function () {
    return {
      count: 0
    }
  },
  template: '<button v-on:click="count++">You clicked me {{ count }} times.</button>'
})
demo.button3 = Vue.component( {
    el: "#button-counter3",
    data: function () {
        return {
                    count: 0
               }
    },
    methods: {
        incrementCount: function () {
            count++;
        }
    }
})