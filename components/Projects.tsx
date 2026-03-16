'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'

interface Project {
  id: number
  title: string
  description: string
  category: string
  image: string
  tech: string[]
}

const projects: Project[] = [
  {
    id: 1,
    title: '创新能力训练站',
    description: '通过系统化的思维训练，提升您的创新能力和解决问题的能力',
    category: '创新训练',
    image: 'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=modern%20digital%20innovation%20training%20platform%20with%20purple%20and%20blue%20gradient%20colors%2C%20minimal%20design&image_size=landscape_16_9',
    tech: ['思维训练', '创意激发', '问题解决'],
  },
  {
    id: 2,
    title: '创意设计工作室',
    description: '展示创意作品的视觉冲击型网站，强调排版和动画效果',
    category: 'Design',
    image: 'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=modern%20creative%20design%20studio%20website%20with%20dark%20theme%20and%20bold%20typography&image_size=landscape_16_9',
    tech: ['React', 'Framer Motion', 'Tailwind'],
  },
  {
    id: 3,
    title: '移动健康应用',
    description: '帮助用户追踪健康数据的移动优先应用，注重用户体验和数据可视化',
    category: 'Mobile App',
    image: 'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=modern%20health%20mobile%20app%20interface%20with%20clean%20design%20and%20data%20visualization&image_size=landscape_16_9',
    tech: ['React Native', 'Node.js', 'PostgreSQL'],
  },
]

export default function Projects() {
  return (
    <section id="projects" className="py-24 bg-gradient-to-b from-slate-50 to-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-1.5 bg-blue-100 text-blue-700 rounded-full text-sm font-semibold mb-4">
            精选作品
          </span>
          <h2 className="text-3xl md:text-5xl font-bold text-slate-900 mb-4">
            我的<span className="gradient-text">作品集</span>
          </h2>
          <p className="text-xl text-slate-600 max-w-2xl mx-auto">
            探索我精心打造的项目，每一个都追求极致的设计与体验
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => {
            const isInnovationStation = project.id === 1
            return (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.15 }}
                className={`group rounded-3xl overflow-hidden transition-all duration-500 hover-lift ${
                  isInnovationStation ? 'lg:col-span-2 lg:row-span-2' : ''
                }`}
              >
                {isInnovationStation ? (
                  <Link href="/innovation" className="block h-full">
                    <div className="relative h-full bg-white">
                      <div className={`aspect-video ${isInnovationStation ? 'lg:aspect-auto lg:h-96' : ''} overflow-hidden`}>
                        <img
                          src={project.image}
                          alt={project.title}
                          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-transparent to-transparent" />
                      </div>
                      
                      <div className={`p-8 ${isInnovationStation ? 'lg:absolute lg:bottom-0 lg:left-0 lg:right-0 lg:bg-gradient-to-t lg:from-slate-900 lg:to-transparent lg:text-white' : ''}`}>
                        <div className="flex items-center gap-3 mb-4">
                          <span className={`px-4 py-1.5 rounded-full text-sm font-semibold ${
                            isInnovationStation 
                              ? 'gradient-bg text-white' 
                              : 'bg-purple-100 text-purple-700'
                          }`}>
                            {project.category}
                          </span>
                          {isInnovationStation && (
                            <span className="px-3 py-1 bg-yellow-400 text-yellow-900 rounded-full text-xs font-bold flex items-center gap-1">
                              ⭐ 精选推荐
                            </span>
                          )}
                        </div>
                        
                        <h3 className={`text-2xl ${isInnovationStation ? 'md:text-4xl' : ''} font-bold mb-3 ${
                          isInnovationStation ? 'text-white' : 'text-slate-900'
                        }`}>
                          {project.title}
                        </h3>
                        
                        <p className={`mb-6 ${isInnovationStation ? 'text-slate-200' : 'text-slate-600'}`}>
                          {project.description}
                        </p>
                        
                        <div className="flex flex-wrap gap-2">
                          {project.tech.map((tech) => (
                            <span
                              key={tech}
                              className={`px-3 py-1 text-sm rounded-full ${
                                isInnovationStation 
                                  ? 'bg-white/20 text-white' 
                                  : 'bg-slate-100 text-slate-600'
                              }`}
                            >
                              {tech}
                            </span>
                          ))}
                        </div>
                        
                        {isInnovationStation && (
                          <motion.div
                            whileHover={{ x: 5 }}
                            className="mt-6 flex items-center gap-2 text-white font-semibold"
                          >
                            <span>立即体验</span>
                            <span>→</span>
                          </motion.div>
                        )}
                      </div>
                    </div>
                  </Link>
                ) : (
                  <div className="bg-white shadow-lg">
                    <div className="aspect-video overflow-hidden">
                      <img
                        src={project.image}
                        alt={project.title}
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                      />
                    </div>
                    
                    <div className="p-6">
                      <div className="text-sm text-purple-600 font-medium mb-3">
                        {project.category}
                      </div>
                      
                      <h3 className="text-xl font-bold text-slate-900 mb-3">
                        {project.title}
                      </h3>
                      
                      <p className="text-slate-600 mb-5 line-clamp-2">
                        {project.description}
                      </p>
                      
                      <div className="flex flex-wrap gap-2">
                        {project.tech.map((tech) => (
                          <span
                            key={tech}
                            className="px-2.5 py-1 bg-slate-100 text-slate-600 text-xs rounded-full"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                )}
              </motion.div>
            )
          })}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="text-center mt-16"
        >
          <motion.a
            href="#contact"
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.95 }}
            className="inline-block px-10 py-4 gradient-bg text-white rounded-full font-semibold text-lg shadow-xl hover:shadow-2xl transition-all"
          >
            🚀 启动您的项目
          </motion.a>
        </motion.div>
      </div>
    </section>
  )
}
