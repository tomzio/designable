import React from 'react'
import { createBehavior, createResource } from '@designable/core'
import { createVoidFieldSchema } from '../Field'
import { AllSchemas } from '../../schemas'
import { AllLocales } from '../../locales'
import cls from 'classnames'
import './styles.less'

import FormilyTextField from '@webhis/shared/lib/ui/wpb/TextField'

export const GestionalTextField = (props) => {
  return (
    <FormilyTextField
      {...props}
      className={cls(props.className, 'dn-text')}
      data-content-editable="x-component-props.placeholder"
    />
  )
}

GestionalTextField.Behavior = createBehavior({
  name: 'GestionalTextField',
  extends: ['Field'],
  selector: (node) => node.props['x-component'] === 'GestionalTextField',
  designerProps: {
    propsSchema: createVoidFieldSchema(AllSchemas.TextField),
  },
  designerLocales: AllLocales.extendTextFieldLocales({ title: { 'zh-CN': '孕周文本', 'en-US': 'Gestional Text' } }),
})

GestionalTextField.Resource = createResource({
  icon: 'TextSource',
  elements: [
    {
      componentName: 'Field',
      props: {
        type: 'string',
        'x-component': 'GestionalTextField',
      },
    },
  ],
})
