import React, { useState, useRef, useEffect } from 'react';
import { Menu, X, ChevronDown, Phone, Mail, MapPin, Facebook, Instagram, Twitter } from 'lucide-react';
import ContactForm from './components/ContactForm';
import Gallery from './components/Gallery';
import WhyChooseUs from './components/WhyChooseUs';
import AboutUs from './components/AboutUs';

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isGalleryOpen, setIsGalleryOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const [activeGallery, setActiveGallery] = useState('');
  const galleryRef = useRef<HTMLDivElement>(null);

  const galleryCategories = [
    'الأبواب المصفحة التركية',
    'الأبواب المصفحة التركية ',
    'أبواب الغرف الداخليه',
    'التصاميم الخاصة'
  ];

  // Close gallery dropdown when clicking outside
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (galleryRef.current && !galleryRef.current.contains(event.target as Node)) {
        setIsGalleryOpen(false);
      }
    }

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  return (
    <div dir="rtl" className="min-h-screen bg-gray-50">
      {/* Navigation */}
      <nav className="bg-white shadow-lg">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex justify-between h-16">
            <div className="flex items-center">
              <span className="text-2xl font-bold text-gray-800">عبيد للتجارة</span>
            </div>

            {/* Desktop Menu */}
            <div className="hidden md:flex items-center space-x-8 space-x-reverse">
              <button 
                onClick={() => setActiveSection('home')}
                className="text-gray-700 hover:text-gray-900"
              >
                الصفحة الرئيسية
              </button>
              <button 
                onClick={() => setActiveSection('why-choose-us')}
                className="text-gray-700 hover:text-gray-900"
              >
                لما تختارنا
              </button>
              <button 
                onClick={() => setActiveSection('about')}
                className="text-gray-700 hover:text-gray-900"
              >
                من نحن
              </button>
              <div ref={galleryRef} className="relative">
                <button
                  onClick={() => setIsGalleryOpen(!isGalleryOpen)}
                  className="flex items-center text-gray-700 hover:text-gray-900"
                >
                  معرض الأبواب
                  <ChevronDown className={`h-4 w-4 mr-1 transition-transform duration-200 ${isGalleryOpen ? 'transform rotate-180' : ''}`} />
                </button>
                {isGalleryOpen && (
                  <div className="absolute right-0 mt-2 w-48 bg-white rounded-md shadow-lg z-50">
                    {galleryCategories.map((category) => (
                      <button
                        key={category}
                        onClick={() => {
                          setActiveSection('gallery');
                          setActiveGallery(category);
                          setIsGalleryOpen(false);
                        }}
                        className="block w-full text-right px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                      >
                        {category}
                      </button>
                    ))}
                  </div>
                )}
              </div>
              <button 
                onClick={() => setActiveSection('contact')}
                className="text-gray-700 hover:text-gray-900"
              >
                تواصل معنا
              </button>
            </div>

            {/* Mobile menu button */}
            <div className="md:hidden flex items-center">
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="inline-flex items-center justify-center p-2 rounded-md text-gray-700 hover:text-gray-900"
              >
                {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1">
              <button
                onClick={() => {
                  setActiveSection('home');
                  setIsMenuOpen(false);
                }}
                className="block w-full text-right px-3 py-2 text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50"
              >
                الصفحة الرئيسية
              </button>
              <button
                onClick={() => {
                  setActiveSection('why-choose-us');
                  setIsMenuOpen(false);
                }}
                className="block w-full text-right px-3 py-2 text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50"
              >
                لما تختارنا
              </button>
              <button
                onClick={() => {
                  setActiveSection('about');
                  setIsMenuOpen(false);
                }}
                className="block w-full text-right px-3 py-2 text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50"
              >
                من نحن
              </button>
              <div className="pr-3">
                <button
                  onClick={() => setIsGalleryOpen(!isGalleryOpen)}
                  className="flex items-center w-full text-right px-3 py-2 text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50"
                >
                  معرض الأبواب
                  <ChevronDown className={`h-4 w-4 mr-1 transition-transform duration-200 ${isGalleryOpen ? 'transform rotate-180' : ''}`} />
                </button>
                {isGalleryOpen && (
                  <div className="mt-1">
                    {galleryCategories.map((category) => (
                      <button
                        key={category}
                        onClick={() => {
                          setActiveSection('gallery');
                          setActiveGallery(category);
                          setIsMenuOpen(false);
                          setIsGalleryOpen(false);
                        }}
                        className="block w-full text-right px-3 py-2 text-base text-gray-600 hover:text-gray-900 hover:bg-gray-50"
                      >
                        {category}
                      </button>
                    ))}
                  </div>
                )}
              </div>
              <button
                onClick={() => {
                  setActiveSection('contact');
                  setIsMenuOpen(false);
                }}
                className="block w-full text-right px-3 py-2 text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50"
              >
                تواصل معنا
              </button>
            </div>
          </div>
        )}
      </nav>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 py-8">
        {activeSection === 'why-choose-us' && <WhyChooseUs />}
        {activeSection === 'about' && <AboutUs />}
        {activeSection === 'gallery' && <Gallery category={activeGallery} />}
        {activeSection === 'contact' && <ContactForm />}
      </main>

      {/* Footer */}
      <footer className="bg-gray-800 text-white">
        <div className="max-w-7xl mx-auto px-4 py-12">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <h3 className="text-xl font-bold mb-4">عبيد للتجارة</h3>
              <p className="text-gray-300">رائدون في مجال الأبواب المصفحة والحلول الأمنية</p>
            </div>
            <div>
              <h3 className="text-xl font-bold mb-4">تواصل معنا</h3>
              <div className="space-y-2">
                <div className="flex items-center">
                  <Phone className="h-5 w-5 ml-2" />
                  <span>+201095058080</span>
                </div>
                <div className="flex items-center">
                  <Mail className="h-5 w-5 ml-2" />
                  <span>rm664150@gmail.com</span>
                </div>
                <div className="flex items-center">
                  <MapPin className="h-5 w-5 ml-2" />
                  <span>البحيرة، ايتاي البارود، شارع جمال عبد الناصر</span>
                </div>
              </div>
            </div>
            <div>
              <h3 className="text-xl font-bold mb-4">تابعونا</h3>
              <div className="flex space-x-4 space-x-reverse">
                <a href="#" className="hover:text-gray-300">
                  <Facebook className="h-6 w-6" />
                </a>
                <a href="#" className="hover:text-gray-300">
                  <Instagram className="h-6 w-6" />
                </a>
                <a href="#" className="hover:text-gray-300">
                  <Twitter className="h-6 w-6" />
                </a>
              </div>
            </div>
          </div>
          <div className="mt-8 pt-8 border-t border-gray-700 text-center">
            <p className="text-gray-300">© {new Date().getFullYear()} عبيد للتجارة. جميع الحقوق محفوظة</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;