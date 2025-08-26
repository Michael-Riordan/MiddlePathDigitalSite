'use client'
import { useForm, ValidationError } from "@formspree/react";

export default function EmailForm() {
  const [state, handleSubmit] = useForm("mrblvvvy");

  if (state.succeeded) {
    return (
      <p className="text-center text-green-800 p-12 font-semibold text-2xl">
        ✅ Thanks for reaching out! We’ll get back to you shortly.
      </p>
    );
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="bg-white shadow-lg mt-16 text-gray-900 flex flex-col gap-6 p-10 rounded-2xl max-w-2xl mx-auto"
    >
      {/* Header */}
      <div className="text-center">
        <h1 className="text-3xl font-bold text-green-800">Get in Touch</h1>
        <p className="mt-2 text-gray-600">
          We’d love to hear from you. Send us a message and we’ll reply as soon as possible.
        </p>
      </div>

      {/* Email */}
      <div className="flex flex-col text-left">
        <label htmlFor="email" className="mb-1 font-semibold text-sm text-gray-700">
          Email Address
        </label>
        <input
          id="email"
          type="email"
          name="email"
          placeholder="you@example.com"
          className="rounded-xl border border-gray-300 bg-gray-50 p-3 focus:border-green-500 focus:ring-2 focus:ring-green-200 outline-none transition"
        />
        <ValidationError prefix="Email" field="email" errors={state.errors} />
      </div>

      {/* Message */}
      <div className="flex flex-col text-left">
        <label htmlFor="message" className="mb-1 font-semibold text-sm text-gray-700">
          Message
        </label>
        <textarea
          id="message"
          name="message"
          placeholder="Write your message..."
          rows={5}
          className="rounded-xl border border-gray-300 bg-gray-50 p-3 focus:border-green-500 focus:ring-2 focus:ring-green-200 outline-none transition"
        />
        <ValidationError prefix="Message" field="message" errors={state.errors} />
      </div>

      {/* Submit Button */}
      <button
        type="submit"
        disabled={state.submitting}
        className="mt-4 w-full bg-green-600 text-white text-lg font-semibold py-3 rounded-xl shadow-md hover:bg-green-700 active:scale-95 transition disabled:opacity-50 disabled:cursor-not-allowed"
      >
        {state.submitting ? "Sending..." : "Send Message"}
      </button>
    </form>
  );
}