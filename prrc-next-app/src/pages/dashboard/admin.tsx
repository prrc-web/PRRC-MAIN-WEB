import React, { useEffect, useState } from 'react';
import AdminGuard from '../../components/AdminGuard';
import { getCurrentUser, uploadMediaFile } from '../../lib/payload-api';
import AdminUsersList from '../../components/AdminUsersList';

export default function AdminDashboard() {
  const [user, setUser] = useState<any | null>(null);
  const [resumeFile, setResumeFile] = useState<File | null>(null);
  const [message, setMessage] = useState('');

  useEffect(() => {
    getCurrentUser().then((data: any) => {
      setUser(data?.user || null);
    });
  }, []);

  const onResumeUpload = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!resumeFile || !user) return;
    try {
      // In the new schema, Resumes are a separate collection linked to the user
      // For now, we'll just upload the file to Media
      const uploadRes = await uploadMediaFile(resumeFile);
      const mediaId = uploadRes?.doc?.id || uploadRes?.id;
      if (!mediaId) throw new Error('Upload failed');

      // TODO: Create or update a Resume document linked to this user
      // This logic needs to be updated to match the new Resumes collection structure

      setMessage(
        'Resume uploaded (Media only). Full resume linking pending implementation.',
      );
    } catch (err: any) {
      setMessage(err.message || 'Upload failed');
    }
  };

  return (
    <AdminGuard>
      <div style={{ padding: 20 }}>
        <h1>Admin / Researcher Home</h1>
        <p>Welcome {user?.name || user?.email}</p>

        <div>
          <h2>Update Resume</h2>
          <form onSubmit={onResumeUpload}>
            <input
              type="file"
              accept="application/pdf"
              onChange={(e) => setResumeFile(e.target.files?.[0] || null)}
            />
            <button type="submit">Upload Resume</button>
          </form>
        </div>

        {message && <p>{message}</p>}
      </div>
      {/* Admin user list (shows if your role allows listing users) */}
      <h2>Admin: Manage Users</h2>
      <AdminUsersList />
    </AdminGuard>
  );
}
