import React, { useEffect, useState } from 'react';
import { getUsers, deleteUser, getCurrentUser } from '../lib/payload-api';

export default function AdminUsersList() {
  const [users, setUsers] = useState<any[]>([]);
  const [currentUser, setCurrentUser] = useState<any | null>(null);

  useEffect(() => {
    getCurrentUser()
      .then((res: any) => setCurrentUser(res?.user || null))
      .catch(() => setCurrentUser(null));
  }, []);

  useEffect(() => {
    if (!currentUser || currentUser.role !== 'admin') return;
    getUsers()
      .then((res: any) => setUsers(res?.docs || []))
      .catch(() => setUsers([]));
  }, [currentUser]);

  const confirmAndDelete = async (id: string) => {
    if (!confirm('Delete this user? This action cannot be undone.')) return;
    try {
      await deleteUser(id);
      setUsers((u) => u.filter((x) => x.id !== id && x._id !== id));
    } catch (err) {
      alert('Delete failed');
    }
  };

  return (
    <div>
      <h3>Users in System</h3>
      {users?.length ? (
        <ul>
          {users.map((u) => (
            <li key={u.id || u._id}>
              {u.displayName || u.name || u.email} — {u.email}
              {currentUser?.role === 'admin' && (
                <button
                  onClick={() => confirmAndDelete(u.id || u._id)}
                  style={{ marginLeft: 8 }}>
                  Delete
                </button>
              )}
            </li>
          ))}
        </ul>
      ) : (
        <p>No users or you don't have permission to view users.</p>
      )}
    </div>
  );
}
