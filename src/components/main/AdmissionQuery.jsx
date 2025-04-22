import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, ArrowRight, Send } from "lucide-react";

const formFields = [
  {
    name: "campus",
    label: "Select Campus*",
    type: "select",
    options: ["Mathura", "Greater Noida"],
  },
  { name: "name", label: "Name*", type: "text" },
  { name: "email", label: "Email*", type: "email" },
  { name: "mobile", label: "Mobile*", type: "tel" },
  {
    name: "course",
    label: "Course*",
    type: "select",
    options: ["B.Tech", "BBA", "BCA", "MBA", "B.Tech (AI & ML)"],
  },
  {
    name: "branch",
    label: "Select Branch*",
    type: "select",
    options: ["CSE", "ECE", "ME", "Civil", "AI & ML"],
  },
  {
    name: "state",
    label: "Select State*",
    type: "select",
    options: ["Uttar Pradesh", "Delhi", "Haryana", "Bihar"],
  },
  {
    name: "city",
    label: "Select City*",
    type: "select",
    options: ["Noida", "Greater Noida", "Ghaziabad", "Delhi"],
  },
];

export default function AdmissionQuery() {
  const [isOpen, setIsOpen] = useState(false);
  const [formData, setFormData] = useState({});
  const [captcha, setCaptcha] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
    setIsOpen(false);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
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
                        <select
                          name={field.name}
                          required
                          onChange={handleInputChange}
                          className="w-full p-3 rounded-lg border border-gray-200 bg-white focus:outline-none focus:border-cusGreen focus:ring-1 focus:ring-cusGreen text-sm transition-all duration-200"
                        >
                          <option value="">{field.label}</option>
                          {field.options.map((option) => (
                            <option key={option} value={option}>
                              {option}
                            </option>
                          ))}
                        </select>
                      ) : (
                        <input
                          type={field.type}
                          name={field.name}
                          placeholder={field.label}
                          required
                          onChange={handleInputChange}
                          className="w-full p-3 rounded-lg border border-gray-200 bg-white focus:outline-none focus:border-cusGreen focus:ring-1 focus:ring-cusGreen text-sm transition-all duration-200"
                        />
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
                        onChange={(e) => setCaptcha(e.target.value)}
                        className="w-full p-3 rounded-lg border border-gray-200 bg-white focus:outline-none focus:border-cusGreen focus:ring-1 focus:ring-cusGreen text-sm transition-all duration-200"
                      />
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
                    className="w-full p-3 bg-gradient-to-r from-cusGreen to-cusGreenLight text-white rounded-lg hover:shadow-lg transition-all duration-300 text-sm font-medium mt-2 flex items-center justify-center gap-2 group"
                  >
                    Submit Query
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
