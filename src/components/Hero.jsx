import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

const Hero = () => {
  return (
    <section className="relative w-full min-h-[90vh] flex items-center justify-center overflow-hidden bg-gradient-to-br from-unicorn-light via-white to-[#f0f9ff]">
      {/* Floating Background Shapes */}
      <div className="absolute top-20 left-[10%] w-64 h-64 bg-unicorn-pink rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-float" style={{ animationDelay: '0s' }}></div>
      <div className="absolute top-40 right-[15%] w-72 h-72 bg-unicorn-purple rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-float" style={{ animationDelay: '2s' }}></div>
      <div className="absolute -bottom-20 left-1/3 w-80 h-80 bg-unicorn-blue rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-float" style={{ animationDelay: '4s' }}></div>
      
      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center pt-24 pb-16">
        <div className="flex flex-col items-center justify-center gap-12">
          
          {/* Image Block (Top) */}
          <motion.div
            className="w-full"
            initial={{ opacity: 0, y: -30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="relative rounded-[2rem] overflow-hidden shadow-2xl border-4 border-white bg-white w-full max-w-4xl mx-auto transform hover:scale-[1.02] transition-transform duration-500">
              <div className="absolute inset-0 bg-gradient-to-tr from-unicorn-purple/10 to-transparent z-10 pointer-events-none"></div>
              <img 
                src="/@fs/C:/Users/maaku/.gemini/antigravity/brain/7ab980e7-7d14-4b2b-a1a1-a167494ec88b/chat_media/1dfd1cb3-fbc5-40b4-af24-7f5163b49e6f/image.png" 
                alt="謎解きユニコーン パッケージイメージ" 
                className="w-full h-auto object-cover block"
              />
            </div>
          </motion.div>

          {/* Text Block (Bottom) */}
          <motion.div
            className="w-full"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <span className="inline-block py-1 px-4 rounded-full bg-unicorn-purple/10 text-unicorn-purple text-sm md:text-base font-bold tracking-wider mb-6 border border-unicorn-purple/20">
              内製化できるチームビルディング
            </span>
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-extrabold text-gray-900 tracking-tight mb-8 leading-tight">
              目指せ100兆円！<br className="hidden md:block" />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-unicorn-purple via-unicorn-pink to-unicorn-blue">
                謎解きユニコーン
              </span>
            </h1>
            <p className="mt-4 text-lg md:text-2xl text-gray-600 mx-auto max-w-2xl mb-10 font-medium leading-relaxed">
              【内定者・新入社員向け】オンラインで大盛り上がり！<br />
              100兆円のユニコーン企業創出を目指す、<br className="hidden sm:block"/>ワクワク感満載の謎解きゲーム。
            </p>
            <div className="flex flex-col sm:flex-row justify-center items-center gap-4">
              <a href="https://ondo.company/contact/" target="_blank" rel="noopener noreferrer" className="group relative px-8 py-4 bg-gradient-to-r from-unicorn-purple to-unicorn-blue text-white text-lg font-bold rounded-full shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 flex items-center gap-2">
                まずは無料相談・空き状況の確認
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </a>
            </div>
          </motion.div>
          
        </div>
      </div>
    </section>
  );
};

export default Hero;
