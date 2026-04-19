import React from 'react';

type PrivacyPolicyModalProps = {
  isOpen: boolean;
  onClose: () => void;
};

const PrivacyPolicyModal = ({ isOpen, onClose }: PrivacyPolicyModalProps) => {
  if (!isOpen) return null;

  return (
    <div 
      className="fixed inset-0 bg-black/50 bg-opacity-30 backdrop-blur-sm z-50 flex justify-center items-center"
      onClick={onClose}
    >
      <div 
        className="bg-white rounded-lg shadow-xl p-8 max-w-2xl w-full max-h-[80vh] overflow-y-auto"
        onClick={e => e.stopPropagation()}
      >
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-2xl font-bold text-gray-900">Privacy Policy</h2>
          <button onClick={onClose} className="text-gray-500 hover:text-gray-800 text-2xl">&times;</button>
        </div>
        <div className="text-gray-600 space-y-4">
          <p>This Privacy Policy describes how Orkeneo (&quot;we&quot;, &quot;us&quot;, or &quot;our&quot;) collects, uses, and discloses your information.</p>
          
          <h3 className="text-lg font-semibold text-gray-800">1. Information We Collect</h3>
          <p>We may collect personal information that you provide to us, such as your name, email address, phone number, and any other information you choose to provide.</p>
          
          <h3 className="text-lg font-semibold text-gray-800">2. How We Use Your Information</h3>
          <p>We may use the information we collect for various purposes, including to:</p>
          <ul className="list-disc list-inside space-y-2">
            <li>Provide, operate, and maintain our services</li>
            <li>Improve, personalize, and expand our services</li>
            <li>Understand and analyze how you use our services</li>
            <li>Develop new products, services, features, and functionality</li>
            <li>Communicate with you, either directly or through one of our partners</li>
            <li>Send you emails</li>
            <li>Find and prevent fraud</li>
          </ul>

          <h3 className="text-lg font-semibold text-gray-800">3. Information Sharing and Disclosure</h3>
          <p>We do not share your personal information with third parties except as described in this Privacy Policy.</p>
          
          <h3 className="text-lg font-semibold text-gray-800">4. Data Security</h3>
          <p>We use administrative, technical, and physical security measures to help protect your personal information. While we have taken reasonable steps to secure the personal information you provide to us, please be aware that despite our efforts, no security measures are perfect or impenetrable, and no method of data transmission can be guaranteed against any interception or other type of misuse.</p>

          <h3 className="text-lg font-semibold text-gray-800">5. Changes to This Privacy Policy</h3>
          <p>We may update this Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page.</p>

          <h3 className="text-lg font-semibold text-gray-800">Contact Us</h3>
          <p>If you have any questions about this Privacy Policy, please contact us.</p>
        </div>
        <div className="text-right mt-6">
          <button 
            onClick={onClose} 
            className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
};

export default PrivacyPolicyModal; 