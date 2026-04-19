import Image from "next/image";

export default function LossCard({
  title,
  value,
  percent,
  color,
  icon,
  iconSize = "w-5 h-5",
  className = "",
}: any) {
  return (
    <div className={`bg-white rounded-2xl shadow p-6 text-left ${className}`}>
      <div className="flex justify-between items-center">
        <Image src={icon} alt="" width={0} height={0} className={iconSize} />
        <p className="text-xs text-gray-400">CATEGORY</p>
      </div>

      <h3 className="font-semibold text-gray-700 mt-2">{title}</h3>

      <p className="text-2xl font-bold mt-2">
        ₹{Math.round(value).toLocaleString()}
      </p>

      <p className="text-sm text-gray-400 mt-1">{percent} of revenue</p>

      <div className="mt-4 h-2 bg-gray-100 rounded-full">
        <div className={`h-2 rounded-full ${color} w-[60%]`} />
      </div>
    </div>
  );
}
