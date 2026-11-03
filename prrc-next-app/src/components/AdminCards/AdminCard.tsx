import React from 'react';

interface AdminCardProps {
  name: string;
  title: string;
  imageUrl: string; // reserved — card backdrop is the PRRC logo image
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
  description,
  href = '#',
  phone,
  email,
  office,
  resumeLink,
}) => {
  return (
    <div className="box-content size-90 border-0">
      <a
        href={href}
        className="group relative block h-full bg-whiteSands">
        <div className="relative h-full w-full overflow-hidden">
          {/* Card backdrop: PRRC logo (WhiteBG) fills the card behind the text. */}
          <img
            src="/PRRC-Logo-WhiteBG.png"
            alt=""
            aria-hidden="true"
            className="pointer-events-none absolute inset-0 h-full w-full object-contain"
          />
          {/* 85% black scrim over the backdrop, fades in on hover. */}
          <div className="pointer-events-none absolute inset-0 bg-black/85 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />

          <div className="relative p-2 sm:p-6 lg:p-2">
            <p className="text-sm font-medium uppercase tracking-widest text-switch2">
              {title}
            </p>

            <p className="text-l font-bold text-oreBlue transition-colors duration-300 group-hover:text-white sm:text-2xl">{name}</p>

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
                <p className="text-sm text-oreBlue transition-colors duration-300 group-hover:text-white pt-1">{description}</p>

                {/* Contact Information */}
                {phone && (
                  <div className="text-oreBlue transition-colors duration-300 group-hover:text-white mt-2">
                    <i className="fa fa-phone mr-2"></i>P: {phone}
                  </div>
                )}
                {email && (
                  <div className="text-oreBlue transition-colors duration-300 group-hover:text-white mt-1">
                    <i className="fas fa-envelope mr-2"></i>E: {email}
                  </div>
                )}
                {office && (
                  <div className="text-oreBlue transition-colors duration-300 group-hover:text-white mt-1 mb-2">
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
