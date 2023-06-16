import React from 'react'
import Link from 'next/link'

const fetchRepoContents = async (name) => {

    new Promise((resolve) => { setTimeout(() => { resolve }, 3000) })
    const response = await fetch(`https://api.github.com/repos/jotunnjs/${name}/contents`)
    const contents = await response.json();

    return contents
}

const RepoList = async ({ name }) => {
    const contents = await fetchRepoContents(name)
    const dirs = contents.filter(({ type }) => type === 'dir')
    return (
        <>

            <h3>Directories</h3>
            <ul>
                {
                    dirs.map((dir) => {
                        return (
                            <li key={dir.path}>
                                <Link href={dir.path}>
                                    {dir.name}

                                </Link>

                            </li>
                        )
                    })
                }
            </ul>
        </>
    )
}

export default RepoList