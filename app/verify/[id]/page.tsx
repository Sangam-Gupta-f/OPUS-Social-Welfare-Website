"use client";
import React, { useEffect, useState } from "react";
import { useParams } from "next/navigation";

// ─── Types ────────────────────────────────────────────────────────────────────

interface CertificateData {
  certificateId: string;
  name: string;
  faterName?: string;
  issuedDate: string;
  qrCode: string;
  internshipStartDate: string;
  internshipEndDate: string;
}

// ─── Helpers ──────────────────────────────────────────────────────────────────

const fmt = (d: string) =>
  new Date(d).toLocaleDateString("en-GB", {
    day: "2-digit",
    month: "long",
    year: "numeric",
  });

// ─── Gold Line ────────────────────────────────────────────────────────────────

function GoldLine({ className = "" }: { className?: string }) {
  return <div className={`gold-line ${className}`} />;
}

// ─── Corner Ornament ──────────────────────────────────────────────────────────

function CornerOrnament({ position }: { position: "tl" | "tr" | "bl" | "br" }) {
  const cls = {
    tl: "corner-tl",
    tr: "corner-tr",
    bl: "corner-bl",
    br: "corner-br",
  }[position];
  return (
    <div className={`corner ${cls}`}>
      <svg
        viewBox="0 0 90 90"
        xmlns="http://www.w3.org/2000/svg"
        width="100%"
        height="100%"
      >
        <g fill="none" stroke="#b8922e" strokeWidth="1.2">
          <path d="M5,5 L5,40" strokeWidth="2" />
          <path d="M5,5 L40,5" strokeWidth="2" />
          <circle cx="5" cy="5" r="3" fill="#c9a84c" stroke="none" />
          <path d="M18,5 Q18,18 5,18" strokeWidth="1" opacity="0.6" />
          <path d="M5,28 L5,5 L28,5" strokeWidth="0.7" opacity="0.5" />
          <path
            d="M10,10 C14,14 20,10 22,16 S28,22 24,26"
            strokeWidth="0.8"
            opacity="0.7"
          />
          <path
            d="M10,10 C10,14 14,20 16,22 S22,28 26,24"
            strokeWidth="0.8"
            opacity="0.7"
          />
          <circle
            cx="22"
            cy="22"
            r="1.5"
            fill="#c9a84c"
            stroke="none"
            opacity="0.6"
          />
        </g>
      </svg>
    </div>
  );
}

// ─── Loading ──────────────────────────────────────────────────────────────────

function LoadingState() {
  return (
    <div className="page-wrapper">
      <div className="shimmer-card">
        {[40, 70, 50, 30, 90, 85, 80].map((w, i) => (
          <div
            key={i}
            className="shimmer-line"
            style={{ width: `${w}%`, height: i < 3 ? 18 + i * 8 : 12 }}
          />
        ))}
      </div>
    </div>
  );
}

// ─── Error ────────────────────────────────────────────────────────────────────

function ErrorState({ message }: { message: string }) {
  return (
    <div className="page-wrapper">
      <div className="error-card">
        <svg
          width="48"
          height="48"
          viewBox="0 0 24 24"
          fill="none"
          style={{ marginBottom: 16 }}
        >
          <circle cx="12" cy="12" r="10" stroke="#9a3010" strokeWidth="1.5" />
          <path
            d="M12 7v5"
            stroke="#9a3010"
            strokeWidth="2"
            strokeLinecap="round"
          />
          <circle cx="12" cy="16" r="1" fill="#9a3010" />
        </svg>
        <p className="error-title">Certificate Not Found</p>
        <p className="error-msg">{message}</p>
      </div>
    </div>
  );
}

// ─── Verified Badge ───────────────────────────────────────────────────────────

function ValidBadge() {
  return (
    <div className="valid-badge">
      <svg
        width="16"
        height="16"
        viewBox="0 0 24 24"
        fill="none"
        style={{ flexShrink: 0 }}
      >
        <path
          d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
          stroke="#0f6e56"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
      <span>Verified Certificate</span>
    </div>
  );
}

// ─── Desktop Certificate (landscape, exact PDF layout) ────────────────────────

