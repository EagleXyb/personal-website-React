'use client'

import { motion } from 'framer-motion'

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
    title: '现代电商平台',
    description: '为知名品牌打造的全功能电商解决方案，包含个性化推荐和无缝支付体验',
    category: 'Web Development',
    image: 'https://placehold.co/600x400/1e293b/ffffff?text=E-commerce',
    tech: ['Next.js', 'TypeScript', 'Stripe'],
  },
  {
    id: 2,
    title: '创意设计工作室',
    description: '展示创意作品的视觉冲击型网站，强调排版和动画效果',
    category: 'Design',
    image: 'https://placehold.co/600x400/312e81/ffffff?text=Design+Studio',
    tech: ['React', 'Framer Motion', 'Tailwind'],
  },
  {
    id: 3,
    title: '移动健康应用',
    description: '帮助用户追踪健康数据的移动优先应用，注重用户体验和数据可视化',
    category: 'Mobile App',
    image: 'https://placehold.co/600x400/0f766e/ffffff?text=Health+App',
    tech: ['React Native', 'Node.js', 'PostgreSQL'],
  },
]

export default function Projects() {
  return (
    <section id="projects" className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            精选作品集
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            展示我最自豪的项目，每个项目都体现了对细节的关注和对技术的热爱
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-2"
            >
              <div className="aspect-video overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>
              
              <div className="p-8">
                <div className="text-sm text-blue-600 font-medium mb-3">
                  {project.category}
                </div>
                
                <h3 className="text-2xl font-bold text-gray-900 mb-4">
                  {project.title}
                </h3>
                
                <p className="text-gray-600 mb-6 line-clamp-3">
                  {project.description}
                </p>
                
                <div className="flex flex-wrap gap-2">
                  {project.tech.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 bg-gray-100 text-gray-600 text-sm rounded-full"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="text-center mt-16">
          <motion.a
            href="#contact"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inline-block px-8 py-4 bg-gray-900 text-white rounded-full font-semibold text-lg transition-all hover:bg-gray-800 shadow-lg"
          >
            启动您的项目
          </motion.a>
        </div>
      </div>
    </section>
  )
}
