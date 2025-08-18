'use client'
import { useForm, ValidationError } from "@formspree/react";

export default function EmailForm() {
    const [state, handleSubmit] = useForm("mrblvvvy")

    if (state.succeeded) {
        return <p className="text-center text-green-900 p-12 font-semibold text-2xl">Thanks For Reaching Out! We'll get back to you shortly.</p>
    }
    return (
        <form 
            onSubmit={handleSubmit} 
            className="bg-green-50 mt-10 text-green-900 flex flex-col justify-center justify-self-center text-center p-20 rounded-2xl md:max-w-3/4"
        >
            <h1 className="text-3xl font-semibold mb-2 underline">
                Email Us
            </h1>
            <p className="mb-6">We'd love to hear from you. Send us a message and we'll respond as soon as possible!</p>
            <label 
                htmlFor="email"
                className="mb-2 text-2xl font-semibold"
            >
                Email Address
            </label>
            <input
                id="email"
                type="email" 
                name="email"
                placeholder="YourEmail@email.com"
                className="text-center bg-gray-200 mb-2 rounded-xl p-2"
            />
            <ValidationError 
                prefix="Email" 
                field="email"
                errors={state.errors}
            />
            <label
                htmlFor="message"
                className="mb-2 text-2xl font-semibold"
            >
                Message
            </label>
            <textarea
                id="message"
                name="message"
                className="bg-gray-200 h-30 rounded-xl p-2"
                placeholder="..."
            />
            <ValidationError 
                prefix="Message" 
                field="message"
                errors={state.errors}
            />
            <button 
                type="submit" 
                disabled={state.submitting}
                className="hover:cursor-pointer text-2xl bg-green-200 mt-10 font-semibold rounded-2xl w-1/2 self-center"
            >
                Submit
            </button>
        </form>
    );
}