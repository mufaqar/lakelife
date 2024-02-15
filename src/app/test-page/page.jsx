import React from 'react'
import { shopify } from '@/config/shopify'
import { QAllProducts, QSingleProduct } from '@/config/query';

async function getData() {
     const res = await shopify({
          query : QSingleProduct,
          variables: {
               "slug" : "test-product"
          }
     });
     return {
          products: res
     }
}

const TestPage = async () => {
     const { products } = await getData()
     console.log("🚀 ~ TestPage ~ products:", products)
     return (
          <div>{JSON.stringify(products, null, 2)}</div>
     )
}

export default TestPage