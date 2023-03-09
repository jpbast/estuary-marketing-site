import * as React from "react"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"


const Layout = ({ location, title, children }) => {
  //@ts-ignore

  const Header = () => (
    <header className="global-header">
      <Link className="global-header-left-link" to="/">
        <StaticImage 
          src="../images/estuary-icon.png" alt="estuary logo"
          width={27}
          height={35}
          style={{
            margin: "34px 7px"
          }}
          layout="fixed"
          />
          <h1 className="global-header-title">Estuary</h1>
      </Link>
      <div className="global-header-wrapper">
        <Link to="/">
          Home
        </Link>
        <select className="global-header-select" name="Product">
          <option value="Product">Product</option>
        </select>
        <select className="global-header-select" name="Resources">
          <option value="Resources">Resources</option>
        </select>
        <select className="global-header-select" name="Company">
          <option value="Company">Company</option>
        </select>
      </div>
    </header>
  )

  return (
    <div className="global-wrapper">
      <Header/>
      <main>{children}</main>
      <footer>
        © {new Date().getFullYear()}, Built with
        {` `}
        <a href="https://www.gatsbyjs.com">Gatsby</a>
      </footer>
    </div>
  )
}

export default Layout
