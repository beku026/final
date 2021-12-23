export function calcSubPrice(product) {
    return +product.count * +product.item.price;
}
export function calcTotalPrice(products = []) {
    console.log(products);
    let totalPrice = 0;
    products.forEach((item) => {
        totalPrice += +item.subPrice;
    });
    return totalPrice;
}
