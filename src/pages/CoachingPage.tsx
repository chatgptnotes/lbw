export default function CoachingPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-brain-50 via-white to-wellness-50">
      <div className="container mx-auto px-4 py-8">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-8">
            <h1 className="text-3xl font-bold text-gray-900 mb-4">Brain Wellness Coaching</h1>
            <p className="text-gray-600">
              Connect with certified brain wellness coaches for personalized guidance and support.
            </p>
          </div>

          {/* Coaching Types */}
          <div className="grid md:grid-cols-3 gap-6 mb-8">
            <div className="bg-white rounded-xl shadow-lg p-6 text-center">
              <div className="w-16 h-16 bg-brain-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-brain-600 text-2xl">🧠</span>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Brain Coaching</h3>
              <p className="text-gray-600 text-sm mb-4">
                Focus enhancement, executive function, and cognitive performance optimization.
              </p>
              <div className="text-sm text-gray-500 mb-4">Starting at $80/session</div>
              <button className="w-full py-2 bg-brain-600 text-white rounded-lg hover:bg-brain-700 transition-colors">
                Book Session
              </button>
            </div>

            <div className="bg-white rounded-xl shadow-lg p-6 text-center">
              <div className="w-16 h-16 bg-calm-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-calm-600 text-2xl">🌿</span>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Nervous System Coaching</h3>
              <p className="text-gray-600 text-sm mb-4">
                Stress regulation, trauma recovery, and nervous system optimization.
              </p>
              <div className="text-sm text-gray-500 mb-4">Starting at $90/session</div>
              <button className="w-full py-2 bg-calm-600 text-white rounded-lg hover:bg-calm-700 transition-colors">
                Book Session
              </button>
            </div>

            <div className="bg-white rounded-xl shadow-lg p-6 text-center">
              <div className="w-16 h-16 bg-wellness-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-wellness-600 text-2xl">⚡</span>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">qEEG Consultation</h3>
              <p className="text-gray-600 text-sm mb-4">
                Brain mapping analysis and neurofeedback treatment planning.
              </p>
              <div className="text-sm text-gray-500 mb-4">Starting at $150/session</div>
              <button className="w-full py-2 bg-wellness-600 text-white rounded-lg hover:bg-wellness-700 transition-colors">
                Book Session
              </button>
            </div>
          </div>

          {/* Featured Coaches */}
          <div className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-6">Meet Our Coaches</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                {
                  name: "Dr. Sarah Chen",
                  title: "Brain Performance Coach",
                  specialty: ["ADHD", "Executive Function"],
                  rating: 4.9,
                  sessions: 250,
                  image: "👩‍⚕️"
                },
                {
                  name: "Michael Rodriguez",
                  title: "Nervous System Specialist",
                  specialty: ["Stress Management", "Trauma Recovery"],
                  rating: 4.8,
                  sessions: 180,
                  image: "👨‍💼"
                },
                {
                  name: "Dr. Lisa Thompson",
                  title: "Neurofeedback Expert",
                  specialty: ["qEEG Analysis", "Brain Training"],
                  rating: 4.9,
                  sessions: 320,
                  image: "👩‍🔬"
                }
              ].map((coach) => (
                <div key={coach.name} className="bg-white rounded-xl shadow-lg p-6">
                  <div className="flex items-center space-x-4 mb-4">
                    <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center text-2xl">
                      {coach.image}
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900">{coach.name}</h3>
                      <p className="text-sm text-gray-600">{coach.title}</p>
                    </div>
                  </div>
                  
                  <div className="mb-4">
                    <div className="flex flex-wrap gap-2">
                      {coach.specialty.map((spec) => (
                        <span key={spec} className="px-2 py-1 bg-brain-100 text-brain-700 text-xs rounded-full">
                          {spec}
                        </span>
                      ))}
                    </div>
                  </div>
                  
                  <div className="flex items-center justify-between text-sm text-gray-600 mb-4">
                    <span>⭐ {coach.rating} rating</span>
                    <span>{coach.sessions} sessions</span>
                  </div>
                  
                  <button className="w-full py-2 border border-brain-600 text-brain-600 rounded-lg hover:bg-brain-50 transition-colors">
                    View Profile
                  </button>
                </div>
              ))}
            </div>
          </div>

          {/* Upcoming Sessions */}
          <div className="grid lg:grid-cols-2 gap-6">
            <div className="bg-white rounded-xl shadow-lg p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Upcoming Sessions</h3>
              <div className="space-y-4">
                <div className="p-4 border border-gray-200 rounded-lg">
                  <div className="flex items-center justify-between mb-2">
                    <div className="font-medium text-gray-900">Brain Coaching with Dr. Sarah Chen</div>
                    <span className="text-sm text-gray-500">Tomorrow</span>
                  </div>
                  <div className="text-sm text-gray-600 mb-2">2:00 PM - 3:00 PM (60 minutes)</div>
                  <div className="flex space-x-2">
                    <button className="px-3 py-1 bg-brain-600 text-white text-sm rounded hover:bg-brain-700">
                      Join Session
                    </button>
                    <button className="px-3 py-1 border border-gray-300 text-gray-700 text-sm rounded hover:bg-gray-50">
                      Reschedule
                    </button>
                  </div>
                </div>
                
                <div className="text-center py-4">
                  <p className="text-gray-500 text-sm mb-4">No more upcoming sessions</p>
                  <button className="px-4 py-2 bg-brain-600 text-white rounded-lg hover:bg-brain-700 transition-colors">
                    Book New Session
                  </button>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-xl shadow-lg p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Session History</h3>
              <div className="space-y-4">
                <div className="p-4 border border-gray-200 rounded-lg">
                  <div className="flex items-center justify-between mb-2">
                    <div className="font-medium text-gray-900">ADHD Strategy Session</div>
                    <span className="text-sm text-gray-500">3 days ago</span>
                  </div>
                  <div className="text-sm text-gray-600 mb-2">
                    Coach: Dr. Sarah Chen • 60 minutes
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-green-600">⭐ Rated: 5/5</span>
                    <button className="text-brain-600 text-sm hover:text-brain-700">
                      View Notes
                    </button>
                  </div>
                </div>
                
                <div className="p-4 border border-gray-200 rounded-lg">
                  <div className="flex items-center justify-between mb-2">
                    <div className="font-medium text-gray-900">Stress Management</div>
                    <span className="text-sm text-gray-500">1 week ago</span>
                  </div>
                  <div className="text-sm text-gray-600 mb-2">
                    Coach: Michael Rodriguez • 45 minutes
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-green-600">⭐ Rated: 5/5</span>
                    <button className="text-brain-600 text-sm hover:text-brain-700">
                      View Notes
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}