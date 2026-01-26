import { siteConfig } from "@/content/site";

export default function Footer() {
  return (
    <footer className="border-t border-brand/10 bg-base">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 px-6 py-8 text-sm text-brand/60 md:flex-row">
        <span className="font-semibold text-brand">{siteConfig.name}</span>
        <span>
          © {new Date().getFullYear()} {siteConfig.name}. Todos los derechos
          reservados.
        </span>
      </div>
    </footer>
  );
}
