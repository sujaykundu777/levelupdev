import { format, parseISO } from "date-fns";
import { allPosts } from "contentlayer/generated";
import Link from "next/link";
import Image from "next/image";
import { useMDXComponent } from "next-contentlayer2/hooks";
import { mdxComponents } from "../../../components/MdxComponents";
// import MDXContent from "../../../components/MdxContent";

export const generateStaticParams = async () =>
  allPosts.map((post) => ({ slug: post._raw.flattenedPath }));

export const generateMetadata = ({ params }: { params: { slug: string } }) => {
  const post = allPosts.find((post) => post._raw.flattenedPath === params.slug);
  if (!post) throw new Error(`Post not found for slug: ${params.slug}`);
  return { title: post.title };
};

const PostLayout = ({ params }: { params: { slug: string } }) => {
  const post = allPosts.find((post) => post._raw.flattenedPath === params.slug);

  const MDXContent = post ? useMDXComponent(post.body.code) : null;

  if (!post) throw new Error(`Post not found for slug: ${params.slug}`);

  return (
    <div className="py-20">
      <article className="mx-auto max-w-4xl py-8 prose md:prose-lg lg:prose-xl dark:prose-invert">
        <div className="mb-8 text-center">
          <time dateTime={post.date} className="mb-1 text-xs text-gray-600">
            {post && post.date
              ? format(parseISO(post.date), "LLLL d, yyyy")
              : ""}
          </time>

          <h1 className="text-3xl font-bold text-lime-500">{post.title}</h1>
          <p className="prose-free">{post.description}</p>

          {post.coverImage &&
            (post.url ? (
              <Link href={post.url} aria-label={`Link to ${post.title}`}>
                <a>
                  <Image
                    src={post.coverImage}
                    alt={post.title || ""}
                    width={600}
                    height={400}
                    layout="responsive"
                    className="object-cover object-center md:h-36 lg:h-48"
                    priority
                  />
                </a>
              </Link>
            ) : (
              <Image
                alt={post.title || ""}
                src={post.coverImage}
                width={600}
                height={400}
                layout="responsive"
                className="object-cover object-center md:h-36 lg:h-48"
                priority
              />
            ))}
        </div>
        {/* <div
          className="[&>*]:mb-3 [&>*:last-child]:mb-0"
          dangerouslySetInnerHTML={{ __html: post.body.html }}
        /> */}
        {/* <MDXContent code={post.body.html} /> */}
        <div className="[&>*]:mb-3 [&>*:last-child]:mb-0">
          {MDXContent && <MDXContent components={mdxComponents} />}
        </div>
      </article>
    </div>
  );
};

export default PostLayout;
