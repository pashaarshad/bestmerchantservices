import os
import urllib.request
import ssl

# Disable SSL verification for download
ssl._create_default_https_context = ssl._create_unverified_context

# Create images directory
images_dir = os.path.join(os.path.dirname(__file__), 'src', 'assets', 'images')
os.makedirs(images_dir, exist_ok=True)

# All unique image URLs mapped to local filenames
images = {
    # Navbar & Footer - Logo
    "https://bestmerchantservices.com/wp-content/uploads/2023/10/bms-logo-nav.png": "bms-logo-nav.png",

    # Hero
    "https://bestmerchantservices.com/wp-content/uploads/2022/08/payment-cards.png": "payment-cards.png",

    # Solutions
    "https://bestmerchantservices.com/wp-content/uploads/2022/10/chip-douglas-card.png": "chip-douglas-card.png",

    # Benefits
    "https://bestmerchantservices.com/wp-content/uploads/2022/10/credit-card-processing-equipment-updated.jpg": "credit-card-processing-equipment.jpg",
    "https://bestmerchantservices.com/wp-content/uploads/2022/10/credit-card-processing-machines-updated.jpg": "credit-card-processing-machines.jpg",
    "https://bestmerchantservices.com/wp-content/uploads/2022/08/credit-card-processing-online.jpg": "credit-card-processing-online.jpg",

    # Contactless
    "https://bestmerchantservices.com/wp-content/uploads/2022/08/contactless-payment.jpg": "contactless-payment.jpg",

    # CTA
    "https://bestmerchantservices.com/wp-content/uploads/2022/08/compare-and-save.svg": "compare-and-save.svg",

    # PriceMatch
    "https://bestmerchantservices.com/wp-content/uploads/2022/08/we-will-pay-you.svg": "we-will-pay-you.svg",

    # Gallery
    "https://bestmerchantservices.com/wp-content/uploads/2022/08/pax-device.jpg": "pax-device.jpg",
    "https://bestmerchantservices.com/wp-content/uploads/2022/08/poynt-device.jpg": "poynt-device.jpg",
    "https://bestmerchantservices.com/wp-content/uploads/2022/08/clover-device.jpg": "clover-device.jpg",
    "https://bestmerchantservices.com/wp-content/uploads/2022/08/clover-mini-device.jpg": "clover-mini-device.jpg",

    # POS
    "https://bestmerchantservices.com/wp-content/uploads/2022/08/clover-station.jpg": "clover-station.jpg",
    "https://bestmerchantservices.com/wp-content/uploads/2022/08/clover-flex.jpg": "clover-flex.jpg",
    "https://bestmerchantservices.com/wp-content/uploads/2022/08/clover-mini.jpg": "clover-mini.jpg",

    # Terminals
    "https://bestmerchantservices.com/wp-content/uploads/2022/08/dejavoo.jpg": "dejavoo.jpg",
    "https://bestmerchantservices.com/wp-content/uploads/2022/08/m006-device.jpg": "m006-device.jpg",
    "https://bestmerchantservices.com/wp-content/uploads/2022/08/verifone.jpg": "verifone.jpg",

    # Blog
    "https://bestmerchantservices.com/wp-content/uploads/2023/09/choosing-pos-1024x683.jpg": "choosing-pos.jpg",
    "https://bestmerchantservices.com/wp-content/uploads/2023/09/mobile-payments-1024x683.jpg": "mobile-payments.jpg",
    "https://bestmerchantservices.com/wp-content/uploads/2023/09/credit-card-security-1024x683.jpg": "credit-card-security.jpg",

    # Footer CTA
    "https://bestmerchantservices.com/wp-content/uploads/2022/08/footer-cta.svg": "footer-cta.svg",

    # About Us Page
    "https://bestmerchantservices.com/wp-content/uploads/2022/09/about-best-merchant-services.jpg": "about-best-merchant-services.jpg",
    "https://bestmerchantservices.com/wp-content/uploads/2022/09/expert-solutions.jpg": "expert-solutions.jpg",
    "https://bestmerchantservices.com/wp-content/uploads/2022/09/why-best-merchant-services.jpg": "why-best-merchant-services.jpg",
    "https://bestmerchantservices.com/wp-content/uploads/2022/09/merchant-services-low-rates.jpg": "merchant-services-low-rates.jpg",

    # Our Services Page
    "https://bestmerchantservices.com/wp-content/uploads/2022/09/merchat-services-chip-cards-services.jpg": "chip-cards-services.jpg",
    "https://bestmerchantservices.com/wp-content/uploads/2022/09/merchant-services-small-business-loans.jpg": "small-business-loans.jpg",
    "https://bestmerchantservices.com/wp-content/uploads/2022/09/merchant-services-high-risk.jpg": "high-risk-merchant.jpg",

    # Partners Page
    "https://bestmerchantservices.com/wp-content/uploads/2022/08/partners-handshake.jpg": "partners-handshake.jpg",
}

headers = {
    'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36'
}

print(f"Downloading {len(images)} images to {images_dir}...\n")

success = 0
failed = 0
for url, filename in images.items():
    filepath = os.path.join(images_dir, filename)
    try:
        req = urllib.request.Request(url, headers=headers)
        with urllib.request.urlopen(req, timeout=15) as response:
            with open(filepath, 'wb') as f:
                f.write(response.read())
        size_kb = os.path.getsize(filepath) / 1024
        print(f"  [OK] {filename} ({size_kb:.1f} KB)")
        success += 1
    except Exception as e:
        print(f"  [FAIL] {filename} - ERROR: {e}")
        failed += 1

print(f"\nDone! {success} downloaded, {failed} failed.")
print(f"Images saved to: {images_dir}")
