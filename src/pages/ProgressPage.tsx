export default function ProgressPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-brain-50 via-white to-wellness-50">
      <div className="container mx-auto px-4 py-8">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-8">
            <h1 className="text-3xl font-bold text-gray-900 mb-4">Your Progress</h1>
            <p className="text-gray-600">
              Track your brain wellness journey and celebrate your achievements.
            </p>
          </div>

          {/* Progress Overview */}
          <div className="grid lg:grid-cols-4 gap-6 mb-8">
            <div className="bg-white rounded-xl shadow-lg p-6 text-center">
              <div className="text-3xl font-bold text-brain-600 mb-2">12</div>
              <div className="text-sm text-gray-600">Days Active</div>
              <div className="text-xs text-green-600 mt-1">+3 this week</div>
            </div>
            
            <div className="bg-white rounded-xl shadow-lg p-6 text-center">
              <div className="text-3xl font-bold text-wellness-600 mb-2">5</div>
              <div className="text-sm text-gray-600">Assessments Completed</div>
              <div className="text-xs text-green-600 mt-1">+1 this week</div>
            </div>
            
            <div className="bg-white rounded-xl shadow-lg p-6 text-center">
              <div className="text-3xl font-bold text-calm-600 mb-2">18</div>
              <div className="text-sm text-gray-600">Activities Completed</div>
              <div className="text-xs text-green-600 mt-1">+6 this week</div>
            </div>
            
            <div className="bg-white rounded-xl shadow-lg p-6 text-center">
              <div className="text-3xl font-bold text-brain-500 mb-2">78</div>
              <div className="text-sm text-gray-600">Overall Score</div>
              <div className="text-xs text-green-600 mt-1">↗️ +5 points</div>
            </div>
          </div>

          {/* Brain Fitness Trends */}
          <div className="bg-white rounded-xl shadow-lg p-6 mb-8">
            <h2 className="text-xl font-semibold text-gray-900 mb-6">Brain Fitness Trends</h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="font-medium text-gray-900 mb-4">Score Breakdown</h3>
                <div className="space-y-4">
                  <div>
                    <div className="flex justify-between text-sm mb-1">
                      <span>Focus</span>
                      <span className="text-brain-600">85/100</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2">
                      <div className="bg-brain-600 h-2 rounded-full" style={{ width: '85%' }}></div>
                    </div>
                  </div>
                  
                  <div>
                    <div className="flex justify-between text-sm mb-1">
                      <span>Memory</span>
                      <span className="text-wellness-600">78/100</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2">
                      <div className="bg-wellness-600 h-2 rounded-full" style={{ width: '78%' }}></div>
                    </div>
                  </div>
                  
                  <div>
                    <div className="flex justify-between text-sm mb-1">
                      <span>Mood</span>
                      <span className="text-calm-600">92/100</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2">
                      <div className="bg-calm-600 h-2 rounded-full" style={{ width: '92%' }}></div>
                    </div>
                  </div>
                  
                  <div>
                    <div className="flex justify-between text-sm mb-1">
                      <span>Stress Management</span>
                      <span className="text-brain-500">74/100</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2">
                      <div className="bg-brain-500 h-2 rounded-full" style={{ width: '74%' }}></div>
                    </div>
                  </div>
                </div>
              </div>
              
              <div>
                <h3 className="font-medium text-gray-900 mb-4">30-Day Trend</h3>
                <div className="bg-gray-50 rounded-lg p-4 h-48 flex items-center justify-center">
                  <p className="text-gray-500">Chart visualization would go here</p>
                </div>
              </div>
            </div>
          </div>

          {/* Recent Activities */}
          <div className="grid lg:grid-cols-2 gap-6 mb-8">
            <div className="bg-white rounded-xl shadow-lg p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Recent Activities</h3>
              <div className="space-y-3">
                <div className="flex items-center space-x-3 p-3 bg-brain-50 rounded-lg">
                  <span className="text-xl">🧘‍♀️</span>
                  <div className="flex-1">
                    <div className="font-medium text-gray-900">Morning Meditation</div>
                    <div className="text-sm text-gray-600">Completed today • 10 minutes</div>
                  </div>
                  <span className="text-green-600">✓</span>
                </div>
                
                <div className="flex items-center space-x-3 p-3 bg-wellness-50 rounded-lg">
                  <span className="text-xl">🧠</span>
                  <div className="flex-1">
                    <div className="font-medium text-gray-900">Memory Training</div>
                    <div className="text-sm text-gray-600">Yesterday • 15 minutes</div>
                  </div>
                  <span className="text-green-600">✓</span>
                </div>
                
                <div className="flex items-center space-x-3 p-3 bg-calm-50 rounded-lg">
                  <span className="text-xl">📝</span>
                  <div className="flex-1">
                    <div className="font-medium text-gray-900">Daily Check-in</div>
                    <div className="text-sm text-gray-600">Yesterday • 5 minutes</div>
                  </div>
                  <span className="text-green-600">✓</span>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-xl shadow-lg p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Weekly Goals</h3>
              <div className="space-y-4">
                <div>
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-sm font-medium">Complete 5 mindfulness sessions</span>
                    <span className="text-sm text-gray-600">3/5</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div className="bg-brain-600 h-2 rounded-full" style={{ width: '60%' }}></div>
                  </div>
                </div>
                
                <div>
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-sm font-medium">Daily mood tracking</span>
                    <span className="text-sm text-gray-600">6/7</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div className="bg-wellness-600 h-2 rounded-full" style={{ width: '86%' }}></div>
                  </div>
                </div>
                
                <div>
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-sm font-medium">Complete memory exercises</span>
                    <span className="text-sm text-gray-600">2/3</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div className="bg-calm-600 h-2 rounded-full" style={{ width: '67%' }}></div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Achievements */}
          <div className="bg-white rounded-xl shadow-lg p-6">
            <h3 className="text-lg font-semibold text-gray-900 mb-6">Achievements</h3>
            <div className="grid md:grid-cols-3 lg:grid-cols-4 gap-4">
              <div className="text-center p-4 bg-gradient-to-br from-yellow-100 to-yellow-200 rounded-lg">
                <div className="text-3xl mb-2">🏆</div>
                <div className="font-medium text-gray-900 text-sm">First Assessment</div>
                <div className="text-xs text-gray-600">Completed your first brain assessment</div>
              </div>
              
              <div className="text-center p-4 bg-gradient-to-br from-blue-100 to-blue-200 rounded-lg">
                <div className="text-3xl mb-2">📅</div>
                <div className="font-medium text-gray-900 text-sm">Week Warrior</div>
                <div className="text-xs text-gray-600">7 days of consistent activity</div>
              </div>
              
              <div className="text-center p-4 bg-gradient-to-br from-green-100 to-green-200 rounded-lg">
                <div className="text-3xl mb-2">🧘‍♀️</div>
                <div className="font-medium text-gray-900 text-sm">Zen Master</div>
                <div className="text-xs text-gray-600">Completed 20 meditation sessions</div>
              </div>
              
              <div className="text-center p-4 bg-gradient-to-br from-purple-100 to-purple-200 rounded-lg border-2 border-dashed border-purple-300">
                <div className="text-3xl mb-2 opacity-50">🎯</div>
                <div className="font-medium text-gray-500 text-sm">Focus Champion</div>
                <div className="text-xs text-gray-400">Complete 10 focus exercises</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}