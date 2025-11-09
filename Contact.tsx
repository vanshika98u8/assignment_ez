import { useState } from 'react';
import { Mail, Phone, MapPin, Loader } from 'lucide-react';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    subject: '',
    message: '',
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<{ type: 'success' | 'error'; message: string } | null>(null);

  const handleChange = (e: { target: { name: any; value: any; }; }) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
  e.preventDefault();

  // ✅ 1️⃣ Frontend Validation
  if (!formData.name || !formData.email || !formData.message) {
    setSubmitStatus({ type: 'error', message: 'Please fill all required fields.' });
    return;
  }

  // ✅ 2️⃣ Email Format Validation
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(formData.email)) {
    setSubmitStatus({ type: 'error', message: 'Please enter a valid email address.' });
    return;
  }

  setIsSubmitting(true);
  setSubmitStatus(null);

  try {
   
    const response = await fetch('https://vernanbackend.ezlab.in/api/contact-us/', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        name: formData.name,
        email: formData.email,
        phone: formData.phone,
        message: formData.message,
      }),
    });

    if (response.ok) {
      
      setSubmitStatus({ type: 'success', message: 'Form Submitted' });
      setFormData({
        name: '',
        email: '',
        phone: '',
        company: '',
        subject: '',
        message: '',
      });
    } else {
      const errorData = await response.json();
      setSubmitStatus({
        type: 'error',
        message: errorData.message || 'Something went wrong. Please try again.',
      });
    }
  } catch (error) {
 
    setSubmitStatus({
      type: 'error',
      message: 'Network error. Please try again later.',
    });
  } finally {
    setIsSubmitting(false);
  }
};


  const contactInfo = [
    {
      icon: Mail,
      label: 'Email',
      value: 'vernita@varnanfilms.co.in',
      link: 'mailto:vernita@varnanfilms.co.in',
    },
    {
      icon: Phone,
      label: 'Phone',
      value: '+91 98736 84567',
      link: 'tel:+91 98736 84567',
    },
    {
      icon: MapPin,
      label: 'Location',
      value: 'India',
      link: '#',
    },
  ];

  return (
    <div className="w-full">
      <div className="max-w-7xl mx-auto px-8 py-20">
        <h1 className="text-5xl font-serif font-bold text-gray-800 mb-4 text-center">
          Get In Touch
        </h1>
        <p className="text-center text-lg text-gray-600 mb-16 font-serif">
          Have a project in mind? We'd love to hear from you
        </p>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
          {contactInfo.map((info, index) => {
            const IconComponent = info.icon;
            return (
              <a
                key={index}
                href={info.link}
                className="bg-white/60 backdrop-blur-sm rounded-lg p-8 shadow-lg hover:shadow-xl hover:bg-white/80 transition-all duration-300 text-center group"
              >
                <div className="inline-block p-3 bg-[#ff5722]/10 rounded-lg mb-4 group-hover:bg-[#ff5722]/20 transition-colors">
                  <IconComponent className="text-[#ff5722]" size={28} />
                </div>
                <h3 className="text-lg font-bold text-gray-800 mb-2">{info.label}</h3>
                <p className="text-gray-600 font-serif">{info.value}</p>
              </a>
            );
          })}
        </div>

        <div className="bg-white/60 backdrop-blur-sm rounded-lg p-12 shadow-lg">
          <h2 className="text-3xl font-serif font-bold text-gray-800 mb-8 text-center">
            Join the Story
          </h2>
            
          {submitStatus && (
            <div
              className={`mb-6 p-4 rounded-lg text-center font-serif ${
                submitStatus.type === 'success'
                  ? 'bg-green-100 text-green-800'
                  : 'bg-red-100 text-red-800'
              }`}
            >
              {submitStatus.message}
            </div>
          )}

          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-bold text-gray-800 mb-2">
                  Name *
                </label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#ff5722]"
                  placeholder="Your name"
                />
              </div>

              <div>
                <label className="block text-sm font-bold text-gray-800 mb-2">
                  Email *
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#ff5722]"
                  placeholder="your@email.com"
                />
              </div>

              <div>
                <label className="block text-sm font-bold text-gray-800 mb-2">
                  Phone
                </label>
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#ff5722]"
                  placeholder="+91 XXXXX-XXXXX"
                />
              </div>

              <div>
                <label className="block text-sm font-bold text-gray-800 mb-2">
                  Company
                </label>
                <input
                  type="text"
                  name="company"
                  value={formData.company}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#ff5722]"
                  placeholder="Your company"
                />
              </div>
            </div>

            <div>
              <label className="block text-sm font-bold text-gray-800 mb-2">
                Subject *
              </label>
              <input
                type="text"
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#ff5722]"
                placeholder="What is this about?"
              />
            </div>

            <div>
              <label className="block text-sm font-bold text-gray-800 mb-2">
                Message *
              </label>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                rows={6}
                className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#ff5722] font-serif"
                placeholder="Tell us about your project..."
              ></textarea>
            </div>

            <div className="text-center">
              <button
                type="submit"
                disabled={isSubmitting}
                className="bg-[#ff5722] text-white px-12 py-3 rounded-full text-lg font-medium hover:bg-[#f4511e] transition-colors disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2 mx-auto"
              >
                {isSubmitting ? (
                  <>
                    <Loader size={20} className="animate-spin" />
                    Sending...
                  </>
                ) : (
                  'Send Message'
                )}
              </button>
            </div>
          </form>
        </div>
        
      </div>
      <img src="Footer Vector.png" alt="Creative Illustration" className="width: 1080;
                                                                      height: 1080;
                                                                      top: 540px;
                                                                      left: -542px;
                                                                      angle: 0 deg;
                                                                      opacity: 1; " />
    </div>
  );
}
