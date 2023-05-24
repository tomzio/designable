import React from 'react'
import { createBehavior, createResource } from '@designable/core'
import { createVoidFieldSchema } from '../Field'
import { AllSchemas } from '../../schemas'
import { AllLocales } from '../../locales'
import cls from 'classnames'
import './styles.less'

import FormilyTextField from '@webhis/shared/lib/ui/wpb/TextField'

export const AllergyTextField = (props) => {
  return (
    <FormilyTextField
      {...props}
      className={cls(props.className, 'dn-text')}
      data-content-editable="x-component-props.placeholder"
    />
  )
}

AllergyTextField.Behavior = createBehavior({
  name: 'AllergyTextField',
  extends: ['Field'],
  selector: (node) => node.props['x-component'] === 'AllergyTextField',
  designerProps: {
    propsSchema: createVoidFieldSchema(AllSchemas.TextField),
  },
  designerLocales: AllLocales.extendTextFieldLocales({ title: { 'zh-CN': '过敏信息', 'en-US': 'Allergy Info' } }),
})

AllergyTextField.Resource = createResource({
  icon: 'TextSource',
  elements: [
    {
      componentName: 'Field',
      props: {
        type: 'string',
        'x-component': 'AllergyTextField',
      },
    },
  ],
})
