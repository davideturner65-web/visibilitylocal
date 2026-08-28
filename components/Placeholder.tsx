/**
 * A deliberately ugly block for data that has not been filled in yet.
 *
 * The case study is built before the numbers are reconstructed, and the failure mode to avoid
 * is publishing it with plausible-looking invented figures. So placeholders are loud: red,
 * dashed, labelled DO NOT PUBLISH, and impossible to mistake for finished content at a glance.
 *
 * tools/check-placeholders.mjs fails the build check while any of these remain, so the page
 * cannot go live by accident.
 */
export default function Placeholder({
  label,
  children,
}: {
  label: string;
  children: React.ReactNode;
}) {
  return (
    <div
      data-placeholder
      className="border-2 border-dashed rounded-sm p-6 my-4"
      style={{ borderColor: "#b91c1c", background: "rgba(185,28,28,0.04)" }}
    >
      <p className="font-sans text-xs font-bold tracking-wider uppercase mb-2" style={{ color: "#b91c1c" }}>
        Placeholder, do not publish &middot; {label}
      </p>
      <div className="font-sans text-sm text-ink-2 leading-relaxed">{children}</div>
    </div>
  );
}
