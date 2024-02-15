export async function shopify({ query, variables }) {
     const endpoint = process.env.NEXT_PUBLIC_SHOPIFY_STORE_DOMAIN;
     const key = process.env.NEXT_PUBLIC_SHOPIFY_STOREFRONT_ACCESS_TOKEN;
     const URL = `${endpoint}/api/2021-07/graphql.json`

     try {
       const result = await fetch(URL, {
         method: 'POST',
         headers: {
           'Content-Type': 'application/json',
           'Accept': "application/json",
           'X-Shopify-Storefront-Access-Token': key
         },
         body: JSON.stringify({ query, variables })
       });
   
       return {
         status: result.status,
         body: await result.json()
       };
     } catch (error) {
       console.error('Error:', error);
       return {
         status: 500,
         error: 'Error receiving data'
       };
     }
   }