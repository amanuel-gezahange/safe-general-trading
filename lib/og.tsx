import { ImageResponse } from "next/og";
import { company, products } from "@/lib/data";
import { LogoImage } from "@/lib/logo";

/** Standard social-share image size (WhatsApp, Telegram, Facebook, LinkedIn, X). */
export const ogSize = { width: 1200, height: 630 };
export const ogContentType = "image/png";

type OgOptions = {
  eyebrow: string;
  title: string;
  subtitle: string;
  /** Labels shown as tiles in the green panel. */
  tiles?: string[];
};

const GREEN = "#00806d";

/** Renders a branded share image: text on the left, curved green panel on the right. */
export function renderOgImage({
  eyebrow,
  title,
  subtitle,
  tiles = products.map((product) => product.name),
}: OgOptions) {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          background: "#ffffff",
          fontFamily: "sans-serif",
        }}
      >
        {/* Text */}
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
            width: 640,
            padding: "56px 0 52px 64px",
          }}
        >
          <div style={{ display: "flex", flexDirection: "column", alignItems: "flex-start", gap: 10 }}>
            <LogoImage height={72} />
            <div style={{ color: "#333333", fontSize: 18, letterSpacing: 2 }}>
              SAFE GENERAL TRADING PLC · INDUSTRIAL CHEMICALS
            </div>
          </div>

          <div style={{ display: "flex", flexDirection: "column" }}>
            <div style={{ color: GREEN, fontSize: 22, fontWeight: 700, letterSpacing: 4 }}>
              {eyebrow.toUpperCase()}
            </div>
            <div style={{ color: GREEN, fontSize: 60, lineHeight: 1.1, marginTop: 14 }}>{title}</div>
            <div style={{ color: "#444444", fontSize: 26, lineHeight: 1.45, marginTop: 20 }}>{subtitle}</div>
          </div>

          <div style={{ color: "#666666", fontSize: 20 }}>
            {company.domain.replace("https://", "")}
          </div>
        </div>

        {/* Green panel with tiles */}
        <div
          style={{
            flex: 1,
            display: "flex",
            alignItems: "center",
            padding: "0 40px 0 170px",
            background: `linear-gradient(135deg, #0a8f79 0%, ${GREEN} 45%, #005f51 100%)`,
            borderTopLeftRadius: "70% 100%",
          }}
        >
          <div style={{ display: "flex", flexWrap: "wrap", gap: 12 }}>
            {tiles.map((tile) => (
              <div
                key={tile}
                style={{
                  display: "flex",
                  padding: "12px 16px",
                  border: "2px solid rgba(255,255,255,0.7)",
                  color: "#ffffff",
                  fontSize: 22,
                  fontWeight: 700,
                }}
              >
                {tile}
              </div>
            ))}
          </div>
        </div>
      </div>
    ),
    ogSize
  );
}
