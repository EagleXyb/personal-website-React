'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { useState } from 'react'

const assessmentQuestions = [
  {
    id: 1,
    question: '当遇到复杂问题时，我通常会：',
    options: [
      { text: '直接尝试解决，边做边想', score: 1 },
      { text: '先分解问题，再逐步解决', score: 3 },
      { text: '寻找类似问题的解决方案', score: 2 },
      { text: '先思考问题本质，再制定策略', score: 4 }
    ]
  },
  {
    id: 2,
    question: '我认为创新最重要的是：',
    options: [
      { text: '打破常规思维', score: 4 },
      { text: '结合现有资源', score: 2 },
      { text: '满足用户需求', score: 3 },
      { text: '追求技术突破', score: 1 }
    ]
  },
  {
    id: 3,
    question: '当团队对方案有分歧时，我会：',
    options: [
      { text: '坚持自己的观点', score: 1 },
      { text: '倾听他人意见，寻找共同点', score: 4 },
      { text: '寻求上级决策', score: 2 },
      { text: '提出折衷方案', score: 3 }
    ]
  },
  {
    id: 4,
    question: '我更倾向于：',
    options: [
      { text: '执行已有的成熟方案', score: 1 },
      { text: '优化现有流程', score: 2 },
      { text: '尝试新的方法', score: 3 },
      { text: '探索未知领域', score: 4 }
    ]
  },
  {
    id: 5,
    question: '面对失败，我通常会：',
    options: [
      { text: '归咎于外部因素', score: 1 },
      { text: '总结经验教训', score: 4 },
      { text: '尝试不同方法', score: 3 },
      { text: '暂时放弃', score: 2 }
    ]
  },
  {
    id: 6,
    question: '我认为创意的来源主要是：',
    options: [
      { text: '灵感闪现', score: 1 },
      { text: '持续积累和思考', score: 4 },
      { text: '用户反馈', score: 3 },
      { text: '市场分析', score: 2 }
    ]
  },
  {
    id: 7,
    question: '当需要快速做出决策时，我会：',
    options: [
      { text: '凭直觉判断', score: 1 },
      { text: '基于数据和事实', score: 4 },
      { text: '参考他人建议', score: 2 },
      { text: '权衡利弊后决定', score: 3 }
    ]
  },
  {
    id: 8,
    question: '我更擅长：',
    options: [
      { text: '提出新想法', score: 3 },
      { text: '完善和实施想法', score: 4 },
      { text: '评估想法可行性', score: 2 },
      { text: '协调团队执行', score: 1 }
    ]
  },
  {
    id: 9,
    question: '我认为创新过程中最关键的是：',
    options: [
      { text: '创意产生', score: 2 },
      { text: '资源整合', score: 3 },
      { text: '执行能力', score: 4 },
      { text: '市场机会', score: 1 }
    ]
  },
  {
    id: 10,
    question: '当面对不确定性时，我会：',
    options: [
      { text: '感到焦虑，避免风险', score: 1 },
      { text: '谨慎评估，逐步推进', score: 3 },
      { text: '拥抱变化，积极探索', score: 4 },
      { text: '等待明确信息', score: 2 }
    ]
  }
]

