import dashboardImg from "../assets/zap.jpeg";

const Hero: React.FC = () => {
  return (
    <section className="relative overflow-hidden pt-20 pb-32 bg-black">

      {/* Subtle Grid Background */}
      <div className="absolute inset-0 pointer-events-none">
        <div
          className="absolute inset-0 opacity-[0.04]"
          style={{
            backgroundImage:
              "linear-gradient(to right, #fff 1px, transparent 1px), linear-gradient(to bottom, #fff 1px, transparent 1px)",
            backgroundSize: "64px 64px",
          }}
        />
        <div className="absolute -top-40 left-1/2 -translate-x-1/2 h-[500px] w-[500px] rounded-full bg-indigo-500/20 blur-[160px]" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center">

        {/* LEFT CONTENT */}
        <div>

          {/* Small Label */}
          <span className="inline-flex items-center gap-2 mb-6 px-3 py-1 rounded-full border border-white/10 text-xs text-white/70">
            AI-powered job automation
          </span>

          {/* Headline */}
          <h1 className="text-4xl md:text-6xl font-semibold tracking-tight text-white leading-tight">
            Automate job discovery. <br />
            <span className="text-white/60">
              Focus on applying, not searching.
            </span>
          </h1>

          {/* Description */}
          <p className="mt-6 max-w-xl text-lg text-white/70">
            AutoApply AI reads job emails, extracts role details using AI,
            filters relevant opportunities, and delivers clean alerts instantly.
          </p>

          {/* CTA */}
          <div className="mt-10 flex items-center gap-4">
            <button className="inline-flex items-center justify-center rounded-lg bg-white px-6 py-3 text-sm font-medium text-black hover:bg-white/90 transition">
              Get started
            </button>

            <button className="inline-flex items-center justify-center rounded-lg border border-white/15 px-6 py-3 text-sm font-medium text-white/80 hover:bg-white/5 transition">
              View demo
            </button>
          </div>

          {/* Trust */}
          <p className="mt-8 text-sm text-white/50">
            Trusted by 2,000+ professionals worldwide
          </p>
        </div>

        {/* RIGHT VISUAL */}
        <div className="relative">

          {/* Browser Frame */}
          <div className="rounded-xl border border-white/10 bg-neutral-900 shadow-2xl overflow-hidden">
            <div className="flex items-center gap-2 px-4 py-2 border-b border-white/10">
              <span className="w-3 h-3 rounded-full bg-red-500/80" />
              <span className="w-3 h-3 rounded-full bg-yellow-500/80" />
              <span className="w-3 h-3 rounded-full bg-green-500/80" />
            </div>

            <img
              src={dashboardImg}
              alt="Product dashboard"
              className="w-full object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
