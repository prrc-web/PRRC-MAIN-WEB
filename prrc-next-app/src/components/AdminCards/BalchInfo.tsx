import AdminCard from './AdminCard';

const BalchInfoCard = () => (
  // href lives on AdminCard's own <a>; wrapping it in <Link> produced nested
  // anchors, which is invalid HTML and broke hydration on /AdministrationPage.
  <AdminCard
    href="/Balch"
    name="Dr. Robert Balch"
    title="Director"
    imageUrl="/PRRClogolightoldtransparent.png"
    description="Dr. Robert Balch is the Director of the Petroleum Recovery Research Center located on the campus..."
    phone="(575) 835-5305"
    email="robert.balch@nmt.edu"
    office="Kelly 208"
    resumeLink="Resumes/Balch-CV March 2024.docx"
  />
);

export default BalchInfoCard;
