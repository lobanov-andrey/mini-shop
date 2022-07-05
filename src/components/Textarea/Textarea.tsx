import React, { useCallback, useEffect, useRef } from 'react'

export default function Textarea(props: React.TextareaHTMLAttributes<HTMLTextAreaElement>) {
  const textareaRef = useRef<HTMLTextAreaElement>(null)

  const changeHeight = useCallback(() => {
    if (textareaRef.current) {
      textareaRef.current.style.height = '0px'
      textareaRef.current.style.height = `${textareaRef.current.scrollHeight}px`
    }
  }, [])

  useEffect(() => {
    changeHeight()
  }, [])

  const change = useCallback((event: React.ChangeEvent<HTMLTextAreaElement>) => {
    if (props.onChange) props.onChange(event)
    changeHeight()
  }, [])

  return (
    <textarea
      rows={1}
      css={{
        width: '100%',
        appearance: 'none',
        border: 'none',
        resize: 'none',
        cursor: 'pointer',
        outline: 'none',
        background: 'transparent',
      }}
      ref={textareaRef}
      {...props}
      onChange={change}
    />
  )
}
