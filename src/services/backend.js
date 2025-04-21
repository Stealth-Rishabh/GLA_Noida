// src/services/backend.js

const getAuthToken = async () => {
  try {
    const response = await fetch("https://glauniversity.in:8070/token", {
      method: "POST",
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
      },
      body: new URLSearchParams({
        username: "EXT220001",
        password: "out@gla",
        grant_type: "password",
      }),
    });
    const data = await response.json();
    return data.access_token;
  } catch (error) {
    console.error("Error getting auth token:", error);
    throw error;
  }
};

export const submitLead = async (formData) => {
  try {
    const accessToken = await getAuthToken();

    // Prepare the lead data with all required fields
    const leadData = {
      // Required fields from form
      Name: formData.name || "",
      Email_1: formData.email || "",
      Contact_1: formData.phone || "",
      Course_Name: formData.Course_Name || "", // From courseName prop

      // Standard values
      Campus: "Noida Campus#102",
      Source_Type: "Online",
      SubSession: "Summer",
      Study_Mode: "Offline",
      Country: "India",
      Operation: "Add",

      // Empty strings for optional fields
      Campaign: "",
      Source_Name: "",
      Sourse_Course_Code: formData.Course_Name || "", // Use Course_Name as course code
      Source_Medium: "",
      Branch: "",
      Father_Name: "",
      Mother_Name: "",
      Email_2: "",
      Contact_2: "",
      Address: "",
      State: "",
      District: "",
      Locality: "",
      LeadComeFrom: "Website", // Added default value

      // Null fields
      Lead_Source_Type: "",
      Lead_Source_Name: "",
      SubmittedByCode: "",
      SubmittedByName: "",
    };

    // Log the data being sent
    console.log("Sending lead data:", leadData);

    const response = await fetch(
      "https://glauniversity.in:8070/api/WebApi/PushLead",
      {
        method: "POST",
        headers: {
          Authorization: `Bearer ${accessToken}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify(leadData),
      }
    );

    const result = await response.json();
    return result;
  } catch (error) {
    console.error("Error submitting lead:", error);
    throw error;
  }
};
