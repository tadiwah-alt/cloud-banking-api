// Big Five wax-seal crests. Each icon is a double-ring seal containing a
// simplified geometric silhouette of the animal. Used as nav icons and as
// large watermarks on page headers so the same mark carries meaning
// consistently across the app.

function Seal({ children, size = 28, className = "", ...rest }) {
  return (
    <svg
      viewBox="0 0 100 100"
      width={size}
      height={size}
      className={className}
      fill="none"
      {...rest}
    >
      <circle cx="50" cy="50" r="47" stroke="currentColor" strokeWidth="2" opacity="0.9" />
      <circle cx="50" cy="50" r="40" stroke="currentColor" strokeWidth="1" opacity="0.5" />
      {children}
    </svg>
  );
}

// Lion — Overview. Radiating mane around a simple face.
export function LionCrest(props) {
  return (
    <Seal {...props}>
      <g stroke="currentColor" strokeWidth="2" strokeLinecap="round">
        {Array.from({ length: 16 }).map((_, i) => {
          const angle = (i / 16) * Math.PI * 2;
          const x1 = 50 + Math.cos(angle) * 22;
          const y1 = 50 + Math.sin(angle) * 22;
          const x2 = 50 + Math.cos(angle) * 32;
          const y2 = 50 + Math.sin(angle) * 32;
          return <line key={i} x1={x1} y1={y1} x2={x2} y2={y2} />;
        })}
      </g>
      <circle cx="50" cy="50" r="16" fill="currentColor" opacity="0.15" stroke="currentColor" strokeWidth="2" />
      <circle cx="44" cy="47" r="2" fill="currentColor" />
      <circle cx="56" cy="47" r="2" fill="currentColor" />
      <path d="M47 55 Q50 58 53 55" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" />
    </Seal>
  );
}

// Elephant — Transfer. Head profile with trunk and ear.
export function ElephantCrest(props) {
  return (
    <Seal {...props}>
      <path
        d="M38 35 Q30 35 28 44 Q26 53 34 58 L36 58 Q33 52 35 46"
        stroke="currentColor"
        strokeWidth="2"
        fill="none"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M38 35 Q58 30 66 42 Q70 50 64 60 Q60 66 52 68 Q44 68 40 63 Q45 65 51 63 Q45 62 44 55 L44 46 Q44 38 38 35 Z"
        stroke="currentColor"
        strokeWidth="2"
        fill="currentColor"
        fillOpacity="0.12"
        strokeLinejoin="round"
      />
      <circle cx="55" cy="42" r="1.8" fill="currentColor" />
    </Seal>
  );
}

// Rhino — Deposit. Head profile with a prominent horn (the vault guard).
export function RhinoCrest(props) {
  return (
    <Seal {...props}>
      <path
        d="M30 62 Q28 50 36 44 L40 36 Q42 32 46 33 L44 40 L52 34 Q56 32 58 36 Q54 38 52 42 Q62 40 68 48 Q72 54 68 60 Q64 66 56 66 L34 66 Q30 65 30 62 Z"
        stroke="currentColor"
        strokeWidth="2"
        fill="currentColor"
        fillOpacity="0.12"
        strokeLinejoin="round"
        strokeLinecap="round"
      />
      <circle cx="60" cy="50" r="1.8" fill="currentColor" />
    </Seal>
  );
}

// Buffalo — Withdraw. Head with sweeping curved horns.
export function BuffaloCrest(props) {
  return (
    <Seal {...props}>
      <path
        d="M50 38 Q34 32 26 40 Q22 45 26 48 Q32 46 38 42"
        stroke="currentColor"
        strokeWidth="2"
        fill="none"
        strokeLinecap="round"
      />
      <path
        d="M50 38 Q66 32 74 40 Q78 45 74 48 Q68 46 62 42"
        stroke="currentColor"
        strokeWidth="2"
        fill="none"
        strokeLinecap="round"
      />
      <path
        d="M38 42 Q50 36 62 42 Q66 52 60 60 Q55 66 50 66 Q45 66 40 60 Q34 52 38 42 Z"
        stroke="currentColor"
        strokeWidth="2"
        fill="currentColor"
        fillOpacity="0.12"
        strokeLinejoin="round"
      />
    </Seal>
  );
}

// Leopard — Transactions. Face silhouette with a spotted trail pattern.
export function LeopardCrest(props) {
  return (
    <Seal {...props}>
      <path
        d="M50 32 Q64 32 68 45 Q71 55 64 62 Q57 68 50 68 Q43 68 36 62 Q29 55 32 45 Q36 32 50 32 Z"
        stroke="currentColor"
        strokeWidth="2"
        fill="currentColor"
        fillOpacity="0.1"
        strokeLinejoin="round"
      />
      <path d="M40 33 L36 26 M60 33 L64 26" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
      {[
        [43, 44],
        [57, 44],
        [50, 50],
        [40, 55],
        [60, 55],
      ].map(([cx, cy], i) => (
        <circle key={i} cx={cx} cy={cy} r="2.2" fill="currentColor" opacity="0.8" />
      ))}
    </Seal>
  );
}