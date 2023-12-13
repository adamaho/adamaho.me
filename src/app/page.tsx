import { Github, Linkedin } from "lucide-react";

import { Heading, Text } from "~/components";

import { Lasers } from "./lasers";
import { Mask } from "./mask";

import "./page.css";

export default function Home() {
  return (
    <main className="home">
      <Lasers />
      <Mask />
      <div className="home-grid">
        <div />
        <div className="home-item">
          <header className="home-item home-header">
            <div className="home-header-info">
              <Heading size="6" weight="medium">
                Adam Aho
              </Heading>
              <Text color="grey" contrast="low" size="3">
                Senior Software Developer
              </Text>
            </div>
            <div className="socials">
              <a
                className="social"
                aria-label="x"
                href="https://twitter.com/theadamaho"
                target="_blank"
              >
                𝕏
              </a>
              <a
                className="social"
                aria-label="github"
                href="https://github.com/adamaho"
                target="_blank"
              >
                <Github size={20} strokeWidth={1} />
              </a>
              <a
                className="social"
                aria-label="linked in"
                href="https://www.linkedin.com/in/adamaho/"
                target="_blank"
              >
                <Linkedin size={20} strokeWidth={1} />
              </a>
            </div>
          </header>
        </div>
        <div />
        <div />
        <div className="home-item home-item-center">
          <Heading as="h2" size="3" weight="normal">
            About me
          </Heading>
          <Text as="p" contrast="low" size="3">
            Passionate about crafting interfaces
          </Text>
          <Text as="p" size="3" contrast="low">
            Experimenting with rust and realtime interfaces
          </Text>
        </div>
      </div>
    </main>
  );
}
