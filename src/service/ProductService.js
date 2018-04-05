import Common from 'util/common';

const _mm = new Common();

export default class Product {

    // 获取商品信息
    getProduct(productId) {
        return _mm.request({
            url: "/api/products",
            data: {
                productId: productId || 0
            }
        });
    }

    // 获取商品信息
    getProductList(listParam) {
        return _mm.request({
            url: "/api/products",
            data: {
                page: listParam.pageNum || 1,
                size: listParam.size,
                name: listParam.name
            }
        });

    }

    // save商品信息
    saveProduct(product) {
        return _mm.request({
            url: "/api/products",
            method: "POST",
            data: product
        });
    }

    // 改变商品状态
    setProductStatus(productId, status) {
        return _mm.request({
            url: "/api/products/" + productId,
            method: "PATCH",
            data: {
                status: status
            }
        });
    }

    // 获取品类
    getCategory(parentCategoryId) {
        return _mm.request({
            url: "/api/product/categories",
            data: {
                categoryId: parentCategoryId || 0
            }
        });
    }

    // 新增品类
    saveCategory(category) {
        return _mm.request({
            url: "/api/product/categories",
            method: "POST",
            data: {
                parentId: category.parentId || 0,
                categoryName: category.categoryName || ''
            }
        });
    }

    // 更新品类名称
    updateCategoryName(category) {
        return _mm.request({
            url: "/api/product/categories",
            method: "PATCH",
            data: category
        });
    }
}
