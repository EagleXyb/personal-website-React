'use client'

import { motion } from 'framer-motion'

export default function About() {
  return (
    <section id="about" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              关于我
            </h2>
            <div className="space-y-6 text-lg text-gray-600">
              <p>
                我是一名专注于数字产品设计与开发的创作者。相信简约不等于简单，
                而是将复杂简化到极致的艺术。
              </p>
              <p>
                拥有多年软件开发经验，擅长将美学与技术结合，创造出既美观又实用的数字产品。
                每个项目都追求极致的用户体验和代码质量。
              </p>
              <p>
                一人公司的理念让我能够专注于项目本身，为客户提供更加个性化和高质量的服务。
              </p>
            </div>

            <div className="mt-10 grid grid-cols-3 gap-6">
              {[
                { label: '年经验', value: '10+' },
                { label: '完成项目', value: '50+' },
                { label: '客户满意度', value: '100%' },
              ].map((stat, index) => (
                <div key={index}>
                  <div className="text-3xl font-bold text-gray-900">{stat.value}</div>
                  <div className="text-sm text-gray-500 mt-1">{stat.label}</div>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="aspect-square rounded-2xl overflow-hidden bg-gray-100">
              <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-blue-500 to-purple-600">
                <span className="text-white text-6xl font-bold">Y</span>
              </div>
            </div>
            <div className="absolute -bottom-6 -right-6 w-48 h-48 bg-gradient-to-br from-blue-500 to-purple-600 rounded-2xl -z-10" />
          </motion.div>
        </div>
      </div>
    </section>
  )
}
