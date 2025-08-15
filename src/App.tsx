import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { Toaster } from 'sonner'

// Pages
import LandingPage from './pages/LandingPage'
import OnboardingPage from './pages/OnboardingPage'
import DashboardPage from './pages/DashboardPage'
import AssessmentPage from './pages/AssessmentPage'
import CoachingPage from './pages/CoachingPage'
import ProgressPage from './pages/ProgressPage'

// Providers
import { BrainWellnessProvider } from './hooks/useBrainWellness'

// Components
import Navigation from './components/shared/Navigation'

// Create React Query client optimized for brain wellness data
const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      retry: 1,
      refetchOnWindowFocus: false,
      staleTime: 5 * 60 * 1000, // 5 minutes
      gcTime: 10 * 60 * 1000, // 10 minutes (gcTime replaces cacheTime in newer versions)
    },
    mutations: {
      retry: 1,
    },
  },
})

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <BrainWellnessProvider>
        <Router>
          <div className="min-h-screen bg-gradient-to-br from-brain-50 via-white to-wellness-50">
            <Navigation />
            <Routes>
              {/* Public routes */}
              <Route path="/" element={<LandingPage />} />
              
              {/* Onboarding flow */}
              <Route path="/onboarding" element={<OnboardingPage />} />
              <Route path="/onboarding/:step" element={<OnboardingPage />} />
              
              {/* Main app routes */}
              <Route path="/dashboard" element={<DashboardPage />} />
              <Route path="/assessment" element={<AssessmentPage />} />
              <Route path="/assessment/:type" element={<AssessmentPage />} />
              <Route path="/coaching" element={<CoachingPage />} />
              <Route path="/progress" element={<ProgressPage />} />
              
              {/* Catch all - redirect to landing */}
              <Route path="*" element={<LandingPage />} />
            </Routes>
            
            {/* Global toast notifications */}
            <Toaster 
              position="top-right"
              toastOptions={{
                style: {
                  background: 'white',
                  border: '1px solid #e2e8f0',
                  color: '#1e293b',
                },
              }}
              className="toaster group"
              closeButton
            />
          </div>
        </Router>
      </BrainWellnessProvider>
    </QueryClientProvider>
  )
}

export default App