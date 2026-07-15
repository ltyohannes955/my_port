export default function Footer() {
  return (
    <footer className="border-t border-white/5 py-8 px-4">
      <div className="max-w-5xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
        <p className="text-muted text-sm">
          &copy; {new Date().getFullYear()} Leul Yohannes. All rights reserved.
        </p>
        <p className="text-muted text-sm">
          Built with Next.js &middot; React Bits &middot; Hugeicons
        </p>
      </div>
    </footer>
  );
}
