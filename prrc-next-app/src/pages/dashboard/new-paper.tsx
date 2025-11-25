import React, { useEffect, useState } from 'react';
import {
  getResearchers,
  uploadMediaFile,
  createPaper,
} from '../../lib/payload-api';

import AdminGuard from '../../components/AdminGuard';

export default function NewPaper() {
  const [title, setTitle] = useState('');
  const [abstract, setAbstract] = useState('');
  const [researchers, setResearchers] = useState<any[]>([]);
  const [selectedAuthors, setSelectedAuthors] = useState<string[]>([]);
  const [file, setFile] = useState<File | null>(null);
  const [message, setMessage] = useState('');

  useEffect(() => {
    getResearchers().then((r) => setResearchers((r as any).docs || []));
  }, []);

  const submit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      let fileId;
      if (file) {
        const upload = await uploadMediaFile(file);
        fileId = upload?.doc?.id || upload?.id || null;
      }
      const payload: any = {
        title,
        abstract,
        authors: selectedAuthors,
      };
      if (fileId) payload.file = fileId;
      await createPaper(payload);
      setMessage('Paper created');
      setTitle('');
      setAbstract('');
      setSelectedAuthors([]);
      setFile(null);
    } catch (err: any) {
      setMessage(err.message || 'Failed');
    }
  };

  return (
    <AdminGuard>
      <div style={{ padding: 20 }}>
        <h1>New Research Paper</h1>
        <form onSubmit={submit}>
          <div>
            <label>Title</label>
            <input value={title} onChange={(e) => setTitle(e.target.value)} />
          </div>
          <div>
            <label>Abstract</label>
            <textarea
              value={abstract}
              onChange={(e) => setAbstract(e.target.value)}
            />
          </div>
          <div>
            <label>Authors</label>
            <select
              multiple
              value={selectedAuthors}
              onChange={(e) =>
                setSelectedAuthors(
                  Array.from(e.target.selectedOptions, (o) => o.value),
                )
              }>
              {researchers.map((r) => (
                <option key={r.id} value={r.id}>
                  {r.name}
                </option>
              ))}
            </select>
          </div>
          <div>
            <label>PDF</label>
            <input
              type="file"
              accept="application/pdf,image/*"
              onChange={(e) => setFile(e.target.files?.[0] || null)}
            />
          </div>
          <div>
            <button type="submit">Create</button>
          </div>
        </form>
        {message && <p>{message}</p>}
      </div>
    </AdminGuard>
  );
}
