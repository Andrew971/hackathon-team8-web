import React from 'react'

export type Content = {
  path?: string
  activePath?: string
  text?: string
  icon?: React.ReactElement
  hidden?: boolean
  sub?: ContentObject
  component?: React.ComponentType
  onClick?: (event: any, props?: object) => void
}

export interface ContentObject {
  [key: string]: Content
}

export interface HistoryProp {
  push: (path:string, state?:object) => void
}

export interface Location {
  key: string, // not with HashHistory!
  pathname: string,
  search: string,
  hash: string,
  state: any
}