import { css } from '@emotion/react'
import { Colors } from 'modules/colors'
import { sideBarWidht } from 'modules/styleVariables'

export const appStyle = css({
  maxWidth: 700,
  margin: '0 auto',
  padding: '0 15px',
  minHeight: '100%',
})

export const headerStyle = css({
  padding: '8px 0',
  borderBottom: `1px solid ${Colors.FOREST1}`,
  display: 'flex',
  alignItems: 'center',
})

export const headerLogoStyle = css({
  width: `${sideBarWidht}px`,
  color: `${Colors.FOREST1}`,
})

export const headerSearchStyle = css({
  width: `calc(100% - ${sideBarWidht}px)`,
  display: 'grid',
  columnGap: 8,
  gridAutoFlow: 'column',
  justifyContent: 'end',
})
