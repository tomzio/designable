import { ISchema } from '@formily/react'

export const Icon: ISchema = {
  type: 'object',
  properties: {
    type: {
      type: 'string',
      'x-decorator': 'FormItem',
      'x-component': 'Input',
      'x-component-props': {
        defaultValue: 'calendar',
      },
    },
    size: {
      type: 'number',
      'x-decorator': 'FormItem',
      'x-component': 'NumberPicker',
      'x-component-props': {
        defaultValue: 16,
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
  },
}
