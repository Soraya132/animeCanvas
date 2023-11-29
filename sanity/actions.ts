import { groq } from 'next-sanity';
import { readClient } from './lib/client';
import { buildQuery } from './utils';

interface GetResourcesParams {
  query: string;
  category: string;
  page: number;
}

export const getResourcesPlaylist = async () => {
  try {
    const resources = await readClient.fetch(
      groq`*[_type == "resourcePlaylist"]{
        _id,
        title,
        resources[0...14]->{
          title,
          _id,
          downloadLink,
          "image": poster.asset->url,
          category
        }
      }`
    );

    return resources;
  } catch (error) {
    console.log(error);
  }
}

export const getResources = async (params: GetResourcesParams) => {
  const { query, category, page } = params;

  try {
    const resources = await readClient.fetch(
      groq`${buildQuery({
        type: 'resource',
        query,
        category,
        page: page,
      })}{
        title,
        _id,
        downloadLink,
        "image": poster.asset->url,
        slug,
        category
      }`
    );

    return resources;
  } catch (error) {
    console.log(error);
  }
}