import { Link } from 'react-router-dom'

export default function LandingPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-brain-50 via-white to-wellness-50">
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto text-center">
          {/* Header */}
          <div className="mb-12">
            <h1 className="text-5xl font-bold bg-gradient-to-r from-brain-600 to-wellness-600 bg-clip-text text-transparent mb-6">
              Limitless Brain Wellness
            </h1>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Science-backed, personalized brain wellness programs designed to enhance focus, memory, mood, and stress management.
            </p>
          </div>

          {/* Key Features */}
          <div className="grid md:grid-cols-3 gap-8 mb-12">
            <div className="p-6 rounded-lg bg-white shadow-sm border border-brain-100">
              <div className="w-12 h-12 bg-brain-100 rounded-lg flex items-center justify-center mb-4 mx-auto">
                <span className="text-brain-600 text-xl">🧠</span>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">ADHD Support</h3>
              <p className="text-gray-600">Comprehensive tools and strategies for attention enhancement and executive function improvement.</p>
            </div>

            <div className="p-6 rounded-lg bg-white shadow-sm border border-wellness-100">
              <div className="w-12 h-12 bg-wellness-100 rounded-lg flex items-center justify-center mb-4 mx-auto">
                <span className="text-wellness-600 text-xl">💡</span>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Memory Enhancement</h3>
              <p className="text-gray-600">Evidence-based memory training and cognitive exercises to boost recall and retention.</p>
            </div>

            <div className="p-6 rounded-lg bg-white shadow-sm border border-calm-100">
              <div className="w-12 h-12 bg-calm-100 rounded-lg flex items-center justify-center mb-4 mx-auto">
                <span className="text-calm-600 text-xl">🧘‍♀️</span>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Stress & Mood</h3>
              <p className="text-gray-600">Personalized stress management and mood regulation techniques for emotional balance.</p>
            </div>
          </div>

          {/* Brain Fitness Score Preview */}
          <div className="bg-white rounded-xl shadow-lg p-8 mb-12">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">Track Your Brain Fitness</h2>
            <p className="text-gray-600 mb-6">
              Get a personalized Brain Fitness Score based on comprehensive assessments and daily tracking.
            </p>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              <div className="text-center">
                <div className="text-2xl font-bold text-brain-600">85</div>
                <div className="text-sm text-gray-500">Focus</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-wellness-600">78</div>
                <div className="text-sm text-gray-500">Memory</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-calm-600">92</div>
                <div className="text-sm text-gray-500">Mood</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-brain-500">74</div>
                <div className="text-sm text-gray-500">Stress</div>
              </div>
            </div>
          </div>

          {/* Call to Action */}
          <div className="text-center">
            <Link
              to="/onboarding"
              className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-brain-600 to-wellness-600 text-white font-semibold rounded-lg hover:from-brain-700 hover:to-wellness-700 transition-all duration-200 shadow-lg hover:shadow-xl"
            >
              Start Your Brain Wellness Journey
              <span className="ml-2">→</span>
            </Link>
            <p className="text-sm text-gray-500 mt-4">
              Free assessment • Personalized insights • Science-backed recommendations
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}