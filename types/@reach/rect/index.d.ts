// Type definitions for @reach/rect 0.1.2
// Project: https://github.com/reach/reach-ui/tree/master/packages/rect
// Definitions by: Kingdaro <https://github.com/ValentinH>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 3.2

import { ReactNode, ReactElement, Ref } from 'react'

export interface RectContent<RefType = any> {
  ref: Ref<RefType>
  rect?: {
    x: number
    y: number
    width: number
    height: number
    top: number
    right: number
    bottom: number
    left: number
  }
}

export interface RectProps {
  children(content: RectContent): ReactNode
}

export default function Rect(props: RectProps): ReactElement<any>
