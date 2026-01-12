// Prefer relative API paths so the frontend can proxy /api to the backend.
const API_URL = process.env.NEXT_PUBLIC_API_URL || '';

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

export async function deleteUser(id: string) {
  const API_URL = process.env.NEXT_PUBLIC_API_URL || '';
  const res = await fetch(`${API_URL}/api/users/${id}`, {
    method: 'DELETE',
    credentials: 'include',
  });
  if (!res.ok) throw new Error('Failed to delete user');
  return res.json();
}

export async function getPapers() {
  return fetchFromPayload('papers');
}

export async function getNewsletters() {
  return fetchFromPayload('newsletters');
}

export async function getResearcher(id: string) {
  // Deprecated: Researchers are now Users with role 'researcher'
  return null;
}

export async function updateResearcher(id: string, data: any) {
  // Deprecated
  return null;
}

export async function createResume(payload: any) {
  const API_URL = process.env.NEXT_PUBLIC_API_URL || '';
  const res = await fetch(`${API_URL}/api/resumes`, {
    method: 'POST',
    credentials: 'include',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(payload),
  });
  if (!res.ok) {
    const p = await res.json().catch(() => ({}));
    throw new Error(p?.message || 'Failed to create resume');
  }
  return res.json();
}

export async function getMyResume(userId: string) {
  // Fetch resume where owner equals userId
  const API_URL = process.env.NEXT_PUBLIC_API_URL || '';
  const query = `where[owner][equals]=${userId}`;
  const res = await fetch(`${API_URL}/api/resumes?${query}`, {
    credentials: 'include',
  });
  if (!res.ok) return null;
  const data = await res.json();
  return data.docs?.[0] || null;
}

export async function updateResume(id: string, data: any) {
  const API_URL = process.env.NEXT_PUBLIC_API_URL || '';
  const res = await fetch(`${API_URL}/api/resumes/${id}`, {
    method: 'PATCH',
    credentials: 'include',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(data),
  });
  if (!res.ok) {
    const p = await res.json().catch(() => ({}));
    throw new Error(p?.message || 'Failed to update resume');
  }
  return res.json();
}

export async function searchPapers(query: string) {
  // basic title search; Payload supports query via where
  const q = encodeURIComponent(query);
  return fetchFromPayload(`papers?where[title][contains]=${q}`);
}

export async function createPaper(payload: any) {
  const API_URL = process.env.NEXT_PUBLIC_API_URL || '';
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
  const API_URL = process.env.NEXT_PUBLIC_API_URL || '';
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

// Auth helpers
export async function loginUser(email: string, password: string) {
  const API_URL = process.env.NEXT_PUBLIC_API_URL || '';
  const res = await fetch(`${API_URL}/api/users/login`, {
    method: 'POST',
    credentials: 'include',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ email, password }),
  });
  if (!res.ok) {
    const payload = await res.json().catch(() => ({}));
    throw new Error(payload?.message || `${res.status} ${res.statusText}`);
  }
  return res.json();
}

export async function getCurrentUser() {
  const API_URL = process.env.NEXT_PUBLIC_API_URL || '';
  const res = await fetch(`${API_URL}/api/users/me`, {
    credentials: 'include',
  });
  if (!res.ok) return null;
  return res.json();
}

export async function createUser(payload: any) {
  const API_URL = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:3001';
  const res = await fetch(`${API_URL}/api/users`, {
    method: 'POST',
    credentials: 'include',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(payload),
  });
  if (!res.ok) {
    const p = await res.json().catch(() => ({}));
    throw new Error(p?.message || `${res.status} ${res.statusText}`);
  }
  return res.json();
}

export async function logoutUser() {
  const API_URL = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:3001';
  const res = await fetch(`${API_URL}/api/users/logout`, {
    method: 'POST',
    credentials: 'include',
  });
  if (!res.ok) throw new Error('Logout failed');
  return res.json();
}
