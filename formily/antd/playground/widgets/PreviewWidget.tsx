import React, { useMemo } from 'react'
import { createForm } from '@formily/core'
import { createSchemaField } from '@formily/react'
import {
  Form,
  FormItem,
  DatePicker,
  Checkbox,
  Cascader,
  Editable,
  Input,
  NumberPicker,
  Switch,
  Password,
  PreviewText,
  Radio,
  Reset,
  Select,
  Space,
  Submit,
  TimePicker,
  Transfer,
  TreeSelect,
  Upload,
  FormGrid,
  FormLayout,
  FormTab,
  FormCollapse,
  ArrayTable,
  ArrayCards,
} from '@formily/antd'
import KtIcon from '@webhis/shared/es/ui/icon'
import TextField from '@webhis/shared/es/ui/wpb/TextField'
import { Card, Slider, Rate, Tag } from 'antd'
import { TreeNode } from '@designable/core'
import { transformToSchema } from '@designable/formily-transformer'

const Text: React.FC<{
  value?: string
  content?: string
  mode?: 'normal' | 'h1' | 'h2' | 'h3' | 'p'
}> = ({ value, mode, content, ...props }) => {
  const tagName = mode === 'normal' || !mode ? 'div' : mode
  return React.createElement(tagName, props, value || content)
}

const GestionalTextField = (props) => {
  return (
    <TextField
      {...props}
      value={props.placeholder}
      copyable={false}
      tooltip="自定义孕周占位,实际效果请在webhis中查看"
    />
  )
}

const ChargeTextField = (props) => {
  return (
    <TextField
      {...props}
      value={props.placeholder}
      copyable={false}
      tooltip="自定义费用占位,实际效果请在webhis中查看"
    />
  )
}

const MedicalAlertTextField = (props) => {
  return (
    <TextField
      {...props}
      value={props.placeholder}
      copyable={false}
      tooltip="自定义医疗禁忌占位,实际效果请在webhis中查看"
    />
  )
}

const AllergyTextField = (props) => {
  return (
    <TextField
      {...props}
      value={props.placeholder}
      copyable={false}
      tooltip="自定义过敏信息占位,实际效果请在webhis中查看"
    />
  )
}

const PackageTextField = (props) => {
  return (
    <TextField
      {...props}
      value={props.placeholder}
      copyable={false}
      tooltip="自定义患者套餐占位,实际效果请在webhis中查看"
    />
  )
}

const SchemaField = createSchemaField({
  components: {
    Space,
    FormGrid,
    FormLayout,
    FormTab,
    FormCollapse,
    ArrayTable,
    ArrayCards,
    FormItem,
    DatePicker,
    Checkbox,
    Cascader,
    Editable,
    Input,
    Text,
    TextField,
    GestionalTextField: GestionalTextField,
    PackageTextField: PackageTextField,
    ChargeTextField,
    MedicalAlertTextField,
    AllergyTextField,
    NumberPicker,
    Switch,
    KtIcon,
    Password,
    PreviewText,
    Radio,
    Reset,
    Select,
    Submit,
    TimePicker,
    Transfer,
    TreeSelect,
    Upload,
    Card,
    Slider,
    Rate,
  },
})

export interface IPreviewWidgetProps {
  tree: TreeNode
}

export const PreviewWidget: React.FC<IPreviewWidgetProps> = (props) => {
  const form = useMemo(() => createForm(), [])
  const { form: formProps, schema } = transformToSchema(props.tree)
  return (
    <Form {...formProps} form={form}>
      <SchemaField schema={schema} />
    </Form>
  )
}
