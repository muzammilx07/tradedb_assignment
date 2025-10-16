
const API_URL = import.meta.env.VITE_API_URL ;

export async function fetchAnalytics() {
  try {
    const res = await fetch(`${API_URL}/analytics`);
    if (!res.ok) throw new Error(`Failed to fetch: ${res.status}`);
    return await res.json();
  } catch (err) {
    console.error("Analytics fetch error:", err);
    return null; 
  }
}
