import TopBar from '../components/TopBar';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { motion } from 'motion/react';

export default function PrivacyPolicy() {
  return (
    <div className="min-h-screen bg-white">
      <TopBar />
      <Navbar />
      <main className="py-12">
        <div className="w-full max-w-5xl mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-4xl lg:text-5xl font-bold text-slate-900 mb-12">Privacy Policy</h1>
            
            <div className="prose prose-slate max-w-none space-y-8 text-slate-600 leading-relaxed">
              <section>
                <p>
                  Liquid Consulting Pty Ltd is committed to providing quality services to you and this policy outlines
                  our ongoing obligations to you in respect of how we manage your Personal Information.
                </p>
                <p>
                  We have adopted the National Privacy Principles (NPPs) contained in the Privacy Act 1988 (Cth)
                  (the Privacy Act). The NPPs govern the way in which we collect, use, disclose, store, secure and
                  dispose of your Personal Information.
                </p>
                <p>
                  A copy of the Australian Privacy Principles can be obtained from the website of The Office of the
                  Federal Privacy Commissioner at <a href="https://www.privacy.gov.au" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">www.privacy.gov.au</a>.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-slate-900 mb-4">What is Personal Information and why do we collect it?</h2>
                <p>
                  Personal Information is information or an opinion that identifies an individual. Examples of
                  Personal Information we collect include: names, addresses, email addresses, phone and
                  facsimile numbers.
                </p>
                <p>
                  This Personal Information may be obtained in many ways including interviews, correspondence
                  or email via our website <a href="https://www.liquidconsulting.com.au" className="text-primary hover:underline">www.liquidconsulting.com.au</a>, from your website, from media and
                  publications, from other publicly available sources and from third parties. We do not guarantee
                  website links or policy of authorised third parties.
                </p>
                <p>
                  We collect your Personal Information for the primary purpose of providing our services to you,
                  providing information to our clients and marketing. We may also use your Personal Information
                  for secondary purposes closely related to the primary purpose, in circumstances where you
                  would reasonably expect such use or disclosure. You may unsubscribe from our mailing list at
                  any time by contacting us in writing.
                </p>
                <p>
                  When we collect Personal Information we will, where appropriate and where possible, explain
                  to you why we are collecting the information and how we plan to use it.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-slate-900 mb-4">Sensitive Information</h2>
                <p>
                  Sensitive information is defined in the Privacy Act to include information or opinion about such
                  things as an individual's racial or ethnic origin, political opinions, membership of a political
                  association, religious or philosophical beliefs, membership of a trade union or other professional
                  body, criminal record or health information.
                </p>
                <p>Sensitive information will be used by us only:</p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>For the primary purpose for which it was obtained</li>
                  <li>For a secondary purpose that is directly related to the primary purpose</li>
                  <li>With your consent; or where required or authorised by law.</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-slate-900 mb-4">Third Parties</h2>
                <p>
                  Where reasonable and practicable to do so, we will collect your Personal Information only from
                  you. However, in some circumstances, we may be provided with information by third parties. In
                  such a case, we will take reasonable steps to ensure that you are made aware of the information
                  provided to us by the third party.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-slate-900 mb-4">Disclosure of Personal Information</h2>
                <p>Your Personal Information may be disclosed in certain circumstances including the following:</p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Third parties where you consent to the use or disclosure; and</li>
                  <li>Where required or authorised by law.</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-slate-900 mb-4">Security of Personal Information</h2>
                <p>
                  Your Personal Information is stored in a manner that reasonably protects it from misuse and loss
                  and from unauthorized access, modification or disclosure.
                </p>
                <p>
                  When your Personal Information is no longer required for the purpose for which it was obtained,
                  we will take reasonable steps to destroy or permanently de-identify your Personal Information.
                  However, most of the Personal Information is or will be stored in client file’s which will be kept by
                  us for a minimum of 7 years.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-slate-900 mb-4">Access to your Personal Information</h2>
                <p>
                  You may access the Personal Information we hold about you and to update and/or correct it,
                  subject to certain exceptions. If you wish to access your Personal Information, please contact us
                  in writing.
                </p>
                <p>
                  Liquid Consulting Pty Ltd will not charge any fee for your access request, but may charge an
                  administrative fee for providing a copy of your Personal Information.
                </p>
                <p>
                  In order to protect your Personal Information we may require identification from you before
                  releasing the requested information.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-slate-900 mb-4">Maintaining the Quality of your Personal Information</h2>
                <p>
                  It is important to us that your Personal Information is up to date. We will take reasonable steps
                  to make sure that your Personal Information is accurate, complete and up-to-date. If you find that
                  the information we have is not up to date or is inaccurate, please advise us as soon as practicable
                  so we can update our records and ensure we can continue to provide quality services to you.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-slate-900 mb-4">Policy Updates</h2>
                <p>This Policy may change from time to time and is available on our website.</p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-slate-900 mb-4">Privacy Policy Complaints and Enquiries</h2>
                <p>If you have any queries or complaints about our Privacy Policy please contact us at:</p>
                <a href="mailto:info@liquidconsulting.com.au" className="font-bold text-primary hover:underline">info@liquidconsulting.com.au</a>
              </section>
            </div>
          </motion.div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
