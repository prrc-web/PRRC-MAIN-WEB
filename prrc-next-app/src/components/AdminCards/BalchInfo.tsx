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

export default BalchInfoCard;
