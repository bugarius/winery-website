export const pageStyle = {
    home: {
        mainImage: 'winnica-zachod-slonca.jpg'
    }
} as const

interface IPageSettings {
    dotComponent: {
        wines: [number, number, number, number]
    }
}

export const pageSettings: IPageSettings = {
    dotComponent: {
        wines: [1, 6, 5, 7]
    }
}