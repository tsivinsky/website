import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div>
      <div className="flex gap-2 md:gap-4 flex-col md:flex-row">
        <div className="shrink-0 w-[128px] h-[128px] md:w-[192px] md:h-[192px] relative overflow-hidden">
          <Image
            src="/me.jpg"
            alt="Me"
            fill
            className="scale-125 object-cover"
          />
        </div>
        <div className="flex flex-col">
          <h1>Dan Tsivinsky</h1>
          <p>
            Hi, this is my personal website. Here you can find info about me and
            my projects.
          </p>
          <div className="mt-auto flex gap-2">
            <a
              href="https://github.com/tsivinsky"
              target="_blank"
              rel="me noopener noreferrer"
            >
              Github
            </a>
            <a href="mailto:daniil@tsivinsky.com">Email</a>
          </div>
        </div>
      </div>
      <div>
        <p>
          I am a programmer and currently work as frontend developer. I
          don&apos;t really like doing design, I enjoy more architectural stuff
          going into making websites and webapps.
        </p>
        <p>
          Also, I like writing Go projects in my spare time. Something like
          CLIs, REST apis or even simple video games.
        </p>
        <p>
          If you want to see some of my projects, you can do so{" "}
          <Link href="/projects">here</Link>.
        </p>
        <p>
          When not coding, I love playing <Link href="/games">video games</Link>
          .
        </p>

        <br />
        <h2>My skills</h2>
        <details className="mt-2" open>
          <summary>Frontend</summary>
          <ul className="list-disc list-inside ml-4">
            <li>TypeScript</li>
            <li>JavaScript</li>
            <li>React</li>
            <li>Next.js</li>
            <li>tailwindcss</li>
            <li>HTML/CSS</li>
            <li>SCSS</li>
          </ul>
        </details>
        <details className="mt-2">
          <summary>Backend</summary>
          <ul className="list-disc list-inside ml-4">
            <li>Go</li>
            <li>sqlite3</li>
          </ul>
        </details>
      </div>

      <br />
      <h2>What I use for work</h2>
      <ul className="list-disc list-inside mt-2">
        <li>
          <a href="https://neovim.io" target="_blank" rel="noopener noreferrer">
            neovim
          </a>{" "}
          - my favourite text editor. After switching to it from vscode, I
          wasn&apos;t able to go back or to any other editor.
        </li>
        <li>
          <a
            href="https://archlinux.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            archlinux
          </a>{" "}
          - first I tried linux mint but didn&apos;t use it much. then, I
          installed ubuntu, it was great. after switching to arch, I didn&apos;t
          want anything else.
        </li>
        <li>
          <a
            href="https://kde.org/plasma-desktop/"
            target="_blank"
            rel="noopener noreferrer"
          >
            kde plasma
          </a>{" "}
          - at first I used i3/sway but then switched to kde plasma for ootb
          experience. I kinda miss tiling window managers, but I&apos;m quite
          happy with kde.
        </li>
        <li>
          <a
            href="https://ghostty.org/"
            target="_blank"
            rel="noopener noreferrer"
          >
            ghostty
          </a>{" "}
          - terminal emulator written in zig. before I was using kitty, but
          after ghostty came out, I didn&apos;t look back.
        </li>
        <li>
          <a
            href="https://github.com/tmux/tmux"
            target="_blank"
            rel="noopener noreferrer"
          >
            tmux
          </a>{" "}
          - terminal multiplexer allowing me to open several sessions in one
          terminal window. kinda redundant because ghostty supports tabs but
          I&apos;m just used to this workflow.
        </li>
        <li>
          <a
            href="https://www.keychron.com/products/keychron-k15-max-alice-layout-qmk-wireless-custom-mechanical-keyboard"
            target="_blank"
            rel="noopener noreferrer"
          >
            keychron k15 max
          </a>{" "}
          - love mechanical keyboards. After using several 65% keyboards, I
          wanted my F-row back. Also wanted to try low-profile setup.
        </li>
      </ul>
    </div>
  );
}
