import TopBar from '../components/TopBar';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { motion } from 'motion/react';

export default function UserAgreement() {
  return (
    <div className="min-h-screen bg-white">
      <TopBar />
      <Navbar />
      <main className="py-24">
        <div className="container-custom max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-4xl lg:text-5xl font-bold text-slate-900 mb-4">User Agreement</h1>
            <p className="text-sm text-slate-500 mb-12 italic">Last updated: May 15, 2017</p>
            
            <div className="prose prose-slate max-w-none space-y-8 text-slate-600 leading-relaxed">
              <section>
                <p>
                  Please read these Terms and Conditions ("Terms", "Terms and Conditions") carefully
                  before using the <a href="https://www.liquidconsulting.com.au" className="text-primary hover:underline">www.liquidconsulting.com.au</a> website (the "Service") operated by Liquid
                  Consulting Pty Ltd ("us", "we", or "our").
                </p>
                <p>
                  Your access to and use of the Service is conditioned on your acceptance of and
                  compliance with these Terms. These Terms apply to all visitors, users and others who
                  access or use the Service. You warrant that you are at least 18 years-old and you are
                  legally capable of entering into binding contracts.
                </p>
                <p>
                  By accessing or using the Service you agree to be bound by these Terms. If you disagree
                  with any part of the terms then you may not access the Service.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-slate-900 mb-4">Purchases</h2>
                <p>
                  If you wish to purchase any product or service made available through the Service
                  ("Purchase"), you may be asked to supply certain information relevant to your Purchase
                  including, without limitation, your debit or credit card number, the expiration date of your
                  card, your billing address and your shipping information.
                </p>
                <p>
                  You represent and warrant that: (i) you have the legal right to use any debit or credit
                  card(s) or other payment method(s) in connection with any Purchase; and that (ii) the
                  information you supply to us is true, correct and complete.
                </p>
                <p>
                  By submitting such information, you grant us the right to provide the information to third
                  parties for purposes of facilitating the completion of Purchases.
                </p>
                <p>
                  The Service is not designed to provide qualitative advice regarding the fitness for purpose
                  and merchantability of any products or services. We strongly advise you to exercise
                  caution and do your own due diligence in conducting any transactions through the Service.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-slate-900 mb-4">Links to Other Web Sites</h2>
                <p>
                  Our Service may contain links to third-party web sites or services that are not owned or
                  controlled by Liquid Consulting Pty Ltd.
                </p>
                <p>
                  Liquid Consulting Pty Ltd has no control over, and assumes no responsibility for, the
                  content, privacy policies, or practices of any third party web sites or services. You further
                  acknowledge and agree that Liquid Consulting Pty Ltd shall not be responsible or liable,
                  directly or indirectly, for any damage or loss caused or alleged to be caused by or in
                  connection with use of or reliance on any such content, goods or services available on or
                  through any such web sites or services.
                </p>
                <p>
                  We only provide links to external websites as a convenience, and the inclusion of such a
                  link to external websites do not imply our endorsement of those websites. You
                  acknowledge and agree that when you access other websites on the Internet, you do so
                  at your own risk.
                </p>
                <p>
                  We strongly advise you to read the terms and conditions and privacy policies of any third-party 
                  web sites or services that you visit.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-slate-900 mb-4">Governing Law</h2>
                <p>
                  These Terms shall be governed and construed in accordance with the laws of Australia,
                  without regard to its conflict of law provisions.
                </p>
                <p>
                  Our failure to enforce any right or provision of these Terms will not be considered a waiver
                  of those rights. If any provision of these Terms is held to be invalid or unenforceable by a
                  court, the remaining provisions of these Terms will remain in effect. These Terms
                  constitute the entire agreement between us regarding our Service, and supersede and
                  replace any prior agreements we might have between us regarding the Service.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-slate-900 mb-4">Changes</h2>
                <p>
                  We reserve the right, at our sole discretion, to modify or replace these Terms at any time.
                  If a revision is material we will try to provide at least 15 days notice prior to any new terms
                  taking effect.
                </p>
                <p>
                  It is your sole responsibility to periodically check these Terms for any changes. If you do
                  not agree with any of the changes to these Terms, it is your sole responsibility to stop
                  using the Service. Your continued use of the Service will be deemed as your acceptance
                  thereof.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-slate-900 mb-4">Contact Us</h2>
                <p>If you have any questions about these Terms, please contact us at:</p>
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