export default function AssessmentPage() {
  const [currentQuestion, setCurrentQuestion] = useState(0)
  const [answers, setAnswers] = useState<number[]>([])
  const [isCompleted, setIsCompleted] = useState(false)

  const handleAnswer = (score: number) => {
    const newAnswers = [...answers, score]
    setAnswers(newAnswers)
    
    if (currentQuestion < assessmentQuestions.length - 1) {
      setCurrentQuestion(currentQuestion + 1)
    } else {
      setIsCompleted(true)
    }
  }

  const calculateScore = () => {
    const total = answers.reduce((sum, score) => sum + score, 0)
    return total
  }

  const getLevel = (score: number) => {
    if (score >= 35) return '高级'
    if (score >= 25) return '中级'
    if (score >= 15) return '初级'
    return '入门'
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-purple-50 to-blue-50">
      <nav className="sticky top-0 glass-effect shadow-sm z-50">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <Link href="/innovation" className="flex items-center gap-2 text-lg font-semibold text-slate-700 hover:text-slate-900 transition-colors">
              <span className="text-2xl">←</span>
              <span>返回训练站</span>
            </Link>
            <h1 className="text-xl font-bold gradient-text">创新能力测评</h1>
            <div className="w-24"></div>
          </div>
        </div>
      </nav>

      <section className="py-12">
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          {!isCompleted ? (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="bg-white rounded-3xl p-8 shadow-lg"
            >
              <div className="mb-8">
                <div className="flex items-center justify-between mb-4">
                  <div className="text-sm text-slate-500">
                    问题 {currentQuestion + 1} / {assessmentQuestions.length}
                  </div>
                  <div className="w-full max-w-xs bg-slate-200 rounded-full h-2.5">
                    <div 
                      className="bg-gradient-to-r from-blue-500 to-indigo-600 h-2.5 rounded-full"
                      style={{ width: `${((currentQuestion + 1) / assessmentQuestions.length) * 100}%` }}
                    ></div>
                  </div>
                </div>
                <h2 className="text-2xl md:text-3xl font-bold text-slate-900 mb-6">
                  {assessmentQuestions[currentQuestion].question}
                </h2>
              </div>

              <div className="space-y-4">
                {assessmentQuestions[currentQuestion].options.map((option, index) => (
                  <motion.button
                    key={index}
                    whileHover={{ scale: 1.02, y: -2 }}
                    whileTap={{ scale: 0.98 }}
                    className="w-full text-left px-6 py-4 bg-slate-50 hover:bg-slate-100 rounded-2xl transition-all text-slate-800 font-medium"
                    onClick={() => handleAnswer(option.score)}
                  >
                    {option.text}
                  </motion.button>
                ))}
              </div>
            </motion.div>
          ) : (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8 }}
              className="bg-white rounded-3xl p-12 shadow-lg text-center"
            >
              <div className="text-6xl mb-8">🏆</div>
              <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
                测评完成！
              </h2>
              <div className="mb-8">
                <div className="text-5xl font-bold gradient-text mb-2">
                  {calculateScore()} 分
                </div>
                <div className="text-xl text-slate-600">
                  您的创新能力等级：<span className="font-bold text-blue-600">{getLevel(calculateScore())}</span>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
                <div className="bg-blue-50 rounded-2xl p-6">
                  <div className="text-2xl mb-2">🧠</div>
                  <h3 className="font-bold text-slate-900 mb-1">思维能力</h3>
                  <p className="text-sm text-slate-600">
                    {calculateScore() >= 28 ? '优秀' : calculateScore() >= 20 ? '良好' : calculateScore() >= 12 ? '一般' : '待提升'}
                  </p>
                </div>
                <div className="bg-purple-50 rounded-2xl p-6">
                  <div className="text-2xl mb-2">🎯</div>
                  <h3 className="font-bold text-slate-900 mb-1">创新潜力</h3>
                  <p className="text-sm text-slate-600">
                    {calculateScore() >= 28 ? '优秀' : calculateScore() >= 20 ? '良好' : calculateScore() >= 12 ? '一般' : '待提升'}
                  </p>
                </div>
                <div className="bg-green-50 rounded-2xl p-6">
                  <div className="text-2xl mb-2">🚀</div>
                  <h3 className="font-bold text-slate-900 mb-1">实践能力</h3>
                  <p className="text-sm text-slate-600">
                    {calculateScore() >= 28 ? '优秀' : calculateScore() >= 20 ? '良好' : calculateScore() >= 12 ? '一般' : '待提升'}
                  </p>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link href="/innovation">
                  <motion.button
                    whileHover={{ scale: 1.05, y: -2 }}
                    whileTap={{ scale: 0.95 }}
                    className="px-10 py-5 bg-gradient-to-r from-blue-500 to-indigo-600 text-white rounded-full font-bold text-lg shadow-xl hover:shadow-2xl transition-all whitespace-nowrap"
                  >
                    查看训练路径
                  </motion.button>
                </Link>
                <motion.button
                  whileHover={{ scale: 1.05, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-10 py-5 bg-white text-slate-700 border-2 border-slate-200 rounded-full font-bold text-lg hover:bg-slate-50 transition-all whitespace-nowrap"
                  onClick={() => window.location.reload()}
                >
                  重新测评
                </motion.button>
              </div>
            </motion.div>
          )}
        </div>
      </section>
    </div>
  )
}