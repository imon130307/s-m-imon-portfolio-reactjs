
import { useEffect, useState } from "react";
import { MdEmail, MdLocationOn } from "react-icons/md";
import { FaWhatsapp } from "react-icons/fa";
import emailjs from "emailjs-com";
import Lottie from "lottie-react";
import contactAnimation from "../../../public/contact.json"; // Replace with your Lottie file
import Swal from "sweetalert2";
import Aos from "aos";
import "aos/dist/aos.css";





const Contact = () => {

  const [formData, setFormData] = useState({
    from_email: "",
    message: "",
  });

  useEffect(() => {
    // console.log("Initializing AOS");
    Aos.init({ duration: 1000 });
  }, []);

  const [isSending, setIsSending] = useState(false);
  // eslint-disable-next-line no-unused-vars
  const [successMessage, setSuccessMessage] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSending(true);

    emailjs
      .send(
        "service_84gsdhl",
        "template_syla2hi",
        {
          to_name: "MOHAMMAD IMON",
          from_email: formData.from_email,
          message: formData.message,
        },
        "nyoaPudcifItz_hmG"
      )
      .then(
        () => {
          setIsSending(false);
          Swal.fire({
            icon: "success",
            title: "Message sent successfully!",
            showConfirmButton: false,
            timer: 1500,
          });
          setFormData({ from_email: "", message: "" });
        },
        (error) => {
          setIsSending(false);
          Swal.fire({
            icon: "error",
            title: "Failed to send message.",
            text: "Please try again later.",
          });
          console.error("Failed to send email:", error);
        }
      );
  };


  return (
    <div id="contact" className="bg-[#111111] text-white py-16 px-2  sm:px-6 md:px-24">
      <h2 className="text-4xl md:text-5xl text-center font-bold mb-12">
        Get in <span className="text-[#ff5c8d]">Touch</span>
      </h2>

      <div className="flex flex-col-reverse lg:flex-row-reverse lg:grid lg:grid-cols-2 gap-12 ">
        {/* Left: Form */}
        <div
          data-aos="zoom-in"
          className=" bg-[#1a1a1d] p-8 md:p-12 rounded-[30px] shadow-md"
        >
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label
                htmlFor="from_email"
                className="block text-sm font-medium mb-2"
              >
                Your Email
              </label>
              <input
                type="email"
                id="from_email"
                name="from_email"
                value={formData.from_email}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 bg-[#333] text-white rounded-2xl focus:outline-none focus:ring-2 focus:ring-[#ff5c8d]"
              />
            </div>
            <div>
              <label
                htmlFor="message"
                className="block text-sm font-medium mb-2"
              >
                Message
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                rows="6"
                className="w-full px-4 py-3 bg-[#333] text-white rounded-2xl focus:outline-none focus:ring-2 focus:ring-[#ff5c8d]"
              ></textarea>
            </div>
            <button
              type="submit"
              disabled={isSending}
              className={`w-full px-6 py-3 rounded-2xl shadow-md ${
                isSending
                  ? "bg-gray-500 cursor-not-allowed"
                  : "bg-gradient-to-r from-[#c772f0] to-[#ff5c8d] hover:from-[#ff5c8d] hover:to-[#c772f0] transition"
              } text-white font-semibold`}
            >
              {isSending ? "Sending..." : "Send Message"}
            </button>
          </form>
          {successMessage && (
            <p className="text-sm mt-4 text-center text-green-400">
              {successMessage}
            </p>
          )}
        </div>

        {/* Right: Contact Details */}

        <div className=" flex flex-col justify-center">
          <div>
            <div className="flex justify-center items-start ">
              <Lottie
                animationData={contactAnimation}
                loop={true}
                className="w-80"
              />
            </div>

            <div className="flex flex-wrap items-center justify-center gap-4">
              <div
                onClick={() =>
                  window.open(
                    "https://www.google.com/maps?q=Dhaka,+Bangladesh",
                    "_blank"
                  )
                }
                className="flex items-center gap-2 cursor-pointer"
              >
                <MdLocationOn className="text-4xl text-[#ff5c8d]" />
                <div>
                  <p className="text-sm text-gray-300">Dhaka, Bangladesh</p>
                </div>
              </div>

              <div
                onClick={() =>
                  window.open("https://wa.me/+8801516143040", "_blank")
                }
                className="flex items-center gap-2 cursor-pointer"
              >
                <FaWhatsapp className="text-4xl text-[#ff5c8d]" />
                <div>
                  <p className="text-sm text-gray-300">+8801516143040</p>
                </div>
              </div>
              <div
                onClick={() =>
                  window.open("imon.dvp@gmail.com", "_blank")
                }
                className="flex items-center gap-2 cursor-pointer"
              >
                <MdEmail className="text-4xl text-[#ff5c8d]" />
                <div>
                  <p className="text-sm text-gray-300">
                    imon.dvp@gmail.com
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/*------ Optional: Lottie Animation-------- */}
    </div>
  )
}

export default Contact
