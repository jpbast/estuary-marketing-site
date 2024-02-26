import React, { Suspense } from "react"
import { StaticImage } from "gatsby-plugin-image"

import type { LottieRef } from "lottie-react"

import { Image } from "./style"

const animFallback = (
    <Image>
        <StaticImage
            placeholder="none"
            alt="estuary logo"
            src="../../../../../../images/hero-anim-placeholder.png"
            layout="constrained"
        />
    </Image>
)

const AnimatedHero = () => {
    const HeroAnimation = React.useMemo(() => import("../../../../../../images/hero-animation.json"), []);
    const Lottie = React.useMemo(() => React.lazy(() => import("lottie-react")), []);

    const [heroAnim, setHeroAnim] = React.useState<Awaited<
        typeof HeroAnimation
    > | null>(null)

    React.useEffect(() => {
        HeroAnimation.then(anim => {
            setHeroAnim(anim.default as any)
        })
    }, [])

    const [lottieReady, setLottieReady] = React.useState(false)
    const lottieRef: LottieRef = React.useRef()

    const handleLottieLoaded = React.useCallback(() => {
        setLottieReady(true)
        setTimeout(() => {
            lottieRef.current.play()
        }, 5000)
    }, [lottieRef])

    return (
        <Suspense fallback={animFallback}>
            {!(lottieReady && heroAnim) && animFallback}
            {heroAnim && (
                <Lottie
                    onDOMLoaded={handleLottieLoaded}
                    rendererSettings={{
                        viewBoxOnly: true,
                        preserveAspectRatio: "xMaxYMid meet",
                        progressiveLoad: true,
                        focusable: false,
                    }}
                    animationData={heroAnim}
                    className="section-one-right-image"
                    style={(!lottieReady && { display: "none" }) || {}}
                    autoplay={false}
                    lottieRef={lottieRef}
                />
            )}
        </Suspense>
    )
}

export default AnimatedHero