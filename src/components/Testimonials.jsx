import React from 'react';
import { motion } from 'framer-motion';
import { MessageSquareQuote } from 'lucide-react';

const Testimonials = () => {
  const voices = [
    "3人とも会社が違ったのですが、オンラインとは思えないくらい、協力し合ってすごく盛り上がりました！",
    "離れていてもすごく近しいようなところを感じるいい時間でした。誰かの得意な分野が活かされたりして、共感性を持てる楽しい時間でした。",
    "趣味やおすすめのご飯屋さんなどの問題もあり、そういうところから『こういう方なんだな』というのが分かって非常に楽しかったです。",
    "LINEという日常的に使うツールなので、どの年代でも参加しやすいと思います。",
    "初対面の方と取り組むのが初めてでしたが、一緒に課題に取り組むことですごく話しやすくなり、自然といろんな会話ができました。"
  ];

  return (
    <section className="py-24 bg-unicorn-light/30">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">過去参加者の声</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-unicorn-pink to-unicorn-blue mx-auto rounded-full mb-6"></div>
          <p className="text-gray-600 text-lg">先行して実施した体験会では、嬉しい声を多数いただいています！</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {voices.map((voice, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              className="bg-white p-8 rounded-3xl shadow-[0_4px_20px_rgb(0,0,0,0.03)] border border-gray-50 relative hover:-translate-y-1 transition-transform duration-300"
            >
              <MessageSquareQuote className="w-12 h-12 text-unicorn-pink/10 absolute top-6 right-6" />
              <p className="text-gray-700 leading-relaxed relative z-10 font-medium text-lg mt-4">
                「{voice}」
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
