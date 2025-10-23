// import { source } from '@/lib/source';
// import { createFromSource } from 'fumadocs-core/search/server';

// export const { GET } = createFromSource(source, {
//   // https://docs.orama.com/docs/orama-js/supported-languages
//   language: 'english',
// });

import { exportSearchIndexes } from '@/lib/export-search-indexes';

export const revalidate = false;

export async function GET() {
  return Response.json(await exportSearchIndexes());
}