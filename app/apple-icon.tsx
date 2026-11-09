import { ImageResponse } from "next/og";

export const size = { width: 180, height: 180 };
export const contentType = "image/png";

/** iOS home-screen icon: the brand "S" mark on green. */
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
          background: "#00806d",
          color: "#ffffff",
          fontSize: 112,
          fontWeight: 700,
        }}
      >
        S
      </div>
    ),
    size
  );
}
