import { useState, useEffect } from "react";

export default function ContactForm() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    position: "",
    company: "",
    message: "",
  });

  const [touched, setTouched] = useState({
    firstName: false,
    lastName: false,
    email: false,
    phone: false,
  });

  const [errors, setErrors] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
  });

  const [result, setResult] = useState("");
  // Set rules
  useEffect(() => {
    const nameRegex = /^[a-zA-Zก-๙\s]+$/;
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const phoneRegex = /^[0-9]{10}$/;

    setErrors((prev) => ({
      ...prev,
      firstName: formData.firstName
        ? nameRegex.test(formData.firstName)
          ? ""
          : "First name must contain only letters or Thai characters."
        : "First name is required.",
      lastName: formData.lastName
        ? nameRegex.test(formData.lastName)
          ? ""
          : "Last name must contain only letters or Thai characters."
        : "Last name is required.",
      email: formData.email
        ? emailRegex.test(formData.email)
          ? ""
          : "Email must be a valid email address."
        : "Email is required.",
      phone: formData.phone
        ? formData.phone.length < 10
          ? "Phone number must be exactly 10 digits long."
          : phoneRegex.test(formData.phone)
          ? ""
          : "Phone number must contain only numbers."
        : "Phone number is required.",
    }));
  }, [formData]);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;

    if (name === "phone") {
      const numericValue = value.replace(/[^0-9]/g, ""); // ลบอักขระที่ไม่ใช่ตัวเลข
      if (numericValue.length <= 10) {
        setFormData({
          ...formData,
          [name]: numericValue,
        });
        setTouched((prev) => ({ ...prev, [name]: true }));
      }
    } else {
      setFormData({
        ...formData,
        [name]: value,
      });
      setTouched((prev) => ({ ...prev, [name]: true }));
    }
  };

  const handleClear = () => {
    setFormData({
      firstName: "",
      lastName: "",
      email: "",
      phone: "",
      position: "",
      company: "",
      message: "",
    });
    setTouched({
      firstName: false,
      lastName: false,
      email: false,
      phone: false,
    });
    setErrors({
      firstName: "",
      lastName: "",
      email: "",
      phone: "",
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    // Trigger validation for all fields
    setTouched({
      firstName: true,
      lastName: true,
      email: true,
      phone: true,
    });

    // Check if there are any errors
    if (Object.values(errors).some((error) => error !== "")) {
      setResult("Please correct the errors before submitting.");
      return;
    }

    // Check if all required fields are filled
    if (
      !formData.firstName ||
      !formData.lastName ||
      !formData.email ||
      !formData.phone
    ) {
      setResult("Please fill out all required fields.");
      return;
    }

    setResult("Sending....");

    const formDataToSubmit = new FormData();
    Object.entries(formData).forEach(([key, value]) => {
      formDataToSubmit.append(key, value);
    });
    formDataToSubmit.append(
      "access_key",
      "a5de35ae-3ca9-4972-95c7-998e280ef7f6"
    );

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formDataToSubmit,
    });

    const data = await response.json();

    if (data.success) {
      setResult("Form Submitted Successfully");
      handleClear(); // Clear form on success
    } else {
      setResult(data.message);
    }
  };

  return (
    <div className="max-w-screen-xl mx-auto py-12 px-6 lg:py-16 lg:px-8 flex justify-center">
      <form onSubmit={handleSubmit} className="max-w-screen-md w-full">
        <div className="space-y-12">
          <div className="border-b border-gray-900/10 pb-12">
            <h1 className="text-5xl font-bold text-blue2">Contact us</h1>

            <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
              {/* First Name */}
              <div className="sm:col-span-3">
                <label
                  htmlFor="firstName"
                  className="block text-sm font-medium leading-6 text-blue2"
                >
                  First name
                </label>
                <div className="mt-2">
                  <input
                    id="firstName"
                    name="firstName"
                    type="text"
                    autoComplete="given-name"
                    placeholder="First name"
                    value={formData.firstName}
                    onChange={handleChange}
                    onBlur={() =>
                      setTouched((prev) => ({ ...prev, firstName: true }))
                    }
                    className="block w-full p-4 border-b-2 border-blue2 focus:border-indigo-600 rounded py-1.5 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6"
                  />
                  {errors.firstName && touched.firstName && (
                    <p className="text-red-500 text-sm mt-1">
                      {errors.firstName}
                    </p>
                  )}
                </div>
              </div>

              {/* Last Name */}
              <div className="sm:col-span-3">
                <label
                  htmlFor="lastName"
                  className="block text-sm font-medium leading-6 text-blue2"
                >
                  Last name
                </label>
                <div className="mt-2">
                  <input
                    id="lastName"
                    name="lastName"
                    type="text"
                    autoComplete="family-name"
                    placeholder="Last name"
                    value={formData.lastName}
                    onChange={handleChange}
                    onBlur={() =>
                      setTouched((prev) => ({ ...prev, lastName: true }))
                    }
                    className="block w-full p-4 border-b-2 border-blue2 focus:border-indigo-600 rounded py-1.5 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6"
                  />
                  {errors.lastName && touched.lastName && (
                    <p className="text-red-500 text-sm mt-1">
                      {errors.lastName}
                    </p>
                  )}
                </div>
              </div>

              {/* Email */}
              <div className="sm:col-span-3">
                <label
                  htmlFor="email"
                  className="block text-sm font-medium leading-6 text-blue2"
                >
                  Email
                </label>
                <div className="mt-2">
                  <input
                    id="email"
                    name="email"
                    type="email"
                    autoComplete="email"
                    placeholder="Email"
                    value={formData.email}
                    onChange={handleChange}
                    onBlur={() =>
                      setTouched((prev) => ({ ...prev, email: true }))
                    }
                    className="block w-full p-4 border-b-2 border-blue2 focus:border-indigo-600 rounded py-1.5  placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6"
                  />
                  {errors.email && touched.email && (
                    <p className="text-red-500 text-sm mt-1">{errors.email}</p>
                  )}
                </div>
              </div>

              {/* Phone */}
              <div className="sm:col-span-3">
                <label
                  htmlFor="phone"
                  className="block text-sm font-medium leading-6 text-blue2"
                >
                  Phone
                </label>
                <div className="mt-2">
                  <input
                    id="phone"
                    name="phone"
                    type="text"
                    autoComplete="tel"
                    placeholder="Phone"
                    value={formData.phone}
                    onChange={handleChange}
                    onBlur={() =>
                      setTouched((prev) => ({ ...prev, phone: true }))
                    }
                    maxLength={10} // Limit input to 10 characters
                    className="block w-full p-4 border-b-2 border-blue2 focus:border-indigo-600 rounded py-1.5  placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6"
                  />
                  {errors.phone && touched.phone && (
                    <p className="text-red-500 text-sm mt-1">{errors.phone}</p>
                  )}
                </div>
              </div>

              {/* Position */}
              <div className="col-span-full">
                <label
                  htmlFor="position"
                  className="block text-sm font-medium leading-6 text-blue2"
                >
                  Position
                </label>
                <div className="mt-2">
                  <input
                    id="position"
                    name="position"
                    type="text"
                    autoComplete="organization-title"
                    placeholder="Position"
                    value={formData.position}
                    onChange={handleChange}
                    className="block w-full p-4 border-b-2 border-blue2 focus:border-indigo-600 rounded py-1.5  placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6"
                  />
                </div>
              </div>

              {/* Company */}
              <div className="col-span-full">
                <label
                  htmlFor="company"
                  className="block text-sm font-medium leading-6 text-blue2"
                >
                  Company
                </label>
                <div className="mt-2">
                  <input
                    id="company"
                    name="company"
                    type="text"
                    autoComplete="organization"
                    placeholder="Company"
                    value={formData.company}
                    onChange={handleChange}
                    className="block w-full p-4 border-b-2 border-blue2 focus:border-indigo-600 rounded py-1.5  placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6"
                  />
                </div>
              </div>

              {/* Message */}
              <div className="col-span-full">
                <label
                  htmlFor="message"
                  className="block text-sm font-medium leading-6 text-blue2"
                >
                  Message
                </label>
                <div className="mt-2">
                  <textarea
                    id="message"
                    name="message"
                    rows={4}
                    placeholder="Your message"
                    value={formData.message}
                    onChange={handleChange}
                    className="block w-full p-4 border-b-2 border-blue2 focus:border-indigo-600 rounded py-1.5  placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6"
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="flex gap-x-4">
            <button
              type="submit"
              className="inline-block px-8 py-1.5 text-sm font-bold leading-6 text-white shadow-sm ring-1 ring-gray-900/10 hover:ring-gray-900/20 bg-blue2 hover:bg-indigo-800 rounded-full hover:shadow-2xl transition-all duration-300 ease-in-out"
            >
              Submit
            </button>
            <button
              type="button"
              onClick={handleClear}
              className="inline-block px-3 py-1.5 text-sm font-bold leading-6 text-white shadow-sm ring-1 ring-gray-900/10 hover:ring-gray-900/20 bg-red-500 hover:bg-red-600 rounded-full hover:shadow-2xl transition-all duration-300 ease-in-out"
            >
              Clear
            </button>
          </div>
          {result && <p className="text-center text-lg mt-4">{result}</p>}
        </div>
      </form>
    </div>
  );
}
