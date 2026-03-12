'use client'

import { motion } from 'framer-motion'

export default function Contact() {
  return (
    <section id="contact" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              让我们共同创造
            </h2>
            <p className="text-xl text-gray-600 mb-8">
              无论您有一个具体的想法还是需要完整的数字解决方案，我都期待与您合作。
              让我们一起将您的愿景变为现实。
            </p>

            <div className="space-y-6">
              {[
                { icon: '📧', title: '邮箱', value: 'contact@example.com' },
                { icon: '📱', title: '微信', value: 'your-wechat-id' },
                { icon: '🐦', title: 'Twitter', value: '@yourhandle' },
                { icon: '💼', title: 'LinkedIn', value: 'linkedin.com/in/yourprofile' },
              ].map((item, index) => (
                <div key={index} className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-gray-100 rounded-full flex items-center justify-center text-2xl">
                    {item.icon}
                  </div>
                  <div>
                    <div className="text-sm text-gray-500 font-medium">{item.title}</div>
                    <div className="text-gray-900 font-semibold">{item.value}</div>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="bg-gray-50 rounded-2xl p-8"
          >
            <form className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                  姓名
                </label>
                <input
                  type="text"
                  id="name"
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all"
                  placeholder="您的姓名"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                  邮箱
                </label>
                <input
                  type="email"
                  id="email"
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all"
                  placeholder="您的邮箱"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                  留言
                </label>
                <textarea
                  id="message"
                  rows={4}
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all"
                  placeholder="想和我聊些什么？"
                />
              </div>

              <button
                type="submit"
                className="w-full px-6 py-4 bg-gray-900 text-white rounded-lg font-semibold text-lg transition-all hover:bg-gray-800 shadow-lg hover:shadow-xl"
              >
                发送消息
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
