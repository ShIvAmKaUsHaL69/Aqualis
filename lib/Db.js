import mysql from 'mysql2/promise';
import { unstable_cache } from 'next/cache';

const pool = mysql.createPool({
    host: process.env.host,
    user: process.env.user,
    password: process.env.password,
    database: 'ekreps_Aqualis',
});

async function fetchBlogs() {
    const [rows] = await pool.query('SELECT * FROM blogs ORDER BY created_at DESC');
    return rows;
  }
  
  // Function to fetch a single blog
  async function fetchBlogById(id) {
    const [rows] = await pool.query('SELECT * FROM blogs WHERE id = ?', [id]);
    return rows.length ? rows[0] : null;
  }
  
  // Cached versions of the functions
  export const getCachedBlogs = unstable_cache(fetchBlogs, ['blogs'], { revalidate: 60 });
  export const getCachedBlogById = (id) =>
    unstable_cache(() => fetchBlogById(id), [`blog-${id}`], { revalidate: 60 })();