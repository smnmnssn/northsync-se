import { ImageResponse } from "next/og";
import { spruceMarkDocument } from "@/components/brand/spruce-mark";

export const size = { width: 180, height: 180 };
export const contentType = "image/png";

const src = `data:image/svg+xml;base64,${Buffer.from(spruceMarkDocument({ inverted: true })).toString("base64")}`;

export default function AppleIcon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          background: "#0E1114",
        }}
      >
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src={src} width={124} height={124} alt="" />
      </div>
    ),
    size,
  );
}
