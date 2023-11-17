import type { TocItem, FlatItems } from './types'

const getPositionById = (id: string) => {
    if (typeof window === "undefined") return 0;
    return window.scrollY + document.getElementById(id)?.getBoundingClientRect().top - (window.innerHeight / 2)
}

export const flatItems: FlatItems = (items) => items.reduce((acc, { items, ...item }: TocItem) => {
    acc.push({ ...item, position: getPositionById(item.id), root: true })
    if (items) acc.push(...items.map((i) => ({ ...i, position: getPositionById(i.id) })))
    return acc;
}, [])