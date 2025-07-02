'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';

export default function AddBlogForm() {
  const [form, setForm] = useState({
    title: '',
    shortdesc: '',
    content: '',
    category: '',
    image_url: '',
  });
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');
  const router = useRouter();

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    setSuccess('');

    try {
      const res = await fetch('/api/admin/add-blog', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(form),
      });

      if (res.ok) {
        setSuccess('Blog added successfully');
        // Optionally clear the form
        setForm({ title: '', shortdesc: '', content: '', category: '', image_url: '' });
        // Maybe redirect to blogs page after a delay
      } else {
        const data = await res.json();
        setError(data.message || 'Something went wrong');
      }
    } catch (err) {
      console.error(err);
      setError('Something went wrong');
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="w-full max-w-2xl bg-white p-8 rounded shadow-md"
    >
      <h2 className="text-2xl font-bold mb-6 text-center">Add New Blog</h2>
      {error && <p className="mb-4 text-sm text-red-600 text-center">{error}</p>}
      {success && <p className="mb-4 text-sm text-green-600 text-center">{success}</p>}

      {/* Title */}
      <div className="mb-4">
        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="title">
          Title
        </label>
        <input
          id="title"
          name="title"
          type="text"
          value={form.title}
          onChange={handleChange}
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          required
        />
      </div>

      {/* Short Description */}
      <div className="mb-4">
        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="shortdesc">
          Short Description
        </label>
        <textarea
          id="shortdesc"
          name="shortdesc"
          value={form.shortdesc}
          onChange={handleChange}
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
        />
      </div>

      {/* Category */}
      <div className="mb-4">
        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="category">
          Category
        </label>
        <input
          id="category"
          name="category"
          type="text"
          value={form.category}
          onChange={handleChange}
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
        />
      </div>

      {/* Image URL */}
      <div className="mb-4">
        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="image_url">
          Image URL
        </label>
        <input
          id="image_url"
          name="image_url"
          type="url"
          value={form.image_url}
          onChange={handleChange}
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          required
        />
      </div>

      {/* Content */}
      <div className="mb-6">
        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="content">
          Content (markdown / text)
        </label>
        <textarea
          id="content"
          name="content"
          value={form.content}
          onChange={handleChange}
          rows="8"
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          required
        />
      </div>

      <button
        type="submit"
        className="bg-[#05363B] hover:bg-[#0b4d55] text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline w-full"
      >
        Add Blog
      </button>
    </form>
  );
}