# 跨境电商
AI 开店
玩具店->拼多多的海外版
- 翻译 NLP不用打开google翻译，百度翻译，写程序
    pipeline('translste')
    AIGC 生成
- 卖什么货
- 卖多少钱
- 营销内容怎么写有搞头

- 如何让openai帮你开店
    大模型(openai接口调用)+Prompt Engineer(编写prompt)

## Promot 工程
会问问题的人比解决问题的人更厉害
大模型超越了大部分人的能力

## opoenai 封装的过程
python特别适合NLP
一个功能写法就一种
风格独特 缩进 
def get_response(prompt):
    //调用了openai库的completions模块(其他模块).create方法
    //向openai发出网络请求
    completions= openai.Completions.create(
        engine=,//模型
        prompt=,//吴恩达prompt
        temperature=0,//自由度 
        max_tokens=512//限制字数，省钱
    )
    //python是同步的语言，js是异步的
    print(completions)
    result=completions.choices[0].text
    return result






!pip install openai

import openai 
# 算力 tokens
openai.apikey='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'
# 常量 openai 的文本大模型 达芬奇
COMPLETION_MODEL ="text-davinci-003"


#封装openai调用过程
def get_response(promot):
  # 完成
  completions=openai.Completion.creat(
    engine=COMPLETION_MODEL,
    promot=promot,
    #最大tokens限制 少花钱
    max_tokens=512,
    n=1,#回复多少条
    temperature=0.2 #自由度
  )print(completions)
  message=completions.choices[0].text
  return message
  //调用  
  get_response(prompt)





  !pip install transformers

from transformers import pipeline
translator=pipeline("translation_en_to_fr")
result =translator("Hugging face is a technology company based in New York and Paris",max_length=40)
print(result[0]["translation_text"])