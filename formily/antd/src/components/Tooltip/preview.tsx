import React from 'react'
import { createBehavior, createResource } from '@designable/core'
import { DnFC } from '@designable/react'
import { createVoidFieldSchema } from '../Field'
import { withContainer } from '../../common/Container'
import { AllSchemas } from '../../schemas'
import { AllLocales } from '../../locales'
import { Tooltip as AntdTooltip } from 'antd'
import type { TooltipProps } from 'antd/es/tooltip'

export const FormilyTooltip: React.FC<React.PropsWithChildren<TooltipProps>> = (props) => {
  // const layout = useFormLayout()
  return React.createElement(AntdTooltip, {
    // title: props.title ?? layout?.spaceGap,
    ...props,
  })
}

export const Tooltip: DnFC<React.ComponentProps<typeof FormilyTooltip>> = withContainer(FormilyTooltip)

Tooltip.Behavior = createBehavior({
  name: 'Tooltip',
  extends: ['Field'],
  selector: (node) => node.props['x-component'] === 'Tooltip',
  designerProps: {
    droppable: true,
    inlineChildrenLayout: true,
    propsSchema: createVoidFieldSchema(AllSchemas.Tooltip),
  },
  designerLocales: AllLocales.Tooltip,
})

Tooltip.Resource = createResource({
  icon: 'SpaceSource',
  elements: [
    {
      componentName: 'Field',
      props: {
        type: 'void',
        'x-component': 'Tooltip',
      },
    },
  ],
})
