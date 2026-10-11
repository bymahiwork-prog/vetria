export default function AnnouncementBar() {
  return (
    <>
      <div className="vetria-announcement">
        <p>The weekly letter on where small business is heading.</p>
        <a href="#newsletter">Subscribe free</a>
      </div>

      <style>{`
        .vetria-announcement {
          display: flex;
          flex-wrap: wrap;
          align-items: center;
          justify-content: center;
          gap: 4px 16px;
          padding: 10px 16px;
          background: var(--espresso);
          color: var(--cream);
          font-size: 13px;
          line-height: 20px;
          text-align: center;
        }

        .vetria-announcement a {
          color: var(--gold-on-dark);
          font-weight: 600;
        }

        .vetria-announcement a:hover {
          color: var(--cream);
        }
      `}</style>
    </>
  );
}
