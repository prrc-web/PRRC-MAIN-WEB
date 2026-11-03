import React from 'react';
import type { ResearchTag } from '../../data/researchTags';

export interface ResearchTagFilterProps {
  tags: ResearchTag[];
  selectedTagSlugs: string[];
  onToggle: (slug: string) => void;
  /** Renders a "Clear tags" affordance once something is selected. */
  onClear?: () => void;
  className?: string;
}

/**
 * Tag chips for the research groups index.
 *
 * Multi-select and AND-ed: a group must carry every selected tag. Picking two
 * unrelated tags can therefore legitimately return nothing — the page shows an
 * empty state for that rather than silently widening the search.
 *
 * Labels come straight from ResearchTag.name. A few are long ("Wettability &
 * Surface Chemistry") and will wrap onto extra rows; if that reads badly, add a
 * shortName to the tag data and render that here instead.
 */
const ResearchTagFilter: React.FC<ResearchTagFilterProps> = ({
  tags,
  selectedTagSlugs,
  onToggle,
  onClear,
  className = '',
}) => {
  const selected = new Set(selectedTagSlugs);
  const hasSelection = selectedTagSlugs.length > 0;

  return (
    <div
      role="group"
      aria-label="Filter research groups by tag"
      className={`flex flex-wrap items-center gap-2 ${className}`}>
      {tags.map((tag) => {
        const isSelected = selected.has(tag.slug);

        return (
          <button
            key={tag.slug}
            type="button"
            aria-pressed={isSelected}
            onClick={() => onToggle(tag.slug)}
            className={[
              'rounded-full border px-3 py-1.5 text-sm font-medium transition-colors',
              isSelected
                ? 'border-quantumBlue bg-quantumBlue text-whiteSands'
                : 'border-graphiteSky/50 text-cloudCircuit hover:border-quantumBlue hover:text-whiteSands',
            ].join(' ')}>
            {tag.name}
          </button>
        );
      })}

      {hasSelection && onClear && (
        <button
          type="button"
          onClick={onClear}
          className="rounded-full px-3 py-1.5 text-sm font-medium text-graphiteSky underline underline-offset-2 transition-colors hover:text-whiteSands">
          Clear tags
        </button>
      )}
    </div>
  );
};

export default ResearchTagFilter;
