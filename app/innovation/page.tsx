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
      exercises: 20
    },
    {
      id: 2,
      level: '中级',
      name: '约束创新挑战',
      description: '在严格约束条件下寻找突破性解决方案',
      difficulty: '中等',
      exercises: 15
    },
    {
      id: 3,
      level: '高级',
      name: '跨界融合创新',
      description: '将不同领域的概念融合创造全新价值',
      difficulty: '困难',
      exercises: 10
    },
    {
      id: 4,
      level: '专家',
      name: '颠覆性创新',
      description: '挑战行业基本假设，重新定义问题',
      difficulty: '极难',
      exercises: 8
    }
  ]

  const trainingMethods = [
    {
      name: 'SCAMPER 技法',
      icon: '🔄',
      description: '替代、组合、调整、修改、另用、消除、反转'
    },
    {
      name: '六顶思考帽',
      icon: '🎩',
      description: '多角度思考，避免思维盲点'
    },
    {
      name: '类比迁移',
      icon: '🔗',
      description: '从其他领域寻找解决方案灵感'
    },
    {
      name: '逆向思维',
      icon: '↩️',
      description: '从结果反推，打破常规思维'
    }
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-purple-50 to-blue-50">
      <nav className="sticky top-0 bg-white/80 backdrop-blur-md shadow-sm z-50">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <Link href="/" className="text-2xl font-bold tracking-tight">
              ← 返回
            </Link>
            <h1 className="text-xl font-bold text-gray-900">创新能力训练站</h1>
            <div className="w-24"></div>
          </div>
        </div>
      </nav>

      <section className="py-20">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h1 className="text-5xl md:text-6xl font-extrabold text-gray-900 mb-6">
              创新能力训练站
            </h1>
            <p className="text-xl md:text-2xl text-gray-600 max-w-3xl mx-auto">
              通过系统化的思维训练，提升您的创新能力和解决问题的能力
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-20">
            {trainingMethods.map((method, index) => (
              <motion.div
                key={method.name}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
              >
                <div className="text-5xl mb-4">{method.icon}</div>
                <h3 className="text-2xl font-bold text-gray-900 mb-3">{method.name}</h3>
                <p className="text-gray-600">{method.description}</p>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-12 text-center">
              训练课程
            </h2>
            <div className="space-y-6">
              {trainingLevels.map((level, index) => (
                <motion.div
                  key={level.id}
                  initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: 0.5 + index * 0.1 }}
                  className="bg-white rounded-2xl p-8 shadow-md hover:shadow-xl transition-all duration-300 flex items-center justify-between flex-wrap gap-6"
                >
                  <div className="flex-1 min-w-[250px]">
                    <div className="flex items-center gap-4 mb-3">
                      <span className="px-4 py-1 bg-gradient-to-r from-purple-500 to-blue-500 text-white rounded-full font-semibold text-sm">
                        {level.level}
                      </span>
                      <span className="px-4 py-1 bg-gray-100 text-gray-700 rounded-full font-medium text-sm">
                        {level.difficulty} · {level.exercises} 个练习
                      </span>
                    </div>
                    <h3 className="text-2xl font-bold text-gray-900 mb-3">{level.name}</h3>
                    <p className="text-gray-600">{level.description}</p>
                  </div>
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="px-8 py-4 bg-gradient-to-r from-purple-600 to-blue-600 text-white rounded-full font-semibold text-lg transition-all hover:from-purple-700 hover:to-blue-700 shadow-lg"
                  >
                    开始训练
                  </motion.button>
                </motion.div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.9 }}
            className="mt-20 bg-gradient-to-r from-purple-600 to-blue-600 rounded-3xl p-12 text-white text-center"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6">准备好开始您的创新之旅了吗？</h2>
            <p className="text-xl text-purple-100 mb-8 max-w-2xl mx-auto">
              每天只需要 15 分钟，坚持 30 天，您的创新能力将获得显著提升
            </p>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-10 py-5 bg-white text-purple-600 rounded-full font-bold text-xl transition-all hover:bg-gray-100 shadow-xl"
            >
              立即开始
            </motion.button>
          </motion.div>
        </div>
      </section>
    </div>
  )
}
