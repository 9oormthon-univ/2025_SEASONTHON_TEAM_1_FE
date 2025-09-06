import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import './index.css'

import RootLayout from '@/layouts/RootLayout'
import HomePage from '@/pages/HomePage'
import AboutPage from '@/pages/AboutPage'
import NewsPage from '@/pages/NewsPage'
import InsightPage from '@/pages/InsightPage'
import NoticePage from '@/pages/NoticePage'
import NewsletterPage from '@/pages/NewsletterPage'
import LoginPage from '@/pages/LoginPage'
import SignupPage from '@/pages/SignupPage'
import SearchPage from '@/pages/SearchPage'
import IntroPage from '@/pages/IntroPage'
import NaverNewsPage from '@/pages/NaverNewsPage'

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
    ],
  },
])

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
