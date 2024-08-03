/** Octokit.js - https://github.com/octokit/auth-oauth-app.js/ */
import { Octokit } from '@octokit/core'
import { createOAuthAppAuth } from '@octokit/auth-oauth-app'

/* octokit config */
const repoOwner = 'sujaykundu777'
const repoName = 'levelupdev'
const clientId = process.env.GITHUB_CLIENT_ID;
const clientSecret = process.env.GITHUB_CLIENT_SECRET;

if (!clientId || !clientSecret) {
    throw new Error('GitHub client ID or client secret is missing.');
}

const appOctokit = new Octokit({
    authStrategy: createOAuthAppAuth,
    auth: {
        clientId,
        clientSecret,
        clientType: 'oauth-app'
    }
});

/* get all posts */
export async function getAllPosts() {
    const path = '/levelupdev/cms/content/posts'
    const url = `https://api.github.com/repos/${repoOwner}/${repoName}/contents/${path}`
    const { data } = await appOctokit.request(`GET ${url}`, {
        owner: repoOwner,
        repo: repoName,
        path
    });
    console.log('data 1', data)

    const postData = data.filter((post: any) => post.name.endsWith('.md') || post.name.endsWith('.mdx'));
    console.log('postData', postData);
    return postData;
}

export async function getPostBySlug(slug: string) {
    const path = `/levelupdev/cms/content/posts/${slug}.md`

    const url = `https://api.github.com/repos/${repoOwner}/${repoName}/contents/${path}`
    const { data } = await appOctokit.request(`GET ${url}`, {
        owner: repoOwner,
        repo: repoName,
        path
    });
    console.log('data 2', data)

    return data;
}

export async function createPost(post: {
    title: string;
    description: string;
    slug: string;
    content: string;
}) {
   const path = `levelupdev/levelupdev/cms/content/posts/${post.slug}.txt`;

    const url = `https://api.github.com/repos/${repoOwner}/${repoName}/contents/${path}`
    console.log('url', url);
    const { data } = await appOctokit.request(`PUT ${url}`, {
        owner: repoOwner,
        repo: repoName,
        path,
        message: 'Create new post',
        content: Buffer.from(post.content).toString('base64'),
    });
    console.log('data 3', data)

    return data;
}

export async function updatePost(post: {
    slug: string;
    content: string;
    sha: string;
}) {
    const path = `/levelupdev/cms/content/posts/${post.slug}.md`

    const url = `https://api.github.com/repos/${repoOwner}/${repoName}/contents/${path}`
    const { data } = await appOctokit.request(`PUT ${url}`, {
        owner: repoOwner,
        repo: repoName,
        path,
        message: 'Update post',
        content: Buffer.from(post.content).toString('base64'),
        sha: post.sha
    });
    console.log('data 4', data)

    return data;
}

export async function deletePost(post: {
    slug: string;
    sha: string;
}) {
    const path = `/levelupdev/cms/content/posts/${post.slug}.md`

    const url = `https://api.github.com/repos/${repoOwner}/${repoName}/contents/${path}`
    const { data } = await appOctokit.request(`DELETE ${url}`, {
        owner: repoOwner,
        repo: repoName,
        path,
        message: 'Delete post',
        sha: post.sha
    });
    return data;
}

