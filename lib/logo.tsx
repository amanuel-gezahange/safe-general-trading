import { LOGO_PNG } from "./logo-png";
import { LOCKUP_VIEWBOX, lockupInner } from "./logo-svg";

/** Full SGT logo (molecule mark + "SGT"), as in the brand artwork. */
export function Logo() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox={LOCKUP_VIEWBOX}
      aria-hidden="true"
      dangerouslySetInnerHTML={{ __html: lockupInner() }}
    />
  );
}

/** Full logo for next/og images, rendered from a pre-built PNG. */
export function LogoImage({ height }: { height: number }) {
  const width = Math.round((LOGO_PNG.width / LOGO_PNG.height) * height);
  // eslint-disable-next-line @next/next/no-img-element
  return <img src={LOGO_PNG.src} width={width} height={height} alt="" />;
}
