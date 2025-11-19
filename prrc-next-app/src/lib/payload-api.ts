const API_URL = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:3001';

export async function fetchFromPayload<T>(
  endpoint: string,
  options?: RequestInit,
): Promise<T> {
  const url = `${API_URL}/api/${endpoint}`;

  try {
    const response = await fetch(url, {
      ...options,
      headers: {
        'Content-Type': 'application/json',
        ...options?.headers,
      },
    });

    if (!response.ok) {
      throw new Error(`API Error: ${response.status} ${response.statusText}`);
    }

    return await response.json();
  } catch (error) {
    console.error('Payload API Error:', error);
    throw error;
  }
}

export async function getResearchers() {
  return fetchFromPayload('researchers');
}

export async function getMedia() {
  return fetchFromPayload('media');
}

export async function getUsers() {
  return fetchFromPayload('users');
}

export async function getPapers() {
  return fetchFromPayload('papers');
}

export async function getNewsletters() {
  return fetchFromPayload('newsletters');
}

export async function searchPapers(query: string) {
  // basic title search; Payload supports query via where
  const q = encodeURIComponent(query);
  return fetchFromPayload(`papers?where[title][contains]=${q}`);
}

export async function createPaper(payload: any) {
  const API_URL = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:3001';
  const url = `${API_URL}/api/papers`;
  const response = await fetch(url, {
    method: 'POST',
    credentials: 'include',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(payload),
  });
  if (!response.ok) throw new Error('Failed to create paper');
  return await response.json();
}

export async function uploadMediaFile(file: File) {
  const API_URL = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:3001';
  const form = new FormData();
  form.append('file', file);
  // Payload expects a POST to /api/media with form data
  const res = await fetch(`${API_URL}/api/media`, {
    method: 'POST',
    body: form,
    credentials: 'include',
  });
  if (!res.ok) throw new Error('Upload failed');
  return res.json();
}
