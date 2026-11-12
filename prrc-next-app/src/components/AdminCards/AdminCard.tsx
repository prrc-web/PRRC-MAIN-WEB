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
  resumeLink,
}) => {
  return (
    <div className="h-[30rem] w-full border-0">
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

          <div className="relative flex h-full flex-col p-2 sm:p-6 lg:p-2">
            <p className="shrink-0 text-sm font-medium uppercase tracking-widest text-switch2">
              {title}
            </p>

            <p className="shrink-0 text-l font-bold text-oreBlue transition-colors duration-300 group-hover:text-white sm:text-2xl">{name}</p>

            <div className="mt-auto pb-1 pt-8">
              <div className="translate-y-2 transform opacity-0 transition-all group-hover:translate-y-0 group-hover:opacity-100">
                <div className="group mt-4 inline-flex items-center gap-1 text-sm font-medium text-switch2">
                  See more
                  <span
                    aria-hidden="true"
                    className="block transition-all group-hover:ms-0.5 rtl:rotate-180">
                    &rarr;
                  </span>
                </div>
                <p className="line-clamp-2 text-sm text-oreBlue transition-colors duration-300 group-hover:text-white pt-1">{description}</p>

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
