import { siteConfig } from "@/content/site";

export default function Footer() {
  return (
    <footer className="border-t border-slate-200 bg-white">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 px-6 py-8 text-sm text-slate-500 md:flex-row">
        <span className="font-semibold text-brand-900">{siteConfig.name}</span>
        <span>
          © {new Date().getFullYear()} {siteConfig.name}. Todos los derechos
          reservados.
        </span>
      </div>
    </footer>
  );
}
