import type { APIRoute } from 'astro';

const IG_APP_ID = "936619743392459";
const HEADERS = {
  "User-Agent": "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36",
  "X-IG-App-ID": IG_APP_ID,
  "Accept": "application/json",
};

export const GET: APIRoute = async ({ params, request }) => {
  const url = new URL(request.url);
  const username = url.searchParams.get('username');

  if (!username) {
    return new Response(JSON.stringify({ error: 'Username is required' }), {
      status: 400,
      headers: { 'Content-Type': 'application/json' }
    });
  }

  try {
    const igUrl = `https://www.instagram.com/api/v1/users/web_profile_info/?username=${username}`;
    const response = await fetch(igUrl, { headers: HEADERS });

    if (!response.ok) {
      return new Response(JSON.stringify({ error: `Instagram returned ${response.status}` }), {
        status: response.status,
        headers: { 'Content-Type': 'application/json' }
      });
    }

    const data = await response.json();
    
    // Set cache headers to avoid hitting Instagram too much
    return new Response(JSON.stringify(data), {
      status: 200,
      headers: {
        'Content-Type': 'application/json',
        'Cache-Control': 'public, s-maxage=3600, stale-while-revalidate=1800'
      }
    });
  } catch (error) {
    return new Response(JSON.stringify({ error: 'Failed to fetch from Instagram' }), {
      status: 500,
      headers: { 'Content-Type': 'application/json' }
    });
  }
};
