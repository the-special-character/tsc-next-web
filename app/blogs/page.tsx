import '@/styles/blogs.css';
import BlogSubscribe, { BlogSubscribeSkeleton } from './blogSubscribe';
import PageHeader, { PageHeaderSkeleton } from '@/ui/pageHeader';
import { Suspense, use } from 'react';
import FeatureBlog, { FeatureBlogsSkeleton } from '@/ui/FeatureBlog';
import AllBlogs from './allBlogs';
import { getHomeBlogData } from '@/lib/getHomeBlog';
import { notFound } from 'next/navigation';

export default async () => {
  const homeBlogData = await getHomeBlogData();

  if (!homeBlogData) {
    notFound();
  }

  const blogList = homeBlogData.data.blogs.data;

  return (
    <>
      <Suspense fallback={<PageHeaderSkeleton />}>
        {/* @ts-expect-error Async Server Component */}
        <PageHeader
          pageName="blogs"
          className="customClass"
          circleRight="bg-primary"
          circleLeft="bg-secondary3"
        />
      </Suspense>
      <section className="blogs">
        <Suspense fallback={<FeatureBlogsSkeleton />}>
          {/* @ts-expect-error Async Server Component */}
          <FeatureBlog />
        </Suspense>
      </section>
      <Suspense fallback={<BlogSubscribeSkeleton />}>
        <BlogSubscribe />
      </Suspense>

      <AllBlogs blogList={blogList} />
    </>
  );
};
