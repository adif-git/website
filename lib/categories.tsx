import { API_URL } from '@/config/index';

export async function getAllCategories() {
  const res = await fetch(`${API_URL}/api/categories`);
  const categories = await res.json();

  return categories.data;
}
