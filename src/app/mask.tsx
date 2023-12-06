import "./mask.css";

export function Mask() {
  return (
    <>
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
    </>
  );
}
