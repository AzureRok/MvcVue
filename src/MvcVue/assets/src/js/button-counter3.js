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