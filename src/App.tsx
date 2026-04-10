import { useState } from 'react'

interface Feature {
  icon: string
  title: string
  description: string
}

interface Testimonial {
  name: string
  role: string
  content: string
  avatar: string
}

interface PricingPlan {
  name: string
  price: string
  period: string
  features: string[]
  highlighted?: boolean
}

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [email, setEmail] = useState('')

  const features: Feature[] = [
    {
      icon: '🎧',
      title: 'Premium Sound Quality',
      description: 'Experience crystal-clear audio with our advanced acoustic technology and deep bass response.',
    },
    {
      icon: '🔋',
      title: '40-Hour Battery Life',
      description: 'Enjoy uninterrupted listening for days with our industry-leading battery technology.',
    },
    {
      icon: '📱',
      title: 'Seamless Connectivity',
      description: 'Connect effortlessly to all your devices with Bluetooth 5.3 and multi-point pairing.',
    },
    {
      icon: '☁️',
      title: 'Ultra Comfortable',
      description: 'Memory foam ear cushions and adjustable headband ensure all-day comfort.',
    },
    {
      icon: '🎤',
      title: 'Active Noise Cancellation',
      description: 'Block out the world with our advanced ANC technology for immersive listening.',
    },
    {
      icon: '🛡️',
      title: 'Built to Last',
      description: 'Premium materials and robust construction ensure your headphones last for years.',
    },
  ]

  const testimonials: Testimonial[] = [
    {
      name: 'Sarah Johnson',
      role: 'Music Producer',
      content: 'These headphones have transformed my workflow. The sound quality is unmatched, and the comfort allows me to work for hours without fatigue.',
      avatar: 'SJ',
    },
    {
      name: 'Michael Chen',
      role: 'Tech Reviewer',
      content: 'After testing dozens of premium headphones, TechPro stands out. The ANC is incredible, and the battery life is simply unbeatable.',
      avatar: 'MC',
    },
    {
      name: 'Emily Rodriguez',
      role: 'Fitness Enthusiast',
      content: 'Perfect for my workouts! They stay in place, sound amazing, and the sweat resistance means I never worry about damage.',
      avatar: 'ER',
    },
  ]

  const pricingPlans: PricingPlan[] = [
    {
      name: 'Standard',
      price: '$199',
      period: 'one-time',
      features: [
        'TechPro Wireless Headphones',
        'Carrying Case',
        'USB-C Charging Cable',
        '3.5mm Audio Cable',
        '2-Year Warranty',
      ],
    },
    {
      name: 'Pro Bundle',
      price: '$249',
      period: 'one-time',
      features: [
        'Everything in Standard',
        'Premium Hard Case',
        'Extra Ear Cushions',
        'Wireless Charging Pad',
        '3-Year Extended Warranty',
        'Priority Support',
      ],
      highlighted: true,
    },
    {
      name: 'Enterprise',
      price: 'Custom',
      period: 'contact us',
      features: [
        'Bulk Ordering',
        'Custom Branding',
        'Dedicated Account Manager',
        'Volume Discounts',
        'Custom Warranty Options',
      ],
    },
  ]

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    alert(`Thank you for subscribing with: ${email}`)
    setEmail('')
  }

  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-white/80 backdrop-blur-md z-50 border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center space-x-2">
              <span className="text-2xl font-bold text-indigo-600">TechPro</span>
            </div>
            
            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-8">
              <a href="#features" className="text-gray-600 hover:text-indigo-600 transition-colors">Features</a>
              <a href="#testimonials" className="text-gray-600 hover:text-indigo-600 transition-colors">Reviews</a>
              <a href="#pricing" className="text-gray-600 hover:text-indigo-600 transition-colors">Pricing</a>
              <button className="bg-indigo-600 text-white px-6 py-2 rounded-full hover:bg-indigo-700 transition-colors">
                Buy Now
              </button>
            </div>

            {/* Mobile Menu Button */}
            <button 
              className="md:hidden p-2"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                {isMenuOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>

          {/* Mobile Navigation */}
          {isMenuOpen && (
            <div className="md:hidden py-4 border-t border-gray-100">
              <a href="#features" className="block py-2 text-gray-600 hover:text-indigo-600">Features</a>
              <a href="#testimonials" className="block py-2 text-gray-600 hover:text-indigo-600">Reviews</a>
              <a href="#pricing" className="block py-2 text-gray-600 hover:text-indigo-600">Pricing</a>
              <button className="mt-4 w-full bg-indigo-600 text-white px-6 py-2 rounded-full hover:bg-indigo-700">
                Buy Now
              </button>
            </div>
          )}
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-24 pb-16 md:pt-32 md:pb-24 bg-gradient-to-br from-indigo-50 via-white to-purple-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="space-y-4">
                <span className="inline-block px-4 py-1 bg-indigo-100 text-indigo-700 rounded-full text-sm font-medium">
                  New Release 2024
                </span>
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
                  Experience Sound
                  <span className="text-indigo-600"> Like Never Before</span>
                </h1>
                <p className="text-lg text-gray-600 max-w-xl">
                  Premium wireless headphones engineered for audiophiles. Immerse yourself in crystal-clear audio with active noise cancellation and 40-hour battery life.
                </p>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <button className="bg-indigo-600 text-white px-8 py-4 rounded-full text-lg font-semibold hover:bg-indigo-700 transition-all transform hover:scale-105 shadow-lg">
                  Shop Now - $199
                </button>
                <button className="border-2 border-gray-300 text-gray-700 px-8 py-4 rounded-full text-lg font-semibold hover:border-indigo-600 hover:text-indigo-600 transition-all">
                  Watch Demo
                </button>
              </div>

              <div className="flex items-center space-x-8 pt-4">
                <div>
                  <p className="text-3xl font-bold text-gray-900">50K+</p>
                  <p className="text-gray-600">Happy Customers</p>
                </div>
                <div className="w-px h-12 bg-gray-300"></div>
                <div>
                  <p className="text-3xl font-bold text-gray-900">4.9★</p>
                  <p className="text-gray-600">Average Rating</p>
                </div>
                <div className="w-px h-12 bg-gray-300"></div>
                <div>
                  <p className="text-3xl font-bold text-gray-900">2 Year</p>
                  <p className="text-gray-600">Warranty</p>
                </div>
              </div>
            </div>

            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-indigo-400 to-purple-400 rounded-3xl transform rotate-3 scale-105 opacity-20"></div>
              <div className="relative bg-white rounded-3xl shadow-2xl p-8">
                <img 
                  src="https://placehold.co/600x600/6366f1/ffffff?text=TechPro+Headphones" 
                  alt="TechPro Wireless Headphones"
                  className="w-full h-auto rounded-2xl"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Why Choose TechPro?
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Engineered with cutting-edge technology and premium materials for the ultimate listening experience.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div 
                key={index}
                className="group p-8 bg-gray-50 rounded-2xl hover:bg-indigo-50 transition-all duration-300 hover:shadow-lg"
              >
                <div className="text-4xl mb-4">{feature.icon}</div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2 group-hover:text-indigo-600">
                  {feature.title}
                </h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Product Showcase */}
      <section className="py-16 md:py-24 bg-gray-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <img 
                src="https://placehold.co/600x600/1f2937/ffffff?text=Side+View" 
                alt="TechPro Side View"
                className="w-full h-auto rounded-2xl shadow-2xl"
              />
            </div>
            <div className="space-y-6">
              <h2 className="text-3xl md:text-4xl font-bold">
                Designed for Perfection
              </h2>
              <p className="text-gray-300 text-lg">
                Every detail has been carefully crafted to deliver an exceptional experience. From the premium aluminum frame to the memory foam ear cushions, TechPro headphones are built for those who demand the best.
              </p>
              <ul className="space-y-4">
                {[
                  'Premium aluminum construction',
                  'Memory foam ear cushions',
                  'Foldable design for portability',
                  'Touch controls on ear cup',
                ].map((item, index) => (
                  <li key={index} className="flex items-center space-x-3">
                    <svg className="w-6 h-6 text-indigo-400" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section id="testimonials" className="py-16 md:py-24 bg-indigo-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              What Our Customers Say
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Join thousands of satisfied customers who have elevated their audio experience with TechPro.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div 
                key={index}
                className="bg-white p-8 rounded-2xl shadow-lg"
              >
                <div className="flex items-center mb-4">
                  {[...Array(5)].map((_, i) => (
                    <svg key={i} className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
                <p className="text-gray-600 mb-6 italic">"{testimonial.content}"</p>
                <div className="flex items-center">
                  <div className="w-12 h-12 bg-indigo-600 rounded-full flex items-center justify-center text-white font-semibold mr-4">
                    {testimonial.avatar}
                  </div>
                  <div>
                    <p className="font-semibold text-gray-900">{testimonial.name}</p>
                    <p className="text-gray-500 text-sm">{testimonial.role}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section id="pricing" className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Simple, Transparent Pricing
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Choose the perfect package for your needs. All plans include free shipping and 30-day money-back guarantee.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {pricingPlans.map((plan, index) => (
              <div 
                key={index}
                className={`relative p-8 rounded-2xl border-2 ${
                  plan.highlighted 
                    ? 'border-indigo-600 bg-indigo-50 shadow-xl scale-105' 
                    : 'border-gray-200 bg-white hover:shadow-lg'
                } transition-all`}
              >
                {plan.highlighted && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <span className="bg-indigo-600 text-white px-4 py-1 rounded-full text-sm font-medium">
                      Most Popular
                    </span>
                  </div>
                )}
                <div className="text-center mb-6">
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">{plan.name}</h3>
                  <div className="mb-2">
                    <span className="text-4xl font-bold text-gray-900">{plan.price}</span>
                    {plan.period !== 'contact us' && (
                      <span className="text-gray-500"> / {plan.period}</span>
                    )}
                  </div>
                </div>
                <ul className="space-y-4 mb-8">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-start">
                      <svg className="w-5 h-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                      <span className="text-gray-600">{feature}</span>
                    </li>
                  ))}
                </ul>
                <button 
                  className={`w-full py-3 rounded-full font-semibold transition-all ${
                    plan.highlighted
                      ? 'bg-indigo-600 text-white hover:bg-indigo-700'
                      : 'bg-gray-900 text-white hover:bg-gray-800'
                  }`}
                >
                  {plan.price === 'Custom' ? 'Contact Us' : 'Add to Cart'}
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-24 bg-gradient-to-r from-indigo-600 to-purple-600">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Ready to Elevate Your Audio Experience?
          </h2>
          <p className="text-indigo-100 text-lg mb-8">
            Join over 50,000 happy customers who have discovered the TechPro difference. Order now and get free shipping plus a 30-day money-back guarantee.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-white text-indigo-600 px-8 py-4 rounded-full text-lg font-semibold hover:bg-gray-100 transition-all transform hover:scale-105">
              Order Now - $199
            </button>
            <button className="border-2 border-white text-white px-8 py-4 rounded-full text-lg font-semibold hover:bg-white hover:text-indigo-600 transition-all">
              Learn More
            </button>
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
            Stay Updated
          </h2>
          <p className="text-gray-600 mb-8">
            Subscribe to our newsletter for exclusive offers, product updates, and audio tips.
          </p>
          <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-4">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email"
              className="flex-1 px-6 py-4 rounded-full border border-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-600 focus:border-transparent"
              required
            />
            <button 
              type="submit"
              className="bg-indigo-600 text-white px-8 py-4 rounded-full font-semibold hover:bg-indigo-700 transition-all"
            >
              Subscribe
            </button>
          </form>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div>
              <span className="text-2xl font-bold text-indigo-400">TechPro</span>
              <p className="mt-4 text-gray-400">
                Premium audio equipment for discerning listeners who demand the best.
              </p>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Products</h4>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-white transition-colors">Headphones</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Earbuds</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Accessories</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Support</h4>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-white transition-colors">Contact Us</a></li>
                <li><a href="#" className="hover:text-white transition-colors">FAQs</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Warranty</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Company</h4>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-white transition-colors">About Us</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Careers</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Press</a></li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm">
              © 2024 TechPro. All rights reserved.
            </p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <a href="#" className="text-gray-400 hover:text-white transition-colors">Privacy Policy</a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">Terms of Service</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default App
