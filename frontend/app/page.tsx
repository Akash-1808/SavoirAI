'use client';

import { useState } from 'react';
import { Briefcase, Search, User, MapPin, BookOpen, Languages, Users } from 'lucide-react';

export default function Home() {
  const [activeTab, setActiveTab] = useState('home');
  const [selectedInterests, setSelectedInterests] = useState<string[]>([]);

  const toggleInterest = (interest: string) => {
    setSelectedInterests(prev =>
      prev.includes(interest)
        ? prev.filter(i => i !== interest)
        : [...prev, interest]
    );
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header - Matching official website */}
      <header className="bg-white shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            <div className="flex items-center space-x-4">
              <div className="bg-[#1e3a8a] p-3 rounded-lg">
                <Briefcase className="h-8 w-8 text-white" />
              </div>
              <div>
                <h1 className="text-2xl font-bold text-[#1e3a8a]">PM Internship Scheme</h1>
                <p className="text-sm text-gray-600">Ministry of Corporate Affairs</p>
              </div>
            </div>
            
            <nav className="hidden md:flex space-x-8">
              {[
                { id: 'home', label: 'Home' },
                { id: 'about', label: 'About' },
                { id: 'internships', label: 'Internships' },
                { id: 'guidelines', label: 'Guidelines' },
                { id: 'contact', label: 'Contact' }
              ].map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`font-medium px-3 py-2 rounded-lg transition-colors ${
                    activeTab === tab.id 
                      ? 'bg-[#1e3a8a] text-white' 
                      : 'text-gray-700 hover:bg-gray-100'
                  }`}
                >
                  {tab.label}
                </button>
              ))}
            </nav>
            
            <div className="flex space-x-4">
              <button className="bg-[#dc2626] text-white px-6 py-2 rounded-lg font-medium hover:bg-[#b91c1c] transition-colors">
                Login
              </button>
              <button className="bg-[#16a34a] text-white px-6 py-2 rounded-lg font-medium hover:bg-[#15803d] transition-colors">
                Register
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="bg-gradient-to-r from-[#1e3a8a] to-[#3730a3] text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              AI-Powered Internship Recommendations
            </h1>
            <p className="text-xl mb-8 max-w-3xl mx-auto opacity-90">
              Smart matching for students from rural areas, tribal districts, and remote colleges. 
              Find internships that match your skills and aspirations.
            </p>
            
            {/* Quick Start Form */}
            <div className="bg-white rounded-xl shadow-2xl p-8 max-w-4xl mx-auto">
              <h3 className="text-2xl font-semibold text-gray-900 mb-6 text-center">
                Find Your Perfect Internship Match
              </h3>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
                <div className="relative">
                  <User className="absolute left-3 top-3 h-5 w-5 text-gray-400" />
                  <select className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#1e3a8a] focus:border-transparent text-gray-700">
                    <option>Select Education Level</option>
                    <option>High School/12th Pass</option>
                    <option>Undergraduate</option>
                    <option>Graduate</option>
                    <option>Diploma</option>
                    <option>Post Graduate</option>
                  </select>
                </div>
                
                <div className="relative">
                  <BookOpen className="absolute left-3 top-3 h-5 w-5 text-gray-400" />
                  <select className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#1e3a8a] focus:border-transparent text-gray-700">
                    <option>Select Stream/Field</option>
                    <option>Science & Technology</option>
                    <option>Commerce & Business</option>
                    <option>Arts & Humanities</option>
                    <option>Agriculture</option>
                    <option>Healthcare</option>
                  </select>
                </div>
                
                <div className="relative">
                  <MapPin className="absolute left-3 top-3 h-5 w-5 text-gray-400" />
                  <select className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#1e3a8a] focus:border-transparent text-gray-700">
                    <option>Preferred Location</option>
                    <option>Anywhere in India</option>
                    <option>My State</option>
                    <option>Remote/Work from Home</option>
                    <option>Hybrid</option>
                  </select>
                </div>
              </div>
              
              <div className="mb-6">
                <label className="block text-sm font-medium text-gray-700 mb-3">
                  Select Your Interests (Choose up to 3)
                </label>
                <div className="flex flex-wrap gap-3">
                  {['Technology', 'Healthcare', 'Education', 'Agriculture', 'Business', 'Government', 
                    'Research', 'Environment', 'Social Work', 'Media', 'Engineering', 'Finance'].map((interest) => (
                    <button
                      key={interest}
                      onClick={() => toggleInterest(interest)}
                      className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                        selectedInterests.includes(interest)
                          ? 'bg-[#1e3a8a] text-white shadow-md'
                          : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                      }`}
                    >
                      {interest}
                    </button>
                  ))}
                </div>
              </div>
              
              <button className="w-full bg-[#16a34a] text-white py-4 rounded-lg font-semibold hover:bg-[#15803d] transition-colors flex items-center justify-center space-x-3 text-lg">
                <Search className="h-5 w-5" />
                <span>Find Matching Internships</span>
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-[#1e3a8a] mb-4">
              Why Choose Our AI Recommendation Engine?
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Designed specifically for Indian youth, especially first-generation learners and students from remote areas
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: <User className="h-8 w-8" />,
                title: 'Personalized for You',
                description: 'AI algorithms understand your background, skills, and aspirations to suggest the most relevant internships'
              },
              {
                icon: <Languages className="h-8 w-8" />,
                title: 'Multi-Language Support',
                description: 'Available in Hindi, English and other regional languages for better accessibility'
              },
              {
                icon: <Users className="h-8 w-8" />,
                title: 'First-Generation Friendly',
                description: 'Simple interface designed for students with limited digital exposure and no prior experience'
              }
            ].map((feature, index) => (
              <div key={index} className="text-center p-6 bg-gray-50 rounded-xl hover:shadow-lg transition-shadow">
                <div className="bg-[#1e3a8a] w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 text-white">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-semibold text-[#1e3a8a] mb-3">{feature.title}</h3>
                <p className="text-gray-600 leading-relaxed">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-[#1e3a8a] text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {[
              { number: '10,000+', label: 'Active Internships' },
              { number: '50,000+', label: 'Registered Students' },
              { number: '500+', label: 'Partner Organizations' },
              { number: '95%', label: 'Satisfaction Rate' }
            ].map((stat, index) => (
              <div key={index}>
                <div className="text-3xl md:text-4xl font-bold mb-2">{stat.number}</div>
                <div className="text-blue-200">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center space-x-3 mb-4">
                <Briefcase className="h-8 w-8 text-[#16a34a]" />
                <span className="text-2xl font-bold">PM Internship</span>
              </div>
              <p className="text-gray-400 leading-relaxed">
                An initiative by Ministry of Corporate Affairs, Government of India to empower youth through meaningful internship opportunities.
              </p>
            </div>
            
            <div>
              <h4 className="font-semibold text-lg mb-4">Quick Links</h4>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-white transition-colors">Student Registration</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Organization Login</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Internship Guidelines</a></li>
                <li><a href="#" className="hover:text-white transition-colors">FAQs</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-semibold text-lg mb-4">Support</h4>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-white transition-colors">Help Desk</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Contact Us</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Grievance Redressal</a></li>
                <li><a href="#" className="hover:text-white transition-colors">User Manual</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-semibold text-lg mb-4">Contact Info</h4>
              <ul className="space-y-2 text-gray-400">
                <li>Ministry of Corporate Affairs</li>
                <li>Government of India</li>
                <li>Email: pminternship@mca.gov.in</li>
                <li>Helpline: 1800-11-0000</li>
              </ul>
            </div>
          </div>
          
          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; 2025 PM Internship Scheme, Ministry of Corporate Affairs. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}