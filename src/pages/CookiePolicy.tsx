import TopBar from '../components/TopBar';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { motion } from 'motion/react';

export default function CookiePolicy() {
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
            <h1 className="text-4xl lg:text-5xl font-bold text-slate-900 mb-4">Cookie Policy</h1>
            <p className="text-sm text-slate-500 mb-12 italic">Last updated: February 28, 2026</p>
            
            <div className="prose prose-slate max-w-none space-y-8 text-slate-600 leading-relaxed">
              <section>
                <p>
                  This Cookie Policy explains how Liquid Consulting Pty Ltd ("we", "us", and "our") uses cookies and 
                  similar technologies to recognize you when you visit our website at <a href="https://www.liquidconsulting.com.au" className="text-primary hover:underline">www.liquidconsulting.com.au</a> ("Website"). 
                  It explains what these technologies are and why we use them, as well as your rights to control our use of them.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-slate-900 mb-4">What are cookies?</h2>
                <p>
                  Cookies are small data files that are placed on your computer or mobile device when you visit a website. 
                  Cookies are widely used by website owners in order to make their websites work, or to work more efficiently, 
                  as well as to provide reporting information.
                </p>
                <p>
                  Cookies set by the website owner (in this case, Liquid Consulting Pty Ltd) are called "first-party cookies". 
                  Cookies set by parties other than the website owner are called "third-party cookies". Third-party cookies 
                  enable third-party features or functionality to be provided on or through the website (e.g., advertising, 
                  interactive content, and analytics).
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-slate-900 mb-4">Why do we use cookies?</h2>
                <p>
                  We use first-party and third-party cookies for several reasons. Some cookies are required for technical 
                  reasons in order for our Website to operate, and we refer to these as "essential" or "strictly necessary" 
                  cookies. Other cookies also enable us to track and target the interests of our users to enhance the 
                  experience on our Online Sections. Third parties serve cookies through our Website for advertising, 
                  analytics, and other purposes.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-slate-900 mb-4">Types of Cookies we use</h2>
                <div className="space-y-4">
                  <div>
                    <h3 className="text-xl font-semibold text-slate-800">Essential Website Cookies</h3>
                    <p>
                      These cookies are strictly necessary to provide you with services available through our Website 
                      and to use some of its features, such as access to secure areas.
                    </p>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-slate-800">Performance and Functionality Cookies</h3>
                    <p>
                      These cookies are used to enhance the performance and functionality of our Website but are 
                      non-essential to their use. However, without these cookies, certain functionality (like videos) 
                      may become unavailable.
                    </p>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-slate-800">Analytics and Customization Cookies</h3>
                    <p>
                      These cookies collect information that is used either in aggregate form to help us understand 
                      how our Website is being used or how effective our marketing campaigns are, or to help us 
                      customize our Website for you.
                    </p>
                  </div>
                </div>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-slate-900 mb-4">How can I control cookies?</h2>
                <p>
                  You have the right to decide whether to accept or reject cookies. You can set or amend your web browser 
                  controls to accept or refuse cookies. If you choose to reject cookies, you may still use our website 
                  though your access to some functionality and areas of our website may be restricted.
                </p>
                <p>
                  As the means by which you can refuse cookies through your web browser controls vary from browser to 
                  browser, you should visit your browser's help menu for more information.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-slate-900 mb-4">How often will you update this Cookie Policy?</h2>
                <p>
                  We may update this Cookie Policy from time to time in order to reflect, for example, changes to the 
                  cookies we use or for other operational, legal, or regulatory reasons. Please therefore re-visit 
                  this Cookie Policy regularly to stay informed about our use of cookies and related technologies.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-slate-900 mb-4">Where can I get further information?</h2>
                <p>
                  If you have any questions about our use of cookies or other technologies, please email us at:
                </p>
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
