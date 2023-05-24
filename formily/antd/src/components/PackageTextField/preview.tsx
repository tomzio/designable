import React from 'react'
import { createBehavior, createResource } from '@designable/core'
import { createVoidFieldSchema } from '../Field'
import { AllSchemas } from '../../schemas'
import { AllLocales } from '../../locales'
import cls from 'classnames'
import './styles.less'
import FormilyTextField from '@webhis/shared/lib/ui/wpb/TextField'

export const PackageTextField = (props) => {
  return (
    <FormilyTextField
      {...props}
      className={cls(props.className, 'dn-text')}
      data-content-editable="x-component-props.placeholder"
    />
  )
}

PackageTextField.Behavior = createBehavior({
  name: 'PackageTextField',
  extends: ['Field'],
  selector: (node) => node.props['x-component'] === 'PackageTextField',
  designerProps: {
    propsSchema: createVoidFieldSchema(AllSchemas.TextField),
  },
  designerLocales: AllLocales.extendTextFieldLocales({ title: { 'zh-CN': '患者套餐', 'en-US': 'Patient Package' } }),
})

PackageTextField.Resource = createResource({
  icon: 'TextSource',
  elements: [
    {
      componentName: 'Field',
      props: {
        type: 'string',
        'x-component': 'PackageTextField',
      },
    },
  ],
})
