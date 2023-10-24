// 'use client';

import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
// import NextNProgress from 'nextjs-progressbar';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Portfolio',
  description: 'Welcome to my Portfolio',
  icons: {
    icon: [{ url: '/logo.svg', type: 'image/svg', sizes: '32x32' }],
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang='en'>
      <body className={inter.className}>
        {/*<NextNProgress />*/}
        {children}
        <ToastContainer
          position='bottom-right'
          hideProgressBar={false}
          closeOnClick
          rtl={false}
          theme='light'
        />
      </body>
    </html>
  );
}
