import React from 'react'
import { usePrefix, usePosition } from '../hooks'
import { Layout } from '../containers'
import cls from 'classnames'
export interface IStudioPanelProps {
  style?: React.CSSProperties
  className?: string
  logo?: React.ReactNode
  switchSchema?: React.ReactNode
  actions?: React.ReactNode
  prefixCls?: string
  theme?: string
  position?: React.ComponentProps<typeof Layout>['position']
}

const StudioPanelInternal: React.FC<IStudioPanelProps> = ({ logo, switchSchema, actions, ...props }) => {
  const prefix = usePrefix('main-panel')
  const position = usePosition()
  const classNameBase = cls('root', position, props.className)
  if (logo || actions) {
    return (
      <div {...props} className={cls(`${prefix}-container`, classNameBase)}>
        <div className={prefix + '-header'}>
          <div style={{ display: 'flex', alignItems: 'center' }}>
            <div className={prefix + '-header-logo'}>{logo}</div>
            {switchSchema}
          </div>
          <div className={prefix + '-header-actions'}>{actions}</div>
        </div>
        <div className={prefix}>{props.children}</div>
      </div>
    )
  }
  return (
    <div {...props} className={cls(prefix, classNameBase)}>
      {props.children}
    </div>
  )
}

export const StudioPanel: React.FC<IStudioPanelProps> = (props) => {
  return (
    <Layout theme={props.theme} prefixCls={props.prefixCls} position={props.position}>
      <StudioPanelInternal {...props} />
    </Layout>
  )
}
