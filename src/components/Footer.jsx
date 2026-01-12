export default function Footer() {
  return (
    <footer className="backdrop-blur border-t border-white/10 mt-32">
      <div className="max-w-6xl mx-auto px-6 py-12 flex flex-col md:flex-row items-center justify-between gap-6 text-sm text-white/50">

        <p>
          © 2026 Dahliah. All rights reserved.
        </p>

        <div className="flex gap-6">
          <a
            href="https://instagram.com/dahliahlestari"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-white transition"
          >
            Instagram
          </a>

          <a
            href="mailto:hello@yourdomain.com"
            className="hover:text-white transition"
          >
            Email
          </a>
        </div>

      </div>
    </footer>
  )
}
