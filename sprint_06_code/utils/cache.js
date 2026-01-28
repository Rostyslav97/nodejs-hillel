let cachedGoods = null;

export function setCachedGoods(goods) {
    cachedGoods = goods;
}

export function getCachedGoods(){
    return cachedGoods;
}