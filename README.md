# Stillwater Spray Foam — static duplicate

Static duplicate of https://stillwatersprayfoam.com (WordPress/Oxygen site),
rebuilt as plain HTML/CSS/JS for Cloudflare Pages.

- Live staging: https://stillwater-spray-foam.pages.dev
- Live domain (WordPress, unchanged until DNS is switched by the user):
  https://stillwatersprayfoam.com
- 6 pages: Home, About, Services, Gallery, FAQ, Contact.
- Contact form is a mailto form (opens the visitor's email app addressed to
  contact@stillwatersprayfoam.com) — the WordPress HappyForms backend cannot
  run on static Pages.
- Business: Stillwater Spray Foam and Construction LLC, 2805 E 6th Ave,
  Ste 2, Stillwater, OK 74074, (405) 747-4019, contact@stillwatersprayfoam.com.
- Tracking: Google Analytics / Google Ads gtag added 2026-11-23
  (GT-KT9X2388, AW-18310969734, click-to-call conversion
  AW-18310969734/zNpXCMewgOkcEIbzrJtE) in build.py's shared head template,
  so all 6 pages carry it. Same IDs as the original WordPress/Site Kit setup.

## Fixes applied vs the original (approved by the user)

1. Diagonal brown/tan bands no longer overlap/clip text. They are standalone
   divider bands between sections; hero text sits well inside its section.
2. Greenhouse photo removed everywhere (Services > Metal Buildings & Shops,
   Gallery). Replaced in Services with a Pexels stock photo of a warehouse
   building exterior with steel structures.
3. Services: duplicated log-building photo removed; barn photo removed from
   Concrete Services. Pole Barns & Barndominiums now uses a Pexels stock
   photo of a rustic white barn with a silo; Concrete Services now uses a
   Pexels stock photo of workers levelling fresh cement.
4. Gallery: greenhouse, log building and barn photos removed; kept the 6
   spray-foam worker photos and added 3 relevant stock photos (metal
   building, barn, house framing) for a 9-photo grid. Intro wording softened
   from "completed projects" to "examples of our work". The
   "representative examples" note was removed from the Gallery page
   2026-11-23 at the user's request.
5. Footer copyright fixed from "Copyright ©2026- Stillwater Spray Foam" to
   "Copyright ©2026 Stillwater Spray Foam - All Rights Reserved".
6. Footer email shown in plain text as contact@stillwatersprayfoam.com
   (no Cloudflare email-obfuscation placeholder).

## Stock photo sources (Pexels, free licence)

- Metal building: https://www.pexels.com/photo/photo-of-a-warehouse-12171800/
- Barn: https://www.pexels.com/photo/a-barn-on-a-farm-5517098/
- Concrete pour: https://www.pexels.com/photo/selective-focus-photography-cement-2219024/
- House framing: https://www.pexels.com/photo/wooden-house-framing-under-construction-in-texas-33404353/

All other photos are the original site's own Depositphotos images and logo,
downloaded from stillwatersprayfoam.com.

## Deploy

Direct deploy (no Git integration): `deploy_pages.py` in the Cloudflare
connector, e.g. `python3 ~/workspace/custom-connectors/custom.cloudflare/bin/deploy_pages.py ~/workspace/stillwater-spray-foam/site stillwater-spray-foam main`.

Do NOT add stillwatersprayfoam.com as a custom domain or change any DNS
record without the user's explicit approval. Mail records (jellyfish MX,
SPF/DKIM/DMARC) must stay untouched.
