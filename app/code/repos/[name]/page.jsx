import { Suspense } from 'react'
import Link from 'next/link'

import Repo from './../../../components/Repo'
import RepoList from './../../../components/RepoList'

const RepoPage = ({ params: { name } }) => {
    return (
        <div>
            <h2>{name}</h2>
            <Link href={'/code/repos'}>Back to Repos</Link>
            <p>Repo details</p>
            <Suspense fallback={'Loading...'}>

                <Repo name={name} />
                <RepoList name={name} />
            </Suspense>
        </div>
    )
}

export default RepoPage