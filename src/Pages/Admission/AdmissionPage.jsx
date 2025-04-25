import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { BookOpen, GraduationCap, DollarSign, Award } from "lucide-react";

import AdmissionProcedure from "./AdmissionProcedure";
import EligibilityCriteria from "./EligibilityCriteria";
import FeeStructure from "./FeeStructure";
import Scholarships from "./Scholarships";
import Banner from "@/components/main/Banner";
import admissionBanner from "@/assets/admission/admissionBanner.webp";

export default function AdmissionPage() {
  return (
    <>
      {/* Hero Section */}
      <Banner
        title="Admission"
        image={admissionBanner}
        imageAlt="Admission Banner"
      />

      {/* Main Content */}
      <div className="max-w-6xl mx-auto px-4 py-16">
        <Tabs defaultValue="procedure" className="w-full">
          <TabsList className="flex w-full overflow-x-auto space-x-2 bg-black/10 mb-12 justify-center shadow-md">
            <TabsTrigger
              value="procedure"
              className="data-[state=active]:bg-cusYellow data-[state=active]:text-black rounded-sm py-2.5 px-5 transition-all"
            >
              <BookOpen className="mr-2 h-4 w-4" />
              Admissions Procedure
            </TabsTrigger>
            <TabsTrigger
              value="eligibility"
              className="data-[state=active]:bg-cusYellow data-[state=active]:text-black rounded-sm py-2.5 px-5 transition-all"
            >
              <GraduationCap className="mr-2 h-4 w-4" />
              Eligibility Criteria
            </TabsTrigger>
            <TabsTrigger
              value="fees"
              className="data-[state=active]:bg-cusYellow data-[state=active]:text-black rounded-sm py-2.5 px-5 transition-all"
            >
              <DollarSign className="mr-2 h-4 w-4" />
              Fee Structure
            </TabsTrigger>
            <TabsTrigger
              value="scholarships"
              className="data-[state=active]:bg-cusYellow data-[state=active]:text-black rounded-sm py-2.5 px-5 transition-all"
            >
              <Award className="mr-2 h-4 w-4" />
              Scholarships
            </TabsTrigger>
          </TabsList>

          {/* Admissions Procedure Content */}
          <TabsContent value="procedure" className="mt-0">
            <AdmissionProcedure />
          </TabsContent>

          {/* Eligibility Criteria Content */}
          <TabsContent value="eligibility" className="mt-0">
            <EligibilityCriteria />
          </TabsContent>

          {/* Fee Structure Content */}
          <TabsContent value="fees" className="mt-0">
            <FeeStructure />
          </TabsContent>

          {/* Scholarships Content */}
          <TabsContent value="scholarships" className="mt-0">
            <Scholarships />
          </TabsContent>
        </Tabs>
      </div>
    </>
  );
}
