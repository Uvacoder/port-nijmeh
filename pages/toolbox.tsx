import React from "react";
import dock from "../public/dock.png";
import Link from "next/link";
import Image from 'next/image';
export default function Toolbox() {
    return (
        <div className="container">
            <title>{"Andrew's"} Toolbox</title>
            <Link href="/" passHref> &larr; Back </Link> 
            <h1>Toolbox</h1>
            <p>
                {"I'm"} a developer, so I have a bunch of programs & tools I use on a daily basis. {"I've"} listed it all here :)
            </p>
            <h2>Gear</h2>
            <p>
                At the moment, I use a <strong>14 inch Macbook (M1 Pro). </strong>
                I also have 2 external monitors hooked up to my Macbook.
            </p>
            <h2>Apps</h2>
            <p>
                My dock is very minimal.

                I dislike when {"it's"} cluttered, so I keep a very small amount of apps.

                Here are the apps I use on a daily basis.


                <li><mark><a href="https://brave.com"> Brave Browser </a></mark></li>
                <li><mark><a href="https://notion.so"> Notion </a></mark></li>
                <li><mark><a href="https://sw.kovidgoyal.net/kitty/"> Kitty </a></mark></li>
                <li><mark><a href="https://discord.com"> Discord </a></mark></li>
                <li><mark><a href="https://slack.com"> Slack </a></mark></li>
                <li><mark><a href="https://code.visualstudio.com"> Visual Studio Code </a></mark></li>
                <li><mark><a href="https://spotify.com"> Spotify </a></mark></li>
                <li><mark><a href="https://raycast.com"> Raycast </a></mark></li>
                <li><mark><a href="https://getmailspring.com/">Mailspring</a></mark></li>
                <li><mark><a href="https://fig.io">Fig</a></mark></li>
                <li><mark><a href="https://justgetflux.com/">Flux</a></mark></li>
                <li><mark><a href="https://nightowl.kramser.xyz/">Nightowl</a></mark></li>
                <li><mark><a href="https://figma.com">Figma</a></mark></li>
                <li><mark><a href="https://zoom.us">Zoom</a></mark></li>
                <li><mark><a href="https://todoist.com">Todoist</a></mark></li>
                <li><mark><a href="https://docker.com">Docker</a></mark></li>
                <li><mark><a href="https://rectangleapp.com">Rectangle</a></mark></li>
            </p>
        </div>
    )
}