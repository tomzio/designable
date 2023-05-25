import React, { useEffect } from 'react'
import { Space, Button, Radio, message } from 'antd'
// import { GithubOutlined } from '@ant-design/icons'
import { useDesigner, TextWidget } from '@designable/react'
import { GlobalRegistry } from '@designable/core'
import { observer } from '@formily/react'
import { saveSchema, publishSchema } from '../service'
import { LoginForm } from './LoginDialog'
import { FormDialog } from '@formily/antd'
import { useAuth } from '../useAuth'

export const ActionsWidget = observer<{ schemaMode: string }>(({ schemaMode }) => {
  const designer = useDesigner()
  const { quickLogin, logout, isAuthenticated } = useAuth()

  const supportLocales = ['zh-cn', 'en-us', 'ko-kr']
  useEffect(() => {
    if (!supportLocales.includes(GlobalRegistry.getDesignerLanguage())) {
      GlobalRegistry.setDesignerLanguage('zh-cn')
    }
  }, [])
  return (
    <Space style={{ marginRight: 10 }}>
      {/* <Button href="https://designable-fusion.formilyjs.org">
        Alibaba Fusion
      </Button> */}
      {isAuthenticated ? (
        <Button onClick={(e) => logout()}>注销</Button>
      ) : (
        <Button
          onClick={() => {
            const dialog = FormDialog('登录', LoginForm)
            dialog
              .forOpen((payload, next) => {
                next({
                  initialValues: {
                    entityMstrId: 1,
                    language: 'zh_CN',
                    locationMstrId: 0,
                    roleMstrId: 0,
                    userMstrId: 0,
                  },
                })
              })
              .forConfirm((payload, next) => {
                quickLogin(payload.values).then((data) => {
                  console.log('quickLogin: ', data)
                  next(data)
                })
              })
              .forCancel((payload, next) => {
                console.log(payload)
                next(payload)
              })
              .open()
              .then(console.log)
          }}
        >
          <TextWidget>登录</TextWidget>
        </Button>
      )}

      <Radio.Group
        value={GlobalRegistry.getDesignerLanguage()}
        optionType="button"
        options={[
          { label: 'English', value: 'en-us' },
          { label: '简体中文', value: 'zh-cn' },
          // { label: '한국어', value: 'ko-kr' },
        ]}
        onChange={(e) => {
          GlobalRegistry.setDesignerLanguage(e.target.value)
        }}
      />
      {/* <Button href="https://github.com/alibaba/designable" target="_blank">
        <GithubOutlined />
        Github
      </Button> */}
      <Button
        onClick={() => {
          saveSchema(designer, schemaMode)
          message.success('Save Success')
        }}
      >
        <TextWidget>Save</TextWidget>
      </Button>
      <Button
        type="primary"
        disabled={!isAuthenticated}
        onClick={() => {
          publishSchema(designer, schemaMode)
        }}
      >
        <TextWidget>Publish</TextWidget>
      </Button>
    </Space>
  )
})
