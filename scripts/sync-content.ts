import algoliasearch from 'algoliasearch';
import fs from 'fs';

const client = algoliasearch(process.env.ALGOLIA_APP_ID!, process.env.ALGOLIA_ADMIN_KEY!);
const index = client.initIndex(process.env.ALGOLIA_INDEX_NAME!);

const records = JSON.parse(fs.readFileSync('.next/server/app/static.json.body', 'utf-8'));
await index.replaceAllObjects(records);
console.log('✅ Uploaded successfully');
