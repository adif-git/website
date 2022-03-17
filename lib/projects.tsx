import { API_URL } from '@/config/index';

export async function getAllProjects() {
  const res = await fetch(`${API_URL}/api/projects?populate=*`);
  const projects = await res.json();

  return projects.data;
}

export async function getProjectBySlug({ slug }) {
  const res = await fetch(
    `${API_URL}/api/projects?populate=*&filters[slug][$eq]=${slug}`
  );
  const project = await res.json();

  return project.data[0];
}

export async function getProjectsByCategory({ slug }) {
  const qs = require('qs');
  const query = qs.stringify({
    fields: ['slug', 'name'],
    filters: {
      slug: {
        $eq: slug,
      },
    },
    populate: {
      projects: {
        populate: '*',
      },
    },
    encodeValuesOnly: true,
  });

  const res = await fetch(`${API_URL}/api/categories?${query}`);
  const category = await res.json();

  return category.data[0];
}
