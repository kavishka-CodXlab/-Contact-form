import React, { useState } from "react";
import { Send, User, Mail, MessageSquare } from "lucide-react";
import emailjs from "@emailjs/browser";
import toast, { Toaster } from "react-hot-toast";
export const ContactForm = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: ""
  });
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    try {
      await emailjs.send("service_22xqhfa", "template_wd02dje", {
        to_email: "tkavishka101@gmail.com",
        from_name: formData.name,
        from_email: formData.email,
        message: formData.message
      }, "AjmYC90MBkSD8NLlD");
      toast.success("Message sent successfully!");
      setFormData({
        name: "",
        email: "",
        message: ""
      });
    } catch (error) {
      toast.error("Failed to send message. Please try again.");
    }
    setIsLoading(false);
  };
  return <div className="min-h-screen w-full bg-slate-900 flex items-center justify-center p-4">
      <div className="max-w-md w-full space-y-8">
        <div className="text-center">
          <h2 className="text-3xl font-bold text-white mb-2">Get In Touch</h2>
        </div>
        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label className="flex items-center text-sm font-medium text-gray-300 mb-1">
              <User className="w-4 h-4 mr-2" />
              Name
            </label>
            <input type="text" required className="w-full px-4 py-2 bg-slate-800 border border-slate-700 rounded-lg text-white focus:outline-none focus:border-blue-500" placeholder="Your name" value={formData.name} onChange={e => setFormData({
            ...formData,
            name: e.target.value
          })} />
          </div>
          <div>
            <label className="flex items-center text-sm font-medium text-gray-300 mb-1">
              <Mail className="w-4 h-4 mr-2" />
              Email
            </label>
            <input type="email" required className="w-full px-4 py-2 bg-slate-800 border border-slate-700 rounded-lg text-white focus:outline-none focus:border-blue-500" placeholder="your@email.com" value={formData.email} onChange={e => setFormData({
            ...formData,
            email: e.target.value
          })} />
          </div>
          <div>
            <label className="flex items-center text-sm font-medium text-gray-300 mb-1">
              <MessageSquare className="w-4 h-4 mr-2" />
              Message
            </label>
            <textarea required className="w-full px-4 py-2 bg-slate-800 border border-slate-700 rounded-lg text-white focus:outline-none focus:border-blue-500 h-32 resize-none" placeholder="Your message" value={formData.message} onChange={e => setFormData({
            ...formData,
            message: e.target.value
          })} />
          </div>
          <button type="submit" disabled={isLoading} className="w-full bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-600 transition-colors flex items-center justify-center space-x-2 disabled:opacity-50">
            {isLoading ? "Sending..." : <>
                <Send className="w-4 h-4" />
                <span>Send Message</span>
              </>}
          </button>
        </form>
        <Toaster position="bottom-right" />
      </div>
    </div>;
};