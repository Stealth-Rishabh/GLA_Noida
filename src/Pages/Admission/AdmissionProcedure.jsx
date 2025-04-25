import { admissionSteps } from "./data";

export default function AdmissionProcedure() {
  return (
    <div className="max-w-4xl mx-auto">
      <div className="space-y-16">
        {admissionSteps.map((step, index) => (
          <div key={index} className="flex gap-8 relative ">
            <div className="flex-shrink-0 z-10">
              <div className="w-14 h-14 rounded-full bg-green-500 flex items-center justify-center text-white font-bold text-xl shadow-sm">
                {index + 1}
              </div>
              {index < admissionSteps.length - 1 && (
                <div className="absolute left-7 top-14 bottom-0 w-px h-[calc(100%-3.5rem)] bg-gray-200"></div>
              )}
            </div>
            <div className="pt-3 space-y-3">
              <h3 className="text-2xl font-semibold">{step.title}</h3>
              <p className="text-gray-600 leading-relaxed">
                {step.description}
              </p>
              {step.note && (
                <div className="text-sm bg-gray-50 p-4 rounded-lg border border-gray-100 text-gray-600">
                  <strong className="font-medium">Note:</strong> {step.note}
                </div>
              )}
              {step.deadline && (
                <div className="inline-block bg-cusBlue text-white text-sm px-4 py-1 rounded-full">
                  Deadline: {step.deadline}
                </div>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
