const Home = () => {
  return (
    <div className="min-h-screen">
      <header className="flex justify-center">
        <h1 className="text-4xl font-bold tracking-wider uppercase mt-12">
          Muhammad Ihsan
        </h1>
      </header>

      <main className="text-center mt-6">
        <p className="text-xl font-medium">
          Someone who wants everything.
        </p>
        <p className="mt-4">
          Technophile, IT-interested, ordinary guy. Nothing special about me. Nothing, until you know me.
        </p>
        <div className="mt-6 space-x-4">
          <a href="https://blog.isan.eu.org/" className="underline hover:text-blue-500">blog</a>
          <a href="links" className="underline hover:text-blue-500">connect</a>
          <a href="mailto:me@isan.eu.org" className="underline hover:text-blue-500">me@isan.eu.org</a>
        </div>
      </main>

      <footer className="text-center mt-12">
        <p>©219-2024</p>
      </footer>
    </div>
  );
};

export default Home;