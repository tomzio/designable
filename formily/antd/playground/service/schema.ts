import { Engine } from '@designable/core'
import { transformToSchema, transformToTreeNode } from '@designable/formily-transformer'
import { message } from 'antd'
import { post } from '@webhis/shared/es/utils/request'

export const saveSchema = (designer: Engine, schemaMode: any) => {
  const jsonschema = JSON.stringify(transformToSchema(designer.getCurrentTree()))
  const key = schemaMode ? `${schemaMode}-formily-schema` : 'formily-schema'
  localStorage.setItem(key, jsonschema)
}

export const publishSchema = (designer: Engine, schemaMode: any) => {
  saveSchema(designer, schemaMode)

  const jsonschema = JSON.stringify(transformToSchema(designer.getCurrentTree()))
  const data = {
    wpbMode: schemaMode,
    wpbSchema: `${jsonschema}`,
  }

  post('/his/app/wpbschema/save', data)
    .then((res) => {
      message.success('Publish Success')
    })
    .catch((error) => {
      console.log('save schema', error)
      message.error('Publish Error', error.message)
    })

  // const sessionToken = sessionStorage.getItem('sessionToken')
  // fetch('/his/app/wpbschema/save', {
  //   method: 'POST',
  //   headers: {
  //     'Content-Type': 'application/json',
  //     sessionToken: `${sessionToken}`,
  //   },
  //   body: JSON.stringify(data),
  // }).then(res => {
  //   console.log('save schema', res);
  //   if (res.ok) {
  //     message.success('Publish Success')
  //   } else {
  //     message.error(`${res.status} ${res.statusText}`);
  //   }
  // }).catch(error => {
  //   console.log('save schema', error);
  //   message.error('Publish Error', error.message);
  // })
}

export const loadInitialSchema = (designer: Engine, schemaMode) => {
  try {
    const key = schemaMode ? `${schemaMode}-formily-schema` : 'formily-schema'
    const schema: any = localStorage.getItem(key)
    designer.setCurrentTree(transformToTreeNode(JSON.parse(schema)))
  } catch {}
}
