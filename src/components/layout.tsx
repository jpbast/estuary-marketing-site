import * as React from "react"
import clsx from "clsx"

import Header from "./header"
import Footer from "./footer"
import TakeATour from "./TakeATour"

const Layout = ({headerTheme, fixedHeader = false, showTour = false, children}: {headerTheme: "light"|"dark", fixedHeader?: boolean, showTour?: boolean, children: React.ReactNode|React.ReactNode[]}) => {
  const [closeTour, setCloseTour] = React.useState(typeof window !== 'undefined' && !!localStorage.getItem('@estuary/closeTour'))

  return (
    <div className="global-wrapper">
      {showTour && !closeTour && <TakeATour onClose={() => setCloseTour(true)} />}
      <Header fixedHeader={fixedHeader} theme={headerTheme}/>
      <main className={clsx(fixedHeader && "global-main-fixed-header")}>{children}</main>
      <Footer />
    </div>
  )
}

export default Layout

