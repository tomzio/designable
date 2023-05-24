import React from 'react'
import { createIcon } from '@brickio/ui'
import { createBehavior, createResource } from '@designable/core'
import { DnFC } from '@designable/react'
import { createVoidFieldSchema } from '../Field'
import { AllSchemas } from '../../schemas'
import { AllLocales } from '../../locales'

// import { useTreeNode } from '@designable/react'
import { observable } from '@formily/reactive'

const Icon = createIcon({
  scriptUrl: '/kticon/font_1731772_jdm51oxie2.js',
  prefix: 'kticon',
})

export const KtIcon: DnFC<React.ComponentProps<any>> = observable((props) => {
  // const node = useTreeNode()
  // console.log('node', node)
  return <Icon type="kticon-calendar" {...props} />
})

KtIcon.Behavior = createBehavior({
  name: 'KtIcon',
  extends: ['Field'],
  selector: (node) => node.props['x-component'] === 'KtIcon',
  designerProps: {
    propsSchema: createVoidFieldSchema(AllSchemas.Icon),
  },
  designerLocales: AllLocales.Icon,
})

KtIcon.Resource = createResource({
  icon: 'IconSource',
  elements: [
    {
      componentName: 'Field',
      props: {
        type: 'void',
        // title: 'Icon',
        // 'x-decorator': 'FormItem',
        'x-component': 'KtIcon',
      },
    },
  ],
})
