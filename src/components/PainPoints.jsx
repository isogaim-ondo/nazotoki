import React from 'react';
import { motion } from 'framer-motion';
import { AlertCircle } from 'lucide-react';

const PainPoints = () => {
  const points = [
    "オンライン研修だと、参加者同士のコミュニケーションが生まれにくい…",
    "初対面のメンバー同士で、どうやって関係性を深めればいいか悩んでいる…",
    "外注すると数十万円かかってしまうため、できれば社内で手軽に実施したい…",
    "内定辞退を防ぐために、同期の繋がりを強くするイベントを企画したい！"
  ];

  return (
    <section className="py-24 bg-white relative">
      <div className="absolute inset-0 bg-gray-50/50 skew-y-3 transform origin-bottom-left -z-10"></div>
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-12">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6 leading-tight">
            内定者フォローや新入社員研修において、<br className="hidden md:block"/>
            こんなお悩みはありませんか？
          </h2>
        </div>
        
        <div className="bg-red-50/50 rounded-3xl p-8 md:p-12 border border-red-100 shadow-sm relative overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-64 bg-red-100 rounded-full blur-3xl opacity-50 -mr-20 -mt-20"></div>
          
          <div className="space-y-4 relative z-10">
            {points.map((point, index) => (
              <motion.div 
                key={index}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                className="flex items-start bg-white p-5 rounded-2xl shadow-sm border border-red-50 hover:shadow-md transition-shadow"
              >
                <AlertCircle className="w-6 h-6 text-red-400 shrink-0 mr-4 mt-0.5" />
                <p className="text-gray-700 font-medium text-lg leading-relaxed">{point}</p>
              </motion.div>
            ))}
          </div>
          
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.5, duration: 0.6 }}
            className="mt-16 text-center relative z-10"
          >
            <p className="text-xl md:text-2xl font-bold text-gray-900 mb-4">
              そんな人事担当者様のお悩みを解決するのが、<br className="hidden md:block" />
              オンライン謎解きチームビルディング研修
            </p>
            <p className="text-3xl md:text-5xl font-extrabold mt-4 text-transparent bg-clip-text bg-gradient-to-r from-unicorn-purple to-unicorn-blue drop-shadow-sm py-2">
              「目指せ100兆円！謎解きユニコーン」です！
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default PainPoints;
