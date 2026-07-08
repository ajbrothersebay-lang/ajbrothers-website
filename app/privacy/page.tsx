export default function PrivacyPage() {
  return (
    <main className="min-h-screen bg-black text-white p-8">
      <div className="mx-auto max-w-4xl">
        <h1 className="mb-6 text-4xl font-bold text-lime-400">
          Privacy Policy
        </h1>

        <p className="mb-4">
          AJ Brothers respects your privacy. This website only collects
          information necessary to process enquiries and improve our services.
        </p>

        <h2 className="mt-8 mb-2 text-2xl font-bold text-lime-400">
          Information We Collect
        </h2>

        <ul className="list-disc pl-6 space-y-2">
          <li>Information you provide when contacting us.</li>
          <li>Basic website analytics.</li>
          <li>Information provided through eBay purchases.</li>
        </ul>

        <h2 className="mt-8 mb-2 text-2xl font-bold text-lime-400">
          Contact
        </h2>

        <p>
          Email: ajbrothersebay@gmail.com
        </p>
      </div>
    </main>
  );
}