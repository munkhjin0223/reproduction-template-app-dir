import { notFound } from 'next/navigation';

const Page = async () => {
  if (true) {
    notFound();
  }

  return <div>Hello</div>;
};

export default Page;
