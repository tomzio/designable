import { ISchema } from '@formily/react'

export const TextField: ISchema = {
  type: 'object',
  properties: {
    placeholder: {
      type: 'string',
      'x-decorator': 'FormItem',
      'x-component': 'Input.TextArea',
    },
    tooltip: {
      type: 'string',
      'x-decorator': 'FormItem',
      'x-component': 'ValueInput',
      'x-component-props': {
        include: ['EXPRESSION'],
      },
    },
    copyable: {
      type: 'boolean',
      'x-decorator': 'FormItem',
      'x-component': 'Switch',
      'x-component-props': {
        defaultChecked: true,
      },
    },
    color: {
      type: 'string',
      'x-decorator': 'FormItem',
      'x-component': 'ValueInput',
      'x-component-props': {
        include: ['EXPRESSION'],
      },
    },
    icon: {
      type: 'string',
      'x-decorator': 'FormItem',
      'x-component': 'Input',
    },
    iconSize: {
      type: 'number',
      'x-decorator': 'FormItem',
      'x-component': 'NumberPicker',
    },
  },
}
