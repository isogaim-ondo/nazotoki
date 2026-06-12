import React from 'react';
import { motion } from 'framer-motion';
import { Check } from 'lucide-react';

const Pricing = () => {
  return (
    <section className="py-24 bg-gray-50 relative overflow-hidden">
      {/* Decorative background */}
      <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-b from-unicorn-light/50 to-transparent skew-x-12 transform origin-top-right"></div>
      
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">料金プラン・ご利用条件</h2>
          <p className="text-gray-600 max-w-2xl mx-auto text-lg">高額な費用をかけずに手軽に導入いただける価格設定となっております。</p>
          <div className="w-24 h-1 bg-gradient-to-r from-unicorn-blue to-unicorn-purple mx-auto rounded-full mt-6"></div>
        </div>

        <motion.div 
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="bg-white rounded-[2rem] shadow-2xl overflow-hidden border border-gray-100"
        >
          <div className="grid grid-cols-1 lg:grid-cols-5">
            {/* Basic Plan */}
            <div className="p-8 md:p-12 lg:col-span-3 relative bg-white">
              <div className="absolute top-0 right-0 bg-gradient-to-r from-unicorn-purple to-unicorn-pink text-white px-6 py-2 rounded-bl-2xl font-bold text-sm shadow-md">
                おすすめ
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-2">基本パッケージ</h3>
              <p className="text-gray-500 mb-8">充実のセット内容で、すぐに実施可能です。</p>
              
              <div className="flex items-baseline mb-2">
                <span className="text-5xl md:text-6xl font-extrabold text-gray-900 tracking-tight">50,000</span>
                <span className="text-2xl text-gray-500 font-medium ml-2">円</span>
              </div>
              <span className="text-sm text-gray-400 block mb-6 font-medium">（税抜・初回 / 5日間）</span>
              
              <div className="bg-unicorn-light/50 rounded-xl p-4 mb-8">
                <p className="text-sm text-unicorn-purple font-semibold">※2回目以降は 30,000円（税抜）でご利用いただけます。</p>
              </div>
              
              <div className="space-y-4">
                <p className="font-bold text-gray-900 mb-2">パッケージ内容：</p>
                {['指定期間内のシステム(LINE bot)使用権', '司会進行マニュアル', '参加者の手引き', '自動集計スプレッドシート', 'カスタマイズ可能なスライドデータ(PPTX)'].map((item, i) => (
                  <div key={i} className="flex items-start">
                    <div className="bg-green-100 rounded-full p-1 mr-3 mt-0.5 shrink-0">
                      <Check className="w-4 h-4 text-green-600" />
                    </div>
                    <span className="text-gray-700 font-medium">{item}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Options */}
            <div className="p-8 md:p-12 lg:col-span-2 bg-gray-50 flex flex-col justify-center border-t lg:border-t-0 lg:border-l border-gray-100">
              <h3 className="text-xl font-bold text-gray-900 mb-8 flex items-center">
                追加オプション
                <span className="ml-2 text-xs bg-gray-200 text-gray-600 px-2 py-1 rounded-full">任意</span>
              </h3>
              
              <div className="space-y-6">
                <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 hover:border-unicorn-blue/30 transition-colors group">
                  <div className="flex justify-between items-start mb-2">
                    <h4 className="font-bold text-gray-900">日割り追加</h4>
                    <div className="text-right">
                      <span className="text-2xl font-bold text-unicorn-blue">5,000</span>
                      <span className="text-gray-500 text-sm">円</span>
                    </div>
                  </div>
                  <p className="text-sm text-gray-500">1日ごとに追加延長</p>
                </div>

                <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 hover:border-unicorn-purple/30 transition-colors group">
                  <div className="flex justify-between items-start mb-2">
                    <h4 className="font-bold text-gray-900">1週間パック</h4>
                    <div className="text-right">
                      <span className="text-2xl font-bold text-unicorn-purple">25,000</span>
                      <span className="text-gray-500 text-sm">円</span>
                    </div>
                  </div>
                  <p className="text-sm text-gray-500">7日間（1週間）まとめて追加</p>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Pricing;
