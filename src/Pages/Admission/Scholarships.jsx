import { Button } from "@/components/ui/button";
import { CheckCircle, Award, Calendar } from "lucide-react";
import { scholarships } from "./data";

export default function Scholarships() {
  return (
    <div className="max-w-4xl mx-auto">
      <div className="grid md:grid-cols-2 gap-8">
        {scholarships.map((scholarship, index) => (
          <div
            key={index}
            className="bg-white rounded-xl overflow-hidden shadow-sm border border-gray-100 hover:shadow-md transition-shadow"
          >
            <div className="bg-black text-white p-6">
              <h3 className="text-xl font-semibold">{scholarship.name}</h3>
              <p className="text-gray-300 mt-1 flex items-center">
                <Award className="h-4 w-4 mr-1" />
                {scholarship.coverage}
              </p>
            </div>
            <div className="p-6 space-y-5">
              <p className="text-gray-600">{scholarship.description}</p>

              <div>
                <h4 className="font-medium text-lg mb-4 flex items-center">
                  <span className="bg-gray-100 p-1.5 rounded-full mr-2">
                    <CheckCircle className="h-4 w-4 text-black" />
                  </span>
                  Eligibility
                </h4>
                <ul className="space-y-2 pl-4">
                  {scholarship.eligibility.map((item, idx) => (
                    <li key={idx} className="flex items-start gap-2">
                      <div className="h-5 w-5 flex-shrink-0 mt-0.5 text-black">
                        •
                      </div>
                      <span className="text-gray-600">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {scholarship.deadline && (
                <div className="flex items-center gap-2 text-gray-600 bg-gray-50 p-3 rounded-lg">
                  <Calendar className="h-4 w-4" />
                  <span className="text-sm font-medium">
                    Application Deadline: {scholarship.deadline}
                  </span>
                </div>
              )}

              <div className="pt-2">
                <Button className="bg-black hover:bg-gray-800 text-white w-full">
                  Apply for Scholarship
                </Button>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-16 bg-gray-50 rounded-xl p-8 border border-gray-100">
        <div className="flex flex-col md:flex-row gap-8 items-center">
          <div className="md:w-1/4 flex justify-center">
            <div className="w-24 h-24 bg-black rounded-full flex items-center justify-center">
              <Award className="h-12 w-12 text-white" />
            </div>
          </div>
          <div className="md:w-3/4">
            <h3 className="text-2xl font-semibold mb-4">
              Additional Financial Aid
            </h3>
            <p className="text-gray-600 mb-6">
              Beyond our institutional scholarships, we encourage students to
              explore external funding opportunities:
            </p>
            <div className="grid md:grid-cols-2 gap-4">
              <div className="flex items-start gap-2 bg-white p-4 rounded-lg border border-gray-100">
                <CheckCircle className="h-5 w-5 text-black flex-shrink-0 mt-0.5" />
                <span className="text-gray-600">
                  Government education grants and loans
                </span>
              </div>
              <div className="flex items-start gap-2 bg-white p-4 rounded-lg border border-gray-100">
                <CheckCircle className="h-5 w-5 text-black flex-shrink-0 mt-0.5" />
                <span className="text-gray-600">Corporate sponsorships</span>
              </div>
              <div className="flex items-start gap-2 bg-white p-4 rounded-lg border border-gray-100">
                <CheckCircle className="h-5 w-5 text-black flex-shrink-0 mt-0.5" />
                <span className="text-gray-600">
                  International student exchange programs
                </span>
              </div>
              <div className="flex items-start gap-2 bg-white p-4 rounded-lg border border-gray-100">
                <CheckCircle className="h-5 w-5 text-black flex-shrink-0 mt-0.5" />
                <span className="text-gray-600">
                  Work-study opportunities on campus
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
