import { readFileSync } from "node:fs";
import { join } from "node:path";
import { ImageResponse } from "next/og";
import { spruceMarkDocument } from "@/components/brand/spruce-mark";

export const alt = "Northsync – Digitala lösningar byggda för verksamheten.";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

const root = process.cwd();
const sans = readFileSync(join(root, "assets/fonts/Geist-SemiBold.ttf"));
const mono = readFileSync(join(root, "assets/fonts/GeistMono-Medium.ttf"));

const markSrc = `data:image/svg+xml;base64,${Buffer.from(spruceMarkDocument()).toString("base64")}`;

export default function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: "72px 80px",
          background: "#F6F7F4",
          color: "#111315",
          fontFamily: "Geist",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: 16 }}>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src={markSrc} width={48} height={48} alt="" />
          <span style={{ fontSize: 24, letterSpacing: "0.16em" }}>NORTHSYNC</span>
        </div>

        <div style={{ display: "flex" }}>
          <div style={{ display: "flex", flexDirection: "column", width: 820 }}>
            <div style={{ fontSize: 76, lineHeight: 1.04, letterSpacing: "-0.035em" }}>
              Digitala lösningar byggda för verksamheten.
            </div>
            <div
              style={{
                marginTop: 40,
                paddingTop: 24,
                borderTop: "1px solid #DDE1DD",
                fontFamily: "Geist Mono",
                fontSize: 20,
                letterSpacing: "0.12em",
                color: "#646A6F",
              }}
            >
              WEBBPLATSER · E-HANDEL · DIGITALA SYSTEM
            </div>
          </div>
        </div>
      </div>
    ),
    {
      ...size,
      fonts: [
        { name: "Geist", data: sans, weight: 600 },
        { name: "Geist Mono", data: mono, weight: 500 },
      ],
    },
  );
}
