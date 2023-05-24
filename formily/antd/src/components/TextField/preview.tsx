import React from 'react'
import { createBehavior, createResource } from '@designable/core'
import { createVoidFieldSchema } from '../Field'
import { AllSchemas } from '../../schemas'
import { AllLocales } from '../../locales'
import cls from 'classnames'
import './styles.less'
import FormilyTextField from '@webhis/shared/lib/ui/wpb/TextField'

export const TextField = (props) => {
  return (
    <FormilyTextField
      {...props}
      className={cls(props.className, 'dn-text', 'text-ellipsis')}
      data-content-editable="x-component-props.placeholder"
    />
  )
}

TextField.Behavior = createBehavior({
  name: 'TextField',
  extends: ['Field'],
  selector: (node) => node.props['x-component'] === 'TextField',
  designerProps: {
    propsSchema: createVoidFieldSchema(AllSchemas.TextField),
  },
  designerLocales: AllLocales.TextField,
})

TextField.Resource = createResource({
  icon: 'TextSource',
  elements: [
    {
      componentName: 'Field',
      props: {
        type: 'string',
        'x-component': 'TextField',
      },
    },
  ],
})
