import { Github, Linkedin } from "lucide-react";

import { Heading, Text } from "~/components";

import "./page.css";

export default function Home() {
  return (
    <main className="home">
      <div className="home-laser-vertical">
        <div />
        <div className="home-laser home-top-laser" />
        <div />
        <div className="home-laser home-bottom-laser" />
        <div />
      </div>
      <div className="home-laser-horizontal">
        <div />
        <div className="home-laser home-left-laser" />
        <div />
        <div className="home-laser home-right-laser" />
        <div />
      </div>
      <div className="home-mask-vertical">
        <div className="home-mask-top" />
        <div />
        <div className="home-mask-bottom" />
      </div>
      <div className="home-mask-horizontal">
        <div className="home-mask-left" />
        <div />
        <div className="home-mask-right" />
      </div>
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
        <div className="home-item" />
        <div className="home-item" />
        <div className="home-item">
          <div className="home-card"></div>
        </div>
        <div className="home-item" />
        <div className="home-item" />
        <div className="home-item"></div>
        <div className="home-item" />
      </div>
    </main>
  );
}
