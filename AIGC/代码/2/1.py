# 请你找到yahoo财经新闻并返回它的标题和内容
# yahoo财经的网址是多少?  https://finance.yahoo.com/news/
url="https://finance.yahoo.com/news/"

import requests
from bs4 import BeautifulSoup
# 函数
def fetch_news_links():
  # http请求库
  response=requests.get(url)
  # print(response.text)
  # 解析出来里面的a标签放入一个数组
  # python的文本解析器 当成html来解析 python具有强大的数据及分析能力
  soup=BeautifulSoup(response.text,'html.parser')
  # querrySelectorAll  a标签一定要有href的值
  # print(soup.find_all('a',href=True))
  # 迭代表达式
  links =[a['href'] for a in soup.find_all('a',href=True)]
  # print(links)
  news_link=[link for link in links if "/news" in link and ".html" in link]
  return news_link
  # 解析出里面的A标签
fetch_news_links()