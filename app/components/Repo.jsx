import React from 'react'
import Link from 'next/link'
import { FaStar, FaCodeBranch, FaEye } from 'react-icons/fa'

const fetchRepo = async (name) => {
    const response = await fetch(`https://api.github.com/repos/jotunnjs/${name}`)
    const repo = await response.json()
    return repo
}
const Repo = async ({ name }) => {
    const repo = await fetchRepo(name)
    return (
        <>
            <h2>{repo.name}</h2>
            <p>{repo.description}</p>
            <div>
                <div>
                    <FaStar />
                    <span>{repo.strangers_count}</span>
                </div>
                <div>
                    <FaCodeBranch />
                    <span>{repo.forks_count}</span>
                </div>
                <div>
                    <FaEye />
                    <span>{repo.watcher_count}</span>
                </div>
            </div>

        </>
    )
}

export default Repo