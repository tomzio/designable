import React from 'react'
import { Field } from '@formily/react'
import { FormLayout, FormItem, Input } from '@formily/antd'

export const AuthForm = () => {
  return (
    <FormLayout labelCol={6} wrapperCol={10}>
      <Field name="username" required title="用户名" decorator={[FormItem]} component={[Input]} />
      <Field name="password" required title="密码" decorator={[FormItem]} component={[Input]} />
    </FormLayout>
  )
}

export const LoginForm = () => {
  return (
    <FormLayout labelCol={6} wrapperCol={10}>
      <Field name="entityMstrId" required title="医院" decorator={[FormItem]} component={[Input]} />
      <Field name="language" required title="语言" decorator={[FormItem]} component={[Input]} />
      <Field name="locationMstrId" required title="登陆地点" decorator={[FormItem]} component={[Input]} />
      <Field name="roleMstrId" required title="角色" decorator={[FormItem]} component={[Input]} />
      <Field name="userMstrId" required title="用户" decorator={[FormItem]} component={[Input]} />
    </FormLayout>
  )
}
