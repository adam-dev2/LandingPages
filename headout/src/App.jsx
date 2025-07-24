import React, { useState } from 'react';
import { Search, Star, MapPin, Calendar, Users, Globe, Shield, Headphones, Award, Menu, X } from 'lucide-react';

const App = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState('all');

  const destinations = [
    { name: 'New York', country: 'United States', image: 'https://images.unsplash.com/photo-1496442226666-8d4d0e62e6e9?w=400&h=300&fit=crop' },
    { name: 'London', country: 'United Kingdom', image: 'https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?w=400&h=300&fit=crop' },
    { name: 'Dubai', country: 'United Arab Emirates', image: 'https://images.unsplash.com/photo-1512453979798-5ea266f8880c?w=400&h=300&fit=crop' },
    { name: 'Rome', country: 'Italy', image: 'https://images.unsplash.com/photo-1552832230-c0197047daf9?w=400&h=300&fit=crop' },
    { name: 'Paris', country: 'France', image: 'https://images.unsplash.com/photo-1502602898536-47ad22581b52?w=400&h=300&fit=crop' },
    { name: 'Singapore', country: 'Singapore', image: 'https://images.unsplash.com/photo-1525625293386-3f8f99389edd?w=400&h=300&fit=crop' }
  ];

  const experiences = [
    {
      title: '[Limited-Time Offer] Skydive Dubai at The Palm + Photos, Video & Complimentary Yacht Tour',
      location: 'Dubai',
      rating: 4.8,
      reviews: 1484,
      price: '₹58,789',
      originalPrice: null,
      discount: null,
      image: 'https://images.unsplash.com/photo-1544197150-b99a580bb7a8?w=400&h=300&fit=crop',
      instant: true
    },
    {
      title: 'Acropolis Parthenon Tickets with Optional Audio Guide',
      location: 'Athens',
      rating: 4.4,
      reviews: 35429,
      price: '₹3,753',
      originalPrice: null,
      discount: null,
      image: 'https://images.unsplash.com/photo-1555993539-1732b0258235?w=400&h=300&fit=crop',
      instant: false
    },
    {
      title: 'From Rome: Pompeii and Amalfi Coast Day Trip',
      location: 'Rome',
      rating: 4.5,
      reviews: 163,
      price: '₹8,170',
      originalPrice: '₹9,052',
      discount: '10% off',
      image: 'https://images.unsplash.com/photo-1464207687429-7505649dae38?w=400&h=300&fit=crop',
      instant: true
    },
    {
      title: 'From London: Harry Potter™ Warner Bros. Studio Tickets with Coach Transfers',
      location: 'London',
      rating: 4.5,
      reviews: 9024,
      price: '₹10,850',
      originalPrice: null,
      discount: null,
      image: 'https://images.unsplash.com/photo-1551269901-5c5e14c25df7?w=400&h=300&fit=crop',
      instant: true,
      freeCancellation: true
    }
  ];

  const categories = [
    'Museums', 'Theme Parks', 'Zoos', 'Parks', 'Water Parks', 
    'City Cards', 'Religious Sites', 'Landmarks', 'Observation Decks', 
    'Aquariums', 'Immersive Experiences'
  ];

  const features = [
    {
      title: 'Only the finest',
      description: 'At Headout, you only find the best. We do the hard work so you don\'t have to.',
      icon: Award
    },
    {
      title: 'Greed is good',
      description: 'With quality, you also get lowest prices, last-minute availability and 24x7 support.',
      icon: Shield
    },
    {
      title: 'Experience every flavour',
      description: 'Offbeat or mainstream, a tour or a show, a game or a museum - we have \'em all.',
      icon: Globe
    },
    {
      title: 'No pain, only gain',
      description: 'Didn\'t love it? We\'ll give you your money back. Not cocky, just confident.',
      icon: Headphones
    }
  ];

  const reviews = [
    {
      name: 'Steve',
      country: 'United States',
      rating: 5,
      text: 'Our guide was amazing. He helped open our minds and explained that we need to look beyond the obvious to fully appreciate the park and Gaudi\'s vision. This was one of the best tours we took in Barcelona.',
      experience: 'Park Güell Guided Tour with Skip-the-Line Access'
    },
    {
      name: 'Kelly',
      country: 'United States',
      rating: 4,
      text: 'It was enjoyable, educational as well. I learned more than I would have thought. I\'m 64 and remember watching on tv the moon landing.',
      experience: 'Kennedy Space Center Admission Ticket'
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="bg-white shadow-sm sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center">
              <h1 className="text-2xl font-bold text-orange-500">Headout</h1>
            </div>
            
            <div className="hidden md:flex items-center space-x-8">
              <nav className="flex space-x-6">
                <a href="#" className="text-gray-700 hover:text-orange-500 transition-colors">Things to do</a>
                <a href="#" className="text-gray-700 hover:text-orange-500 transition-colors">Tours</a>
                <a href="#" className="text-gray-700 hover:text-orange-500 transition-colors">Transportation</a>
                <a href="#" className="text-gray-700 hover:text-orange-500 transition-colors">Travel Services</a>
              </nav>
              <div className="flex items-center space-x-4">
                <button className="text-gray-700 hover:text-orange-500">English / INR</button>
                <button className="text-gray-700 hover:text-orange-500">Help</button>
                <button className="bg-orange-500 text-white px-4 py-2 rounded-lg hover:bg-orange-600 transition-colors">Sign in</button>
              </div>
            </div>

            <button 
              className="md:hidden"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden bg-white border-t">
            <div className="px-4 py-2 space-y-2">
              <a href="#" className="block py-2 text-gray-700">Things to do</a>
              <a href="#" className="block py-2 text-gray-700">Tours</a>
              <a href="#" className="block py-2 text-gray-700">Transportation</a>
              <a href="#" className="block py-2 text-gray-700">Travel Services</a>
              <button className="w-full text-left py-2 text-gray-700">English / INR</button>
              <button className="w-full text-left py-2 text-gray-700">Help</button>
              <button className="w-full bg-orange-500 text-white py-2 rounded-lg mt-2">Sign in</button>
            </div>
          </div>
        )}
      </header>

      {/* Hero Section */}
      <section className="bg-gradient-to-r from-orange-500 to-red-500 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            The world's best<br />
            experiences curated just for<br />
            <span className="text-yellow-300">you</span>
          </h1>
          
          <div className="max-w-2xl mx-auto mt-8">
            <div className="relative">
              <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
              <input
                type="text"
                placeholder="Search for experiences and cities"
                className="w-full pl-12 pr-4 py-4 rounded-2xl text-gray-800 text-lg focus:outline-none focus:ring-4 focus:ring-orange-300"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Top Destinations */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900">Explore world's top destinations</h2>
            <button className="text-orange-500 hover:text-orange-600 font-semibold">See all</button>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
            {destinations.map((destination, index) => (
              <div key={index} className="group cursor-pointer">
                <div className="relative overflow-hidden rounded-2xl aspect-square mb-3">
                  <img 
                    src={destination.image} 
                    alt={destination.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                  <div className="absolute bottom-4 left-4 text-white">
                    <h3 className="font-semibold text-lg">{destination.name}</h3>
                    <p className="text-sm opacity-90">{destination.country}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Experiences */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-12">Headout's top recommendations</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {experiences.map((experience, index) => (
              <div key={index} className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300 overflow-hidden group">
                <div className="relative">
                  <img 
                    src={experience.image} 
                    alt={experience.title}
                    className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  {experience.instant && (
                    <span className="absolute top-3 left-3 bg-green-500 text-white px-2 py-1 rounded-lg text-xs font-semibold">
                      Instant confirmation
                    </span>
                  )}
                  {experience.freeCancellation && (
                    <span className="absolute top-3 right-3 bg-blue-500 text-white px-2 py-1 rounded-lg text-xs font-semibold">
                      Free cancellation
                    </span>
                  )}
                  {experience.discount && (
                    <span className="absolute bottom-3 left-3 bg-red-500 text-white px-2 py-1 rounded-lg text-xs font-semibold">
                      {experience.discount}
                    </span>
                  )}
                </div>
                
                <div className="p-6">
                  <div className="flex items-center mb-2">
                    <MapPin size={16} className="text-gray-400 mr-1" />
                    <span className="text-gray-600 text-sm">{experience.location}</span>
                  </div>
                  
                  <h3 className="font-semibold text-gray-900 mb-3 line-clamp-2 leading-snug">
                    {experience.title}
                  </h3>
                  
                  <div className="flex items-center mb-4">
                    <div className="flex items-center">
                      <Star size={16} className="text-yellow-400 fill-current" />
                      <span className="ml-1 text-sm font-semibold">{experience.rating}</span>
                    </div>
                    <span className="text-gray-500 text-sm ml-2">({experience.reviews.toLocaleString()})</span>
                  </div>
                  
                  <div className="flex items-center justify-between">
                    <div>
                      <span className="text-sm text-gray-500">from</span>
                      <div className="flex items-center space-x-2">
                        <span className="text-xl font-bold text-gray-900">{experience.price}</span>
                        {experience.originalPrice && (
                          <span className="text-sm text-gray-500 line-through">{experience.originalPrice}</span>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="text-center">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-orange-100 rounded-full mb-4">
                  <feature.icon className="w-8 h-8 text-orange-500" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Categories */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">Browse by themes</h2>
          
          <div className="flex flex-wrap gap-3 mb-8">
            {categories.map((category, index) => (
              <button
                key={index}
                onClick={() => setSelectedCategory(category)}
                className={`px-6 py-3 rounded-full border transition-colors ${
                  selectedCategory === category
                    ? 'bg-orange-500 text-white border-orange-500'
                    : 'bg-white text-gray-700 border-gray-300 hover:border-orange-500 hover:text-orange-500'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Reviews */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">
            Millions love heading out with us
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {reviews.map((review, index) => (
              <div key={index} className="bg-white rounded-2xl p-8 shadow-lg">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-orange-500 rounded-full flex items-center justify-center text-white font-bold text-xl">
                    {review.name[0]}
                  </div>
                  <div className="ml-4">
                    <h4 className="font-semibold text-gray-900">{review.name}</h4>
                    <p className="text-gray-600 text-sm">{review.country}</p>
                  </div>
                  <div className="ml-auto flex">
                    {[...Array(review.rating)].map((_, i) => (
                      <Star key={i} size={16} className="text-yellow-400 fill-current" />
                    ))}
                  </div>
                </div>
                
                <p className="text-gray-700 mb-4">{review.text}</p>
                <p className="text-sm text-gray-500 font-semibold">{review.experience}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-16 bg-orange-500 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div>
              <h3 className="text-4xl font-bold mb-2">40 million+</h3>
              <p className="text-orange-100">Happy customers across 10,000+ experiences</p>
            </div>
            <div>
              <h3 className="text-4xl font-bold mb-2">24 x 7</h3>
              <p className="text-orange-100">Help center with local experts</p>
            </div>
            <div>
              <h3 className="text-4xl font-bold mb-2">4.3</h3>
              <p className="text-orange-100">TrustScore from 42,112 reviews</p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <h3 className="text-xl font-bold mb-4 text-orange-500">Headout</h3>
              <p className="text-gray-400 mb-4">The world's best experiences curated just for you</p>
              <div className="flex space-x-4">
                <button className="bg-orange-500 text-white px-4 py-2 rounded-lg hover:bg-orange-600 transition-colors">
                  Download App
                </button>
              </div>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4">Cities</h4>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-white transition-colors">New York</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Las Vegas</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Rome</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Paris</a></li>
                <li><a href="#" className="hover:text-white transition-colors">London</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Dubai</a></li>
                <li><a href="#" className="hover:text-white transition-colors">+214 more</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4">Company</h4>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-white transition-colors">Our story</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Careers</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Newsroom</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Company blog</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Travel blog</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4">Support</h4>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-white transition-colors">Help center</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Chat with us</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Call us</a></li>
                <li><a href="#" className="hover:text-white transition-colors">support@headout.com</a></li>
              </ul>
            </div>
          </div>
          
          <div className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-400">
            <p>© 2014-2025 Headout, 82 Nassau St #60351 New York, NY 10038</p>
            <div className="flex justify-center space-x-6 mt-4">
              <a href="#" className="hover:text-white transition-colors">Terms of usage</a>
              <a href="#" className="hover:text-white transition-colors">Privacy policy</a>
              <a href="#" className="hover:text-white transition-colors">Company details</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default App;