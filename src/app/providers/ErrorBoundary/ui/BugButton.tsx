import { Button, ThemeButton } from 'shared/ui/Button/Button'
import { useEffect, useState } from 'react'

// Component for testing ErrorBoundary
export const BugButton = () => {
  const [error, setError] = useState(false)

  const throwError = () => {
    setError(!error)
  }

  useEffect(() => {
    if (error) {
      throw new Error()
    }
  }, [error])

  return (
    <Button onClick={throwError} theme={ThemeButton.BACKGROUND_INVERTED}>
      throw error
    </Button>
  )
}
