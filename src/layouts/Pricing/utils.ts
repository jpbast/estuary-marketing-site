export const gByteLabel = (gb: number, maxPrec = 10) => {
    const units = ["GB", "TB"]

    let unitIndex = 0
    let scaledValue = gb

    while (scaledValue >= 1000 && unitIndex < units.length - 1) {
        unitIndex += 1
        scaledValue /= 1000
    }

    return `${scaledValue.toFixed(Math.min(unitIndex, maxPrec))}${units[unitIndex]}`
}

export const currencyFormatter = Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
})

export const gbPoints = [
    2,
    250,
    500,
    1000,
    2000
]

export const scale = idx => {

    const previousMarkIndex = Math.floor(idx - 1);
    const previousMark = gbPoints[previousMarkIndex];

    if (idx === previousMarkIndex) {
        return previousMark;
    }

    const nextMark = gbPoints[previousMarkIndex + 1];

    if (!nextMark) {
        return previousMark
    }

    const frac = ((idx - 1) - previousMarkIndex) * (nextMark - previousMark)

    return previousMark + frac;
};

export const marks = gbPoints.map((_, index) => ({
    value: index + 1,
    label: gByteLabel(scale(index + 1))
}));


export const calculatePrice = (gb: number, connectors: number) => ({
    estuary: 2.0 * gb + 100 * connectors,
    fivetran: (1590 + 45.7 * gb + -0.0517 * gb ** 2 + 2.79 * 10 ** -5 * gb ** 3 + -5.37 * 10 ** -9 * gb ** 4),
    confluent: connectors * 150 + (1.73 * gb + 1100)
})
