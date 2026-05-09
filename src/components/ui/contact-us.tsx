"use client";

import React, { useState } from 'react';
import Image from 'next/image';
import { Button } from '../reusable/button';
import axios from 'axios';
import { ContactFormData, ContactApiResponse } from '@/lib/type';
import { toast } from 'react-hot-toast';
import PrivacyPolicyModal from './PrivacyPolicyModal';

type FormErrors = Partial<Record<keyof Omit<ContactFormData, 'company'>, string>>;

const ContactUs = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [formData, setFormData] = useState<Omit<ContactFormData, 'company'>>({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: '',
  });
  const [errors, setErrors] = useState<FormErrors>({});
  const [privacyChecked, setPrivacyChecked] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
    if (errors[name as keyof FormErrors]) {
      setErrors(prev => ({
        ...prev,
        [name]: undefined
      }));
    }
  };

  const validateForm = (): boolean => {
    const newErrors: FormErrors = {};
    if (!formData.name.trim()) newErrors.name = 'Full name is required.';
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required.';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Email is invalid.';
    }
    if (!formData.phone.trim()) {
      newErrors.phone = 'Phone number is required.';
    } else if (!/^\d{10}$/.test(formData.phone)) {
      newErrors.phone = 'Phone number must be 10 digits.';
    }
    if (!formData.subject.trim()) newErrors.subject = 'Subject is required.';
    if (!formData.message.trim()) {
      newErrors.message = 'Message is required.';
    } else if (formData.message.length < 10) {
      newErrors.message = 'Message must be at least 10 characters long.';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (isLoading) return;

    const isFormValid = validateForm();
    if (!privacyChecked) {
      toast.error('You must agree to the privacy policy.');
    }

    if (!isFormValid || !privacyChecked) {
      return;
    }

    try {
      setIsLoading(true);
      const response = await axios.post<ContactApiResponse>(
        `${process.env.NEXT_PUBLIC_API_URL}/contacts`,
        {...formData, company: ''}
      );

      if (response.data.success) {
        toast.success('Message sent successfully!');
        // Reset form
        setFormData({
          name: '',
          email: '',
          phone: '',
          subject: '',
          message: '',
        });
        setPrivacyChecked(false);
        setErrors({});
      } else {
        toast.error(response.data.message || 'Failed to send message');
      }
    } catch (error) {
      toast.error('Failed to send message. Please try again later.');
      console.error('Error sending message:', error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <>
      <div className="min-h-screen flex items-center justify-center bg-transparent py-16">
        <div className="w-full max-w-6xl mx-auto bg-white rounded-[32px] shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-slate-100 flex flex-col md:flex-row overflow-hidden px-0">
          {/* Left: Image */}
          <div className="md:w-1/2 w-full md:max-w-[400px] h-[300px] md:h-auto relative">
            <Image
              src="/images/contact.png"
              alt="Contact"
              fill
              className="w-full h-full object-cover rounded-xl"
            />
          </div>
          {/* Right: Form */}
          <div className="md:w-1/2 w-full p-8 md:p-12 lg:p-16 flex flex-col justify-center">
            <h2 className="text-3xl font-black text-[#111827] mb-3 tracking-tight">Contact us</h2>
            <p className="text-[#4B5563] text-lg mb-8">Our friendly team would love to hear from you.</p>
            <form onSubmit={handleSubmit} className="space-y-4">
              {/* Name fields */}
              <div className="flex flex-col md:flex-row gap-4">
                <div className="w-full">
                  <label className="block text-sm font-semibold text-[#111827] mb-2" htmlFor="name">Full name</label>
                  <input 
                    id="name" 
                    name="name"
                    type="text" 
                    value={formData.name}
                    onChange={handleInputChange}
                    placeholder="John Doe" 
                    className="w-full border border-gray-200 bg-gray-50/50 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-[#2F5BFF] focus:border-transparent transition-all" 
                  />
                  {errors.name && <p className="text-red-500 text-sm mt-1">{errors.name}</p>}
                </div>
              </div>

              <div>
                <label className="block text-sm font-semibold text-[#111827] mb-2" htmlFor="email">Email</label>
                <input 
                  id="email" 
                  name="email"
                  type="email" 
                  value={formData.email}
                  onChange={handleInputChange}
                  placeholder="you@company.com" 
                  className="w-full border border-gray-200 bg-gray-50/50 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-[#2F5BFF] focus:border-transparent transition-all" 
                />
                {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email}</p>}
              </div>

              <div>
                <label className="block text-sm font-semibold text-[#111827] mb-2" htmlFor="phone">Phone number</label>
                <div className="flex">
                  <select 
                    className="border border-gray-200 border-r-0 bg-gray-50/50 rounded-l-xl px-3 py-3 text-sm text-[#4B5563] focus:outline-none focus:ring-2 focus:ring-[#2F5BFF] focus:border-transparent transition-all"
                  >
                    <option>IN</option>
                    <option>US</option>
                  </select>
                  <input 
                    id="phone" 
                    name="phone"
                    type="tel" 
                    value={formData.phone}
                    onChange={handleInputChange}
                    placeholder="+1 (555) 000-0000" 
                    className="w-full border border-gray-200 bg-gray-50/50 rounded-r-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-[#2F5BFF] focus:border-transparent transition-all" 
                  />
                </div>
                {errors.phone && <p className="text-red-500 text-sm mt-1">{errors.phone}</p>}
              </div>

              {/* <div>
                <label className="block text-sm font-medium text-gray-700 mb-1" htmlFor="company">Company</label>
                <input 
                  id="company" 
                  name="company"
                  type="text" 
                  value={formData.company}
                  onChange={handleInputChange}
                  placeholder="Your company name" 
                  required
                  className="w-full border border-gray-200 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500" 
                />
              </div> */}

              <div>
                <label className="block text-sm font-semibold text-[#111827] mb-2" htmlFor="subject">Subject</label>
                <input 
                  id="subject" 
                  name="subject"
                  type="text" 
                  value={formData.subject}
                  onChange={handleInputChange}
                  placeholder="What's this about?" 
                  className="w-full border border-gray-200 bg-gray-50/50 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-[#2F5BFF] focus:border-transparent transition-all" 
                />
                {errors.subject && <p className="text-red-500 text-sm mt-1">{errors.subject}</p>}
              </div>

              <div>
                <label className="block text-sm font-semibold text-[#111827] mb-2" htmlFor="message">Message</label>
                <textarea 
                  id="message" 
                  name="message"
                  rows={4} 
                  value={formData.message}
                  onChange={handleInputChange}
                  placeholder="Your message here..." 
                  className="w-full border border-gray-200 bg-gray-50/50 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-[#2F5BFF] focus:border-transparent transition-all resize-none"
                ></textarea>
                {errors.message && <p className="text-red-500 text-sm mt-1">{errors.message}</p>}
              </div>

              <div className="flex items-center pt-2">
                <input 
                  id="privacy" 
                  type="checkbox" 
                  checked={privacyChecked}
                  onChange={(e) => setPrivacyChecked(e.target.checked)}
                  className="h-4 w-4 text-[#2F5BFF] border-gray-300 rounded focus:ring-[#2F5BFF]" 
                />
                <label htmlFor="privacy" className="ml-3 text-sm font-medium text-[#4B5563]">
                  You agree to our friendly <button type="button" onClick={() => setIsModalOpen(true)} className="underline text-[#2F5BFF] hover:text-blue-800 transition-colors">privacy policy</button>.
                </label>
              </div>

              <Button 
                variant="default" 
                type="submit"
                size="lg" 
                className="w-full bg-[#2F5BFF] hover:bg-blue-700 shadow-lg hover:shadow-blue-500/25 transition-all text-[15px] py-6 mt-4"
                disabled={isLoading}
              >
                {isLoading ? (
                  <div className="flex items-center justify-center">
                    <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin mr-2"></div>
                    Sending...
                  </div>
                ) : (
                  'Send message'
                )}
              </Button>
            </form>
          </div>
        </div>
      </div>
      <PrivacyPolicyModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </>
  );
}

export default ContactUs;
