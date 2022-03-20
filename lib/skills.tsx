import { API_URL } from '@/config/index';

export async function getAllSkills() {
  const res = await fetch(`${API_URL}/api/skills`);
  const skills = await res.json();

  return skills.data;
}
