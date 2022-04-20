import Head from 'next/head';
import Header from './Header/Header';
import Footer from './Footer/Footer';
import { LayoutProps } from '@/types/types';

const Layout: React.FC<LayoutProps> = ({
  title,
  keywords,
  description,
  bgColor,
  children,
}) => {
  return (
    <div>
      <Head>
        <title>{title}</title>
        <meta name="description" content={description} />
        <meta name="keywords" content={keywords} />
        <link rel="icon" type="image/x-icon" href="/White-TP.svg"></link>
      </Head>
      <div className={`relative ${bgColor}`}>
        <div className="flex flex-col min-h-screen min-w-screen">
          <div className="flex">
            <Header />
          </div>
          <main className="flex-auto flex flex-col">{children}</main>
          <div className="flex">
            <Footer />
          </div>
        </div>
      </div>
    </div>
  );
};

Layout.defaultProps = {
  title: 'Adif | Welcome to my website',
  description:
    "Adif's Profile Page with Projects in web development, embedded systems, etc.",
  keywords: 'projects, electronics, web development, embedded system, profile,',
  bgColor: 'bg-slate-200/70',
};

export default Layout;
