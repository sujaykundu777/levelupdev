import NextAuth, {NextAuthConfig} from "next-auth"
import GithubProvider from "next-auth/providers/github"

export const authOptions: NextAuthConfig = {
  secret: process.env.NEXT_AUTH_SECRET,
  providers: [
    GithubProvider({
      clientId: process.env.GITHUB_CLIENT_ID,
      clientSecret: process.env.GITHUB_CLIENT_SECRET,
      authorization: {
        params: { prompt: "consent", access_type: "offline", response_type: "code" }
      }
    })
  ],
};

export const { handlers, signIn, signOut, auth } = NextAuth(authOptions)