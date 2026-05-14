import { createFileRoute } from "@tanstack/react-router";
import { ShieldCheck, Headphones, Zap } from "lucide-react";
import netflixPrivate from "@/assets/netflix-private.jpg";
import netflixShared from "@/assets/netflix-shared.jpg";
import shahidVip from "@/assets/shahid-vip.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "سهرتك علينا — اشتراكات نتفلكس وشاهد VIP" },
      { name: "description", content: "اختر باقتك من اشتراكات نتفلكس وشاهد VIP بأسعار مميزة، ضمان كامل واستلام فوري." },
    ],
  }),
  component: Index,
});

type Plan = {
  id: string;
  title: string;
  image: string;
  features: string;
  price: string;
  oldPrice?: string;
  href: string;
  accent: "netflix" | "shahid";
};

const plans: Plan[] = [
  {
    id: "netflix-private",
    title: "👑 اشتراك نتفلكس - ملف خاص",
    image: netflixPrivate,
    features: "ضمان ذهبي | جودة 4K | استلام فوري",
    price: "١٧.٩٩ ريال",
    oldPrice: "٢٤.٩٩ ريال",
    href: "https://rushly.twsaa.com/f6rx4fn/%D8%A7%D8%B4%D8%AA%D8%B1%D8%A7%D9%83%20%D9%86%D8%AA%D9%81%D9%84%D9%83%D8%B3%20%D9%85%D9%84%D9%81%20%D8%AE%D8%A7%D8%B5",
    accent: "netflix",
  },
  {
    id: "netflix-shared",
    title: "🎬 اشتراك نتفلكس - ملف مشترك",
    image: netflixShared,
    features: "تجربة بلا حدود | ضمان كامل | تفعيل فوري",
    price: "١١.٩٩ ريال",
    oldPrice: "١٨.٩٩ ريال",
    href: "https://rushly.twsaa.com/editovi/%D8%A7%D8%B4%D8%AA%D8%B1%D8%A7%D9%83%20%D9%86%D8%AA%D9%81%D9%84%D9%83%D8%B3%20%D9%85%D9%84%D9%81%20%D9%85%D8%B4%D8%AA%D8%B1%D9%83",
    accent: "netflix",
  },
  {
    id: "shahid-vip",
    title: "⚽ اشتراك شاهد VIP لمدة شهر",
    image: shahidVip,
    features: "حساب على إيميلك | مسلسلات ورياضة",
    price: "٢٩.٩٩ ريال",
    href: "https://rushly.twsaa.com/erwfb7m/%D8%A7%D8%B4%D8%AA%D8%B1%D8%A7%D9%83%20%D8%B4%D8%A7%D9%87%D8%AF%20vip%20%D9%84%D9%85%D8%AF%D8%A9%20%D8%B4%D9%87%D8%B1%20%D8%AD%D8%B3%D8%A7%D8%A8%20%D9%83%D8%A7%D9%85%D9%84%20%D8%B9%D9%84%D9%89%20%D8%A7%D9%8A%D9%85%D9%8A%D9%84%D9%83",
    accent: "shahid",
  },
];

function PlanCard({ plan }: { plan: Plan }) {
  const isNetflix = plan.accent === "netflix";
  const glow = isNetflix
    ? "border-[oklch(0.6_0.25_25/0.35)] shadow-[0_0_24px_-6px_oklch(0.62_0.26_25/0.55),inset_0_1px_0_0_rgba(255,255,255,0.05)]"
    : "border-[oklch(0.65_0.22_155/0.35)] shadow-[0_0_24px_-6px_oklch(0.68_0.22_155/0.55),inset_0_1px_0_0_rgba(255,255,255,0.05)]";
  const priceColor = isNetflix ? "text-[oklch(0.78_0.22_25)]" : "text-[oklch(0.8_0.2_155)]";

  return (
    <a
      href={plan.href}
      target="_blank"
      rel="noopener noreferrer"
      className={`group flex items-center gap-2.5 rounded-2xl border bg-black/40 p-2 backdrop-blur-md transition-all duration-200 active:scale-[0.98] hover:bg-black/55 ${glow}`}
      onClick={() => {
        if (typeof window !== 'undefined' && (window as any).ttq) {
          (window as any).ttq.track('InitiateCheckout');
        }
      }}
    >
      <div className="flex-1 min-w-0">
        <h2 className="truncate text-[13px] font-extrabold leading-tight text-white">{plan.title}</h2>
        <p className="mt-0.5 truncate text-[10px] text-white/55">{plan.features}</p>
        <div className="mt-0.5 flex items-baseline gap-1.5">
          <span className={`text-[15px] font-black ${priceColor}`}>{plan.price}</span>
          {plan.oldPrice && (
            <span className="text-[10px] font-semibold text-white/35 line-through">{plan.oldPrice}</span>
          )}
        </div>
      </div>
      <div className="relative h-14 w-14 shrink-0 overflow-hidden rounded-xl ring-1 ring-white/10">
        <img
          src={plan.image}
          alt={plan.title}
          className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-110"
        />
      </div>
    </a>
  );
}

function Index() {
  return (
    <main className="mx-auto flex min-h-screen w-full max-w-md flex-col px-4 py-3 sm:max-w-lg sm:py-5">
      <header className="mb-3 text-center">
        <h1 className="text-sm font-black leading-snug text-white sm:text-lg">
          سهرتك الليلة علينا! اختر باقتك واستلم فوراً 🍿🎬
        </h1>
        <p className="mt-1 text-[11px] text-white/70 sm:text-sm">
          أفضل الاشتراكات بأعلى ضمان ذهبي! ✨🏆
        </p>
      </header>

      <section className="space-y-2">
        {plans.map((p) => (
          <PlanCard key={p.id} plan={p} />
        ))}
      </section>

      <footer className="mt-3">
        <div className="grid grid-cols-3 gap-2 rounded-xl border border-white/10 bg-black/40 p-1.5 backdrop-blur-md">
          <div className="flex flex-col items-center gap-0.5 text-center">
            <ShieldCheck className="h-3.5 w-3.5 text-[oklch(0.7_0.22_155)]" />
            <span className="text-[9px] font-semibold text-white/80">دفع آمن</span>
          </div>
          <div className="flex flex-col items-center gap-0.5 text-center">
            <Headphones className="h-3.5 w-3.5 text-[oklch(0.82_0.16_85)]" />
            <span className="text-[9px] font-semibold text-white/80">دعم 24/7</span>
          </div>
          <div className="flex flex-col items-center gap-0.5 text-center">
            <Zap className="h-3.5 w-3.5 text-[oklch(0.65_0.28_25)]" />
            <span className="text-[9px] font-semibold text-white/80">تفعيل فوري</span>
          </div>
        </div>
        <p className="mt-2 text-center text-[9px] text-white/40">
          © {new Date().getFullYear()} جميع الحقوق محفوظة
        </p>
      </footer>
    </main>
  );
}
