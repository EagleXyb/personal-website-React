'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'

export default function InnovationTrainingPage() {
  const trainingLevels = [
    {
      id: 1,
      level: '初级',
      name: '基础联想训练',
      description: '从两个不相关概念中找到创新连接点',
      difficulty: '简单',
      exercises: 20,
      color: 'from-green-400 to-emerald-600'
    },
    {
      id: 2,
      level: '中级',
      name: '约束创新挑战',
      description: '在严格约束条件下寻找突破性解决方案',
      difficulty: '中等',
      exercises: 15,
      color: 'from-blue-400 to-indigo-600'
    },
    {
      id: 3,
      level: '高级',
      name: '跨界融合创新',
      description: '将不同领域的概念融合创造全新价值',
      difficulty: '困难',
      exercises: 10,
      color: 'from-purple-400 to-pink-600'
    },
    {
      id: 4,
      level: '专家',
      name: '颠覆性创新',
      description: '挑战行业基本假设，重新定义问题',
      difficulty: '极难',
      exercises: 8,
      color: 'from-orange-400 to-red-600'
    }
  ]

  const trainingMethods = [
    {
      name: 'SCAMPER 技法',
      icon: '🔄',
      description: '替代、组合、调整、修改、另用、消除、反转',
      color: 'from-blue-500 to-cyan-500'
    },
    {
      name: '六顶思考帽',
      icon: '🎩',
      description: '多角度思考，避免思维盲点',
      color: 'from-purple-500 to-pink-500'
    },
    {
      name: '类比迁移',
      icon: '🔗',
      description: '从其他领域寻找解决方案灵感',
      color: 'from-green-500 to-teal-500'
    },
    {
      name: '逆向思维',
      icon: '↩️',
      description: '从结果反推，打破常规思维',
      color: 'from-orange-500 to-red-500'
    }
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-purple-50 to-blue-50">
      <nav className="sticky top-0 glass-effect shadow-sm z-50">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <Link href="/" className="flex items-center gap-2 text-lg font-semibold text-slate-700 hover:text-slate-900 transition-colors">
              <span className="text-2xl">←</span>
              <span>返回首页</span>
            </Link>
            <h1 className="text-xl font-bold gradient-text">创新能力训练站</h1>
            <div className="w-24"></div>
          </div>
        </div>
      </nav>

      <section className="py-20">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-20"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/60 backdrop-blur-sm rounded-full mb-8 border border-white/50 shadow-sm">
              <span className="relative flex h-3 w-3">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-purple-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-3 w-3 bg-purple-500"></span>
              </span>
              <span className="text-sm font-medium text-slate-600">系统化训练 · 持续提升</span>
            </div>

            <h1 className="text-5xl md:text-7xl font-extrabold text-slate-900 mb-6 leading-tight">
              创新能力<span className="gradient-text">训练站</span>
            </h1>
            <p className="text-xl md:text-2xl text-slate-600 max-w-3xl mx-auto">
              通过系统化的思维训练，提升您的创新能力和解决问题的能力
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-20">
            {trainingMethods.map((method, index) => (
              <motion.div
                key={method.name}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="group bg-white rounded-3xl p-8 shadow-lg hover-lift"
              >
                <div className={`w-20 h-20 rounded-2xl bg-gradient-to-br ${method.color} flex items-center justify-center text-4xl mb-6 shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                  {method.icon}
                </div>
                <h3 className="text-2xl font-bold text-slate-900 mb-3">{method.name}</h3>
                <p className="text-slate-600 leading-relaxed">{method.description}</p>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <div className="text-center mb-12">
              <span className="inline-block px-4 py-1.5 bg-purple-100 text-purple-700 rounded-full text-sm font-semibold mb-4">
                训练课程
              </span>
              <h2 className="text-3xl md:text-5xl font-bold text-slate-900">
                为您量身定制的<span className="gradient-text">训练路径</span>
              </h2>
            </div>

            <div className="space-y-6">
              {trainingLevels.map((level, index) => (
                <motion.div
                  key={level.id}
                  initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.7, delay: 0.5 + index * 0.1 }}
                  className="bg-white rounded-3xl p-8 shadow-md hover-lift flex flex-col md:flex-row items-center justify-between gap-8"
                >
                  <div className="flex-1">
                    <div className="flex items-center gap-4 mb-4 flex-wrap">
                      <span className={`px-5 py-2 bg-gradient-to-r ${level.color} text-white rounded-full font-bold text-sm`}>
                        {level.level}
                      </span>
                      <span className="px-5 py-2 bg-slate-100 text-slate-700 rounded-full font-semibold text-sm">
                        {level.difficulty} · {level.exercises} 个练习
                      </span>
                    </div>
                    <h3 className="text-2xl md:text-3xl font-bold text-slate-900 mb-3">{level.name}</h3>
                    <p className="text-slate-600 text-lg">{level.description}</p>
                  </div>
                  <motion.button
                    whileHover={{ scale: 1.05, y: -2 }}
                    whileTap={{ scale: 0.95 }}
                    className={`px-10 py-5 bg-gradient-to-r ${level.color} text-white rounded-full font-bold text-lg shadow-xl hover:shadow-2xl transition-all whitespace-nowrap`}
                  >
                    开始训练 →
                  </motion.button>
                </motion.div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.9 }}
            className="mt-20 gradient-bg rounded-3xl p-12 md:p-16 text-white text-center relative overflow-hidden"
          >
            <div className="absolute inset-0 overflow-hidden">
              <motion.div
                animate={{ 
                  scale: [1, 1.3, 1],
                  opacity: [0.3, 0.5, 0.3]
                }}
                transition={{ 
                  duration: 6,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
                className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-white/20 rounded-full mix-blend-overlay filter blur-3xl"
              />
            </div>

            <div className="relative z-10">
              <h2 className="text-3xl md:text-5xl font-bold mb-6">准备好开始您的创新之旅了吗？</h2>
              <p className="text-xl md:text-2xl text-purple-100 mb-10 max-w-2xl mx-auto leading-relaxed">
                每天只需要 15 分钟，坚持 30 天，您的创新能力将获得显著提升
              </p>
              <div className="flex flex-col sm:flex-row justify-center gap-4">
                <motion.button
                  whileHover={{ scale: 1.05, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-10 py-5 bg-white text-purple-600 rounded-full font-bold text-xl shadow-xl hover:shadow-2xl transition-all"
                >
                  🚀 立即开始
                </motion.button>
                <Link href="/">
                  <motion.button
                    whileHover={{ scale: 1.05, y: -2 }}
                    whileTap={{ scale: 0.95 }}
                    className="px-10 py-5 bg-white/20 text-white border-2 border-white/30 rounded-full font-bold text-xl hover:bg-white/30 transition-all"
                  >
                    返回首页
                  </motion.button>
                </Link>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}