function DesktopCertificate({ data }: { data: CertificateData }) {
  return (
    <div className="cert-outer">
      <CornerOrnament position="tl" />
      <CornerOrnament position="tr" />
      <CornerOrnament position="bl" />
      <CornerOrnament position="br" />

      {/* ID badge */}
      <div className="id-badge">
        <span className="id-label">Certificate No.</span>
        <span className="id-value">{data.certificateId}</span>
      </div>

      <div className="cert-content">
        {/* Org */}
        <div className="org-header">
          <GoldLine className="narrow" />
          <div className="org-dot" />
          <span className="org-name">Opus Social Foundation</span>
          <div className="org-dot" />
          <GoldLine className="narrow" />
        </div>

        {/* Title */}
        <div className="ribbon-wrap">
          <div className="ribbon-line" />
          <span className="cert-title">Certificate of Internship</span>
          <div className="ribbon-line flip" />
        </div>
        <p className="cert-subtitle">Excellence · Dedication · Achievement</p>

        <GoldLine className="wide" />
        <p className="star-row">★ &nbsp; ★ &nbsp; ★</p>

        {/* Recipient */}
        <p className="presented">This certificate is proudly presented to</p>
        <h1 className="recipient-name">{data.name}</h1>
        <p className="father-line">
          Son / Daughter of{" "}
          <span className="father-name">{data.faterName || "N/A"}</span>
        </p>
        <GoldLine className="medium" />

        {/* Body */}
        <p className="body-text">
          has successfully completed a{" "}
          <strong>120-Hour Internship Programme</strong> under the curriculum of{" "}
          <strong>Social Work &amp; Human Management</strong> at{" "}
          <strong>Opus Social Foundation, District Centre Jaipur</strong>,
          carried out from <strong>{fmt(data.internshipStartDate)}</strong> to{" "}
          <strong>{fmt(data.internshipEndDate)}</strong>. Throughout the
          programme, the intern demonstrated outstanding dedication, discipline,
          and professional commitment in completing all assigned project-based
          tasks.
        </p>

        {/* Bottom: meta | QR | sig */}
        <div className="bottom-row">
          <div className="meta-block">
            {[
              ["Certificate ID", data.certificateId],
              ["Date of Issue", fmt(data.issuedDate)],
              ["Duration", "120 Hours"],
              ["Program", "Social Work & Human Mgmt."],
              ["Centre", "District Jaipur"],
            ].map(([label, value]) => (
              <div className="meta-entry" key={label}>
                <span className="meta-label">{label}</span>
                <span className="meta-value">{value}</span>
              </div>
            ))}
          </div>

          <div className="qr-block">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <div className="qr-border">
              <img src={data.qrCode} alt="QR Code" className="qr-img" />
            </div>
            <span className="qr-caption">Scan to Verify</span>
          </div>

          <div className="sig-block">
            <div className="sig-images">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/opus-sign.png"
                alt="Signature"
                className="sig-sign"
                onError={(e) => {
                  (e.target as HTMLImageElement).style.display = "none";
                }}
              />
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/opus-seal.png"
                alt="Official Seal"
                className="sig-seal"
                onError={(e) => {
                  (e.target as HTMLImageElement).style.display = "none";
                }}
              />
            </div>
            <div className="sig-line" />
            <span className="sig-label">Authorized Signatory</span>
            <span className="sig-sublabel">Opus Social Foundation</span>
          </div>
        </div>
      </div>
    </div>
  );
}

// ─── Mobile Certificate (portrait card, stacked) ──────────────────────────────

