import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import './index.css'

import RootLayout from '@/layouts/RootLayout'
import AboutPage from '@/pages/AboutPage'
import FacebookPage from '@/pages/FacebookPage'
import HomePage from '@/pages/HomePage'
import InsightPage from '@/pages/InsightPage'
import IntroPage from '@/pages/IntroPage'
import LoginPage from '@/pages/LoginPage'
import NaverNewsPage from '@/pages/NaverNewsPage'
import NewsletterPage from '@/pages/NewsletterPage'
import NewsPage from '@/pages/NewsPage'
import NoticePage from '@/pages/NoticePage'
import SearchPage from '@/pages/SearchPage'
import SignupPage from '@/pages/SignupPage'

const router = createBrowserRouter([
  {
    path: '/',
    element: <RootLayout />,
    children: [
      { index: true, element: <HomePage /> },
      { path: 'about', element: <AboutPage /> },
      { path: 'news', element: <NewsPage /> },
      { path: 'insights', element: <InsightPage /> },
      { path: 'notices', element: <NoticePage /> },
      { path: 'newsletter', element: <NewsletterPage /> },
      { path: 'login', element: <LoginPage /> },
      { path: 'signup', element: <SignupPage /> },
      { path: 'search', element: <SearchPage /> },
      { path: 'intro', element: <IntroPage /> },
      { path: 'naver-news', element: <NaverNewsPage /> },
      { path: 'facebook', element: <FacebookPage /> },
    ],
  },
])

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
