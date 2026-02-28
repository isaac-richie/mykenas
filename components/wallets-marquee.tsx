const wallets = [
  {
    name: "MetaMask",
    color: "#F5841F",
    icon: (
      // Official MetaMask fox — simplified accurate shape
      <svg viewBox="0 0 35 33" fill="none" className="h-6 w-6">
        <polygon points="32.958,0.5 19.198,10.223 21.756,4.354" fill="#E17726" stroke="#E17726" strokeWidth="0.25" strokeLinecap="round" strokeLinejoin="round"/>
        <polygon points="2.042,0.5 15.68,10.313 13.244,4.354" fill="#E27625" stroke="#E27625" strokeWidth="0.25" strokeLinecap="round" strokeLinejoin="round"/>
        <polygon points="28.179,23.507 24.452,29.202 32.158,31.294 34.333,23.624" fill="#E27625" stroke="#E27625" strokeWidth="0.25" strokeLinecap="round" strokeLinejoin="round"/>
        <polygon points="0.679,23.624 2.842,31.294 10.536,29.202 6.82,23.507" fill="#E27625" stroke="#E27625" strokeWidth="0.25" strokeLinecap="round" strokeLinejoin="round"/>
        <polygon points="10.106,14.677 7.978,17.882 15.595,18.226 15.337,10.022" fill="#E27625" stroke="#E27625" strokeWidth="0.25" strokeLinecap="round" strokeLinejoin="round"/>
        <polygon points="24.894,14.677 19.534,9.932 19.405,18.226 27.022,17.882" fill="#E27625" stroke="#E27625" strokeWidth="0.25" strokeLinecap="round" strokeLinejoin="round"/>
        <polygon points="10.536,29.202 15.122,27.0 11.149,23.677" fill="#E27625" stroke="#E27625" strokeWidth="0.25" strokeLinecap="round" strokeLinejoin="round"/>
        <polygon points="19.878,27.0 24.452,29.202 23.851,23.677" fill="#E27625" stroke="#E27625" strokeWidth="0.25" strokeLinecap="round" strokeLinejoin="round"/>
        <polygon points="24.452,29.202 19.878,27.0 20.253,30.204 20.21,31.191" fill="#D5BFB2" stroke="#D5BFB2" strokeWidth="0.25" strokeLinecap="round" strokeLinejoin="round"/>
        <polygon points="10.536,29.202 14.79,31.191 14.759,30.204 15.122,27.0" fill="#D5BFB2" stroke="#D5BFB2" strokeWidth="0.25" strokeLinecap="round" strokeLinejoin="round"/>
        <polygon points="14.866,21.948 11.042,20.828 13.689,19.595" fill="#233447" stroke="#233447" strokeWidth="0.25" strokeLinecap="round" strokeLinejoin="round"/>
        <polygon points="20.134,21.948 21.311,19.595 23.969,20.828" fill="#233447" stroke="#233447" strokeWidth="0.25" strokeLinecap="round" strokeLinejoin="round"/>
        <polygon points="10.536,29.202 11.181,23.507 6.82,23.624" fill="#CC6228" stroke="#CC6228" strokeWidth="0.25" strokeLinecap="round" strokeLinejoin="round"/>
        <polygon points="23.819,23.507 24.452,29.202 28.179,23.624" fill="#CC6228" stroke="#CC6228" strokeWidth="0.25" strokeLinecap="round" strokeLinejoin="round"/>
        <polygon points="27.022,17.882 19.405,18.226 20.145,21.948 21.322,19.595 23.98,20.828" fill="#CC6228" stroke="#CC6228" strokeWidth="0.25" strokeLinecap="round" strokeLinejoin="round"/>
        <polygon points="11.042,20.828 13.7,19.595 14.866,21.948 15.595,18.226 7.978,17.882" fill="#CC6228" stroke="#CC6228" strokeWidth="0.25" strokeLinecap="round" strokeLinejoin="round"/>
        <polygon points="7.978,17.882 11.912,25.191 11.042,20.828" fill="#E27525" stroke="#E27525" strokeWidth="0.25" strokeLinecap="round" strokeLinejoin="round"/>
        <polygon points="23.98,20.828 23.099,25.191 27.022,17.882" fill="#E27525" stroke="#E27525" strokeWidth="0.25" strokeLinecap="round" strokeLinejoin="round"/>
        <polygon points="15.595,18.226 14.866,21.948 15.79,26.63 15.994,20.526" fill="#E27525" stroke="#E27525" strokeWidth="0.25" strokeLinecap="round" strokeLinejoin="round"/>
        <polygon points="19.405,18.226 19.017,20.515 19.21,26.63 20.145,21.948" fill="#E27525" stroke="#E27525" strokeWidth="0.25" strokeLinecap="round" strokeLinejoin="round"/>
        <polygon points="20.145,21.948 19.21,26.63 19.878,27.0 23.099,25.191 23.98,20.828" fill="#F5841F" stroke="#F5841F" strokeWidth="0.25" strokeLinecap="round" strokeLinejoin="round"/>
        <polygon points="11.042,20.828 11.912,25.191 15.122,27.0 15.79,26.63 14.866,21.948" fill="#F5841F" stroke="#F5841F" strokeWidth="0.25" strokeLinecap="round" strokeLinejoin="round"/>
        <polygon points="20.21,31.191 20.253,30.204 19.9,29.903 15.1,29.903 14.759,30.204 14.79,31.191 10.536,29.202 11.986,30.393 15.057,32.5 19.943,32.5 23.025,30.393 24.452,29.202" fill="#C0AC9D" stroke="#C0AC9D" strokeWidth="0.25" strokeLinecap="round" strokeLinejoin="round"/>
        <polygon points="19.878,27.0 19.21,26.63 15.79,26.63 15.122,27.0 14.759,30.204 15.1,29.903 19.9,29.903 20.253,30.204" fill="#161616" stroke="#161616" strokeWidth="0.25" strokeLinecap="round" strokeLinejoin="round"/>
        <polygon points="33.517,10.84 34.667,5.357 32.958,0.5 19.878,9.878 24.894,14.677 31.999,16.725 33.571,14.9 32.894,14.417 33.948,13.46 33.131,12.82 34.184,12.028" fill="#763E1A" stroke="#763E1A" strokeWidth="0.25" strokeLinecap="round" strokeLinejoin="round"/>
        <polygon points="0.333,5.357 1.483,10.84 0.816,12.028 1.869,12.82 1.052,13.46 2.106,14.417 1.429,14.9 3.001,16.725 10.106,14.677 15.122,9.878 2.042,0.5" fill="#763E1A" stroke="#763E1A" strokeWidth="0.25" strokeLinecap="round" strokeLinejoin="round"/>
        <polygon points="31.999,16.725 24.894,14.677 27.022,17.882 23.099,25.191 28.179,23.507 34.333,23.624" fill="#F5841F" stroke="#F5841F" strokeWidth="0.25" strokeLinecap="round" strokeLinejoin="round"/>
        <polygon points="10.106,14.677 3.001,16.725 0.679,23.624 6.82,23.507 11.912,25.191 7.978,17.882" fill="#F5841F" stroke="#F5841F" strokeWidth="0.25" strokeLinecap="round" strokeLinejoin="round"/>
        <polygon points="19.405,18.226 19.878,9.878 21.756,4.354 13.244,4.354 15.122,9.878 15.595,18.226 15.779,20.537 15.79,26.63 19.21,26.63 19.221,20.537" fill="#F5841F" stroke="#F5841F" strokeWidth="0.25" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
  },
  {
    name: "Coinbase Wallet",
    color: "#0052FF",
    icon: (
      // Coinbase: blue circle, white rounded square cutout, inner blue square
      <svg viewBox="0 0 24 24" className="h-6 w-6" fill="none">
        <circle cx="12" cy="12" r="11" fill="#0052FF"/>
        <rect x="6.5" y="6.5" width="11" height="11" rx="3" fill="white"/>
        <rect x="9.5" y="9.5" width="5" height="5" rx="1" fill="#0052FF"/>
      </svg>
    ),
  },
  {
    name: "Trust Wallet",
    color: "#3375BB",
    icon: (
      // Trust Wallet: blue shield with white shield inner + checkmark
      <svg viewBox="0 0 24 24" fill="none" className="h-6 w-6">
        <path d="M12 2L3 6v6c0 5.25 3.9 10.15 9 11.35C17.1 22.15 21 17.25 21 12V6L12 2z" fill="#3375BB"/>
        <path d="M12 4.5L5 8v4c0 4.1 3.05 7.9 7 8.88C15.95 19.9 19 16.1 19 12V8L12 4.5z" fill="#1A56DB"/>
        <path d="M9.5 12.5l2 2 4-4.5" stroke="white" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
  },
  {
    name: "Ledger",
    color: "#CCCCCC",
    icon: (
      // Ledger: accurate L-shaped bracket mark
      <svg viewBox="0 0 24 24" fill="none" className="h-6 w-6">
        <rect width="24" height="24" rx="5" fill="#141414"/>
        <path d="M5 5h6v2H7v10H5V5zm14 0v12h-6v-2h4V5h2zM5 17h9v2H5v-2z" fill="white"/>
      </svg>
    ),
  },
  {
    name: "Trezor",
    color: "#1DB954",
    icon: (
      // Trezor: green padlock shape on dark bg
      <svg viewBox="0 0 24 24" fill="none" className="h-6 w-6">
        <rect width="24" height="24" rx="5" fill="#0F0F0F"/>
        <path d="M12 3C9.79 3 8 4.79 8 7v1.5H7a1 1 0 00-1 1V19a1 1 0 001 1h10a1 1 0 001-1V9.5a1 1 0 00-1-1h-1V7c0-2.21-1.79-4-4-4zm0 1.5c1.38 0 2.5 1.12 2.5 2.5V8.5h-5V7c0-1.38 1.12-2.5 2.5-2.5zm0 8a1.5 1.5 0 110 3 1.5 1.5 0 010-3z" fill="#1DB954"/>
      </svg>
    ),
  },
  {
    name: "Phantom",
    color: "#AB9FF2",
    icon: (
      // Phantom: purple rounded square, white ghost/P shape
      <svg viewBox="0 0 40 40" fill="none" className="h-6 w-6">
        <rect width="40" height="40" rx="10" fill="#551BF9"/>
        <path d="M34 19.5C34 12.044 28.18 6 21 6S8 12.044 8 19.5c0 2.628.76 5.08 2.076 7.15H11.5c-.78-1.56-1.22-3.28-1.22-5.1C10.28 14.26 15.12 9.2 21 9.2S31.72 14.26 31.72 21.55c0 3.6-1.62 6.84-4.18 9.1H18.4c-1.38 0-2.5-1.1-2.5-2.45v-3.63h-2.7v4.02C13.2 31.05 15.63 33 18.4 33h13.3C33.18 30.6 34 27.1 34 23.45v-3.95z" fill="white"/>
        <circle cx="18" cy="20" r="2.5" fill="#551BF9"/>
        <circle cx="25" cy="20" r="2.5" fill="#551BF9"/>
      </svg>
    ),
  },
  {
    name: "Rainbow",
    color: "#FF6B6B",
    icon: (
      // Rainbow: white concentric arcs on gradient background
      <svg viewBox="0 0 40 40" fill="none" className="h-6 w-6">
        <defs>
          <linearGradient id="rainbow-bg" x1="0" y1="0" x2="40" y2="40" gradientUnits="userSpaceOnUse">
            <stop stopColor="#FF6B6B"/>
            <stop offset="0.5" stopColor="#FF8E53"/>
            <stop offset="1" stopColor="#FFC371"/>
          </linearGradient>
        </defs>
        <rect width="40" height="40" rx="10" fill="url(#rainbow-bg)"/>
        <path d="M8 28c0-6.627 5.373-12 12-12s12 5.373 12 12" stroke="white" strokeWidth="3.5" strokeLinecap="round"/>
        <path d="M12 28c0-4.418 3.582-8 8-8s8 3.582 8 8" stroke="white" strokeWidth="3.5" strokeLinecap="round" opacity="0.7"/>
        <path d="M16 28c0-2.21 1.79-4 4-4s4 1.79 4 4" stroke="white" strokeWidth="3.5" strokeLinecap="round" opacity="0.4"/>
      </svg>
    ),
  },
  {
    name: "Exodus",
    color: "#8B5CF6",
    icon: (
      // Exodus: dark bg, stylised X made from two crossing arrow-shapes
      <svg viewBox="0 0 40 40" fill="none" className="h-6 w-6">
        <rect width="40" height="40" rx="10" fill="#0D0D1A"/>
        <path d="M10 12h20l-7 8 7 8H10l7-8-7-8z" fill="#8B5CF6"/>
        <path d="M10 12h12v3H14l6 5-6 5h8v3H10l7-8-7-8z" fill="#4C1D95"/>
      </svg>
    ),
  },
  {
    name: "Atomic Wallet",
    color: "#2DBEC8",
    icon: (
      // Atomic: dark bg, atom orbital lines with nucleus dot
      <svg viewBox="0 0 40 40" fill="none" className="h-6 w-6">
        <rect width="40" height="40" rx="10" fill="#0D1117"/>
        <ellipse cx="20" cy="20" rx="13" ry="5.5" stroke="#2DBEC8" strokeWidth="1.8"/>
        <ellipse cx="20" cy="20" rx="13" ry="5.5" stroke="#2DBEC8" strokeWidth="1.8" transform="rotate(60 20 20)"/>
        <ellipse cx="20" cy="20" rx="13" ry="5.5" stroke="#2DBEC8" strokeWidth="1.8" transform="rotate(120 20 20)"/>
        <circle cx="20" cy="20" r="3" fill="#2DBEC8"/>
      </svg>
    ),
  },
  {
    name: "Electrum",
    color: "#4AB2F1",
    icon: (
      // Electrum: lightning bolt on dark bg — its classic mark
      <svg viewBox="0 0 40 40" fill="none" className="h-6 w-6">
        <rect width="40" height="40" rx="10" fill="#0D1117"/>
        <path d="M23 6L11 22h9l-3 12L33 18h-9l3-12z" fill="#4AB2F1"/>
      </svg>
    ),
  },
  {
    name: "Rabby Wallet",
    color: "#7084FF",
    icon: (
      // Rabby: purple bg, simplified rabbit face — signature brand shape
      <svg viewBox="0 0 40 40" fill="none" className="h-6 w-6">
        <rect width="40" height="40" rx="10" fill="#7084FF"/>
        {/* ears */}
        <rect x="10" y="6" width="6" height="12" rx="3" fill="white"/>
        <rect x="24" y="6" width="6" height="12" rx="3" fill="white"/>
        <rect x="11.5" y="7" width="3" height="8" rx="1.5" fill="#FFB3C6"/>
        <rect x="25.5" y="7" width="3" height="8" rx="1.5" fill="#FFB3C6"/>
        {/* head */}
        <ellipse cx="20" cy="24" rx="11" ry="10" fill="white"/>
        {/* eyes */}
        <circle cx="16" cy="22" r="2" fill="#7084FF"/>
        <circle cx="24" cy="22" r="2" fill="#7084FF"/>
        {/* nose */}
        <ellipse cx="20" cy="26.5" rx="2.5" ry="1.5" fill="#FFB3C6"/>
      </svg>
    ),
  },
  {
    name: "Jupiter",
    color: "#C7F284",
    icon: (
      // Jupiter DEX: dark bg, J-shaped swap arrows — brand mark
      <svg viewBox="0 0 40 40" fill="none" className="h-6 w-6">
        <rect width="40" height="40" rx="10" fill="#1B1B2E"/>
        {/* swap arrows — Jupiter's signature icon */}
        <path d="M14 12h16l-4-4M26 28H10l4 4" stroke="#C7F284" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M14 12v8a6 6 0 006 6" stroke="#C7F284" strokeWidth="2.5" strokeLinecap="round"/>
        <path d="M26 28v-8a6 6 0 00-6-6" stroke="#C7F284" strokeWidth="2.5" strokeLinecap="round"/>
      </svg>
    ),
  },
  {
    name: "Bitget Wallet",
    color: "#00F0FF",
    icon: (
      // Bitget: dark bg, stylised BG / shield mark in cyan
      <svg viewBox="0 0 40 40" fill="none" className="h-6 w-6">
        <rect width="40" height="40" rx="10" fill="#0A0A1A"/>
        <path d="M20 5L8 11v10c0 7.18 5.17 13.87 12 15.47C27.83 34.87 33 28.18 33 21V11L20 5z" fill="#00F0FF" opacity="0.15"/>
        <path d="M20 8L10 13.2V21c0 5.52 3.97 10.67 10 12.13C26.03 31.67 30 26.52 30 21v-7.8L20 8z" stroke="#00F0FF" strokeWidth="1.5" fill="none"/>
        <path d="M15 19h5.5a2.5 2.5 0 000-5H15v10h6a2.5 2.5 0 000-5H15" stroke="#00F0FF" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
  },
]

export function WalletsMarquee() {
  return (
    <section className="border-y border-glass-border bg-secondary/30 py-12">
      <div className="mx-auto max-w-7xl px-6">
        <p className="mb-8 text-center text-xs font-semibold tracking-widest text-muted-foreground uppercase">
          Wallets We Support
        </p>
      </div>

      {/* Marquee */}
      <div className="relative overflow-hidden">
        {/* Fade edges */}
        <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-24 bg-gradient-to-r from-background to-transparent" />
        <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-24 bg-gradient-to-l from-background to-transparent" />

        <div
          className="flex w-max gap-12"
          style={{ animation: "marquee 35s linear infinite" }}
        >
          {[...wallets, ...wallets].map((wallet, i) => (
            <div
              key={`${wallet.name}-${i}`}
              className="flex items-center gap-3 opacity-50 transition-opacity hover:opacity-100"
            >
              <div
                className="flex h-9 w-9 flex-shrink-0 items-center justify-center rounded-lg border border-glass-border bg-glass"
                style={{ color: wallet.color }}
              >
                {wallet.icon}
              </div>
              <span className="whitespace-nowrap text-sm font-semibold tracking-wide text-muted-foreground">
                {wallet.name}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
