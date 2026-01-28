import { readFile } from 'fs/promises';
import { join } from 'path';
import { getDirname } from './get_dirname.js';
import { getCachedGoods, setCachedGoods } from './cache.js';

/**
 * @typedef {Object} Product
 * @property {string} category
 * @property {string} title
 * @property {string} url
 * @property {number} price
 * @property {string} image
 * @property {string} description
 * @property {number} stock
 * @returns {Promise<{phones :array<Product>,  laptops: array<Product>}>}
 */

export async function getGoods() {
    const cached = getCachedGoods();
    if (cached) {
        return cached;
    }

    const filePath = join(getDirname(import.meta.url), '..', 'data', 'goods.json');
    const data = await readFile(filePath, 'utf-8');
    const goods = JSON.parse(data);
    setCachedGoods(goods);
    return goods;
}