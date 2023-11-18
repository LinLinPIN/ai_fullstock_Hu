def fetch_article_content(url):
  response=requests.get(url)
  soup=BeautifulSoup(response.text,'html.parser')
  tittle=soup.find('h1')
  return tittle
fetch_article_content(selected_link)