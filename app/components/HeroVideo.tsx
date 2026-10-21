"use client";

import { useEffect, useRef, useState } from "react";

// Homepage hero: a 12-second 16:9 film explaining what Vitrea is.
// Autoplays muted and loops; viewers who prefer reduced motion get the
// still poster and can press play themselves.
export default function HeroVideo() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [playing, setPlaying] = useState(false);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (!reduce) {
      video.play().then(() => setPlaying(true)).catch(() => setPlaying(false));
    }
  }, []);

  function toggle() {
    const video = videoRef.current;
    if (!video) return;
    if (video.paused) {
      video.play().then(() => setPlaying(true)).catch(() => {});
    } else {
      video.pause();
      setPlaying(false);
    }
  }

  return (
    <>
      <section className="vetria-hero" aria-label="What Vitrea is">
        <div className="vetria-container">
          <div className="vetria-hero__frame">
            <video
              ref={videoRef}
              className="vetria-hero__video"
              src="/video/vitrea-hero-16x9.mp4"
              poster="/video/vitrea-hero-poster.jpg"
              muted
              loop
              playsInline
              preload="auto"
              aria-describedby="vetria-hero-desc"
            />
            <button
              type="button"
              className="vetria-hero__toggle"
              onClick={toggle}
              aria-label={playing ? "Pause video" : "Play video"}
            >
              {playing ? (
                <svg width="16" height="16" viewBox="0 0 16 16" aria-hidden="true">
                  <rect x="3" y="2" width="3.5" height="12" fill="currentColor" />
                  <rect x="9.5" y="2" width="3.5" height="12" fill="currentColor" />
                </svg>
              ) : (
                <svg width="16" height="16" viewBox="0 0 16 16" aria-hidden="true">
                  <path d="M4 2l10 6-10 6z" fill="currentColor" />
                </svg>
              )}
            </button>
          </div>
          <p id="vetria-hero-desc" className="sr-only">
            Vitrea is a global media brand for small business. We tell the stories of the
            founders and businesses building what&apos;s next, through founder interviews,
            brand features and The Vitrea Letter on where small business is heading.
          </p>
        </div>
      </section>

      <style>{`
        .vetria-hero {
          padding-block: var(--space-5) var(--space-4);
        }

        .vetria-hero__frame {
          position: relative;
          width: 100%;
          aspect-ratio: 16 / 9;
          background: var(--espresso);
          overflow: hidden;
        }

        .vetria-hero__video {
          display: block;
          width: 100%;
          height: 100%;
          object-fit: cover;
        }

        .vetria-hero__toggle {
          position: absolute;
          right: 16px;
          bottom: 16px;
          width: 44px;
          height: 44px;
          display: grid;
          place-items: center;
          border: 1px solid rgba(255, 255, 255, 0.4);
          border-radius: var(--radius-pill);
          background: rgba(26, 20, 16, 0.55);
          color: #fff;
          cursor: pointer;
          transition: background var(--transition-fast);
        }

        .vetria-hero__toggle:hover {
          background: rgba(26, 20, 16, 0.8);
        }

        .vetria-hero__toggle:focus-visible {
          outline: 2px solid var(--gold);
          outline-offset: 2px;
        }

        @media (max-width: 600px) {
          .vetria-hero {
            padding-block: var(--space-4) var(--space-3);
          }
        }
      `}</style>
    </>
  );
}
