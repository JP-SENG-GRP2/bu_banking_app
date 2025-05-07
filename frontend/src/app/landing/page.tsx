'use client';

import React, { useState, useEffect } from 'react';
import { 
  ChevronRight, 
  Shield, 
  CreditCard, 
  LineChart, 
  User, 
  Send
} from 'lucide-react';

const LandingPage = () => {
  const [scrolled, setScrolled] = useState(false);
  const [statCounters, setStatCounters] = useState({
    users: 0,
    satisfaction: 0,
    rating: 0
  });

  // Handle scroll effect for navbar
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Animate stat counters
  useEffect(() => {
    const interval = setInterval(() => {
      setStatCounters(prev => ({
        users: prev.users < 10 ? prev.users + 0.2 : 10,
        satisfaction: prev.satisfaction < 98 ? prev.satisfaction + 2 : 98,
        rating: prev.rating < 5.0 ? prev.rating + 0.1 : 5.0
      }));
    }, 50);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white overflow-hidden">
      {/* Header/Navigation */}
      <header className={`py-4 px-6 md:px-12 fixed w-full z-50 transition-all duration-300 ${
        scrolled ? 'bg-white shadow-md' : 'bg-transparent'
      }`}>
        <div className="container mx-auto flex justify-between items-center">
          <div className="flex items-center">
            <div className="w-8 h-8 rounded-full bg-gradient-to-r from-indigo-500 to-indigo-600"></div>
            <span className="ml-2 text-2xl font-semibold bg-gradient-to-r from-indigo-500 to-indigo-400 bg-clip-text text-transparent">
              Highland Ledger
            </span>
          </div>
          
          <div className="hidden md:flex items-center space-x-8">
            <a href="#" className="text-gray-700 hover:text-indigo-600 font-medium transition">Home</a>
            <a href="#" className="text-gray-700 hover:text-indigo-600 font-medium transition">Features</a>
            <a href="#" className="text-gray-700 hover:text-indigo-600 font-medium transition">About</a>
          </div>
          
          <div className="flex items-center space-x-4">
            <button className="px-5 py-2 rounded-full border border-indigo-400 text-indigo-600 font-medium hover:bg-indigo-50 transition">
              Login
            </button>
            <button className="px-5 py-2 rounded-full bg-gradient-to-r from-indigo-500 to-indigo-600 text-white font-medium hover:shadow-lg transition">
              Register
            </button>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="pt-32 pb-20 md:pt-40 md:pb-28 px-6 md:px-12 relative">
        <div className="container mx-auto md:grid-cols-1 gap-12 items-center">
          <div className="relative z-10">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight text-gray-800">
              Navigate <span className="text-indigo-500">Your Money</span>
              <br />
              <span className="text-indigo-500">Journey</span> <span className="text-gray-800">With Us</span>
            </h1>
            <p className="mt-6 text-lg text-gray-600 max-w-md">
              Earn cash back, build your credit history, save effortlessly, and so much more.
              Modern banking that works for you.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <button className="px-6 py-3 rounded-full bg-gradient-to-r from-indigo-500 to-indigo-600 text-white font-medium hover:shadow-lg transform hover:-translate-y-1 transition duration-300">
                Get Started
              </button>
              <button className="px-6 py-3 rounded-full border border-gray-300 text-gray-700 font-medium hover:border-indigo-400 hover:text-indigo-600 transition">
                Explore Features
              </button>
            </div>
            
            {/* Statistics */}
            <div className="mt-12 grid grid-cols-3 gap-4">
              <div className="text-center">
                <div className="text-3xl font-bold text-gray-800">
                  {statCounters.users.toFixed(1)}M+
                </div>
                <div className="text-gray-500 text-sm">Users</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-gray-800">
                  {statCounters.satisfaction.toFixed(0)}%
                </div>
                <div className="text-gray-500 text-sm">Satisfaction</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-gray-800">
                  {statCounters.rating.toFixed(1)}
                </div>
                <div className="text-gray-500 text-sm">App Rating</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 px-6 md:px-12 bg-gradient-to-b from-white to-indigo-50">
        <div className="container mx-auto">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-800">
              Banking <span className="text-indigo-500">Made Simple</span>
            </h2>
            <p className="text-gray-600">
              We've reimagined banking to be more intuitive, transparent, and rewarding.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {/* Feature 1 */}
            <div className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition transform hover:-translate-y-1">
              <div className="w-12 h-12 rounded-full bg-indigo-100 flex items-center justify-center mb-4">
                <CreditCard className="w-6 h-6 text-indigo-600" />
              </div>
              <h3 className="text-xl font-semibold mb-2 text-gray-800">Smart Cards</h3>
              <p className="text-gray-600">
                Get instant notifications, set spending limits, and freeze your card with a single tap.
              </p>
              <a href="#" className="mt-4 inline-flex items-center text-indigo-600 font-medium hover:text-indigo-700">
                Learn more <ChevronRight className="w-4 h-4 ml-1" />
              </a>
            </div>
            
            {/* Feature 2 */}
            <div className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition transform hover:-translate-y-1">
              <div className="w-12 h-12 rounded-full bg-teal-100 flex items-center justify-center mb-4">
                <LineChart className="w-6 h-6 text-teal-600" />
              </div>
              <h3 className="text-xl font-semibold mb-2 text-gray-800">Financial Insights</h3>
              <p className="text-gray-600">
                Visualize your spending patterns and get personalized tips to improve your financial health.
              </p>
              <a href="#" className="mt-4 inline-flex items-center text-teal-600 font-medium hover:text-teal-700">
                Learn more <ChevronRight className="w-4 h-4 ml-1" />
              </a>
            </div>
            
            {/* Feature 3 */}
            <div className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition transform hover:-translate-y-1">
              <div className="w-12 h-12 rounded-full bg-pink-100 flex items-center justify-center mb-4">
                <Shield className="w-6 h-6 text-pink-600" />
              </div>
              <h3 className="text-xl font-semibold mb-2 text-gray-800">Secure Banking</h3>
              <p className="text-gray-600">
                Bank with confidence using our advanced security features including biometric verification.
              </p>
              <a href="#" className="mt-4 inline-flex items-center text-pink-600 font-medium hover:text-pink-700">
                Learn more <ChevronRight className="w-4 h-4 ml-1" />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* How it Works */}
      <section className="py-16 px-6 md:px-12">
        <div className="container mx-auto">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-800">
              How It <span className="text-indigo-500">Works</span>
            </h2>
            <p className="text-gray-600">
              Getting started is easy. Three simple steps to transform your banking experience.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8 relative">
            {/* Line connector (desktop only) */}
            <div className="hidden md:block absolute top-1/2 left-0 right-0 h-0.5 bg-indigo-100"></div>
            
            {/* Step 1 */}
            <div className="relative z-10">
              <div className="bg-white rounded-xl p-6 border border-gray-100 shadow-md">
                <div className="w-12 h-12 rounded-full bg-indigo-500 text-white flex items-center justify-center font-bold mb-6 mx-auto">
                  1
                </div>
                <h3 className="text-xl text-center font-semibold mb-4 text-gray-800">Sign Up</h3>
                <p className="text-gray-600 text-center">
                  Create your account in minutes. No paperwork needed — just verify your identity online.
                </p>
              </div>
            </div>
            
            {/* Step 2 */}
            <div className="relative z-10">
              <div className="bg-white rounded-xl p-6 border border-gray-100 shadow-md">
                <div className="w-12 h-12 rounded-full bg-indigo-500 text-white flex items-center justify-center font-bold mb-6 mx-auto">
                  2
                </div>
                <h3 className="text-xl text-center font-semibold mb-4 text-gray-800">Link Accounts</h3>
                <p className="text-gray-600 text-center">
                  Connect your existing accounts or start fresh with our streamlined onboarding.
                </p>
              </div>
            </div>
            
            {/* Step 3 */}
            <div className="relative z-10">
              <div className="bg-white rounded-xl p-6 border border-gray-100 shadow-md">
                <div className="w-12 h-12 rounded-full bg-indigo-500 text-white flex items-center justify-center font-bold mb-6 mx-auto">
                  3
                </div>
                <h3 className="text-xl text-center font-semibold mb-4 text-gray-800">Start Banking</h3>
                <p className="text-gray-600 text-center">
                  Enjoy modern banking features, insights, and rewards from day one.
                </p>
              </div>
            </div>
          </div>
          
          <div className="mt-12 text-center">
            <button className="px-8 py-3 rounded-full bg-gradient-to-r from-indigo-500 to-indigo-600 text-white font-medium hover:shadow-lg transition">
              Create Your Account
            </button>
          </div>
        </div>
      </section>

      {/* Testimonial */}
      <section className="py-16 px-6 md:px-12 bg-gradient-to-br from-indigo-50 to-indigo-100">
        <div className="container mx-auto max-w-4xl">
          <div className="bg-white rounded-2xl shadow-xl p-8 md:p-12 relative">
            <div className="absolute -top-6 -left-6 w-12 h-12 text-indigo-600 text-6xl">"</div>
            <div className="md:flex items-center gap-8">
              <div className="mb-6 md:mb-0 flex-shrink-0">
                <div className="w-20 h-20 md:w-24 md:h-24 rounded-full bg-gray-300 overflow-hidden">
                  <div className="w-full h-full bg-indigo-200 flex items-center justify-center">
                    <User className="w-12 h-12 text-indigo-600" />
                  </div>
                </div>
              </div>
              <div>
                <blockquote className="text-lg md:text-xl text-gray-700 italic mb-4">
                  Highland Ledger transformed how I think about banking. The insights helped me save an extra $450 each month, and the customer service is unmatched!
                </blockquote>
                <div className="font-semibold text-gray-800">Sarah Johnson</div>
                <div className="text-gray-500 text-sm">Member since 2023</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-6 md:px-12 bg-gradient-to-br from-indigo-600 to-indigo-800 text-white">
        <div className="container mx-auto text-center max-w-3xl">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Transform Your Banking Experience?</h2>
          <p className="text-indigo-100 mb-8 text-lg">
            Join 10M+ members who've discovered a better way to bank. No hidden fees, no hassle, just simple banking.
          </p>
          <div className="flex flex-col md:flex-row gap-4 justify-center">
            <button className="px-8 py-4 rounded-full bg-white text-indigo-600 font-semibold hover:shadow-lg transition transform hover:-translate-y-1">
              Get Started Now
            </button>
            <button className="px-8 py-4 rounded-full border border-white text-white font-semibold hover:bg-indigo-700 transition">
              Schedule a Demo
            </button>
          </div>
          <div className="mt-8 flex justify-center space-x-8">
            <div className="text-center">
              <div className="font-semibold text-2xl">24/7</div>
              <div className="text-indigo-200 text-sm">Support</div>
            </div>
            <div className="text-center">
              <div className="font-semibold text-2xl">0$</div>
              <div className="text-indigo-200 text-sm">Monthly Fee</div>
            </div>
            <div className="text-center">
              <div className="font-semibold text-2xl">1.5%</div>
              <div className="text-indigo-200 text-sm">Cash Back</div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12 px-6 md:px-12">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center mb-4">
                <div className="w-8 h-8 rounded-full bg-gradient-to-r from-indigo-500 to-indigo-600"></div>
                <span className="ml-2 text-xl font-semibold">Highland Ledger</span>
              </div>
              <p className="text-gray-400 text-sm">
                Modern banking for modern lives. FDIC Insured.
              </p>
              <div className="flex space-x-4 mt-4">
                <a href="#" className="w-8 h-8 rounded-full bg-gray-800 flex items-center justify-center hover:bg-indigo-600 transition">
                  <span className="sr-only">Facebook</span>
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path fillRule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" clipRule="evenodd" />
                  </svg>
                </a>
                <a href="#" className="w-8 h-8 rounded-full bg-gray-800 flex items-center justify-center hover:bg-indigo-600 transition">
                  <span className="sr-only">Twitter</span>
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
                  </svg>
                </a>
                <a href="#" className="w-8 h-8 rounded-full bg-gray-800 flex items-center justify-center hover:bg-indigo-600 transition">
                  <span className="sr-only">Instagram</span>
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path fillRule="evenodd" d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z" clipRule="evenodd" />
                  </svg>
                </a>
              </div>
            </div>
            
            <div>
              <h3 className="font-semibold text-lg mb-4">Products</h3>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-indigo-400 transition">Checking Accounts</a></li>
                <li><a href="#" className="hover:text-indigo-400 transition">Savings Accounts</a></li>
                <li><a href="#" className="hover:text-indigo-400 transition">Credit Cards</a></li>
                <li><a href="#" className="hover:text-indigo-400 transition">Loans</a></li>
                <li><a href="#" className="hover:text-indigo-400 transition">Investments</a></li>
              </ul>
            </div>
            
            <div>
              <h3 className="font-semibold text-lg mb-4">Resources</h3>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-indigo-400 transition">Help Center</a></li>
                <li><a href="#" className="hover:text-indigo-400 transition">Financial Education</a></li>
                <li><a href="#" className="hover:text-indigo-400 transition">Mobile App</a></li>
                <li><a href="#" className="hover:text-indigo-400 transition">Blog</a></li>
                <li><a href="#" className="hover:text-indigo-400 transition">Community</a></li>
              </ul>
            </div>
            
            <div>
              <h3 className="font-semibold text-lg mb-4">Company</h3>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-indigo-400 transition">About Us</a></li>
                <li><a href="#" className="hover:text-indigo-400 transition">Careers</a></li>
                <li><a href="#" className="hover:text-indigo-400 transition">Press</a></li>
                <li><a href="#" className="hover:text-indigo-400 transition">Security</a></li>
                <li><a href="#" className="hover:text-indigo-400 transition">Contact</a></li>
              </ul>
            </div>
          </div>
          
          <div className="border-t border-gray-800 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
            <div className="text-gray-400 text-sm">
              © 2025 Highland Ledger. All rights reserved.
            </div>
            <div className="flex space-x-6 mt-4 md:mt-0 text-sm text-gray-400">
              <a href="#" className="hover:text-white transition">Privacy Policy</a>
              <a href="#" className="hover:text-white transition">Terms of Service</a>
              <a href="#" className="hover:text-white transition">Cookies</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default LandingPage; 