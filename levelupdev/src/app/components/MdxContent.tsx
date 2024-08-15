import { useMDXComponent } from "next-contentlayer2/hooks";
import type { MDXComponents } from "mdx/types";
import * as React from "react";
// here we will define the rules how our mdx content syntax will be converted to HTML
// otherwise imported components can be used just inside MDX

// const p = (props: React.HTMLProps<HTMLParagraphElement>) => {
//     return <div className="my-6" {...props} />
// }

// MDX Components
const components: MDXComponents = {
  h1: ({ ...props }) => (
    <h1
      className="mt-2 scroll-m-20 text-4xl dark:text-green-500 font-bold tracking-tight"
      {...props}
    />
  ),
  h2: ({ ...props }) => (
    <h2
      className="mt-2 scroll-m-20 text-3xl font-semibold tracking-tight"
      {...props}
    />
  ),
  h3: ({ ...props }) => (
    <h3
      className="mt-2 scroll-m-20 text-2xl font-semibold tracking-tight"
      {...props}
    />
  ),
  h4: ({ ...props }) => (
    <h4
      className="mt-2 scroll-m-20 text-xl font-semibold tracking-tight"
      {...props}
    />
  ),
  h5: ({ ...props }) => (
    <h5
      className="mt-8 scroll-m-20 text-lg font-semibold tracking-tight"
      {...props}
    />
  ),
  h6: ({ ...props }) => (
    <h6
      className="mt-8 scroll-m-20 text-base font-semibold tracking-tight"
      {...props}
    />
  ),
  p: ({ ...props }) => <div className="my-6" {...props} />,
  pre: ({ ...props }) => (
    <pre
      className="relative px-4 font-mono text-sm mb-4 mt-6 overflow-x-auto rounded-lg border bg-black py-8"
      {...props}
    />
  ),
};

interface IProps {
  code: string;
}

const MDXContent: React.FC<IProps> = ({ code }) => {
  const Component = useMDXComponent(code);
  return <Component components={components} />;
};

export default MDXContent;
