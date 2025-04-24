import { submitLead } from "./backend";

const getUTMParams = () => {
  const urlParams = new URLSearchParams(window.location.search);
  return {
    source: urlParams.get("utm_source") || "",
    medium: urlParams.get("utm_medium") || "",
    campaign: urlParams.get("utm_campaign") || "",
  };
};

export const submitAdmissionQuery = async (formData) => {
  try {
    console.log("Raw form data received:", formData);

    const utmParams = getUTMParams();

    const crmPayload = {
      Campus: "Noida Campus#102",
      SubSession: "Summer",
      Source_Type: utmParams.source || "Online",
      Campaign: utmParams.campaign || "Direct",
      Source_Name: utmParams.source || "Direct",
      Sourse_Course_Code: formData.coursesid || "",
      Source_Medium: utmParams.medium || "Direct",
      Course_Name: "",
      Branch: "",
      Study_Mode: "Offline",
      Name: formData.name || "",
      Father_Name: "",
      Mother_Name: "",
      Email_1: formData.email || "",
      Email_2: "",
      Contact_1: formData.phone || "",
      Contact_2: "",
      Address: "",
      Country: "India",
      State: formData.stateid || "",
      District: formData.cityid || "",
      Locality: "",
      Lead_Source_Type: utmParams.source || "Online",
      Lead_Source_Name: utmParams.source || "Direct",
      Operation: "Add",
      SubmittedByCode: null,
      SubmittedByName: null,
      LeadComeFrom: "Website",
    };

    console.log("Constructed CRM payload:", crmPayload);
    const response = await submitLead(crmPayload);
    console.log("CRM API response:", response);

    if (response.Message?.Status === "Success") {
      return {
        success: true,
        message: "Your query has been submitted successfully!",
      };
    } else {
      throw new Error(
        response.Message?.Description || "Failed to submit query"
      );
    }
  } catch (error) {
    console.error("CRM submission error:", error);
    return {
      success: false,
      message: "Failed to submit your query. Please try again later.",
      error: error.message,
    };
  }
};
