import { App } from 'vue'
import VxePulldownComponent from './src/pulldown'
import { dynamicApp } from '../dynamics'

export const Pulldown = Object.assign(VxePulldownComponent, {
  install: function (app: App) {
    dynamicApp.component(VxePulldownComponent.name, VxePulldownComponent)
    app.component(VxePulldownComponent.name, VxePulldownComponent)
  }
})

export default Pulldown
