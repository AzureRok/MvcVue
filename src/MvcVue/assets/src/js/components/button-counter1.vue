<template>
    <div>
        <button v-on:click="incrementCount()">You clicked me {{ count }} times!</button>
        <br />
        <button v-on:click="incrementCount2()">Increment button 3 from this component</button>
    </div>

</template>
<script>
    export default {
        //props: ["test"],
        data: function () {
            return {
                count: 0
            }
        },
        methods: {
            incrementCount: function () {
                var self = this;
                self.count++;
            },
            incrementCount2: function () {
                demo.buttonCount3.incrementCount();
            }
        }
    }
</script>
