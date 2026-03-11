import Link from "next/link";
import { ReactNode } from "react";

export type ProjectProps = {
  name: string;
  repo: string;
  children: ReactNode;
};

export const Project = ({ name, repo, children }: ProjectProps) => {
  return (
    <div id={name}>
      <p className="italic">{name}</p>
      <div className="mt-1">{children}</div>
      <div className="mt-2 flex items-center gap-2">
        <Link href={repo}>Repository</Link>
      </div>
    </div>
  );
};
