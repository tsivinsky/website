import Link from "next/link";

export default function Games() {
  return (
    <div>
      <Link href="/">{"<--"} back to home page</Link>
      <h1 className="mt-2">Video games</h1>
      <p>
        I&apos;ve been playing video games my whole life, since I was able to
        form memories.
      </p>
      <p>
        My first platform was ps2, on which I played{" "}
        <a
          href="https://en.wikipedia.org/wiki/Over_the_Hedge_(video_game)"
          target="_blank"
          rel="noopener noreferrer"
        >
          Over The Hedge
        </a>
        ,{" "}
        <a
          href="https://en.wikipedia.org/wiki/Mortal_Kombat:_Armageddon"
          target="_blank"
          rel="noopener noreferrer"
        >
          Mortal Kombat Armaggedon
        </a>{" "}
        and{" "}
        <a
          href="https://en.wikipedia.org/wiki/Gran_Turismo_4"
          target="_blank"
          rel="noopener noreferrer"
        >
          Gran Turismo 4
        </a>
        , just to name a few.
      </p>
      <p>
        Then, my parents got me xbox 360. I wasn&apos;t able to play online, but
        I still played a lot of games, mostly{" "}
        <a
          href="https://en.wikipedia.org/wiki/FIFA_09"
          target="_blank"
          rel="noopener noreferrer"
        >
          Fifa 09
        </a>
        .
      </p>
      <p>
        In college I bought myself (with birthday money) a ps4 slim and played a
        bunch of Sony exclusives. Some of my favourite games were{" "}
        <a
          href="https://en.wikipedia.org/wiki/Horizon_Zero_Dawn"
          target="_blank"
          rel="noopener noreferrer"
        >
          Horizon Zero Dawn
        </a>
        ,{" "}
        <a
          href="https://en.wikipedia.org/wiki/God_of_War_(2018_video_game)"
          target="_blank"
          rel="noopener noreferrer"
        >
          God of War
        </a>{" "}
        and{" "}
        <a
          href="https://en.wikipedia.org/wiki/Marvel's_Spider-Man_(video_game)"
          target="_blank"
          rel="noopener noreferrer"
        >
          Marvel&apos;s Spider-Man
        </a>
        .
      </p>
      <p>
        After college, when I got my first job, I bought ps5 and then steam
        deck. Then, I wanted to play zelda game, so I bought nintendo switch
        oled and{" "}
        <a
          href="https://en.wikipedia.org/wiki/The_Legend_of_Zelda:_Breath_of_the_Wild"
          target="_blank"
          rel="noopener noreferrer"
        >
          Legend of Zelda: BotW
        </a>
        . This year (2025) I sold switch oled, bought switch 2 and played{" "}
        <a
          href="https://en.wikipedia.org/wiki/Donkey_Kong_Bananza"
          target="_blank"
          rel="noopener noreferrer"
        >
          Donkey Kong Bananza
        </a>
        . Somewhere after Steam Deck, I built a PC. Mainly because I wanted to
        try to build it myself (it turned on on a 1st try).
      </p>
      <br />
      <h2>My favourite games (in no particular order)</h2>
      <ul className="list-disc list-inside mt-2">
        <li>
          <a
            href="https://store.steampowered.com/app/489830/The_Elder_Scrolls_V_Skyrim_Special_Edition/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Skyrim
          </a>
        </li>
        <li>
          <a
            href="https://store.steampowered.com/app/40390/Risen_2_Dark_Waters/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Risen 2
          </a>
        </li>
        <li>
          <a
            href="https://store.steampowered.com/app/1307580/TOEM_A_Photo_Adventure/"
            target="_blank"
            rel="noopener noreferrer"
          >
            TOEM
          </a>
        </li>
        <li>
          <a
            href="https://store.steampowered.com/app/1055540/A_Short_Hike/"
            target="_blank"
            rel="noopener noreferrer"
          >
            A Short Hike
          </a>
        </li>
        <li>
          <a
            href="https://store.steampowered.com/app/553850/HELLDIVERS_2/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Helldivers 2
          </a>
        </li>
        <li>
          <a
            href="https://store.steampowered.com/app/105600/Terraria/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Terraria
          </a>
        </li>
        <li>
          <a
            href="https://store.steampowered.com/app/490110/The_Precinct/"
            target="_blank"
            rel="noopener noreferrer"
          >
            The Precinct
          </a>
        </li>
        <li>Horizon (Zero Dawn & Forbidden West)</li>
      </ul>
    </div>
  );
}
