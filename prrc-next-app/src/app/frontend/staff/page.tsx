import React from 'react';
import { getPayload } from 'payload';
import config from '@payload-config';
import { StaffCard } from '@/components/StaffCard';

export default async function StaffPage() {
  const payload = await getPayload({ config });

  // 1. Fetch everyone, sorted by priority (1 before 10)
  const staffQuery = await payload.find({
    collection: 'staff',
    sort: 'priority',
    limit: 100,
  });

  const staff = staffQuery.docs;

  // 2. Group by Category
  const categories = {
    administration: staff.filter((p: any) => p.category === 'administration'),
    research: staff.filter((p: any) => p.category === 'research'),
    outreach: staff.filter((p: any) => p.category === 'outreach'),
    support: staff.filter((p: any) => p.category === 'support'),
  };

  const Section = ({ title, people }: { title: string, people: any[] }) => (
    people.length > 0 ? (
      <div className="mb-16">
        <h2 className="text-2xl font-bold text-gray-800 border-b pb-2 mb-6">{title}</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {people.map((person) => <StaffCard key={person.id} data={person} />)}
        </div>
      </div>
    ) : null
  );

  return (
    <div className="max-w-7xl mx-auto px-4 py-12">
      <h1 className="text-4xl font-bold text-gray-900 mb-8">Our Team</h1>
      
      <Section title="Administration" people={categories.administration} />
      <Section title="Research Staff" people={categories.research} />
      <Section title="Outreach & Development" people={categories.outreach} />
      <Section title="Support & Operations" people={categories.support} />
    </div>
  );
}