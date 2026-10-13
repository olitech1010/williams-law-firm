import Image from "next/image";
import Link from "next/link";
import HeroSlider from "@/components/HeroSlider";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Header / Nav */}
      <header className="bg-white shadow-sm sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            <div className="flex-shrink-0 flex items-center">
              <Link href="/">
                <Image src="/logo.jpg" alt="The Williams Law Firm Logo" width={60} height={60} className="object-contain" />
              </Link>
              <div className="ml-3 flex flex-col">
                <span className="font-serif font-bold text-xl text-blue-900 tracking-tight">The Williams Law Firm</span>
                <span className="text-sm text-slate-500 hidden sm:block">Randall DeWitt Williams, Esq.</span>
              </div>
            </div>
            <div className="hidden md:flex items-center space-x-8">
              <Link href="#practice-areas" className="text-slate-900 hover:text-blue-900 font-medium transition-colors">Practice Areas</Link>
              <Link href="#about" className="text-slate-900 hover:text-blue-900 font-medium transition-colors">About</Link>
              <Link href="#contact" className="text-slate-900 hover:text-blue-900 font-medium transition-colors">Contact</Link>
              <a href="tel:+18645698329" className="bg-amber-700 hover:bg-amber-800 text-white px-5 py-2.5 rounded-md font-semibold transition-colors shadow-sm">
                +1 (864) 569-8329
              </a>
            </div>
          </div>
        </div>
      </header>

      <main className="flex-grow">
        {/* Hero Section with 5s slider */}
        <HeroSlider />

        {/* Trust Badges */}
        <section className="bg-blue-900 text-white py-12 relative z-10 -mt-8 mx-4 sm:mx-8 lg:mx-auto max-w-7xl rounded-xl shadow-2xl">
          <div className="px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center divide-y md:divide-y-0 md:divide-x divide-blue-800/50">
              <div className="flex flex-col items-center justify-center p-4">
                <svg className="w-12 h-12 mb-4 text-amber-700" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" /></svg>
                <h3 className="font-serif font-bold text-xl mb-2">30+ Years Experience</h3>
                <p className="text-blue-100/80 text-sm">Decades of courtroom and transactional practice.</p>
              </div>
              <div className="flex flex-col items-center justify-center p-4">
                <svg className="w-12 h-12 mb-4 text-amber-700" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 6l3 1m0 0l-3 9a5.002 5.002 0 006.001 0M6 7l3 9M6 7l6-2m6 2l3-1m-3 1l-3 9a5.002 5.002 0 006.001 0M18 7l3 9m-3-9l-6-2m0-2v2m0 16V5m0 16H9m3 0h3" /></svg>
                <h3 className="font-serif font-bold text-xl mb-2">Dual Licensed</h3>
                <p className="text-blue-100/80 text-sm">Licensed to practice in both South Carolina & North Carolina.</p>
              </div>
              <div className="flex flex-col items-center justify-center p-4">
                <svg className="w-12 h-12 mb-4 text-amber-700" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" /></svg>
                <h3 className="font-serif font-bold text-xl mb-2">Local Community Focus</h3>
                <p className="text-blue-100/80 text-sm">Serving Edgefield County and the CSRA area.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Practice Areas */}
        <section id="practice-areas" className="pt-24 pb-20 bg-slate-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="font-serif text-3xl md:text-4xl font-bold text-blue-900 mb-4">Our Practice Areas</h2>
              <div className="w-24 h-1 bg-amber-700 mx-auto"></div>
              <p className="mt-6 text-lg text-slate-600 max-w-2xl mx-auto">
                Dedicated representation for individuals, workers, and families across various critical legal matters.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {/* Workers Comp */}
              <div className="bg-white rounded-xl shadow-sm hover:shadow-xl overflow-hidden border border-slate-100 flex flex-col sm:flex-row transition-all duration-300 group">
                <div className="sm:w-2/5 relative h-56 sm:h-auto overflow-hidden">
                  <Image src="https://images.pexels.com/photos/14830556/pexels-photo-14830556.jpeg" alt="Workers Compensation" fill className="object-cover group-hover:scale-105 transition-transform duration-500" />
                </div>
                <div className="sm:w-3/5 p-6 md:p-8 flex flex-col justify-center">
                  <h3 className="font-serif font-bold text-2xl text-blue-900 mb-3">Workers' Compensation</h3>
                  <p className="text-slate-600 mb-6 flex-grow">
                    Representing injured employees before the South Carolina Workers' Compensation Commission to secure medical care, lost wage replacement, and disability benefits.
                  </p>
                  <a href="#contact" className="text-amber-700 font-semibold hover:text-amber-800 inline-flex items-center group/link">
                    Request Consultation
                    <svg className="w-4 h-4 ml-1 group-hover/link:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg>
                  </a>
                </div>
              </div>

              {/* Personal Injury */}
              <div className="bg-white rounded-xl shadow-sm hover:shadow-xl overflow-hidden border border-slate-100 flex flex-col sm:flex-row transition-all duration-300 group">
                <div className="sm:w-2/5 relative h-56 sm:h-auto overflow-hidden">
                  <Image src="https://images.pexels.com/photos/34891691/pexels-photo-34891691.jpeg" alt="Personal Injury" fill className="object-cover group-hover:scale-105 transition-transform duration-500" />
                </div>
                <div className="sm:w-3/5 p-6 md:p-8 flex flex-col justify-center">
                  <h3 className="font-serif font-bold text-2xl text-blue-900 mb-3">Personal Injury</h3>
                  <p className="text-slate-600 mb-6 flex-grow">
                    Advocating for individuals injured in motor vehicle collisions, slips and falls, and negligence claims to obtain fair settlements and damages.
                  </p>
                  <a href="#contact" className="text-amber-700 font-semibold hover:text-amber-800 inline-flex items-center group/link">
                    Request Consultation
                    <svg className="w-4 h-4 ml-1 group-hover/link:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg>
                  </a>
                </div>
              </div>

              {/* Probate & Estate */}
              <div className="bg-white rounded-xl shadow-sm hover:shadow-xl overflow-hidden border border-slate-100 flex flex-col sm:flex-row transition-all duration-300 group">
                <div className="sm:w-2/5 relative h-56 sm:h-auto overflow-hidden">
                  <Image src="https://images.pexels.com/photos/5387261/pexels-photo-5387261.jpeg" alt="Probate & Estate Administration" fill className="object-cover group-hover:scale-105 transition-transform duration-500" />
                </div>
                <div className="sm:w-3/5 p-6 md:p-8 flex flex-col justify-center">
                  <h3 className="font-serif font-bold text-2xl text-blue-900 mb-3">Probate & Estate</h3>
                  <p className="text-slate-600 mb-6 flex-grow">
                    Assisting families through estate distribution, probate court requirements, contested wills, and healthcare powers of attorney.
                  </p>
                  <a href="#contact" className="text-amber-700 font-semibold hover:text-amber-800 inline-flex items-center group/link">
                    Request Consultation
                    <svg className="w-4 h-4 ml-1 group-hover/link:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg>
                  </a>
                </div>
              </div>

              {/* General Litigation */}
              <div className="bg-white rounded-xl shadow-sm hover:shadow-xl overflow-hidden border border-slate-100 flex flex-col sm:flex-row transition-all duration-300 group">
                <div className="sm:w-2/5 relative h-56 sm:h-auto overflow-hidden">
                  <Image src="https://images.pexels.com/photos/8815843/pexels-photo-8815843.jpeg" alt="General Litigation" fill className="object-cover group-hover:scale-105 transition-transform duration-500" />
                </div>
                <div className="sm:w-3/5 p-6 md:p-8 flex flex-col justify-center">
                  <h3 className="font-serif font-bold text-2xl text-blue-900 mb-3">General Litigation</h3>
                  <p className="text-slate-600 mb-6 flex-grow">
                    Providing focused local representation for civil disputes and criminal defense matters in regional circuit and municipal courts.
                  </p>
                  <a href="#contact" className="text-amber-700 font-semibold hover:text-amber-800 inline-flex items-center group/link">
                    Request Consultation
                    <svg className="w-4 h-4 ml-1 group-hover/link:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* About the Attorney */}
        <section id="about" className="py-24 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col lg:flex-row gap-16 items-center">
              <div className="w-full lg:w-5/12">
                <div className="relative h-[600px] rounded-xl overflow-hidden shadow-2xl">
                  {/* Professional Setup image */}
                  <Image src="/attorney-office.jpg" alt="Randall DeWitt Williams, Esq. - Professional Setup" fill className="object-cover" />
                </div>
              </div>
              <div className="w-full lg:w-7/12 flex flex-col justify-center">
                <h2 className="font-serif text-3xl md:text-4xl font-bold text-blue-900 mb-4">About the Attorney</h2>
                <div className="w-24 h-1 bg-amber-700 mb-10"></div>
                
                <h3 className="text-3xl font-serif text-slate-900 mb-6">Randall DeWitt Williams, Esq.</h3>
                
                <div className="prose prose-lg text-slate-600 mb-10">
                  <p className="mb-4">
                    The Williams Law Firm is an independent legal practice located in Edgefield, South Carolina, owned and operated by solo practitioner Randall DeWitt Williams.
                  </p>
                  <p>
                    With over 30 years of courtroom and transactional practice in the Carolinas, Attorney Williams brings deep local knowledge and unwavering dedication to every case, focusing on personalized and effective legal representation for individuals and families across the Central Savannah River Area (CSRA).
                  </p>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-10 bg-slate-50 p-8 rounded-xl border border-slate-100">
                  <div>
                    <h4 className="font-bold text-blue-900 mb-4 flex items-center text-lg">
                      <svg className="w-6 h-6 mr-3 text-amber-700" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M12 14l9-5-9-5-9 5 9 5z" /><path d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222" /></svg>
                      Education
                    </h4>
                    <ul className="text-slate-700 space-y-3">
                      <li className="flex flex-col">
                        <span className="font-semibold text-slate-900">Juris Doctor (J.D.)</span>
                        <span className="text-sm">North Carolina Central University School of Law (1995)</span>
                      </li>
                      <li className="flex flex-col">
                        <span className="font-semibold text-slate-900">Bachelor of Arts (B.A.)</span>
                        <span className="text-sm">University of Tennessee at Knoxville (1992)</span>
                      </li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-bold text-blue-900 mb-4 flex items-center text-lg">
                      <svg className="w-6 h-6 mr-3 text-amber-700" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" /></svg>
                      Bar Admissions
                    </h4>
                    <ul className="text-slate-700 space-y-3">
                      <li className="flex items-center">
                        <div className="w-2 h-2 rounded-full bg-amber-700 mr-2"></div>
                        <span>South Carolina Bar (1996)</span>
                      </li>
                      <li className="flex items-center">
                        <div className="w-2 h-2 rounded-full bg-amber-700 mr-2"></div>
                        <span>North Carolina State Bar (1995)</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Contact / Intake */}
        <section id="contact" className="py-24 bg-slate-50 border-t border-slate-200">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="font-serif text-3xl md:text-4xl font-bold text-blue-900 mb-4">Contact The Firm</h2>
              <div className="w-24 h-1 bg-amber-700 mx-auto"></div>
              <p className="mt-6 text-lg text-slate-600 max-w-2xl mx-auto">
                Schedule a confidential consultation to discuss your case and explore your legal options.
              </p>
            </div>

            <div className="bg-white rounded-2xl shadow-xl overflow-hidden flex flex-col lg:flex-row border border-slate-100">
              {/* Form Side */}
              <div className="w-full lg:w-5/12 p-8 md:p-12 lg:p-14 bg-white">
                <h3 className="font-serif text-2xl font-bold text-blue-900 mb-6">Request a Consultation</h3>
                <form className="space-y-6" action="#">
                  <div>
                    <label htmlFor="name" className="block text-sm font-semibold text-slate-700 mb-2">Full Name</label>
                    <input type="text" id="name" className="w-full px-4 py-3 bg-slate-50 rounded-lg border border-slate-200 focus:ring-2 focus:ring-blue-900/20 focus:border-blue-900 focus:outline-none focus-visible:outline-none focus-visible:ring-2 transition-all" placeholder="e.g. Thomas Pinckney" />
                  </div>
                  <div>
                    <label htmlFor="phone" className="block text-sm font-semibold text-slate-700 mb-2">Phone Number</label>
                    <input type="tel" id="phone" className="w-full px-4 py-3 bg-slate-50 rounded-lg border border-slate-200 focus:ring-2 focus:ring-blue-900/20 focus:border-blue-900 focus:outline-none focus-visible:outline-none focus-visible:ring-2 transition-all" placeholder="(803) 555-0123" />
                  </div>
                  <div>
                    <label htmlFor="issue" className="block text-sm font-semibold text-slate-700 mb-2">Brief Description of Legal Issue</label>
                    <textarea id="issue" rows={4} className="w-full px-4 py-3 bg-slate-50 rounded-lg border border-slate-200 focus:ring-2 focus:ring-blue-900/20 focus:border-blue-900 focus:outline-none focus-visible:outline-none focus-visible:ring-2 transition-all resize-none" placeholder="How can we help you?"></textarea>
                  </div>
                  <button type="submit" className="w-full bg-blue-900 hover:bg-blue-800 text-white font-bold py-4 px-4 rounded-lg transition-colors shadow-md mt-4">
                    Submit Request
                  </button>
                  <p className="text-xs text-slate-500 text-center mt-6 leading-relaxed">
                    Disclaimer: Submitting this form does not create an attorney-client relationship. Please do not submit confidential or sensitive information.
                  </p>
                </form>
              </div>
              
              {/* Info & Map Side */}
              <div className="w-full lg:w-7/12 bg-blue-900 text-white p-8 md:p-12 lg:p-14 flex flex-col relative overflow-hidden">
                <div className="absolute top-0 right-0 -mt-16 -mr-16 text-blue-800/30">
                  <svg className="w-64 h-64" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"/></svg>
                </div>
                
                <h3 className="font-serif text-2xl font-bold mb-10 relative z-10">Office Information</h3>
                
                <div className="space-y-8 mb-10 flex-grow relative z-10">
                  <div className="flex items-start">
                    <div className="bg-blue-800/50 p-3 rounded-lg mr-4">
                      <svg className="w-6 h-6 text-amber-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" /></svg>
                    </div>
                    <div>
                      <h4 className="font-bold text-lg mb-1">Physical Address</h4>
                      <p className="text-blue-100 leading-relaxed">201 Buncombe Street<br/>Edgefield, SC 29824</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="bg-blue-800/50 p-3 rounded-lg mr-4">
                      <svg className="w-6 h-6 text-amber-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>
                    </div>
                    <div>
                      <h4 className="font-bold text-lg mb-1">Mailing Address</h4>
                      <p className="text-blue-100 leading-relaxed">P.O. Box 70<br/>Edgefield, SC 29824</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="bg-blue-800/50 p-3 rounded-lg mr-4">
                      <svg className="w-6 h-6 text-amber-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" /></svg>
                    </div>
                    <div>
                      <h4 className="font-bold text-lg mb-1">Phone & Email</h4>
                      <p className="text-blue-100 leading-relaxed">
                        <a href="tel:+18645698329" className="hover:text-white transition-colors block mb-1 font-semibold text-xl">+1 (864) 569-8329</a>
                        <a href="mailto:Wms_lawfirm@bellsouth.net" className="hover:text-white transition-colors break-all opacity-80">Wms_lawfirm@bellsouth.net</a>
                      </p>
                    </div>
                  </div>
                </div>
                
                {/* Map Embed */}
                <div className="w-full h-64 bg-slate-800 rounded-xl overflow-hidden relative z-10 shadow-inner border border-blue-800">
                  <iframe 
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3310.231126744049!2d-81.93321528434606!3d33.7915389806782!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x88f8373b9e59d9c7%3A0xc3afbfd7896d8339!2s201%20Buncombe%20St%2C%20Edgefield%2C%20SC%2029824!5e0!3m2!1sen!2sus!4v1700000000000!5m2!1sen!2sus" 
                    width="100%" 
                    height="100%" 
                    style={{ border: 0 }} 
                    allowFullScreen 
                    loading="lazy" 
                    referrerPolicy="no-referrer-when-downgrade"
                  ></iframe>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-slate-900 text-slate-400 py-12 border-t border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row justify-between items-center">
          <div className="mb-6 md:mb-0 text-center md:text-left">
            <h2 className="text-xl font-serif text-white font-bold mb-2">The Williams Law Firm</h2>
            <p className="text-sm">© 2026 The Williams Law Firm. All rights reserved.</p>
          </div>
          <div className="flex space-x-6 text-sm font-medium">
            <Link href="#practice-areas" className="hover:text-white transition-colors">Practice Areas</Link>
            <Link href="#about" className="hover:text-white transition-colors">About</Link>
            <Link href="#contact" className="hover:text-white transition-colors">Contact</Link>
          </div>
        </div>
      </footer>
    </div>
  );
}
