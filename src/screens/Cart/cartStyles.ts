import { css } from '@emotion/react'
import { mediaQueris, sideBarWidht } from 'modules/styleVariables'

export const cartStyle = css({
  display: 'flex',
  padding: '8px 0',
})

export const cartSummStyle = css({
  width: sideBarWidht,
})

export const cartProductsStyle = css({
  width: `calc(100% - ${sideBarWidht}px)`,
  display: 'grid',
  gridTemplateColumns: '1fr',
  gap: 8,
  [mediaQueris[0]]: {
    gridTemplateColumns: '1fr 1fr',
  },
})
