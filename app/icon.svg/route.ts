import { northMarkDocument, NORTH_INK } from "@/components/brand/north-mark";

export function GET() {
  return new Response(northMarkDocument({ inverted: true, tile: NORTH_INK }), {
    headers: { "Content-Type": "image/svg+xml", "Cache-Control": "public, max-age=86400" },
  });
}
