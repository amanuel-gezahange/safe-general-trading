"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X, MessageCircle, Phone } from "lucide-react";
import { company, whatsappLink } from "@/lib/data";
import { navItems } from "@/lib/nav";
import "./Header.css";

const inquiryHref = whatsappLink(
    "Hello Safe General Trading PLC, I would like to make an inquiry."
);

export default function Header() {
    const [open, setOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);
    const pathname = usePathname();

    // Compact header after scrolling. Two thresholds (hysteresis) stop it
    // flickering when the page rests near the boundary.
    useEffect(() => {
        const onScroll = () => {
            const y = window.scrollY;
            setScrolled((current) => (current ? y > 8 : y > 80));
        };

        onScroll();
        window.addEventListener("scroll", onScroll, { passive: true });
        return () => window.removeEventListener("scroll", onScroll);
    }, []);

    useEffect(() => {
        setOpen(false);
    }, [pathname]);

    useEffect(() => {
        if (!open) return;

        const media = window.matchMedia("(max-width: 1024px)");
        const previousOverflow = document.body.style.overflow;

        const lockScroll = () => {
            document.body.style.overflow = media.matches ? "hidden" : "";
        };

        const handleEscape = (event: KeyboardEvent) => {
            if (event.key === "Escape") setOpen(false);
        };

        lockScroll();
        media.addEventListener("change", lockScroll);
        document.addEventListener("keydown", handleEscape);

        return () => {
            document.body.style.overflow = previousOverflow;
            media.removeEventListener("change", lockScroll);
            document.removeEventListener("keydown", handleEscape);
        };
    }, [open]);

    const isActive = (href: string) =>
        href === "/" ? pathname === "/" : pathname.startsWith(href);

    return (
        <header className={scrolled ? "sgt-header is-scrolled" : "sgt-header"}>
            {/* Top row: centered brand, utility actions on the right */}
            <div className="sgt-header-top">
                <span className="sgt-header-spacer" aria-hidden="true" />

                <Link
                    href="/"
                    className="sgt-header-brand"
                    aria-label={`${company.name} home`}
                >
                    <span className="sgt-header-brandmark" aria-hidden="true">
                        S
                    </span>
                    <span className="sgt-header-brandtext">
                        <span className="sgt-header-brandname">
                            Safe General Trading
                        </span>
                        <span className="sgt-header-brandcaption">
                            PLC · Industrial Chemicals
                        </span>
                    </span>
                </Link>

                <div className="sgt-header-utility">
                    <a href={`tel:${company.phones[0]}`}>
                        <Phone size={13} aria-hidden="true" />
                        {company.phones[0]}
                    </a>
                    <a href={inquiryHref} target="_blank" rel="noopener noreferrer">
                        <MessageCircle size={13} aria-hidden="true" />
                        Direct Inquiry
                    </a>
                </div>

                <button
                    type="button"
                    className="sgt-header-toggle"
                    aria-label={open ? "Close menu" : "Open menu"}
                    aria-expanded={open}
                    aria-controls="primary-navigation"
                    onClick={() => setOpen((current) => !current)}
                >
                    {open ? <X size={24} /> : <Menu size={24} />}
                </button>
            </div>

            {/* Main navigation */}
            <nav
                id="primary-navigation"
                className={open ? "sgt-header-nav is-open" : "sgt-header-nav"}
                aria-label="Main navigation"
            >
                <ul>
                    {navItems.map((item) => (
                        <li key={item.href}>
                            <Link
                                href={item.href}
                                className={
                                    isActive(item.href)
                                        ? "sgt-header-navlink is-active"
                                        : "sgt-header-navlink"
                                }
                                aria-current={isActive(item.href) ? "page" : undefined}
                            >
                                {item.label}
                            </Link>
                        </li>
                    ))}
                </ul>

                {/* Phone + inquiry inside the mobile menu */}
                <div className="sgt-header-mobileutility">
                    <a href={`tel:${company.phones[0]}`} className="sgt-btn sgt-btn--outline">
                        <Phone size={16} aria-hidden="true" />
                        {company.phones[0]}
                    </a>
                    <a
                        href={inquiryHref}
                        className="sgt-btn"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <MessageCircle size={16} aria-hidden="true" />
                        Direct Inquiry
                    </a>
                </div>
            </nav>
        </header>
    );
}
