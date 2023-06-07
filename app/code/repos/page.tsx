import Link from "next/link";
import { FaStar, FaCodeBranch, FaEye } from "react-icons/fa";

async function getRepos() {
  const response = await fetch("https://api.github.com/users/jotunnjs/repos");
  const repos = response.json();

  return repos;
}

const Repose = async () => {
  const repos = await getRepos();
  console.log("🚀 *** file: page.tsx:11 *** Repose *** repos:", repos);
  return (
    <div>
      <h1>Repos</h1>

      <dl className="max-w-md text-gray-900 divide-y divide-gray-200 dark:text-white dark:divide-gray-700">
        {repos.map((repo: any) => {
          return (
            <div key={repo.id} className="flex flex-col pb-3">
              <dt className="mb-1 text-gray-500 md:text-lg dark:text-gray-400">
                <Link href={repo.html_url}>
                  <h1>{repo.name}</h1>
                  <p>{repo.description}</p>
                  <div className="flex">
                    <span className="flex">
                      <FaStar /> {repo.stargazers_count}
                    </span>
                    <span className="flex">
                      <FaCodeBranch /> {repo.forks_count}
                    </span>
                    <span className="flex">
                      <FaEye /> {repo.watchers_count}
                    </span>
                  </div>
                </Link>
              </dt>
              <dd className="text-lg font-semibold">{repo.name}</dd>
            </div>
          );
        })}
      </dl>
    </div>
  );
};

export default Repose;
