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
      },
    })
  ],
  session: {
    strategy: 'jwt',
    // how long (seconds) a user's session is valid before expiring
    maxAge: 432000, // 5 days
  },
  callbacks: {
    async jwt({token}) {
      return token
    },
    async session({ session}) {
      return session
    }
  }
} satisfies NextAuthConfig;

export const { handlers, signIn, signOut, auth } = NextAuth(authOptions)