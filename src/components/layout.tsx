import * as React from "react"
import clsx from "clsx"

import Header from "./header"
import Footer from "./footer"
const TakeATour = React.lazy(() => import("./TakeATour"))

const Layout = ({
    headerTheme,
    fixedHeader = true,
    showTour = false,
    children,
}: {
    headerTheme: "light" | "dark"
    fixedHeader?: boolean
    showTour?: boolean
    children: React.ReactNode | React.ReactNode[]
}) => {
    const isSSR = typeof window === "undefined"
    return (
        <div className="global-wrapper">
            {!isSSR && (
                <React.Suspense fallback={<div />}>
                    {typeof window !== "undefined" && showTour && <TakeATour />}
                </React.Suspense>
            )}
            <Header fixedHeader={fixedHeader} />
            <main className={clsx(fixedHeader && "global-main-fixed-header")}>
                {children}
            </main>
            <Footer />
        </div>
    )
}

export default Layout
