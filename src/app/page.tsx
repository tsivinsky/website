import Image from "next/image";

export default function Home() {
  return (
    <div className="min-h-screen flex my-5 lg:my-0 lg:justify-center lg:items-center">
      <div className="max-w-[1440px] w-full mx-4 lg:mx-3 flex flex-col gap-4">
        <div className="flex flex-col sm:flex-row gap-2 md:gap-5 p-3 outline-4 outline-accent/15">
          <div className="relative w-[150px] lg:w-[250px] aspect-square overflow-hidden">
            <Image src="/me.jpg" alt="me" fill className="object-cover" />
          </div>
          <div className="flex flex-col">
            <h1>Dan Tsivinsky</h1>
            <p>programmer</p>
            <div className="mt-auto flex items-end gap-2">
              <a
                href="https://github.com/tsivinsky"
                target="_blank"
                rel="noopener noreferrer"
              >
                Github
              </a>
              <a
                href="https://bsky.app/profile/tsivinsky.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                Bluesky
              </a>
              <a href="mailto:daniil@tsivinsky.com">Email</a>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-[1fr_30%] gap-4">
          <div className="p-3 outline-4 outline-accent/15">
            <h2>Projects</h2>
            <ul className="mt-1">
              <li>
                <a
                  href="https://github.com/tsivinsky/use-confirm"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  use-confirm
                </a>
                <p>
                  React hook which allows user to open custom confirm dialog
                  window and wait for result using async/await mechanism.
                </p>
              </li>
              <li>
                <a
                  href="https://github.com/tsivinsky/sshx"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  sshx
                </a>
                <p>
                  Small cli program written in Go to quickly connect to servers
                  via ssh.
                </p>
              </li>
              <li>
                <a
                  href="https://github.com/tsivinsky/goenv"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  goenv
                </a>
                <p>Go library to pass environment variables to struct.</p>
              </li>
            </ul>
          </div>

          <div className="p-3 outline-4 outline-accent/15">
            <h2>Skills</h2>
            <ul className="list-disc list-inside mt-1">
              <li>
                Frontend: Typescript, Javascript, React, Next.js, tailwindcss,
                SCSS
              </li>
              <li>Backend: Go, sqlite</li>
              <li>Other: Git, Docker, Linux</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
