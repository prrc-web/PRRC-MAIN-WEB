import React from 'react';

export interface ResearchSearchProps {
  /** Current query. The parent owns it, so it can filter the group list. */
  value: string;
  onChange: (value: string) => void;
  /** Fired on Enter or the submit button. Optional: filtering is live. */
  onSubmit?: (value: string) => void;
  placeholder?: string;
  /** Extra classes for the outer form, e.g. to set a max width. */
  className?: string;
  /** Renders a clear button once there is something to clear. */
  onClear?: () => void;
}

/**
 * Research search bar.
 *
 * Controlled and presentational: it renders the field and reports changes, and
 * holds no filtering logic of its own. Matching lives in
 * lib/searchResearchGroups.ts; the tag chips are a sibling component
 * (ResearchTagFilter). The parent owns the query so the field, the chips, the
 * result count and the card grid all read from one source of truth.
 */
const ResearchSearch: React.FC<ResearchSearchProps> = ({
  value,
  onChange,
  onSubmit,
  placeholder = 'Search research groups…',
  className = '',
  onClear,
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

        {value.length > 0 && onClear && (
          <button
            type="button"
            onClick={onClear}
            className="shrink-0 rounded px-2 py-1 text-sm font-medium text-graphiteSky transition-colors hover:text-oreBlue">
            Clear
          </button>
        )}
      </div>
    </form>
  );
};

export default ResearchSearch;
