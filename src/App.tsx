import React, { useState, useEffect } from 'react';
import siteConfig from './config/site';

function Header() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 glassmorphism bg-opacity-90">
      <div className="max-w-7xl mx-auto px-4 py-2 flex items-center justify-between">
        <div className="flex items-center space-x-2">
          <img src={siteConfig.logoImage} alt={siteConfig.name} className="w-10 h-10" />
          <span className="gradient-text font-bold text-xl">{siteConfig.name}</span>
        </div>
        <div className="flex items-center space-x-4">
          <a href={siteConfig.websiteLink} 
             className="glassmorphism p-2 rounded-full hover:opacity-80 transition-opacity">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
            </svg>
          </a>
          <a href={siteConfig.telegramLink} 
             className="glassmorphism p-2 rounded-full hover:opacity-80 transition-opacity">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-white" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm5.894 8.221l-1.97 9.28c-.145.658-.537.818-1.084.508l-3-2.21-1.446 1.394c-.14.18-.357.223-.548.223l.188-2.623 4.823-4.351c.192-.18-.043-.277-.297-.097l-5.965 3.759-2.564-.801c-.657-.206-.671-.657.137-.977l10.063-3.882c.54-.206 1.006.126.814 1.276z"/>
            </svg>
          </a>
        </div>
      </div>
    </header>
  );
}

function Footer() {
  return (
    <footer className="glassmorphism mt-8 py-6 px-4">
      <div className="max-w-7xl mx-auto text-center">
        <p className="text-sm text-gray-400">
          © {new Date().getFullYear()} {siteConfig.name}. Designed By{' '}
          <a href={siteConfig.designedBy.link} 
             className="gradient-text hover:opacity-80 transition-opacity">
            {siteConfig.designedBy.name}
          </a>
          {' '}| By {siteConfig.designedBy.name}
        </p>
      </div>
    </footer>
  );
}

function LoadingScreen() {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress(prev => {
        if (prev >= 100) {
          clearInterval(interval);
          return 100;
        }
        return prev + 2;
      });
    }, 40);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="min-h-screen loading-container flex flex-col items-center justify-center p-8">
      <div className="animated-background" />
      <img src={siteConfig.logoImage} className="w-32 h-32 floating glowing" alt={siteConfig.name} />
      <h1 className="text-3xl font-bold gradient-text mt-4">{siteConfig.name}</h1>
      <div className="w-3/4 h-2 mt-8 rounded-full glassmorphism">
        <div 
          className="h-full rounded-full bg-gradient-to-r from-cyan-400 to-purple-500"
          style={{ width: `${progress}%`, transition: 'width 0.4s ease-out' }}
        />
      </div>
      <p className="text-white mt-4">Loading...</p>
    </div>
  );
}

