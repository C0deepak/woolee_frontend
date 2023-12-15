import React from 'react'

const Privacy = () => {
    return (
        <div className='font-poppins'>
            <div className='absolute top-0 left-0 min-h-[20vh] w-full bg-zinc-800 z-0'></div>
            <div className="max-w-3xl mx-auto p-8 bg-white shadow-md rounded-md my-16 relative">
                <h1 className="text-2xl font-semibold mb-6">Privacy Policy for Woolee</h1>

                {/* Sections */}
                {sections.map((section, index) => (
                    <section key={index} className="mb-6">
                        <h2 className="text-xl font-semibold mb-4">{section.title}</h2>
                        <p className="text-gray-700">{section.content}</p>
                    </section>
                ))}
            </div>
        </div>
    )
}

const sections = [
    {
        title: '1. Introduction',
        content: "Welcome to Woolee! This Privacy Policy explains how we handle information in our enchanted world.",
    },
    {
        title: '2. Information We Collect',
        content: `
        a. Personal Information: Unicorn farm details, rainbow contact information.
        b. Non-Personal Information: Magic wand usage data, cloud device info, and other mystical data.
      `,
    },
    {
        title: '3. How We Use Your Information',
        content: `
        We use collected information to:
        - Provide services to Wool Producers, Wool Processors, and Buyers.
        - Communicate magical updates.
        - Analyze wand waving patterns for user enchantment.
      `,
    },
    {
        title: '4. Information Sharing',
        content: `
        We may share enchanted information:
        - With your consent (telepathic link).
        - To comply with magical laws.
        - In connection with mythical mergers or acquisitions.
      `,
    },
    {
        title: '5. Security Measures',
        content: "We take magical measures to protect against unauthorized access, disclosure, alteration, or destruction.",
    },
    {
        title: '6. Your Choices and Rights',
        content: `
        You can:
        - Access enchanted information.
        - Opt-out of magical communications.
        - Object to fairy-tale data processing.
      `,
    },
    {
        title: '7. Cookies and Similar Technologies',
        content: "We use enchanted cookies and fairy dust to enhance your experience.",
    },
    {
        title: '8. Changes to This Privacy Policy',
        content: "We may update magically. Check our enchanted crystal ball for the latest version.",
    },
    {
        title: '9. Contact Us',
        content: "Send questions or concerns via owl post to the Enchanted Castle, Cloud Kingdom.",
    },
];

export default Privacy