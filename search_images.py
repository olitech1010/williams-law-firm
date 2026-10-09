import urllib.request
import urllib.parse
import re
import ssl

ctx = ssl.create_default_context()
ctx.check_hostname = False
ctx.verify_mode = ssl.CERT_NONE

def get_duckduckgo_links(query):
    url = f"https://html.duckduckgo.com/html/?q={urllib.parse.quote(query)}"
    req = urllib.request.Request(
        url, 
        headers={
            'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36'
        }
    )
    try:
        response = urllib.request.urlopen(req, context=ctx)
        html = response.read().decode('utf-8')
        # match DuckDuckGo redirect URLs
        links = re.findall(r'href=[\'"]?(https://duckduckgo\.com/l/\?uddg=[^\'" >]+)', html)
        out = []
        for l in links:
            decoded = urllib.parse.unquote(l.split('uddg=')[1])
            if 'unsplash.com/photos/' in decoded or 'pexels.com/photo/' in decoded:
                out.append(decoded)
        return list(set(out))
    except Exception as e:
        return str(e)

print("Law Desk:", get_duckduckgo_links("law books desk site:unsplash.com/photos"))
print("Workplace Safety:", get_duckduckgo_links("construction worker safety injury site:unsplash.com/photos"))
print("Probate flatlay:", get_duckduckgo_links("signing document flatlay desk site:unsplash.com/photos"))
