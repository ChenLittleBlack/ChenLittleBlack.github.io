import { defineComponent, h, computed, inject, PropType } from 'vue'
import XEUtils from 'xe-utils'
import { getFuncText } from '../../tools/utils'
import GlobalConfig from '../../v-x-e-table/src/conf'
import { useSize } from '../../hooks/size'

import { VxeCheckboxConstructor, VxeCheckboxGroupConstructor, VxeCheckboxEmits, VxeCheckboxGroupPrivateMethods, CheckboxMethods, VxeCheckboxPropTypes } from '../../../types/all'

export default defineComponent({
  name: 'VxeCheckbox',
  props: {
    modelValue: [String, Number, Boolean] as PropType<VxeCheckboxPropTypes.ModelValue>,
    label: { type: [String, Number] as PropType<VxeCheckboxPropTypes.Label>, default: null },
    indeterminate: Boolean as PropType<VxeCheckboxPropTypes.Indeterminate>,
    title: [String, Number] as PropType<VxeCheckboxPropTypes.Title>,
    checkedValue: { type: [String, Number, Boolean] as PropType<VxeCheckboxPropTypes.CheckedValue>, default: true },
    uncheckedValue: { type: [String, Number, Boolean] as PropType<VxeCheckboxPropTypes.UncheckedValue>, default: false },
    content: [String, Number] as PropType<VxeCheckboxPropTypes.Content>,
    disabled: Boolean as PropType<VxeCheckboxPropTypes.Disabled>,
    size: { type: String as PropType<VxeCheckboxPropTypes.Size>, default: () => GlobalConfig.checkbox.size || GlobalConfig.size }
  },
  emits: [
    'update:modelValue',
    'change'
  ] as VxeCheckboxEmits,
  setup (props, context) {
    const { slots, emit } = context

    const xID = XEUtils.uniqueId()

    const $xecheckbox = {
      xID,
      props,
      context
    } as VxeCheckboxConstructor

    let checkboxMethods = {} as CheckboxMethods

    const computeSize = useSize(props)

    const $xecheckboxgroup = inject('$xecheckboxgroup', null as (VxeCheckboxGroupConstructor & VxeCheckboxGroupPrivateMethods) | null)

    const computeDisabled = computed(() => {
      return props.disabled || ($xecheckboxgroup && $xecheckboxgroup.props.disabled)
    })

    const computeChecked = computed(() => {
      return $xecheckboxgroup ? XEUtils.includes($xecheckboxgroup.props.modelValue, props.label) : props.modelValue === props.checkedValue
    })

    const changeEvent = (evnt: Event & { target: { checked: boolean } }) => {
      const { checkedValue, uncheckedValue } = props
      const isDisabled = computeDisabled.value
      if (!isDisabled) {
        const checked = evnt.target.checked
        const value = checked ? checkedValue : uncheckedValue
        const params = { checked, value, label: props.label }
        if ($xecheckboxgroup) {
          $xecheckboxgroup.handleChecked(params, evnt)
        } else {
          emit('update:modelValue', value)
          checkboxMethods.dispatchEvent('change', params, evnt)
        }
      }
    }

    checkboxMethods = {
      dispatchEvent (type, params, evnt) {
        emit(type, Object.assign({ $checkbox: $xecheckbox, $event: evnt }, params))
      }
    }

    Object.assign($xecheckbox, checkboxMethods)

    const renderVN = () => {
      const vSize = computeSize.value
      const isDisabled = computeDisabled.value
      return h('label', {
        class: ['vxe-checkbox', {
          [`size--${vSize}`]: vSize,
          'is--indeterminate': props.indeterminate,
          'is--disabled': isDisabled
        }],
        title: props.title
      }, [
        h('input', {
          class: 'vxe-checkbox--input',
          type: 'checkbox',
          disabled: isDisabled,
          checked: computeChecked.value,
          onChange: changeEvent
        }),
        h('span', {
          class: 'vxe-checkbox--icon'
        }),
        h('span', {
          class: 'vxe-checkbox--label'
        }, slots.default ? slots.default({}) : getFuncText(props.content))
      ])
    }

    $xecheckbox.renderVN = renderVN

    return $xecheckbox
  },
  render () {
    return this.renderVN()
  }
})
