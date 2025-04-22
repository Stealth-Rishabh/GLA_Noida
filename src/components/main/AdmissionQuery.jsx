import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, ArrowRight, Send } from "lucide-react";

const formFields = [
  { 
    name: "name", 
    label: "Name*", 
    type: "text",
    validation: {
      pattern: /^[a-zA-Z\s]{3,50}$/,
      message: "Name should be 3-50 characters long and contain only letters"
    }
  },
  { 
    name: "email", 
    label: "Email*", 
    type: "email",
    validation: {
      pattern: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
      message: "Please enter a valid email address"
    }
  },
  { 
    name: "mobile", 
    label: "Mobile*", 
    type: "tel",
    validation: {
      pattern: /^[6-9]\d{9}$/,
      message: "Please enter a valid 10-digit mobile number"
    }
  },
  {
    name: "course",
    label: "Course*",
    type: "select",
    options: ["B.Tech", "BBA", "BCA", "MBA", "B.Tech (AI & ML)"],
    validation: {
      required: true,
      message: "Please select a course"
    }
  },
  {
    name: "state",
    label: "Select State*",
    type: "select",
    options: [
      "Andhra Pradesh",
      "Arunachal Pradesh", 
      "Assam",
      "Bihar",
      "Chhattisgarh",
      "Delhi",
      "Goa",
      "Gujarat", 
      "Haryana",
      "Himachal Pradesh",
      "Jharkhand",
      "Karnataka",
      "Kerala",
      "Madhya Pradesh",
      "Maharashtra",
      "Manipur",
      "Meghalaya",
      "Mizoram", 
      "Nagaland",
      "Odisha",
      "Punjab",
      "Rajasthan",
      "Sikkim",
      "Tamil Nadu",
      "Telangana",
      "Tripura",
      "Uttar Pradesh",
      "Uttarakhand",
      "West Bengal",
      "Andaman and Nicobar Islands",
      "Chandigarh",
      "Dadra and Nagar Haveli and Daman and Diu",
      "Jammu and Kashmir",
      "Ladakh",
      "Lakshadweep",
      "Puducherry"
    ],
    validation: {
      required: true,
      message: "Please select your state"
    }
  },
  {
    name: "city",
    label: "Select City*",
    type: "text",
    validation: {
      pattern: /^[a-zA-Z\s]{2,50}$/,
      message: "Please enter a valid city name"
    }
  },
];

