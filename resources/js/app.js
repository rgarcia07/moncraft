import './bootstrap';

import { createApp } from 'vue';

import App from './App.vue';

createApp(App).mount('#app');

import axios from 'axios';

axios.defaults.headers.common['X-Requested-With'] = 'XMLHttpRequest';
window.axios = axios;