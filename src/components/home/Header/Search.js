import { useState, useEffect } from "react";
import { useNavigate, createSearchParams } from "react-router-dom";
import { FaSearch } from "react-icons/fa";
import { useSelector } from "react-redux";

const Search = () => {
  const [suggestions, setSuggestions] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [category, setCategory] = useState("All");
  const navigate = useNavigate();
  const { items } = useSelector((state) => state.orebiReducer);

  useEffect(() => {
    setSuggestions(items);
  }, [items]);
  const idString = (_id) => {
    return String(_id).toLowerCase().split(" ").join("");
  };
  const onHandleSubmit = (e) => {
    e.preventDefault();
    if (searchTerm) {
      const product = items.find(
        (item) => item.name.toLowerCase() === searchTerm.toLowerCase()
      );
      if (product) {
        console.log("search", product);
        const rootId = idString(product.name);
        let item = {
          _id: product.iden,
          img: `https://mathematical-lavinia-survivor.koyeb.app/products/image/${product.iden}`,
          productName: product.name,
          price: product.price,
          color: product.colors,
          des: product.description,
          category: product.categories,
        };
        navigate(`/product/${rootId}`, { state: { item: item } });
      }
      setSearchTerm("");
      setCategory("All");
    }
  };

  const filteredProducts = suggestions.filter((product) =>
    product.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="container mx-auto max-w-xl relative">
      <div className="flex items-center h-10 bg-amazonclone-yellow rounded">
        <input
          className="flex grow items-center h-full rounded-l text-black p-3"
          type="text"
          placeholder="Search your products here"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <button onClick={onHandleSubmit} className="w-[45px]">
          <FaSearch className="h-[27px] m-auto stroke-slate-900" />
        </button>
      </div>
      {searchTerm && (
        <div className="bg-white text-black w-[calc(100%-45px)] z-40 absolute">
          {filteredProducts.slice(0, 10).map((product) => (
            <div
              key={product.id}
              className="p-2 hover:bg-gray-200 cursor-pointer"
              onClick={() => setSearchTerm(product.name)}
            >
              {product.name}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Search;
