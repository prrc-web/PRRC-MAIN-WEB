import React from 'react';

interface SectionHeadingProps {
  /** Section title — Montserrat Extra Bold, centered. */
  title: string;
  /** Optional header beneath the title — Montserrat Medium. */
  subtitle?: string;
  /** Optional supporting line, body weight. */
  description?: string;
  /** id for the title, so <section aria-labelledby="..."> resolves. */
  titleId?: string;
  className?: string;
}

/**
 * Shared heading block for the research-group page sections (2–4).
 *
 * Two roles stacked, centered:
 *   title    -> Primary header, 800  ("At a Glance")
 *   subtitle -> Subheader, 500      ("Recent Projects and Materials")
 *
 * Centered because section titles read as banners over the content below them;
 * body copy inside the sections keeps its own alignment.
 */
const SectionHeading = ({ title, subtitle, description, titleId, className }: SectionHeadingProps) => {
  return (
    <div className={['text-center', className].filter(Boolean).join(' ')}>
      <h2 id={titleId} className="type-header text-3xl text-balance text-whiteSands sm:text-4xl">
        {title}
      </h2>

      {subtitle && (
        <h3 className="type-subheader mt-4 text-lg text-balance text-whiteSands sm:text-xl">
          {subtitle}
        </h3>
      )}

      {description && (
        <p className="type-body mx-auto mt-4 max-w-2xl text-base text-pretty text-cloudCircuit sm:text-lg/relaxed">
          {description}
        </p>
      )}
    </div>
  );
};

export default SectionHeading;
