import Link from "next/link";

export default function Projects() {
  return (
    <div>
      <Link href="/">{"<--"} back to home page</Link>
      <h1 className="mt-2">My projects</h1>
      <div className="flex flex-col gap-1 mt-4">
        <div>
          <h3>
            <a
              href="https://github.com/tsivinsky/use-confirm"
              target="_blank"
              rel="noopener noreferrer"
            >
              use-confirm
            </a>
          </h3>
          <p>
            React hook which allows user to open custom confirm dialog window
            and wait for result using async/await mechanism.
          </p>
        </div>

        <div>
          <h3>
            <a
              href="https://github.com/tsivinsky/sshx"
              target="_blank"
              rel="noopener noreferrer"
            >
              sshx
            </a>
          </h3>
          <p>
            Small cli program written in Go to quickly connect to servers via
            ssh.
          </p>
        </div>

        <div>
          <h3>
            <a
              href="https://github.com/tsivinsky/goenv"
              target="_blank"
              rel="noopener noreferrer"
            >
              goenv
            </a>
          </h3>
          <p>Go library to pass environment variables to struct.</p>
        </div>

        <div>
          <h3>
            <a
              href="https://github.com/tsivinsky/hi-mom"
              target="_blank"
              rel="noopener noreferrer"
            >
              hi-mom
            </a>
          </h3>
          <p>
            JS library with just one function `hiMom()` returning string
            &quot;Hi, mom!&quot;. I made it as a joke, referencing{" "}
            <a
              href="https://www.youtube.com/@Fireship"
              target="_blank"
              rel="noopener noreferrer"
            >
              Fireship
            </a>
            &apos;s phrase in his coding tutorials. Project was featured in{" "}
            <a
              href="https://youtu.be/qXUl3VsbA6o?si=wCBo2oAOHYrvwQ_C&t=108"
              target="_blank"
              rel="noopener noreferrer"
            >
              his video
            </a>{" "}
            and got more than 300 github stars.
          </p>
        </div>
      </div>
    </div>
  );
}
