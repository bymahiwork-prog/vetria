export default function FeaturedStory() {
  return (
    <>
      <section className="vetria-featured" aria-labelledby="vetria-featured-title">
        <div className="vetria-featured__inner">

          {/* LEFT: EDITORIAL CONTENT */}
          <div className="vetria-featured__content">
            <div className="vetria-featured__eyebrow">
              <span className="vetria-featured__line" />
              THE VETRIA EDIT
              <span className="vetria-featured__issue">
                VOL. 01 — 2026
              </span>
            </div>

            <p className="vetria-featured__category">
              BUSINESS · CULTURE · THE FUTURE
            </p>

            <h1
              id="vetria-featured-title"
              className="vetria-featured__title"
            >
              The world is
              <br />
              changing.
              <br />
              <em>Are you</em>
              <br />
              <em>paying attention?</em>
            </h1>

            <p className="vetria-featured__description">
              A closer look at the ideas, people and shifts
              shaping tomorrow. For the curious minds who
              refuse to stand still.
            </p>

            <a
              href="#latest"
              className="vetria-featured__cta"
            >
              EXPLORE THE LATEST STORIES
              <span aria-hidden="true">↗</span>
            </a>

            <div className="vetria-featured__meta">
              <span>CURATED FOR THE CURIOUS</span>
              <span className="vetria-featured__meta-dot">✳</span>
              <span>READ. THINK. REIMAGINE.</span>
            </div>
          </div>

          {/* RIGHT: EDITORIAL VISUAL */}
          <div
            className="vetria-featured__visual"
            role="img"
            aria-label="Abstract editorial artwork in warm ivory, brown and muted gold"
          >
            <div className="vetria-featured__visual-top">
              <span>V / 001</span>
              <span>AN EDITORIAL JOURNAL</span>
            </div>

            <div className="vetria-featured__art">
              <div className="vetria-featured__sun" />
              <div className="vetria-featured__arch">
                <div className="vetria-featured__arch-inner" />
              </div>
              <div className="vetria-featured__column" />
              <div className="vetria-featured__shadow" />

              <span className="vetria-featured__art-letter">
                V.
              </span>
            </div>

            <div className="vetria-featured__visual-bottom">
              <span>IDEAS IN MOTION</span>
              <span>EST. 2026</span>
            </div>

            <div className="vetria-featured__vertical-label">
              PERSPECTIVE / POSSIBILITY / PROGRESS
            </div>
          </div>

        </div>

        {/* BOTTOM EDITORIAL STRIP */}
        <div className="vetria-featured__ticker">
          <span>NEW PERSPECTIVES</span>
          <span className="vetria-featured__ticker-star">✳</span>
          <span>BETTER QUESTIONS</span>
          <span className="vetria-featured__ticker-star">✳</span>
          <span>BOLD IDEAS</span>
          <span className="vetria-featured__ticker-star">✳</span>
          <span>WHAT COMES NEXT</span>
        </div>
      </section>

      <style>{`
        .vetria-featured {
          width: 100%;
          overflow: hidden;
          background: #f3ecd9;
          color: #291b14;
        }

        .vetria-featured__inner {
          display: grid;
          grid-template-columns: 1.05fr 0.95fr;
          gap: clamp(35px, 6vw, 90px);
          align-items: center;
          max-width: 1600px;
          margin: 0 auto;
          padding: 76px 7% 82px;
        }

        /* EDITORIAL CONTENT */

        .vetria-featured__content {
          min-width: 0;
          padding: 8px 0;
        }

        .vetria-featured__eyebrow {
          display: flex;
          flex-wrap: wrap;
          align-items: center;
          gap: 12px;
          margin-bottom: 48px;
          font-family: Arial, Helvetica, sans-serif;
          font-size: 9px;
          font-weight: 600;
          letter-spacing: 2px;
        }

        .vetria-featured__line {
          width: 27px;
          height: 1px;
          background: #c4a04d;
        }

        .vetria-featured__issue {
          margin-left: auto;
          color: #827665;
          font-size: 8px;
          letter-spacing: 1px;
        }

        .vetria-featured__category {
          margin-bottom: 21px;
          color: #92753b;
          font-family: Arial, Helvetica, sans-serif;
          font-size: 9px;
          font-weight: 600;
          letter-spacing: 2px;
          line-height: 1.8;
        }

        .vetria-featured__title {
          max-width: 680px;
          margin: 0 0 27px;
          color: #291b14;
          font-family: Georgia, "Times New Roman", serif;
          font-size: clamp(48px, 5.2vw, 79px);
          font-weight: 400;
          letter-spacing: -3.5px;
          line-height: 0.99;
        }

        .vetria-featured__title em {
          color: #947540;
          font-weight: 400;
        }

        .vetria-featured__description {
          max-width: 400px;
          margin-bottom: 31px;
          color: #6f6253;
          font-family: Arial, Helvetica, sans-serif;
          font-size: 13px;
          line-height: 1.9;
        }

        .vetria-featured__cta {
          display: inline-flex;
          min-height: 51px;
          align-items: center;
          justify-content: center;
          gap: 27px;
          padding: 0 21px;
          border: 1px solid #291b14;
          background: #291b14;
          color: #f3ecd9;
          font-family: Arial, Helvetica, sans-serif;
          font-size: 9px;
          font-weight: 600;
          letter-spacing: 1.3px;
          text-decoration: none;
          transition:
            background 200ms ease,
            color 200ms ease,
            border-color 200ms ease;
        }

        .vetria-featured__cta:hover {
          background: transparent;
          color: #291b14;
        }

        .vetria-featured__cta span {
          font-size: 16px;
        }

        .vetria-featured__meta {
          display: flex;
          flex-wrap: wrap;
          align-items: center;
          gap: 12px;
          margin-top: 42px;
          color: #827665;
          font-family: Arial, Helvetica, sans-serif;
          font-size: 8px;
          letter-spacing: 1px;
        }

        .vetria-featured__meta-dot {
          color: #c4a04d;
          font-size: 12px;
        }

        /* EDITORIAL ARTWORK */

        .vetria-featured__visual {
          position: relative;
          min-width: 0;
          width: 100%;
          aspect-ratio: 0.82;
          padding: 17px;
          overflow: hidden;
          background: #e5d8bd;
          border: 1px solid #d6c5a4;
        }

        .vetria-featured__visual-top,
        .vetria-featured__visual-bottom {
          position: relative;
          z-index: 3;
          display: flex;
          justify-content: space-between;
          gap: 12px;
          color: #66543b;
          font-family: Arial, Helvetica, sans-serif;
          font-size: 8px;
          letter-spacing: 1.5px;
        }

        .vetria-featured__art {
          position: absolute;
          inset: 50px 17px 45px;
          overflow: hidden;
          background: #c9b58f;
        }

        .vetria-featured__sun {
          position: absolute;
          top: 12%;
          right: 14%;
          width: 33%;
          aspect-ratio: 1;
          border-radius: 50%;
          background: #eadab3;
        }

        .vetria-featured__arch {
          position: absolute;
          bottom: -5%;
          left: 12%;
          width: 59%;
          height: 79%;
          overflow: hidden;
          border-radius: 50% 50% 0 0;
          background: #826449;
        }

        .vetria-featured__arch-inner {
          position: absolute;
          top: 15%;
          left: 17%;
          width: 66%;
          height: 100%;
          border-radius: 50% 50% 0 0;
          background: #d7c49f;
        }

        .vetria-featured__column {
          position: absolute;
          right: 10%;
          bottom: -3%;
          width: 21%;
          height: 64%;
          background: #4a3024;
          clip-path: polygon(
            20% 0,
            80% 0,
            100% 8%,
            100% 100%,
            0 100%,
            0 8%
          );
        }

        .vetria-featured__shadow {
          position: absolute;
          inset: 58% -10% -10% 30%;
          background: rgba(41, 27, 20, 0.23);
          transform: rotate(-28deg);
        }

        .vetria-featured__art-letter {
          position: absolute;
          z-index: 2;
          top: 8%;
          left: 8%;
          color: rgba(41, 27, 20, 0.85);
          font-family: Georgia, "Times New Roman", serif;
          font-size: clamp(65px, 9vw, 125px);
          font-style: italic;
          line-height: 1;
        }

        .vetria-featured__vertical-label {
          position: absolute;
          top: 50%;
          right: 3px;
          color: #66543b;
          font-family: Arial, Helvetica, sans-serif;
          font-size: 7px;
          letter-spacing: 1.4px;
          writing-mode: vertical-rl;
          transform: translateY(-50%);
        }

        .vetria-featured__ticker {
          display: flex;
          align-items: center;
          justify-content: space-around;
          gap: 24px;
          min-height: 58px;
          padding: 15px 5%;
          border-top: 1px solid #dfd2b6;
          border-bottom: 1px solid #dfd2b6;
          color: #45382d;
          font-family: Arial, Helvetica, sans-serif;
          font-size: 9px;
          font-weight: 500;
          letter-spacing: 1.7px;
        }

        .vetria-featured__ticker-star {
          color: #c4a04d;
          font-size: 13px;
        }

        /* TABLET */

        @media (max-width: 1000px) {
          .vetria-featured__inner {
            grid-template-columns: 1fr 0.8fr;
            gap: 32px;
            padding: 60px 5%;
          }

          .vetria-featured__title {
            font-size: clamp(43px, 5.7vw, 62px);
            letter-spacing: -2.5px;
          }

          .vetria-featured__eyebrow {
            margin-bottom: 35px;
          }

          .vetria-featured__ticker {
            gap: 15px;
            font-size: 8px;
            letter-spacing: 1px;
          }
        }

        /* MOBILE */

        @media (max-width: 680px) {
          .vetria-featured__inner {
            grid-template-columns: 1fr;
            gap: 37px;
            padding: 43px 22px 44px;
          }

          .vetria-featured__eyebrow {
            margin-bottom: 37px;
          }

          .vetria-featured__title {
            font-size: clamp(46px, 10vw, 68px);
            letter-spacing: -2.5px;
            line-height: 1.02;
          }

          .vetria-featured__description {
            max-width: 360px;
            font-size: 13px;
          }

          .vetria-featured__meta {
            margin-top: 28px;
            gap: 8px;
          }

          .vetria-featured__visual {
            max-width: 460px;
            margin-inline: auto;
            aspect-ratio: 0.9;
          }

          .vetria-featured__art-letter {
            font-size: 100px;
          }

          .vetria-featured__ticker {
            justify-content: flex-start;
            overflow: hidden;
            gap: 16px;
            padding-inline: 22px;
          }

          .vetria-featured__ticker > span {
            flex-shrink: 0;
          }

          .vetria-featured__ticker > span:nth-of-type(n + 5) {
            display: none;
          }
        }

        @media (prefers-reduced-motion: reduce) {
          .vetria-featured__cta {
            transition: none;
          }
        }
      `}</style>
    </>
  );
}
