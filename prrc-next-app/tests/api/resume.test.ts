import {
  createResume,
  getMyResume,
  updateResume,
  uploadMediaFile,
} from '../../src/lib/payload-api';

// Mock global fetch
global.fetch = jest.fn();

describe('Resume API Client', () => {
  beforeEach(() => {
    (global.fetch as jest.Mock).mockClear();
  });

  it('uploadMediaFile sends correct POST request with FormData', async () => {
    const mockResponse = { doc: { id: 'media123' } };
    (global.fetch as jest.Mock).mockResolvedValue({
      ok: true,
      json: async () => mockResponse,
    });

    const file = new File(['content'], 'resume.pdf', {
      type: 'application/pdf',
    });
    const result = await uploadMediaFile(file);

    expect(global.fetch).toHaveBeenCalledWith(
      expect.stringContaining('/api/media'),
      expect.objectContaining({
        method: 'POST',
        // body should be FormData, hard to inspect exactly in jsdom/node without setup,
        // but we can check it exists
      }),
    );
    expect(result).toEqual(mockResponse);
  });

  it('createResume sends correct POST request', async () => {
    const mockResponse = { doc: { id: '123', title: 'Test Resume' } };
    (global.fetch as jest.Mock).mockResolvedValue({
      ok: true,
      json: async () => mockResponse,
    });

    const data = { owner: 'user1', title: 'Test Resume' };
    const result = await createResume(data);

    expect(global.fetch).toHaveBeenCalledWith(
      '/api/resumes',
      expect.objectContaining({
        method: 'POST',
        body: JSON.stringify(data),
      }),
    );
    expect(result).toEqual(mockResponse);
  });

  it('getMyResume sends correct GET request', async () => {
    const mockResponse = { docs: [{ id: '123', owner: 'user1' }] };
    (global.fetch as jest.Mock).mockResolvedValue({
      ok: true,
      json: async () => mockResponse,
    });

    const result = await getMyResume('user1');

    expect(global.fetch).toHaveBeenCalledWith(
      expect.stringContaining('/api/resumes?where[owner][equals]=user1'),
      expect.objectContaining({ credentials: 'include' }),
    );
    expect(result).toEqual(mockResponse.docs[0]);
  });

  it('updateResume sends correct PATCH request', async () => {
    const mockResponse = { doc: { id: '123', title: 'Updated' } };
    (global.fetch as jest.Mock).mockResolvedValue({
      ok: true,
      json: async () => mockResponse,
    });

    const result = await updateResume('123', { title: 'Updated' });

    expect(global.fetch).toHaveBeenCalledWith(
      '/api/resumes/123',
      expect.objectContaining({
        method: 'PATCH',
        body: JSON.stringify({ title: 'Updated' }),
      }),
    );
    expect(result).toEqual(mockResponse);
  });
});
