import type {Metadata} from 'next';
import type {CaseStudy} from '@/types';

export async function generateMetadata({
  params,
}: {
  params: {slug: string};
}): Promise<Metadata> {
  const caseStudy: CaseStudy = await fetch(
    `${process.env.NEXT_PUBLIC_HOSTNAME}/api/work/caseStudies/slug`,
    {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({slug: params.slug}),
    }
  ).then(res => res.json());

  return {
    title: `${caseStudy.title} | Elliot Saha's Portfolio`,
    description: caseStudy.shortDescription,
    openGraph: {
      images: [caseStudy.cover, caseStudy.icon],
    },
  };
}

const Layout = ({children}: {children: React.ReactNode}) => children;

export default Layout;
