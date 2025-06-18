import React, { useEffect } from 'react'
import '../styles/inputWarningTooltip.css'

const InputWarningTooltip = ({ message, visible, onClose }) => {
  useEffect(() => {
    if (visible) {
      const timer = setTimeout(() => {
        onClose()
      }, 5000)
      return () => clearTimeout(timer)
    }
  }, [visible, onClose])

  return (
    <div className={`input-warning-tooltip ${visible ? 'visible' : ''}`}>
      {message}
    </div>
  )
}

export default InputWarningTooltip
