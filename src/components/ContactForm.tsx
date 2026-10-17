import React, { useState } from 'react';
import { 
  Send, 
  CheckCircle2, 
  Mail, 
  AlertCircle, 
  Copy, 
  Check, 
  ExternalLink
} from 'lucide-react';
import { BusinessType, InquiryType, ContactFormData } from '../types';

interface ContactFormProps {
  initialInquiryType?: InquiryType;
  initialBusinessType?: BusinessType;
}

export const ContactForm: React.FC<ContactFormProps> = ({
  initialInquiryType = 'demo',
  initialBusinessType = 'cafe'
}) => {
  const [formData, setFormData] = useState<ContactFormData>({
    fullName: '',
    businessName: '',
    businessType: initialBusinessType,
    email: '',
    phone: '',
    inquiryType: initialInquiryType,
    message: ''
  });

  const [errors, setErrors] = useState<Partial<Record<keyof ContactFormData, string>>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [copiedEmail, setCopiedEmail] = useState(false);

  // Synchronize when initial props change
  React.useEffect(() => {
    if (initialInquiryType) {
      setFormData(prev => ({ ...prev, inquiryType: initialInquiryType }));
    }
  }, [initialInquiryType]);

  React.useEffect(() => {
    if (initialBusinessType) {
      setFormData(prev => ({ ...prev, businessType: initialBusinessType }));
    }
  }, [initialBusinessType]);

  const validate = (): boolean => {
    const errs: Partial<Record<keyof ContactFormData, string>> = {};
    if (!formData.fullName.trim()) errs.fullName = 'Please enter your full name';
    if (!formData.businessName.trim()) errs.businessName = 'Please enter your business or project name';
    if (!formData.email.trim()) {
      errs.email = 'Please provide a valid email address';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      errs.email = 'Please provide a valid email address (e.g. name@domain.com)';
    }
    if (!formData.message.trim()) errs.message = 'Please provide a short note about your inquiry';

    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    setIsSubmitting(true);

    // Prepare mailto link payload for genuine transparent delivery
    const subject = encodeURIComponent(
      `[QR Loyalty Inquiry] ${formData.inquiryType.toUpperCase()} - ${formData.businessName}`
    );
    const body = encodeURIComponent(
      `Full Name: ${formData.fullName}\n` +
      `Business: ${formData.businessName} (${formData.businessType})\n` +
      `Email: ${formData.email}\n` +
      `Phone: ${formData.phone || 'Not provided'}\n` +
      `Inquiry Type: ${formData.inquiryType}\n\n` +
      `Message:\n${formData.message}\n`
    );

    const mailtoUrl = `mailto:zenithforgehub@gmail.com?subject=${subject}&body=${body}`;

    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);
      // Attempt opening the email client automatically
      try {
        window.location.href = mailtoUrl;
      } catch {
        // Fallback handled by the UI
      }
    }, 700);
  };

  const handleCopyEmail = () => {
    navigator.clipboard.writeText('zenithforgehub@gmail.com');
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2000);
  };

  return (
    <section id="contact" className="py-20 lg:py-28 bg-[#FAF8F3] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#F2EEE5] border border-[#E6E4DC] text-xs font-semibold text-[#29483D]">
            <Mail className="w-3.5 h-3.5 text-[#C6A875]" />
            <span>Direct Merchant Inquiry</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-normal text-[#29332E] tracking-tight">
            Let’s discuss your <br className="hidden sm:inline" />
            <span className="font-serif italic text-[#29483D]">loyalty experience.</span>
          </h2>

          <p className="text-base sm:text-lg text-[#747B73] font-normal leading-relaxed">
            Request a guided demonstration or ask about the introductory 15-day merchant trial. We respond promptly.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 max-w-5xl mx-auto items-start">
          
          {/* Left Column: Contact Cards & Trust Details */}
          <div className="lg:col-span-5 space-y-6">
            
            <div className="p-6 rounded-3xl bg-[#FFFFFF] border border-[#E6E4DC] shadow-xs space-y-4">
              <h3 className="text-base font-bold text-[#29332E]">
                Official Contact Channel
              </h3>
              <p className="text-xs text-[#747B73] leading-relaxed">
                You can reach the Zenith Forge Hub engineering team directly via email or GitHub.
              </p>

              <div className="p-3.5 rounded-2xl bg-[#FAF8F3] border border-[#E6E4DC] flex items-center justify-between">
                <div className="flex items-center gap-2.5 truncate">
                  <Mail className="w-4 h-4 text-[#C6A875] shrink-0" />
                  <span className="text-xs font-mono font-medium text-[#29332E] truncate">
                    zenithforgehub@gmail.com
                  </span>
                </div>
                <button
                  onClick={handleCopyEmail}
                  className="p-1.5 rounded-lg text-[#747B73] hover:text-[#29332E] hover:bg-[#F2EEE5] transition-colors cursor-pointer shrink-0"
                  title="Copy email address"
                  aria-label="Copy email"
                >
                  {copiedEmail ? <Check className="w-4 h-4 text-[#91A894]" /> : <Copy className="w-4 h-4" />}
                </button>
              </div>

              <div className="pt-2 border-t border-[#F2EEE5] space-y-2 text-xs text-[#747B73]">
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#91A894]" />
                  <span>Response within 24 business hours</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#91A894]" />
                  <span>Custom demo tailored to your venue</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#91A894]" />
                  <span>Zero setup commitment required</span>
                </div>
              </div>
            </div>

            {/* Trial transparent reminder */}
            <div className="p-5 rounded-3xl bg-[#F2EEE5] border border-[#E6E4DC] text-xs space-y-2 text-[#747B73]">
              <span className="font-bold text-[#29332E] block text-sm">
                About the 15-Day Trial
              </span>
              <p className="leading-relaxed">
                The ZFH team has planned an introductory 15-day free trial for qualifying local businesses. Trial availability is subject to confirmation and onboarding arrangements.
              </p>
            </div>

          </div>

          {/* Right Column: Form Interface */}
          <div className="lg:col-span-7 bg-[#FFFFFF] rounded-3xl border border-[#E6E4DC] p-6 sm:p-8 shadow-sm">
            
            {submitted ? (
              <div className="py-8 text-center space-y-5 animate-fadeIn">
                <div className="w-16 h-16 mx-auto rounded-3xl bg-[#29483D] flex items-center justify-center text-[#FAF8F3] shadow-md shadow-[#29483D]/20">
                  <CheckCircle2 className="w-8 h-8 text-[#C6A875]" />
                </div>

                <div className="space-y-2">
                  <h3 className="text-xl font-bold text-[#29332E]">
                    Inquiry Prepared!
                  </h3>
                  <p className="text-xs text-[#747B73] max-w-md mx-auto leading-relaxed">
                    Your inquiry details have been formatted for <strong className="text-[#29332E]">zenithforgehub@gmail.com</strong>. If your email application did not launch automatically, you can open your client directly below.
                  </p>
                </div>

                <div className="p-4 bg-[#FAF8F3] rounded-2xl border border-[#E6E4DC] text-left text-xs space-y-2 font-mono max-w-md mx-auto">
                  <p><span className="text-[#747B73]">Recipient:</span> zenithforgehub@gmail.com</p>
                  <p><span className="text-[#747B73]">Business:</span> {formData.businessName}</p>
                  <p><span className="text-[#747B73]">Inquiry:</span> {formData.inquiryType}</p>
                </div>

                <div className="flex flex-col sm:flex-row items-center justify-center gap-3 pt-2">
                  <a
                    href={`mailto:zenithforgehub@gmail.com?subject=${encodeURIComponent(`[QR Loyalty Inquiry] ${formData.inquiryType.toUpperCase()} - ${formData.businessName}`)}`}
                    className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-xl text-xs font-semibold text-[#FAF8F3] bg-[#29483D] hover:bg-[#1E372E] transition-colors"
                  >
                    <span>Launch Email App</span>
                    <ExternalLink className="w-3.5 h-3.5 text-[#C6A875]" />
                  </a>

                  <button
                    onClick={() => {
                      setSubmitted(false);
                      setFormData({
                        fullName: '',
                        businessName: '',
                        businessType: 'cafe',
                        email: '',
                        phone: '',
                        inquiryType: 'demo',
                        message: ''
                      });
                    }}
                    className="w-full sm:w-auto px-4 py-2.5 rounded-xl text-xs font-semibold text-[#747B73] hover:text-[#29332E] hover:bg-[#F2EEE5] transition-colors cursor-pointer"
                  >
                    Send another message
                  </button>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5" noValidate>
                
                {/* Inquiry Type Radio / Pill Selector */}
                <div>
                  <label className="text-xs font-bold text-[#29332E] block mb-2">
                    How can we help you? *
                  </label>
                  <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                    {(['demo', 'trial', 'question', 'collaboration'] as const).map((type) => {
                      const labels: Record<InquiryType, string> = {
                        demo: 'Live Demo',
                        trial: '15-Day Trial',
                        question: 'Question',
                        collaboration: 'Collaborate'
                      };
                      return (
                        <button
                          key={type}
                          type="button"
                          onClick={() => setFormData({ ...formData, inquiryType: type })}
                          className={`py-2 px-2.5 rounded-xl text-xs font-semibold border transition-all cursor-pointer text-center ${
                            formData.inquiryType === type
                              ? 'bg-[#29483D] text-[#FAF8F3] border-[#29483D] shadow-xs'
                              : 'bg-[#FAF8F3] text-[#747B73] border-[#E6E4DC] hover:border-[#91A894]'
                          }`}
                        >
                          {labels[type]}
                        </button>
                      );
                    })}
                  </div>
                </div>

                {/* Name & Business Name Row */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="text-xs font-bold text-[#29332E] block mb-1">
                      Your Full Name *
                    </label>
                    <input
                      type="text"
                      value={formData.fullName}
                      onChange={(e) => {
                        setFormData({ ...formData, fullName: e.target.value });
                        if (errors.fullName) setErrors({ ...errors, fullName: undefined });
                      }}
                      placeholder="e.g. Maya Chen"
                      className={`w-full px-3.5 py-2.5 rounded-xl border text-xs sm:text-sm text-[#29332E] focus:outline-none focus:ring-2 focus:ring-[#29483D] transition-all ${
                        errors.fullName ? 'border-red-500 bg-red-50/20' : 'border-[#E6E4DC] bg-[#FAF8F3]'
                      }`}
                    />
                    {errors.fullName && (
                      <p className="text-[11px] text-red-600 mt-1 flex items-center gap-1">
                        <AlertCircle className="w-3 h-3" />
                        {errors.fullName}
                      </p>
                    )}
                  </div>

                  <div>
                    <label className="text-xs font-bold text-[#29332E] block mb-1">
                      Business or Project Name *
                    </label>
                    <input
                      type="text"
                      value={formData.businessName}
                      onChange={(e) => {
                        setFormData({ ...formData, businessName: e.target.value });
                        if (errors.businessName) setErrors({ ...errors, businessName: undefined });
                      }}
                      placeholder="e.g. Copper Beech Roasters"
                      className={`w-full px-3.5 py-2.5 rounded-xl border text-xs sm:text-sm text-[#29332E] focus:outline-none focus:ring-2 focus:ring-[#29483D] transition-all ${
                        errors.businessName ? 'border-red-500 bg-red-50/20' : 'border-[#E6E4DC] bg-[#FAF8F3]'
                      }`}
                    />
                    {errors.businessName && (
                      <p className="text-[11px] text-red-600 mt-1 flex items-center gap-1">
                        <AlertCircle className="w-3 h-3" />
                        {errors.businessName}
                      </p>
                    )}
                  </div>
                </div>

                {/* Business Type & Phone Row */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="text-xs font-bold text-[#29332E] block mb-1">
                      Business Type
                    </label>
                    <select
                      value={formData.businessType}
                      onChange={(e) => setFormData({ ...formData, businessType: e.target.value as BusinessType })}
                      className="w-full px-3.5 py-2.5 rounded-xl border border-[#E6E4DC] bg-[#FAF8F3] text-xs sm:text-sm text-[#29332E] focus:outline-none focus:ring-2 focus:ring-[#29483D]"
                    >
                      <option value="cafe">Cafe or Coffee Shop</option>
                      <option value="restaurant">Restaurant or Bistro</option>
                      <option value="salon">Salon, Spa or Beauty</option>
                      <option value="retail">Local Shop or Bakery</option>
                      <option value="other">Other Business</option>
                    </select>
                  </div>

                  <div>
                    <label className="text-xs font-bold text-[#29332E] block mb-1">
                      Phone Number <span className="text-[10px] text-[#747B73] font-normal">(Optional)</span>
                    </label>
                    <input
                      type="tel"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      placeholder="e.g. +1 555-0199"
                      className="w-full px-3.5 py-2.5 rounded-xl border border-[#E6E4DC] bg-[#FAF8F3] text-xs sm:text-sm text-[#29332E] focus:outline-none focus:ring-2 focus:ring-[#29483D]"
                    />
                  </div>
                </div>

                {/* Email Address */}
                <div>
                  <label className="text-xs font-bold text-[#29332E] block mb-1">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    value={formData.email}
                    onChange={(e) => {
                      setFormData({ ...formData, email: e.target.value });
                      if (errors.email) setErrors({ ...errors, email: undefined });
                    }}
                    placeholder="you@yourbusiness.com"
                    className={`w-full px-3.5 py-2.5 rounded-xl border text-xs sm:text-sm text-[#29332E] focus:outline-none focus:ring-2 focus:ring-[#29483D] transition-all ${
                      errors.email ? 'border-red-500 bg-red-50/20' : 'border-[#E6E4DC] bg-[#FAF8F3]'
                    }`}
                  />
                  {errors.email && (
                    <p className="text-[11px] text-red-600 mt-1 flex items-center gap-1">
                      <AlertCircle className="w-3 h-3" />
                      {errors.email}
                    </p>
                  )}
                </div>

                {/* Message */}
                <div>
                  <label className="text-xs font-bold text-[#29332E] block mb-1">
                    Message or Questions *
                  </label>
                  <textarea
                    rows={3}
                    value={formData.message}
                    onChange={(e) => {
                      setFormData({ ...formData, message: e.target.value });
                      if (errors.message) setErrors({ ...errors, message: undefined });
                    }}
                    placeholder="Tell us a little about your venue, current loyalty setup, or timeline..."
                    className={`w-full px-3.5 py-2.5 rounded-xl border text-xs sm:text-sm text-[#29332E] focus:outline-none focus:ring-2 focus:ring-[#29483D] transition-all ${
                      errors.message ? 'border-red-500 bg-red-50/20' : 'border-[#E6E4DC] bg-[#FAF8F3]'
                    }`}
                  />
                  {errors.message && (
                    <p className="text-[11px] text-red-600 mt-1 flex items-center gap-1">
                      <AlertCircle className="w-3 h-3" />
                      {errors.message}
                    </p>
                  )}
                </div>

                {/* Privacy Notice & Submit Button */}
                <div className="space-y-3 pt-2">
                  <p className="text-[11px] text-[#747B73] leading-relaxed">
                    Privacy Notice: Your email and business details will only be used by Zenith Forge Hub to respond to your product demonstration inquiry. No marketing spam.
                  </p>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full inline-flex items-center justify-center gap-2 py-3.5 px-6 rounded-xl text-sm font-semibold text-[#FAF8F3] bg-[#29483D] hover:bg-[#1E372E] active:scale-[0.99] transition-all shadow-sm cursor-pointer disabled:opacity-70"
                  >
                    {isSubmitting ? (
                      <>
                        <span className="w-4 h-4 border-2 border-[#FAF8F3] border-t-transparent rounded-full animate-spin" />
                        <span>Formatting Inquiry...</span>
                      </>
                    ) : (
                      <>
                        <span>Submit Inquiry to ZFH</span>
                        <Send className="w-4 h-4 text-[#C6A875]" />
                      </>
                    )}
                  </button>
                </div>

              </form>
            )}

          </div>

        </div>

      </div>
    </section>
  );
};
