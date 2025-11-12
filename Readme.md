# SimpliDoc AI

<div align="center">

<img src="frontend/assets/images/icon.png" alt="SimpliDoc AI Logo" width="80" height="80" />

**AI-Powered Document Management & Chat Platform**

*Transform your documents into intelligent conversations with AI*

[![React Native](https://img.shields.io/badge/React%20Native-0.79.5-blue.svg)](https://reactnative.dev/)
[![FastAPI](https://img.shields.io/badge/FastAPI-0.115.13-green.svg)](https://fastapi.tiangolo.com/)
[![Supabase](https://img.shields.io/badge/Supabase-2.16.0-purple.svg)](https://supabase.com/)
[![Expo](https://img.shields.io/badge/Expo-53.0.20-black.svg)](https://expo.dev/)
[![License](https://img.shields.io/badge/License-MIT-yellow.svg)](LICENSE)

</div>

---

## 📖 Table of Contents

- [Overview](#-overview)
- [✨ Features](#-features)
- [🏗️ Architecture](#️-architecture)
- [🚀 Quick Start](#-quick-start)
- [📱 Mobile App](#-mobile-app)
- [🔧 Backend API](#-backend-api)
- [🗄️ Database](#️-database)
- [🤖 AI Integration](#-ai-integration)
- [🔐 Security](#-security)
- [📦 Installation](#-installation)
- [🛠️ Development](#️-development)
- [🧪 Testing](#-testing)
- [📊 Performance](#-performance)
- [🤝 Contributing](#-contributing)
- [📄 License](#-license)

---

## 📖 Overview

SimpliDoc AI is a comprehensive document management and AI chat platform that transforms your documents into intelligent conversations. Built with React Native, FastAPI, and Supabase, it provides a seamless mobile experience for uploading, organizing, and interacting with documents through an AI assistant.

### 🎯 What It Does

- **Document Management**: Upload, organize, and manage PDF documents with folder-based organization
- **AI Chat**: Have intelligent conversations about your documents using Retrieval-Augmented Generation (RAG)
- **Smart Processing**: Automatic text extraction, chunking, and vector embedding for AI-ready documents
- **Subscription System**: Multi-tier plans with usage tracking and billing management
- **Real-time Updates**: Live document processing status and chat synchronization

### 🎨 User Experience

- **Modern UI**: Beautiful gradient-based design with smooth animations
- **Responsive Design**: Optimized for mobile with intuitive navigation
- **Offline Support**: View documents and chat history without internet
- **Cross-platform**: Works on iOS and Android with consistent experience

---

## ✨ Features

### 🔐 Authentication & User Management
- **Secure Authentication**: JWT-based auth with Supabase
- **Session Management**: Auto-refresh tokens and persistent sessions
- **User Profiles**: Customizable profiles with subscription status
- **Row Level Security**: Complete data isolation between users

### 📄 Document Management
- **Multi-format Support**: PDF documents with text extraction
- **Folder Organization**: Hierarchical document organization
- **Upload Progress**: Real-time upload status with progress indicators
- **Document Metadata**: File size, page count, processing status
- **Search & Filter**: Find documents quickly with advanced filtering

### 🤖 AI Chat System
- **Document-Specific Chat**: Ask questions about specific documents
- **General AI Chat**: General knowledge conversations
- **Conversation History**: Persistent chat sessions with message history
- **Context Awareness**: AI remembers conversation context
- **Real-time Responses**: Streaming AI responses with typing indicators

### 💳 Subscription & Billing
- **Multi-tier Plans**: Free, Pro, and Premium subscription levels
- **Usage Tracking**: Monitor document uploads and AI queries
- **Billing History**: Complete payment and usage records
- **Plan Management**: Easy upgrade/downgrade between plans

### 🔄 Real-time Features
- **Live Updates**: Real-time document processing status
- **Chat Synchronization**: Instant message delivery
- **Background Processing**: Non-blocking document operations
- **Push Notifications**: Processing completion alerts

---

## 🏗️ Architecture

### System Overview

```
┌─────────────────┐    ┌─────────────────┐    ┌─────────────────┐
│   Mobile App    │    │   Backend API   │    │    Supabase     │
│  (React Native) │◄──►│   (FastAPI)     │◄──►│   (PostgreSQL)  │
└─────────────────┘    └─────────────────┘    └─────────────────┘
         │                       │                       │
         │                       │                       │
         ▼                       ▼                       ▼
┌─────────────────┐    ┌─────────────────┐    ┌─────────────────┐
│   Supabase      │    │   Redis + RQ    │    │   Google Gemini │
│   Storage       │    │   (Background)  │    │   (AI/Embedding)│
└─────────────────┘    └─────────────────┘    └─────────────────┘
```

### Technology Stack

#### Frontend (Mobile App)
- **Framework**: React Native with Expo SDK 53
- **Navigation**: Expo Router v5 (File-based routing)
- **Styling**: NativeWind (Tailwind CSS for React Native)
- **State Management**: React Context + TanStack Query
- **UI Components**: Custom components with Expo Vector Icons
- **Authentication**: Supabase Auth with AsyncStorage
- **File Handling**: Expo Document Picker, Media Library
- **Animations**: React Native Reanimated
- **Development**: TypeScript, ESLint, Prettier

#### Backend (API Server)
- **Framework**: FastAPI (Python)
- **Authentication**: JWT validation with Supabase
- **Background Jobs**: Redis + RQ (Redis Queue)
- **Document Processing**: PyMuPDF4LLM for text extraction
- **API Documentation**: Auto-generated with FastAPI
- **Development**: Python 3.11+, Docker containerization

#### Database & Storage
- **Primary Database**: Supabase PostgreSQL
- **Vector Storage**: pgvector extension for embeddings
- **File Storage**: Supabase Storage (S3-compatible)
- **Authentication**: Supabase Auth
- **Row Level Security**: RLS policies for data isolation

#### AI & External Services
- **LLM Provider**: Google Gemini API
- **Embedding Model**: Gemini Embedding API
- **Text Generation**: Gemini Pro for chat responses
- **RAG Pipeline**: Retrieval-Augmented Generation

#### Infrastructure & DevOps
- **Containerization**: Docker + Docker Compose
- **Background Processing**: Redis + RQ Worker
- **Monitoring**: RQ Dashboard for job monitoring
- **Environment**: Development with hot-reload support

---

## 🚀 Quick Start

### Prerequisites

- **Node.js** 18+ and Yarn
- **Python** 3.11+
- **Docker** and Docker Compose
- **Supabase** account and project
- **Google Gemini** API key

### 1. Clone Repository

```bash
git clone https://github.com/your-username/SimpliDoc-AI.git
cd SimpliDoc-AI
```

### 2. Environment Setup

#### Frontend Setup
```bash
cd frontend
yarn install
cp .env.example .env
```

Configure your `.env` file:
```env
EXPO_PUBLIC_SUPABASE_URL=your_supabase_url
EXPO_PUBLIC_SUPABASE_ANON_KEY=your_supabase_anon_key
EXPO_PUBLIC_API_URL=http://localhost:8000
```

#### Backend Setup
```bash
cd backend
python -m venv venv
source venv/bin/activate  # On Windows: venv\Scripts\activate
pip install -r requirements.txt
cp .env.example .env
```

Configure your `.env` file:
```env
SUPABASE_URL=your_supabase_url
SUPABASE_SERVICE_ROLE_KEY=your_service_role_key
GEMINI_API_KEY=your_gemini_api_key
REDIS_URL=redis://localhost:6379
```

### 3. Database Setup

1. **Create Supabase Project**
   - Go to [Supabase Dashboard](https://supabase.com/dashboard)
   - Create a new project
   - Enable pgvector extension

2. **Run Database Migrations**
   ```bash
   # Apply the database schema
   # (See docs/db_schema.md for detailed schema)
   ```

3. **Configure Storage Buckets**
   - Create `documents` bucket in Supabase Storage
   - Set up RLS policies for secure access

### 4. Start Development Environment

```bash
# Start backend services (Redis, FastAPI, RQ Worker)
docker-compose up -d

# Start frontend development server
cd frontend
yarn start
```

### 5. Access Applications

- **Mobile App**: Scan QR code with Expo Go app
- **Backend API**: http://localhost:8000
- **API Docs**: http://localhost:8000/docs
- **RQ Dashboard**: http://localhost:9181

---

## 📱 Mobile App

### App Structure

```
frontend/
├── app/                    # Expo Router screens
│   ├── (auth)/            # Authentication screens
│   │   ├── login.tsx      # Login screen
│   │   ├── signup.tsx     # Registration screen
│   │   └── welcome.tsx    # Welcome/onboarding
│   └── (root)/            # Main app screens
│       ├── (tabs)/        # Tab navigation
│       │   ├── index.tsx  # Home dashboard
│       │   ├── chat.tsx   # AI chat interface
│       │   ├── document.tsx # Document management
│       │   └── profile.tsx # User profile
│       └── docs.tsx       # Document viewer
├── components/            # Reusable UI components
├── services/             # API service layers
├── types/                # TypeScript definitions
├── utils/                # Utility functions
└── assets/               # Images, fonts, etc.
```

### Key Features

#### 🏠 Home Dashboard
- **Usage Statistics**: Document count, AI queries, subscription status
- **Recent Documents**: Quick access to recently uploaded files
- **Quick Actions**: Upload documents, start new chat
- **Subscription Status**: Current plan and usage limits

#### 💬 AI Chat Interface
- **Conversation List**: All chat sessions with preview
- **Message History**: Persistent conversation threads
- **Document Context**: Chat about specific documents
- **Real-time Updates**: Live message delivery

#### 📄 Document Management
- **Folder Organization**: Hierarchical document structure
- **Upload Interface**: Drag-and-drop file selection
- **Processing Status**: Real-time upload and processing updates
- **Search & Filter**: Find documents quickly

#### 👤 User Profile
- **Account Settings**: Profile information and preferences
- **Subscription Management**: Plan details and billing
- **Usage Analytics**: Detailed usage statistics
- **Support Access**: Help and contact information

### Navigation Flow

```
Welcome Screen
    ↓
Login/Signup
    ↓
Main App (Tab Navigation)
    ├── Home Dashboard
    ├── AI Chat
    ├── Document Management
    └── User Profile
```

---

## 🔧 Backend API

### API Structure

```
backend/
├── app/
│   ├── main.py           # FastAPI application entry
│   ├── core/             # Core configuration
│   │   ├── config.py     # Environment configuration
│   │   └── supabase_client.py # Supabase client setup
│   ├── routes/           # API route handlers
│   │   ├── chat/         # AI chat endpoints
│   │   ├── documents/    # Document management
│   │   └── embedding/    # Vector embedding services
│   └── utils/            # Utility functions
├── downloads/            # Temporary file storage
└── requirements.txt      # Python dependencies
```

### API Endpoints

#### Authentication
- `POST /auth/validate` - Validate JWT tokens
- `GET /auth/user` - Get current user information

#### Document Management
- `POST /documents/upload` - Upload new document
- `GET /documents` - List user documents
- `GET /documents/{id}` - Get document details
- `DELETE /documents/{id}` - Delete document
- `PUT /documents/{id}` - Update document metadata

#### AI Chat
- `POST /chat/query` - Process AI chat query
- `GET /chat/conversations` - List conversations
- `GET /chat/conversations/{id}` - Get conversation with messages
- `POST /chat/conversations` - Create new conversation
- `DELETE /chat/conversations/{id}` - Delete conversation

#### Embedding Services
- `POST /embedding/create` - Create document embeddings
- `GET /embedding/status/{id}` - Get embedding status
- `DELETE /embedding/{id}` - Delete embeddings

### Background Processing

The backend uses Redis + RQ for background document processing:

```python
# Document processing workflow
1. User uploads document
2. Document saved to Supabase Storage
3. Background job queued for processing
4. Worker extracts text and creates chunks
5. Chunks converted to vector embeddings
6. Document marked as ready for AI chat
```

### API Documentation

- **Interactive Docs**: http://localhost:8000/docs
- **ReDoc**: http://localhost:8000/redoc
- **OpenAPI Schema**: http://localhost:8000/openapi.json

---

## 🗄️ Database

### Schema Overview

The database uses Supabase PostgreSQL with the following key tables:

#### Core Tables

```sql
-- User profiles (extends Supabase auth.users)
user_profiles (
  id uuid PRIMARY KEY REFERENCES auth.users(id),
  full_name TEXT,
  role TEXT DEFAULT 'owner',
  plan_id INTEGER REFERENCES plans(id),
  created_at TIMESTAMP DEFAULT NOW()
)

-- Document management
documents (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id uuid REFERENCES user_profiles(id),
  title TEXT,
  description TEXT,
  file_url TEXT,
  file_type TEXT DEFAULT 'pdf',
  folder TEXT,
  tags TEXT[],
  ocr_text TEXT,
  num_pages INTEGER,
  is_embedded BOOLEAN DEFAULT FALSE,
  status TEXT DEFAULT 'uploading',
  created_at TIMESTAMP DEFAULT NOW(),
  updated_at TIMESTAMP DEFAULT NOW()
)

-- Document chunks for AI processing
document_chunks (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  document_id uuid REFERENCES documents(id),
  user_id uuid REFERENCES user_profiles(id),
  chunk_text TEXT,
  embedding vector(1536),
  chunk_index INTEGER,
  created_at TIMESTAMP DEFAULT NOW()
)

-- Chat conversations
chat_conversations (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id uuid REFERENCES user_profiles(id),
  title TEXT,
  conversation_type TEXT DEFAULT 'general',
  document_id uuid REFERENCES documents(id),
  is_active BOOLEAN DEFAULT TRUE,
  last_message_at TIMESTAMP DEFAULT NOW(),
  created_at TIMESTAMP DEFAULT NOW()
)

-- Chat messages
chat_messages (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  conversation_id uuid REFERENCES chat_conversations(id),
  sender TEXT CHECK (sender IN ('user', 'ai')),
  content TEXT,
  tokens_used INTEGER DEFAULT 0,
  metadata JSONB,
  sources JSONB,
  created_at TIMESTAMP DEFAULT NOW()
)
```

#### Subscription & Billing

```sql
-- Subscription plans
plans (
  id SERIAL PRIMARY KEY,
  name TEXT,
  max_docs INTEGER,
  max_queries INTEGER,
  price_cents INTEGER
)

-- Usage tracking
usage_stats (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id uuid REFERENCES user_profiles(id),
  doc_count INTEGER DEFAULT 0,
  ai_queries_count INTEGER DEFAULT 0,
  billing_period TEXT,
  last_updated TIMESTAMP DEFAULT NOW()
)
```

### Row Level Security (RLS)

All tables implement RLS policies to ensure data isolation:

```sql
-- Example RLS policy for documents
CREATE POLICY "Users can only access their own documents"
ON documents FOR ALL
USING (user_id = auth.uid());
```

### Vector Search

The database uses pgvector for efficient similarity search:

```sql
-- Enable pgvector extension
CREATE EXTENSION IF NOT EXISTS vector;

-- Vector similarity search
SELECT chunk_text, embedding <-> query_embedding as distance
FROM document_chunks
WHERE user_id = $1
ORDER BY distance
LIMIT 5;
```

---

## 🤖 AI Integration

### RAG Pipeline (Retrieval-Augmented Generation)

The AI system uses a sophisticated RAG pipeline for document-aware conversations:

#### 1. Document Processing
```
Document Upload → Text Extraction → Chunking → Embedding Generation → Vector Storage
```

#### 2. Query Processing
```
User Query → Query Embedding → Similarity Search → Context Retrieval → Response Generation
```

#### 3. Implementation Details

**Text Extraction**: Uses PyMuPDF4LLM for robust PDF text extraction
```python
from pymupdf4llm import extract_text
text = extract_text(pdf_path)
```

**Chunking Strategy**: Semantic chunking with overlap for context preservation
```python
from langchain_text_splitters import RecursiveCharacterTextSplitter
splitter = RecursiveCharacterTextSplitter(
    chunk_size=1000,
    chunk_overlap=200
)
chunks = splitter.split_text(text)
```

**Embedding Generation**: Google Gemini Embedding API
```python
import google.generativeai as genai
embedding = genai.embed_content(
    model="models/embedding-001",
    content=chunk_text
)
```

**Similarity Search**: Vector similarity using pgvector
```sql
SELECT chunk_text, embedding <-> $1 as distance
FROM document_chunks
WHERE user_id = $2
ORDER BY distance
LIMIT 5;
```

**Response Generation**: Context-aware AI responses
```python
prompt = f"""
Context: {retrieved_context}
Question: {user_query}
Answer the question based on the provided context.
"""
response = genai.generate_content(prompt)
```

### AI Features

#### Document-Specific Chat
- **Context Retrieval**: AI searches user's documents for relevant information
- **Source Attribution**: Responses include document sources
- **Conversation Memory**: AI remembers conversation context

#### General AI Chat
- **Knowledge Base**: General knowledge conversations
- **No Document Context**: Responses based on AI's training data
- **Conversation History**: Persistent chat sessions

#### Usage Tracking
- **Token Counting**: Track AI usage for billing
- **Query Limits**: Enforce subscription-based limits
- **Analytics**: Detailed usage statistics

---

## 🔐 Security

### Authentication & Authorization

#### JWT Validation
- **Token Verification**: All API requests validate Supabase JWTs
- **Automatic Refresh**: Tokens refreshed before expiration
- **Secure Storage**: Tokens stored securely in AsyncStorage

#### Row Level Security (RLS)
- **Data Isolation**: Users can only access their own data
- **Database-Level Security**: RLS policies enforce access control
- **Storage Security**: Supabase Storage with RLS policies

### Input Validation

#### Frontend Validation
- **Form Validation**: Real-time input validation
- **File Type Checking**: Secure file upload validation
- **Size Limits**: File size restrictions

#### Backend Validation
- **Pydantic Schemas**: Comprehensive request validation
- **File Security**: Secure file handling and processing
- **SQL Injection Prevention**: Parameterized queries

### Data Protection

#### Encryption
- **Transport Security**: HTTPS/TLS for all communications
- **Storage Encryption**: Supabase encrypts data at rest
- **Token Security**: Secure JWT handling

#### Privacy
- **Data Minimization**: Only collect necessary data
- **User Control**: Users can delete their data
- **Audit Logging**: Track data access and changes

---

## 📦 Installation

### Production Deployment

#### 1. Environment Setup

Create production environment files:

```bash
# Frontend (.env)
EXPO_PUBLIC_SUPABASE_URL=your_production_supabase_url
EXPO_PUBLIC_SUPABASE_ANON_KEY=your_production_anon_key
EXPO_PUBLIC_API_URL=https://your-api-domain.com

# Backend (.env)
SUPABASE_URL=your_production_supabase_url
SUPABASE_SERVICE_ROLE_KEY=your_production_service_role_key
GEMINI_API_KEY=your_gemini_api_key
REDIS_URL=redis://your-redis-instance:6379
ENVIRONMENT=production
```

#### 2. Database Migration

```bash
# Apply production database schema
# Ensure all RLS policies are enabled
# Configure production storage buckets
```

#### 3. Backend Deployment

```bash
# Build and deploy backend
docker build -t simplidoc-backend ./backend
docker run -d --name simplidoc-backend -p 8000:8000 simplidoc-backend

# Deploy Redis and RQ worker
docker-compose -f docker-compose.prod.yml up -d
```

#### 4. Frontend Build

```bash
# Build for production
cd frontend
eas build --platform all --profile production
```

### Docker Deployment

```bash
# Start all services
docker-compose -f docker-compose.prod.yml up -d

# Services included:
# - Backend API (FastAPI)
# - Redis (Background jobs)
# - RQ Worker (Document processing)
# - RQ Dashboard (Monitoring)
```

---

## 🛠️ Development

### Development Workflow

#### 1. Code Style

**Frontend (React Native)**
```bash
# Lint and format code
yarn lint
yarn prettier --write .
```

**Backend (Python)**
```bash
# Format code
black app/
isort app/

# Type checking
mypy app/
```

#### 2. Git Workflow

```bash
# Create feature branch
git checkout -b feature/new-feature

# Make changes and commit
git add .
git commit -m "feat: add new feature"

# Push and create PR
git push origin feature/new-feature
```

#### 3. Testing

**Frontend Testing**
```bash
# Run tests
yarn test

# Run with coverage
yarn test --coverage
```

**Backend Testing**
```bash
# Run tests
pytest

# Run with coverage
pytest --cov=app
```

### Development Tools

#### Frontend
- **Expo DevTools**: Development and debugging
- **React Native Debugger**: Advanced debugging
- **Flipper**: Performance monitoring

#### Backend
- **FastAPI Docs**: Interactive API documentation
- **RQ Dashboard**: Background job monitoring
- **Redis Commander**: Redis data inspection

### Debugging

#### Frontend Debugging
```javascript
// Enable debug logging
import { logger } from '../utils/logger';
logger.debug('Debug message');

// React Native debugging
import { LogBox } from 'react-native';
LogBox.ignoreLogs(['Warning:']);
```

#### Backend Debugging
```python
# Enable debug logging
import logging
logging.basicConfig(level=logging.DEBUG)

# FastAPI debugging
from fastapi import FastAPI
app = FastAPI(debug=True)
```

---

## 🧪 Testing

### Testing Strategy

#### Unit Tests
- **Frontend**: Component testing with React Native Testing Library
- **Backend**: API endpoint testing with pytest
- **Database**: Schema and RLS policy testing

#### Integration Tests
- **API Integration**: End-to-end API testing
- **Database Integration**: Real database testing
- **External Services**: Supabase and Gemini API testing

#### E2E Tests
- **Mobile App**: Manual testing on physical devices
- **User Flows**: Complete user journey testing
- **Performance**: Load and stress testing

### Test Coverage

```bash
# Frontend coverage
yarn test --coverage --watchAll=false

# Backend coverage
pytest --cov=app --cov-report=html
```

### Testing Best Practices

- **Test Isolation**: Each test is independent
- **Mock External Services**: Don't rely on external APIs
- **Data Cleanup**: Clean up test data after each test
- **Realistic Test Data**: Use realistic test scenarios

---

## 📊 Performance

### Frontend Optimization

#### React Native Performance
- **Lazy Loading**: Load components on demand
- **Image Optimization**: Use Expo Image for efficient loading
- **List Optimization**: Use FlatList for large lists
- **Memory Management**: Proper cleanup of resources

#### Bundle Optimization
- **Tree Shaking**: Remove unused code
- **Code Splitting**: Split code into smaller chunks
- **Asset Optimization**: Compress images and fonts

### Backend Optimization

#### API Performance
- **Async Processing**: Non-blocking operations
- **Caching**: Redis caching for frequently accessed data
- **Database Optimization**: Proper indexing and query optimization
- **Connection Pooling**: Efficient database connections

#### Background Processing
- **Job Queuing**: Efficient background job processing
- **Worker Scaling**: Multiple workers for parallel processing
- **Error Handling**: Robust error handling and retry logic

### Database Optimization

#### Query Optimization
- **Indexing**: Proper indexes on frequently queried columns
- **Vector Search**: Optimized similarity search
- **Connection Pooling**: Efficient connection management
- **Query Caching**: Cache frequently executed queries

#### Storage Optimization
- **File Compression**: Compress stored documents
- **Cleanup Jobs**: Regular cleanup of temporary files
- **Storage Policies**: Efficient storage bucket management

### Monitoring

#### Performance Metrics
- **API Response Times**: Monitor endpoint performance
- **Database Query Times**: Track query performance
- **Memory Usage**: Monitor memory consumption
- **Error Rates**: Track error frequencies

#### Tools
- **RQ Dashboard**: Background job monitoring
- **Supabase Analytics**: Database performance insights
- **Expo Analytics**: Mobile app performance tracking

---


[React Native](https://reactnative.dev/) • [FastAPI](https://fastapi.tiangolo.com/) • [Supabase](https://supabase.com/) • [Expo](https://expo.dev/)

</div>
