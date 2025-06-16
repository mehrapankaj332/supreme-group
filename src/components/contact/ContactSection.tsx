const ContactSection = () => (
  <section
    id="contact"
    className="w-full bg-[#0067B1] py-[104px] px-4 md:px-16"
  >
    <div className="max-w-4xl mx-auto flex flex-col md:flex-row gap-8 md:gap-[72px] items-start text-white">
      <div className="flex-1 mb-8 md:mb-0">
        <h2 className="text-[40px] md:text-[48px] font-semibold mb-6 leading-tight">
          Get in touch
        </h2>
        <p className="mb-8 text-[24px] font-normal opacity-80">
          For general enquiries
        </p>
        <div className="mb-4">
          <span className="block text-base font-semibold mb-1">Address :</span>
          <span className="block text-base font-normal">
            110, 16th Road, Chembur, Mumbai - 400071
          </span>
        </div>
        <div className="mb-4">
          <span className="block text-base font-semibold mb-1">Phone :</span>
          <span className="block text-base font-normal">+91 22 25205822</span>
        </div>
        <div className="mb-4">
          <span className="block text-base font-semibold mb-1">Email :</span>
          <a
            href="mailto:info@supremegroup.co.in"
            className="block text-base font-normal underline"
          >
            info@supremegroup.co.in
          </a>
        </div>
      </div>
      <form className="flex-1 flex flex-col gap-6 w-full max-w-md mx-auto">
        <input
          type="text"
          placeholder="Full name"
          className="bg-transparent border-b border-white/60 placeholder-white/80 text-white px-2 py-3 focus:outline-none text-base"
          required
        />
        <input
          type="email"
          placeholder="Email"
          className="bg-transparent border-b border-white/60 placeholder-white/80 text-white px-2 py-3 focus:outline-none text-base"
          required
        />
        <input
          type="text"
          placeholder="Company"
          className="bg-transparent border-b border-white/60 placeholder-white/80 text-white px-2 py-3 focus:outline-none text-base"
          required
        />
        <textarea
          placeholder="Message"
          className="bg-transparent border-b border-white/60 placeholder-white/80 text-white px-2 py-3 focus:outline-none text-base"
          rows={3}
          required
        />
        <button
          type="submit"
          className="mt-4 bg-transparent border-1 border-amber-50 text-[#FFFFFF] px-8 py-2 rounded-full hover:bg-gray-100 hover:text-[#000000] transition w-[120px] self-start text-base"
        >
          Send
        </button>
      </form>
    </div>
  </section>
);

export default ContactSection;
