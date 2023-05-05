// custom typefaces
import * as React from "react"
import "@fontsource/montserrat/variable.css"
import "@fontsource/merriweather"
// normalize CSS across browsers
import "./src/normalize.css"
// custom CSS styles
import "./src/style.less"
import "./src/highlighting-atom-one-dark.css"

// Highlighting for code blocks
// import "prismjs/themes/prism.css"

import { Script, ScriptStrategy } from "gatsby"

const ZD_KEY = "3271265c-16a8-4e0d-b1ab-72ed8fbe7e5a"

export const wrapPageElement = ({ element }) => {
    if (
        process.env.NODE_ENV === "development" ||
        (window?.innerWidth ?? 9999) < 768
    ) {
        return element
    } else {
        return (
            <>
                {element}
                <Script
                    id="ze-snippet"
                    key="gatsby-plugin-zendesk-chat"
                    strategy={"idle"}
                    async
                    defer
                    src={`https://static.zdassets.com/ekr/snippet.js?key=${ZD_KEY}`}
                />
                <Script
                    id="hs-script-loader"
                    async
                    defer
                    strategy={"idle"}
                    src="//js.hs-scripts.com/8635875.js"
                />
            </>
        )
    }
}

declare global {
    interface Window {
        isGTMLoaded: boolean
        dataLayer: any[]
    }
}

const TRACKING_ID = "G-P1PZPE4HHZ"

function initGTM() {
    if (window.isGTMLoaded) {
        return false
    }

    window.isGTMLoaded = true

    const script = document.createElement("script")

    script.type = "text/javascript"
    script.async = true
    script.src = `https://www.googletagmanager.com/gtag/js?id=${TRACKING_ID}`

    script.onload = () => {
        window.dataLayer = window.dataLayer || []
        function gtag(...args) {
            window.dataLayer.push(args)
        }
        gtag("js", new Date())

        gtag("config", `${TRACKING_ID}`)
    }

    document.head.appendChild(script)
}

function loadGTM(event) {
    initGTM()
    event.currentTarget.removeEventListener(event.type, loadGTM)
}

export const onClientEntry = () => {
    document.onreadystatechange = () => {
        if (document.readyState !== "loading") {
            setTimeout(initGTM, 3500)
        }
    }

    document.addEventListener("scroll", loadGTM)
    document.addEventListener("mousemove", loadGTM)
    document.addEventListener("touchstart", loadGTM)
}
