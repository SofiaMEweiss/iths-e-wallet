import Vue from "vue";
import App from "./App.vue";
import router from "./router";

Vue.config.productionTip = false;

new Vue({
    router,

    data: function() {
        return {
            activeCardIndex: -1,

            cards: [{
                id: "",
                cardholder: "",
                vendor: "",
                cardnumber: "",
                validMonth: "",
                validYear: ""
            }],

        }
    },

    render: h => h(App)
})

.$mount("#app");