import React from 'react';

interface SectionHeadingProps {
  /** Kicker above the header — Montserrat Medium, ALL CAPS (title role). */
  title: string;
  /** The section's header — Montserrat Extra Bold (primary header role). */
  header: string;
  /** Optional supporting line, body weight. */
  description?: string;
  /** id on the header, so <section aria-labelledby="..."> resolves. */
  headerId?: string;
  className?: string;
}

/**
 * Shared heading block for the research-group page sections (2–4).
 *
 * Order and roles follow the type system, not the visual hierarchy you might
 * guess from the words:
 *
 *   title  -> Title    : 500 Medium, ALL CAPS, tracked    ("AT A GLANCE")
 *   header -> Primary  : 800 Extra Bold                   ("Recent Projects and Materials")
 *
 * So the all-caps kicker sits above, the heavy header carries the section. The
 * kicker is a <p>, not a heading: it labels the section without joining the
 * document outline, which stays h1 (project) -> h2 (group) -> h2 (section).
 */
const SectionHeading = ({ title, header, description, headerId, className }: SectionHeadingProps) => {
  return (
    <div className={['text-center', className].filter(Boolean).join(' ')}>
      <p className="type-title text-sm tracking-widest text-cloudCircuit sm:text-base">{title}</p>

      <h2
        id={headerId}
        className="type-header mt-3 text-3xl text-balance text-whiteSands sm:text-4xl">
        {header}
      </h2>

      {description && (
        <p className="type-body mx-auto mt-4 max-w-2xl text-base text-pretty text-cloudCircuit sm:text-lg/relaxed">
          {description}
        </p>
      )}
    </div>
  );
};

export default SectionHeading;
