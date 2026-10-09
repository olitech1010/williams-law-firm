import urllib.request
import urllib.parse
import re
import ssl

ctx = ssl.create_default_context()
ctx.check_hostname = False
ctx.verify_mode = ssl.CERT_NONE

def get_images(query):
    url = f"https://www.pexels.com/search/{urllib.parse.quote(query)}/"
    req = urllib.request.Request(
        url,
        headers={
            'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36'
        }
    )
    try:
        resp = urllib.request.urlopen(req, context=ctx)
        html = resp.read().decode('utf-8')
        links = set(re.findall(r'https://images\.pexels\.com/photos/\d+/[a-zA-Z0-9-]+\.jpeg', html))
        return list(links)[:5]
    except Exception as e:
        return str(e)

print("Law Desk:", get_images("law office desk"))
print("Injury:", get_images("construction worker safety"))
print("Probate:", get_images("signing document flatlay"))
