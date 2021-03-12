import Vue from 'vue'
import moment from 'moment';

moment.locale('es');

Vue.filter('reverse', function (value) {
  // slice to make a copy of array, then reverse the copy
  return value.slice().reverse()
})

Vue.filter('formatDateToTime', function (value) {
  if (value) {
    return moment(String(value)).fromNow()
  }
})

Vue.filter('formatDate', function (value) {
  return moment(value).format('LL');
})

export function formatNumber (value) {
  return Number(value).toLocaleString()
}
