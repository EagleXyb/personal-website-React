'use client'

import { motion } from 'framer-motion'

export default function Contact() {
  return (
    <section id="contact" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-1.5 bg-pink-100 text-pink-700 rounded-full text-sm font-semibold mb-4">
            联系我
          </span>
          <h2 className="text-3xl md:text-5xl font-bold text-slate-900 mb-4">
            让我们<span className="gradient-text">共同创造</span>
          </h2>
          <p className="text-xl text-slate-600 max-w-2xl mx-auto">
            无论您有一个具体的想法还是需要完整的数字解决方案，我都期待与您合作
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="space-y-8">
              {[
                { icon: '📧', title: '邮箱', value: 'contact@example.com', color: 'from-blue-500 to-cyan-500' },
                { icon: '📱', title: '微信', value: 'your-wechat-id', color: 'from-green-500 to-emerald-500' },
                { icon: '🐦', title: 'Twitter', value: '@yourhandle', color: 'from-sky-400 to-blue-600' },
                { icon: '💼', title: 'LinkedIn', value: 'linkedin.com/in/yourprofile', color: 'from-blue-600 to-blue-800' },
              ].map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="group flex items-center gap-4 p-6 bg-slate-50 rounded-2xl hover:bg-white hover:shadow-lg transition-all duration-300"
                >
                  <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${item.color} flex items-center justify-center text-2xl shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                    {item.icon}
                  </div>
                  <div>
                    <div className="text-sm text-slate-500 font-medium">{item.title}</div>
                    <div className="text-slate-900 font-semibold text-lg">{item.value}</div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="bg-gradient-to-br from-purple-50 to-blue-50 rounded-3xl p-8 md:p-10"
          >
            <form className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-slate-700 mb-2">
                  姓名
                </label>
                <input
                  type="text"
                  id="name"
                  className="w-full px-5 py-4 rounded-2xl border-2 border-slate-200 bg-white focus:border-purple-400 focus:ring-4 focus:ring-purple-100 outline-none transition-all"
                  placeholder="您的姓名"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-slate-700 mb-2">
                  邮箱
                </label>
                <input
                  type="email"
                  id="email"
                  className="w-full px-5 py-4 rounded-2xl border-2 border-slate-200 bg-white focus:border-purple-400 focus:ring-4 focus:ring-purple-100 outline-none transition-all"
                  placeholder="您的邮箱"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-slate-700 mb-2">
                  留言
                </label>
                <textarea
                  id="message"
                  rows={4}
                  className="w-full px-5 py-4 rounded-2xl border-2 border-slate-200 bg-white focus:border-purple-400 focus:ring-4 focus:ring-purple-100 outline-none transition-all resize-none"
                  placeholder="想和我聊些什么？"
                />
              </div>

              <motion.button
                whileHover={{ scale: 1.02, y: -2 }}
                whileTap={{ scale: 0.98 }}
                type="submit"
                className="w-full px-8 py-5 gradient-bg text-white rounded-2xl font-bold text-lg shadow-xl hover:shadow-2xl transition-all"
              >
                ✨ 发送消息
              </motion.button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
