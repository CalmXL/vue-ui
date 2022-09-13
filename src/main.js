import { createApp } from 'vue'
import App from './App.vue'

import JsppUI from './libs/jspp-ui/components';
// import Transfer from './libs/jspp-ui/components/Transfer';

createApp(App).use(JsppUI).mount('#app');
