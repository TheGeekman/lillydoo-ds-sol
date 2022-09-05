export type productData = {  
    laoding:Boolean,
    hasErrors:Boolean,
    pricePerSubscription:{},
    subscriptionProducts:[],
}

export type productReducerType = {
    products: productData;
};

export type subscriptionType={
    productTypeName:string,
    isSelectedByDefault:boolean,
    products:Array<subscriptionProductsType>
}


export type productVariantType = {
    sku:string,
    sizeNumber:number,
    quantity:number,
    pricePerProduct: pricePerProductType,
}

export type subscriptionProductsType = {
    quantity:number,
    isDefault:boolean,
    quantityPerPack:number,
    isDefaultSize:boolean,
    sizeNumber:number,
    weight:string,
    productType:string,
    variants:Array<productVariantType>;
}


export type pricePerProductType = {
    subscriptionPrice:number,
    discountedPrice:number,
    regularPrice:number,
    pricePerUnit:number,
    pricePerPack:number,
    packCount:number
}












