'use client'
import React from 'react';
import { useForm, ValidationError } from "@formspree/react";

function ContactForm() {
    const [state, handleSubmit] = useForm("xpzbyygz");

    if (state.succeeded) {
        return (
            <>
                <p className='mt-40 text-center font-mono font-bold text-white'>Thanks for your submission!</p>
                <div className="-mt-40">
                    <ContactForm />
                </div>
            </>
        );

    }

    return (
        <div className="bg-black pt-20">
            <div className="flex bg-black flex-col items-center justify-center align-middle h-screen max-w-lg m-auto px-8">
                <h1 className="text-6xl font-bold text-white">Contact</h1>
                <div className="lg:w-1/3 md:w-1/2 flex flex-col md:ml-auto w-full md:py-8 mt-8 md:mt-0">
                    <form onSubmit={handleSubmit}>

                        <div className="relative mb-4">
                            <label htmlFor="name" className="leading-7 text-sm text-gray-400">Name</label>
                            <input type="text" id="name" name="name"
                                className="w-full bg-gray-800 rounded border border-gray-700 focus:border-[#3f3fff] focus:ring-2 focus:ring-blue-900 text-base outline-none text-gray-100 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" required />
                            <ValidationError prefix="Name" field="name" errors={state.errors} />
                        </div>

                        <div className="relative mb-4">
                            <label htmlFor="email" className="leading-7 text-sm text-gray-400">Email</label>
                            <input type="email" id="email" name="email"
                                className="w-full bg-gray-800 rounded border border-gray-700 focus:border-[#3f3fff] focus:ring-2 focus:ring-blue-900 text-base outline-none text-gray-100 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" required />
                            <ValidationError prefix="Email" field="email" errors={state.errors} />
                        </div>

                        <div className="relative mb-4">
                            <label htmlFor="message" className="leading-7 text-sm text-gray-400">Message</label>
                            <textarea id="message" name="message"
                                className="w-full bg-gray-800 rounded border border-gray-700 focus:border-[#3f3fff] focus:ring-2 focus:ring-blue-900 h-32 text-base outline-none text-gray-100 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out" required></textarea>
                            <ValidationError prefix="Message" field="message" errors={state.errors} />
                        </div>

                        <button type="submit" disabled={state.submitting}
                            className="text-white rounded-lg bg-blue-700 border-0 py-2 px-6 focus:outline-none text-lg transition ease-linear delay-150 duration-300 hover:bg-blue-600">Submit</button>
                        <p className="text-sm text-gray-400 text-opacity-90 mt-3">Improving day by day hope you like
                            my Blog page.</p>
                        <ValidationError errors={state.errors} />
                    </form>
                </div>
            </div>
        </div>
    );
}
function App() {
    return (
        <ContactForm />
    );
}
export default App;