function MobileCertificate({ data }: { data: CertificateData }) {
  return (
    <div className="mob-cert">
      <CornerOrnament position="tl" />
      <CornerOrnament position="tr" />
      <CornerOrnament position="bl" />
      <CornerOrnament position="br" />

      <div className="mob-id">
        <span className="id-label">Certificate No.</span>
        <span className="mob-id-val">{data.certificateId}</span>
      </div>

      <div className="mob-content">
        {/* Org */}
        <p className="mob-org">✦ &nbsp; Opus Social Foundation &nbsp; ✦</p>
        <div className="mob-divider" />

        {/* Title */}
        <h2 className="mob-title">
          Certificate
          <br />
          of Internship
        </h2>
        <p className="mob-subtitle">Excellence · Dedication · Achievement</p>
        <div className="mob-divider" />

        {/* Stars */}
        <p className="mob-stars">★ &nbsp; ★ &nbsp; ★</p>

        {/* Recipient */}
        <p className="mob-presented">
          This certificate is proudly presented to
        </p>
        <h1 className="mob-name">{data.name}</h1>
        <p className="mob-father">
          Son / Daughter of{" "}
          <span
            style={{ fontWeight: 600, fontStyle: "normal", color: "#4a2e00" }}
          >
            {data.faterName || "N/A"}
          </span>
        </p>

        <div className="mob-divider thin" />

        {/* Body */}
        <p className="mob-body">
          has successfully completed a{" "}
          <strong>120-Hour Internship Programme</strong> under{" "}
          <strong>Social Work &amp; Human Management</strong> at{" "}
          <strong>Opus Social Foundation, District Centre Jaipur</strong>, from{" "}
          <strong>{fmt(data.internshipStartDate)}</strong> to{" "}
          <strong>{fmt(data.internshipEndDate)}</strong>.
        </p>

        {/* QR + Sign/Seal row */}
        <div className="mob-bottom">
          <div className="mob-sig">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/opus-sign.png"
              alt="Signature"
              className="mob-sign"
              onError={(e) => {
                (e.target as HTMLImageElement).style.display = "none";
              }}
            />
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/opus-seal.png"
              alt="Seal"
              className="mob-seal"
              onError={(e) => {
                (e.target as HTMLImageElement).style.display = "none";
              }}
            />
            <div className="mob-sig-line" />
            <span className="mob-sig-label">Authorized Signatory</span>
            <span className="mob-sig-sub">Opus Social Foundation</span>
          </div>

          <div className="mob-qr">
            <div className="qr-border">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src={data.qrCode} alt="QR Code" className="mob-qr-img" />
            </div>
            <span className="qr-caption">Scan to Verify</span>
          </div>
        </div>

        <div className="mob-divider" />

        {/* Meta grid */}
        <div className="mob-meta-grid">
          {[
            ["Certificate ID", data.certificateId],
            ["Date of Issue", fmt(data.issuedDate)],
            ["Duration", "120 Hours"],
            ["Program", "Social Work & Human Mgmt."],
            ["Centre", "District Jaipur"],
          ].map(([label, value]) => (
            <div className="mob-meta-entry" key={label}>
              <span className="meta-label">{label}</span>
              <span className="meta-value">{value}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

// ─── Download Button ──────────────────────────────────────────────────────────

function DownloadButton({ certificateId }: { certificateId: string }) {
  const [downloading, setDownloading] = useState(false);

  const handleDownload = async () => {
    setDownloading(true);
    try {
      const res = await fetch(
        `${process.env.NEXT_PUBLIC_BACKEND_URL}/api/certificates/${certificateId}/download`,
      );
      if (!res.ok) throw new Error();
      const blob = await res.blob();
      const url = URL.createObjectURL(blob);
      const a = document.createElement("a");
      a.href = url;
      a.download = `Certificate_${certificateId}.pdf`;
      document.body.appendChild(a);
      a.click();
      a.remove();
      URL.revokeObjectURL(url);
    } catch {
      alert("Could not download the certificate. Please try again.");
    } finally {
      setDownloading(false);
    }
  };

  return (
    <button
      className="download-btn"
      onClick={handleDownload}
      disabled={downloading}
    >
      {downloading ? (
        <>
          <svg
            width="16"
            height="16"
            viewBox="0 0 24 24"
            fill="none"
            style={{ animation: "spin 1s linear infinite", flexShrink: 0 }}
          >
            <circle
              cx="12"
              cy="12"
              r="9"
              stroke="currentColor"
              strokeWidth="2"
              strokeDasharray="40"
              strokeDashoffset="10"
              strokeLinecap="round"
            />
          </svg>
          Preparing PDF…
        </>
      ) : (
        <>
          <svg
            width="16"
            height="16"
            viewBox="0 0 24 24"
            fill="none"
            style={{ flexShrink: 0 }}
          >
            <path
              d="M12 3v13m0 0l-4-4m4 4l4-4"
              stroke="currentColor"
              strokeWidth="1.8"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M3 17v2a2 2 0 002 2h14a2 2 0 002-2v-2"
              stroke="currentColor"
              strokeWidth="1.8"
              strokeLinecap="round"
            />
          </svg>
          Download Certificate
        </>
      )}
    </button>
  );
}

// ─── Page ─────────────────────────────────────────────────────────────────────

export default function CertificateVerifyPage() {
  const { id } = useParams<{ id: string }>();
  const [data, setData] = useState<CertificateData | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (!id) {
      setError("No certificate ID provided.");
      setLoading(false);
      return;
    }
    (async () => {
      try {
        const res = await fetch(
          `${process.env.NEXT_PUBLIC_BACKEND_URL}/api/certificates/${id}`,
        );
        if (!res.ok) {
          setError("This certificate does not exist or has been revoked.");
          return;
        }
        setData(await res.json());
      } catch {
        setError(
          "Unable to reach the verification server. Please try again later.",
        );
      } finally {
        setLoading(false);
      }
    })();
  }, [id]);

  if (loading) return <LoadingState />;
  if (error || !data) return <ErrorState message={error ?? "Unknown error."} />;

  return (
    <>
      <style>{CSS}</style>

      <div className="page-wrapper">
        <ValidBadge />

        {/* Desktop layout */}
        <div className="show-desktop">
          <DesktopCertificate data={data} />
        </div>

        {/* Mobile layout */}
        <div className="show-mobile">
          <MobileCertificate data={data} />
        </div>

        <DownloadButton certificateId={data.certificateId} />

        <p className="hint">
          This certificate has been issued by Opus Social Foundation and is
          digitally verified.
        </p>
      </div>
    </>
  );
}

// ─── CSS ─────────────────────────────────────────────────────────────────────

const CSS = `
@import url('https://fonts.googleapis.com/css2?family=Cinzel:wght@400;600;700;900&family=Cormorant+Garamond:ital,wght@0,300;0,400;0,600;1,300;1,400&display=swap');

@keyframes shimmer { 0%{background-position:200% 0} 100%{background-position:-200% 0} }
@keyframes spin    { to { transform: rotate(360deg); } }

*, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }

/* ── Page ── */
.page-wrapper {
  min-height: 100vh;
  background: linear-gradient(160deg, #1a1208 0%, #2a1e0a 50%, #1a1208 100%);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 40px 20px;
  gap: 20px;
}

/* ── Responsive show/hide ── */
.show-desktop { display: flex; justify-content: center; align-items: center; width: 100%; }
.show-mobile  { display: none;  width: 100%; }

@media (max-width: 700px) {
  .show-desktop { display: none; }
  .show-mobile  { display: block; }
  .page-wrapper { padding: 24px 16px; }
}

/* ── Verified badge ── */
.valid-badge {
  display: flex; align-items: center; gap: 8px;
  background: rgba(15,110,86,0.15);
  border: 1px solid rgba(15,110,86,0.4);
  border-radius: 999px;
  padding: 6px 18px;
  font-family: 'Cinzel', serif;
  font-size: 12px;
  letter-spacing: 0.12em;
  color: #5dcaa5;
  text-transform: uppercase;
}

/* ── Corner ornaments (shared) ── */
.corner { position: absolute; width: 70px; height: 70px; z-index: 2; pointer-events: none; }
.corner-tl { top: 12px;    left: 12px; }
.corner-tr { top: 12px;    right: 12px;  transform: scaleX(-1); }
.corner-bl { bottom: 12px; left: 12px;   transform: scaleY(-1); }
.corner-br { bottom: 12px; right: 12px;  transform: scale(-1); }

/* ── Gold lines ── */
.gold-line {
  height: 2px;
  background: linear-gradient(90deg, transparent, #c9a84c 20%, #f5d27a 50%, #c9a84c 80%, transparent);
  flex-shrink: 0;
}
.gold-line.wide   { width: 100%; max-width: 480px; }
.gold-line.medium { width: 100%; max-width: 300px; height: 1px; }
.gold-line.narrow { width: 140px; height: 1px; opacity: 0.7; }

/* ══════════════════════════════════════════════
   DESKTOP CERTIFICATE
══════════════════════════════════════════════ */
.cert-outer {
  width: 100%;
  max-width: 1000px;
  aspect-ratio: 1123 / 794;
  background: linear-gradient(160deg, #fdf8ee 0%, #f5ead2 40%, #fdf3e0 70%, #ece1c5 100%);
  position: relative;
  box-shadow:
    0 0 0 10px #8b6914,
    0 0 0 14px #f5ead2,
    0 0 0 17px #7a5c10,
    0 0 0 21px #f5ead2,
    0 0 0 22px #c9a84c,
    0 30px 80px rgba(0,0,0,0.6);
  overflow: hidden;
}

.cert-content {
  position: absolute; inset: 0;
  z-index: 3;
  padding: 3.5% 5.5% 3%;
  display: flex; flex-direction: column; align-items: center;
}

/* ID badge */
.id-badge {
  position: absolute; top: 4%; right: 4.5%;
  display: flex; flex-direction: column; align-items: flex-end; gap: 2px;
  z-index: 5;
}
.id-label {
  font-family: 'Cinzel', serif;
  font-size: 0.5em; letter-spacing: 0.15em;
  color: #c0a060; text-transform: uppercase;
}
.id-value {
  font-family: 'Cinzel', serif;
  font-size: 0.65em; letter-spacing: 0.1em;
  color: #9a7a30; text-transform: uppercase;
}

/* Org header */
.org-header {
  display: flex; align-items: center; gap: 10px; margin-bottom: 0.5%;
}
.org-dot {
  width: 5px; height: 5px; background: #c9a84c; border-radius: 50%; flex-shrink: 0;
}
.org-name {
  font-family: 'Cinzel', serif;
  font-size: 0.9em; font-weight: 600;
  letter-spacing: 0.35em; color: #7a5c10;
  text-transform: uppercase; white-space: nowrap;
}

/* Title ribbon */
.ribbon-wrap {
  display: flex; align-items: center; width: 100%;
  margin: 0.5% 0 0.4%; gap: 14px;
}
.ribbon-line {
  flex: 1; height: 1px;
  background: linear-gradient(90deg, transparent, #c9a84c);
}
.ribbon-line.flip { transform: scaleX(-1); }
.cert-title {
  font-family: 'Cinzel', serif;
  font-size: 2.6em; font-weight: 900;
  color: #5c3d02; letter-spacing: 0.08em;
  text-transform: uppercase; line-height: 1;
  text-shadow: 0 1px 2px rgba(100,60,0,0.18);
  white-space: nowrap;
}
.cert-subtitle {
  font-family: 'Cinzel', serif;
  font-size: 0.72em; letter-spacing: 0.4em;
  color: #9a7a30; text-transform: uppercase;
  margin: 0.3% 0 0.5%;
}
.star-row {
  color: #c9a84c; font-size: 0.65em;
  letter-spacing: 0.3em; margin: 0.3% 0 0.5%;
}

/* Recipient */
.presented {
  font-family: 'Cormorant Garamond', serif;
  font-style: italic; font-size: 1em;
  color: #7a6040; letter-spacing: 0.05em; margin-bottom: 0.2%;
}
.recipient-name {
  font-family: 'Cinzel', serif;
  font-size: 2.1em; font-weight: 700;
  color: #3b2000; letter-spacing: 0.08em;
  margin: 0.3% 0 0.2%;
  text-shadow: 0 1px 0 rgba(200,160,50,0.3);
}
.father-line {
  font-family: 'Cormorant Garamond', serif;
  font-style: italic; font-size: 0.92em;
  color: #7a6040; margin-bottom: 0.5%;
}
.father-name { font-weight: 600; font-style: normal; color: #4a2e00; }

/* Body */
.body-text {
  font-family: 'Cormorant Garamond', serif;
  font-size: 0.97em; color: #3d2800;
  line-height: 1.65; text-align: center;
  max-width: 90%; margin: 0.8% auto 0;
}
.body-text strong { font-weight: 600; color: #5c3300; }

/* Bottom row */
.bottom-row {
  margin-top: auto; width: 100%;
  display: flex; align-items: flex-end;
  justify-content: space-between; padding-top: 0.8%;
}

/* Meta */
.meta-block { width: 21%; }
.meta-entry {
  border-bottom: 0.5px solid rgba(180,140,80,0.3);
  padding-bottom: 2px; margin-bottom: 4px;
  display: flex; flex-direction: column;
}
.meta-label {
  font-family: 'Cinzel', serif;
  font-size: 0.65em; letter-spacing: 0.15em;
  color: #9a7a30; text-transform: uppercase;
}
.meta-value {
  font-family: 'Cormorant Garamond', serif;
  font-size: 0.85em; color: #6b4c1e; line-height: 1.5;
}

/* QR */
.qr-block {
  display: flex; flex-direction: column; align-items: center; gap: 4px;
}
.qr-border {
  padding: 5px; border: 1.5px solid #c9a84c;
  background: #fffdf5;
  box-shadow: 0 2px 12px rgba(100,70,0,0.12);
}
.qr-img { width: 75px; height: 75px; display: block; }
.qr-caption {
  font-family: 'Cinzel', serif;
  font-size: 0.5em; letter-spacing: 0.18em;
  color: #9a7a30; text-transform: uppercase;
}

/* Signature */
.sig-block {
  width: 26%; display: flex; flex-direction: column; align-items: center;
}
.sig-images {
  display: flex; flex-direction: row;
  align-items: flex-end; justify-content: center;
  gap: 8px; margin-bottom: 4px;
}
.sig-sign { height: 4.5em; max-width: 9em; object-fit: contain; }
.sig-seal { height: 5.5em; max-width: 9em; object-fit: contain; }
.sig-line {
  width: 85%; height: 1px;
  background: linear-gradient(90deg, transparent, #b8922e 25%, #b8922e 75%, transparent);
  margin: 3px 0 4px;
}
.sig-label {
  font-family: 'Cinzel', serif;
  font-size: 0.53em; letter-spacing: 0.2em;
  color: #8b6914; text-transform: uppercase; text-align: center;
}
.sig-sublabel {
  font-family: 'Cormorant Garamond', serif;
  font-style: italic; font-size: 0.72em;
  color: #7a6040; text-align: center;
}

/* ══════════════════════════════════════════════
   MOBILE CERTIFICATE (portrait card)
══════════════════════════════════════════════ */
.mob-cert {
  width: 100%;
  max-width: 420px;
  margin: 0 auto;
  background: linear-gradient(160deg, #fdf8ee 0%, #f5ead2 50%, #ece1c5 100%);
  position: relative;
  border-radius: 4px;
  box-shadow:
    0 0 0 8px #8b6914,
    0 0 0 11px #f5ead2,
    0 0 0 13px #7a5c10,
    0 0 0 15px #c9a84c,
    0 20px 60px rgba(0,0,0,0.6);
  overflow: hidden;
}

/* Mobile corner smaller */
.mob-cert .corner { width: 50px; height: 50px; }
.mob-cert .corner-tl { top: 10px;    left: 10px; }
.mob-cert .corner-tr { top: 10px;    right: 10px; }
.mob-cert .corner-bl { bottom: 10px; left: 10px; }
.mob-cert .corner-br { bottom: 10px; right: 10px; }

.mob-id {
  position: absolute; top: 12px; right: 14px;
  display: flex; flex-direction: column; align-items: flex-end; gap: 1px;
  z-index: 5;
}
.mob-id-val {
  font-family: 'Cinzel', serif;
  font-size: 9px; letter-spacing: 0.08em;
  color: #9a7a30; text-transform: uppercase;
}

.mob-content {
  padding: 52px 24px 28px;
  display: flex; flex-direction: column; align-items: center; gap: 10px;
}

.mob-org {
  font-family: 'Cinzel', serif;
  font-size: 10px; letter-spacing: 0.2em;
  color: #7a5c10; text-transform: uppercase; text-align: center;
}
.mob-divider {
  width: 80%; height: 1.5px;
  background: linear-gradient(90deg, transparent, #c9a84c 20%, #f5d27a 50%, #c9a84c 80%, transparent);
}
.mob-divider.thin { height: 1px; opacity: 0.6; }

.mob-title {
  font-family: 'Cinzel', serif;
  font-size: 26px; font-weight: 900;
  color: #5c3d02; letter-spacing: 0.06em;
  text-transform: uppercase; text-align: center; line-height: 1.15;
  text-shadow: 0 1px 2px rgba(100,60,0,0.18);
}
.mob-subtitle {
  font-family: 'Cinzel', serif;
  font-size: 9px; letter-spacing: 0.3em;
  color: #9a7a30; text-transform: uppercase; text-align: center;
}
.mob-stars {
  color: #c9a84c; font-size: 11px; letter-spacing: 0.3em;
}
.mob-presented {
  font-family: 'Cormorant Garamond', serif;
  font-style: italic; font-size: 14px;
  color: #7a6040; text-align: center;
}
.mob-name {
  font-family: 'Cinzel', serif;
  font-size: 24px; font-weight: 700;
  color: #3b2000; letter-spacing: 0.06em;
  text-align: center; line-height: 1.2;
  text-shadow: 0 1px 0 rgba(200,160,50,0.3);
}
.mob-father {
  font-family: 'Cormorant Garamond', serif;
  font-style: italic; font-size: 13px;
  color: #7a6040; text-align: center;
}
.mob-body {
  font-family: 'Cormorant Garamond', serif;
  font-size: 13.5px; color: #3d2800;
  line-height: 1.7; text-align: center;
}
.mob-body strong { font-weight: 600; color: #5c3300; }

/* Mobile bottom: sig + QR side by side */
.mob-bottom {
  width: 100%;
  display: flex; align-items: flex-end;
  justify-content: space-between; gap: 12px;
  padding: 4px 0;
}
.mob-sig {
  display: flex; flex-direction: column; align-items: center; flex: 1;
}
.mob-sign { height: 44px; max-width: 100px; object-fit: contain; }
.mob-seal { height: 56px; max-width: 100px; object-fit: contain; }
.mob-sig-line {
  width: 90%; height: 1px;
  background: linear-gradient(90deg, transparent, #b8922e 25%, #b8922e 75%, transparent);
  margin: 4px 0 3px;
}
.mob-sig-label {
  font-family: 'Cinzel', serif;
  font-size: 7.5px; letter-spacing: 0.18em;
  color: #8b6914; text-transform: uppercase; text-align: center;
}
.mob-sig-sub {
  font-family: 'Cormorant Garamond', serif;
  font-style: italic; font-size: 10px; color: #7a6040;
}
.mob-qr {
  display: flex; flex-direction: column; align-items: center; gap: 4px;
}
.mob-qr-img { width: 70px; height: 70px; display: block; }

/* Mobile meta grid */
.mob-meta-grid {
  width: 100%;
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 6px 16px;
}
.mob-meta-entry {
  border-bottom: 0.5px solid rgba(180,140,80,0.3);
  padding-bottom: 3px;
  display: flex; flex-direction: column;
}
/* Certificate ID spans full width */
.mob-meta-entry:first-child { grid-column: 1 / -1; }

/* ── Download button ── */
.download-btn {
  display: flex; align-items: center; gap: 8px;
  padding: 10px 28px;
  font-family: 'Cinzel', serif;
  font-size: 12px; font-weight: 600;
  letter-spacing: 0.15em; text-transform: uppercase;
  color: #f5d27a;
  background: transparent;
  border: 1px solid #c9a84c;
  border-radius: 4px;
  cursor: pointer;
  transition: background 0.2s, color 0.2s;
  white-space: nowrap;
}
.download-btn:hover:not(:disabled) {
  background: rgba(201,168,76,0.12);
}
.download-btn:disabled { opacity: 0.6; cursor: not-allowed; }

@media (max-width: 700px) {
  .download-btn { width: 100%; max-width: 360px; justify-content: center; }
}

/* ── Hint ── */
.hint {
  font-family: 'Cormorant Garamond', serif;
  font-style: italic; font-size: 13px;
  color: rgba(200,170,110,0.55);
  text-align: center; max-width: 500px;
}

/* ── Shimmer / Error ── */
.shimmer-card {
  width: 100%; max-width: 800px;
  background: rgba(255,255,255,0.04);
  border: 1px solid rgba(200,160,80,0.2);
  border-radius: 12px; padding: 48px;
  display: flex; flex-direction: column; align-items: center; gap: 12px;
}
.shimmer-line {
  border-radius: 6px;
  background: linear-gradient(90deg,
    rgba(200,160,60,0.08) 25%,
    rgba(200,160,60,0.18) 50%,
    rgba(200,160,60,0.08) 75%);
  background-size: 200% 100%;
  animation: shimmer 1.5s infinite;
}
.error-card {
  background: rgba(154,48,16,0.08);
  border: 1px solid rgba(154,48,16,0.25);
  border-radius: 12px; padding: 40px 48px;
  display: flex; flex-direction: column;
  align-items: center; text-align: center; max-width: 440px;
}
.error-title {
  font-family: 'Cinzel', serif;
  font-size: 18px; color: #5c2a10; margin-bottom: 8px;
}
.error-msg {
  font-family: 'Cormorant Garamond', serif;
  font-size: 15px; color: #7a5c40;
}
`;
