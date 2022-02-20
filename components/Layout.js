import Head from 'next/head';
import Header from './Header/Header';
import Footer from './Footer/Footer';

export default function Layout({
  title,
  keywords,
  description,
  bgColor,
  children,
}) {
  return (
    <div>
      <Head>
        <title>{title}</title>
        <meta name="description" content={description} />
        <meta name="keywords" content={keywords} />
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
}

Layout.defaultProps = {
  title: 'Adif | Welcome to my website',
  description:
    "Adif's Profile Page with Projects in web development, embedded systems, etc.",
  keywords: 'projects, electronics, web development, embedded system, profile,',
};
