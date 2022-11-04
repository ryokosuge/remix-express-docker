import React from "react";

const IndexRoute: React.FC<{}> = () => {
  return (
    <div className="flex overflow-hidden relative flex-col justify-center py-6 min-h-screen bg-gray-50 sm:py-12">
      <div className="relative px-6 pt-10 pb-8 bg-white ring-1 ring-gray-900/5 shadow-xl sm:px-10 sm:mx-auto sm:max-w-lg sm:rounded-lg">
        <div className="mx-auto max-w-md">
          <div className="divide-y divide-gray-300/50">
            <div className="py-8 space-y-6 text-base leading-7 text-gray-600">
              <p>Welcome to Remix</p>
              <ul className="space-y-4">
                <li className="flex items-center">
                  <svg
                    className="flex-none w-6 h-6 fill-sky-100 stroke-sky-500 stroke-2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <circle cx="12" cy="12" r="11" />
                    <path
                      d="m8 13 2.165 2.165a1 1 0 0 0 1.521-.126L16 9"
                      fill="none"
                    />
                  </svg>
                  <a
                    className="ml-4"
                    target="_blank"
                    href="https://remix.run/tutorials/blog"
                    rel="noreferrer"
                  >
                    15m Quickstart Blog Tutorial
                  </a>
                </li>
                <li className="flex items-center">
                  <svg
                    className="flex-none w-6 h-6 fill-sky-100 stroke-sky-500 stroke-2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <circle cx="12" cy="12" r="11" />
                    <path
                      d="m8 13 2.165 2.165a1 1 0 0 0 1.521-.126L16 9"
                      fill="none"
                    />
                  </svg>
                  <a
                    className="ml-4"
                    target="_blank"
                    href="https://remix.run/tutorials/jokes"
                    rel="noreferrer"
                  >
                    Deep Dive Jokes App Tutorial
                  </a>
                </li>
                <li className="flex items-center">
                  <svg
                    className="flex-none w-6 h-6 fill-sky-100 stroke-sky-500 stroke-2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <circle cx="12" cy="12" r="11" />
                    <path
                      d="m8 13 2.165 2.165a1 1 0 0 0 1.521-.126L16 9"
                      fill="none"
                    />
                  </svg>
                  <a
                    className="ml-4"
                    target="_blank"
                    href="https://remix.run/docs"
                    rel="noreferrer"
                  >
                    Remix Docs
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default IndexRoute;
