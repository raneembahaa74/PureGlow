const productsData = {
    "b1": {
        name: "Elanea Collection",
        price: "$80.00",
        image: "Unique Cosmetic Packaging Design Inspiration 2026.jpg",
        desc: "A premium set curated for deep nourishment and rejuvenation. Infused with rare botanical extracts and essential oils to restore your skin's natural barrier and provide a luxurious, dewy finish. This collection includes a rich cleansing balm, a hydrating essence, a potent anti-aging serum, and a nourishing night cream. Perfect for those seeking to revitalize their skin and achieve a radiant complexion. Experience the ultimate in skincare indulgence with the Elanea Collection."
    },
    "b2": {
        name: "Centella Kit",
        price: "$70.00",
        image: "download.jpg",
        desc: "The ultimate soothing kit for sensitive skin. Infused with Centella Asiatica to calm redness and repair the skin barrier. This kit includes a gentle cleanser, a hydrating toner, a nourishing serum, and a calming moisturizer. Perfect for those with irritated or reactive skin, the Centella Kit provides deep hydration and promotes skin healing for a healthier, more resilient complexion."
    },
    "b3": {
        name: "KAHI Wrinkle Bounce Balm",
        price: "$60.00",
        image: "KAHI Wrinkle Bounce Multi Balm Stick _ PDRN Collagen Wrinkle Stick _ Korean Skin Care.jpg",
        desc: "The secret to instant Korean glass skin. Formulated with Jeju natural oils and Salmon Collagen to deeply hydrate and improve skin elasticity. Perfect for targeting fine lines and achieving a youthful glow anytime, anywhere."
    },
    "b4": {
        name: "white Nails",
        price: "$30.00",
        image: "30.jpg",
        desc: "Elevate your look with our Minimalist White Nails collection. Designed for the modern woman who appreciates clean aesthetics and timeless elegance. These high-quality, long-lasting nails provide a flawless, salon-finish look in minutes. Whether you prefer a soft milky white or a crisp, bold finish, this collection offers the perfect versatile touch for any occasion, from daily tasks to special evenings. Pure, sophisticated, and effortlessly beautiful."
    },
    "b5": {
        name: "Topshop Lip Crayon Set",
        price: "$48.00",
        image: "Abbie Benstead-Evans (abbiebensteadev) on Pinterest.jpg",
        desc: "Experience a burst of elegance with the Topshop Lip Crayon Set. Designed for the modern woman who values both convenience and style, these long-lasting crayons blend high-pigment color with a touch of fresh hydration. The creamy, easy-glide formula ensures a flawless application every time, keeping your lips feeling soft and looking radiant all day long. Perfect for an instant refresh and a sophisticated glow that completes any look."
    },
    "b6": {
        name: "Green Plum Refreshing Cleanser",
        price: "$35.00",
        image: "f1e26f1d31df1c97a8d50a0515ac3c71.jpg",
        desc: "Elevate your cleansing ritual with our Green Plum Refreshing Cleanser. This low-pH formula is expertly crafted with Green Plum water and Mung Bean extract to gently purify your skin without stripping away its natural oils. It effectively removes impurities and excess sebum while maintaining a healthy moisture balance, leaving your face feeling incredibly refreshed, soft, and clear. Ideal for daily use to achieve a naturally radiant and balanced complexion."
    },
    "partner": {
        name: "Professional Partner",
        price: "$100.00",
        image: "TaShé professional.jpg",
        desc: "Experience professional-grade skincare at home with our Professional Partner treatment. Trusted by skin specialists worldwide, this advanced formula is meticulously crafted to deliver clinical potency with the feel of daily luxury. Designed for those who demand visible results, it works to restore, protect, and enhance your skin's natural health using high-performance ingredients. It is the ultimate choice for a sophisticated, healthy, and revitalized glow that stands the test of time."
    },
    "1": {
        name: "Anua Heartleaf Cleansing Oil",
        price: "$45.00",
        image: "0cb25b35fc0a807132759aa56fb69509.jpg",
        desc: "Experience a deep yet gentle clean with the Anua Heartleaf Cleansing Oil. This non-comedogenic formula is specifically designed to melt away heavy makeup, sunscreen, and daily impurities while soothing sensitive skin with Heartleaf extract. Its lightweight texture penetrates deep into the pores to eliminate blackheads and excess sebum without leaving a greasy residue. Perfect for achieving a clear, refreshed, and calm complexion as the first step in your daily double-cleansing ritual."
    },
    "2": {
        name: "Blush Radiance Collection",
        price: "$48.00",
        image: "2.jpg",
        desc: "Illuminate your beauty with the Blush Radiance Collection. This curated set is specifically designed to deeply hydrate your skin while providing an irresistible, soft-focus velvet finish. Infused with skin-loving nutrients, it enhances your natural flush and leaves your complexion looking healthy, vibrant, and luminous. Perfect for those who want a romantic, dewy glow that feels as good as it looks."
    },
    "3": {
        name: "Luxury Nails",
        price: "$65.00",
        image: "26.jpg",
        desc: "Step into a world of glamour with our Luxury Nails collection. Each set is a masterpiece of design, crafted with premium materials to provide a high-shine, durable, and sophisticated look. These nails are engineered for a perfect fit and a seamless application, offering you a professional salon-quality manicure in the comfort of your home. Whether for a red-carpet event or adding a touch of elegance to your daily routine, the Luxury Nails collection is your ultimate accessory for a flawless and confident glow."
    },
    "4": {
        name: "Doctor Rogers Complete Collection",
        price: "$45.00",
        image: "4b327787e502b73a48472dc012c73ebb.jpg",
        desc: "Experience the pinnacle of clean, clinical skincare with the Doctor Rogers Complete Collection. Meticulously dermatologist-created and plant-based, this set provides everything your skin needs for a healthy, minimalist routine. Each formula is designed to restore and protect your skin's natural health, ensuring visible results without irritation. It is the perfect solution for those who value purity, science, and a simplified approach to achieving a lasting, radiant glow every single day."
    },
    "5": {
        name: "GLAMFOX Rosehip Oil Hyaluron Cream",
        price: "$75.00",
        image: "download2.jpg",
        desc: "Experience the ultimate skin transformation with the GLAMFOX Rosehip Oil Hyaluron Cream. This powerful formula combines the regenerative properties of Rosehip Oil with the intense plumping power of Hyaluronic Acid. Rich in essential fatty acids and antioxidants, it works to promote skin elasticity and visibly reduce the appearance of fine lines. This luxurious cream provides deep nourishment while locking in moisture, leaving your skin feeling velvety soft, rejuvenated, and glowing with a healthy, youthful radiance."
    },
    "6": {
        name: "Pure Glow Botanical Set",
        price: "$80.00",
        image: "5.jpg",
        desc: "Your entire morning routine in one bottle. The Ultimate Glow Set is expertly formulated with pure botanical extracts to provide clarity that starts deep within the pores. Designed for the modern lifestyle, this set delivers intense hydration and a healthy, vibrant finish that lasts all day. Experience the perfect blend of clinical potency and daily luxury, ensuring your skin radiates with a natural, luminous glow every single day."
    },
    "7": {
        name: "KIKO Hydra Lipgloss",
        price: "$42.00",
        image: "22.jpg",
        desc: "Experience the viral sensation of 3D shine with the KIKO Hydra Lipgloss. Specifically formulated to provide an irresistible luminous finish while keeping your lips deeply hydrated. Its creamy, non-sticky texture glides on smoothly, smoothing the appearance of lip lines and providing a soft, plump look. Infused with passion fruit oil for a comfortable feel that lasts for hours. Whether worn alone or over lipstick, it's the ultimate touch for a sophisticated and healthy glow."
    },
    "8": {
        name: "Aqua Vento Cleanser",
        price: "$33.00",
        image: "6.jpeg",
        desc: "Refresh your skin with the cooling touch of Aqua Vento Cleanser. This advanced hydrating wash is formulated to sweep away impurities while infusing your skin with deep moisture. Its unique oxygenating formula mimics a fresh sea breeze, leaving your pores clear and your complexion revitalized without any dryness. Perfect for starting your day with a surge of hydration and a healthy, airy glow."
    },
    "9": {
        name: "Rhode Peptide Lip Treatment & Tint Collection",
        price: "$60.00",
        image: "10.jpeg",
        desc: "Restore and protect your lips with the Rhode Peptide Lip Treatment & Tint Collection. Formulated with high-performance peptides and shea butter, this award-winning treatment works to visibly plump and soften lips while locking in intense moisture. Whether you choose the sheer tinted shades for a hint of color or the classic clear treatment, it leaves your lips with a rich, glossy finish that feels lightweight and non-greasy. The ultimate daily luxury for achieving naturally full, healthy, and radiant lips every single day."
    },
    "10": {
        name: "Gel Cleanser-Gel Cream Monsiturizer",
        price: "$100.00",
        image: "7.jpeg",
        desc: "Experience the ultimate refreshing ritual with our Gel Cleanser and Gel Cream Moisturizer duo. The lightweight Gel Cleanser gently lifts away impurities and excess oil while preserving your skin’s essential moisture. Follow up with the ultra-breathable Gel Cream Moisturizer, which delivers an instant surge of hydration with a weightless, non-greasy finish. Together, they work to balance and soothe your skin, leaving it feeling incredibly soft, revitalized, and glowing with a healthy, dewy radiance. Perfect for all skin types seeking a fresh, airy feel."
    },
    "11": {
        name: "Dana Botanical Full Routine",
        price: "$180.00",
        image: "4-.jpg",
        desc: "Experience the ultimate botanical indulgence with the Dana Full Routine. This comprehensive set is meticulously curated to provide your skin with a complete transformation from morning to night. Infused with high-performance plant extracts and vitamins, each step works in synergy to deeply purify, intensely hydrate, and protect your skin’s natural barrier. Designed for those who seek a simplified yet potent skincare ritual, this collection ensures a healthy, balanced, and luminous complexion that radiates with a natural glow every single day."
    },
    "12": {
        name: "Medicube PDRN Pink Collagen Capsule Cream",
        price: "$66.00",
        image: "9.jpeg",
        desc: "Experience the next level of skin regeneration with our PDRN Pink Collagen Capsule Cream. This high-performance moisturizer features innovative collagen capsules that burst upon application, delivering a potent dose of PDRN and Salmon Collagen deep into the skin. Specifically formulated to restore elasticity and provide an instant plumping effect, it transforms dull, tired skin into a firm, radiant, and youthful masterpiece. A perfect blend of clinical science and luxurious care for a healthy glow that starts from within."
    },
    "13": {
        name: "Femmue - Lip Sleeping Mask",
        price: "$45.00",
        image: "15.jpeg",
        desc: "Indulge in an overnight sanctuary for your lips with the Femmue Lip Sleeping Mask. This luxurious, plant-based treatment is designed to intensely nourish and repair while you sleep. Infused with botanical oils and antioxidants, its rich, buttery texture melts into the lips to eliminate dryness and fine lines. Wake up to a visibly smoother, plumper, and deeply hydrated pout that radiates with a healthy, natural glow. The perfect final touch to your evening ritual for a soft-focus, velvet finish every morning."
    },
    "14": {
        name: "Blushea Soft Flush Liquid Blush",
        price: "$30.00",
        image: "23.jpg",
        desc: "Achieve a naturally radiant and youthful flush with the Blushea Soft Flush Liquid Blush. This weightless, long-lasting formula is designed to melt seamlessly into your skin, providing a soft-focus velvet finish that glows from within. Infused with skin-loving nutrients, it offers a buildable tint that keeps your complexion looking vibrant and healthy all day long. Perfect for a fresh, effortless look that enhances your natural beauty with a touch of daily luxury."
    },
    "15": {
        name: "Pretty White Nails",
        price: "$140.00",
        image: "28.jpg",
        desc: "Embrace a timeless aesthetic with our Pretty White Nails collection. Specifically designed for a clean and sophisticated look, these high-quality nails offer a flawless, salon-grade finish in an instant. Whether you're going for a minimalist daily style or a crisp, professional appearance, this set provides durable wear and a perfect fit. Pure, versatile, and effortlessly chic, it’s the ultimate accessory to complement your natural radiant glow every single day."
    },
    "16": {
        name: "Dior Rose Eau de Parfum",
        price: "$120.00",
        image: "24.jpg",
        desc: "Immerse yourself in a garden of infinite blossoms with Dior Rose Eau de Parfum. This exquisite fragrance is a tribute to the timeless beauty of the Grasse Rose, capturing its vibrant and airy essence in every drop. Blending floral sophistication with a touch of fresh vitality, it leaves a lingering trail of elegance that is both delicate and powerful. Designed for the woman who radiates natural grace, this perfume is the ultimate daily luxury to complete your radiant glow."
    },
    "17": {
        name: "Beauty of Joseon - Calming Serum",
        price: "$50.00",
        image: "12.jpeg",
        desc: "Soothe and revitalize your skin with the Beauty of Joseon Calming Serum. Inspired by traditional Korean herbal medicine, this gentle formula combines 76% Green Tea leaf water with 2% Panthenol to deliver deep hydration while calming irritated or sensitive skin. Rich in antioxidants, it helps protect your skin from environmental stressors and effectively reduces redness, leaving your complexion feeling refreshed, balanced, and incredibly soft. The perfect addition to your daily ritual for a healthy, serene, and radiant glow."
    },
    "18": {
        name: "Pretty Pink Nails",
        price: "$150.00",
        image: "25.jpg",
        desc: "Soft, feminine, and effortlessly beautiful, our Pretty Pink Nails are the ultimate expression of delicate grace. This set features a high-shine, petal-soft pink hue designed to complement any skin tone with a fresh and youthful look. Crafted for durability and a seamless salon-quality fit, these nails provide an instant touch of sophistication to your daily style. Perfect for those who love a romantic, clean aesthetic that radiates a healthy and charming glow every single day."
    },
    "19": {
        name: "Arencia Premium Green Mochi Cleanser",
        price: "$100.00",
        image: "Creamy Green Cleanser Texture _ Gentle Korean Skincare Routine.jpg",
        desc: "Experience the viral sensation of deep cleansing with the Arencia Premium Green Mochi Cleanser. This artisanal, handmade formula features a unique 'Mochi-like' stretchy texture that effectively grips and lifts away deep-seated impurities from within the pores. Infused with premium green botanical extracts, it provides a gentle exfoliation while maintaining your skin’s natural moisture balance. Designed for those who value purity and clinical potency, it leaves your complexion feeling incredibly refreshed, smooth, and glowing with a healthy, vibrant radiance every single day."
    },
    "20": {
        name: "Medicube PDRN Pink Cica Soothing Toner",
        price: "$100.00",
        image: "20.jpg",
        desc: "Experience the ultimate skin-soothing ritual with the Medicube PDRN Pink Cica Soothing Toner. This high-performance formula combines the restorative power of PDRN with the calming properties of Pink Cica to instantly relieve skin irritation and redness. Specifically designed to strengthen the skin's natural barrier, it provides a surge of deep hydration while refining your skin’s texture. Perfect for achieving a balanced, calm, and healthy complexion, this toner is the essential first step towards a radiant and resilient glow every single day."
    },
    "21": {
        name: "Pretty Mixed Nails",
        price: "$50.00",
        image: "27.jpg",
        desc: "Express your unique personality with the Pretty Mixed Nails collection. This curated set features a sophisticated blend of complementary designs, textures, and subtle accents, offering a creative and modern twist on the classic manicure. Each nail is crafted with premium materials for a seamless, salon-quality fit and durable wear. Perfect for those who want to stand out with an artistic yet elegant look, this mixed set is your ultimate accessory for a playful and confident glow every single day."
    },
    "22": {
        name: "Luméra Set",
        price: "$500.00",
        image: "Unique Cosmetic Packaging Design Inspiration 2026 (1).jpg",
        desc: "Illuminate your skin from within with the Luméra Set. This high-performance collection is meticulously formulated to target dullness and uneven texture, providing a visible boost in clarity and brightness. Infused with advanced botanical extracts and clinical-grade brightening agents, each product in this set works in perfect synergy to restore your skin's natural luminosity. Designed for those who seek professional results and a luxurious experience, the Luméra Set ensures your complexion radiates with a healthy, lit-from-within glow every single day."
    },
    "23": {
        name: "Natural Cosmetics - Silome Body Cream",
        price: "$70.00",
        image: "3.jpeg",
        desc: "Immerse your body in the soothing embrace of Silome Body Cream. This ultra-rich, botanical formula is designed to provide intense, 24-hour hydration while improving skin texture and elasticity. Crafted with pure natural ingredients, its whipped, velvety texture melts instantly into the skin, leaving it feeling silk-soft and deeply nourished without any greasiness. The ultimate daily luxury for achieving a healthy, supple, and radiant body glow every single day."
    },
    "24": {
        name: "Madagascar Centella Tone Brightening Capsule Ampoule",
        price: "$50.00",
        image: "bb50520c549bcd9dba1abd69aa066907.jpg",
        desc: "Unlock a new level of skin clarity with the Madagascar Centella Tone Brightening Capsule Ampoule. This innovative formula features concentrated MadeWhite™ capsules suspended in a soothing Centella Asiatica base to target dark spots and uneven skin tone without irritation. Specifically designed to brighten and stabilize your complexion, it delivers intense hydration while strengthening the skin’s natural barrier. Experience a lightweight, fast-absorbing treatment that leaves your skin feeling calm, balanced, and glowing with a healthy, transparent radiance every single day."
    },
    "25": {
        name: "Luxury Hydrating Face Cream",
        price: "$65.00",
        image: "614bcb48636bfdb48aae59eaae194dc0.jpg",
        desc: "Experience the ultimate indulgence with our Luxury Hydrating Face Cream. This masterfully crafted formula blends clinical potency with daily luxury to provide intense, long-lasting hydration. Infused with premium botanical extracts and nourishing oils, it works to improve skin texture and elasticity while creating a protective moisture barrier. Its rich, velvety texture melts into the skin, leaving you with a healthy, radiant glow and a flawless finish that lasts every single day."
    },
    "26": {
        name: "PHACH NIACIN SERUM",
        price: "$45.00",
        image: "photo_2026-05-04_00-08-33.jpg",
        desc: "Elevate your skincare ritual with the PHACH Niacin Serum, a high-performance formula designed for maximum clarity. Powered by a potent concentration of Niacinamide, this serum works to visibly refine pores, balance oil production, and smooth skin texture. Its lightweight, fast-absorbing texture targets blemishes and uneven tone, leaving your complexion feeling calm, resilient, and glowing with a healthy, polished finish. The perfect blend of clinical potency and daily luxury for a clearer, more radiant look every single day."
    },
    "27": {
        name: "Body lotion",
        price: "$80.00",
        image: "photo_2026-05-04_00-09-46.jpg",
        desc: "Indulge your skin in the ultimate moisture therapy with our Pure Glow Body Lotion. This fast-absorbing, lightweight formula is engineered to deliver deep, lasting hydration while leaving your skin feeling silk-soft and revitalized. Infused with a blend of nourishing botanical oils and antioxidants, it works to restore your skin’s natural suppleness and radiance without any heavy or greasy residue. Perfect for daily use, it envelops your body in a subtle, luxurious scent, ensuring you feel refreshed and glowing from head to toe, every single day."
    },
    "28": {
        name: "Natural Cosmetics -Silome Body Cream",
        price: "$70.00",
        image: "WhatsApp Image 2026-04-29 at 11.19.34 PM.jpeg",
        desc: "Elevate your body care routine with the Silome Body Cream. This ultra-rich, botanical formula is designed to deliver intense, 24-hour hydration while improving skin texture and elasticity. Crafted with pure natural ingredients, its whipped, velvety texture melts instantly into the skin, leaving it feeling silk-soft and deeply nourished without any heavy residue. The ultimate daily luxury for achieving a healthy, supple, and radiant body glow from head to toe."
    },
    "29": {
        name: "Creamy Gelly Cleanser",
        price: "$85.00",
        image: "WhatsApp Image 2026-04-30 at 12.24.51 AM (1).jpeg",
        desc: "Experience the perfect balance of deep purification and intense hydration with our Creamy Gelly Cleanser. This innovative, dual-action formula features a unique jelly-to-cream texture that effortlessly dissolves makeup and impurities while soothing the skin's moisture barrier. Infused with skin-loving botanicals, it leaves your face feeling refreshingly clean, supple, and never stripped of its natural oils. Designed for a gentle yet effective daily ritual, it’s the essential starting point for a healthy, balanced, and radiant glow."
    },
    "30": {
        name: "Medicube Collagen Night Wrapping Mask",
        price: "$70.00",
        image: "WhatsApp Image 2026-04-29 at 11.19.35 PM (1).jpeg",
        desc: "Redefine your beauty sleep with the Medicube Collagen Night Wrapping Mask. This innovative 'wrapping' treatment forms a breathable collagen film over your skin, locking in moisture and active ingredients while you rest. Specifically formulated to boost skin elasticity and firmness, it prevents moisture loss overnight to reveal a visibly lifted, glowing, and glass-like complexion by morning. A true clinical masterpiece for those who seek professional-grade results and a youthful, radiant glow every single day."
    },
    "31": {
        name: "Beauty of Joseon-Calming Serum",
        price: "$45.00",
        image: "WhatsApp Image 2026-04-30 at 12.24.51 AM (3).jpeg",
        desc: "Soothe and revitalize your skin with the Beauty of Joseon Calming Serum. Inspired by traditional Korean herbal medicine, this gentle formula combines 76% Green Tea leaf water with 2% Panthenol to deliver deep hydration while calming irritated or sensitive skin. Rich in antioxidants, it helps protect your skin from environmental stressors and effectively reduces redness, leaving your complexion feeling refreshed, balanced, and incredibly soft. The perfect addition to your daily ritual for a healthy, serene, and radiant glow."
    },
    "32": {
        name: "Cleanser Toner",
        price: "$35.00",
        image: "WhatsApp Image 2026-04-30 at 12.24.52 AM (1).jpeg",
        desc: "Simplify your skincare routine without compromising on results with our Cleanser Toner. This innovative dual-action formula acts as a deep purifier and a skin balancer in one single step. It effectively sweeps away impurities and excess oil while instantly restoring your skin's natural pH and refining pores. Enriched with soothing botanicals, it leaves your face feeling remarkably clean, toned, and perfectly prepared for the next steps of your ritual. The ultimate solution for a streamlined path to a healthy, radiant, and clear glow every single day."
    },
    "33": {
        name: "Medicube PDRN Pink Peptide Serum",
        price: "$45.00",
        image: "photo-2.jpg",
        desc: "Experience a transformative glow with the Medicube PDRN Pink Peptide Serum. This high-performance formula features a potent blend of PDRN and a Triple Peptide complex, specifically engineered to revitalize tired skin and boost elasticity. It works deep within the skin layers to firm, lift, and brighten your complexion, while providing intense, long-lasting hydration. Perfect for those who seek a professional-grade treatment to achieve a resilient, youthful, and healthy radiance every single day."
    },
    "34": {
        name: "BRINGS MI Serum",
        price: "$60.00",
        image: "WhatsApp Image 2026-05-05 at 1.32.27 PM.jpeg",
        desc: "Unlock the secret to resilient skin with the BRINGS MI Serum. This concentrated treatment is masterfully formulated to penetrate deep within the skin layers, providing essential nutrients that boost natural repair and regeneration. Featuring a blend of high-performance actives and soothing botanicals, it targets fine lines and uneven texture while ensuring long-lasting hydration. Lightweight and silky, it absorbs instantly to leave your complexion feeling firm, smooth, and glowing with a healthy, youthful radiance every single day."
    },
    "35": {
        name: "SKIN FIT- All Day Perfect Serum Foundation ",
        price: "$40.00",
        image: "WhatsApp Image 2026-05-05 at 1.32.26 PM.jpeg",
        desc: "Experience the perfect fusion of high-performance makeup and advanced skincare with the SKIN FIT All Day Perfect Serum Foundation. This innovative, lightweight formula acts as a second skin, providing seamless coverage while infusing your complexion with nourishing serum benefits. Engineered for long-lasting wear, it effectively conceals imperfections and evens skin tone without clogging pores. Infused with hydrating agents, it maintains your skin’s moisture balance throughout the day, leaving you with a smooth, natural, and radiant finish that glows from morning to night. The ultimate choice for a breathable, flawless, and healthy look every single day."
    },
    "36": {
        name: "Huda Beauty Silk Balm",
        price: "$45.00",
        image: "WhatsApp Image 2026-04-30 at 6.37.07 PM (2).jpeg",
        desc: "Experience the luxury of liquid silk with the Huda Beauty Silk Balm. This ultra-comfortable liquid lip balm is formulated to provide an instant boost of hydration while leaving your lips with a high-shine, silky finish. Infused with a powerful blend of Hyaluronic Filling Spheres, Soybean, and Licorice Extract, it works to smooth the appearance of fine lines and provide a visible plumping effect without any tingling sensation. Designed for those who seek daily luxury, it leaves your lips feeling incredibly soft, supple, and glowing with a healthy, natural radiance every single day."
    },
    "37": {
        name: "KIKO Milano Liquid Blush",
        price: "$38.00",
        image: "21.jpg",
        desc: "Elevate your radiance with the KIKO Milano Liquid Blush, a weightless formula designed to deliver a natural, healthy-looking flush of color. This high-performance liquid blush blends seamlessly into the skin, offering a buildable glow that stays fresh all day long. Infused with hydrating agents, its silky texture provides a dewy finish that mimics a natural radiance without feeling heavy or sticky. Perfect for achieving a youthful and vibrant look, it’s the ultimate essential for a sophisticated, 'lit-from-within' glow every single day."
    },
    "38": {
        name: "Luxury Nude Lipstick",
        price: "$55.00",
        image: "photo_2026-05-04_00-08-25.jpg",
        desc: "Elevate your natural beauty with our Luxury Nude Lipstick, the ultimate blend of sophisticated color and nourishing care. This masterfully crafted formula features a rich, creamy texture that glides effortlessly onto the lips, providing full coverage with a soft-matte finish. Infused with hydrating botanical oils and antioxidants, it ensures your lips stay comfortable and supple throughout the day without drying. Designed for those who appreciate daily luxury, it offers the perfect 'your lips but better' shade for a healthy, polished, and radiant glow every single day."
    },
    "39": {
        name: "Lip Rescue Jelly Balm",
        price: "$35.00",
        image: "photo_2026-05-04_00-09-17.jpg",
        desc: "Rescue your lips from dryness with our Lip Rescue Jelly Balm. This innovative, high-shine formula features a unique jelly texture that transforms into a protective moisture shield upon contact. Infused with a potent blend of repairing botanicals and hydrating oils, it deeply nourishes and smooths chapped lips, leaving them feeling incredibly soft and supple. Designed for an effortless daily ritual, this balm provides a sheer, healthy-looking glow while strengthening the lips' natural barrier. The perfect recovery treatment for a comfortable, radiant smile every single day."
    },
    "40": {
        name: "Pink Lip Collection",
        price: "$70.00",
        image: "WhatsApp Image 2026-04-30 at 6.37.06 PM.jpeg",
        desc: "Curate your perfect pout with the Pink Lip Collection. This exclusive set features a spectrum of sophisticated pink hues, ranging from soft petals to vibrant berries, designed to complement every skin tone. Each formula is enriched with hydrating botanicals and smoothing agents to provide long-lasting comfort and a polished finish. Whether you're looking for a subtle day-time tint or a bold evening glow, this collection offers the ultimate versatility for a healthy, feminine, and radiant look every single day."
    },
    "41": {
        name: "Pixi On‑the‑Glow Blush",
        price: "$70.00",
        image: "WhatsApp Image 2026-04-30 at 6.37.07 PM (1).jpeg",
        desc: "Experience the perfect pop of color with the Pixi On-the-Glow Blush. This award-winning, multi-use moisture stick is formulated with a unique blend of Ginseng, Aloe Vera, and Fruit Extracts to provide a hint of natural tint while intensely hydrating your skin. Designed for effortless application on both cheeks and lips, its smooth, balm-like texture blends seamlessly for a fresh, dewy finish. The ultimate on-the-go essential for achieving a healthy, vibrant, and radiant glow every single day."
    },
    "42": {
        name: "Blush Radiance Set",
        price: "$80.00",
        image: "1.jpg",
        desc: "Elevate your cheek game with the Blush Radiance Set, a curated duo designed to deliver a multidimensional, lit-from-within glow. This set combines a silky, pigmented powder blush with a luminous highlighter, both formulated to blend seamlessly and enhance your natural bone structure. Infused with skin-loving minerals, the lightweight textures provide a buildable, long-lasting finish that stays vibrant all day. Whether you're aiming for a soft daytime flush or a high-impact evening shimmer, this set is your essential tool for a healthy, sophisticated, and radiant look every single day."
    },
    "43": {
        name: "Calming Green Tea Skincare Set",
        price: "$90.00",
        image: "photo_2026-05-04_00-09-28.jpg",
        desc: "Restore your skin’s inner peace with the Calming Green Tea Skincare Set. This curated collection harnesses the antioxidant power of premium Green Tea to soothe irritation, reduce redness, and provide deep, weightless hydration. Each step of this ritual is designed to detoxify and balance your complexion, leaving it feeling refreshed and resilient against environmental stressors. Perfect for sensitive or tired skin, it delivers a serene, healthy, and radiant glow every single day."
    },
    "44": {
        name: "korean Skin Care",
        price: "$300.00",
        image: "photo-1.jpg",
        desc: "Unlock the secret to a flawless, luminous complexion with our Korean Skin Care collection. Rooted in centuries of herbal tradition and powered by modern scientific innovation, these products focus on deep hydration, skin barrier repair, and a 'lit-from-within' glow. From fermented essences to soothing botanical extracts, each formula is designed to nourish your skin at a cellular level without irritation. Experience the ultimate daily luxury of a balanced, supple, and crystal-clear complexion that radiates a healthy, youthful glow every single day."
    },
    "45": {
        name: "Equilib – Eau Briller Crème",
        price: "$60.00",
        image: "photo_2026-05-05_13-57-49.jpg",
        desc: "Experience the ultimate skin transformation with the Equilib Eau Briller Crème. This advanced formula is engineered to balance and brighten your complexion while delivering intense, long-lasting moisture. Its unique 'Eau Briller' (Brilliant Water) technology ensures a lightweight, fast-absorbing texture that leaves the skin with a sophisticated, lit-from-within luminosity. Infused with high-performance botanical extracts, it works to refine skin texture and restore natural radiance, making it the perfect daily luxury for a healthy, polished, and crystal-clear glow every single day."
    },
    "46": {
        name: "White Nails",
        price: "$20.00",
        image: "31.jpg",
        desc: "Embrace the beauty of simplicity with our White Nails collection. This set offers a crisp, clean, and timeless look that exudes effortless sophistication. Crafted with a high-shine, chip-resistant finish, these nails are designed to provide a fresh and polished appearance that complements any outfit or occasion. Perfect for those who seek a minimalist yet bold statement, they deliver a bright, healthy, and radiant glow to your hands every single day."
    },
    "47": {
        name: "Marble Nails",
        price: "$30.00",
        image: "WhatsApp Image 2026-04-30 at 6.38.52 PM (3).jpeg",
        desc: "Experience the epitome of sophisticated nail art with our Marble Nails collection. Each piece is meticulously designed to mimic the natural, swirling beauty of fine marble, offering a unique and luxurious look for your hands. Crafted with high-quality materials for a flawless, long-lasting finish, these nails combine timeless elegance with a modern artistic touch. The perfect accessory to complement your style and provide a polished, radiant glow to your overall look every single day."
    },
    "48": {
        name: "Pink Nails",
        price: "$40.00",
        image: "WhatsApp Image 2026-04-30 at 6.38.51 PM.jpeg",
        desc: "Indulge in the ultimate feminine charm with our Pink Nails collection. From soft blush tones to elegant rosy hues, this set is designed to add a touch of delicate beauty to your fingertips. Crafted with a high-gloss, durable finish, these nails offer a seamless and sophisticated look that enhances your natural grace. Whether for a romantic evening or a polished daily style, they provide a fresh, healthy, and radiant glow to your hands every single day."
    },
    "49": {
        name: "Marble Nails",
        price: "$10.00",
        image: "WhatsApp Image 2026-04-30 at 6.38.52 PM (2).jpeg",
        desc: "Experience the epitome of sophisticated nail art with our Marble Nails collection. Each piece is meticulously designed to mimic the natural, swirling beauty of fine marble, offering a unique and luxurious look for your hands. Crafted with high-quality materials for a flawless, long-lasting finish, these nails combine timeless elegance with a modern artistic touch. The perfect accessory to complement your style and provide a polished, radiant glow to your overall look every single day."
    },
    "50": {
        name: "Soft Pink Nails",
        price: "$30.00",
        image: "WhatsApp Image 2026-04-30 at 6.38.52 PM.jpeg",
        desc: "Embrace a touch of pure serenity with our Soft Pink Nails collection. This set features a delicate, whisper-light rosy hue designed to enhance the natural beauty of your hands with a soft and subtle elegance. Crafted with a high-shine, durable finish, these nails provide a seamless look that transition perfectly from a professional day at work to a sophisticated evening out. The ultimate choice for a clean, feminine, and healthy radiant glow every single day."
    },
    "51": {
        name: "Green Nails",
        price: "$15.00",
        image: "WhatsApp Image 2026-04-30 at 6.38.52 PM (1).jpeg",
        desc: "Step into the spotlight with our Green Nails collection, a bold yet sophisticated tribute to the beauty of nature. From deep forest emeralds to refreshing minty hues, this set is designed for those who want to make a unique and vibrant statement. Crafted with a premium, long-lasting finish and a brilliant shine, these nails offer a polished look that stands out with effortless grace. The perfect choice to add a fresh, earthy, and radiant glow to your style every single day."
    },
    "52": {
        name: "Hair Restoration Mask",
        price: "$56.00",
        image: "TaShé professional.jpg",
        desc: "Revitalize your hair from root to tip with our Hair Restoration Mask. This professional-grade treatment is meticulously engineered to rescue dry, damaged, and over-processed strands by delivering a concentrated dose of essential proteins and moisture. Infused with a potent blend of repairing botanicals, it penetrates deep into the hair shaft to restore elasticity, reduce breakage, and seal the cuticle for a mirror-like shine. Designed for those who seek daily luxury, this mask transforms tired hair into a silky, strong, and manageable mane that radiates a healthy glow every single day.",
    },
    "53": {
        name: "KIKO Milano Glow Serum",
        price: "$42.00",
        image: "22.jpg",
        desc: "Illuminate your complexion with the KIKO Milano Glow Serum, a lightweight and powerful elixir designed to boost skin’s natural luminosity. Formulated with a sophisticated blend of brightening agents and nourishing extracts, this serum works to even skin tone and provide an instant, 'lit-from-within' radiance. Its fast-absorbing texture prepares the skin for a flawless makeup application while delivering deep hydration that lasts. The ultimate essential for achieving a smooth, vibrant, and healthy glow every single day.",
    },
    "54": {
        name: "Blushea Soft Liquid Blush",
        price: "$30.00",
        image: "23.jpg",
        desc: "Redefine your radiance with the Blushea Soft Liquid Blush, an ultra-lightweight formula that melts into the skin for a cloud-like, seamless finish. This 'airy silk' texture provides a buildable wash of color that looks like a natural flush from within. Infused with skin-softening agents, it stays fresh and vibrant without caking or fading throughout the day. Designed for those who love a minimalist yet sophisticated touch, it leaves your cheeks with a healthy, velvety-soft, and radiant glow every single day.",
    },
    "55": {
        name: "Suger Body Scrub",
        price: "$55.00",
        image: "photo_2026-05-04_00-09-11.jpg",
        desc: "Indulge in a spa-like experience with our Sugar Body Scrub, a gentle yet effective treatment designed to reveal your skin’s natural brilliance. Formulated with fine sugar crystals and a blend of ultra-nourishing oils, it delicately buffs away dry, dull skin cells while locking in essential moisture. This sensory ritual improves skin texture and promotes a smooth, velvety-soft finish that feels incredibly rejuvenated. Perfect for a luxurious self-care moment, it leaves your body with a healthy, polished, and radiant glow every single day.",
    },
};

const params = new URLSearchParams(window.location.search);
const id = params.get('id');

if (id && productsData[id]) {
    const item = productsData[id];
    document.getElementById('product-title').innerText = item.name;
    document.getElementById('product-price').innerText = item.price;
    document.getElementById('product-desc').innerText = item.desc;
    document.getElementById('main-img').src = item.image;
    document.getElementById('main-img').alt = item.name;
} else {
    document.getElementById('product-title').innerText = "Product Not Found";
}
    
// search function

const searchForm = document.querySelector(".search-box");
const searchInput = searchForm ? searchForm.querySelector("input") : null;

if (searchForm && searchInput) {
        searchForm.addEventListener("submit", function (e) {
            e.preventDefault();

            const searchValue = searchInput.value.toLowerCase().trim();

            if (searchValue === "") return;
            window.location.href = `products.html?search=${encodeURIComponent(searchValue)}`;
        });
    }