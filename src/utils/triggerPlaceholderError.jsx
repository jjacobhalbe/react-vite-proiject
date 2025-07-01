export const triggerPlaceholderError = (
  setPlaceholder,
  setPlaceholderError
) => {
  setPlaceholder('You cannot enter nothing!')
  setPlaceholderError(true)

  setTimeout(() => {
    setPlaceholder('Paste your text here...')
    setPlaceholderError(false)
  }, 3000)
}
