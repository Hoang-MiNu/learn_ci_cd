type Params = {
  params: {
    slug: string;
  };
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

// (2) Metadata theo slug
export async function generateMetadata({ params }: Params) {
  return {
    title: `Post: ${params.slug}`,
  };
}

// (3) Page component
export default function Page({ params }: Params) {
  return (
    <>
      <h1>Slug: {params.slug}</h1>
    </>
  );
}
