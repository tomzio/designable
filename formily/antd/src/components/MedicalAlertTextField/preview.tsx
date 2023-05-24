import React from 'react'
import { createBehavior, createResource } from '@designable/core'
import { createVoidFieldSchema } from '../Field'
import { AllSchemas } from '../../schemas'
import { AllLocales } from '../../locales'
import cls from 'classnames'
import './styles.less'

import FormilyTextField from '@webhis/shared/lib/ui/wpb/TextField'

export const MedicalAlertTextField = (props) => {
  return (
    <FormilyTextField
      {...props}
      className={cls(props.className, 'dn-text')}
      data-content-editable="x-component-props.placeholder"
    />
  )
}

MedicalAlertTextField.Behavior = createBehavior({
  name: 'MedicalAlertTextField',
  extends: ['Field'],
  selector: (node) => node.props['x-component'] === 'MedicalAlertTextField',
  designerProps: {
    propsSchema: createVoidFieldSchema(AllSchemas.TextField),
  },
  designerLocales: AllLocales.extendTextFieldLocales({ title: { 'zh-CN': '医疗禁忌', 'en-US': 'Medical Alert' } }),
})

MedicalAlertTextField.Resource = createResource({
  icon: 'TextSource',
  elements: [
    {
      componentName: 'Field',
      props: {
        type: 'string',
        'x-component': 'MedicalAlertTextField',
      },
    },
  ],
})
