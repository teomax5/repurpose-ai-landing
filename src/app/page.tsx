export default function Home() {
  return (
    <main className="min-h-screen bg-white">
      {/* Hero */}
      <section className="max-w-6xl mx-auto px-6 py-24 text-center">

        <div className="inline-block px-4 py-2 rounded-full border">
          🚀 Early Access Open
        </div>

        <h1 className="text-5xl md:text-7xl font-bold mt-8">
          Turn One Blog Into
          <span className="block text-black-600">
            20+ Pieces of Content
          </span>
        </h1>

        <p className="mt-6 text-xl text-gray-600 max-w-2xl mx-auto">
          Upload a blog and instantly generate
          LinkedIn posts, X threads,
          newsletters and social content.
        </p>

        <a
          href="#waitlist"
          className="inline-block mt-8 bg-black text-white px-8 py-4 rounded-xl"
        >
          Join Waitlist
        </a>

      </section>

      {/* Features */}

      <section className="max-w-6xl mx-auto px-6 py-16">

        <h2 className="text-3xl font-bold text-center">
          What You'll Get
        </h2>

        <div className="grid md:grid-cols-3 gap-8 mt-12">

          <div className="border p-6 rounded-xl">
            <h3 className="font-bold text-xl">
              LinkedIn Posts
            </h3>
            <p className="mt-3 text-gray-600">
              Generate engaging professional posts.
            </p>
          </div>

          <div className="border p-6 rounded-xl">
            <h3 className="font-bold text-xl">
              X Threads
            </h3>
            <p className="mt-3 text-gray-600">
              Turn long-form content into threads.
            </p>
          </div>

          <div className="border p-6 rounded-xl">
            <h3 className="font-bold text-xl">
              Newsletters
            </h3>
            <p className="mt-3 text-gray-600">
              Repurpose content for email audiences.
            </p>
          </div>

        </div>

      </section>

      {/* How it works */}

      <section className="bg-gray-50 py-16">

        <div className="max-w-5xl mx-auto px-6">

          <h2 className="text-3xl font-bold text-center">
            How It Works
          </h2>

          <div className="grid md:grid-cols-3 gap-8 mt-12">

            <div>
              <h3 className="font-bold">1. Upload Blog</h3>
              <p className="text-gray-600 mt-2">
                Paste your article URL or content.
              </p>
            </div>

            <div>
              <h3 className="font-bold">2. AI Repurposes</h3>
              <p className="text-gray-600 mt-2">
                Generate social content automatically.
              </p>
            </div>

            <div>
              <h3 className="font-bold">3. Publish Faster</h3>
              <p className="text-gray-600 mt-2">
                Save hours every week.
              </p>
            </div>

          </div>

        </div>

      </section>

      {/* FAQ */}

      <section className="max-w-4xl mx-auto px-6 py-16">

        <h2 className="text-3xl font-bold text-center">
          FAQ
        </h2>

        <div className="mt-10 space-y-6">

          <div>
            <h3 className="font-bold">
              What is this?
            </h3>
            <p className="text-gray-600">
              An AI tool that converts blogs into
              multiple content formats.
            </p>
          </div>

          <div>
            <h3 className="font-bold">
              When will it launch?
            </h3>
            <p className="text-gray-600">
              Early beta users will get access first.
            </p>
          </div>

          <div>
            <h3 className="font-bold">
              Is it free?
            </h3>
            <p className="text-gray-600">
              Early testers may receive discounted access.
            </p>
          </div>

        </div>

      </section>

      {/* Tally */}

      <section
        id="waitlist"
        className="max-w-5xl mx-auto px-6 py-16"
      >

        <h2 className="text-3xl font-bold text-center mb-8">
          Join the Waitlist
        </h2>

        <iframe
          src="https://tally.so/embed/KYG08M"
          width="100%"
          height="600"
          frameBorder="0"
          title="Waitlist Form"
        />

      </section>

    </main>
  );
}