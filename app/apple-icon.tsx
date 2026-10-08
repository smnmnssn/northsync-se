import { ImageResponse } from "next/og";
import { northMarkDataUri, NORTH_INK } from "@/components/brand/north-mark";

export const size = { width: 180, height: 180 };
export const contentType = "image/png";

const src = northMarkDataUri({ inverted: true });

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
          background: NORTH_INK,
        }}
      >
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src={src} width={118} height={118} alt="" />
      </div>
    ),
    size,
  );
}
