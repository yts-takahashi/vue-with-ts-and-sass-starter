import Vue from './../../node_modules/vue/dist/vue'
import './../scss/main.scss'

const app = new Vue({
    el: '#app',
    data: {
        message: 'こんにちは！'
    },
    methods: {
        onClick(): void {
            alert('アラートです！');
        }
    }
});