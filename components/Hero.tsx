'use client'

import { motion } from 'framer-motion'

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      <div className="absolute inset-0 bg-gradient-to-br from-gray-50 to-gray-100" />
      
      <div className="relative max-w-7xl mx-auto px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight text-gray-900 mb-6">
            <span className="block">创造数字</span>
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">
              卓越体验
            </span>
          </h1>
          
          <p className="mt-4 max-w-2xl mx-auto text-xl text-gray-500">
            一人公司 | 专注简约设计与高质量开发
            <br className="hidden md:block" />
            用代码构建美好的数字世界
          </p>
          
          <div className="mt-10 flex justify-center gap-4">
            <motion.a
              href="#projects"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-4 bg-gray-900 text-white rounded-full font-semibold text-lg transition-all hover:bg-gray-800 shadow-lg hover:shadow-xl"
            >
              查看作品
            </motion.a>
            <motion.a
              href="#contact"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-4 bg-white text-gray-900 border border-gray-200 rounded-full font-semibold text-lg transition-all hover:bg-gray-50 shadow-sm hover:shadow-md"
            >
              联系我
            </motion.a>
          </div>
        </motion.div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-white to-transparent" />
    </section>
  )
}
