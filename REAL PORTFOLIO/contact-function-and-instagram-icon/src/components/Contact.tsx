import InstagramIcon from "./InstagramIcon";

interface ContactChannel {
  label: string;
  value: string;
  href: string;
}

/**
 * Contact section for the website.
 *
 * Exposes a reusable `Contact` component plus a small `openInstagram`
 * helper that opens the brand Instagram profile (om.blaze_) in a new tab.
 */

const INSTAGRAM_HANDLE = "om.blaze_";
const INSTAGRAM_URL = `https://www.instagram.com/${INSTAGRAM_HANDLE}`;

/**
 * Opens the Instagram profile in a new tab/window.
 * Safe to call from any click handler.
 */
export function openInstagram() {
  window.open(INSTAGRAM_URL, "_blank", "noopener,noreferrer");
}

const channels: ContactChannel[] = [
  {
    label: "Instagram",
    value: `@${INSTAGRAM_HANDLE}`,
    href: INSTAGRAM_URL,
  },
  {
    label: "Email",
    value: "meharomkumar@gmail.com",
    href: "mailto:meharomkumar@gmail.com",
  },
];

export default function Contact() {
  return (
    <section
      id="contact"
      className="w-full rounded-3xl border border-white/10 bg-white/5 p-8 backdrop-blur-md shadow-xl"
    >
      <h2 className="text-2xl font-semibold tracking-tight text-white">
        Get in touch
      </h2>
      <p className="mt-2 text-sm text-white/60">
        Reach out through any of the channels below.
      </p>

      <ul className="mt-6 space-y-3">
        {channels.map((channel) => (
          <li key={channel.label}>
            <a
              href={channel.href}
              target={channel.href.startsWith("http") ? "_blank" : undefined}
              rel="noopener noreferrer"
              className="group flex items-center justify-between rounded-2xl border border-white/10 bg-white/5 px-4 py-3 transition hover:border-pink-400/50 hover:bg-white/10"
            >
              <span className="text-sm text-white/70">{channel.label}</span>
              <span className="flex items-center gap-2 font-medium text-white">
                {channel.label === "Instagram" && (
                  <InstagramIcon className="h-5 w-5 text-pink-400" />
                )}
                {channel.value}
              </span>
            </a>
          </li>
        ))}
      </ul>

      <a
        href={INSTAGRAM_URL}
        target="_blank"
        rel="noopener noreferrer"
        onClick={openInstagram}
        className="mt-6 inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-fuchsia-500 via-pink-500 to-orange-400 px-5 py-2.5 text-sm font-semibold text-white shadow-lg shadow-pink-500/30 transition hover:scale-[1.03] active:scale-95"
      >
        <InstagramIcon className="h-5 w-5" />
        Follow @{INSTAGRAM_HANDLE}
      </a>
    </section>
  );
}
