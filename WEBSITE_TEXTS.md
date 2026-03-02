# SAF.AI Website Text Inventory

This document contains all user-facing text currently used in the website, grouped by section so you can manage copy in one place.

---

## 1) Browser and metadata text

- **PAGE_TITLE**: `SAF.AI | ניהול AI ארגוני מתקדם`

---

## 2) Global logo and accessibility text

### Navbar / Footer logo button
- **LOGO_BUTTON_ARIA_LABEL**: `חזרה לראש העמוד`
- **LOGO_IMAGE_ALT**: `SAF.AI by Cambium`

### Logo SVG internal text (`public/saf-ai-logo.svg`)
- **LOGO_SVG_TITLE**: `SAF.AI by Cambium logo`
- **LOGO_SVG_DESC**: `Shield emblem with SAF.AI by Cambium wordmark`
- **LOGO_SVG_WORDMARK_1**: `SAF`
- **LOGO_SVG_WORDMARK_2**: `.AI`
- **LOGO_SVG_WORDMARK_3**: `by Cambium`

---

## 3) Header / navigation (`App.tsx`)

- **NAV_LINK_HOME**: `בית`
- **NAV_LINK_SOLUTIONS**: `פתרונות`
- **NAV_LINK_CONTACT**: `צור קשר`
- **NAV_CTA_BOOK_DEMO**: `תיאום דמו`

---

## 4) Hero section (`components/Hero.tsx`)

- **HERO_BADGE**: `Enterprise Grade AI Gateway`
- **HERO_TITLE_LINE_1**: `לנהל את ה-AI בארגון:`
- **HERO_TITLE_LINE_2**: `מאובדן שליטה לחיסכון ובקרה`
- **HERO_DESCRIPTION_LINE_1**: `Gateway מאובטח המאחד את כל מודלי השפה (LLMs) תחת ממשק ניהול אחד.`
- **HERO_DESCRIPTION_LINE_2**: `שליטה בתקציב, אבטחה מחמירה וגמישות טכנולוגית ללא פשרות.`
- **HERO_PRIMARY_CTA**: `תיאום Demo טכני`
- **HERO_SECONDARY_CTA**: `איך זה עובד`

### Hero architecture diagram labels
- **HERO_HUB_TITLE**: `SAF.AI GATEWAY`
- **HERO_POLICY_1**: `Agent Policies`
- **HERO_POLICY_2**: `Content Safety`
- **HERO_POLICY_3**: `Token Control`
- **HERO_POLICY_4**: `much more & ...`
- **HERO_NODE_1**: `Customer Assistants`
- **HERO_NODE_2**: `Conversational Agents`
- **HERO_NODE_3**: `Multi Agent Systems`
- **HERO_NODE_4**: `Data & Vector Stores`
- **HERO_NODE_5**: `AI Models & Services`
- **HERO_NODE_6**: `Tools & Functions`

---

## 5) Chat demo section (`components/ChatSection.tsx`)

### Section UI text
- **CHAT_SECTION_TITLE**: `הדגמת חוויה (Chat Interface)`
- **CHAT_SECTION_SUBTITLE**: `ממשק דמוי צ'אט חי המדגים פקודות ניהול מהירות.`
- **CHAT_HEADER_TITLE**: `Safium Assistant`
- **CHAT_HEADER_SUBTITLE**: `Secured via SAF.AI Gateway`
- **CHAT_INPUT_PLACEHOLDER**: `הקלד כאן פקודה או שאלה...`

### Quick action button labels (visible)
- **CHAT_QUICK_ACTION_1_LABEL**: `"הצג דוח עלויות"`
- **CHAT_QUICK_ACTION_2_LABEL**: `"החלף מודל ל-Claude 3.5"`
- **CHAT_QUICK_ACTION_3_LABEL**: `"בדוק מדיניות אבטחה"`

### Quick action submitted messages (visible in chat after click)
- **CHAT_QUICK_ACTION_1_MESSAGE**: `הצג דוח עלויות`
- **CHAT_QUICK_ACTION_2_MESSAGE**: `החלף מודל ל-Claude 3.5`
- **CHAT_QUICK_ACTION_3_MESSAGE**: `בדוק מדיניות אבטחה ו-PII`

