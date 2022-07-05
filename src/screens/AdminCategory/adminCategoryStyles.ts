import { css } from '@emotion/react'
import { Colors } from 'modules/colors'
import { sideBarWidht } from 'modules/styleVariables'

export const adminStyle = css({
  display: 'flex',
  padding: '8px 0',
})

export const adminLeftStyle = css({
  width: sideBarWidht,
  paddingRight: 8,
  display: 'grid',
  rowGap: 9,
  gridAutoFlow: 'row',
  alignContent: 'start',
})

export const adminRightStyle = css({
  width: `calc(100% - ${sideBarWidht}px)`,
  display: 'grid',
  rowGap: 8,
  gridAutoFlow: 'row',
  alignContent: 'start',
})

export const adminProductStyle = css({
  border: `1px solid ${Colors.FOREST1}`,
  padding: 8,
  display: 'grid',
  rowGap: 8,
})

export const adminProductActionsStyle = css({
  display: 'grid',
  columnGap: 8,
  gridAutoFlow: 'column',
  justifyContent: 'start',
})

export const adminCategoryActionsStyle = css({
  display: 'flex',
  justifyContent: 'space-between',
})
