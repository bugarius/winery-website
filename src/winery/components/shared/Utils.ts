const getImage = (fileName?: string) => {
    return `${process.env.PUBLIC_URL}/images/${fileName}`
}

export const FileUtils = {
    getImage: getImage
}

type List = {id: number}

const getListById = (list: List[], listOfId: number[]) => {
    return list.filter(el => listOfId.some(number => number === el.id))
}

export const ListUtils = {
    getListById: getListById
}

