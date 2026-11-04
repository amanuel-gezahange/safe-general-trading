"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X, ArrowUpRight } from "lucide-react";

export default function Header() {
    const [open, setOpen] = useState(false);
    const pathname = usePathname();

    useEffect(() => {
        setOpen(false);
    }, [pathname]);

    useEffect(() => {
        if (!open) return;

        const media = window.matchMedia("(max-width: 768px)");

        const lockScroll = () => {
            document.body.style.overflow = media.matches ? "hidden" : "";
        };

        const previousOverflow = document.body.style.overflow;

        lockScroll();
        media.addEventListener("change", lockScroll);

        const handleEscape = (event: KeyboardEvent) => {
            if (event.key === "Escape") setOpen(false);
        };

        document.addEventListener("keydown", handleEscape);

        return () => {
            document.body.style.overflow = previousOverflow;
            media.removeEventListener("change", lockScroll);
            document.removeEventListener("keydown", handleEscape);
        };
    }, [open]);

    const closeMenu = () => setOpen(false);

    return (
        <header className="header">
            <div className="container nav">
                <Link href="/" className="brand" onClick={closeMenu}>
                    <span className="brandmark">S</span>
                    <span>
                        SGT <strong>PLC</strong>
                        <small>SAFE GENERAL TRAINING</small>
                    </span>
                </Link>

                <nav
                    id="primary-navigation"
                    className={open ? "navlinks open" : "navlinks"}
                    aria-label="Main navigation"
                >
                    <Link href="/" onClick={closeMenu}>
                        Home
                    </Link>

                    <Link href="/products" onClick={closeMenu}>
                        Products
                    </Link>

                    <Link href="/#industries" onClick={closeMenu}>
                        Industries
                    </Link>

                    <Link href="/#about" onClick={closeMenu}>
                        About
                    </Link>

                    <Link href="/quote" className="navcta" onClick={closeMenu}>
                        Get a quote
                        <ArrowUpRight size={16} />
                    </Link>
                </nav>

                <button
                    type="button"
                    className="mobilemenu"
                    aria-label={open ? "Close menu" : "Open menu"}
                    aria-expanded={open}
                    aria-controls="primary-navigation"
                    onClick={() => setOpen((current) => !current)}
                >
                    {open ? <X /> : <Menu />}
                </button>
            </div>
        </header>
    );
}
