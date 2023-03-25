import * as React from "react"
import Header from "./header"
import Footer from "./footer"

const Layout = ({headerTheme, children}: {headerTheme: "light"|"dark", children: React.ReactNode|React.ReactNode[]}) => {
  return (
    <div className="global-wrapper">
      <Header theme={headerTheme}/>
      <main>{children}</main>
      <Footer />
    </div>
  )
}

export default Layout

