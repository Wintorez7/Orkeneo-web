"use client";

import React, { useState } from 'react';
import { Button } from '../reusable/button';
import axios, { AxiosError } from 'axios';
import { toast } from 'react-hot-toast';
import { useRouter } from 'next/navigation';
import { motion, AnimatePresence } from 'framer-motion';

interface BookDemoModalProps {
  isOpen: boolean;
  onClose: () => void;
}

interface FormData {
  name: string;
  company_name: string;
  email: string;
  contact_number: string;
  number_of_locations: string;
}

type FormErrors = Partial<Record<keyof FormData, string>>;

export const BookDemoModal: React.FC<BookDemoModalProps> = ({ isOpen, onClose }) => {
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(false);
  const [formData, setFormData] = useState<FormData>({
    name: '',
    company_name: '',
    email: '',
    contact_number: '',
    number_of_locations: '',
  });
  const [errors, setErrors] = useState<FormErrors>({});

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
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
    
    if (!formData.name.trim()) {
      newErrors.name = 'Name is required.';
    }
    
    if (!formData.company_name.trim()) {
      newErrors.company_name = 'Company name is required.';
    }
    
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required.';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Email is invalid.';
    }
    
    if (!formData.contact_number.trim()) {
      newErrors.contact_number = 'Contact number is required.';
    } else if (!/^[\d\s\-\+\(\)]+$/.test(formData.contact_number)) {
      newErrors.contact_number = 'Please enter a valid contact number.';
    }
    
    if (!formData.number_of_locations.trim()) {
      newErrors.number_of_locations = 'Number of locations is required.';
    } else if (isNaN(Number(formData.number_of_locations)) || Number(formData.number_of_locations) < 1) {
      newErrors.number_of_locations = 'Please enter a valid number (at least 1).';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (isLoading) return;

    const isFormValid = validateForm();
    if (!isFormValid) {
      return;
    }

    try {
      setIsLoading(true);
      const response = await axios.post(
        `${process.env.NEXT_PUBLIC_API_URL}/early-access`,
        {
          ...formData,
          source: 'website'
        }
      );

      if (response.data.success !== false) {
        toast.success('Thank you! We\'ll be in touch soon.');
        // Reset form
        setFormData({
          name: '',
          company_name: '',
          email: '',
          contact_number: '',
          number_of_locations: '',
        });
        setErrors({});
        onClose();
        // Small delay to ensure modal closes before navigation
        setTimeout(() => {
          // Redirect to get-started page
          router.push('/get-started');
        }, 300);
      } else {
        toast.error(response.data.message || 'Failed to submit. Please try again.');
      }
    } catch (error) {
      const axiosError = error as AxiosError<{ message?: string }>;
      toast.error(axiosError.response?.data?.message || 'Failed to submit. Please try again later.');
      console.error('Error submitting form:', error);
    } finally {
      setIsLoading(false);
    }
  };

  const handleBackdropClick = (e: React.MouseEvent<HTMLDivElement>) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          <motion.div
            className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex justify-center items-center p-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={handleBackdropClick}
          >
            <motion.div
              className="bg-white rounded-lg shadow-xl w-full max-w-md"
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.95, opacity: 0 }}
              transition={{ type: "spring", duration: 0.3 }}
              onClick={(e) => e.stopPropagation()}
            >
              <div className="p-6">
                <div className="flex justify-between items-center mb-6">
                  <h2 className="text-2xl font-bold text-gray-900">Get Early Access</h2>
                  <button
                    onClick={onClose}
                    className="text-gray-500 hover:text-gray-800 text-2xl leading-none"
                    disabled={isLoading}
                  >
                    &times;
                  </button>
                </div>

                <p className="text-gray-600 mb-6">
                  Fill out the form below and we&apos;ll get back to you soon.
                </p>

                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1" htmlFor="name">
                      Full Name <span className="text-red-500">*</span>
                    </label>
                    <input
                      id="name"
                      name="name"
                      type="text"
                      value={formData.name}
                      onChange={handleInputChange}
                      placeholder="John Doe"
                      className="w-full border border-gray-200 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                      disabled={isLoading}
                    />
                    {errors.name && <p className="text-red-500 text-sm mt-1">{errors.name}</p>}
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1" htmlFor="company_name">
                      Business/Kitchen Name <span className="text-red-500">*</span>
                    </label>
                    <input
                      id="company_name"
                      name="company_name"
                      type="text"
                      value={formData.company_name}
                      onChange={handleInputChange}
                      placeholder="FoodClub"
                      className="w-full border border-gray-200 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                      disabled={isLoading}
                    />
                    {errors.company_name && <p className="text-red-500 text-sm mt-1">{errors.company_name}</p>}
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1" htmlFor="number_of_locations">
                      Number of Locations <span className="text-red-500">*</span>
                    </label>
                    <input
                      id="number_of_locations"
                      name="number_of_locations"
                      type="number"
                      min="1"
                      required
                      value={formData.number_of_locations}
                      onChange={handleInputChange}
                      placeholder="e.g., 5"
                      className="w-full border border-gray-200 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                      disabled={isLoading}
                    />
                    {errors.number_of_locations && <p className="text-red-500 text-sm mt-1">{errors.number_of_locations}</p>}
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1" htmlFor="email">
                      Email <span className="text-red-500">*</span>
                    </label>
                    <input
                      id="email"
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      placeholder="john.doe@acmecorp.com"
                      className="w-full border border-gray-200 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                      disabled={isLoading}
                    />
                    {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email}</p>}
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1" htmlFor="contact_number">
                      Contact Number <span className="text-red-500">*</span>
                    </label>
                    <input
                      id="contact_number"
                      name="contact_number"
                      type="tel"
                      value={formData.contact_number}
                      onChange={handleInputChange}
                      placeholder="+1234567890"
                      className="w-full border border-gray-200 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                      disabled={isLoading}
                    />
                    {errors.contact_number && <p className="text-red-500 text-sm mt-1">{errors.contact_number}</p>}
                  </div>

                  <div className="flex gap-3 pt-4">
                    <Button
                      type="button"
                      variant="outline"
                      size="md"
                      className="flex-1"
                      onClick={onClose}
                      disabled={isLoading}
                    >
                      Cancel
                    </Button>
                    <Button
                      type="submit"
                      variant="default"
                      size="md"
                      className="flex-1"
                      disabled={isLoading}
                      isLoading={isLoading}
                    >
                      Submit
                    </Button>
                  </div>
                </form>
              </div>
            </motion.div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};

