import React from 'react';
import { motion } from 'framer-motion';
import { Clock, Users, Smartphone, Monitor } from 'lucide-react';

const Solution = () => {
  return (
    <section className="py-24 bg-gradient-to-b from-white to-gray-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">「目指せ100兆円！謎解きユニコーン」とは？</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-unicorn-blue to-unicorn-pink mx-auto rounded-full mb-8"></div>
          <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed font-medium">
            Zoom等の<strong>オンライン会議システム</strong>と、日常的に使い慣れている<strong>「LINE」</strong>、そして<strong>「Googleフォーム」</strong>を組み合わせて実施するオンライン謎解きゲームです。
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-white rounded-[2rem] p-8 md:p-10 shadow-lg border border-gray-100 relative overflow-hidden group"
          >
            <div className="absolute top-0 right-0 w-32 h-32 bg-unicorn-pink/10 rounded-full -mr-16 -mt-16 group-hover:scale-150 transition-transform duration-700"></div>
            <div className="relative z-10">
              <div className="flex items-center mb-6">
                <div className="bg-unicorn-pink/10 p-4 rounded-2xl mr-4 shadow-sm border border-unicorn-pink/20">
                  <Users className="w-8 h-8 text-unicorn-pink" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900">ストーリー</h3>
              </div>
              <p className="text-gray-600 leading-relaxed text-lg">
                参加者は数名のチームに分かれ、時価総額100兆円を超える「ユニコーン企業」を作る創業メンバーの1人となります。仲間と協力しながら様々な課題（謎）を解き明かし、獲得ポイント（報酬）を他チームと競い合います。
              </p>
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="bg-white rounded-[2rem] p-8 md:p-10 shadow-lg border border-gray-100 relative overflow-hidden group"
          >
            <div className="absolute top-0 right-0 w-32 h-32 bg-unicorn-blue/10 rounded-full -mr-16 -mt-16 group-hover:scale-150 transition-transform duration-700"></div>
            <div className="relative z-10">
              <div className="flex items-center mb-6">
                <div className="bg-unicorn-blue/10 p-4 rounded-2xl mr-4 shadow-sm border border-unicorn-blue/20">
                  <Clock className="w-8 h-8 text-unicorn-blue" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900">所要時間</h3>
              </div>
              <p className="text-gray-600 leading-relaxed text-lg">
                謎解きの時間は前半・後半に分かれており、難易度が高めに設定されているため、企業様側で自由に時間の調整が可能です。<br/><br/>
                全体で<strong>1時間〜1時間半程度</strong>のプログラムとして実施いただけます。オンラインだけでなく、対面でのイベントにも応用可能です。
              </p>
            </div>
          </motion.div>
        </div>

        <div className="mt-16 flex justify-center items-center gap-8 opacity-40">
           <Monitor className="w-12 h-12 text-gray-600" />
           <span className="text-2xl font-bold text-gray-400">+</span>
           <Smartphone className="w-12 h-12 text-gray-600" />
        </div>
      </div>
    </section>
  );
};

export default Solution;
