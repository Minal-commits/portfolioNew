import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { IoArrowBack } from 'react-icons/io5';

const PrivacyPolicy = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const containerVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 10 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <div className="w-full min-h-screen dark:bg-black bg-white font-Outfit dark:text-white text-black pt-28 pb-20 lg:px-80 md:px-20 px-6">
      <motion.div
        initial="hidden"
        animate="visible"
        variants={containerVariants}
        className="max-w-4xl mx-auto"
      >
        <motion.div variants={itemVariants} className="mb-12">
          <Link
            to="/"
            className="inline-flex items-center gap-2 text-gray-500 hover:text-black dark:hover:text-white transition-colors duration-300 mb-8 group"
          >
            <IoArrowBack className="group-hover:-translate-x-1 transition-transform duration-300" />
            Back to Home
          </Link>
          <h1 className="text-4xl md:text-6xl font-Calistoga font-bold mb-4 bg-gradient-to-r from-black to-gray-600 dark:from-white dark:to-gray-400 bg-clip-text text-transparent">
            Privacy Policy
          </h1>
          <p className="text-gray-500 dark:text-gray-400">
            Last updated: {new Date().toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}
          </p>
        </motion.div>

        <div className="space-y-12 text-lg leading-relaxed opacity-90">
          <motion.section variants={itemVariants} className="space-y-4">
            <h2 className="text-2xl font-Calistoga font-semibold text-black dark:text-white">1. Introduction</h2>
            <p>
              Welcome to <strong>Spenza</strong>. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you use our mobile application and services.
            </p>
            <p>
              By using Spenza, you agree to the collection and use of information in accordance with this policy. We are committed to protecting your personal data and your right to privacy.
            </p>
          </motion.section>

          <motion.section variants={itemVariants} className="space-y-4">
            <h2 className="text-2xl font-Calistoga font-semibold text-black dark:text-white">2. Information We Collect</h2>
            <div className="space-y-4">
              <div>
                <h3 className="text-xl font-semibold mb-2">Personal Data</h3>
                <p>
                  While using our Service, we may ask you to provide us with certain personally identifiable information that can be used to contact or identify you. This may include, but is not limited to:
                </p>
                <ul className="list-disc list-inside ml-4 mt-2 space-y-1 text-gray-600 dark:text-gray-400">
                  <li>Email address</li>
                  <li>First name and last name</li>
                  <li>Usage Data and Preferences</li>
                </ul>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">Financial Data</h3>
                <p>
                  As a finance tracking app, Spenza processes transaction data you manually enter or sync. We do not store your bank credentials directly on our servers; we use secure, industry-standard third-party providers for any financial integrations.
                </p>
              </div>
            </div>
          </motion.section>

          <motion.section variants={itemVariants} className="space-y-4">
            <h2 className="text-2xl font-Calistoga font-semibold text-black dark:text-white">3. How We Use Your Data</h2>
            <p>We use the collected data for various purposes:</p>
            <ul className="list-disc list-inside ml-4 space-y-2 text-gray-600 dark:text-gray-400">
              <li>To provide and maintain our Service</li>
              <li>To notify you about changes to our Service</li>
              <li>To provide customer support</li>
              <li>To gather analysis or valuable information so that we can improve our Service</li>
              <li>To monitor the usage of our Service</li>
              <li>To detect, prevent and address technical issues</li>
            </ul>
          </motion.section>

          <motion.section variants={itemVariants} className="space-y-4">
            <h2 className="text-2xl font-Calistoga font-semibold text-black dark:text-white">4. Data Security</h2>
            <p>
              The security of your data is important to us, but remember that no method of transmission over the Internet, or method of electronic storage is 100% secure. While we strive to use commercially acceptable means to protect your Personal Data, we cannot guarantee its absolute security.
            </p>
            <div className="p-4 rounded-xl bg-gray-100 dark:bg-zinc-900 border border-gray-200 dark:border-zinc-800">
              <p className="text-sm italic">
                <strong>Note:</strong> Spenza uses end-to-end encryption for sensitive data and adheres to modern security standards to ensure your financial privacy.
              </p>
            </div>
          </motion.section>

          <motion.section variants={itemVariants} className="space-y-4">
            <h2 className="text-2xl font-Calistoga font-semibold text-black dark:text-white">5. Third-Party Services</h2>
            <p>
              We may employ third-party companies and individuals to facilitate our Service ("Service Providers"), to provide the Service on our behalf, or to assist us in analyzing how our Service is used.
            </p>
            <p>
              These third parties have access to your Personal Data only to perform these tasks on our behalf and are obligated not to disclose or use it for any other purpose. Common providers include Firebase (for authentication and analytics) and Supabase.
            </p>
          </motion.section>

          <motion.section variants={itemVariants} className="space-y-4 border-t border-gray-200 dark:border-zinc-800 pt-12">
            <h2 className="text-2xl font-Calistoga font-semibold text-black dark:text-white">Contact Us</h2>
            <p>
              If you have any questions about this Privacy Policy, please contact us:
            </p>
            <div className="flex flex-col gap-2">
              <a href="mailto:support@spenza.app" className="text-blue-500 hover:underline">support@spenza.app</a>
              <p className="text-gray-500">Minal Commits | Developer</p>
            </div>
          </motion.section>
        </div>
      </motion.div>
    </div>
  );
};

export default PrivacyPolicy;
