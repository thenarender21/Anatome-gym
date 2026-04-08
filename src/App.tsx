import { useState, useEffect } from 'react';
import { Phone, MapPin, Star, Dumbbell, Users, Target, Award, Clock, ChevronDown, Menu, X, Facebook, Instagram, Twitter, Mail, CheckCircle } from 'lucide-react';

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);

      const sections = ['home', 'about', 'services', 'why-choose', 'testimonials', 'gallery', 'pricing', 'contact'];
      const current = sections.find(section => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top <= 100 && rect.bottom >= 100;
        }
        return false;
      });
      if (current) setActiveSection(current);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      const offset = 80;
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = element.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
    setIsMenuOpen(false);
  };

  return (
    <div className="bg-black text-white">
      <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-black/95 backdrop-blur-md shadow-lg' : 'bg-transparent'}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">
            <div className="flex items-center space-x-2">
              <Dumbbell className="h-8 w-8 text-emerald-400" />
              <span className="text-2xl font-bold">Anatomé <span className="text-emerald-400">Gym</span></span>
            </div>

            <div className="hidden md:flex items-center space-x-8">
              {['Home', 'About', 'Services', 'Why Choose', 'Testimonials', 'Gallery', 'Pricing', 'Contact'].map((item) => (
                <button
                  key={item}
                  onClick={() => scrollToSection(item.toLowerCase().replace(' ', '-'))}
                  className={`text-sm font-medium transition-colors hover:text-emerald-400 ${
                    activeSection === item.toLowerCase().replace(' ', '-') ? 'text-emerald-400' : 'text-white'
                  }`}
                >
                  {item}
                </button>
              ))}
              <a href="tel:+919867338006" className="bg-emerald-500 hover:bg-emerald-600 text-black font-bold px-6 py-2 rounded-full transition-all transform hover:scale-105">
                Join Now
              </a>
            </div>

            <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="md:hidden text-white">
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>

        {isMenuOpen && (
          <div className="md:hidden bg-black/98 backdrop-blur-md">
            <div className="px-4 pt-2 pb-6 space-y-3">
              {['Home', 'About', 'Services', 'Why Choose', 'Testimonials', 'Gallery', 'Pricing', 'Contact'].map((item) => (
                <button
                  key={item}
                  onClick={() => scrollToSection(item.toLowerCase().replace(' ', '-'))}
                  className="block w-full text-left py-2 text-sm font-medium hover:text-emerald-400 transition-colors"
                >
                  {item}
                </button>
              ))}
              <a href="tel:+919867338006" className="block w-full text-center bg-emerald-500 hover:bg-emerald-600 text-black font-bold px-6 py-3 rounded-full transition-all">
                Join Now
              </a>
            </div>
          </div>
        )}
      </nav>

      <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-black via-gray-900 to-black">
          <div className="absolute inset-0 opacity-20" style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%2310b981' fill-opacity='0.4'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
          }}></div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="animate-fade-in">
            <div className="inline-flex items-center space-x-2 bg-emerald-500/10 border border-emerald-500/20 rounded-full px-4 py-2 mb-6">
              <Star className="h-4 w-4 text-emerald-400 fill-emerald-400" />
              <span className="text-sm text-emerald-400 font-semibold">4.8 Rating • 57 Reviews</span>
            </div>

            <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-black mb-6 leading-tight">
              Transform Your<br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-teal-400">Body at Anatomé</span>
            </h1>

            <p className="text-xl sm:text-2xl text-gray-300 mb-10 max-w-3xl mx-auto font-light">
              Premium fitness experience in Thane. Where champions are made and transformations happen.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12">
              <a href="tel:+919867338006" className="w-full sm:w-auto bg-emerald-500 hover:bg-emerald-600 text-black font-bold px-10 py-5 rounded-full text-lg transition-all transform hover:scale-105 shadow-lg shadow-emerald-500/50">
                Join Now
              </a>
              <button onClick={() => scrollToSection('contact')} className="w-full sm:w-auto bg-transparent border-2 border-white hover:bg-white hover:text-black text-white font-bold px-10 py-5 rounded-full text-lg transition-all transform hover:scale-105">
                Book Free Trial
              </button>
            </div>

            <div className="flex flex-wrap items-center justify-center gap-8 text-sm">
              <div className="flex items-center space-x-2">
                <MapPin className="h-5 w-5 text-emerald-400" />
                <span className="text-gray-300">Thane West, Maharashtra</span>
              </div>
              <div className="flex items-center space-x-2">
                <Phone className="h-5 w-5 text-emerald-400" />
                <a href="tel:+919867338006" className="text-gray-300 hover:text-emerald-400 transition-colors">+91 9867338006</a>
              </div>
            </div>
          </div>
        </div>

        <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
          <ChevronDown className="h-8 w-8 text-emerald-400" />
        </div>
      </section>

      <section id="about" className="py-20 bg-gradient-to-b from-black to-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl sm:text-5xl font-black mb-6">
                Your Journey to <span className="text-emerald-400">Excellence</span>
              </h2>
              <p className="text-gray-300 text-lg mb-6 leading-relaxed">
                Anatomé Gym is more than just a fitness facility—it's a transformation hub where dedication meets results. Located in the heart of Thane West, we provide a premium fitness experience tailored to your goals.
              </p>
              <p className="text-gray-300 text-lg mb-8 leading-relaxed">
                Our state-of-the-art equipment, certified trainers, and personalized approach ensure that every member achieves their fitness objectives. Whether you're building strength, losing weight, or enhancing athletic performance, we're committed to your success.
              </p>
              <div className="grid grid-cols-3 gap-6">
                <div className="text-center">
                  <div className="text-3xl font-black text-emerald-400 mb-2">500+</div>
                  <div className="text-sm text-gray-400">Active Members</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-black text-emerald-400 mb-2">15+</div>
                  <div className="text-sm text-gray-400">Expert Trainers</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-black text-emerald-400 mb-2">4.8</div>
                  <div className="text-sm text-gray-400">Rating</div>
                </div>
              </div>
            </div>
            <div className="relative">
              <div className="aspect-square rounded-2xl bg-gradient-to-br from-emerald-500/20 to-teal-500/20 border border-emerald-500/30 flex items-center justify-center">
                <Dumbbell className="h-32 w-32 text-emerald-400/30" />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="services" className="py-20 bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl sm:text-5xl font-black mb-4">
              Our <span className="text-emerald-400">Programs</span>
            </h2>
            <p className="text-gray-400 text-lg max-w-2xl mx-auto">
              Comprehensive fitness programs designed to help you achieve your goals
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { icon: Dumbbell, title: 'Strength Training', desc: 'Build muscle and increase power with our advanced strength programs and equipment.' },
              { icon: Users, title: 'Personal Training', desc: 'One-on-one coaching tailored to your specific fitness goals and needs.' },
              { icon: Target, title: 'Weight Loss Programs', desc: 'Science-backed programs combining exercise and nutrition for sustainable weight loss.' },
              { icon: Award, title: 'Functional Training', desc: 'Improve daily movement patterns and overall athletic performance.' },
              { icon: Users, title: 'Group Classes', desc: 'High-energy group sessions that motivate and challenge you.' },
              { icon: Clock, title: 'Flexible Timings', desc: 'Train on your schedule with extended hours and multiple session times.' }
            ].map((service, index) => (
              <div key={index} className="bg-black/50 border border-gray-800 rounded-2xl p-8 hover:border-emerald-500/50 transition-all hover:transform hover:scale-105 group">
                <service.icon className="h-12 w-12 text-emerald-400 mb-4 group-hover:scale-110 transition-transform" />
                <h3 className="text-xl font-bold mb-3">{service.title}</h3>
                <p className="text-gray-400 leading-relaxed">{service.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="why-choose" className="py-20 bg-gradient-to-b from-gray-900 to-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl sm:text-5xl font-black mb-4">
              Why Choose <span className="text-emerald-400">Anatomé</span>
            </h2>
            <p className="text-gray-400 text-lg max-w-2xl mx-auto">
              We're committed to providing the best fitness experience in Thane
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { icon: Award, title: 'Modern Equipment', desc: 'State-of-the-art machines and free weights for optimal training.' },
              { icon: Users, title: 'Certified Trainers', desc: 'Experienced professionals dedicated to your fitness journey.' },
              { icon: Target, title: 'Personalized Plans', desc: 'Custom workout and nutrition plans tailored to your goals.' },
              { icon: Star, title: '4.8 Star Rating', desc: 'Trusted by 500+ members with excellent satisfaction.' }
            ].map((feature, index) => (
              <div key={index} className="text-center">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-emerald-500/10 border border-emerald-500/30 rounded-full mb-4">
                  <feature.icon className="h-8 w-8 text-emerald-400" />
                </div>
                <h3 className="text-xl font-bold mb-3">{feature.title}</h3>
                <p className="text-gray-400">{feature.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="testimonials" className="py-20 bg-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl sm:text-5xl font-black mb-4">
              Success <span className="text-emerald-400">Stories</span>
            </h2>
            <p className="text-gray-400 text-lg max-w-2xl mx-auto">
              Real transformations from real members
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              { name: 'Rahul Sharma', rating: 5, text: 'Best gym in Thane! The trainers are knowledgeable and supportive. Lost 15kg in 4 months with their personalized program.', achievement: 'Lost 15kg' },
              { name: 'Priya Patel', rating: 5, text: 'The equipment is top-notch and the atmosphere is incredibly motivating. My strength has improved dramatically since joining.', achievement: 'Strength +40%' },
              { name: 'Amit Desai', rating: 5, text: 'Anatomé changed my life. The personal training sessions are worth every rupee. Highly recommend for serious fitness goals.', achievement: 'Body Transformed' },
              { name: 'Sneha Reddy', rating: 4, text: 'Great facility with excellent trainers. The group classes are energetic and fun. Only wish they had longer weekend hours.', achievement: 'Fitness Improved' },
              { name: 'Vikram Singh', rating: 5, text: 'Professional setup with modern equipment. The personalized nutrition guidance along with training helped me achieve my dream physique.', achievement: 'Dream Physique' }
            ].map((testimonial, index) => (
              <div key={index} className="bg-gray-900 border border-gray-800 rounded-2xl p-8 hover:border-emerald-500/50 transition-all">
                <div className="flex items-center mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 text-emerald-400 fill-emerald-400" />
                  ))}
                </div>
                <p className="text-gray-300 mb-6 leading-relaxed">{testimonial.text}</p>
                <div className="flex items-center justify-between">
                  <div>
                    <div className="font-bold">{testimonial.name}</div>
                    <div className="text-sm text-gray-400">Verified Member</div>
                  </div>
                  <div className="bg-emerald-500/10 border border-emerald-500/30 rounded-full px-3 py-1 text-xs text-emerald-400 font-semibold">
                    {testimonial.achievement}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="gallery" className="py-20 bg-gradient-to-b from-black to-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl sm:text-5xl font-black mb-4">
              Our <span className="text-emerald-400">Facility</span>
            </h2>
            <p className="text-gray-400 text-lg max-w-2xl mx-auto">
              Premium equipment and modern infrastructure for your fitness journey
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {[1, 2, 3, 4, 5, 6].map((item) => (
              <div key={item} className="aspect-square rounded-2xl bg-gradient-to-br from-emerald-500/20 to-teal-500/20 border border-emerald-500/30 flex items-center justify-center hover:scale-105 transition-transform cursor-pointer">
                <Dumbbell className="h-16 w-16 text-emerald-400/40" />
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="pricing" className="py-20 bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl sm:text-5xl font-black mb-4">
              Membership <span className="text-emerald-400">Plans</span>
            </h2>
            <p className="text-gray-400 text-lg max-w-2xl mx-auto">
              Choose the plan that fits your fitness goals
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              { name: 'Monthly', price: '₹2,999', duration: 'per month', features: ['Access to all equipment', 'Group classes', 'Locker facility', 'Fitness assessment'], popular: false },
              { name: 'Quarterly', price: '₹7,999', duration: '3 months', features: ['All Monthly features', '1 Personal training session', 'Nutrition consultation', 'Body composition analysis'], popular: true },
              { name: 'Yearly', price: '₹24,999', duration: '12 months', features: ['All Quarterly features', '4 Personal training sessions', 'Premium locker', 'Guest passes (2/month)', 'Priority support'], popular: false }
            ].map((plan, index) => (
              <div key={index} className={`relative rounded-2xl p-8 ${plan.popular ? 'bg-gradient-to-br from-emerald-500/20 to-teal-500/20 border-2 border-emerald-500' : 'bg-black/50 border border-gray-800'} hover:transform hover:scale-105 transition-all`}>
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-emerald-500 text-black font-bold px-4 py-1 rounded-full text-sm">
                    Most Popular
                  </div>
                )}
                <h3 className="text-2xl font-bold mb-2">{plan.name}</h3>
                <div className="mb-6">
                  <span className="text-5xl font-black text-emerald-400">{plan.price}</span>
                  <span className="text-gray-400 ml-2">{plan.duration}</span>
                </div>
                <ul className="space-y-3 mb-8">
                  {plan.features.map((feature, i) => (
                    <li key={i} className="flex items-center space-x-2">
                      <CheckCircle className="h-5 w-5 text-emerald-400 flex-shrink-0" />
                      <span className="text-gray-300">{feature}</span>
                    </li>
                  ))}
                </ul>
                <a href="tel:+919867338006" className={`block w-full text-center font-bold px-6 py-4 rounded-full transition-all ${plan.popular ? 'bg-emerald-500 hover:bg-emerald-600 text-black' : 'bg-white/10 hover:bg-white/20 text-white border border-gray-700'}`}>
                  Get Started
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="contact" className="py-20 bg-gradient-to-b from-gray-900 to-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl sm:text-5xl font-black mb-4">
              Get in <span className="text-emerald-400">Touch</span>
            </h2>
            <p className="text-gray-400 text-lg max-w-2xl mx-auto">
              Ready to start your transformation? Contact us today
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            <div>
              <div className="space-y-6 mb-8">
                <div className="flex items-start space-x-4">
                  <MapPin className="h-6 w-6 text-emerald-400 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-bold mb-1">Location</h3>
                    <p className="text-gray-400">5, Acre, Kothari Warehouse, Unit - A-2/4 & A-2, 4 & 2/5 27, Hill Garden, Kokanipada, Thane West, Thane, Maharashtra 400610</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <Phone className="h-6 w-6 text-emerald-400 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-bold mb-1">Phone</h3>
                    <a href="tel:+919867338006" className="text-emerald-400 hover:text-emerald-300">+91 9867338006</a>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <Mail className="h-6 w-6 text-emerald-400 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-bold mb-1">Email</h3>
                    <a href="mailto:info@anatomegym.com" className="text-emerald-400 hover:text-emerald-300">info@anatomegym.com</a>
                  </div>
                </div>
              </div>

              <div className="rounded-2xl overflow-hidden border border-gray-800 h-64">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3767.8299999999997!2d72.9647!3d19.2183!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTnCsDEzJzA1LjkiTiA3MsKwNTcnNTIuOSJF!5e0!3m2!1sen!2sin!4v1234567890"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
              </div>
            </div>

            <div>
              <form className="space-y-6" onSubmit={(e) => { e.preventDefault(); alert('Thank you for your interest! We will contact you soon.'); }}>
                <div>
                  <input
                    type="text"
                    placeholder="Your Name"
                    required
                    className="w-full bg-gray-900 border border-gray-800 rounded-lg px-4 py-3 focus:outline-none focus:border-emerald-500 transition-colors"
                  />
                </div>
                <div>
                  <input
                    type="tel"
                    placeholder="Phone Number"
                    required
                    className="w-full bg-gray-900 border border-gray-800 rounded-lg px-4 py-3 focus:outline-none focus:border-emerald-500 transition-colors"
                  />
                </div>
                <div>
                  <input
                    type="email"
                    placeholder="Email Address"
                    required
                    className="w-full bg-gray-900 border border-gray-800 rounded-lg px-4 py-3 focus:outline-none focus:border-emerald-500 transition-colors"
                  />
                </div>
                <div>
                  <select
                    required
                    className="w-full bg-gray-900 border border-gray-800 rounded-lg px-4 py-3 focus:outline-none focus:border-emerald-500 transition-colors"
                  >
                    <option value="">Select Program Interest</option>
                    <option value="strength">Strength Training</option>
                    <option value="personal">Personal Training</option>
                    <option value="weight-loss">Weight Loss</option>
                    <option value="functional">Functional Training</option>
                    <option value="group">Group Classes</option>
                  </select>
                </div>
                <div>
                  <textarea
                    placeholder="Your Message"
                    rows={4}
                    className="w-full bg-gray-900 border border-gray-800 rounded-lg px-4 py-3 focus:outline-none focus:border-emerald-500 transition-colors resize-none"
                  ></textarea>
                </div>
                <button
                  type="submit"
                  className="w-full bg-emerald-500 hover:bg-emerald-600 text-black font-bold px-8 py-4 rounded-full transition-all transform hover:scale-105"
                >
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      <footer className="bg-black border-t border-gray-900 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <Dumbbell className="h-8 w-8 text-emerald-400" />
                <span className="text-xl font-bold">Anatomé Gym</span>
              </div>
              <p className="text-gray-400 text-sm">
                Transform your body and mind with premium fitness solutions in Thane.
              </p>
            </div>

            <div>
              <h4 className="font-bold mb-4">Quick Links</h4>
              <ul className="space-y-2 text-sm">
                {['Home', 'About', 'Services', 'Pricing'].map((item) => (
                  <li key={item}>
                    <button onClick={() => scrollToSection(item.toLowerCase())} className="text-gray-400 hover:text-emerald-400 transition-colors">
                      {item}
                    </button>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h4 className="font-bold mb-4">Programs</h4>
              <ul className="space-y-2 text-sm text-gray-400">
                <li>Strength Training</li>
                <li>Personal Training</li>
                <li>Weight Loss</li>
                <li>Group Classes</li>
              </ul>
            </div>

            <div>
              <h4 className="font-bold mb-4">Follow Us</h4>
              <div className="flex space-x-4">
                <a href="#" className="bg-gray-900 hover:bg-emerald-500 p-3 rounded-full transition-colors">
                  <Facebook className="h-5 w-5" />
                </a>
                <a href="#" className="bg-gray-900 hover:bg-emerald-500 p-3 rounded-full transition-colors">
                  <Instagram className="h-5 w-5" />
                </a>
                <a href="#" className="bg-gray-900 hover:bg-emerald-500 p-3 rounded-full transition-colors">
                  <Twitter className="h-5 w-5" />
                </a>
              </div>
              <div className="mt-4">
                <a href="tel:+919867338006" className="text-emerald-400 hover:text-emerald-300 text-sm font-semibold">
                  +91 9867338006
                </a>
              </div>
            </div>
          </div>

          <div className="border-t border-gray-900 pt-8 text-center text-sm text-gray-400">
            <p>&copy; 2024 Anatomé Gym. All rights reserved. Built for excellence.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
