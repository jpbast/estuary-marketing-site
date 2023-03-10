import * as React from "react"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"

const Header = () => {

    const MenuBarsImage = () => (
        <svg width="20" height="12" viewBox="0 0 20 12" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M1 2H19C19.2652 2 19.5196 1.89464 19.7071 1.70711C19.8946 1.51957 20 1.26522 20 1C20 0.734784 19.8946 0.48043 19.7071 0.292893C19.5196 0.105357 19.2652 0 19 0H1C0.734784 0 0.48043 0.105357 0.292893 0.292893C0.105357 0.48043 0 0.734784 0 1C0 1.26522 0.105357 1.51957 0.292893 1.70711C0.48043 1.89464 0.734784 2 1 2ZM19 10H1C0.734784 10 0.48043 10.1054 0.292893 10.2929C0.105357 10.4804 0 10.7348 0 11C0 11.2652 0.105357 11.5196 0.292893 11.7071C0.48043 11.8946 0.734784 12 1 12H19C19.2652 12 19.5196 11.8946 19.7071 11.7071C19.8946 11.5196 20 11.2652 20 11C20 10.7348 19.8946 10.4804 19.7071 10.2929C19.5196 10.1054 19.2652 10 19 10ZM19 5H1C0.734784 5 0.48043 5.10536 0.292893 5.29289C0.105357 5.48043 0 5.73478 0 6C0 6.26522 0.105357 6.51957 0.292893 6.70711C0.48043 6.89464 0.734784 7 1 7H19C19.2652 7 19.5196 6.89464 19.7071 6.70711C19.8946 6.51957 20 6.26522 20 6C20 5.73478 19.8946 5.48043 19.7071 5.29289C19.5196 5.10536 19.2652 5 19 5Z" fill="white" />
        </svg>
    )

    return (
        <header className="global-header">
            <Link className="global-header-logo-link" to="/">
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
                <div className="global-header-link-wrapper">
                    <Link className="global-header-link" to="/">
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
                <div className="global-header-login-try">
                    <Link className="global-header-link" to="#">
                        Log in
                    </Link>
                    <Link className="global-header-try-it-button" to="#">
                        Try it free
                    </Link>
                </div>

            </div>
            <div className="global-header-mobile-menu-wrapper">
                <button className="global-header-mobile-menu-button">
                    <MenuBarsImage/>
                </button>
            </div>
        </header>
    )
}

export default Header