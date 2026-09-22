/** Original illustration: a developer seen from behind. */
export function DeveloperPortrait() {
  return (
    <svg className="developer-portrait" viewBox="0 0 360 430" fill="none" role="img" aria-label="Ilustración de un desarrollador de espaldas frente a una pantalla con código">
      <defs>
        <linearGradient id="portrait-shirt" x1="80" y1="280" x2="295" y2="350" gradientUnits="userSpaceOnUse">
          <stop stopColor="#070707" />
          <stop offset=".65" stopColor="#10100f" />
          <stop offset=".91" stopColor="#1c1512" />
          <stop offset="1" stopColor="#342019" />
        </linearGradient>
        <linearGradient id="portrait-skin" x1="153" y1="200" x2="234" y2="190" gradientUnits="userSpaceOnUse">
          <stop stopColor="#0a0a09" />
          <stop offset=".6" stopColor="#1f1b18" />
          <stop offset=".9" stopColor="#493024" />
          <stop offset="1" stopColor="#80503a" />
        </linearGradient>
        <radialGradient id="portrait-hair" cx=".4" cy=".3" r=".75">
          <stop stopColor="#151412" />
          <stop offset=".7" stopColor="#0b0b0a" />
          <stop offset="1" stopColor="#060606" />
        </radialGradient>
        <linearGradient id="portrait-rim" x1="130" y1="100" x2="245" y2="180" gradientUnits="userSpaceOnUse">
          <stop stopColor="#ff5a36" stopOpacity="0" />
          <stop offset=".55" stopColor="#ff5a36" stopOpacity=".2" />
          <stop offset="1" stopColor="#ff8450" stopOpacity=".75" />
        </linearGradient>
        <linearGradient id="portrait-fade" x2="0" y2="1">
          <stop offset=".94" stopColor="white" />
          <stop offset="1" stopColor="black" />
        </linearGradient>
        <mask id="portrait-mask"><path fill="url(#portrait-fade)" d="M0 0h360v430H0z" /></mask>
      </defs>
      <g mask="url(#portrait-mask)">
        {/* Nape and the small visible profile, turned toward the monitor. */}
        <path d="M133 150C133 123 156 101 191 103c29 2 46 22 45 51l-2 21 7 15c2 4 0 6-7 8l-2 18c-1 12-13 22-27 26l-3 29-49 6-10-42c-11-18-15-51-10-85Z" fill="url(#portrait-skin)" />
        <path d="M151 208c13 16 30 23 53 20l-2 20c-18-1-31-9-41-19" fill="#080808" opacity=".65" />
        {/* Irregular locks and a tapered hairline follow the back of the skull. */}
        <path d="m133 201-8-18-5-8-3-20-5-6 2-18-3-8 7-16-1-10 9-9 1-9 16-8 3-7 15 1 10-8 13 5 9-4 12 5 11-1 6 8 13 4 2 9 9 7-2 12 6 9-5 14 2 12-8 13-8 5-6-7-5 11-7 2-3 18-10 14-13 3-10 14-20 1-11-13-5 4Z" fill="url(#portrait-hair)" />
        <path d="M151 63c9-7 20-7 28-2m8-3c12-2 23 4 25 12m3-4c12 0 22 9 20 20m3-6c9 8 11 17 6 26m3-5c9 12 4 25-2 30m0-2c4 12-3 24-12 28" stroke="url(#portrait-rim)" strokeWidth="1.8" strokeLinecap="round" />
        <g stroke="#332820" strokeWidth=".8" strokeLinecap="round" opacity=".5">
          <path d="M126 116c-1-22 19-41 38-38m-42 54c-4-20 9-35 22-40m-12 45c-4-31 20-48 40-43m-25 27c3-24 21-39 39-31m-36-6c14-15 37-12 48-1" />
          <path d="M166 100c6-20 26-26 41-12m-29 2c13-15 30-9 38 7m-19-21c23 4 33 22 27 40m-6-27c18 14 18 33 8 45m6-25c9 10 6 29-3 39" />
          <path d="M129 149c-8-15-4-29 2-37m6 51c-11-16-7-35 2-45m7 48c-8-16-4-30 6-44m3 35c-5-15 1-36 12-42m-15 66c-6-11-3-22 2-30" />
          <path d="M176 112c13-18 26-10 30 1m-24 16c15-20 28-11 26 4m-39 14c8-20 24-25 30-13m-33 32c7-21 22-25 27-17m19-5c6 13-2 28-9 34m-26-12c3 10-1 18-6 24" />
        </g>
        {/* Ear, temple and dark glasses in partial profile. */}
        <path d="M218 169c9-8 16-3 15 7l-3 18c-2 10-11 12-14 5l-2-15c-2-7-1-12 4-15Z" fill="url(#portrait-skin)" stroke="#57382a" strokeWidth=".8" />
        <path d="M220 192c-5-8-1-19 5-17 5 2 0 8-2 9l2 7" stroke="#100f0e" strokeWidth="2.5" strokeLinecap="round" />
        <path d="m228 169 25-8 4 5-4 19-14 4-5-15-12 3" stroke="#080808" strokeWidth="3" strokeLinejoin="round" />
        <path d="m237 168 15-5" stroke="#766353" strokeWidth=".8" />
        {/* Sloping shoulders, collar and fabric folds. */}
        <path d="M149 251c-18 0-28 8-43 14l-30 14c-25 12-39 36-44 65L19 430h291l-9-83c-3-32-10-52-31-65l-46-21-20-13c-15 14-34 19-55 3Z" fill="url(#portrait-shirt)" />
        <path d="M145 250c17 13 40 17 60-3l12 12c-17 21-50 23-77 6Z" fill="#080808" />
        <path d="M145 251c15 13 41 16 60-3m-62 17c25 15 56 10 72-5" stroke="#342923" strokeWidth="1.2" />
        <path d="m218 259 45 23c20 11 28 26 32 49" stroke="#9e4b2e" strokeOpacity=".36" strokeWidth="1.5" />
        <path d="M260 287c-8 23-8 52-3 78m-7-67c-7 21-7 37-5 48m-155-54c11 23 12 48 7 83m91-86c-6 24-7 53-2 80" stroke="#30231c" strokeOpacity=".32" strokeWidth="1.6" />
        <path d="M202 290c-5 33 9 79 4 124m-69-99c6 34-7 63-4 96" stroke="#030303" strokeWidth="5" opacity=".5" />
      </g>
    </svg>
  );
}
