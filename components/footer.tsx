export default function Footer() {
  return (
    <footer className="bg-white border-t border-[#eef2f6] py-3">
      <div className="max-w-6xl mx-auto px-4 text-center">
        <p className="text-xs text-[#64748b]">
          &copy; {new Date().getFullYear()} Ronda CCTV. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
