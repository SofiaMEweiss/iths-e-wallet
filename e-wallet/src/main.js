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
                cardholder: "FIRSTNAME LASTNAME",
                vendor: "",
                cardnumber: "XXXX XXXX XXXX XXXX",
                validMonth: "00",
                validYear: "00"
            }],

        }
    },
    render: h => h(App)
}).$mount("#app");