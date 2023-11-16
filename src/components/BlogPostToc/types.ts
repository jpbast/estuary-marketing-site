export type TocItem = {
    id: string
    heading: string
    root?: boolean
    position?: number
    items?: TocItem[]
}

export type TocContainer = {
    items?: TocItem[]
}

export type FlatItems = (items: TocItem[]) => TocItem[]
