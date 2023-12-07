import { useState, useMemo, useEffect, RefObject } from "react"

export default function useOnScreen(ref: RefObject<HTMLElement>) {
    const [isIntersecting, setIntersecting] = useState(false)
  
    useEffect(() => {
        const observer = useMemo(() => new IntersectionObserver(
            ([entry]) => setIntersecting(entry.isIntersecting)
        ), [ref])

        observer.observe(ref.current)
        return () => observer.disconnect()
    }, [])
  
    return isIntersecting
}