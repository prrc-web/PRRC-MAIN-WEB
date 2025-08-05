<<<<<<< HEAD
import React from 'react';
import Image from 'next/image';

const BalchAdmin = () => {
  return (
    <>
      <div className="box-content size-90 border-0">
        <a href="#" className="group relative block bg-black h-full ">
          <div className="relative h-full w-full overflow-hidden">
            <Image
              alt="Dr. Robert Balch"
              src="/balch.jpg"
              width={500}
              height={500}
              className="absolute inset-0 h-120 w-full object-cover opacity-85 transition-opacity group-hover:opacity-45 "
            />
            <div className="absolute inset-0 bg-gradient-to-b from-black/95 via-black/23 to-transparent h-[50%] pointer-events-none" />
=======
import Link from 'next/link';
import AdminCard from './AdminCard';

const BalchInfoCard = () => (
  // Renamed for clarity
  <Link href="/Balch">
    {' '}
    <AdminCard
      name="Dr. Robert Balch"
      title="Director"
      imageUrl="/balch.jpg"
      description="Dr. Robert Balch is the Director of the Petroleum Recovery Research Center located on the campus..."
      phone="(575) 835-5305"
      email="robert.balch@nmt.edu"
      office="Kelly 208"
      resumeLink="Resumes/Balch-CV March 2024.docx"
    />
  </Link>
);
>>>>>>> 03c0f1afbb667d0b9f2a3f2b07e9eae00ed3e6dc

export default BalchInfoCard;
