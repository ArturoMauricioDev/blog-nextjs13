const ContactBanner = () => {
  return (
    <div className="flex flex-col lg:flex-row lg:space-x-5 justify-between px-10 py-5 mb-10 ">
      <div>
        <h1 className="text-6xl text-[rgb(39,44,48)] font-bold">
          Hola, Soy Arturo Mauricio.
        </h1>
        <h2 className="mt-5 md:mt-0">@ArturoMauricioDev</h2>
      </div>
      <p className="mt-5 md:mt-2 max-w-sm text-[rgb(39,44,48)]">
        Desarrollador Full Stack | System Engineer | Web Developer | JavaScript
        | React.Js | Node | Express | PostgreSQL | Next.Js | Backend | Frontend
        | HTML/CSS | Linux System Administrator | Educator | +1000 Personas
        Formadas
      </p>
    </div>
  );
};

export default ContactBanner;
