import { motion } from "framer-motion";
import axios from "axios";
import { useState, useEffect } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";

const Update = () => {
  const [book, setBook] = useState({
    title: "",
    description: "",
    price: "",
    cover: "",
  });
  const [error, setError] = useState(false);

  const location = useLocation();
  const navigate = useNavigate();

  const bookId = location.pathname.split("/")[2];

  useEffect(() => {
    const fetchBook = async () => {
      try {
        const res = await axios.get(`http://localhost:3306/books/${bookId}`);
        setBook(res.data);
      } catch (err) {
        console.log(err);
        setError(true);
      }
    };
    fetchBook();
  }, [bookId]);

  const handleChange = (e) => {
    setBook((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleClick = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.put(
        `http://localhost:3306/books/${bookId}`,
        book
      );
      if (response.status === 200) {
        navigate("/");
      }
    } catch (err) {
      console.error(
        "Update error:",
        err.response ? err.response.data : err.message
      );
      setError(true);
    }
  };

  return (
    <motion.div
      className="max-w-md mx-auto p-6 bg-gray-800 text-white rounded-lg shadow-md mt-8"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <h1 className="text-2xl font-bold mb-4">Update the Book</h1>
      <form onSubmit={handleClick} className="space-y-4">
        <input
          type="text"
          placeholder="Book title"
          name="title"
          value={book.title}
          onChange={handleChange}
          className="w-full p-2 border border-gray-600 bg-gray-900 rounded text-white"
          required
        />
        <textarea
          rows={5}
          placeholder="Book description"
          name="description"
          value={book.description}
          onChange={handleChange}
          className="w-full p-2 border border-gray-600 bg-gray-900 rounded text-white"
          required
        />
        <input
          type="number"
          placeholder="Book price"
          name="price"
          value={book.price}
          onChange={handleChange}
          className="w-full p-2 border border-gray-600 bg-gray-900 rounded text-white"
          required
        />
        <input
          type="text"
          placeholder="Book cover URL"
          name="cover"
          value={book.cover}
          onChange={handleChange}
          className="w-full p-2 border border-gray-600 bg-gray-900 rounded text-white"
        />
        <button
          type="submit"
          className="w-full bg-blue-600 text-white p-2 rounded hover:bg-blue-700 transition duration-300"
        >
          Update
        </button>
        {error && <p className="text-red-400">Something went wrong!</p>}
      </form>
      <Link
        to="/"
        className="block text-blue-400 mt-4 text-center hover:underline"
      >
        See all books
      </Link>
    </motion.div>
  );
};

export default Update;
