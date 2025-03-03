"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

export default function SearchForm() {
  const [query, setQuery] = useState("");
  const router = useRouter();

  const handleSearch = (e) => {
    e.preventDefault(); // Prevents page reload
    if (query.trim()) {
      router.push(`/blogs?search=${query}`);
    } else {
      router.push(`/blogs`); // Reset URL if empty search
    }
  };

  return (
    <form onSubmit={handleSearch} className="flex items-center space-x-2">
      <input
        type="text"
        placeholder="Search Blogs"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        className="border p-2 rounded w-full"
      />
      <button type="submit" aria-label="search button for blogs" className="bg-[#05363B] text-white px-4 py-2 rounded">
        Search
      </button>
    </form>
  );
}