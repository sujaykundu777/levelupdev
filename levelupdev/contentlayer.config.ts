//contentlayer.config.ts
import { defineDocumentType, makeSource } from 'contentlayer2/source-files'

export const Post = defineDocumentType(() => ({
    name: 'Post',
    filePathPattern: `**/*.md`,
    contentType: 'markdown',
    fields: {
        title: {
            type: 'string',
            description: 'The title of the post',
        },
        date: {
            type: 'date',
            description: 'The date the post was published',
        },
    },
    computedFields: {
        url: { type: 'string', resolve: (post) => `/blog/posts/${post._raw.flattenedPath}` }
    },
}))

export default makeSource({
    contentDirPath: 'src/app/blog/posts',
    documentTypes: [Post],
    markdown: {},
})