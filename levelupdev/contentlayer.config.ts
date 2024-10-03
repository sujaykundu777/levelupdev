//contentlayer.config.ts
import { defineDocumentType, defineNestedType, makeSource } from 'contentlayer2/source-files'
// import rehype from 'rehype'
import rehypeAutolinkHeadings from 'rehype-autolink-headings'
import remarkToc from 'remark-toc'
import rehypeSlug from 'rehype-slug'
import remarkGfm from 'remark-gfm'
import rehypePrism from 'rehype-prism-plus';
import rehypeCodeTitles from 'rehype-code-titles';
import lazyLoadPlugin from 'rehype-plugin-image-native-lazy-loading';
    
const Author = defineNestedType(() => ({
    name: 'Author',
    filePathPattern: 'authors/**/*.mdx',
    type: 'Author',
    contentType: 'mdx',
    fields: {
        name: { type: 'string', required: true },
        picture: { type: 'string', required: true },
    },
    computedFields: {
        slug: { type: 'string', resolve: (author: { _raw: { flattenedPath: any } }) => `/authors/${author._raw.flattenedPath}` }
    }
}));

export const Post = defineDocumentType(() => ({
    name: 'Post',
    filePathPattern: `**/*.mdx`,
    contentType: 'mdx',
    fields: {
        title: {
            type: 'string',
            description: 'The title of the post',
        },
        description: {
            type: 'string',
        },
        publishedAt: {
            type: 'date',
            description: 'The date the post was published',
        },
        status: {
            type: 'enum',
            options: ['published', 'draft'],
            default: 'draft',
            required: false,
        },
        slug: {
            type: 'string',
            description: 'The slug of the post',
            required: false,
        },
        author: {
            type: 'nested',
            of: Author,
            required: false,
        },
        featured: {
            type: 'enum',
            options: ["yes", "no"],
            default: 'no',
            required: false,
        },
        tags: {
            type: 'string',
            required: false,
        },
        coverImage: {
            type: 'string',
            description: 'The cover image of the post',
            required: false,
        },
        date: {
            type: 'date',
            description: 'The date the post was published',
        },
    },
    computedFields: {
        url: { type: 'string', resolve: (post) => `/blog/${post._raw.flattenedPath}` }
    },
}))

export default makeSource({
    contentDirPath: 'src/app/(marketing)/blog/posts',
    documentTypes: [Post],
    markdown: {
       remarkPlugins: [remarkGfm, remarkToc ],
       rehypePlugins: [
            rehypeAutolinkHeadings,
            rehypeSlug,
            rehypeCodeTitles,
            rehypePrism,
            // @ts-ignore
            lazyLoadPlugin
        ]
    },
})