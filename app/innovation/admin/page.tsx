'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { useState } from 'react'

export default function AdminPage() {
  const [apiKey, setApiKey] = useState('')
  const [model, setModel] = useState('gpt-3.5-turbo')
  const [prompt, setPrompt] = useState('生成10道创新能力测评题，每道题包含4个选项，分别对应1-4分的评分')
  const [isGenerating, setIsGenerating] = useState(false)
  const [questions, setQuestions] = useState<any[]>([])

  const handleGenerate = async () => {
    setIsGenerating(true)
    try {
      const response = await fetch('/api/assessment/generate', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ apiKey, model, prompt })
      })
      const data = await response.json()
      if (data.success) {
        setQuestions(data.questions)
      }
    } catch (error) {
      console.error('Failed to generate questions:', error)
    } finally {
      setIsGenerating(false)
    }
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
            <h1 className="text-xl font-bold gradient-text">测评管理后台</h1>
            <div className="w-24"></div>
          </div>
        </div>
      </nav>

      <section className="py-12">
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          <div className="bg-white rounded-3xl p-8 shadow-lg">
            <h2 className="text-2xl md:text-3xl font-bold text-slate-900 mb-8">
              大模型API配置
            </h2>

            <div className="space-y-6">
              <div>
                <label className="block text-sm font-medium text-slate-700 mb-2">
                  API密钥
                </label>
                <input
                  type="password"
                  className="w-full px-4 py-3 border border-slate-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  placeholder="输入API密钥"
                  value={apiKey}
                  onChange={(e) => setApiKey(e.target.value)}
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-slate-700 mb-2">
                  模型选择
                </label>
                <select
                  className="w-full px-4 py-3 border border-slate-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  value={model}
                  onChange={(e) => setModel(e.target.value)}
                >
                  <option value="gpt-3.5-turbo">GPT-3.5 Turbo</option>
                  <option value="gpt-4">GPT-4</option>
                  <option value="claude-2">Claude 2</option>
                  <option value="gemini-pro">Gemini Pro</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-slate-700 mb-2">
                  生成提示词
                </label>
                <textarea
                  className="w-full px-4 py-3 border border-slate-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  rows={4}
                  placeholder="输入生成测评题的提示词"
                  value={prompt}
                  onChange={(e) => setPrompt(e.target.value)}
                />
              </div>

              <motion.button
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
                className="w-full px-6 py-4 bg-gradient-to-r from-blue-500 to-indigo-600 text-white rounded-xl font-bold shadow-lg hover:shadow-xl transition-all whitespace-nowrap"
                onClick={handleGenerate}
                disabled={isGenerating}
              >
                {isGenerating ? '生成中...' : '生成测评题'}
              </motion.button>
            </div>
          </div>

          {questions.length > 0 && (
            <div className="mt-8 bg-white rounded-3xl p-8 shadow-lg">
              <h3 className="text-xl font-bold text-slate-900 mb-6">
                生成的测评题
              </h3>
              <div className="space-y-6">
                {questions.map((question, index) => (
                  <div key={index} className="border-b border-slate-200 pb-6">
                    <h4 className="text-lg font-semibold text-slate-800 mb-4">
                      {index + 1}. {question.question}
                    </h4>
                    <div className="space-y-3">
                      {question.options.map((option: any, optIndex: number) => (
                        <div key={optIndex} className="flex items-center gap-3">
                          <div className="w-6 h-6 rounded-full bg-blue-100 flex items-center justify-center text-blue-600 font-medium">
                            {String.fromCharCode(97 + optIndex)}
                          </div>
                          <span className="text-slate-700">{option.text} (得分: {option.score})</span>
                        </div>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </section>
    </div>
  )
}