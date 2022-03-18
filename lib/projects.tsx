import { API_URL } from '@/config/index';

const qs = require('qs');

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

export async function getProjectsBySearch({ term }) {
  const query = qs.stringify({
    filters: {
      $or: [
        {
          article: {
            $containsi: term,
          },
        },
        {
          description: {
            $containsi: term,
          },
        },
        {
          title: {
            $containsi: term,
          },
        },
        {
          category: {
            name: {
              $containsi: term,
            },
          },
        },
      ],
    },
    populate: '*',
    encodeValuesOnly: true,
  });

  const res = await fetch(`${API_URL}/api/projects?term=${query}`);
  const projects = await res.json();

  return projects.data;
}
