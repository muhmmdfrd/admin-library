import {
    createApp
} from 'vue'

// css inject
import "bootstrap/dist/css/bootstrap.min.css"
import "./assets/css/style.css"
import "./assets/css/custom.css"
import "./assets/css/components.css"

// js inject
import "jquery/dist/jquery"
import "popper.js"
import "bootstrap/dist/js/bootstrap.min.js"
import "jquery.nicescroll"
import "./assets/js/stisla"
import "./assets/js/scripts"
import moment from "moment";
import lodash from "lodash";

window.moment = moment;
window._ = lodash;

// router
import Router from './routes/Router';

// main component
import App from './App.vue'


createApp(App).use(Router).mount('#app')