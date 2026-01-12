import React, { useEffect, useState } from 'react';
import AdminGuard from '../../components/AdminGuard';
import {
  getCurrentUser,
  uploadMediaFile,
  createResume,
  getMyResume,
  updateResume,
} from '../../lib/payload-api';
import AdminUsersList from '../../components/AdminUsersList';

export default function AdminDashboard() {
  const [user, setUser] = useState<any | null>(null);
  const [resumeFile, setResumeFile] = useState<File | null>(null);
  const [existingResume, setExistingResume] = useState<any | null>(null);
  const [message, setMessage] = useState('');

  useEffect(() => {
    getCurrentUser().then((data: any) => {
      const u = data?.user || null;
      setUser(u);
      if (u) {
        getMyResume(u.id).then((res) => {
          if (res) setExistingResume(res);
        });
      }
    });
  }, []);

  const onResumeUpload = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!resumeFile || !user) return;
    try {
      // 1. Upload file to Media collection
      const uploadRes = await uploadMediaFile(resumeFile);
      const mediaId = uploadRes?.doc?.id || uploadRes?.id;
      if (!mediaId) throw new Error('Upload failed');

      // 2. Create or Update Resume record
      if (existingResume) {
        await updateResume(existingResume.id, {
          resumeFile: mediaId,
        });
        setMessage('Resume updated successfully.');
      } else {
        await createResume({
          owner: user.id,
          title: 'Researcher Resume',
          resumeFile: mediaId,
        });
        setMessage('Resume created successfully.');
      }
      
      // Refresh resume data
      const updated = await getMyResume(user.id);
      setExistingResume(updated);
      
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
