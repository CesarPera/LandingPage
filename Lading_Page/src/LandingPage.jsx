import { useEffect } from "react";
import logo from "./assets/logo.png";
import portada from "./assets/portada.jpg";
import './App.css'

function LandingPage() {
  useEffect(() => {
    const title = "Apoya nuevos programadores🔥 | Cesar Studio Web💻 | ";
    let position = 0;

    const timeout = setTimeout(() => {
      const interval = setInterval(() => {
        document.title =
          title.slice(position) + title.slice(0, position);
        position = (position + 1) % title.length;
      }, 150);
      return () => clearInterval(interval);
    }, 5000);

    return () => clearTimeout(timeout);
  }, []);

  return (
    <>
      <div>
        {/* CABEZA */}
        <header className="fixed top-0 left-0 z-50 w-full flex justify-center">
          <div className="w-[60%] bg-white shadow-xl/30 flex items-center justify-center gap-4 py-3 rounded-b-2xl">
            <img
              src={logo}
              alt="Cesar Studio Web"
              className="w-12 h-12"
            />
            <h1 className="text-2xl font-bold text-gray-900 leading-none">
              Cesar Studio Web
            </h1>
          </div>
        </header>

        {/* PORTADA */}
        <section className="w-full h-screen bg-blue-600">
          <div className="grid grid-cols-1 md:grid-cols-10 h-full text-center">

            <div className="md:col-span-4 flex flex-col justify-center px-5 md:px-10 text-white">
              <h2 className="text-4xl md:text-6xl font-extrabold leading-tight">
                Apoya a nuevos programadores
              </h2>
              <p className="mt-4 text-xl md:text-2xl font-semibold">
                sin experiencia y obtén
              </p>
              <div className="mt-6 text-7xl md:text-8xl font-extrabold">
                50%
              </div>
              <p className="text-3xl font-bold mt-2">
                DESCUENTO
              </p>
            </div>

            <div className="md:col-span-6 relative hidden md:block h-full">
              <div className="absolute left-0 top-0 h-full w-32 bg-blue-600 rounded-r-[120%] z-10" />
              <img
                src={portada}
                alt="Imagen portada"
                className="h-full w-full object-cover"
              />
            </div>

          </div>
        </section>

        {/* FORMULARIO */}
        <div className="w-full overflow-hidden bg-blue">
          <iframe
            src="https://docs.google.com/forms/d/e/1FAIpQLSe8MSaKmtt7g39GFaRG0IcZBfon7A1V_UZWB4iMPUhfYbeQwQ/viewform?embedded=true"
            className="w-full h-[1294px] border-0"
            title="Formulario de descuento"
          >
            Cargando…
          </iframe>
        </div>

        {/* FOOTER */}
        <footer className="text-center py-6 text-2x1 text-black font-bold bg-blue-500">
          © {new Date().getFullYear()} Cesar Studio Web - Todos los derechos reservados.
        </footer>
      </div>
    </>
  )
}

export default LandingPage;