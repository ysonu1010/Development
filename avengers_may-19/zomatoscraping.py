import requests
import pandas
import re
from bs4 import BeautifulSoup

#def match_class(string):
#	my_list=string.split()
#	if string=="result-order-flow-title hover_feedback zred bold   fontsize0 ln20":
#		return True

headers = {'User-Agent': 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_11_6) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/61.0.3163.100 Safari/537.36'}
for i in range(1,5):        #displays restaurants of 4 locations in bangalore

	response = requests.get("https://www.zomato.com/bangalore/order-food-online?delivery_subzone="+str(i),headers=headers)
#   if response.status_code==200:
	content = response.content
	html_soup = BeautifulSoup(content,"html.parser")
	#print(html_soup.get_text())

	#rest_containers=html_soup.find_all('a',class_=['result-order-flow-title hover_feedback zred bold   fontsize0 ln20'])
	#rest=html_soup.find_all("div",class_="col-l-12 col-s-13")
	#rest2=html_soup.find_all(match_class("result-order-flow-title hower_feedback zred bold   fontsize0 ln20"))
	#rest2=html_soup.find_all("a",class_="result-order-flow-title hover_feedback zred bold   fontsize0 ln20 ")
	rating=html_soup.find_all("div",attrs={"data-variation":"mini inverted"})
	rest_name=html_soup.find_all("a",attrs={"data-source":"o2search-title"})
	#for r in rest_name:
	#	r=r.text
	#	print(r)
	#for r in rating:
	#	r=r.text
	my_list=[]
	string=""
	for f, b in zip(rest_name, rating):
		string=f.text +" : "+ b.text
		my_list.append(string)
	#list_rest =[]
	#for tr in rest_name:
	   # dataframe ={}
	  #  dataframe["rest_name"] = tr.text
	 #   list_rest.append(dataframe)
	#for tr in rating:
		#dataframe={}
	    #dataframe["rating"] = tr.text
	   # list_rest.append(dataframe)

	df = pandas.DataFrame(my_list)
	df.to_csv("zomato_rest"+str(i)+".csv",index=True)
	#dicty={}
	#for r1 in rest_name:
	#	dicty['r1']=1
	#for r2 in rating:
	#	dicty[]
	#	print(str(r1)   +":"+ str(r2)  )
		#dicty['r1']=r2
	#for key,val in dicty:
	 #   print(key,val)

	#for r in rest1:
	#	r=r.text
	#	print(r)
	#print(rest1.prettify())
	#rest_containers1=html_soup.find_all('div',class_=['col-s-11 col-m-12 plr0','col-l-12 col-s-13'])
	#print(rest_containers.prettify())
	#top_rest = soup.find_all("div",attrs={"class": "col-s-11 col-m-12 plr0"})
	#list_tr=top_rest[0].find_all("div",attrs={"class":"col-l-12 col-s-13"})
	#print(top_rest)
	#print(list_tr.prettify())
	#list_tr = top_rest[0].find_all("div",attrs={"class": "col-s-8 col-l-1by3"})
	#print(top_rest.prettify())