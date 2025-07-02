'use client';

export default function TrustedBy() {
  const brands = ['TelemedX', 'eVerify', 'MedSecure', 'InsurSure', 'BioLock'];

  return (
    <section className="py-16 bg-white text-center px-4">
      <h2 className="text-lg text-gray-500 uppercase mb-8 tracking-widest">
        Trusted by Innovators in AI & Security
      </h2>

      <div className="flex flex-wrap justify-center items-center gap-8 max-w-5xl mx-auto">
        {brands.map((brand, idx) => (
          <div
            key={idx}
            className="text-gray-400 text-lg font-semibold hover:text-primary transition"
          >
            {brand}
          </div>
        ))}
      </div>
    </section>
  );
}
