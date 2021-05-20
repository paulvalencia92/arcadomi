import _ from 'lodash'
import Vue from 'vue'

const components = require.context('../components/Global/')
_.forEach(components.keys(), (fileName) => {
    const componentConfig = components(fileName)
    const componentName = fileName.split('/').pop().split('.')[0]
    Vue.component(componentName, componentConfig.default || componentConfig)
})

Vue.component('iq-card', require('../components/core/iq-card').default)
Vue.component('Progressbar', require('../components/core/Progressbar').default)

Vue.component('card-errors', require('../components/Errors/CardErrors').default)
