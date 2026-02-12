export default function Footer() {
  return (
    <footer className="border-t border-[#B3E9CF] bg-[#0B5C5B]">
      <div className="mx-auto grid max-w-[83rem] grid-cols-1 gap-4 px-6 py-8 text-center text-sm text-[#FAFAFA] md:grid-cols-3 md:items-center md:text-left">
        <span className="font-semibold text-[#FAFAFA] md:justify-self-start">
          PROSIGO Consulting
        </span>
        <div className="flex flex-col items-center gap-1">
          <a
            className="underline-offset-4 hover:underline"
            href="mailto:danielaroaconsultora@gmail.com"
          >
            danielaroaconsultora@gmail.com
          </a>
          <a className="underline-offset-4 hover:underline" href="tel:+56966583494">
            +569 66583494
          </a>
        </div>
        <span className="md:justify-self-end">
          © 2026 PROSIGO Consulting. Todos los derechos reservados.
        </span>
      </div>
    </footer>
  );
}
