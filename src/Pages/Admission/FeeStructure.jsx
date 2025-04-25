import { ArrowRight, Download, HelpCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { feeStructure } from "./data";

export default function FeeStructure() {
  return (
    <div className="max-w-4xl mx-auto">
      <div className="overflow-x-auto bg-white rounded-xl shadow-sm border border-gray-100">
        <table className="w-full border-collapse">
          <thead>
            <tr>
              <th className="bg-black text-white p-4 text-left font-medium">
                Program
              </th>
              <th className="bg-black text-white p-4 text-left font-medium">
                Tuition Fee (per year)
              </th>
              <th className="bg-black text-white p-4 text-left font-medium">
                Application Fee
              </th>
              <th className="bg-black text-white p-4 text-left font-medium">
                Development Fee
              </th>
              <th className="bg-black text-white p-4 text-left font-medium">
                Total (First Year)
              </th>
            </tr>
          </thead>
          <tbody>
            {feeStructure.map((fee, index) => (
              <tr
                key={index}
                className={index % 2 === 0 ? "bg-white" : "bg-gray-50"}
              >
                <td className="p-4 border-b border-gray-100 font-medium">
                  {fee.program}
                </td>
                <td className="p-4 border-b border-gray-100">
                  ${fee.tuitionFee.toLocaleString()}
                </td>
                <td className="p-4 border-b border-gray-100">
                  ${fee.applicationFee.toLocaleString()}
                </td>
                <td className="p-4 border-b border-gray-100">
                  ${fee.developmentFee.toLocaleString()}
                </td>
                <td className="p-4 border-b border-gray-100 font-semibold">
                  ${fee.total.toLocaleString()}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className="mt-16 space-y-10">
        <h3 className="text-2xl font-semibold mb-6">Payment Schedule</h3>

        <div className="grid md:grid-cols-3 gap-6">
          <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
            <div className="w-10 h-10 rounded-full bg-black flex items-center justify-center text-white font-bold mb-4">
              1
            </div>
            <h4 className="font-medium mb-2">First Installment</h4>
            <p className="text-gray-600">
              Due at the time of admission confirmation
            </p>
            <p className="font-semibold mt-2">50% of the total fee</p>
            <div className="mt-3 inline-block bg-gray-100 text-gray-800 text-sm px-3 py-1 rounded-full">
              Due: Within 2 weeks of acceptance
            </div>
          </div>
          <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
            <div className="w-10 h-10 rounded-full bg-black flex items-center justify-center text-white font-bold mb-4">
              2
            </div>
            <h4 className="font-medium mb-2">Second Installment</h4>
            <p className="text-gray-600">
              Due before the end of first semester
            </p>
            <p className="font-semibold mt-2">25% of the total fee</p>
            <div className="mt-3 inline-block bg-gray-100 text-gray-800 text-sm px-3 py-1 rounded-full">
              Due: November 15 (Fall) / April 15 (Spring)
            </div>
          </div>
          <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
            <div className="w-10 h-10 rounded-full bg-black flex items-center justify-center text-white font-bold mb-4">
              3
            </div>
            <h4 className="font-medium mb-2">Third Installment</h4>
            <p className="text-gray-600">
              Due before the beginning of second semester
            </p>
            <p className="font-semibold mt-2">25% of the total fee</p>
            <div className="mt-3 inline-block bg-gray-100 text-gray-800 text-sm px-3 py-1 rounded-full">
              Due: January 15 (Fall) / August 15 (Spring)
            </div>
          </div>
        </div>

        <div className="mt-10 bg-white p-8 rounded-xl shadow-sm border border-gray-100">
          <h3 className="text-2xl font-semibold flex items-center mb-6">
            <HelpCircle className="h-5 w-5 mr-2" />
            Refund Policy
          </h3>
          <div className="grid md:grid-cols-2 gap-6">
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <ArrowRight className="h-5 w-5 text-black flex-shrink-0 mt-0.5" />
                <span className="text-gray-600">
                  Full refund (minus processing fee of $500) if withdrawal is
                  requested before the semester begins.
                </span>
              </li>
              <li className="flex items-start gap-3">
                <ArrowRight className="h-5 w-5 text-black flex-shrink-0 mt-0.5" />
                <span className="text-gray-600">
                  75% refund if withdrawal is within the first two weeks of the
                  semester.
                </span>
              </li>
              <li className="flex items-start gap-3">
                <ArrowRight className="h-5 w-5 text-black flex-shrink-0 mt-0.5" />
                <span className="text-gray-600">
                  50% refund if withdrawal is within the first month of the
                  semester.
                </span>
              </li>
            </ul>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <ArrowRight className="h-5 w-5 text-black flex-shrink-0 mt-0.5" />
                <span className="text-gray-600">
                  No refund after the first month of the semester.
                </span>
              </li>
              <li className="flex items-start gap-3">
                <ArrowRight className="h-5 w-5 text-black flex-shrink-0 mt-0.5" />
                <span className="text-gray-600">
                  Application fee is non-refundable under any circumstances.
                </span>
              </li>
              <li className="flex items-start gap-3">
                <ArrowRight className="h-5 w-5 text-black flex-shrink-0 mt-0.5" />
                <span className="text-gray-600">
                  Medical emergencies and special circumstances are evaluated on
                  a case-by-case basis.
                </span>
              </li>
            </ul>
          </div>
          <div className="mt-6 pt-6 border-t border-gray-100">
            <Button
              variant="outline"
              className="border-black text-black hover:bg-gray-50"
            >
              <Download className="mr-2 h-4 w-4" />
              Download Complete Fee Policy
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
