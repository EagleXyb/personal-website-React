'use client'

import { motion } from 'framer-motion'

export default function Footer() {
  const socialLinks = [
    { name: 'GitHub', icon: '🐙' },
    { name: 'Twitter', icon: '🐦' },
    { name: 'LinkedIn', icon: '💼' },
    { name: 'Email', icon: '📧' },
  ]

  return (
    <footer className="bg-slate-900 text-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-2"
          >
            <h3 className="text-3xl font-bold gradient-text mb-4">Portfolio</h3>
            <p className="text-slate-400 text-lg mb-6 max-w-md">
              用简约设计与高质量开发，构建美好的数字世界。一人公司，专注品质。
            </p>
            <div className="flex gap-4">
              {socialLinks.map((social, index) => (
                <motion.a
                  key={social.name}
                  href="#"
                  whileHover={{ scale: 1.1, y: -3 }}
                  whileTap={{ scale: 0.95 }}
                  transition={{ duration: 0.2, delay: index * 0.05 }}
                  className="w-12 h-12 bg-slate-800 rounded-xl flex items-center justify-center text-2xl hover:bg-slate-700 transition-colors"
                >
                  {social.icon}
                </motion.a>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <h4 className="text-lg font-semibold mb-4">快速链接</h4>
            <ul className="space-y-3">
              {['首页', '关于', '作品集', '联系'].map((link) => (
                <li key={link}>
                  <a
                    href={`#${link === '首页' ? '' : link.toLowerCase()}`}
                    className="text-slate-400 hover:text-white transition-colors"
                  >
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h4 className="text-lg font-semibold mb-4">服务</h4>
            <ul className="space-y-3">
              {['网站设计', '前端开发', 'UI/UX 设计', '创新训练'].map((service) => (
                <li key={service}>
                  <span className="text-slate-400">
                    {service}
                  </span>
                </li>
              ))}
            </ul>
          </motion.div>
        </div>
        
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-12 pt-8 border-t border-slate-800 flex flex-col md:flex-row justify-between items-center gap-4"
        >
          <p className="text-slate-500 text-sm">
            © {new Date().getFullYear()} Portfolio. All rights reserved.
          </p>
          <p className="text-slate-500 text-sm">
            用 ❤️ 精心打造
          </p>
        </motion.div>
      </div>
    </footer>
  )
}