### Chat initial and scripted responses
- **CHAT_INITIAL_ASSISTANT_MESSAGE**: `ברוכים הבאים ל-Safium. איך אוכל לעזור היום?`
- **CHAT_TRIGGERED_MESSAGE_FROM_HERO**: `איך זה עובד?`

- **CHAT_RESPONSE_COSTS**:  
  `דוח עלויות לדוגמה: 23% חיסכון חודשי בזכות ניתוב אוטומטי למודל המתאים, 17% פחות קריאות כפולות באמצעות Semantic Cache, וחריגות תקציב נחסמו בזמן אמת.`

- **CHAT_RESPONSE_MODEL_SWITCH**:  
  `החלפת מודל מתבצעת דרך שכבת Gateway אחידה (OpenAI-compatible). המשמעות: מעבר בין ספקים בלי שינוי בקוד האפליקציה ועם Guardrails זהים.`

- **CHAT_RESPONSE_SECURITY**:  
  `Safium מפעילה מדיניות אבטחה ארגונית לכל בקשה: סינון מידע רגיש, הרשאות RBAC לפי צוותים, ולוגים מלאים ל-SOC2/HIPAA עם קוד בקרה לכל אירוע.`

- **CHAT_RESPONSE_HOW_IT_WORKS**:  
  `בקצרה: כל קריאת AI עוברת דרך SAF.AI Gateway, שם מופעלים ניתוב מודלים, מגבלות תקציב, בדיקות תוכן, ולוגים. כך מקבלים שליטה, אבטחה וחיסכון במקום אחד.`

- **CHAT_RESPONSE_FALLBACK**:  
  `קיבלתי את הבקשה. בדמו הזה התשובות סימולטיביות, אבל בארגון אמיתי אפשר לחבר את הממשק ל-LLM אמיתי דרך ה-Gateway עם אותן מדיניות ואבטחה.`

---

## 6) Threat carousel section (`components/ThreatCarousel.tsx` + `constants.tsx`)

### Section heading and helper text
- **THREATS_TITLE_LINE_1**: `כאוס ה-AI הארגוני:`
- **THREATS_TITLE_LINE_2**: `ניטור ובקרה אינסופית.`
- **THREATS_SUBTITLE**: `האיומים נמצאים שם תמיד. השתמשו בחצים כדי לדפדף ולראות איך Safium עוצרת כל איום בזמן אמת.`
- **THREAT_CARD_ACTION_LABEL**: `לחץ לפתרון SAF.AI`
- **THREAT_CARD_BACK_TITLE**: `הפתרון של Safium`

### Threat cards (problem + solution)
1. **THREAT_01_PROBLEM**: `הבור התקציבי`  
   **THREAT_01_SOLUTION**: `מגבלות תקציב רב-שכבתיות (Hard Limits) והתראות בזמן אמת.`

2. **THREAT_02_PROBLEM**: `דליפת מפתחות`  
   **THREAT_02_SOLUTION**: `רוטציית מפתחות אוטומטית ללא צורך בשינוי קוד האפליקציה.`

3. **THREAT_03_PROBLEM**: `זליגת מידע רגיש`  
   **THREAT_03_SOLUTION**: `Enterprise Guardrails לסינון PII ומידע מסחרי בזמן אמת.`

4. **THREAT_04_PROBLEM**: `קריסת שירות`  
   **THREAT_04_SOLUTION**: `Dynamic Fallback – מעבר אוטומטי למודל חלופי תוך מילי-שניות.`

5. **THREAT_05_PROBLEM**: `החשכה ניהולית`  
   **THREAT_05_SOLUTION**: `Audit Logging מרכזי ל-Compliance מלא (HIPAA/SOC2).`

6. **THREAT_06_PROBLEM**: `בזבוז משאבים`  
   **THREAT_06_SOLUTION**: `Semantic Caching – זיהוי דמיון סמנטי מעל 85% וחיסכון בעלויות API.`

7. **THREAT_07_PROBLEM**: `מודל לא מתאים`  
   **THREAT_07_SOLUTION**: `החלפת מודל בפורמט OpenAI אחיד ללא שינויי קוד.`

8. **THREAT_08_PROBLEM**: `קושי ניהולי`  
   **THREAT_08_SOLUTION**: `Admin UI מרכזי לניהול כלל הספקים והמפתחות במקום אחד.`

