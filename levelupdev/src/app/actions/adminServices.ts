// backend for our app
//import { Octokit, App } from "octokit"

// import { createAppAuth } from "@octokit/auth-app";

// const octokit = new Octokit({
//     auth: process.env.GITHUB_TOKEN,
// })

 // const octokit = new Octokit({
    //     auth: {
    //         clientId: process.env.GITHUB_CLIENT_ID,
    //         clientSecret: process.env.GITHUB_CLIENT_SECRET,
    //     }
    // });

    // Now you can make requests using the authenticated octokit instance
    // const installations = await octokit.request("GET /app/installations");
    // console.log('installations', installations)


// ref: https://github.com/octokit/auth-app.js/?tab=readme-ov-file#authenticate-as-github-app-json-web-token 
// const auth = createAppAuth({
//   appId: 1,
//   privateKey: "-----BEGIN PRIVATE KEY-----\n...",
//   clientId: process.env.GITHUB_CLIENT_ID,
//   clientSecret: process.env.GITHUB_CLIENT_SECRET,
// });

// Retrieve JSON Web Token (JWT) to authenticate as app
// const appAuthentication = await auth({ type: "app" });

// for oauth app
// const auth = createOAuthAppAuth({
//     clientId,
//     clientSecret,
//     clientType: 'oauth-app'
// }) 
// const appAuthentication = await auth({ type: 'oauth-app' });
// console.log('appAuthentication', appAuthentication)


export async function fetchAllPosts() {

   
    // const response = await octokit.request('GET /repos/{owner}/{repo}/contents/{path}', {
    //     owner
    //     repo
    //     path
    // })
    // return response.data

    //     const appAuthentication = await appOctokit.auth({
    //     type: 'oauth-app',
    // });
      
    // console.log('appAuthentication1', appAuthentication)
    // const accessToken = appAuthentication.headers.authorization;
    
    //     const repoOwner = 'sujaykundu777'
    // const repoName = 'levelupdev'
    // const path = '/levelupdev/cms/content/posts'


    // const url = `https://api.github.com/repos/${repoOwner}/${repoName}/contents/${path}`
    // const { data } = await appOctokit.request(`GET ${url}`, {
    //     // headers: {
    //     //     authorization: `token ${accessToken}`,
    //     //     'X-GitHub-Api-Version': '2022-11-28'
    //     // },
    //     owner: repoOwner,
    //     repo: repoName,
    //     path
    // });
    // console.log('data 1', data)

    return [{
        'title': 'Hello world from backend',
        'description': 'This is backend description'
    }]
}
