export default function Home() {
  return (
    <main className="min-h-screen bg-black text-white">
      <section className="max-w-6xl mx-auto px-6 py-24">

        <div className="text-center">

          <span className="bg-white/10 px-4 py-2 rounded-full text-sm">
            Beta Launch
          </span>

          <h1 className="text-6xl font-bold mt-8">
            Turn One Piece of Content
            <br />
            Into 20+ Assets Automatically
          </h1>

          <p className="mt-6 text-xl text-gray-400 max-w-2xl mx-auto">
            Repurpose blogs, podcasts, videos and newsletters into
            LinkedIn posts, X threads, Instagram captions and more.
          </p>

        </div>

        <div className="mt-16 rounded-2xl overflow-hidden border border-white/10">

          <iframe
            src="https://tally.so/embed/KYG08M"
            width="100%"
            height="700"
            frameBorder="0"
            marginHeight={0}
            marginWidth={0}
            title="Tally Form"
          />

        </div>

      </section>
    </main>
  );
}