export interface Recipe {
    results: Results[]
    offset: number,
    number: number,
    totalResults: number
}
export interface Results {
    id: number,
    title: string,
    image: string,
    imageType: string,
}