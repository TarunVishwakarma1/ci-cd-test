
export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-gray-50 to-gray-100">
      {/* Hero Section */}
      <div className="container mx-auto px-4 py-16 md:py-24">
        <div className="text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
            CI/CD Integration
            <span className="text-blue-600"> Made Simple</span>
          </h1>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            Streamline your deployment workflow with automated CI/CD pipelines.
            Built with Next.js and modern web technologies.
          </p>
          <div className="flex justify-center gap-4">
            <button className="bg-blue-600 text-white px-8 py-3 rounded-lg hover:bg-blue-700 transition">
              Get Started
            </button>
            <button className="bg-white text-blue-600 px-8 py-3 rounded-lg border border-blue-600 hover:bg-blue-50 transition">
              Learn More
            </button>
          </div>
        </div>
      </div>

      {/* Features Section */}
      <div className="bg-white py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Key Features</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div 
                key={index} 
                className="p-6 rounded-lg border border-gray-200 hover:shadow-lg transition"
              >
                <div className="text-blue-600 mb-4">{feature.icon}</div>
                <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Integration Section */}
      <div className="container mx-auto px-4 py-16">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">Seamless Integration</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Works with your favorite tools and platforms out of the box
          </p>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-3xl mx-auto">
          {integrations.map((integration, index) => (
            <div 
              key={index}
              className="flex items-center justify-center p-4 bg-white rounded-lg border border-gray-200 hover:shadow-md transition"
            >
              <span className="text-gray-800 font-medium">{integration}</span>
            </div>
          ))}
        </div>
      </div>
    </main>
  )
}

const features = [
  {
    icon: '🚀',
    title: 'Automated Deployment',
    description: 'Push your code and let our system handle the deployment automatically.'
  },
  {
    icon: '🔄',
    title: 'Continuous Integration',
    description: 'Automatically build and test your code with every commit.'
  },
  {
    icon: '🛡️',
    title: 'Security First',
    description: 'Built-in security checks and best practices to keep your deployments safe.'
  }
]

const integrations = [
  'GitHub',
  'GitLab',
  'Bitbucket',
  'Jenkins',
  'Docker',
  'AWS',
  'Azure',
  'GCP'
] 