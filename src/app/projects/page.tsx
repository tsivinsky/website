import { Project } from "@/app/projects/Project";
import Link from "next/link";

export default function Projects() {
  return (
    <div>
      <Link href="/">go back</Link>
      <h2 className="mt-5">Projects</h2>
      <div className="mt-3 flex flex-col gap-2 *:border-t *:pt-2">
        <Project
          name="use-confirm"
          repo="https://github.com/tsivinsky/use-confirm"
        >
          React hook which allows user to open custom confirm dialog window and
          wait for result using async/await mechanism.
        </Project>

        <Project name="sshx" repo="https://github.com/tsivinsky/sshx">
          Small cli program written in Go to quickly connect to servers via ssh.
        </Project>

        <Project name="dl" repo="https://github.com/tsivinsky/dl">
          Go cli program to install software from git repos easier.
        </Project>

        <Project name="plain" repo="https://github.com/tsivinsky/plain">
          file-based router built with Go.
        </Project>
      </div>
    </div>
  );
}
