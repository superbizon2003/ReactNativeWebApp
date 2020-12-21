import React from 'react'

export default useAsyncError = () => {
  const [_, setError] = React.useState()
  return React.useCallback(
    (e) => {
      setError(() => {
        throw e
      })
    },
    [setError],
  )
}
