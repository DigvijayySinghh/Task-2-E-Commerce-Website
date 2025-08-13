import NavBar from "@/components/NavBar";
import Slider from "@/components/Slider";
import Featured from "@/components/Featured";
import Women from "@/components/Women";
import Men from "@/components/Men";
import Sale from "@/components/Sale";
import Footer from "@/components/Footer";
import clientPromise from "@/lib/mongodb";

async function fetchFeaturedProducts() {
  try {
    const client = await clientPromise;
    const db = client.db("shop");
    const featuredProducts = await db.collection("featured").find({}).toArray();
    // Convert MongoDB documents to plain objects
    const plainProducts = featuredProducts.map((product) => ({
      _id: product._id.toString(),
      name: product.name,
      price: product.price,
      imageUrl: product.imageUrl,
    }));
    return plainProducts;
  } catch (error) {
    console.error("Error fetching featured products:", error);
    return [];
  }
}

export async function fetchWomenProducts() {
  try {
    const client = await clientPromise;
    const db = client.db("shop");
    const womenProducts = await db.collection("women").find({}).toArray();
    // Convert MongoDB documents to plain objects
    const plainProducts = womenProducts.map((product) => ({
      _id: product._id.toString(),
      name: product.name,
      price: product.price,
      imageUrl: product.imageUrl,
    }));
    return plainProducts;
  } catch (error) {
    console.error("Error fetching women products:", error);
    return [];
  }
}

async function fetchMenProducts() {
  try {
    const client = await clientPromise;
    const db = client.db("shop");
    const menProducts = await db.collection("men").find({}).toArray();
    // Convert MongoDB documents to plain objects
    const plainProducts = menProducts.map((product) => ({
      _id: product._id.toString(),
      name: product.name,
      price: product.price,
      imageUrl: product.imageUrl,
    }));
    return plainProducts;
  } catch (error) {
    console.error("Error fetching men products:", error);
    return [];
  }
}

async function fetchSaleProducts() {
  try {
    const client = await clientPromise;
    const db = client.db("shop");
    const saleProducts = await db.collection("discount").find({}).toArray();
    // Convert MongoDB documents to plain objects
    const plainProducts = saleProducts.map((product) => ({
      _id: product._id.toString(),
      name: product.name,
      price: product.price,
      imageUrl: product.imageUrl,
      discountPercentage: product.discountPercentage,
      beforeDiscountPrice: product.beforeDiscountPrice,
    }));
    return plainProducts;
  } catch (error) {
    console.error("Error fetching discounted products:", error);
    return [];
  }
}

export default async function Home() {
  const featuredProducts = await fetchFeaturedProducts();
  const menProducts = await fetchMenProducts();
  const womenProducts = await fetchWomenProducts();
  const saleProducts = await fetchSaleProducts();

  return (
    <div className="main">
      <NavBar />
      <Slider />
      <Featured featuredProducts={featuredProducts} />
      <Women womenProducts={womenProducts} />
      <Men menProducts={menProducts} />
      <Sale saleProducts={saleProducts} />
      <Footer />
    </div>
  );
}
