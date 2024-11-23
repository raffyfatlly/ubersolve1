import React, { useState, useEffect } from 'react';
import { ArrowRight, Bot, MessageCircle, ChevronLeft, ChevronRight } from 'lucide-react';
import ContactForm from './ContactForm';

const chatExamples = [
  {
    title: "AI Assistant",
    subtitle: "Powered by GPT-4",
    conversations: [
      {
        user: "I'm interested to transform my WhatsApp with AI. How many languages can it handle?",
        bot: <>Hello! 👋 Thanks for your interest! Our AI is powered by GPT-4.0, which means it can understand and respond in virtually any language worldwide! 🌍
          <p className="mt-2">Most commonly used languages include:</p>
          <ul className="list-disc ml-4 mt-1">
            <li>English 🇬🇧</li>
            <li>Bahasa Malaysia 🇲🇾</li>
            <li>Mandarin 🇨🇳</li>
            <li>Tamil 🇮🇳</li>
          </ul>
          <p className="mt-2">And many more! The AI automatically detects and responds in your customer's preferred language. ✨</p>
        </>
      },
      {
        user: "How does the AI learn about my specific business information?",
        bot: <>Great question! 🎯 We train the AI with your business data, so it becomes your perfect virtual team member! It learns everything about:
          <ul className="list-disc ml-4 mt-2">
            <li>Your products and services 📦</li>
            <li>Business policies and procedures 📋</li>
            <li>Common customer questions ❓</li>
            <li>Your brand's unique communication style 🎨</li>
          </ul>
        </>
      }
    ]
  },
  {
    title: "Property Rental",
    subtitle: "Villa Booking Assistant",
    conversations: [
      {
        user: "Hi, is your Penang villa pet-friendly?",
        bot: "Hi! 🐾 Yes, our Penang villa is pet-friendly! Let us know in advance if you're bringing your furry friend, so we can prepare everything for your stay."
      },
      {
        user: "What's the rate for 2 nights this weekend?",
        bot: <>💰 Rate: RM 850 per night
          <br />📅 Total for 2 nights: RM 1,700
          <p className="mt-2">Would you like to book?</p>
        </>
      }
    ]
  },
  {
    title: "Museum Guide",
    subtitle: "Interactive Museum Assistant",
    conversations: [
      {
        user: "What are today's exhibition hours?",
        bot: <>Welcome! 🏛️ Our exhibition hours today are:
          <p className="mt-2">🕐 10:00 AM - 6:00 PM</p>
          <p className="mt-1">Last entry is at 5:00 PM. Would you like to know about our current exhibitions?</p>
        </>
      },
      {
        user: "Yes, what's the main exhibition now?",
        bot: <>Currently featuring: "Ancient Civilizations: Lost & Found" 🗿
          <p className="mt-2">Highlights include:</p>
          <ul className="list-disc ml-4 mt-1">
            <li>Egyptian artifacts (Level 1)</li>
            <li>Mesopotamian treasures (Level 2)</li>
            <li>Interactive archaeology zone</li>
          </ul>
          <p className="mt-2">Guided tours start every hour. Would you like to book a tour?</p>
        </>
      }
    ]
  },
  {
    title: "University Support",
    subtitle: "Student Services Assistant",
    conversations: [
      {
        user: "How do I apply for the Computer Science program?",
        bot: <>Hi! 👋 Here's how to apply for Computer Science:
          <p className="mt-2">1️⃣ Submit online application</p>
          <p className="mt-1">2️⃣ Upload required documents:</p>
          <ul className="list-disc ml-4 mt-1">
            <li>Academic transcripts</li>
            <li>English proficiency test</li>
            <li>Statement of purpose</li>
          </ul>
          <p className="mt-2">Application deadline: September 30th</p>
        </>
      },
      {
        user: "What are the entry requirements?",
        bot: <>For Computer Science, you need:
          <p className="mt-2">📚 Academic Requirements:</p>
          <ul className="list-disc ml-4 mt-1">
            <li>CGPA 3.0 or above</li>
            <li>Strong math background</li>
            <li>IELTS 6.5 or equivalent</li>
          </ul>
          <p className="mt-2">Would you like me to send you the detailed program structure?</p>
        </>
      }
    ]
  }
];

