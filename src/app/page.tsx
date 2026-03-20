import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="lg:my-auto">
      <div className="flex flex-col gap-4">
        <div className="flex flex-col sm:flex-row gap-2 md:gap-5 p-3 outline-4 outline-accent/15">
          <div className="relative w-[150px] lg:w-[250px] aspect-square overflow-hidden">
            <Image src="/me.jpg" alt="me" fill className="object-cover" />
          </div>
          <div className="flex flex-col">
            <h1>Dan Tsivinsky</h1>
            <ul className="list-disc list-inside mt-2">
              <li>
                writing code on{" "}
                <a
                  href="https://github.com/tsivinsky"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  github
                </a>{" "}
                or{" "}
                <a
                  href="https://git.tsivinsky.com/tsivinsky"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  gitea
                </a>
              </li>
              <li>
                posting on{" "}
                <a
                  href="https://bsky.app/profile/tsivinsky.com"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  bluesky
                </a>
              </li>
              <li>
                sometimes reading my{" "}
                <a href="mailto:daniil@tsivinsky.com">email</a>
              </li>
              <li>fiddling with my homelab</li>
            </ul>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-[1fr_30%] gap-4">
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

          <div className="p-3 outline-4 outline-accent/15">
            <h2>Sitemap</h2>
            <ul className="list-disc list-inside mt-1">
              <li>
                <Link href="/projects">projects</Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
