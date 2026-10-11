const stories = [
  {
    number: "01",
    category: "BUSINESS & LEADERSHIP",
    title: "The New Rules of Building Something That Lasts",
    description:
      "Why the next generation of businesses is thinking beyond growth and building for longevity.",
    readTime: "6 MIN READ",
    date: "OCTOBER 2026",
    theme: "business",
    href: "#future",
  },
  {
    number: "02",
    category: "CULTURE & PERSPECTIVE",
    title: "A Different Way to Define Success",
    description:
      "A more considered perspective on ambition, meaningful work and the lives we choose to create.",
    readTime: "4 MIN READ",
    date: "OCTOBER 2026",
    theme: "culture",
    href: "#series",
  },
  {
    number: "03",
    category: "IDEAS & INNOVATION",
    title: "What Happens When We Think Beyond Today?",
    description:
      "The emerging ideas and creative shifts changing how we imagine the world ahead.",
    readTime: "7 MIN READ",
    date: "OCTOBER 2026",
    theme: "future",
    href: "#future",
  },
];

export default function LatestFeatures() {
  return (
    <>
      <section
        className="vetria-latest"
        id="latest"
        aria-labelledby="vetria-latest-title"
      >
        <div className="vetria-latest__inner">
          <header className="vetria-latest__header">
            <div className="vetria-latest__eyebrow">
              <span />
              THE READING ROOM
            </div>

            <div className="vetria-latest__heading-row">
              <div>
                <h2
                  id="vetria-latest-title"
                  className="vetria-latest__title"
                >
                  Ideas worth
                  <br />
                  <em>your attention.</em>
                </h2>

                <p className="vetria-latest__intro">
                  Perspectives on business, culture and the
                  things shaping what comes next.
                </p>
              </div>

              <a
                href="#future"
                className="vetria-latest__all-link"
              >
                EXPLORE THE JOURNAL
                <span aria-hidden="true"> ↗</span>
              </a>
            </div>
          </header>

          <div className="vetria-latest__grid">
            {stories.map((story) => (
              <article
                className="vetria-latest__card"
                key={story.number}
              >
                <a
                  href={story.href}
                  className="vetria-latest__card-link"
                  aria-label={`Explore: ${story.title}`}
                >
                  <div
                    className={`vetria-latest__art vetria-latest__art--${story.theme}`}
                    aria-hidden="true"
                  >
                    <div className="vetria-latest__art-top">
                      <span>VETRIA JOURNAL</span>
                      <span>{story.number}</span>
                    </div>

                    {story.theme === "business" && (
                      <div className="vetria-latest__business-art">
                        <div className="vetria-latest__business-circle" />
                        <div className="vetria-latest__business-block" />
                        <div className="vetria-latest__business-step" />
                        <span>FORM / FUNCTION</span>
                      </div>
                    )}

                    {story.theme === "culture" && (
                      <div className="vetria-latest__culture-art">
                        <div className="vetria-latest__culture-sun" />
                        <div className="vetria-latest__culture-arch">
                          <div />
                        </div>
                        <span>THE HUMAN EDIT</span>
                      </div>
                    )}

                    {story.theme === "future" && (
                      <div className="vetria-latest__future-art">
                        <div className="vetria-latest__future-orbit orbit-one" />
                        <div className="vetria-latest__future-orbit orbit-two" />
                        <div className="vetria-latest__future-orbit orbit-three" />
                        <div className="vetria-latest__future-core">V.</div>
                        <span>BEYOND THE NOW</span>
                      </div>
                    )}

                    <span className="vetria-latest__art-index">
                      {story.number}
                    </span>
                  </div>

                  <div className="vetria-latest__meta">
                    <span>{story.category}</span>
                    <span>{story.readTime}</span>
                  </div>

                  <h3 className="vetria-latest__card-title">
                    {story.title}
                  </h3>

                  <p className="vetria-latest__description">
                    {story.description}
                  </p>

                  <div className="vetria-latest__card-footer">
                    <span>{story.date}</span>
                    <span className="vetria-latest__arrow">↗</span>
                  </div>
                </a>
              </article>
            ))}
          </div>

          <div className="vetria-latest__bottom">
            <span>THOUGHTFULLY SELECTED. ALWAYS EVOLVING.</span>
            <span>THREE PERSPECTIVES. ONE BIGGER PICTURE.</span>
          </div>
        </div>
      </section>

      <style>{`
        .vetria-latest {
          width: 100%;
          background: #faf7ef;
          color: #291b14;
          padding: 100px 0 45px;
        }

        .vetria-latest__inner {
          width: min(100% - 10%, 1380px);
          margin: 0 auto;
        }

        .vetria-latest__eyebrow {
          display: flex;
          align-items: center;
          gap: 12px;
          margin-bottom: 29px;
          font: 600 9px/1.5 Arial, Helvetica, sans-serif;
          letter-spacing: 2px;
        }

        .vetria-latest__eyebrow > span {
          width: 26px;
          height: 1px;
          background: #c4a04d;
        }

        .vetria-latest__heading-row {
          display: flex;
          align-items: flex-end;
          justify-content: space-between;
          gap: 30px;
          margin-bottom: 48px;
        }

        .vetria-latest__title {
          margin: 0;
          font: 400 clamp(44px, 5.5vw, 72px)/1.02 Georgia, "Times New Roman", serif;
          letter-spacing: -2.5px;
        }

        .vetria-latest__title em {
          color: #987b43;
          font-weight: 400;
        }

        .vetria-latest__intro {
          max-width: 440px;
          margin-top: 19px;
          color: #827665;
          font: 13px/1.9 Arial, Helvetica, sans-serif;
        }

        .vetria-latest__all-link {
          display: inline-flex;
          align-items: center;
          gap: 18px;
          flex-shrink: 0;
          padding: 15px 0;
          border-bottom: 1px solid #c4a04d;
          color: #45382d;
          font: 600 9px/1.5 Arial, Helvetica, sans-serif;
          letter-spacing: 1.3px;
          text-decoration: none;
        }

        .vetria-latest__all-link:hover {
          color: #987b43;
        }

        .vetria-latest__grid {
          display: grid;
          grid-template-columns: repeat(3, minmax(0, 1fr));
          gap: 27px;
        }

        .vetria-latest__card {
          min-width: 0;
          border-bottom: 1px solid #dfd2b6;
        }

        .vetria-latest__card-link {
          display: block;
          color: inherit;
          text-decoration: none;
        }

        .vetria-latest__art {
          position: relative;
          aspect-ratio: 0.94;
          overflow: hidden;
          margin-bottom: 24px;
          isolation: isolate;
          transition: filter 250ms ease;
        }

        .vetria-latest__card-link:hover .vetria-latest__art {
          filter: saturate(1.12);
        }

        .vetria-latest__art-top {
          position: absolute;
          z-index: 4;
          top: 17px;
          right: 17px;
          left: 17px;
          display: flex;
          justify-content: space-between;
          color: #f3ecd9;
          font: 8px/1.5 Arial, Helvetica, sans-serif;
          letter-spacing: 1.4px;
        }

        .vetria-latest__art-index {
          position: absolute;
          right: 15px;
          bottom: 12px;
          z-index: 4;
          color: rgba(255, 255, 255, 0.8);
          font: 9px/1.5 Arial, Helvetica, sans-serif;
          letter-spacing: 1px;
        }

        /* CARD ONE: BUSINESS */

        .vetria-latest__art--business {
          background: #67513d;
        }

        .vetria-latest__business-circle {
          position: absolute;
          top: 20%;
          left: 15%;
          width: 47%;
          aspect-ratio: 1;
          border-radius: 50%;
          background: #c5a86d;
        }

        .vetria-latest__business-block {
          position: absolute;
          right: 13%;
          bottom: 0;
          width: 38%;
          height: 67%;
          background: #2c211b;
          transform: skewY(-8deg);
        }

        .vetria-latest__business-step {
          position: absolute;
          bottom: 0;
          left: 10%;
          width: 42%;
          height: 40%;
          background: #dfd1b1;
          clip-path: polygon(0 30%, 65% 0, 100% 0, 100% 100%, 0 100%);
        }

        .vetria-latest__business-art > span {
          position: absolute;
          top: 32%;
          left: 8%;
          color: #f3ecd9;
          font: 8px/1.5 Arial, Helvetica, sans-serif;
          letter-spacing: 2px;
          writing-mode: vertical-rl;
        }

        /* CARD TWO: CULTURE */

        .vetria-latest__art--culture {
          background: #d9c8a7;
        }

        .vetria-latest__art--culture .vetria-latest__art-top {
          color: #45382d;
        }

        .vetria-latest__culture-sun {
          position: absolute;
          top: 15%;
          right: 16%;
          width: 32%;
          aspect-ratio: 1;
          border-radius: 50%;
          background: #a88b59;
        }

        .vetria-latest__culture-arch {
          position: absolute;
          bottom: -4%;
          left: 18%;
          width: 63%;
          height: 75%;
          border-radius: 50% 50% 0 0;
          background: #72533e;
          overflow: hidden;
        }

        .vetria-latest__culture-arch > div {
          position: absolute;
          top: 16%;
          left: 17%;
          width: 66%;
          height: 100%;
          border-radius: 50% 50% 0 0;
          background: #eadfc7;
        }

        .vetria-latest__culture-art > span {
          position: absolute;
          top: 43%;
          left: 7%;
          color: #45382d;
          font: 8px/1.5 Arial, Helvetica, sans-serif;
          letter-spacing: 2px;
          writing-mode: vertical-rl;
        }

        .vetria-latest__art--culture .vetria-latest__art-index {
          color: #45382d;
        }

        /* CARD THREE: THE FUTURE */

        .vetria-latest__art--future {
          background: #b5aa91;
        }

        .vetria-latest__future-orbit {
          position: absolute;
          top: 50%;
          left: 50%;
          border: 1px solid rgba(41, 27, 20, 0.6);
          border-radius: 50%;
          transform: translate(-50%, -50%) rotate(-30deg);
        }

        .vetria-latest__future-orbit.orbit-one {
          width: 48%;
          height: 80%;
        }

        .vetria-latest__future-orbit.orbit-two {
          width: 75%;
          height: 52%;
          transform: translate(-50%, -50%) rotate(38deg);
        }

        .vetria-latest__future-orbit.orbit-three {
          width: 87%;
          height: 87%;
          border-color: rgba(41, 27, 20, 0.35);
        }

        .vetria-latest__future-core {
          position: absolute;
          top: 50%;
          left: 50%;
          display: grid;
          width: 25%;
          aspect-ratio: 1;
          place-items: center;
          border-radius: 50%;
          background: #3b2b20;
          color: #e9d8b1;
          font: italic 35px/1 Georgia, "Times New Roman", serif;
          transform: translate(-50%, -50%);
        }

        .vetria-latest__future-art > span {
          position: absolute;
          right: 0;
          bottom: 13%;
          left: 0;
          color: #45382d;
          font: 8px/1.5 Arial, Helvetica, sans-serif;
          letter-spacing: 2px;
          text-align: center;
        }

        /* STORY INFORMATION */

        .vetria-latest__meta {
          display: flex;
          align-items: center;
          justify-content: space-between;
          flex-wrap: wrap;
          gap: 10px;
          margin-bottom: 17px;
          color: #92753b;
          font: 600 8px/1.6 Arial, Helvetica, sans-serif;
          letter-spacing: 1.1px;
        }

        .vetria-latest__meta span:last-child {
          color: #827665;
        }

        .vetria-latest__card-title {
          margin-bottom: 15px;
          font: 400 clamp(25px, 2.3vw, 32px)/1.18 Georgia, "Times New Roman", serif;
          letter-spacing: -0.7px;
          transition: color 180ms ease;
        }

        .vetria-latest__card-link:hover .vetria-latest__card-title {
          color: #987b43;
        }

        .vetria-latest__description {
          margin-bottom: 26px;
          color: #827665;
          font: 12px/1.9 Arial, Helvetica, sans-serif;
        }

        .vetria-latest__card-footer {
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding: 16px 0 19px;
          border-top: 1px solid #dfd2b6;
          color: #827665;
          font: 8px/1.5 Arial, Helvetica, sans-serif;
          letter-spacing: 1px;
        }

        .vetria-latest__arrow {
          color: #987b43;
          font-size: 17px;
          transition: transform 180ms ease;
        }

        .vetria-latest__card-link:hover .vetria-latest__arrow {
          transform: translate(3px, -3px);
        }

        .vetria-latest__bottom {
          display: flex;
          justify-content: space-between;
          gap: 20px;
          margin-top: 44px;
          color: #827665;
          font: 8px/1.6 Arial, Helvetica, sans-serif;
          letter-spacing: 1.4px;
        }

        /* RESPONSIVE */

        @media (max-width: 850px) {
          .vetria-latest {
            padding-top: 75px;
          }

          .vetria-latest__inner {
            width: calc(100% - 48px);
          }

          .vetria-latest__grid {
            grid-template-columns: repeat(2, minmax(0, 1fr));
            gap: 35px 22px;
          }

          .vetria-latest__card:last-child {
            grid-column: 1 / -1;
          }

          .vetria-latest__card:last-child .vetria-latest__art {
            aspect-ratio: 1.6;
          }
        }

        @media (max-width: 560px) {
          .vetria-latest {
            padding: 65px 0 35px;
          }

          .vetria-latest__inner {
            width: calc(100% - 40px);
          }

          .vetria-latest__heading-row {
            align-items: flex-start;
            flex-direction: column;
            gap: 18px;
            margin-bottom: 34px;
          }

          .vetria-latest__title {
            font-size: 49px;
            letter-spacing: -2px;
          }

          .vetria-latest__intro {
            font-size: 12px;
          }

          .vetria-latest__grid {
            grid-template-columns: 1fr;
            gap: 37px;
          }

          .vetria-latest__card:last-child {
            grid-column: auto;
          }

          .vetria-latest__card:last-child .vetria-latest__art {
            aspect-ratio: 0.94;
          }

          .vetria-latest__art {
            aspect-ratio: 1.05;
          }

          .vetria-latest__card-title {
            font-size: 30px;
          }

          .vetria-latest__bottom {
            flex-direction: column;
            gap: 8px;
          }
        }

        @media (prefers-reduced-motion: reduce) {
          .vetria-latest__art,
          .vetria-latest__card-title,
          .vetria-latest__arrow {
            transition: none;
          }
        }
      `}</style>
    </>
  );
}