export default function Hero() {
  const [currentExample, setCurrentExample] = useState(0);
  const [showContactForm, setShowContactForm] = useState(false);
  const [currentPlatform, setCurrentPlatform] = useState(0);
  
  const platforms = ['Whatsapp', 'Website', 'Facebook', 'Instagram', 'Telegram'];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentPlatform((prev) => (prev + 1) % platforms.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  const nextExample = () => {
    setCurrentExample((prev) => (prev + 1) % chatExamples.length);
  };

  const prevExample = () => {
    setCurrentExample((prev) => (prev - 1 + chatExamples.length) % chatExamples.length);
  };

  return (
    <header className="container mx-auto px-4 py-12 md:py-24">
      <div className="flex flex-col lg:flex-row items-center gap-12">
        <div className="lg:w-1/2 space-y-6">
          <div className="text-sm font-semibold text-green-500 mb-2">by Ubersolve</div>
          <h1 className="text-5xl font-bold leading-tight text-white">
            Upgrade your{' '}
            <span className="inline-block">
              <span key={platforms[currentPlatform]} className="text-green-500 animate-slide-up">
                {platforms[currentPlatform]}
              </span>
            </span>
            {' '}with AI Chatbot
          </h1>
          <p className="text-xl text-gray-400">
            Connect with all your customers anytime — on every channel.
          </p>
          <div className="flex justify-center sm:justify-start gap-4">
            <button 
              onClick={() => setShowContactForm(true)}
              className="bg-green-500 hover:bg-green-600 text-white px-4 sm:px-6 py-2.5 rounded-lg font-semibold flex items-center justify-center gap-2 transition-all text-sm sm:text-base w-[160px] sm:w-auto"
            >
              Let's Build Your Chatbot
              <ArrowRight size={20} />
            </button>
            <a 
              href="https://wa.link/5puj88" 
              target="_blank" 
              rel="noopener noreferrer"
              className="border border-gray-700 hover:border-green-500 px-4 sm:px-6 py-2.5 rounded-lg font-semibold transition-all flex items-center justify-center gap-2 text-sm sm:text-base text-center w-[160px] sm:w-auto"
            >
              <span className="text-center">AirBnB Bot Demo</span>
              <MessageCircle size={20} />
            </a>
          </div>
        </div>
        <div className="lg:w-1/2 w-full min-w-[300px] sm:min-w-[400px]" id="about">
          <div className="relative">
            <div className="absolute -inset-1 bg-gradient-to-r from-green-500 to-emerald-500 rounded-lg blur opacity-30"></div>
            <div className="relative bg-gray-800 p-6 rounded-lg shadow-xl">
              <div className="flex items-center justify-between border-b border-gray-700 pb-4 mb-4">
                <div className="flex items-center gap-3">
                  <Bot className="text-green-500" size={32} />
                  <div>
                    <h3 className="font-semibold">{chatExamples[currentExample].title}</h3>
                    <p className="text-sm text-gray-400">{chatExamples[currentExample].subtitle}</p>
                  </div>
                </div>
                <div className="flex gap-2">
                  <button 
                    onClick={prevExample}
                    className="p-1 hover:bg-gray-700 rounded-full transition-colors"
                    aria-label="Previous example"
                  >
                    <ChevronLeft size={20} />
                  </button>
                  <button 
                    onClick={nextExample}
                    className="p-1 hover:bg-gray-700 rounded-full transition-colors"
                    aria-label="Next example"
                  >
                    <ChevronRight size={20} />
                  </button>
                </div>
              </div>
              <div className="space-y-4 max-h-[400px] overflow-y-auto pr-2 scrollbar-thin scrollbar-thumb-gray-700 scrollbar-track-gray-800">
                {chatExamples[currentExample].conversations.map((conv, idx) => (
                  <React.Fragment key={idx}>
                    <div className="bg-gray-700 p-3 rounded-lg max-w-[80%]">
                      <p>{conv.user}</p>
                    </div>
                    <div className="bg-green-500/10 p-3 rounded-lg max-w-[80%] ml-auto">
                      {conv.bot}
                    </div>
                  </React.Fragment>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
      {showContactForm && <ContactForm onClose={() => setShowContactForm(false)} />}
    </header>
  );
}