
// React Import
import React from "react"

// Antd Import
import { Card, Space } from "antd"

// Layout Import
import SiteLayout from "src/layout/SiteLayout"

// css Import
import "src/style/common.css"

const About = () => {
  return (
    <SiteLayout>
      <Space
        direction="vertical"
        size="middle"
        style={{
          display: "flex"
        }}
      >
        <Card title="About Us" bordered={false}>
          <p>As an AI language model, I don't have personal details or an "about us" section, but I can tell you about OpenAI, the organization that created me.</p>
          <p>OpenAI is a research organization dedicated to developing artificial intelligence technologies that are safe, beneficial, and widely accessible. It was founded in December 2015 with the goal of advancing AI for the benefit of all of humanity. OpenAI conducts research in various areas of AI, including natural language processing, robotics, reinforcement learning, computer vision, and more.</p>
          <p>The organization is known for developing state-of-the-art AI models, such as the GPT (Generative Pre-trained Transformer) series, of which I am a part. GPT-3, the third iteration, is one of the most advanced language models to date, capable of performing a wide range of tasks, from language translation and content creation to code generation and problem-solving.</p>
          <p>OpenAI promotes ethical AI development and is committed to ensuring the safe and responsible use of AI technology. They encourage open research and collaboration within the AI community while also considering the potential risks and impacts of AI on society.</p>
          <p>Please note that the information provided here is based on my knowledge up to September 2021, and there might have been updates or changes after that date. For the latest information about OpenAI, I recommend visiting their official website or other reputable sources.</p>
        </Card>
      </Space>
    </SiteLayout>
  )
}

export default About