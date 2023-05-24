import React from 'react'
import { createBehavior, createResource } from '@designable/core'
import { createVoidFieldSchema } from '../Field'
import { AllSchemas } from '../../schemas'
import { AllLocales } from '../../locales'
import cls from 'classnames'
import './styles.less'

import FormilyTextField from '@webhis/shared/lib/ui/wpb/TextField'

export const ChargeTextField = (props) => {
  return (
    <FormilyTextField
      {...props}
      className={cls(props.className, 'dn-text')}
      data-content-editable="x-component-props.placeholder"
    />
  )
}

ChargeTextField.Behavior = createBehavior({
  name: 'ChargeTextField',
  extends: ['Field'],
  selector: (node) => node.props['x-component'] === 'ChargeTextField',
  designerProps: {
    propsSchema: createVoidFieldSchema(AllSchemas.TextField),
  },
  designerLocales: AllLocales.extendTextFieldLocales({ title: { 'zh-CN': '费用信息', 'en-US': 'Charge Info' } }),
})

ChargeTextField.Resource = createResource({
  icon: 'TextSource',
  elements: [
    {
      componentName: 'Field',
      props: {
        type: 'string',
        'x-component': 'ChargeTextField',
      },
    },
  ],
})
