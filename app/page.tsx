export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      {/* Navigation */}
      <nav className="fixed w-full bg-black/20 backdrop-blur-lg border-b border-white/10 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center">
              <span className="text-2xl font-bold bg-gradient-to-r from-purple-400 to-pink-600 bg-clip-text text-transparent">
                NexaFlow
              </span>
            </div>
            <div className="hidden md:flex space-x-8">
              <a href="#features" className="text-gray-300 hover:text-white transition">Features</a>
              <a href="#pricing" className="text-gray-300 hover:text-white transition">Pricing</a>
              <a href="#about" className="text-gray-300 hover:text-white transition">About</a>
            </div>
            <button className="bg-gradient-to-r from-purple-500 to-pink-500 text-white px-6 py-2 rounded-full hover:opacity-90 transition">
              Get Started
            </button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">
            Transform Your Workflow
            <br />
            <span className="bg-gradient-to-r from-purple-400 to-pink-600 bg-clip-text text-transparent">
              With AI-Powered Automation
            </span>
          </h1>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Streamline your business operations with intelligent automation, real-time analytics, and seamless integrations.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-gradient-to-r from-purple-500 to-pink-500 text-white px-8 py-4 rounded-full text-lg font-semibold hover:opacity-90 transition">
              Start Free Trial
            </button>
            <button className="bg-white/10 backdrop-blur-lg text-white px-8 py-4 rounded-full text-lg font-semibold hover:bg-white/20 transition border border-white/20">
              Watch Demo
            </button>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold text-white text-center mb-16">
            Powerful Features
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: "AI Automation",
                description: "Automate repetitive tasks with intelligent workflows powered by machine learning.",
                icon: "🤖"
              },
              {
                title: "Real-time Analytics",
                description: "Get instant insights with beautiful dashboards and customizable reports.",
                icon: "📊"
              },
              {
                title: "Seamless Integration",
                description: "Connect with 100+ tools and services through our robust API ecosystem.",
                icon: "🔗"
              },
              {
                title: "Team Collaboration",
                description: "Work together efficiently with real-time updates and shared workspaces.",
                icon: "👥"
              },
              {
                title: "Enterprise Security",
                description: "Bank-level encryption and compliance with SOC 2, GDPR, and HIPAA.",
                icon: "🔒"
              },
              {
                title: "24/7 Support",
                description: "Get help anytime with our dedicated support team and comprehensive docs.",
                icon: "💬"
              }
            ].map((feature, i) => (
              <div key={i} className="bg-white/5 backdrop-blur-lg rounded-2xl p-8 border border-white/10 hover:border-purple-500/50 transition">
                <div className="text-5xl mb-4">{feature.icon}</div>
                <h3 className="text-2xl font-bold text-white mb-3">{feature.title}</h3>
                <p className="text-gray-400">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section id="pricing" className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold text-white text-center mb-16">
            Simple, Transparent Pricing
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                name: "Starter",
                price: "$29",
                features: ["Up to 10 users", "5GB storage", "Basic analytics", "Email support"]
              },
              {
                name: "Professional",
                price: "$99",
                features: ["Up to 50 users", "50GB storage", "Advanced analytics", "Priority support", "API access"],
                popular: true
              },
              {
                name: "Enterprise",
                price: "Custom",
                features: ["Unlimited users", "Unlimited storage", "Custom analytics", "24/7 phone support", "Dedicated account manager"]
              }
            ].map((plan, i) => (
              <div key={i} className={`bg-white/5 backdrop-blur-lg rounded-2xl p-8 border ${plan.popular ? 'border-purple-500 scale-105' : 'border-white/10'} hover:border-purple-500/50 transition`}>
                {plan.popular && (
                  <div className="bg-gradient-to-r from-purple-500 to-pink-500 text-white text-sm font-semibold px-4 py-1 rounded-full inline-block mb-4">
                    Most Popular
                  </div>
                )}
                <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
                <div className="text-4xl font-bold text-white mb-6">
                  {plan.price}
                  {plan.price !== "Custom" && <span className="text-lg text-gray-400">/month</span>}
                </div>
                <ul className="space-y-3 mb-8">
                  {plan.features.map((feature, j) => (
                    <li key={j} className="text-gray-300 flex items-center">
                      <span className="text-green-400 mr-2">✓</span>
                      {feature}
                    </li>
                  ))}
                </ul>
                <button className={`w-full py-3 rounded-full font-semibold transition ${plan.popular ? 'bg-gradient-to-r from-purple-500 to-pink-500 text-white hover:opacity-90' : 'bg-white/10 text-white hover:bg-white/20'}`}>
                  Get Started
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4">
        <div className="max-w-4xl mx-auto text-center bg-gradient-to-r from-purple-500/20 to-pink-500/20 backdrop-blur-lg rounded-3xl p-12 border border-white/10">
          <h2 className="text-4xl font-bold text-white mb-6">
            Ready to Transform Your Workflow?
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            Join thousands of teams already using NexaFlow to automate their operations.
          </p>
          <button className="bg-gradient-to-r from-purple-500 to-pink-500 text-white px-8 py-4 rounded-full text-lg font-semibold hover:opacity-90 transition">
            Start Your Free Trial
          </button>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-white/10 py-12 px-4">
        <div className="max-w-7xl mx-auto text-center text-gray-400">
          <p>&copy; 2026 NexaFlow. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}
