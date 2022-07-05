import { css } from '@emotion/react'
import React from 'react'

const selectStyle = css({
  borderRadius: 2,
  border: 'solid 1px #767676',
  padding: '2px 4px',
  height: 24,
  cursor: 'pointer',
  width: '100%',
  background: 'transparent',
  ':active': {
    background: 'white',
  },
})

export default function Select(
  props: {
    fullWidth?: boolean
    activeTab?: boolean
    options: { text: string; id: string }[]
    onChange: (id: string) => void
  } & Omit<React.SelectHTMLAttributes<HTMLSelectElement>, 'children' | 'onChange'>
) {
  const change = (event: React.ChangeEvent<HTMLSelectElement>) => {
    props.onChange(event.target.value)
  }

  return (
    <select {...props} onChange={change} css={selectStyle}>
      {props.options.map(option => (
        <option value={option.id}>{option.text}</option>
      ))}
    </select>
  )
}
