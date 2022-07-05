import { css } from '@emotion/react'
import { mediaQueris, sideBarWidht } from 'modules/styleVariables'

export const bodyStyle = css({
  display: 'flex',
  alignItems: 'flex-start',
})

export const bodyLeftStyle = css({
  width: `${sideBarWidht}px`,
  padding: '8px 8px 8px 0',
  display: 'grid',
  rowGap: 8,
})

export const bodyRightStyle = css({
  width: `calc(100% - ${sideBarWidht}px)`,
  padding: '8px 0',
})

export const bodySearchStyle = css({
  marginBottom: 8,
})

export const bodySummStyle = css({
  marginBottom: 8,
})

export const bodyProductsStyle = css({
  display: 'grid',
  gridTemplateColumns: '1fr',
  gap: '8px',
  [mediaQueris[0]]: {
    gridTemplateColumns: '1fr 1fr',
  },
})
