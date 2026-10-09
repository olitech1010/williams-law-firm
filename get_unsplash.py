import urllib.request
import urllib.parse
import json
import ssl

ctx = ssl.create_default_context()
ctx.check_hostname = False
ctx.verify_mode = ssl.CERT_NONE

def get_images(query):
    url = f"https://unsplash.com/napi/search/photos?query={urllib.parse.quote(query)}&per_page=5"
    req = urllib.request.Request(
        url,
        headers={
            'User-Agent': 'Mozilla/5.0',
            'Accept': 'application/json'
        }
    )
    try:
        resp = urllib.request.urlopen(req, context=ctx)
        data = json.loads(resp.read().decode('utf-8'))
        return [(item['urls']['regular'], item['alt_description'] or 'Image') for item in data['results']]
    except Exception as e:
        return str(e)

print("Law Desk:", get_images("law office desk books"))
print("Injury:", get_images("construction worker safety"))
print("Probate:", get_images("signing document flatlay desk"))
