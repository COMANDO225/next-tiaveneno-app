import NextAuth from "next-auth";

import GitHubProvider from 'next-auth/providers/github'

export default NextAuth({
    providers: [
        GitHubProvider({
            clientId: '6e9b3e2acd3c06d14473',
            clientSecret: 'd9b7bd2102651263c397a667797bccb2f2f30a9f'
        })
    ]
})
