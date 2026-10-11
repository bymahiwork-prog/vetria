"use client";

export default function AnnouncementBar() {
  return (
    <>
      <div className="vetria-announcement">
        <p className="vetria-announcement__text">
          THE VETRIA EDIT — IDEAS SHAPING WHAT'S NEXT
        </p>

        <a
          href="#newsletter"
          className="vetria-announcement__link"
        >
          JOIN THE CONVERSATION
          <span aria-hidden="true"> ↗</span>
        </a>
      </div>

      <style>{`
        .vetria-announcement {
          width: 100%;
          min-height: 38px;
          padding: 9px 5%;
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 16px;
          background: #291b14;
          color: #f3ecd9;
          border-bottom: 1px solid rgba(196, 160, 77, 0.35);
        }

        .vetria-announcement__text,
        .vetria-announcement__link {
          margin: 0;
          font-family: Arial, Helvetica, sans-serif;
          font-size: 9px;
          font-weight: 500;
          letter-spacing: 1.5px;
          line-height: 1.5;
        }

        .vetria-announcement__link {
          color: #d8c58e;
          text-decoration: none;
          white-space: nowrap;
          transition: color 180ms ease;
        }

        .vetria-announcement__link:hover {
          color: #ffffff;
        }

        @media (max-width: 600px) {
          .vetria-announcement {
            padding: 9px 18px;
            justify-content: center;
            text-align: center;
          }

          .vetria-announcement__text {
            font-size: 8px;
            letter-spacing: 1px;
          }

          .vetria-announcement__link {
            display: none;
          }
        }

        @media (prefers-reduced-motion: reduce) {
          .vetria-announcement__link {
            transition: none;
          }
        }
      `}</style>
    </>
  );
}
