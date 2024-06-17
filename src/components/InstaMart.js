import React from "react";

// Sample product data (replace with actual data from Swiggy APIs)
const categories = [
  {
    id: 1,
    name: "Fresh Fruits",
    image:
      "https://images.pexels.com/photos/1132047/pexels-photo-1132047.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
  },
  {
    id: 2,
    name: "Fresh Vegetables",
    image:
      "https://images.pexels.com/photos/35625/vegetables-fresh-veggies-food.jpg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
  },
  {
    id: 3,
    name: "Dairy, Bread and Eggs",
    image:
      "https:images.pexels.com/photos/103124/pexels-photo-103124.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
  },
  {
    id: 4,
    name: "Biscuits and Cake",
    image:
      "https://images.pexels.com/photos/6062009/pexels-photo-6062009.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
  },
  {
    id: 5,
    name: "Insta Food and Frozen",
    image:
      "https://5.imimg.com/data5/ANDROID/Default/2022/3/QC/FB/QF/124753872/product-jpeg-500x500.jpg",
  },
  {
    id: 6,
    name: "Home and Kitchen",
    image:
      "https://www.tataconsumer.com/sites/g/files/gfwrlq316/files/TCPL_Tata-Tea-product-portfolio_v2_0.jpg",
  },
  {
    id: 7,
    name: "Cleaning Essentials",
    image:
      "https://www.jiomart.com/images/product/original/rvcibqgozu/dropster-cleaning-essentials-combo-set-of-6-product-images-orvcibqgozu-p598522771-0-202302181944.jpg?im=Resize=(1000,1000)",
  },
  {
    id: 8,
    name: "Bath, Body and Hairs",
    image:
      "https://www.modernretail.co/wp-content/uploads/sites/5/2023/05/Bath-Body-Works-interior.jpeg?w=1200&h=640&crop=1",
  },
  // Add more categories as needed
];

const Instamart = () => {
  return (
    <div className="bg-gray-100 min-h-screen">
      {/* Header */}
      <header className="bg-white shadow-md py-4 px-6 flex items-center justify-between">
        <h1 className="text-2xl font-bold">Instamart</h1>
        <div className="flex items-center">
          <input
            type="text"
            placeholder="Search..."
            className="border border-gray-300 rounded-l px-4 py-2 focus:outline-none"
          />
          <button className="bg-blue-500 text-white px-4 py-2 rounded-r">
            Search
          </button>
        </div>
      </header>

      {/* Body */}
      <div className="container mx-auto py-8">
        <h2 className="text-2xl font-bold mb-4">Shop by Category</h2>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {categories.map((category) => (
            <div
              key={category.id}
              className="bg-white shadow-lg rounded-lg overflow-hidden"
            >
              <img
                src={category.image}
                alt={category.name}
                className="w-full h-48 object-cover object-center"
              />
              <div className="p-4">
                <h3 className="text-lg font-bold mb-2">{category.name}</h3>
                <button className="bg-blue-500 text-white px-4 py-2 rounded">
                  View Products
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-6">
        <div className="container mx-auto text-center">
          <p>&copy; 2024 Instamart. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default Instamart;
