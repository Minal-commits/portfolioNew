import React, { useEffect } from 'react';

const PrivacyPolicy = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="w-full min-h-screen dark:bg-black bg-white font-Calistoga dark:text-white text-black pt-24 pb-20 lg:px-80 md:px-20 px-10">
      <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-8">Privacy Policy</h1>
      
      <div className="space-y-6 text-lg opacity-90">
        <section>
          <p>
            Last updated: {new Date().toLocaleDateString()}
          </p>
          <p className="mt-4">
            This Privacy Policy describes our policies and procedures on the collection, use and disclosure of your information when you use our Application and tells you about your privacy rights and how the law protects you.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-4">Information Collection and Use</h2>
          <p>
            For a better experience, while using our Service, we may require you to provide us with certain personally identifiable information. The information that we request will be retained by us and used as described in this privacy policy.
          </p>
          <p className="mt-2">
            The app does use third-party services that may collect information used to identify you.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-4">Log Data</h2>
          <p>
            We want to inform you that whenever you use our Service, in a case of an error in the app we collect data and information (through third-party products) on your phone called Log Data. This Log Data may include information such as your device Internet Protocol (“IP”) address, device name, operating system version, the configuration of the app when utilizing our Service, the time and date of your use of the Service, and other statistics.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-4">Cookies</h2>
          <p>
            Cookies are files with a small amount of data that are commonly used as anonymous unique identifiers. These are sent to your browser from the websites that you visit and are stored on your device's internal memory.
          </p>
          <p className="mt-2">
            This Service does not use these “cookies” explicitly. However, the app may use third-party code and libraries that use “cookies” to collect information and improve their services. You have the option to either accept or refuse these cookies and know when a cookie is being sent to your device.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-4">Service Providers</h2>
          <p>
            We may employ third-party companies and individuals due to the following reasons:
          </p>
          <ul className="list-disc list-inside ml-4 mt-2 space-y-2">
            <li>To facilitate our Service;</li>
            <li>To provide the Service on our behalf;</li>
            <li>To perform Service-related services; or</li>
            <li>To assist us in analyzing how our Service is used.</li>
          </ul>
          <p className="mt-2">
            We want to inform users of this Service that these third parties have access to your Personal Information. The reason is to perform the tasks assigned to them on our behalf. However, they are obligated not to disclose or use the information for any other purpose.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-4">Security</h2>
          <p>
            We value your trust in providing us your Personal Information, thus we are striving to use commercially acceptable means of protecting it. But remember that no method of transmission over the internet, or method of electronic storage is 100% secure and reliable, and we cannot guarantee its absolute security.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-4">Children’s Privacy</h2>
          <p>
            These Services do not address anyone under the age of 13. We do not knowingly collect personally identifiable information from children under 13. In the case we discover that a child under 13 has provided us with personal information, we immediately delete this from our servers. If you are a parent or guardian and you are aware that your child has provided us with personal information, please contact us so that we will be able to do necessary actions.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-4">Changes to This Privacy Policy</h2>
          <p>
            We may update our Privacy Policy from time to time. Thus, you are advised to review this page periodically for any changes. We will notify you of any changes by posting the new Privacy Policy on this page.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-4">Contact Us</h2>
          <p>
            If you have any questions or suggestions about our Privacy Policy, do not hesitate to contact us at support@example.com.
          </p>
        </section>
      </div>
    </div>
  );
};

export default PrivacyPolicy;
