export const triggerPlaceholderError = (
  setPlaceholder,
  setPlaceholderError
) => {
  document.documentElement.style.setProperty('--placeholder-color', 'crimson')
  setPlaceholder('You cannot enter nothing!')
  setPlaceholderError(true)

  setTimeout(() => {
    document.documentElement.style.setProperty('--placeholder-color', '#999')
  }, 600)

  setTimeout(() => {
    setPlaceholder('Paste your text here...')
    setPlaceholderError(false)
  }, 3000)
}
