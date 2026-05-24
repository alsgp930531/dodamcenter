import { COUNSELING_TYPES } from '@/lib/constants';
import Button from '@/components/shared/Button';

export default function PricingTable() {
  return (
    <>
      {/* Mobile: Card Layout */}
      <div className="md:hidden space-y-4">
        {COUNSELING_TYPES.map((type) => (
          <div key={type.key} className="group/card bg-white rounded-2xl border border-beige-200 p-5 transition-all duration-300 hover:bg-dark hover:ring-2 hover:ring-accent">
            <div className="flex items-center justify-between mb-2">
              <h3 className="font-semibold text-black group-hover/card:text-white transition-colors duration-300">{type.label}</h3>
              <span className="text-sm text-black-light group-hover/card:text-white/70 transition-colors duration-300">{type.duration}</span>
            </div>
            <p className="text-sm text-black-light group-hover/card:text-white/70 transition-colors duration-300 mb-4">{type.description}</p>
            <div className="flex items-center justify-between">
              <span className="text-lg font-bold text-black group-hover/card:text-accent transition-colors duration-300">{type.price.toLocaleString()}원</span>
              <Button href="/contact" size="sm" variant="outline">신청</Button>
            </div>
          </div>
        ))}
      </div>

      {/* Desktop: Table Layout */}
      <div className="hidden md:block overflow-x-auto">
        <table className="w-full min-w-[600px]">
          <thead>
            <tr className="border-b-2 border-beige-300">
              <th className="text-left py-4 px-4 text-sm font-semibold text-black-light uppercase tracking-wider">상담 유형</th>
              <th className="text-left py-4 px-4 text-sm font-semibold text-black-light uppercase tracking-wider">설명</th>
              <th className="text-center py-4 px-4 text-sm font-semibold text-black-light uppercase tracking-wider">시간</th>
              <th className="text-right py-4 px-4 text-sm font-semibold text-black-light uppercase tracking-wider">비용</th>
              <th className="text-right py-4 px-4"></th>
            </tr>
          </thead>
          <tbody>
            {COUNSELING_TYPES.map((type) => (
              <tr key={type.key} className="group/row border-b border-beige-200 transition-all duration-300 hover:bg-dark">
                <td className="py-5 px-4 font-semibold text-black group-hover/row:text-white transition-colors duration-300 rounded-l-xl">{type.label}</td>
                <td className="py-5 px-4 text-sm text-black-light group-hover/row:text-white/70 transition-colors duration-300">{type.description}</td>
                <td className="py-5 px-4 text-sm text-center text-black-light group-hover/row:text-white/70 transition-colors duration-300">{type.duration}</td>
                <td className="py-5 px-4 text-right font-bold text-black group-hover/row:text-accent transition-colors duration-300">{type.price.toLocaleString()}원</td>
                <td className="py-5 px-4 text-right rounded-r-xl">
                  <Button href="/contact" size="sm" variant="outline">신청</Button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
}
