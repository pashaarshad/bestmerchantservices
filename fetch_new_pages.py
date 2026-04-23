import os
import urllib.request
import ssl
from bs4 import BeautifulSoup

ssl._create_default_https_context = ssl._create_unverified_context

urls = {
    "retail": "https://bestmerchantservices.com/our-services/retail/",
    "high-risk": "https://bestmerchantservices.com/high-risk-merchant-accounts/",
    "bad-credit": "https://bestmerchantservices.com/merchant-account-for-bad-credit/",
    "clover-duo": "https://bestmerchantservices.com/clover-station-duo/",
    "blog": "https://bestmerchantservices.com/blog/"
}

images_dir = os.path.join(os.path.dirname(__file__), 'src', 'assets', 'images')
os.makedirs(images_dir, exist_ok=True)

headers = {
    'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36'
}

for name, url in urls.items():
    print(f"Fetching {name} from {url}")
    req = urllib.request.Request(url, headers=headers)
    try:
        with urllib.request.urlopen(req, timeout=15) as response:
            html = response.read().decode('utf-8')
            
            # Save HTML for analysis
            with open(f"{name}.html", "w", encoding="utf-8") as f:
                f.write(html)
                
            soup = BeautifulSoup(html, 'html.parser')
            images = soup.find_all('img')
            print(f"Found {len(images)} images in {name}")
            
            for img in images:
                src = img.get('src')
                if src and src.startswith('http') and 'wp-content/uploads' in src:
                    # Fix responsive image sizes like -1024x683.jpg if needed, but original URL is better.
                    # We'll just download the src.
                    filename = src.split('/')[-1]
                    filepath = os.path.join(images_dir, filename)
                    if not os.path.exists(filepath):
                        try:
                            print(f"  Downloading {filename}...")
                            img_req = urllib.request.Request(src, headers=headers)
                            with urllib.request.urlopen(img_req, timeout=15) as img_resp:
                                with open(filepath, 'wb') as img_f:
                                    img_f.write(img_resp.read())
                        except Exception as e:
                            print(f"  Failed to download {filename}: {e}")
    except Exception as e:
        print(f"Failed to fetch {name}: {e}")

print("Done fetching pages and images.")
