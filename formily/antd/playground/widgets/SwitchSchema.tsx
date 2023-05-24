import { useDesigner } from '@designable/react'
import { Select } from '@formily/antd'
import React, { useEffect, useState } from 'react'
import { transformToSchema, transformToTreeNode } from '@designable/formily-transformer'
import { loadInitialSchema } from '../service'
import { observer } from '@formily/react'
import { isEmpty } from '@formily/shared'
import { useAuth } from '../useAuth'
import { message } from 'antd'

export interface ISchemaData {
  id?: number
  wpbMode?: string
  wpbSchema?: string
  desc?: string
}

const schemaOptions = [
  { label: '患者信息WPB', value: 'PATIENT' },
  { label: '门诊就诊WPB', value: 'OPT' },
  { label: '住院就诊WPB', value: 'IPT' },
]

function sleep(time) {
  return new Promise((resolve, reject) => {
    setTimeout(resolve, time)
  })
}

const SwitchSchema = observer<{ schemaMode: string; setSchemaMode: Function }>(({ schemaMode, setSchemaMode }) => {
  const designer = useDesigner()
  const { accessToken, isAuthenticated } = useAuth()
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    if (isAuthenticated) {
      const _schemaMode = schemaMode || 'PATIENT'
      setSchemaMode(_schemaMode)
      handleChangeSchema(_schemaMode)
    } else {
      setSchemaMode(null)
      loadInitialSchema(designer, null)
    }
  }, [isAuthenticated])

  const handleChangeSchema = (mode) => {
    if (isAuthenticated) {
      const sessionToken = accessToken || ''
      // get(`/his/app/wpbschema/getschema?wpbMode=${mode}`)
      fetch(`/his/app/wpbschema/getschema?wpbMode=${mode}`, {
        method: 'GET',
        credentials: 'include',
        headers: { sessionToken },
      })
        .then((response) => response.json())
        .then(({ data }) => {
          // console.log('getschema', data)
          if (data?.wpbSchema && !isEmpty(data?.wpbSchema)) {
            const currentSchema = JSON.parse(data?.wpbSchema)
            try {
              console.log(`加载 ${mode} schema`, currentSchema)
              designer.setCurrentTree(transformToTreeNode(currentSchema))
              setSchemaMode(mode)
            } catch (error) {
              console.error('加载schema出错!', error)
            }
          }
        })
        .catch((err) => {
          message.error(`加载schema出错! ${err?.message}`)
          console.log(err)
        })
    } else {
      setLoading(true)
      sleep(1000)
      loadInitialSchema(designer, schemaMode)
      setLoading(false)
    }
  }

  const handleClearSchema = () => {
    console.log('handleClearSchema.')
    designer.setCurrentTree(transformToTreeNode({}))
  }

  return (
    <Select
      id="switchSchema"
      style={{ width: 200, marginLeft: 16 }}
      options={schemaOptions}
      value={schemaMode}
      loading={loading}
      onChange={handleChangeSchema}
      disabled={!isAuthenticated}
      // onClear={handleClearSchema}
      // allowClear
    />
  )
})

export default SwitchSchema
