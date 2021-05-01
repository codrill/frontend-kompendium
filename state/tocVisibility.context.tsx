import React, { PropsWithChildren, useState } from 'react'

export const TocVisibilityContext = React.createContext({ isVisible: false, setVisibility: (_) => null })

export function TocVisibilityController({ children }: PropsWithChildren<unknown>): JSX.Element {
  const [visible, setVisible] = useState(false)

  return (
    <TocVisibilityContext.Provider value={{ isVisible: visible, setVisibility: setVisible }}>
      {children}
    </TocVisibilityContext.Provider>
  )
}
