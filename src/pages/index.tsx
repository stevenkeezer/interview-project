import { gql } from '@apollo/client';
import * as React from 'react';

import Layout from '@/components/layout/Layout';
import UnderlineLink from '@/components/links/UnderlineLink';

import { client } from '../lib/apollo';

export default function HomePage({ posts }: { posts: any }) {
  console.log(posts);

  return (
    <Layout>
      <main>
        <section className='bg-white'>
          <div className='flex justify-center'>
            <h1 className='mt-4'>True Social Digital Marketing Starter</h1>

            <footer className='absolute bottom-2 text-gray-700'>
              © {new Date().getFullYear()} By{' '}
              <UnderlineLink href='https://theodorusclarence.com?ref=tsnextstarter'>
                TSDM
              </UnderlineLink>
            </footer>
          </div>
        </section>
      </main>
    </Layout>
  );
}

export async function getStaticProps() {
  const GET_POSTS = gql`
    query getPosts {
      posts {
        nodes {
          title
        }
      }
    }
  `;

  const { data } = await client.query({
    query: GET_POSTS,
  });

  return {
    props: {
      posts: data.posts.nodes,
    },
    revalidate: 1,
  };
}
