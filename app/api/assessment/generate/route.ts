import { NextResponse } from 'next/server'

export async function POST(request: Request) {
  try {
    const { apiKey, model, prompt } = await request.json()

    // 这里可以接入大模型API
    // 示例：调用OpenAI API
    // const response = await fetch('https://api.openai.com/v1/chat/completions', {
    //   method: 'POST',
    //   headers: {
    //     'Content-Type': 'application/json',
    //     'Authorization': `Bearer ${apiKey}`
    //   },
    //   body: JSON.stringify({
    //     model: model,
    //     messages: [{ role: 'user', content: prompt }]
    //   })
    // })

    // 模拟生成题目
    const mockQuestions = [
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
      }
    ]

    return NextResponse.json({ success: true, questions: mockQuestions })
  } catch (error) {
    return NextResponse.json({ success: false, error: 'Failed to generate questions' })
  }
}