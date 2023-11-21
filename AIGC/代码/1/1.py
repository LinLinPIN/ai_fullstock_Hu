! pip install openai==0.27.0
import openai 
openai.api_key=''

# 请求openai  completion接口调用
def get_completion(prompt,model='gpt-3.5=turbo'):
    # role 角色，user
    messages=[{"role":"user","content":prompt}]
    response=openai.ChatCompletion.create(
        model=model,
        messages=messages,
        temperature=0.2
    )
    print(response)
    return response.choices[0].message["context"] 

print(get_completion(prompt))


text=f"""
  You should express what you want a model to do by \
providing instructions that are as clear and \
specific as you can possibly make them. \
This will guide the model towards the desired output, \
and reduce the chances of receiving irrelevant \
or incorrect responses. Don't confuse writing a \
clear prompt with writing a short prompt. \
In many cases, longer prompts provide more clarity \
and context for the model, which can lead to \
more detailed and relevant outputs.

"""
# NLP任务之summerize
prompt = f"""
Summarize the text delimited by triple backticks \
into a single sentence.
```{text}```
"""
