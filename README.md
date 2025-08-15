# LBW - Limitless Brain Wellness

A comprehensive brain wellness platform that provides science-backed, personalized programs for ADHD support, memory enhancement, mood regulation, and stress management.

## 🧠 Features

### ✅ Completed Features

- **Landing Page**: Engaging introduction to LBW with key features and call-to-action
- **Conditional Onboarding**: Multi-pathway onboarding flow based on user's improvement focus
  - ADHD Pathway: Focus and attention support
  - Memory Pathway: Cognitive enhancement and memory training
  - Stress & Emotional Regulation Pathway: Stress management and mood regulation
  - Complete Wellness Program: All-encompassing approach
- **Interactive Assessments**: Evidence-based assessment tools including:
  - ADHD Rating Scale (18 questions)
  - GAD-7 Anxiety Scale (7 questions)
  - Perceived Stress Scale - PSS-10 (10 questions)
  - Memory & Cognitive Assessment (6 questions)
  - Mood & Emotional Regulation Assessment (5 questions)
- **Personalized Dashboard**: Dynamic content based on user's improvement focus
- **Daily Content Engine**: Personalized daily content including:
  - Inspirational quotes
  - Educational videos
  - Brain wellness articles
  - Breathwork exercises
  - Nutrition recommendations
  - Daily tasks and activities
- **Brain Fitness Score**: Comprehensive scoring system with breakdowns by category
- **Navigation System**: Responsive navigation with mobile support
- **Modern UI Components**: Reusable components with consistent design system

### 🚧 In Development

- Coaching module with session booking
- QEEG upload and management
- Progress tracking with 10-day reassessment cycles
- Brain fitness score integration with Supabase

## 🚀 Technology Stack

- **Frontend**: React 18 + TypeScript + Vite
- **Styling**: Tailwind CSS + Custom Brain Wellness Design System
- **State Management**: React Context + TanStack Query
- **Routing**: React Router DOM
- **Database**: Supabase (PostgreSQL)
- **Authentication**: Supabase Auth
- **UI Components**: Custom components with Radix UI primitives
- **Forms**: React Hook Form + Zod validation
- **Charts**: Recharts
- **Notifications**: Sonner

## 🎨 Design Philosophy

**"You're not broken. You're becoming limitless."**

The LBW platform is built with empathy and understanding, focusing on:
- Strengths-based approach to brain differences
- Personalized pathways based on individual needs
- Science-backed interventions and assessments
- Beautiful, calming, and trustworthy design
- Accessibility and inclusivity

## 📋 Assessment Types

### ADHD Rating Scale
- 18 comprehensive questions
- Evidence-based scoring (0-54 scale)
- Categories: Minimal, Mild, Moderate, Severe
- Personalized insights and recommendations

### GAD-7 (Generalized Anxiety Disorder Scale)
- 7 questions for anxiety assessment
- Clinical standard scoring (0-21 scale)
- Categories: Minimal, Mild, Moderate, Severe anxiety

### PSS-10 (Perceived Stress Scale)
- 10 questions measuring stress perception
- Includes reverse-scored items
- Categories: Low, Moderate, High stress levels

### Memory & Cognitive Assessment
- 6 targeted questions for memory function
- Focus on working memory and recall abilities
- Categories: Excellent, Good, Fair, Needs Improvement

### Mood Assessment
- 5 questions for emotional regulation
- Combines depression and mood stability measures
- Categories: Stable, Mild, Moderate, Significant concerns

## 🎯 Personalization Features

### Conditional Onboarding Pathways

1. **ADHD Pathway**
   - ADHD assessment + QEEG scan recommendation
   - Brain coach booking
   - Focus-specific content and exercises

2. **Memory Pathway**
   - Cognitive assessment via memory tests
   - Memory enhancement content
   - Cognitive training games and nutrition focus

3. **Stress & Emotional Regulation Pathway**
   - Stress screening (PSS) + Anxiety scale (GAD-7)
   - Nervous system coach booking
   - Breathwork and stress management content

4. **Complete Wellness Program**
   - All assessments and pathways combined
   - Comprehensive brain wellness approach

### Daily Personalized Content

Based on user's improvement focus, the system delivers:
- **Quotes**: Motivational content matching user's pathway
- **Videos**: Educational content (meditation, techniques, training)
- **Articles**: In-depth brain wellness articles by experts
- **Breathwork**: Guided breathing exercises (4-7-8, Box Breathing)
- **Nutrition**: Brain-healthy recipes and supplement guidance
- **Tasks**: Daily activities (journaling, cognitive training, meditation)

## 🛠️ Development Setup

1. **Clone the repository**
   ```bash
   git clone [repository-url]
   cd lbw-prototype
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Environment Variables**
   Create a `.env` file with:
   ```
   VITE_SUPABASE_URL=your_supabase_url
   VITE_SUPABASE_ANON_KEY=your_supabase_anon_key
   ```

4. **Run development server**
   ```bash
   npm run dev
   ```

5. **Build for production**
   ```bash
   npm run build
   ```

## 🗄️ Database Schema

### Users Table
- Personal information (name, age, gender, email)
- Improvement focus areas
- Onboarding completion status
- Brain fitness score

### Assessments Table
- Assessment results and responses
- Scoring and insights
- Timestamp tracking

### Daily Progress Table
- Mood, stress, focus, energy ratings
- Completed activities tracking
- Sleep and symptom logging

### Achievements Table
- Progress milestones and streaks
- Gamification elements

## 🎨 Brand Colors

- **Brain**: Blue spectrum (#0ea5e9 to #0c4a6e)
- **Wellness**: Green spectrum (#10b981 to #022c22)
- **Calm**: Gray spectrum (#71717a to #09090b)

## 📱 Responsive Design

- Mobile-first approach
- Tablet and desktop optimizations
- Touch-friendly interactions
- Accessible navigation

## 🔐 Privacy & Security

- HIPAA/GDPR compliant data handling
- Secure user authentication via Supabase
- Encrypted data storage
- Privacy-focused design

## 🧪 Testing Strategy

- Component testing with modern testing frameworks
- Assessment scoring validation
- User flow testing
- Accessibility testing
- Performance monitoring

## 🚀 Deployment

The application is ready for deployment on:
- Vercel (recommended for React apps)
- Netlify
- AWS Amplify
- Self-hosted solutions

## 📈 Future Roadmap

### Phase 2 Features
- AI-powered chatbot for user support
- Integration with wearables (Oura, Fitbit)
- Advanced analytics and insights
- Peer support and community features
- Gamification with streaks and badges

### Phase 3 Features
- Mobile app (React Native)
- Offline functionality
- Advanced QEEG analysis
- Telemedicine integration
- Insurance billing integration

## 🤝 Contributing

This is a prototype for the LBW Brain Wellness platform. For contribution guidelines and development standards, please refer to the internal documentation.

## 📄 License

Proprietary - Limitless Brain Wellness

---

**Built with ❤️ for brain wellness and human potential**
