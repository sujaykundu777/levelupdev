'user server'
import { auth } from "@/auth"
import { GetServerSidePropsContext } from "next"
import { User } from "next-auth"

export default async function handler(req: GetServerSidePropsContext, res: { status: (arg0: number) => { (): any; new(): any; json: { (arg0: { isLoggedIn: boolean; user: User | null }): void; new(): any } } }) {
    const session = await auth(req);

    if (!session?.user) {
        res.status(401).json({ isLoggedIn: false, user: null });
    } else {
        res.status(200).json({ isLoggedIn: true, user: session.user });
    }
}