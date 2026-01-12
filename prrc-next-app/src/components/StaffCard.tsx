import React from 'react';
import { Media, Staff } from '@/payload-types';

export const StaffCard = ({ data }: { data: Staff }) => {
  const headshot = data.headshot as Media | null;
  const imageUrl = headshot?.url || '/prrcblankuser.jpeg';

  return (
    <div className="bg-white border border-gray-200 rounded-lg shadow-sm hover:shadow-md transition-all flex flex-col h-full">
      <div className="flex p-4 gap-4 items-start">
        <img 
          src={imageUrl} 
          alt={data.name} 
          className="w-20 h-20 rounded-full object-cover border-2 border-gray-100"
        />
        <div>
          <h3 className="text-lg font-bold text-gray-900">{data.name}</h3>
          <p className="text-sm font-medium text-blue-800">{data.title}</p>
          <p className="text-xs text-gray-500 uppercase tracking-wide mt-1">{data.position}</p>
        </div>
      </div>
      <div className="px-4 pb-4 mt-auto">
        <div className="pt-3 border-t border-gray-100 text-sm space-y-1">
            <div className="flex items-center gap-2 text-gray-600">
                <span>📧</span> <a href={`mailto:${data.contactInfo?.email}`} className="hover:text-blue-600">{data.contactInfo?.email}</a>
            </div>
            {data.contactInfo?.phone && (
                <div className="flex items-center gap-2 text-gray-600">
                    <span>📞</span> {data.contactInfo.phone}
                </div>
            )}
        </div>
      </div>
    </div>
  );
};