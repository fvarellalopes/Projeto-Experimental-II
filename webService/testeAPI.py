import json
import requests
import geraUrl

param = 0
headers = geraUrl.urlCabe()
now = geraUrl.millis()
while param < now:
    url = geraUrl.urlConf()
    res = requests.request("GET", url, headers=headers)
    print(res.status_code)
    print(res.content)
    if res.status_code == 200:
        texto = json.loads(res.content)
        param = texto.get("timestampLastItem")
        print(param)