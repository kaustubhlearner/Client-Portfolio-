'use client';

import { useState } from 'react';

const initialFormData = {
  name: '',
  company: '',
  city: '',
  state: '',
  contact: '',
  email: '',
  message: '',
};

export default function ContactForm() {
  const [formData, setFormData] = useState(initialFormData);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData((current) => ({ ...current, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const message = [
      'New enquiry from the portfolio website',
      '',
      `Name: ${formData.name}`,
      `Company: ${formData.company || 'Not provided'}`,
      `City: ${formData.city || 'Not provided'}`,
      `State: ${formData.state || 'Not provided'}`,
      `Contact: ${formData.contact}`,
      `Email: ${formData.email}`,
      '',
      `Message: ${formData.message || 'Not provided'}`,
    ].join('\n');

    window.open(`https://wa.me/918239638262?text=${encodeURIComponent(message)}`, '_blank', 'noopener,noreferrer');
    setFormData(initialFormData);
  };

  return (
    <section id="contact" className="flex min-h-screen scroll-mt-24 items-center justify-center bg-gray-50 px-4 py-16">
      <form
        onSubmit={handleSubmit}
        className="w-full max-w-2xl space-y-8 rounded-3xl border border-gray-200 bg-white/80 p-6 shadow-xl backdrop-blur-lg sm:p-10"
      >
        <div>
          <h2 className="mb-4 text-center text-4xl font-bold text-gray-900">Contact Us</h2>
          <p className="text-center text-gray-500">
            Fill out the form and your enquiry will open directly in WhatsApp.
          </p>
        </div>

        <div>
          <label htmlFor="name" className="mb-2 block font-medium text-gray-700">Full Name</label>
          <input id="name" type="text" name="name" value={formData.name} onChange={handleChange} placeholder="John Doe" required className="w-full rounded-lg border border-gray-300 px-4 py-3 text-gray-900 outline-none focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200" />
        </div>

        <div>
          <label htmlFor="company" className="mb-2 block font-medium text-gray-700">Company Name</label>
          <input id="company" type="text" name="company" value={formData.company} onChange={handleChange} placeholder="ABC Pvt Ltd" className="w-full rounded-lg border border-gray-300 px-4 py-3 text-gray-900 outline-none focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200" />
        </div>

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
          <div>
            <label htmlFor="city" className="mb-2 block font-medium text-gray-700">City</label>
            <input id="city" type="text" name="city" value={formData.city} onChange={handleChange} placeholder="Jaipur" className="w-full rounded-lg border border-gray-300 px-4 py-3 text-gray-900 outline-none focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200" />
          </div>
          <div>
            <label htmlFor="state" className="mb-2 block font-medium text-gray-700">State</label>
            <input id="state" type="text" name="state" value={formData.state} onChange={handleChange} placeholder="Rajasthan" className="w-full rounded-lg border border-gray-300 px-4 py-3 text-gray-900 outline-none focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200" />
          </div>
        </div>

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
          <div>
            <label htmlFor="contactNumber" className="mb-2 block font-medium text-gray-700">Contact Number</label>
            <input id="contactNumber" type="tel" name="contact" value={formData.contact} onChange={handleChange} placeholder="+91 9876543210" required className="w-full rounded-lg border border-gray-300 px-4 py-3 text-gray-900 outline-none focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200" />
          </div>
          <div>
            <label htmlFor="email" className="mb-2 block font-medium text-gray-700">Email</label>
            <input id="email" type="email" name="email" value={formData.email} onChange={handleChange} placeholder="example@gmail.com" required className="w-full rounded-lg border border-gray-300 px-4 py-3 text-gray-900 outline-none focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200" />
          </div>
        </div>

        <div>
          <label htmlFor="message" className="mb-2 block font-medium text-gray-700">Message</label>
          <textarea id="message" name="message" value={formData.message} onChange={handleChange} placeholder="Write your message..." rows={4} className="w-full resize-none rounded-lg border border-gray-300 px-4 py-3 text-gray-900 outline-none focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200" />
        </div>

        <button type="submit" className="w-full rounded-xl bg-indigo-600 py-4 font-semibold text-white shadow-md transition hover:bg-indigo-700 hover:shadow-lg">
          Send Enquiry on WhatsApp
        </button>
      </form>
    </section>
  );
}
