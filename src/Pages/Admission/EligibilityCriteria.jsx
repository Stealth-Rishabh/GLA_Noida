import { CheckCircle, Info } from "lucide-react";
import { programs } from "./data";

export default function EligibilityCriteria() {
  return (
    <div className="max-w-4xl mx-auto">
      <div className="grid md:grid-cols-2 gap-10">
        {programs.map((program, index) => (
          <div
            key={index}
            className="bg-white rounded-xl overflow-hidden shadow-sm border border-gray-100 hover:shadow-md transition-shadow"
          >
            <div className="bg-black text-white p-6">
              <h3 className="text-xl font-semibold">{program.name}</h3>
              {program.duration && (
                <p className="text-gray-300 text-sm mt-1">
                  Duration: {program.duration}
                </p>
              )}
            </div>
            <div className="p-6 space-y-6">
              <div>
                <h4 className="font-medium text-lg mb-4 flex items-center">
                  <span className="bg-gray-100 p-1.5 rounded-full mr-2">
                    <CheckCircle className="h-4 w-4 text-black" />
                  </span>
                  Academic Requirements
                </h4>
                <ul className="space-y-3 pl-4">
                  {program.academicRequirements.map((req, idx) => (
                    <li key={idx} className="flex items-start gap-2">
                      <div className="h-5 w-5 flex-shrink-0 mt-0.5 text-black">
                        •
                      </div>
                      <span className="text-gray-600">{req}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <h4 className="font-medium text-lg mb-4 flex items-center">
                  <span className="bg-gray-100 p-1.5 rounded-full mr-2">
                    <CheckCircle className="h-4 w-4 text-black" />
                  </span>
                  Additional Requirements
                </h4>
                <ul className="space-y-3 pl-4">
                  {program.additionalRequirements.map((req, idx) => (
                    <li key={idx} className="flex items-start gap-2">
                      <div className="h-5 w-5 flex-shrink-0 mt-0.5 text-black">
                        •
                      </div>
                      <span className="text-gray-600">{req}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {program.specialNotes && (
                <div className="mt-4 bg-gray-50 p-4 rounded-lg border border-gray-100">
                  <div className="flex gap-2">
                    <Info className="h-5 w-5 text-black flex-shrink-0 mt-0.5" />
                    <div>
                      <h5 className="font-medium mb-1">Special Notes</h5>
                      <p className="text-sm text-gray-600">
                        {program.specialNotes}
                      </p>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
        ))}
      </div>

      <div className="mt-12 p-6 bg-gray-50 rounded-xl border border-gray-100">
        <h3 className="text-xl font-semibold mb-4">International Applicants</h3>
        <p className="text-gray-600 mb-6">
          International applicants must meet all the above requirements plus the
          following:
        </p>
        <ul className="grid md:grid-cols-2 gap-4">
          <li className="flex items-start gap-2 bg-white p-4 rounded-lg border border-gray-100">
            <CheckCircle className="h-5 w-5 text-black flex-shrink-0 mt-0.5" />
            <span className="text-gray-600">
              English proficiency test scores (TOEFL/IELTS)
            </span>
          </li>
          <li className="flex items-start gap-2 bg-white p-4 rounded-lg border border-gray-100">
            <CheckCircle className="h-5 w-5 text-black flex-shrink-0 mt-0.5" />
            <span className="text-gray-600">
              Credential evaluation for degrees from non-U.S. institutions
            </span>
          </li>
          <li className="flex items-start gap-2 bg-white p-4 rounded-lg border border-gray-100">
            <CheckCircle className="h-5 w-5 text-black flex-shrink-0 mt-0.5" />
            <span className="text-gray-600">
              Financial documentation for visa purposes
            </span>
          </li>
          <li className="flex items-start gap-2 bg-white p-4 rounded-lg border border-gray-100">
            <CheckCircle className="h-5 w-5 text-black flex-shrink-0 mt-0.5" />
            <span className="text-gray-600">Copy of passport</span>
          </li>
        </ul>
      </div>
    </div>
  );
}
