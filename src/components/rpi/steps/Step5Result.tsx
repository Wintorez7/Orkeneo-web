import ProfitRecoverySection from "@/components/ProfitRecoverySection";
import LossCard from "../LossCard";
import TrustSection from "@/components/TrustSection";

export default function Step5Result({ data, result }: any) {
  return (
    <div className="min-h-screen bg-linear-to-br from-blue-50 via-white to-indigo-50 px-4 py-16 text-center">
      {/* HEADER */}
      <h1 className="text-3xl mt-20 md:text-5xl font-extrabold text-gray-900">
        You're losing <br />
        <span className="text-red-600">
          ₹{Math.round(result.total).toLocaleString()}/month
        </span>{" "}
        — without <br /> realizing it
      </h1>

      <p className="text-gray-600 mt-4">Here’s exactly where it’s happening</p>

      {/* TAG */}
      <div className="mt-6 inline-block bg-[#F0F3FF] font-medium text-blue-700 px-6 py-3 rounded-full text-sm">
        <span className="text-gray-500">BASED ON YOUR INPUTS</span> ₹
        {data.revenue.toLocaleString()} MONTHLY REVENUE • {data.staffPct}% STAFF
        COST• MEDIUM DEMAND VARIABILITY
      </div>

      {/* CARDS */}
      <div className="grid md:grid-cols-3 gap-6 mt-12 max-w-6xl mx-auto">
        <LossCard
          title="Food Waste"
          value={result.food}
          percent="~3%"
          color="bg-purple-500"
          icon="/images/roi-fork.png"
          iconSize="w-5 h-5"
        />

        <LossCard
          title="Staffing Inefficiency"
          value={result.staff}
          percent="~4.5%"
          color="bg-blue-500"
          icon="/images/roi-account.png"
          iconSize="w-6 h-4"
        />

        <LossCard
          title="Demand Mismatch"
          value={result.demand}
          percent="~2%"
          color="bg-green-500"
          icon="/images/roi-groth.png"
          iconSize="w-6 h-4"
        />
      </div>

      {/* RECOVERY */}
      <div className="mt-12 max-w-6xl mx-auto bg-green-50 border border-green-200 rounded-2xl p-8">
        <h2 className="text-2xl md:text-3xl font-extrabold text-green-700">
          💰 Recover ₹{Math.round(result.recoverMin).toLocaleString()}–
          {Math.round(result.recoverMax).toLocaleString()}/month <br />
          Starting in 30–60 days
        </h2>

        <p className="text-md text-green-700 mt-2 font-extrabold">
          That’s ₹{Math.round((result.recoverMin * 12) / 100000).toFixed(1)}L–
          {Math.round((result.recoverMax * 12) / 100000).toFixed(1)}L/year extra
        </p>
      </div>
      <ProfitRecoverySection />
      <TrustSection />
    </div>
  );
}
