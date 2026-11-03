import React from 'react';
import type { GetStaticPaths, GetStaticProps, InferGetStaticPropsType } from 'next';
import Head from 'next/head';
import ResearchGroupPage from '../../components/layouts/ResearchGroup';
import { RESEARCH_GROUPS } from '../../data/researchGroups';
import type { ResearchGroup } from '../../data/researchGroups';

/**
 * /ResearchPage/[slug] — one route per research group.
 *
 * Statically generated from RESEARCH_GROUPS at build time; `fallback: false`
 * means an unknown slug is a 404 rather than a runtime render. When the corpus
 * moves to Payload, swap these two functions for the collection query — the
 * page component keeps taking a single `group`.
 */
export const getStaticPaths: GetStaticPaths = async () => ({
  paths: RESEARCH_GROUPS.map((group) => ({ params: { slug: group.slug } })),
  fallback: false,
});

export const getStaticProps: GetStaticProps<{ group: ResearchGroup }> = async ({ params }) => {
  const group = RESEARCH_GROUPS.find((item) => item.slug === params?.slug);

  if (!group) return { notFound: true };

  return { props: { group } };
};

export default function ResearchGroupRoute({
  group,
}: InferGetStaticPropsType<typeof getStaticProps>) {
  return (
    <>
      <Head>
        <title>{`${group.title} | PRRC`}</title>
      </Head>
      <ResearchGroupPage group={group} />
    </>
  );
}
