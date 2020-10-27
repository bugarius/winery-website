const getImage = (fileName) => {
    return `${process.env.PUBLIC_URL}/images/${fileName}`
}

export const FileUtils = {
    getImage: getImage
}

