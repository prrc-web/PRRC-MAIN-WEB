import { uploadMediaFile } from '../../src/lib/payload-api';

// Mock global fetch
global.fetch = jest.fn();

describe('Media API Client', () => {
  beforeEach(() => {
    (global.fetch as jest.Mock).mockClear();
  });

  it('uploadMediaFile sends correct POST request with FormData', async () => {
    const mockResponse = { doc: { id: 'media123', url: '/media/test.pdf' } };
    (global.fetch as jest.Mock).mockResolvedValue({
      ok: true,
      json: async () => mockResponse,
    });

    // Mock File object (since Node.js doesn't have File by default, we might need a polyfill or just mock it as any)
    const mockFile = { name: 'test.pdf', type: 'application/pdf' } as any;

    const result = await uploadMediaFile(mockFile);

    expect(global.fetch).toHaveBeenCalledWith(
      expect.stringContaining('/api/media'),
      expect.objectContaining({
        method: 'POST',
        credentials: 'include',
        body: expect.any(FormData),
      }),
    );
    expect(result).toEqual(mockResponse);
  });
});
