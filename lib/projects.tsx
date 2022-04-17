import { API_URL, PER_PAGE } from '@/config/index';

const qs = require('qs');

export async function getAllProjects({ page }) {
  const query = qs.stringify({
    populate: '*',
    pagination: {
      page,
      pageSize: PER_PAGE,
    },
    sort: ['updatedAt:desc'],
    encodeValuesOnly: true,
  });
  const res = await fetch(`${API_URL}/api/projects?${query}`);
  const projects = await res.json();

  return projects;
}

export async function getProjectBySlug({ projectSlug }) {
  const res = await fetch(
    `${API_URL}/api/projects?populate=*&filters[slug][$eq]=${projectSlug}`
  );
  const project = await res.json();

  return project.data[0];
}

export async function getProjectsByCategory({ categorySlug, page }) {
  const query = qs.stringify({
    filters: {
      category: {
        slug: {
          $eq: categorySlug,
        },
      },
    },
    populate: '*',
    pagination: {
      page,
      pageSize: PER_PAGE,
    },
    sort: ['updatedAt:desc'],
    encodeValuesOnly: true,
  });

  const res = await fetch(`${API_URL}/api/projects?${query}`);
  const projects = await res.json();

  return projects;
}

export async function getProjectsBySearch({ term, page }) {
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
    pagination: {
      page,
      pageSize: PER_PAGE,
    },
    sort: ['updatedAt:desc'],
    encodeValuesOnly: true,
  });

  const res = await fetch(`${API_URL}/api/projects?term=${query}`);
  const projects = await res.json();

  return projects;
}