9. **THREAT_09_PROBLEM**: `איבוד שליטה`  
   **THREAT_09_SOLUTION**: `Key Usage Tracking והרשאות RBAC מלאות לכל מפתח.`

10. **THREAT_10_PROBLEM**: `שימוש יתר`  
    **THREAT_10_SOLUTION**: `הגדרת Rate Limits מדויקים למניעת עומסים וחריגות ספקים.`

11. **THREAT_11_PROBLEM**: `איום הניתוק`  
    **THREAT_11_SOLUTION**: `אינטגרציה מלאה לכלי הניטור: Prometheus, DataDog ו-CloudWatch.`

---

## 7) Video showcase section (`components/Showcase.tsx` + `constants.tsx`)

- **SHOWCASE_TITLE**: `Video Showcase`
- **SHOWCASE_VIDEO_TITLE_1**: `Unified Hub`
- **SHOWCASE_VIDEO_TITLE_2**: `Key Management`
- **SHOWCASE_VIDEO_TITLE_3**: `Protection in Action`
- **SHOWCASE_MODAL_CLOSE**: `סגור`

---

## 8) Social proof section (`components/SocialProof.tsx` + `constants.tsx`)

- **SOCIAL_PROOF_TITLE**: `הסטנדרט של הגופים המובילים בישראל`
- **SOCIAL_CLIENT_1**: `Matrix`
- **SOCIAL_CLIENT_2**: `התעשייה האווירית (IAI)`
- **SOCIAL_CLIENT_3**: `מדינת ישראל`
- **SOCIAL_CLIENT_4**: `אסותא`
- **SOCIAL_CLIENT_1_ALT**: `Matrix logo`
- **SOCIAL_CLIENT_2_ALT**: `IAI logo`
- **SOCIAL_CLIENT_3_ALT**: `State of Israel emblem`
- **SOCIAL_CLIENT_4_ALT**: `Assuta hospital logo`

---

## 9) Contact section (`components/ContactSection.tsx`)

- **CONTACT_BRAND_LINE**: `Cambium - Tailor Made AI`
- **CONTACT_HEADLINE**: `"אנחנו לא רק מספקים כלי, אנחנו בונים את הפתרון שלכם."`
- **CONTACT_DESCRIPTION**: `פיתוח Guardrails ייעודיים, אינטגרציות Custom לסביבות הארגון והתקנות Private Cloud מאובטחות.`

### Contact bullets
- **CONTACT_BULLET_1**: `התאמה אישית מלאה לצרכי הארגון`
- **CONTACT_BULLET_2**: `תמיכה בפריסה מקומית (On-Prem)`
- **CONTACT_BULLET_3**: `אינטגרציה חלקה ל-CRM ומערכות פנימיות`

### WhatsApp CTA card
- **CONTACT_CTA_TITLE**: `תיאום דמו טכני מהיר`
- **CONTACT_CTA_DESCRIPTION_LINE_1**: `לחצו למעבר ישיר לוואטסאפ לשיחה עם מומחה AI שלנו.`
- **CONTACT_CTA_DESCRIPTION_LINE_2**: `אנחנו זמינים לכל שאלה טכנית או תיאום פגישה.`
- **CONTACT_CTA_BUTTON**: `שלחו לנו הודעה בוואטסאפ`

### WhatsApp prefilled message text
- **WHATSAPP_PREFILLED_MESSAGE**: `היי, אשמח לקבל פרטים נוספים על מערכת Safium ותיאום דמו טכני.`

---

## 10) Footer section (`components/Footer.tsx`)

- **FOOTER_COMPANY_LINE**: `Managed by Cambium Technologies Ltd.`
- **FOOTER_LINK_PRIVACY**: `Privacy Policy`
- **FOOTER_LINK_TERMS**: `Terms of Service`
- **FOOTER_LINK_COMPLIANCE**: `Compliance`
- **FOOTER_COPYRIGHT**: `© {YEAR} SAF.AI Safium. All rights reserved.`

---

## 11) Notes for copy management

- Update text in these files:
  - `App.tsx`
  - `constants.tsx`
  - `components/Hero.tsx`
  - `components/ChatSection.tsx`
  - `components/ThreatCarousel.tsx`
  - `components/Showcase.tsx`
  - `components/SocialProof.tsx`
  - `components/ContactSection.tsx`
  - `components/Footer.tsx`
  - `index.html`
  - `public/saf-ai-logo.svg`

