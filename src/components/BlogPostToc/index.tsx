import React, { useState, useEffect } from "react"
import { Link } from "gatsby"

import type { TocContainer } from './types'

import { flatItems } from "./utils"

const RenderToc = ({ items }: TocContainer) =>  {
    const [position, setPosition] = useState(0)
    items = flatItems(items)

    const handleScroll = () => {
        setPosition(window?.scrollY)
    }

    useEffect(() => {
        window.addEventListener('scroll', handleScroll, { passive: true });
        return () => window.removeEventListener('scroll', handleScroll)
    }, [])

    return (
        <div className="table-of-contents">
            <ul>
                {items.map((item, index) => (
                    <li className={`${!item.root ? "sub-item" : ""} ${(index === 0 || item.position <= position) ? "active" : ""}`} key={index}>
                        <div className={`progress ${((index === 0 || position >= item.position) && (index === items.length - 1 || position <= items[index + 1].position)) ? "current" : ""}`} />
                        <Link to={`#${item.id}`}>{item.heading}</Link>
                    </li>
                ))}
            </ul>
        </div>
    )
}


export default RenderToc
