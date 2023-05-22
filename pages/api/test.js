// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

import { getSession} from "next-auth/react"

export default async function handler(req, res) {
    console.log(
        req.body
    )
    res.send({error: "PIZDA"})
    // if (session) {
    //   const {accessToken, apiDomain } = session;
    //
    //   const data = await fetch(`${apiDomain}/api/v1/users/me`, {
    //     method: 'GET',
    //     headers: {
    //       'Authorization': 'Bearer ' + accessToken
    //     }})
    //       .then(res => res.json());
    //   res.send(data)
    // } else {
    //   res.send({error: "You must be sign in to view the protected content on this page.",})
    // }
}