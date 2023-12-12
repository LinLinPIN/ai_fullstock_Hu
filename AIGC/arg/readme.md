- google api
    - serpapi search_google_news
    - 数据转换 for item  in result['news_result']

- LLM
    当他上线的那一刻，它的训练已经完成，只能基于他拥有的知识去推理
    如何让大模型拿到最新的信息来生成内容？
        - 想象大模型是一个黑盒子 prompt 尽量的详细，分布，目标清晰
        - 不能去乱说，但是要写文章就要利用AIGC的能力
            让prompt 拥有这个内容，agent tool

- AutoGen
    请一个管家UserProxyAgent 负责接收人类用户的任务 
    AssistantAgent 做具体任务，写代码，