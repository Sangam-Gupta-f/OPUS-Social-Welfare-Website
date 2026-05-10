"use client";
import React, { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import { set } from "date-fns";

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

// ─── Sub-components ───────────────────────────────────────────────────────────

function GoldLine({
  width = 520,
  height = 2,
  opacity = 1,
}: {
  width?: number;
  height?: number;
  opacity?: number;
}) {
  return (
    <div
      style={{
        width,
        height,
        opacity,
        background:
          "linear-gradient(90deg, transparent, #c9a84c 20%, #f5d27a 50%, #c9a84c 80%, transparent)",
        margin: "0 auto",
        flexShrink: 0,
      }}
    />
  );
}

function CornerOrnament({ position }: { position: "tl" | "tr" | "bl" | "br" }) {
  const transforms: Record<string, string> = {
    tl: "none",
    tr: "scaleX(-1)",
    bl: "scaleY(-1)",
    br: "scale(-1)",
  };
  const positions: Record<string, React.CSSProperties> = {
    tl: { top: 14, left: 14 },
    tr: { top: 14, right: 14 },
    bl: { bottom: 14, left: 14 },
    br: { bottom: 14, right: 14 },
  };
  return (
    <div
      style={{
        position: "absolute",
        width: 80,
        height: 80,
        transform: transforms[position],
        ...positions[position],
        zIndex: 2,
        pointerEvents: "none",
      }}
    >
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

// ─── Loading State ─────────────────────────────────────────────────────────────

function LoadingState() {
  return (
    <div style={styles.wrapper}>
      <div style={styles.shimmerCard}>
        <div
          style={{
            ...styles.shimmerLine,
            width: "40%",
            height: 14,
            marginBottom: 24,
            marginInline: "auto",
          }}
        />
        <div
          style={{
            ...styles.shimmerLine,
            width: "70%",
            height: 40,
            marginBottom: 16,
            marginInline: "auto",
          }}
        />
        <div
          style={{
            ...styles.shimmerLine,
            width: "50%",
            height: 18,
            marginBottom: 8,
            marginInline: "auto",
          }}
        />
        <div
          style={{
            ...styles.shimmerLine,
            width: "30%",
            height: 14,
            marginBottom: 32,
            marginInline: "auto",
          }}
        />
        <div
          style={{
            ...styles.shimmerLine,
            width: "90%",
            height: 12,
            marginBottom: 8,
            marginInline: "auto",
          }}
        />
        <div
          style={{
            ...styles.shimmerLine,
            width: "85%",
            height: 12,
            marginBottom: 8,
            marginInline: "auto",
          }}
        />
        <div
          style={{
            ...styles.shimmerLine,
            width: "80%",
            height: 12,
            marginBottom: 0,
            marginInline: "auto",
          }}
        />
      </div>
    </div>
  );
}

// ─── Error State ──────────────────────────────────────────────────────────────

function ErrorState({ message }: { message: string }) {
  return (
    <div style={styles.wrapper}>
      <div style={styles.errorCard}>
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
        <p
          style={{
            fontFamily: "'Cinzel', serif",
            fontSize: 18,
            color: "#5c2a10",
            marginBottom: 8,
          }}
        >
          Certificate Not Found
        </p>
        <p
          style={{
            fontFamily: "'Cormorant Garamond', serif",
            fontSize: 15,
            color: "#7a5c40",
          }}
        >
          {message}
        </p>
      </div>
    </div>
  );
}

// ─── Valid Badge ───────────────────────────────────────────────────────────────

function ValidBadge() {
  return (
    <div style={styles.validBadge}>
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

// ─── Meta Row ─────────────────────────────────────────────────────────────────

function MetaEntry({ label, value }: { label: string; value: string }) {
  return (
    <div style={styles.metaEntry}>
      <span style={styles.metaLabel}>{label}</span>
      <span style={styles.metaValue}>{value}</span>
    </div>
  );
}

// ─── Main Certificate Card ─────────────────────────────────────────────────────

function CertificateCard({ data }: { data: CertificateData }) {
  return (
    <div style={styles.certOuter}>
      {/* 4-layer gold border via box-shadow */}
      <div style={styles.certInner}>
        {/* Corner ornaments */}
        <CornerOrnament position="tl" />
        <CornerOrnament position="tr" />
        <CornerOrnament position="bl" />
        <CornerOrnament position="br" />

        {/* Cert ID badge — top right */}
        <div style={styles.idBadge}>
          <span style={styles.idLabel}>Certificate No.</span>
          <span style={styles.idValue}>{data.certificateId}</span>
        </div>

        {/* ── Content ── */}
        <div style={styles.content}>
          {/* Org header */}
          <div style={styles.orgHeader}>
            <GoldLine width={160} height={1} opacity={0.7} />
            <div style={styles.orgDot} />
            <span style={styles.orgName}>Opus Social Foundation</span>
            <div style={styles.orgDot} />
            <GoldLine width={160} height={1} opacity={0.7} />
          </div>

          {/* Title */}
          <div style={styles.ribbonWrap}>
            <div style={styles.ribbonLine} />
            <span style={styles.certTitle}>Certificate of Internship</span>
            <div style={{ ...styles.ribbonLine, transform: "scaleX(-1)" }} />
          </div>
          <p style={styles.certSubtitle}>
            Excellence · Dedication · Achievement
          </p>

          <GoldLine width={480} />
          <p style={styles.starRow}>★ &nbsp; ★ &nbsp; ★</p>

          {/* Recipient */}
          <p style={styles.presented}>
            This certificate is proudly presented to
          </p>
          <h1 style={styles.recipientName}>{data.name}</h1>
          <p style={styles.fatherLine}>
            Son / Daughter of{" "}
            <span style={styles.fatherName}>{data.faterName || "N/A"}</span>
          </p>

          <GoldLine width={300} height={1} />

          {/* Body text */}
          <p style={styles.bodyText}>
            has successfully completed a{" "}
            <strong style={styles.bodyStrong}>
              120-Hour Internship Programme
            </strong>{" "}
            under the curriculum of{" "}
            <strong style={styles.bodyStrong}>
              Social Work &amp; Human Management
            </strong>{" "}
            at{" "}
            <strong style={styles.bodyStrong}>
              Opus Social Foundation, District Centre Jaipur
            </strong>
            , carried out from{" "}
            <strong style={styles.bodyStrong}>
              {fmt(data.internshipStartDate)}
            </strong>{" "}
            to{" "}
            <strong style={styles.bodyStrong}>
              {fmt(data.internshipEndDate)}
            </strong>
            . Throughout the programme, the intern demonstrated outstanding
            dedication, discipline, and professional commitment in completing
            all assigned project-based tasks.
          </p>

          {/* Bottom row: meta | QR | signature */}
          <div style={styles.bottomRow}>
            {/* Meta */}
            <div style={styles.metaBlock}>
              <MetaEntry label="Certificate ID" value={data.certificateId} />
              <MetaEntry label="Date of Issue" value={fmt(data.issuedDate)} />
              <MetaEntry label="Duration" value="120 Hours" />
              <MetaEntry label="Program" value="Social Work & Human Mgmt." />
              <MetaEntry label="Centre" value="District Jaipur" />
            </div>

            {/* QR */}
            <div style={styles.qrBlock}>
              <div style={styles.qrBorder}>
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src={data.qrCode} alt="QR Code" style={styles.qrImg} />
              </div>
              <span style={styles.qrCaption}>Scan to Verify</span>
            </div>

            {/* Signature placeholder (images served from backend) */}
            <div style={styles.sigBlock}>
              <div style={styles.sigImages}>
                <img
                  src="/opus-sign.png"
                  alt="Authorized Signature"
                  style={styles.sigSign}
                  onError={(e) => {
                    (e.target as HTMLImageElement).style.display = "none";
                  }}
                />
                <img
                  src="/opus-seal.png"
                  alt="Official Seal"
                  style={styles.sigSeal}
                  onError={(e) => {
                    (e.target as HTMLImageElement).style.display = "none";
                  }}
                />
              </div>
              <div style={styles.sigLine} />
              <span style={styles.sigLabel}>Authorized Signatory</span>
              <span style={styles.sigSubLabel}>Opus Social Foundation</span>
            </div>
          </div>
        </div>
      </div>
    </div>
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

    const fetchCertificate = async () => {
      try {
        const res = await fetch(
          `${process.env.NEXT_PUBLIC_BACKEND_URL}/api/certificates/${id}`,
        );
        if (!res.ok) {
          setError("This certificate does not exist or has been revoked.");
          return;
        }
        const json = await res.json();
        setData(json);
      } catch {
        setError(
          "Unable to reach the verification server. Please try again later.",
        );
      } finally {
        setLoading(false);
      }
    };

    fetchCertificate();
  }, [id]);

  const download = async () => {
    try {
      setLoading(true);
      const res = await fetch(
        `${process.env.NEXT_PUBLIC_BACKEND_URL}/api/certificates/${id}/download`,
      );
      if (!res.ok) {
        setError("This certificate does not exist or has been revoked.");
        return;
      }
      const blob = await res.blob();
      const url = window.URL.createObjectURL(blob);
      const a = document.createElement("a");
      a.href = url;
      a.download = `Certificate_${id}.pdf`;
      document.body.appendChild(a);
      a.click();
      a.remove();

      setLoading(false);
    } catch {
      setError("Unable to download the certificate. Please try again later.");
      setLoading(false);
    }
  };

  if (loading) return <LoadingState />;
  if (error || !data) return <ErrorState message={error ?? "Unknown error."} />;

  return (
    <>
      {/* Google Fonts */}
      <link
        href="https://fonts.googleapis.com/css2?family=Cinzel:wght@400;600;700;900&family=Cormorant+Garamond:ital,wght@0,300;0,400;0,600;1,300;1,400&display=swap"
        rel="stylesheet"
      />

      <div style={styles.wrapper}>
        <ValidBadge />
        <CertificateCard data={data} />

        {/* Download hint */}
        <p style={styles.hint}>
          This certificate has been issued by Opus Social Foundation and is
          digitally verified.
        </p>

        {/* Download button */}
        <button
          style={styles.downloadButton}
          className="text-sm font-medium text-white bg-gradient-to-r from-yellow-500 to-yellow-700 hover:from-yellow-600 hover:to-yellow-800 rounded-md px-4 py-2 mt-6 transition"
          onClick={download}
        >
          Download
        </button>
      </div>
    </>
  );
}

// ─── Styles ───────────────────────────────────────────────────────────────────

const styles: Record<string, React.CSSProperties> = {
  wrapper: {
    minHeight: "100vh",
    background:
      "linear-gradient(160deg, #1a1208 0%, #2a1e0a 50%, #1a1208 100%)",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    padding: "40px 20px",
    gap: 20,
  },

  // ── Certificate outer shell ──
  certOuter: {
    // Responsive: cap at PDF width but scale on small screens
    width: "100%",
    maxWidth: 1000,
    aspectRatio: "1123 / 794",
    background:
      "linear-gradient(160deg, #fdf8ee 0%, #f5ead2 40%, #fdf3e0 70%, #ece1c5 100%)",
    position: "relative",
    // 4-layer gold border
    boxShadow: `
      0 0 0 10px #8b6914,
      0 0 0 14px #f5ead2,
      0 0 0 17px #7a5c10,
      0 0 0 21px #f5ead2,
      0 0 0 22px #c9a84c,
      0 30px 80px rgba(0,0,0,0.6)
    `,
    boxSizing: "border-box",
    overflow: "hidden",
  },

  certInner: {
    position: "absolute",
    inset: 0,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },

  content: {
    position: "relative",
    zIndex: 3,
    width: "100%",
    height: "100%",
    padding: "3.5% 5.5% 3%",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    boxSizing: "border-box",
  },

  // ── ID badge ──
  idBadge: {
    position: "absolute",
    top: "4%",
    right: "4.5%",
    display: "flex",
    flexDirection: "column",
    alignItems: "flex-end",
    gap: 2,
    zIndex: 5,
  },
  idLabel: {
    fontFamily: "'Cinzel', serif",
    fontSize: "0.55em",
    letterSpacing: "0.15em",
    color: "#c0a060",
    textTransform: "uppercase",
  },
  idValue: {
    fontFamily: "'Cinzel', serif",
    fontSize: "0.7em",
    letterSpacing: "0.1em",
    color: "#9a7a30",
    textTransform: "uppercase",
  },

  // ── Org header ──
  orgHeader: {
    display: "flex",
    alignItems: "center",
    gap: 10,
    marginBottom: "0.5%",
  },
  orgDot: {
    width: 5,
    height: 5,
    background: "#c9a84c",
    borderRadius: "50%",
    flexShrink: 0,
  },
  orgName: {
    fontFamily: "'Cinzel', serif",
    fontSize: "0.9em",
    fontWeight: 600,
    letterSpacing: "0.35em",
    color: "#7a5c10",
    textTransform: "uppercase",
    whiteSpace: "nowrap",
  },

  // ── Title ribbon ──
  ribbonWrap: {
    display: "flex",
    alignItems: "center",
    width: "100%",
    margin: "0.6% 0 0.4%",
    gap: 14,
  },
  ribbonLine: {
    flex: 1,
    height: 1,
    background: "linear-gradient(90deg, transparent, #c9a84c)",
  },
  certTitle: {
    fontFamily: "'Cinzel', serif",
    fontSize: "2.6em",
    fontWeight: 900,
    color: "#5c3d02",
    letterSpacing: "0.08em",
    textTransform: "uppercase",
    lineHeight: 1,
    textShadow: "0 1px 2px rgba(100,60,0,0.18)",
    whiteSpace: "nowrap",
  },
  certSubtitle: {
    fontFamily: "'Cinzel', serif",
    fontSize: "0.72em",
    letterSpacing: "0.4em",
    color: "#9a7a30",
    textTransform: "uppercase",
    margin: "0.3% 0 0.6%",
  },
  starRow: {
    color: "#c9a84c",
    fontSize: "0.65em",
    letterSpacing: "0.3em",
    margin: "0.3% 0 0.5%",
  },

  // ── Recipient ──
  presented: {
    fontFamily: "'Cormorant Garamond', serif",
    fontStyle: "italic",
    fontSize: "1em",
    color: "#7a6040",
    letterSpacing: "0.05em",
    marginBottom: "0.2%",
  },
  recipientName: {
    fontFamily: "'Cinzel', serif",
    fontSize: "2.1em",
    fontWeight: 700,
    color: "#3b2000",
    letterSpacing: "0.08em",
    margin: "0.3% 0 0.2%",
    textShadow: "0 1px 0 rgba(200,160,50,0.3)",
  },
  fatherLine: {
    fontFamily: "'Cormorant Garamond', serif",
    fontStyle: "italic",
    fontSize: "0.92em",
    color: "#7a6040",
    marginBottom: "0.5%",
  },
  fatherName: {
    fontWeight: 600,
    fontStyle: "normal",
    color: "#4a2e00",
  },

  // ── Body text ──
  bodyText: {
    fontFamily: "'Cormorant Garamond', serif",
    fontSize: "0.98em",
    color: "#3d2800",
    lineHeight: 1.65,
    textAlign: "center",
    maxWidth: "90%",
    margin: "0.8% auto 0",
  },
  bodyStrong: {
    fontWeight: 600,
    color: "#5c3300",
  },

  // ── Bottom row ──
  bottomRow: {
    marginTop: "auto",
    width: "100%",
    display: "flex",
    alignItems: "flex-end",
    justifyContent: "space-between",
    paddingTop: "0.8%",
  },

  // Meta block
  metaBlock: {
    width: "21%",
    fontFamily: "'Cormorant Garamond', serif",
    fontSize: "0.78em",
    color: "#6b4c1e",
  },
  metaEntry: {
    borderBottom: "0.5px solid rgba(180,140,80,0.3)",
    paddingBottom: 3,
    marginBottom: 5,
    display: "flex",
    flexDirection: "column",
    gap: 0,
  },
  metaLabel: {
    fontFamily: "'Cinzel', serif",
    fontSize: "0.72em",
    letterSpacing: "0.15em",
    color: "#9a7a30",
    textTransform: "uppercase",
  },
  metaValue: {
    fontSize: "1em",
    color: "#6b4c1e",
    lineHeight: 1.5,
  },

  // QR
  qrBlock: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    gap: 4,
  },
  qrBorder: {
    padding: 5,
    border: "1.5px solid #c9a84c",
    background: "#fffdf5",
    boxShadow: "0 2px 12px rgba(100,70,0,0.12)",
  },
  qrImg: {
    width: 75,
    height: 75,
    display: "block",
  },
  qrCaption: {
    fontFamily: "'Cinzel', serif",
    fontSize: "0.5em",
    letterSpacing: "0.18em",
    color: "#9a7a30",
    textTransform: "uppercase",
  },

  // Signature
  sigBlock: {
    width: "26%",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  sigImages: {
    display: "flex",
    flexDirection: "row",
    alignItems: "flex-end",
    justifyContent: "center",
    gap: 8,
    marginBottom: 4,
  },
  sigSign: {
    height: "4.5em",
    maxWidth: "9em",
    objectFit: "contain",
  },
  sigSeal: {
    height: "5.5em",
    maxWidth: "9em",
    objectFit: "contain",
  },
  sigLine: {
    width: "85%",
    height: 1,
    background:
      "linear-gradient(90deg, transparent, #b8922e 25%, #b8922e 75%, transparent)",
    margin: "3px 0 4px",
  },
  sigLabel: {
    fontFamily: "'Cinzel', serif",
    fontSize: "0.53em",
    letterSpacing: "0.2em",
    color: "#8b6914",
    textTransform: "uppercase",
    textAlign: "center",
  },
  sigSubLabel: {
    fontFamily: "'Cormorant Garamond', serif",
    fontStyle: "italic",
    fontSize: "0.72em",
    color: "#7a6040",
    textAlign: "center",
  },

  // ── Valid badge ──
  validBadge: {
    display: "flex",
    alignItems: "center",
    gap: 8,
    background: "rgba(15,110,86,0.15)",
    border: "1px solid rgba(15,110,86,0.4)",
    borderRadius: 999,
    padding: "6px 16px",
    fontFamily: "'Cinzel', serif",
    fontSize: 13,
    letterSpacing: "0.1em",
    color: "#5dcaa5",
    textTransform: "uppercase",
  },

  // ── Hint ──
  hint: {
    fontFamily: "'Cormorant Garamond', serif",
    fontStyle: "italic",
    fontSize: 14,
    color: "rgba(200,170,110,0.6)",
    textAlign: "center",
    maxWidth: 600,
  },

  // ── Loading shimmer ──
  shimmerCard: {
    width: "100%",
    maxWidth: 800,
    background: "rgba(255,255,255,0.04)",
    border: "1px solid rgba(200,160,80,0.2)",
    borderRadius: 12,
    padding: 48,
  },
  shimmerLine: {
    borderRadius: 6,
    background:
      "linear-gradient(90deg, rgba(200,160,60,0.08) 25%, rgba(200,160,60,0.18) 50%, rgba(200,160,60,0.08) 75%)",
    backgroundSize: "200% 100%",
    animation: "shimmer 1.5s infinite",
  },

  // ── Error card ──
  errorCard: {
    background: "rgba(154,48,16,0.08)",
    border: "1px solid rgba(154,48,16,0.25)",
    borderRadius: 12,
    padding: "40px 48px",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    textAlign: "center",
    maxWidth: 440,
  },
};
