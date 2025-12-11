type Params = {
  params: Promise<{
    slug: string;
  }>;
};
// (1) BẮT BUỘC PHẢI CÓ KHI DÙNG output: "export"
export async function generateStaticParams() {
  // TODO: Fetch danh sách slug từ API hoặc file
  const posts = [
    { slug: "post-1" },
    { slug: "post-2" },
    { slug: "hello-world" },
  ];

  return posts.map((post) => ({
    slug: post.slug,
  }));
}

export async function generateMetadata({ params }: Params) {
  const resolved = await params;
  return {
    title: `Post: ${resolved.slug}`,
  };
}

export default async function Page({ params }: Params) {
  const resolved = await params;

  return (
    <>
      <h1>Slug: {resolved.slug}</h1>
    </>
  );
}
