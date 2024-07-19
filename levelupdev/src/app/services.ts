// backend for our app
import { Octokit, App } from "octokit"

// const octokit = new Octokit({
//     auth: process.env.GITHUB_TOKEN,
// })

export async function getAllPosts() {
    // const response = await octokit.request('GET /repos/{owner}/{repo}/contents/{path}', {
    //     owner
    //     repo
    //     path
    // })
    // return response.data
    return [{
        'title': 'Hello world from backend',
        'description': 'This is backend description'
    }]
}
