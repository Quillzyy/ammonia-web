import Link from "next/link";

export default function HomepageDownloadCSV() {
  return (
    <Link href={"/api/download"}>
      <button className="w-full sm:w-auto bg-base-mauve hover:bg-base-pink text-base-base px-6 py-2 rounded-lg transition-all duration-300 transform hover:scale-105 border-2 border-base-pink hover:border-base-mauve shadow-[0_0_10px_rgba(245,194,231,0.3)] hover:shadow-[0_0_20px_rgba(203,166,247,0.5)] flex items-center justify-center gap-2">
        Download CSV
      </button>
    </Link>
  );
}
