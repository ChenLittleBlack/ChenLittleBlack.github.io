import { App } from 'vue'
import VxeCheckboxGroupComponent from '../checkbox/src/group'
import { dynamicApp } from '../dynamics'

export const CheckboxGroup = Object.assign(VxeCheckboxGroupComponent, {
  install (app: App) {
    dynamicApp.component(VxeCheckboxGroupComponent.name, VxeCheckboxGroupComponent)
    app.component(VxeCheckboxGroupComponent.name, VxeCheckboxGroupComponent)
  }
})

export default CheckboxGroup
