export interface SiteConfig {
  // Basic Info
  name: string;
  title: string;
  description: string;
  favicon: string;
  
  // Token Info
  tokenContract: string;
  tokenSymbol: string;
  tokenSupply: string;
  tokenTax: string;

  // Images
  bannerImage: string;
  logoImage: string;
  aiImage: string;

  // Links
  raydiumLink: string;
  cmcLink: string;
  telegramLink: string;
  twitterLink: string;
  websiteLink: string;
  chatbotLink: string;
  buyTokenLink: string;

  // Social
  designedBy: {
    name: string;
    link: string;
  };

  // Content
  welcomeMessage: string;
  aiDescription: string;

  // Philosophy Content
  philosophy: {
    title: string;
    description: string[];
    sections: {
      title: string;
      content: string;
    }[];
  };
}

const siteConfig: SiteConfig = {
  name: "LC SHIB",
  title: "LC SHIB - AI Powered Meme Token",
  description: "Meet LC SHIB: the unstoppable AI APP fueled by LC SHIB TOKEN. Born to break rules, deliver savage comebacks, and pack your chat with rebellious humor.",
  favicon: "https://i.ibb.co/xtjGqcDx/Full-Body-LCWeb.png",

  tokenContract: "43YakhC3TcSuTgSXnxFgw8uKL8VkuLuFa4M6Bninpump",
  tokenSymbol: "LC",
  tokenSupply: "1B",
  tokenTax: "0%",

  bannerImage: "https://i.ibb.co/ccRkyHjS/Banner05-LC.png",
  logoImage: "https://i.ibb.co/xtjGqcDx/Full-Body-LCWeb.png",
  aiImage: "https://i.ibb.co/rNCpWCg/256pxLC.png",

  raydiumLink: "https://raydium.io/swap/?inputMint=sol&outputMint=43YakhC3TcSuTgSXnxFgw8uKL8VkuLuFa4M6Bninpump",
  cmcLink: "https://coinmarketcap.com/es/currencies/lc-shib/",
  telegramLink: "https://t.me/LCSHIBCTOPORTAL",
  twitterLink: "https://x.com/LCSHIB",
  websiteLink: "https://www.lcshib.com/",
  chatbotLink: "https://www.chatbase.co/chatbot-iframe/8Be4uBiTXxDuu3yvyloVf",
  buyTokenLink: "https://www.moonpay.com/",

  designedBy: {
    name: "Secret Token",
    link: "https://x.com/the_xxxx_token"
  },

  welcomeMessage: "You are now one of us! Welcome to our community!",
  aiDescription: "Interact with our AI assistant",

  philosophy: {
    title: "Our CTO",
    description: [
      "At LC SHIB TOKEN, we believe that a great community is more than just a token – it's about creating meaningful, intuitive experiences that resonate in the crypto sphere. Our ideology is based on collaboration and innovation.",
      "We work closely as a community to understand our unique vision and goals, transforming a meme that leaves a lasting impression.",
      "At the core of our philosophy is a simple belief: everything is for the community."
    ],
    sections: [
      {
        title: "BASED COMMUNITY",
        content: "Frens from LC and the ShibArmy are joining us on this adventure in Solana. And you already know the story of these friends..."
      },
      {
        title: "BASED DEV",
        content: "LC is one of the founders of ShibArmy, followed, loved and respected by millions of people. A recognized dev."
      },
      {
        title: "BASED TOKEN",
        content: "$LC has no traps and no bad vibes. No buy or sell taxes, dev supply is locked in and we're off to the moon."
      }
    ]
  }
};

export default siteConfig;