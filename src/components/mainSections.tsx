"use client"; // Required if using in App Router

import React, { useEffect, useState } from "react";
import Category from "@/components/category";
import Card from "@/components/product-card";
import YourBestPick from "@/components/YourBestPick";
import Button from "./button";
import ProductScroll from "./scroller/ProductScroll";

interface ProductCardData {
  id: number;
  productName: string;
  price: number;
  discount: number;
  productRating: number;
  productImageUrl: string;
  category: string;
}

const category = [
  {
    categoryName: "Plants",
    categoryImage: "https://www.ugaoo.com/cdn/shop/files/Plants_731fd685-a5e3-4d75-a75c-a5f643e07676.png?v=1739963491&width=535",
  },
  {
    categoryName: "Seeds",
    categoryImage: "https://www.ugaoo.com/cdn/shop/files/Seeds_9d649188-a482-412d-8673-ce3d1ca89d7e.png?v=1739963487&width=535",
  },
  {
    categoryName: "Pots and Planters",
    categoryImage: "https://www.ugaoo.com/cdn/shop/files/Pots_and_Planters_7950ef20-1be7-43b6-88da-c9daae4d28ed.png?v=1739963489&width=535",
  },
  {
    categoryName: "Plant Care",
    categoryImage: "https://www.ugaoo.com/cdn/shop/files/Plant_Care_b1543fe8-daf1-4579-9c6d-b11b801736f6.png?v=1739963488&width=535",
  },
];

const MainSections = () => {
  const [products, setProducts] = useState<ProductCardData[]>([]);
  const [loading, setLoading] = useState(true);
  const [itemsToShow, setItemsToShow] = useState(4)


  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const res = await fetch("http://localhost:5000/api/products?query=productDetails");
        const data = await res.json();
        setProducts(data.data); // Assuming `data.data` contains an array of products
        setLoading(false);
      } catch (error) {
        console.error("Error fetching products:", error);

      } finally {
        setLoading(false);
      }
    };

    fetchProducts();



    const updateItemsToShow = () => {
      if (window.innerWidth <= 768) {
        setItemsToShow(2); // Mobile view (<= 768px)
      } else {
        setItemsToShow(4); // Laptop view (> 768px)
      }
    };

    updateItemsToShow(); // Set initial value
    window.addEventListener("resize", updateItemsToShow); // Listen to resize event

    return () => window.removeEventListener("resize", updateItemsToShow); // Cleanup

  }, []);

  return (
    <div>
      <Category tools={category} />


      <div>
        {/* Your best pick section */}
        <YourBestPick />
        <ProductScroll />
        {/* Best seller */}
        <h1 className="mt-10 text-center my-5 text-4xl font-medium dark:text-white text-[#0A4C36]">Best Sellers</h1>

        {loading ? (
          <p className="text-center text-lg">Loading products...</p>
        ) : (
          <>
            <div className="grid lg:grid-cols-4  grid-cols-2 justify-items-center">
              {products.slice(0, itemsToShow).map((product) => (
                <Card key={product.id} productCardData={product} />
              ))}

            </div>
            <div className="flex justify-center my-5"><Button>VIEW ALL</Button></div>
          </>
        )}
      </div>
    </div>
  );
};

export default MainSections;
