import { useBrainWellness } from '../hooks/useBrainWellness'
import { Card, CardContent, CardHeader, CardTitle } from '../components/ui/Card'
import { Button } from '../components/ui/Button'
import { getPersonalizedDailyContent } from '../data/content'

export default function DashboardPage() {
  const { user, brainFitnessScore, loading } = useBrainWellness()
  
  // Get personalized content based on user's improvement focus
  const dailyContent = user?.improvementFocus 
    ? getPersonalizedDailyContent(user.improvementFocus) 
    : null

  if (loading) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-brain-50 via-white to-wellness-50 flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-brain-600 mx-auto mb-4"></div>
          <p className="text-gray-600">Loading your dashboard...</p>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-brain-50 via-white to-wellness-50">
      <div className="container mx-auto px-4 py-8">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900">
            Welcome back, {user?.name || 'User'}! 👋
          </h1>
          <p className="text-gray-600 mt-2">Here's your brain wellness overview for today.</p>
        </div>

        {/* Brain Fitness Score */}
        <div className="grid lg:grid-cols-3 gap-6 mb-8">
          <div className="lg:col-span-2">
            <div className="bg-white rounded-xl shadow-lg p-6">
              <h2 className="text-xl font-semibold text-gray-900 mb-4">Brain Fitness Score</h2>
              {brainFitnessScore ? (
                <div className="space-y-4">
                  <div className="text-center">
                    <div className="text-4xl font-bold text-brain-600 mb-2">
                      {brainFitnessScore.overall}
                    </div>
                    <p className="text-gray-600">Overall Score</p>
                    <div className="flex items-center justify-center mt-2">
                      <span className={`text-sm font-medium ${
                        brainFitnessScore.trend === 'up' ? 'text-green-600' : 
                        brainFitnessScore.trend === 'down' ? 'text-red-600' : 'text-gray-600'
                      }`}>
                        {brainFitnessScore.trend === 'up' ? '↗️ Improving' : 
                         brainFitnessScore.trend === 'down' ? '↘️ Declining' : '→ Stable'}
                      </span>
                    </div>
                  </div>
                  
                  <div className="grid grid-cols-4 gap-4">
                    <div className="text-center">
                      <div className="text-2xl font-semibold text-brain-600">
                        {brainFitnessScore.breakdown.focus}
                      </div>
                      <div className="text-sm text-gray-500">Focus</div>
                    </div>
                    <div className="text-center">
                      <div className="text-2xl font-semibold text-wellness-600">
                        {brainFitnessScore.breakdown.memory}
                      </div>
                      <div className="text-sm text-gray-500">Memory</div>
                    </div>
                    <div className="text-center">
                      <div className="text-2xl font-semibold text-calm-600">
                        {brainFitnessScore.breakdown.mood}
                      </div>
                      <div className="text-sm text-gray-500">Mood</div>
                    </div>
                    <div className="text-center">
                      <div className="text-2xl font-semibold text-brain-500">
                        {brainFitnessScore.breakdown.stress}
                      </div>
                      <div className="text-sm text-gray-500">Stress</div>
                    </div>
                  </div>
                </div>
              ) : (
                <div className="text-center py-8">
                  <p className="text-gray-600 mb-4">Complete an assessment to see your Brain Fitness Score</p>
                  <button className="px-6 py-2 bg-brain-600 text-white rounded-lg hover:bg-brain-700 transition-colors">
                    Take Assessment
                  </button>
                </div>
              )}
            </div>
          </div>

          {/* Quick Actions */}
          <div className="space-y-4">
            <div className="bg-white rounded-xl shadow-lg p-6">
              <h3 className="font-semibold text-gray-900 mb-4">Quick Actions</h3>
              <div className="space-y-3">
                <button className="w-full p-3 text-left border border-gray-200 rounded-lg hover:border-brain-300 hover:bg-brain-50 transition-colors">
                  <div className="flex items-center space-x-3">
                    <span className="text-xl">📝</span>
                    <div>
                      <div className="font-medium text-gray-900">Daily Check-in</div>
                      <div className="text-sm text-gray-600">Log your mood and progress</div>
                    </div>
                  </div>
                </button>
                
                <button className="w-full p-3 text-left border border-gray-200 rounded-lg hover:border-wellness-300 hover:bg-wellness-50 transition-colors">
                  <div className="flex items-center space-x-3">
                    <span className="text-xl">🧪</span>
                    <div>
                      <div className="font-medium text-gray-900">Take Assessment</div>
                      <div className="text-sm text-gray-600">ADHD, stress, or memory test</div>
                    </div>
                  </div>
                </button>
                
                <button className="w-full p-3 text-left border border-gray-200 rounded-lg hover:border-calm-300 hover:bg-calm-50 transition-colors">
                  <div className="flex items-center space-x-3">
                    <span className="text-xl">🎯</span>
                    <div>
                      <div className="font-medium text-gray-900">Start Activity</div>
                      <div className="text-sm text-gray-600">Breathing, exercise, or cognitive training</div>
                    </div>
                  </div>
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Today's Personalized Content */}
        <div className="space-y-6 mb-8">
          {/* Today's Inspiration */}
          {dailyContent?.quote && (
            <Card>
              <CardHeader>
                <CardTitle>Today's Inspiration</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="bg-gradient-to-r from-brain-50 to-wellness-50 rounded-lg p-4">
                  <blockquote className="text-gray-700 italic mb-2 text-lg">
                    "{dailyContent.quote.text}"
                  </blockquote>
                  <cite className="text-sm text-gray-600">— {dailyContent.quote.author}</cite>
                </div>
              </CardContent>
            </Card>
          )}

          {/* Daily Content Grid */}
          <div className="grid lg:grid-cols-3 gap-6">
            {/* Featured Video */}
            {dailyContent?.video && (
              <Card variant="interactive">
                <CardHeader>
                  <div className="flex items-center space-x-2 mb-2">
                    <span className="text-xl">🎥</span>
                    <span className="text-sm font-medium text-brain-600">Featured Video</span>
                  </div>
                  <CardTitle className="text-lg">{dailyContent.video.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 text-sm mb-4">{dailyContent.video.description}</p>
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-xs text-gray-500">{Math.floor(dailyContent.video.duration / 60)} min</span>
                    <span className={`text-xs px-2 py-1 rounded-full bg-${dailyContent.video.category === 'adhd' ? 'brain' : dailyContent.video.category === 'memory' ? 'wellness' : 'calm'}-100 text-${dailyContent.video.category === 'adhd' ? 'brain' : dailyContent.video.category === 'memory' ? 'wellness' : 'calm'}-700`}>
                      {dailyContent.video.difficulty}
                    </span>
                  </div>
                  <Button size="sm" className="w-full">Watch Now</Button>
                </CardContent>
              </Card>
            )}

            {/* Featured Article */}
            {dailyContent?.article && (
              <Card variant="interactive">
                <CardHeader>
                  <div className="flex items-center space-x-2 mb-2">
                    <span className="text-xl">📚</span>
                    <span className="text-sm font-medium text-wellness-600">Featured Article</span>
                  </div>
                  <CardTitle className="text-lg">{dailyContent.article.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 text-sm mb-4">{dailyContent.article.excerpt}</p>
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-xs text-gray-500">{dailyContent.article.readTime} min read</span>
                    <span className="text-xs text-gray-500">By {dailyContent.article.author}</span>
                  </div>
                  <Button size="sm" variant="outline" className="w-full">Read Article</Button>
                </CardContent>
              </Card>
            )}

            {/* Daily Task */}
            {dailyContent?.task && (
              <Card variant="interactive">
                <CardHeader>
                  <div className="flex items-center space-x-2 mb-2">
                    <span className="text-xl">🎯</span>
                    <span className="text-sm font-medium text-calm-600">Today's Task</span>
                  </div>
                  <CardTitle className="text-lg">{dailyContent.task.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 text-sm mb-4">{dailyContent.task.description}</p>
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-xs text-gray-500">{dailyContent.task.estimatedTime} min</span>
                    <span className={`text-xs px-2 py-1 rounded-full ${
                      dailyContent.task.difficulty === 'easy' ? 'bg-green-100 text-green-700' :
                      dailyContent.task.difficulty === 'medium' ? 'bg-yellow-100 text-yellow-700' :
                      'bg-red-100 text-red-700'
                    }`}>
                      {dailyContent.task.difficulty}
                    </span>
                  </div>
                  <Button size="sm" variant="wellness" className="w-full">Start Task</Button>
                </CardContent>
              </Card>
            )}
          </div>

          {/* Additional Content Row */}
          <div className="grid lg:grid-cols-2 gap-6">
            {/* Breathwork */}
            {dailyContent?.breathwork && (
              <Card>
                <CardHeader>
                  <div className="flex items-center space-x-2 mb-2">
                    <span className="text-xl">🧘‍♀️</span>
                    <span className="text-sm font-medium text-calm-600">Breathwork</span>
                  </div>
                  <CardTitle>{dailyContent.breathwork.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 text-sm mb-3">{dailyContent.breathwork.description}</p>
                  <div className="bg-calm-50 rounded-lg p-3 mb-4">
                    <p className="text-sm font-medium text-calm-800">{dailyContent.breathwork.technique}</p>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-xs text-gray-500">{dailyContent.breathwork.duration} min</span>
                    <Button size="sm" variant="calm">Practice Now</Button>
                  </div>
                </CardContent>
              </Card>
            )}

            {/* Nutrition */}
            {dailyContent?.nutrition && (
              <Card>
                <CardHeader>
                  <div className="flex items-center space-x-2 mb-2">
                    <span className="text-xl">🥗</span>
                    <span className="text-sm font-medium text-wellness-600">Brain Nutrition</span>
                  </div>
                  <CardTitle>{dailyContent.nutrition.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 text-sm mb-4">{dailyContent.nutrition.description}</p>
                  <div className="flex items-center justify-between">
                    <span className="text-xs text-gray-500 capitalize">{dailyContent.nutrition.type}</span>
                    <Button size="sm" variant="wellness">View Recipe</Button>
                  </div>
                </CardContent>
              </Card>
            )}
          </div>
        </div>

        {/* Progress Overview */}
        <div className="bg-white rounded-xl shadow-lg p-6">
          <h3 className="font-semibold text-gray-900 mb-4">Your Progress This Week</h3>
          <div className="grid grid-cols-7 gap-2 mb-4">
            {['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'].map((day, index) => (
              <div key={day} className="text-center">
                <div className="text-sm text-gray-600 mb-2">{day}</div>
                <div className={`w-8 h-8 rounded-full mx-auto ${
                  index < 4 ? 'bg-brain-200' : 'bg-gray-100'
                }`}></div>
              </div>
            ))}
          </div>
          <p className="text-sm text-gray-600">
            You've been active for 4 out of 7 days this week. Keep it up! 🎉
          </p>
        </div>
      </div>
    </div>
  )
}