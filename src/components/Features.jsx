import React from 'react';
import { motion } from 'framer-motion';
import { Settings, MessageCircle, VideoOff } from 'lucide-react';

const Features = () => {
  const features = [
    {
      icon: <Settings className="w-10 h-10 text-unicorn-purple" />,
      title: "社内（内製）で簡単に実施・カスタマイズが可能！",
      description: "外部の講師やファシリテーターに依頼する必要はありません。人事担当者様や先輩社員の皆様ご自身で進行できるよう、詳しい「司会進行マニュアル」「参加者の手引き」、自動で得点集計ができる「スプレッドシート」、そして「進行用スライドデータ（PPTXデータ）」をセットでお渡しします。"
    },
    {
      icon: <MessageCircle className="w-10 h-10 text-unicorn-pink" />,
      title: "ボーナス問題で「自然な自己開示」と「相互理解」が深まる！",
      description: "謎解きには必須問題だけでなく、得点が高い「ボーナス問題」が用意されています。ボーナス問題を解くためには、「おすすめのご飯屋さん」や「趣味」といった参加者同士の情報交換が必要な仕組みになっており、ゲームを進めるうちに自然とお互いの人柄が分かり、初対面でも一気に距離が縮まります。文系・理系など、それぞれの得意分野を活かして協力できる構成になっています。"
    },
    {
      icon: <VideoOff className="w-10 h-10 text-unicorn-blue" />,
      title: "カメラオフでも疎外感なく参加できる！",
      description: "事情によりカメラをオンにできない（音声のみの）参加者がいても大丈夫です。LINEを使って協力しながら回答を導き出すため、全員が一体感を持って取り組むことができます。もちろん、幅広い年代が日常的に使うツールであるLINEを使用するため、操作のハードルも低く安心です。"
    }
  ];

  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">本パッケージの<span className="text-transparent bg-clip-text bg-gradient-to-r from-unicorn-purple to-unicorn-pink">3つの特徴</span></h2>
          <div className="w-24 h-1 bg-gradient-to-r from-unicorn-purple to-unicorn-pink mx-auto rounded-full"></div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ delay: index * 0.2, duration: 0.6 }}
              className="bg-white rounded-3xl p-8 shadow-[0_8px_30px_rgb(0,0,0,0.06)] hover:shadow-[0_20px_40px_rgb(0,0,0,0.12)] transition-all duration-300 border border-gray-50 flex flex-col items-center text-center group"
            >
              <div className="w-24 h-24 rounded-2xl bg-gradient-to-br from-gray-50 to-gray-100 flex items-center justify-center mb-8 group-hover:scale-110 transition-transform duration-500 shadow-sm">
                {feature.icon}
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4 leading-tight">{feature.title}</h3>
              <p className="text-gray-600 leading-relaxed text-left text-sm md:text-base">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
