import React from 'react';

export interface ResearchSearchProps {
  /** Current query. The parent owns it, so it can filter the card grid. */
  value: string;
  onChange: (value: string) => void;
  /** Fired on Enter or on the search button. Optional for live filtering. */
  onSubmit?: (value: string) => void;
  placeholder?: string;
  /** Extra classes for the outer form, e.g. to set a max width. */
  className?: string;
}

/**
 * Research search bar.
 *
 * Controlled and presentational: it renders the field and reports changes, and
 * deliberately holds no filtering logic of its own. Mount it wherever the
 * search belongs and pass `value` / `onChange` down from whichever component
 * owns the query — that keeps the cards and the field in sync from one source
 * of truth.
 */
const ResearchSearch: React.FC<ResearchSearchProps> = ({
  value,
  onChange,
  onSubmit,
  placeholder = 'Search research groups…',
  className = '',
}) => {
  return (
    <form
      role="search"
      className={`w-full ${className}`}
      onSubmit={(event) => {
        event.preventDefault();
        onSubmit?.(value);
      }}>
      <label htmlFor="research-search" className="sr-only">
        Search research groups
      </label>

      <div className="flex items-center gap-3 rounded-lg border border-graphiteSky/40 bg-whiteSands px-4 py-3 shadow-sm transition-colors focus-within:border-quantumBlue focus-within:ring-2 focus-within:ring-quantumBlue/40">
        <svg
          aria-hidden="true"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth={2}
          strokeLinecap="round"
          className="size-5 shrink-0 text-graphiteSky">
          <circle cx="11" cy="11" r="7" />
          <path d="m20 20-3.5-3.5" />
        </svg>

        <input
          id="research-search"
          type="search"
          value={value}
          onChange={(event) => onChange(event.target.value)}
          placeholder={placeholder}
          className="w-full bg-transparent text-oreBlue outline-none placeholder:text-graphiteSky"
        />
      </div>
    </form>
  );
};

export default ResearchSearch;