export default function AdmissionQuery() {
  const [isOpen, setIsOpen] = useState(false);
  const [formData, setFormData] = useState({});
  const [errors, setErrors] = useState({});
  const [captcha, setCaptcha] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const validateField = (name, value) => {
    const field = formFields.find(f => f.name === name);
    if (!field) return "";

    if (!value || value.trim() === "") {
      return `${field.label.replace('*', '')} is required`;
    }

    if (field.validation?.pattern && !field.validation.pattern.test(value)) {
      return field.validation.message;
    }

    return "";
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    
    // Validate field on change
    const error = validateField(name, value);
    setErrors(prev => ({
      ...prev,
      [name]: error
    }));
  };

  const validateForm = () => {
    const newErrors = {};
    let isValid = true;

    // Validate all fields
    formFields.forEach(field => {
      const value = formData[field.name] || "";
      const error = validateField(field.name, value);
      if (error) {
        newErrors[field.name] = error;
        isValid = false;
      }
    });

    // Validate captcha
    if (!captcha) {
      newErrors.captcha = "Please enter the captcha";
      isValid = false;
    } else if (captcha !== "9086") {
      newErrors.captcha = "Invalid captcha";
      isValid = false;
    }

    setErrors(newErrors);
    return isValid;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    if (!validateForm()) {
      setIsSubmitting(false);
      return;
    }

    try {
      console.log(formData);
      // Add your form submission logic here
      setIsOpen(false);
    } catch (error) {
      console.error('Form submission error:', error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <>
      <AnimatePresence>
        {!isOpen && (
          <motion.button
            className="fixed right-[8px] top-1/2 -translate-y-1/2 bg-gradient-to-r from-cusGreen to-cusGreenLight text-white px-8 py-4 -rotate-90 origin-right z-50 hover:shadow-lg transition-all duration-300 rounded-t-lg font-medium tracking-wide"
            style={{ transformOrigin: "calc(100% - 8px) 50%" }}
            onClick={() => setIsOpen(true)}
            initial={{ x: 0 }}
            whileHover={{ x: -5, scale: 1.02 }}
            exit={{ x: 100 }}
          >
            <span className="flex items-center gap-2">
              Admission Query
              <ArrowRight className="w-4 h-4" />
            </span>
          </motion.button>
        )}

        {isOpen && (
          <>
            <motion.div
              className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsOpen(false)}
            />

            <motion.div
              className="fixed right-0 top-1/2 -translate-y-1/2 w-full max-w-sm z-50 rounded-l-xl shadow-2xl"
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", damping: 25, stiffness: 200 }}
            >
              <div className="bg-gradient-to-br from-white to-gray-50 p-6 rounded-l-xl">
                <div className="flex justify-between items-center mb-6">
                  <div>
                    <h2 className="text-2xl font-bold bg-gradient-to-r from-cusGreen to-cusGreenLight text-transparent bg-clip-text">
                      Admission Query
                    </h2>
                    <p className="text-gray-600 text-sm mt-1">
                      Fill the form below and we'll get back to you
                    </p>
                  </div>
                  <button
                    onClick={() => setIsOpen(false)}
                    className="p-2 hover:bg-gray-100 rounded-full transition-colors"
                  >
                    <X className="w-5 h-5 text-gray-500" />
                  </button>
                </div>

                <form onSubmit={handleSubmit} className="grid gap-3">
                  {formFields.map((field) => (
                    <div key={field.name} className="relative">
                      {field.type === "select" ? (
                        <div>
                          <select
                            name={field.name}
                            required
                            onChange={handleInputChange}
                            className={`w-full p-3 rounded-lg border ${
                              errors[field.name] ? 'border-red-500' : 'border-gray-200'
                            } bg-white focus:outline-none focus:border-cusGreen focus:ring-1 focus:ring-cusGreen text-sm transition-all duration-200`}
                          >
                            <option value="">{field.label}</option>
                            {field.options.map((option) => (
                              <option key={option} value={option}>
                                {option}
                              </option>
                            ))}
                          </select>
                          {errors[field.name] && (
                            <p className="text-red-500 text-xs mt-1">{errors[field.name]}</p>
                          )}
                        </div>
                      ) : (
                        <div>
                          <input
                            type={field.type}
                            name={field.name}
                            placeholder={field.label}
                            required
                            onChange={handleInputChange}
                            className={`w-full p-3 rounded-lg border ${
                              errors[field.name] ? 'border-red-500' : 'border-gray-200'
                            } bg-white focus:outline-none focus:border-cusGreen focus:ring-1 focus:ring-cusGreen text-sm transition-all duration-200`}
                          />
                          {errors[field.name] && (
                            <p className="text-red-500 text-xs mt-1">{errors[field.name]}</p>
                          )}
                        </div>
                      )}
                    </div>
                  ))}

                  <div className="flex gap-2 mt-1">
                    <div className="flex-1">
                      <input
                        type="text"
                        placeholder="Enter Captcha *"
                        required
                        value={captcha}
                        onChange={(e) => {
                          setCaptcha(e.target.value);
                          if (errors.captcha) {
                            setErrors(prev => ({ ...prev, captcha: "" }));
                          }
                        }}
                        className={`w-full p-3 rounded-lg border ${
                          errors.captcha ? 'border-red-500' : 'border-gray-200'
                        } bg-white focus:outline-none focus:border-cusGreen focus:ring-1 focus:ring-cusGreen text-sm transition-all duration-200`}
                      />
                      {errors.captcha && (
                        <p className="text-red-500 text-xs mt-1">{errors.captcha}</p>
                      )}
                    </div>
                    <div className="w-24 h-11 bg-gradient-to-br from-gray-50 to-gray-100 rounded-lg flex items-center justify-center text-base font-bold text-gray-700 border border-gray-200">
                      9086
                    </div>
                    <button
                      type="button"
                      className="p-2 hover:bg-gray-100 rounded-lg transition-colors border border-gray-200"
                      onClick={() => setCaptcha("")}
                    >
                      <svg
                        viewBox="0 0 24 24"
                        className="w-5 h-5 text-gray-500"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                      >
                        <path d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
                      </svg>
                    </button>
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full p-3 bg-gradient-to-r from-cusGreen to-cusGreenLight text-white rounded-lg hover:shadow-lg transition-all duration-300 text-sm font-medium mt-2 flex items-center justify-center gap-2 group disabled:opacity-70"
                  >
                    {isSubmitting ? "Submitting..." : "Submit Query"}
                    <Send className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </button>
                </form>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
