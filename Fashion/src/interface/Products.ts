export interface PriceDetails{
    currency_code: string,
    actual_price: number,
    current_price: string,
    discount:string
}
export interface RatingDetails{
    rating: number,
    scale:number
}
export interface Product{
    id: string,
    product_name: string,
    price_details: PriceDetails,
    rating_details: RatingDetails,
    available_sizes: string[],
    modelImg:string

}

export interface Offer{
    id: number,
    modelImg: string,
    discountText: string,
    discountCode: string,
    discountSlogan:string
}
