import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Mail } from 'lucide-react';

const FooterCTA = () => {
  return (
    <section id="contact" className="py-32 relative overflow-hidden bg-gray-900">
      {/* Background decorations */}
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAiIGhlaWdodD0iMjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGNpcmNsZSBjeD0iMiIgY3k9IjIiIHI9IjIiIGZpbGw9IiNmZmYiIGZpbGwtb3BhY2l0eT0iMC4wNSIvPjwvc3ZnPg==')] opacity-30"></div>
      <div className="absolute -top-40 -right-40 w-96 h-96 bg-unicorn-purple rounded-full mix-blend-screen filter blur-[100px] opacity-40 animate-pulse"></div>
      <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-unicorn-blue rounded-full mix-blend-screen filter blur-[100px] opacity-40 animate-pulse" style={{ animationDelay: '2s' }}></div>

      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-8 leading-tight max-w-4xl mx-auto">
            内定者フォローや新入社員研修、社内コミュニケーション活性化の企画でお悩みの方は、ぜひご相談ください！
          </h2>
          <p className="text-xl text-gray-300 mb-12 max-w-2xl mx-auto leading-relaxed">
            空き状況の確認や、詳しい運用方法についてのご質問も受け付けております。お気軽にお問い合わせください。
          </p>
          
          <a href="https://ondo.company/contact/" target="_blank" rel="noopener noreferrer" className="group relative px-8 py-5 md:px-12 md:py-6 bg-gradient-to-r from-unicorn-pink via-unicorn-purple to-unicorn-blue text-white text-xl font-bold rounded-full shadow-[0_0_40px_rgba(168,85,247,0.4)] hover:shadow-[0_0_60px_rgba(168,85,247,0.6)] transition-all duration-300 transform hover:-translate-y-1 inline-flex items-center justify-center mx-auto gap-3">
            <Mail className="w-6 h-6" />
            お問い合わせ・無料相談はこちら
            <ArrowRight className="w-6 h-6 group-hover:translate-x-2 transition-transform" />
          </a>
        </motion.div>
      </div>
      
      <div className="absolute bottom-4 left-0 w-full text-center z-10">
        <p className="text-gray-500 text-sm">© {new Date().getFullYear()} Unicorn Team Building. All rights reserved.</p>
      </div>
    </section>
  );
};

export default FooterCTA;
