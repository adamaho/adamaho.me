import { Heading, Text } from "~/components";
import "./page.css";

export default function Home() {
  return (
    <main className="home">
      <div className="home-grid">
        <div className="home-item" />
        <div className="home-item">
          <Heading contrast="high">Adam Aho</Heading>
        </div>
        <div className="home-item" />
        <div className="home-item" />
        <div className="home-item">
          <div className="home-card" />
        </div>
        <div className="home-item" />
        <div className="home-item" />
        <div className="home-item" />
        <div className="home-item" />
      </div>
      <div className="home-mask-vertical">
        <div className="home-mask-top" />
        <div className="home-laser home-top-laser" />
        <div className="home-mask-center" />
        <div className="home-laser home-bottom-laser" />
        <div className="home-mask-bottom" />
      </div>
      <div className="home-mask-horizontal">
        <div className="home-mask-left" />
        <div className="home-laser home-left-laser" />
        <div className="home-mask-center" />
        <div className="home-laser home-right-laser" />
        <div className="home-mask-right" />
      </div>
    </main>
  );
}
