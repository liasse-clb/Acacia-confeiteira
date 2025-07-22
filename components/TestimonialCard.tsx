import { BsStarFill } from "react-icons/bs";
import { FaUserCircle } from "react-icons/fa";

interface TestimonialProps {
  name: string;
  comment: string;
}

export default function TestimonialCard({ name, comment }: TestimonialProps) {
  return (
    <div className="bg-white rounded-xl shadow-md p-6 max-w-sm">
      <div className="flex items-center gap-3 mb-4">
        <FaUserCircle className="text-3xl text-[#C79f30]" />
        <p className="font-semibold text-[#C79f30]">{name}</p>
      </div>

      <div className="flex gap-1 text-yellow-400 mb-2">
        {[...Array(5)].map((_, i) => (
          <BsStarFill key={i} />
        ))}
      </div>
      <p className="font-inter text-gray-700 italic">&quot;{comment}&quot;</p>
    </div>
  );
}
