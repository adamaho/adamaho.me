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
        <div className="home-item" />
        <div className="home-item">
          <header className="home-header">
            <div className="home-header-info">
              <Heading size="8" weight="medium">
                Adam Aho
              </Heading>
              <Text color="grey" contrast="low" family="mono">
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
          <div className="home-card">
            <Text size="4">Some words hereeeeee</Text>
          </div>
        </div>
        <div />
        <div />
        <div></div>
        <div />
      </div>
    </main>
  );
}
