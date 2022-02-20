import { CgSmartphoneChip } from 'react-icons/cg';

export default function Logo() {
  return (
    <div className="flex items-center">
      <div className="flex mr-5">
        <CgSmartphoneChip size={40} className="text-slate-50" />
      </div>
      <blockquote className="text-slate-50 text-4xl font-bold text-center text-slate-900 mr-10">
        <span className="px-2 before:block before:absolute before:-inset-1 before:-skew-y-6 before:bg-gradient-to-r before:from-blue-500 before:to-sky-500 relative inline-block">
          <span className="relative">ADIF</span>
        </span>
      </blockquote>
    </div>
  );
}
