'use client'

import { motion } from 'framer-motion'

export default function About() {
  const skills = [
    { name: 'React / Next.js', level: 95 },
    { name: 'UI/UX 设计', level: 90 },
    { name: '前端开发', level: 92 },
    { name: '创新思维', level: 88 },
  ]

  return (
    <section id="about" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-1.5 bg-purple-100 text-purple-700 rounded-full text-sm font-semibold mb-4">
            关于我
          </span>
          <h2 className="text-3xl md:text-5xl font-bold text-slate-900">
            追求极致的<span className="gradient-text">数字创作者</span>
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="space-y-6"
          >
            <div className="text-lg text-slate-600 leading-relaxed space-y-4">
              <p>
                我是一名专注于数字产品设计与开发的创作者。相信<span className="font-semibold text-slate-900">简约不等于简单</span>，
                而是将复杂简化到极致的艺术。
              </p>
              <p>
                拥有多年软件开发经验，擅长将<span className="font-semibold text-slate-900">美学与技术结合</span>，创造出既美观又实用的数字产品。
                每个项目都追求极致的用户体验和代码质量。
              </p>
              <p>
                一人公司的理念让我能够<span className="font-semibold text-slate-900">专注于项目本身</span>，为客户提供更加个性化和高质量的服务。
              </p>
            </div>

            <div className="mt-8 space-y-4">
              <h3 className="text-xl font-bold text-slate-900 mb-4">技能专长</h3>
              {skills.map((skill, index) => (
                <motion.div
                  key={skill.name}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-slate-700 font-medium">{skill.name}</span>
                    <span className="text-purple-600 font-semibold">{skill.level}%</span>
                  </div>
                  <div className="h-2 bg-slate-200 rounded-full overflow-hidden">
                    <motion.div
                      initial={{ width: 0 }}
                      whileInView={{ width: `${skill.level}%` }}
                      viewport={{ once: true }}
                      transition={{ duration: 1, delay: index * 0.1 + 0.3 }}
                      className="h-full gradient-bg rounded-full"
                    />
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
            className="relative"
          >
            <div className="relative">
              <div className="aspect-square rounded-3xl overflow-hidden bg-gradient-to-br from-purple-50 to-blue-50">
                <div className="w-full h-full flex items-center justify-center">
                  <div className="relative">
                    <motion.div
                      animate={{ rotate: 360 }}
                      transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                      className="absolute inset-0 -m-16 rounded-full border-2 border-dashed border-purple-200"
                    />
                    <motion.div
                      animate={{ rotate: -360 }}
                      transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
                      className="absolute inset-0 -m-10 rounded-full border-2 border-dashed border-blue-200"
                    />
                    <div className="w-48 h-48 rounded-2xl gradient-bg flex items-center justify-center shadow-2xl">
                      <span className="text-white text-7xl font-bold">Y</span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="absolute -top-6 -right-6 w-32 h-32 bg-gradient-to-br from-pink-400 to-purple-500 rounded-2xl -z-10 opacity-80" />
              <div className="absolute -bottom-6 -left-6 w-24 h-24 bg-gradient-to-br from-blue-400 to-cyan-500 rounded-2xl -z-10 opacity-80" />
            </div>

            <div className="mt-10 grid grid-cols-3 gap-6">
              {[
                { label: '年经验', value: '10+' },
                { label: '完成项目', value: '50+' },
                { label: '客户满意度', value: '100%' },
              ].map((stat, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="text-center p-6 bg-slate-50 rounded-2xl"
                >
                  <div className="text-4xl font-bold gradient-text">{stat.value}</div>
                  <div className="text-sm text-slate-500 mt-2 font-medium">{stat.label}</div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
