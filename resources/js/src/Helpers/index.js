import Vue from 'vue';
window.clone = function (obj) {
    return JSON.parse(JSON.stringify(obj))
}
