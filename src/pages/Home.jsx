const fruits = [
    { id: 1, name: "ผลไม้ตามฤดูกาล", image: "/fruit-category.jpg" },
    { id: 2, name: "ลิ้นจี่", image: "/lychee.jpg" },
  ];
  
  const Home = () => {
    return (
      <div className="container mx-auto p-4">
        {/* Hero Banner */}
        <div className="w-full h-64 bg-cover bg-center rounded-lg shadow-lg" style={{ backgroundImage: "url('/fruits-banner.jpg')" }}>
        </div>
  
        {/* Categories */}
        <h2 className="text-xl font-bold mt-6">หมวดผลไม้</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4 mt-4">
          {fruits.slice(0, 1).map((fruit) => (
            <div key={fruit.id} className="p-4 border rounded-lg shadow-md bg-white">
              <img src={fruit.image} alt={fruit.name} className="w-full h-40 object-cover rounded-md" />
              <p className="text-center mt-2 font-semibold">{fruit.name}</p>
            </div>
          ))}
        </div>
  
        {/* Seasonal Fruits */}
        <h2 className="text-xl font-bold mt-6">ผลไม้ในฤดูกาล</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4 mt-4">
          {fruits.slice(1).map((fruit) => (
            <div key={fruit.id} className="p-4 border rounded-lg shadow-md bg-white">
              <img src={fruit.image} alt={fruit.name} className="w-full h-40 object-cover rounded-md" />
              <p className="text-center mt-2 font-semibold">{fruit.name}</p>
            </div>
          ))}
        </div>
      </div>
    );
  };
  
  export default Home;
  