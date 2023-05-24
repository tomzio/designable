import { clone } from '@formily/shared'

export const TextField = {
  'zh-CN': {
    title: '文本字段',
    settings: {
      'x-component-props': {
        placeholder: '文本占位',
        tooltip: 'Hint提示信息',
        copyable: 'Hint拷贝',
        color: '文本颜色',
        icon: '图标前缀',
        iconSize: '图标大小',
      },
    },
  },
  'en-US': {
    title: 'TextField',
    settings: {
      'x-component-props': {
        placeholder: 'Placeholder',
        tooltip: 'Hint Tooltip',
        copyable: 'Hint Copy',
        color: 'Color',
        icon: 'Icon',
        iconSize: 'Icon Size',
      },
    },
  },
  'ko-KR': {
    title: '텍스트',
    settings: {
      'x-component-props': {
        placeholder: '텍스트 내용',
        mode: {
          title: '텍스트 모드',
          dataSource: ['H1', 'H2', 'H3', 'Paragraph', 'Normal'],
        },
      },
    },
  },
}

/**
 * 扩展TextField国际化
 * @param param
 * @returns
 */
export const extendTextFieldLocales = ({ title = { 'zh-CN': '', 'en-US': '' } }) => {
  const newTextField = clone(TextField)
  if (typeof title === 'object') {
    newTextField['zh-CN'].title = title['zh-CN']
    newTextField['en-US'].title = title['en-US']
  } else if (typeof title === 'string') {
    newTextField['zh-CN'].title = title
  }
  return newTextField
}
