import React from 'react';

interface AdminCardProps {
  name: string;
  title: string;
  imageUrl: string;
  description: string;
  href?: string;
  phone?: string;
  email?: string;
  office?: string;
  resumeLink?: string;
}

const AdminCard: React.FC<AdminCardProps> = ({
  name,
  title,
  imageUrl,
  description,
  href = '#',
  phone,
  email,
  office,
  resumeLink,
}) => {
  return (
    <div className="box-content size-90 border-0">
      <a href={href} className="group relative block bg-black h-full">
        <div className="relative h-full w-full overflow-hidden">
          <img
            alt={name}
            src={imageUrl}
            className="absolute inset-0 h-120 w-full object-cover opacity-85 transition-opacity group-hover:opacity-45"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/95 via-black/23 to-transparent h-[50%] pointer-events-none" />

          <div className="relative p-2 sm:p-6 lg:p-2">
            <p className="text-sm font-medium uppercase tracking-widest text-switch2">
              {title}
            </p>

            <p className="text-l font-bold text-white sm:text-2xl">{name}</p>

            <div className="mt-32 sm:mt-48 lg:mt-52">
              <div className="translate-y-8 transform opacity-0 transition-all group-hover:translate-y-0 group-hover:opacity-100">
                <div className="group mt-4 inline-flex items-center gap-1 text-sm font-medium text-switch2">
                  See more
                  <span
                    aria-hidden="true"
                    className="block transition-all group-hover:ms-0.5 rtl:rotate-180">
                    &rarr;
                  </span>
                </div>
                <p className="text-sm text-white pt-1">{description}</p>

                {/* Contact Information */}
                {phone && (
                  <div className="text-white mt-2">
                    <i className="fa fa-phone mr-2"></i>P: {phone}
                  </div>
                )}
                {email && (
                  <div className="text-white mt-1">
                    <i className="fas fa-envelope mr-2"></i>E: {email}
                  </div>
                )}
                {office && (
                  <div className="text-white mt-1 mb-2">
                    <i className="fas fa-building mr-2"></i>O: {office}
                  </div>
                )}

                {resumeLink && (
                  <button
                    className="btn btn-primary mt-2"
                    onClick={() => window.open(resumeLink, '_blank')}>
                    Resume
                  </button>
                )}
              </div>
            </div>
          </div>
        </div>
      </a>
    </div>
  );
};

export default AdminCard;