function MainContent() {
  return (
    <main className="relative z-10 pt-20">
      <div className="max-w-md mx-auto p-4">
        {/* Hero Section */}
        <div className="relative">
          <div className="w-full h-48 overflow-hidden rounded-lg">
            <img 
              src={siteConfig.bannerImage} 
              className="w-full h-full object-cover banner-parallax absolute top-0 left-0" 
              alt="Banner"
            />
          </div>
          <div className="absolute left-1/2 transform -translate-x-1/2 bottom-0 translate-y-1/2">
            <img 
              src={siteConfig.logoImage} 
              className="w-40 h-40 floating"
              alt={siteConfig.name} 
            />
          </div>
        </div>
        <div className="mt-24">
          <h1 className="text-3xl font-bold gradient-text text-center">{siteConfig.name}</h1>
          <p className="text-white text-center mt-4 px-4">{siteConfig.description}</p>
        </div>

        {/* Trading Buttons */}
        <div className="flex flex-col gap-4 mt-6">
          <a href={siteConfig.raydiumLink} 
             className="flex items-center justify-between px-6 py-4 rounded-full bg-gradient-to-r from-cyan-400 to-purple-500 hover:opacity-90 transition-opacity">
            <span className="text-lg font-bold text-white">Trade on Raydium</span>
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </a>
          <a href={siteConfig.cmcLink} 
             className="flex items-center justify-between px-6 py-4 rounded-full glassmorphism hover:bg-opacity-80 transition-opacity">
            <span className="text-lg font-bold text-white">View on CMC</span>
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
            </svg>
          </a>
        </div>

        {/* Token Info with DEXTools */}
        <div className="mt-6">
          {/* Tokenomics */}
          <div className="glassmorphism p-6">
            <h2 className="text-2xl font-bold gradient-text mb-4">Tokenomics</h2>
            <div className="space-y-3">
              <div className="flex items-center">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-cyan-400 mr-2" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <p className="font-bold text-white">{siteConfig.tokenSupply} Supply</p>
              </div>
              <div className="flex items-center">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-cyan-400 mr-2" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <p className="font-bold text-white">Liquidity Locked</p>
              </div>
              <div className="flex items-center">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-cyan-400 mr-2" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <p className="font-bold text-white">Contract Locked</p>
              </div>
              <div className="flex items-center">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-cyan-400 mr-2" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <p className="font-bold text-white">{siteConfig.tokenTax} Buy/Sell taxes</p>
              </div>
            </div>
          </div>

          {/* DEXTools Chart */}
          <div className="mt-4 glassmorphism p-4">
            <div className="relative w-full" style={{ paddingTop: '75%' }}>
              <iframe
                src="https://www.dextools.io/widget-chart/es/solana/pe-light/CaysL4cjU1BuB9ECvhQ4yNQBVt7eug3GcZjndcJdf5JU?theme=dark&chartType=2&chartResolution=30&drawingToolbars=false"
                className="absolute top-0 left-0 w-full h-full rounded-lg"
                title="DEXTools Trading Chart"
                allowFullScreen
              />
            </div>
          </div>

          {/* DEXTools Swap Widget */}
          <div className="mt-4 glassmorphism p-4">
            <div className="relative w-full" style={{ paddingTop: '105%' }}>
              <iframe
                src="https://www.dextools.io/widget-aggregator/es/swap/solana/43YakhC3TcSuTgSXnxFgw8uKL8VkuLuFa4M6Bninpump"
                className="absolute top-0 left-0 w-full h-full rounded-lg"
                title="DEXTswap Aggregator"
                allowFullScreen
              />
            </div>
          </div>
        </div>

        {/* How to Buy Section */}
        <h2 className="text-2xl font-bold gradient-text mt-8 mb-4">How to Buy ${siteConfig.tokenSymbol} in 3 Simple Steps</h2>
        
        <div className="text-white text-center mb-4">
          <p className="font-bold">${siteConfig.tokenSymbol} CONTRACT</p>
          <p className="text-sm">{siteConfig.tokenContract}</p>
        </div>

        <div className="overflow-x-auto pb-4">
          <div className="flex space-x-4" style={{ minWidth: 'min-content' }}>
            {/* Step 1 */}
            <div className="glassmorphism p-6 w-80 flex-shrink-0">
              <h3 className="text-xl font-bold gradient-text">STEP 1</h3>
              <p className="text-white mt-2">Get a Wallet: Download Phantom Wallet (or compatible Solana wallet).</p>
              <a href="https://phantom.app/" 
                 className="inline-block mt-4 px-6 py-2 rounded-full bg-gradient-to-r from-cyan-400 to-purple-500 text-white font-bold hover:opacity-90 transition-opacity">
                Phantom
              </a>
            </div>

            {/* Step 2 */}
            <div className="glassmorphism p-6 w-80 flex-shrink-0">
              <h3 className="text-xl font-bold gradient-text">STEP 2</h3>
              <p className="text-white mt-2">Add Solana: Transfer SOL to your wallet to buy ${siteConfig.tokenSymbol} and cover gas fees.</p>
              <a href={siteConfig.buyTokenLink}
                 className="inline-block mt-4 px-6 py-2 rounded-full bg-gradient-to-r from-cyan-400 to-purple-500 text-white font-bold hover:opacity-90 transition-opacity">
                Buy Solana
              </a>
            </div>

            {/* Step 3 */}
            <div className="glassmorphism p-6 w-80 flex-shrink-0">
              <h3 className="text-xl font-bold gradient-text">STEP 3</h3>
              <p className="text-white mt-2">Buy ${siteConfig.tokenSymbol}: Use a Solana-based exchange like Raydium to swap SOL for ${siteConfig.tokenSymbol}.</p>
              <a href={siteConfig.raydiumLink}
                 className="inline-block mt-4 px-6 py-2 rounded-full bg-gradient-to-r from-cyan-400 to-purple-500 text-white font-bold hover:opacity-90 transition-opacity">
                Buy ${siteConfig.tokenSymbol}
              </a>
            </div>
          </div>
        </div>

        {/* Philosophy Section */}
        <div className="mt-8">
          <div className="glassmorphism p-6">
            <h2 className="text-xl font-bold gradient-text mb-4">{siteConfig.philosophy.title}</h2>
            
            {/* Philosophy */}
            <div className="mb-6">
              <h3 className="text-lg font-bold text-white mb-2">Philosophy</h3>
              {siteConfig.philosophy.description.map((paragraph, index) => (
                <p key={index} className="text-sm text-gray-400 mt-2">{paragraph}</p>
              ))}
            </div>

            {/* Philosophy Sections */}
            {siteConfig.philosophy.sections.map((section, index) => (
              <div key={index} className="mb-6">
                <h3 className="text-lg font-bold text-white mb-2">{section.title}</h3>
                <p className="text-sm text-gray-400">{section.content}</p>
              </div>
            ))}
          </div>
        </div>

        {/* DEXTools Chart */}
        <div className="mt-6 glassmorphism p-4">
          <div className="relative w-full" style={{ paddingTop: '75%' }}>
            <iframe
              src="https://www.dextools.io/widget-chart/es/solana/pe-light/CaysL4cjU1BuB9ECvhQ4yNQBVt7eug3GcZjndcJdf5JU?theme=dark&chartType=2&chartResolution=30&drawingToolbars=false"
              className="absolute top-0 left-0 w-full h-full rounded-lg"
              title="DEXTools Trading Chart"
              allowFullScreen
            />
          </div>
        </div>

        {/* DEXTools Swap Widget */}
        <div className="mt-6 glassmorphism p-4">
          <div className="relative w-full" style={{ paddingTop: '105%' }}>
            <iframe
              src="https://www.dextools.io/widget-aggregator/es/swap/solana/43YakhC3TcSuTgSXnxFgw8uKL8VkuLuFa4M6Bninpump"
              className="absolute top-0 left-0 w-full h-full rounded-lg"
              title="DEXTswap Aggregator"
              allowFullScreen
            />
          </div>
        </div>

        {/* Social Links */}
        <div className="grid grid-cols-4 gap-4 mt-6">
          <a href={siteConfig.twitterLink} className="glassmorphism p-4 text-center text-white hover:opacity-80 transition-opacity">𝕏</a>
          <a href={siteConfig.telegramLink} className="glassmorphism p-4 text-center text-white hover:opacity-80 transition-opacity">TG</a>
          <a href={siteConfig.websiteLink} className="glassmorphism p-4 text-center text-white hover:opacity-80 transition-opacity">Web</a>
          <a href={siteConfig.cmcLink} className="glassmorphism p-4 text-center text-white hover:opacity-80 transition-opacity">CMC</a>
        </div>
      </div>
    </main>
  );
}

export default function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="min-h-screen bg-black">
      {loading ? (
        <LoadingScreen />
      ) : (
        <>
          <div className="animated-background" />
          <Header />
          <MainContent />
          <Footer />
        </>
      )}
    </div>
  );
}