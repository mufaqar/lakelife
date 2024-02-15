"use client";
import React from "react";
import { shopify } from "@/config/shopify";
import { QAllProducts, QCheckout, QSingleProduct } from "@/config/query";

async function getData() {
  const res = await shopify({
    query: QAllProducts,
    // variables: {
    //      "slug" : "test-product-title"
    // }
  });
  return {
    products: res?.body?.data.products.edges
  };
}

const TestPage = async () => {
  const { products } = await getData();
  console.log("🚀 ~ TestPage ~ products:", products)

  const handleCheckout = async (id) => {
    const res = await shopify({
      query: QCheckout,
      variables: {
        variantId: id,
        quantity: 1,
      },
    });
    window.location.href = res?.body?.data?.checkoutCreate?.checkout?.webUrl
  };

  return (
    <>
      <section className="container mx-auto py-10">
        <h2 className="text-3xl font-normal">All Products</h2>
        <div className="mt-10">
          {products?.map((item, idx) => (
            <div key={idx}>
              <img
                src={item.node.images?.nodes[0].transformedSrc}
                alt={item.node.images?.nodes[0].altText || item.node.title}
                width={200}
                height={150}
              />
              <h2>{item.node.title}</h2>
              <p>
                Price: {item.node.priceRange?.minVariantPrice.currencyCode}{" "}
                {item.node.priceRange?.minVariantPrice.amount}
              </p>
              <button
                className="bg-blue-400 mt-4 px-4 py-1"
                onClick={() => handleCheckout(item.node?.variants?.nodes[0].id)}
              >
                Shop Now
              </button>
            </div>
          ))}
        </div>
      </section>
    </>
  );
};

export default TestPage;
