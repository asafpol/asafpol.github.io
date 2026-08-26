function e(){return`
    :host {
      all: initial;
      font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, sans-serif;
      font-size: 16px;
      line-height: 1.5;
      color: #1a1a2e;
    }
    *, *::before, *::after {
      box-sizing: border-box;
      margin: 0;
      padding: 0;
    }

    .anid-trigger {
      position: fixed;
      z-index: 2147483647;
      width: 56px;
      height: 56px;
      border-radius: 50%;
      background: #1565c0;
      border: 3px solid #fff;
      box-shadow: 0 4px 16px rgba(0,0,0,0.3);
      cursor: pointer;
      display: flex;
      align-items: center;
      justify-content: center;
      transition: transform 0.2s, box-shadow 0.2s;
      touch-action: none;
    }
    .anid-trigger:hover, .anid-trigger:focus-visible {
      transform: scale(1.1);
      box-shadow: 0 6px 24px rgba(0,0,0,0.4);
    }
    .anid-trigger:focus-visible {
      outline: 3px solid #ffab00;
      outline-offset: 2px;
    }
    .anid-trigger svg {
      width: 28px;
      height: 28px;
      fill: #fff;
    }
    .anid-trigger[aria-expanded="true"] {
      background: #c62828;
    }
    .anid-trigger[aria-expanded="true"] svg {
      display: none;
    }
    .anid-trigger[aria-expanded="true"]::after {
      content: '✕';
      color: #fff;
      font-size: 22px;
      font-weight: bold;
    }

    .anid-panel {
      position: fixed;
      z-index: 2147483646;
      width: 380px;
      max-width: calc(100vw - 24px);
      max-height: calc(100vh - 100px);
      background: #ffffff;
      border-radius: 16px;
      box-shadow: 0 8px 40px rgba(0,0,0,0.25);
      overflow: hidden;
      display: flex;
      flex-direction: column;
      opacity: 0;
      visibility: hidden;
      transform: translateY(20px) scale(0.95);
      transition: opacity 0.25s ease, transform 0.25s ease, visibility 0.25s;
    }
    .anid-panel.anid-open {
      opacity: 1;
      visibility: visible;
      transform: translateY(0) scale(1);
    }

    .anid-panel-header {
      display: flex;
      align-items: center;
      justify-content: space-between;
      padding: 16px 20px;
      background: #1565c0;
      color: #fff;
      gap: 8px;
      flex-shrink: 0;
    }
    .anid-panel-title {
      font-size: 18px;
      font-weight: 700;
      flex: 1;
    }
    .anid-lang-select {
      background: rgba(255,255,255,0.2);
      border: 1px solid rgba(255,255,255,0.4);
      color: #fff;
      padding: 4px 8px;
      border-radius: 6px;
      font-size: 13px;
      cursor: pointer;
    }
    .anid-lang-select option {
      color: #1a1a2e;
      background: #fff;
    }
    .anid-close-btn {
      background: none;
      border: none;
      color: #fff;
      font-size: 22px;
      cursor: pointer;
      width: 36px;
      height: 36px;
      border-radius: 50%;
      display: flex;
      align-items: center;
      justify-content: center;
      transition: background 0.15s;
    }
    .anid-close-btn:hover, .anid-close-btn:focus-visible {
      background: rgba(255,255,255,0.2);
    }
    .anid-close-btn:focus-visible {
      outline: 2px solid #ffab00;
    }

    .anid-panel-body {
      overflow-y: auto;
      flex: 1;
      padding: 8px 0;
      scrollbar-width: thin;
      scrollbar-color: #ccc transparent;
    }
    .anid-panel-body::-webkit-scrollbar {
      width: 6px;
    }
    .anid-panel-body::-webkit-scrollbar-track {
      background: transparent;
    }
    .anid-panel-body::-webkit-scrollbar-thumb {
      background: #ccc;
      border-radius: 3px;
    }

    .anid-category {
      border-bottom: 1px solid #eee;
    }
    .anid-category:last-child {
      border-bottom: none;
    }
    .anid-category-header {
      display: flex;
      align-items: center;
      gap: 10px;
      padding: 12px 20px;
      background: none;
      border: none;
      width: 100%;
      cursor: pointer;
      font-size: 15px;
      font-weight: 600;
      color: #1a1a2e;
      text-align: inherit;
      transition: background 0.15s;
    }
    .anid-category-header:hover {
      background: #f5f5f5;
    }
    .anid-category-header:focus-visible {
      outline: 2px solid #1565c0;
      outline-offset: -2px;
    }
    .anid-category-icon {
      font-size: 20px;
      width: 28px;
      text-align: center;
      flex-shrink: 0;
    }
    .anid-category-chevron {
      margin-inline-start: auto;
      transition: transform 0.2s;
      font-size: 12px;
    }
    .anid-category[data-expanded="true"] .anid-category-chevron {
      transform: rotate(180deg);
    }
    .anid-category-content {
      max-height: 0;
      overflow: hidden;
      transition: max-height 0.3s ease;
    }
    .anid-category[data-expanded="true"] .anid-category-content {
      max-height: 2000px;
    }

    .anid-feature {
      display: flex;
      align-items: center;
      padding: 10px 20px 10px 48px;
      gap: 12px;
      min-height: 44px;
    }
    [dir="rtl"] .anid-feature {
      padding: 10px 48px 10px 20px;
    }
    .anid-feature-label {
      flex: 1;
      font-size: 14px;
      color: #333;
    }

    .anid-toggle {
      position: relative;
      width: 44px;
      height: 24px;
      flex-shrink: 0;
    }
    .anid-toggle input {
      opacity: 0;
      width: 0;
      height: 0;
      position: absolute;
    }
    .anid-toggle-slider {
      position: absolute;
      inset: 0;
      background: #ccc;
      border-radius: 12px;
      cursor: pointer;
      transition: background 0.2s;
    }
    .anid-toggle-slider::before {
      content: '';
      position: absolute;
      width: 20px;
      height: 20px;
      border-radius: 50%;
      background: #fff;
      top: 2px;
      left: 2px;
      transition: transform 0.2s;
    }
    [dir="rtl"] .anid-toggle-slider::before {
      left: auto;
      right: 2px;
    }
    .anid-toggle input:checked + .anid-toggle-slider {
      background: #1565c0;
    }
    .anid-toggle input:checked + .anid-toggle-slider::before {
      transform: translateX(20px);
    }
    [dir="rtl"] .anid-toggle input:checked + .anid-toggle-slider::before {
      transform: translateX(-20px);
    }
    .anid-toggle input:focus-visible + .anid-toggle-slider {
      outline: 2px solid #ffab00;
      outline-offset: 2px;
    }

    .anid-btn-group {
      display: flex;
      flex-wrap: wrap;
      gap: 6px;
    }
    .anid-btn {
      padding: 6px 12px;
      border: 1px solid #ccc;
      border-radius: 6px;
      background: #f5f5f5;
      color: #333;
      cursor: pointer;
      font-size: 13px;
      min-width: 44px;
      min-height: 32px;
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
      transition: background 0.15s, border-color 0.15s;
    }
    .anid-btn:hover {
      background: #e0e0e0;
    }
    .anid-btn:focus-visible {
      outline: 2px solid #1565c0;
      outline-offset: 1px;
    }
    .anid-btn.anid-active {
      background: #1565c0;
      color: #fff;
      border-color: #1565c0;
    }

    .anid-slider-wrap {
      display: flex;
      align-items: center;
      gap: 8px;
      width: 120px;
    }
    .anid-slider {
      width: 100%;
      height: 4px;
      -webkit-appearance: none;
      appearance: none;
      background: #ddd;
      border-radius: 2px;
      outline: none;
    }
    .anid-slider::-webkit-slider-thumb {
      -webkit-appearance: none;
      width: 18px;
      height: 18px;
      border-radius: 50%;
      background: #1565c0;
      cursor: pointer;
    }
    .anid-slider::-moz-range-thumb {
      width: 18px;
      height: 18px;
      border: none;
      border-radius: 50%;
      background: #1565c0;
      cursor: pointer;
    }
    .anid-slider:focus-visible {
      outline: 2px solid #ffab00;
      outline-offset: 2px;
    }

    .anid-panel-footer {
      padding: 12px 20px;
      border-top: 1px solid #eee;
      display: flex;
      justify-content: center;
      flex-shrink: 0;
    }
    .anid-reset-btn {
      padding: 8px 24px;
      border: 2px solid #c62828;
      border-radius: 8px;
      background: transparent;
      color: #c62828;
      font-size: 14px;
      font-weight: 600;
      cursor: pointer;
      min-height: 44px;
      transition: background 0.15s, color 0.15s;
    }
    .anid-reset-btn:hover {
      background: #c62828;
      color: #fff;
    }
    .anid-reset-btn:focus-visible {
      outline: 2px solid #ffab00;
      outline-offset: 2px;
    }

    .anid-sub-options {
      padding: 4px 20px 8px 64px;
    }
    [dir="rtl"] .anid-sub-options {
      padding: 4px 64px 8px 20px;
    }

    .anid-heading-list, .anid-landmark-list {
      list-style: none;
      padding: 4px 20px 8px 48px;
      max-height: 200px;
      overflow-y: auto;
    }
    [dir="rtl"] .anid-heading-list, [dir="rtl"] .anid-landmark-list {
      padding: 4px 48px 8px 20px;
    }
    .anid-heading-list li, .anid-landmark-list li {
      margin: 2px 0;
    }
    .anid-heading-list button, .anid-landmark-list button {
      background: none;
      border: none;
      color: #1565c0;
      cursor: pointer;
      font-size: 13px;
      padding: 4px 8px;
      border-radius: 4px;
      text-align: inherit;
      width: 100%;
      min-height: 32px;
      transition: background 0.15s;
    }
    .anid-heading-list button:hover, .anid-landmark-list button:hover {
      background: #e3f2fd;
    }
    .anid-heading-list button:focus-visible, .anid-landmark-list button:focus-visible {
      outline: 2px solid #1565c0;
    }

    .anid-overlay {
      position: fixed;
      z-index: 2147483645;
      top: 0; left: 0; right: 0; bottom: 0;
      background: rgba(0,0,0,0.85);
      color: #eee;
      overflow-y: auto;
      padding: 40px 20px;
      font-family: monospace;
      font-size: 14px;
      line-height: 1.8;
      white-space: pre-wrap;
    }
    .anid-overlay-close {
      position: fixed;
      top: 16px;
      right: 16px;
      z-index: 2147483646;
      background: #c62828;
      color: #fff;
      border: none;
      width: 44px;
      height: 44px;
      border-radius: 50%;
      font-size: 20px;
      cursor: pointer;
    }

    .anid-statement-modal {
      position: fixed;
      z-index: 2147483645;
      top: 50%; left: 50%;
      transform: translate(-50%, -50%);
      width: 600px;
      max-width: calc(100vw - 40px);
      max-height: calc(100vh - 80px);
      background: #fff;
      border-radius: 12px;
      box-shadow: 0 16px 48px rgba(0,0,0,0.3);
      overflow-y: auto;
      padding: 32px;
    }
    .anid-statement-modal h2 {
      font-size: 22px;
      margin-bottom: 16px;
      color: #1a1a2e;
    }
    .anid-statement-modal p {
      margin-bottom: 12px;
      color: #333;
      line-height: 1.7;
    }
    .anid-statement-backdrop {
      position: fixed;
      z-index: 2147483644;
      inset: 0;
      background: rgba(0,0,0,0.5);
    }

    .anid-shortcut {
      display: inline-block;
      font-size: 10px;
      font-family: inherit;
      padding: 1px 5px;
      margin-inline-start: 6px;
      background: #eee;
      color: #666;
      border: 1px solid #ddd;
      border-radius: 3px;
      vertical-align: middle;
      line-height: 1.4;
    }

    .anid-live-region {
      position: absolute;
      width: 1px;
      height: 1px;
      overflow: hidden;
      clip: rect(0,0,0,0);
      white-space: nowrap;
    }

    @media (max-width: 768px) {
      .anid-panel {
        width: 100vw !important;
        max-width: 100vw !important;
        height: 100vh !important;
        max-height: 100vh !important;
        border-radius: 0 !important;
        top: 0 !important;
        left: 0 !important;
        right: 0 !important;
        bottom: 0 !important;
      }
    }
  `}var t={he:{dir:`rtl`,panelTitle:`הנגשת אתר`,close:`סגור`,resetAll:`איפוס הכל`,categoryVision:`תצוגה וראייה`,categoryNavigation:`ניווט וקריאה`,categoryMedia:`מדיה ותוכן`,categoryCompliance:`תאימות ומידע`,fontSize:`גודל גופן`,fontSizeIncrease:`הגדל`,fontSizeDecrease:`הקטן`,fontSizeReset:`איפוס`,highContrast:`ניגודיות גבוהה`,contrastDark:`כהה`,contrastLight:`בהיר`,contrastInvert:`הפוך`,darkMode:`מצב כהה`,monochrome:`גווני אפור`,saturation:`רוויית צבע`,textSpacing:`מרווחי טקסט`,dyslexiaFont:`גופן לדיסלקציה`,hideImages:`הסתר תמונות`,colorBlindSim:`סימולציית עיוורון צבעים`,protanopia:`פרוטנופיה (אדום)`,deuteranopia:`דויטרנופיה (ירוק)`,tritanopia:`טריטנופיה (כחול)`,keyboardNav:`ניווט מקלדת`,focusIndicators:`מדגישי מיקוד`,headingStructure:`מפת כותרות`,pageStructure:`מבנה דף`,readingGuide:`סרגל קריאה`,lineMask:`מסכת שורה`,bigCursor:`סמן גדול`,screenReaderPreview:`תצוגת קורא מסך`,linkHighlight:`הדגשת קישורים`,imageAltText:`טקסט חלופי לתמונות`,stopAnimations:`עצור אנימציות`,muteSounds:`השתק צלילים`,accessibilityStatement:`הצהרת נגישות`,complianceBadge:`תג תאימות`,generateStatement:`צור הצהרת נגישות`,generateBadge:`צור תג`,language:`שפה`,on:`פועל`,off:`כבוי`,openPanel:`פתח תפריט נגישות`,closePanel:`סגור תפריט נגישות`,jumpTo:`קפוץ אל`,level:`רמה`,noHeadings:`לא נמצאו כותרות`,noLandmarks:`לא נמצאו אזורים`,main:`ראשי`,header:`כותרת עליונה`,footer:`כותרת תחתונה`,nav:`ניווט`,aside:`צדדי`,form:`טופס`,search:`חיפוש`,statementTitle:`הצהרת נגישות`,statementIntro:`אנו שואפים להנגיש את האתר לכלל האוכלוסייה, לרבות אנשים עם מוגבלויות, בהתאם לתקן הישראלי ת"י 5568 ולהנחיות WCAG 2.1 ברמה AA.`,statementCoordinator:`רכז נגישות`,statementPhone:`טלפון`,statementEmail:`דוא"ל`,statementLastAudit:`תאריך בדיקת נגישות אחרונה`,statementAccommodations:`התאמות נגישות שבוצעו`,copied:`הועתק ללוח`,embedCode:`קוד להטמעה`,copyCode:`העתק`,badgeCompliant:`תואם תקן`,poweredBy:`מופעל על ידי`,contrastAndColors:`התאמת ניגודיות וצבעים`,fontSizeAdjustment:`שינוי גודל גופן`,keyboardNavigation:`ניווט באמצעות מקלדת`,screenReaderCompat:`תאימות לקוראי מסך`,linkHighlighting:`הדגשת קישורים`,animationControl:`עצירת אנימציות`,noAltText:`(ללא טקסט חלופי)`,ttsHover:`הקראה בריחוף`,ttsSelection:`הקראת טקסט מסומן`,ttsReadPage:`הקראת הדף`,ttsStop:`עצור הקראה`,ttsReading:`מקריא...`,shortcutPanelToggle:`פתח/סגור תפריט נגישות`,keyboardShortcuts:`קיצורי מקלדת`},en:{dir:`ltr`,panelTitle:`Accessibility`,close:`Close`,resetAll:`Reset All`,categoryVision:`Vision & Display`,categoryNavigation:`Navigation & Reading`,categoryMedia:`Media & Content`,categoryCompliance:`Compliance & Info`,fontSize:`Font Size`,fontSizeIncrease:`Increase`,fontSizeDecrease:`Decrease`,fontSizeReset:`Reset`,highContrast:`High Contrast`,contrastDark:`Dark`,contrastLight:`Light`,contrastInvert:`Invert`,darkMode:`Dark Mode`,monochrome:`Grayscale`,saturation:`Color Saturation`,textSpacing:`Text Spacing`,dyslexiaFont:`Dyslexia Font`,hideImages:`Hide Images`,colorBlindSim:`Color Blind Simulation`,protanopia:`Protanopia (Red)`,deuteranopia:`Deuteranopia (Green)`,tritanopia:`Tritanopia (Blue)`,keyboardNav:`Keyboard Navigation`,focusIndicators:`Focus Indicators`,headingStructure:`Heading Map`,pageStructure:`Page Structure`,readingGuide:`Reading Guide`,lineMask:`Line Focus`,bigCursor:`Big Cursor`,screenReaderPreview:`Screen Reader Preview`,linkHighlight:`Highlight Links`,imageAltText:`Image Alt Text`,stopAnimations:`Stop Animations`,muteSounds:`Mute Sounds`,accessibilityStatement:`Accessibility Statement`,complianceBadge:`Compliance Badge`,generateStatement:`Generate Statement`,generateBadge:`Generate Badge`,language:`Language`,on:`On`,off:`Off`,openPanel:`Open accessibility menu`,closePanel:`Close accessibility menu`,jumpTo:`Jump to`,level:`Level`,noHeadings:`No headings found`,noLandmarks:`No landmarks found`,main:`Main`,header:`Header`,footer:`Footer`,nav:`Navigation`,aside:`Aside`,form:`Form`,search:`Search`,statementTitle:`Accessibility Statement`,statementIntro:`We strive to make this website accessible to all users, including people with disabilities, in accordance with Israeli Standard SI 5568 and WCAG 2.1 Level AA guidelines.`,statementCoordinator:`Accessibility Coordinator`,statementPhone:`Phone`,statementEmail:`Email`,statementLastAudit:`Last accessibility audit date`,statementAccommodations:`Accessibility accommodations performed`,copied:`Copied to clipboard`,embedCode:`Embed code`,copyCode:`Copy`,badgeCompliant:`Compliant`,poweredBy:`Powered by`,contrastAndColors:`Contrast and color adjustments`,fontSizeAdjustment:`Font size adjustment`,keyboardNavigation:`Keyboard navigation`,screenReaderCompat:`Screen reader compatibility`,linkHighlighting:`Link highlighting`,animationControl:`Animation control`,noAltText:`(no alt text)`,ttsHover:`Read on Hover`,ttsSelection:`Read Selection`,ttsReadPage:`Read Page Aloud`,ttsStop:`Stop Reading`,ttsReading:`Reading...`,shortcutPanelToggle:`Toggle accessibility menu`,keyboardShortcuts:`Keyboard Shortcuts`},ar:{dir:`rtl`,panelTitle:`إمكانية الوصول`,close:`إغلاق`,resetAll:`إعادة تعيين الكل`,categoryVision:`العرض والرؤية`,categoryNavigation:`التنقل والقراءة`,categoryMedia:`الوسائط والمحتوى`,categoryCompliance:`الامتثال والمعلومات`,fontSize:`حجم الخط`,fontSizeIncrease:`تكبير`,fontSizeDecrease:`تصغير`,fontSizeReset:`إعادة تعيين`,highContrast:`تباين عالي`,contrastDark:`داكن`,contrastLight:`فاتح`,contrastInvert:`معكوس`,darkMode:`الوضع الداكن`,monochrome:`تدرج رمادي`,saturation:`تشبع اللون`,textSpacing:`تباعد النص`,dyslexiaFont:`خط عسر القراءة`,hideImages:`إخفاء الصور`,colorBlindSim:`محاكاة عمى الألوان`,protanopia:`بروتانوبيا (أحمر)`,deuteranopia:`ديوتيرانوبيا (أخضر)`,tritanopia:`تريتانوبيا (أزرق)`,keyboardNav:`التنقل بلوحة المفاتيح`,focusIndicators:`مؤشرات التركيز`,headingStructure:`خريطة العناوين`,pageStructure:`هيكل الصفحة`,readingGuide:`دليل القراءة`,lineMask:`تركيز السطر`,bigCursor:`مؤشر كبير`,screenReaderPreview:`معاينة قارئ الشاشة`,linkHighlight:`تمييز الروابط`,imageAltText:`نص بديل للصور`,stopAnimations:`إيقاف الرسوم المتحركة`,muteSounds:`كتم الأصوات`,accessibilityStatement:`بيان إمكانية الوصول`,complianceBadge:`شارة الامتثال`,generateStatement:`إنشاء بيان`,generateBadge:`إنشاء شارة`,language:`اللغة`,on:`مفعّل`,off:`معطّل`,openPanel:`فتح قائمة إمكانية الوصول`,closePanel:`إغلاق قائمة إمكانية الوصول`,jumpTo:`انتقل إلى`,level:`مستوى`,noHeadings:`لم يتم العثور على عناوين`,noLandmarks:`لم يتم العثور على معالم`,main:`رئيسي`,header:`الرأس`,footer:`التذييل`,nav:`التنقل`,aside:`جانبي`,form:`نموذج`,search:`بحث`,statementTitle:`بيان إمكانية الوصول`,statementIntro:`نسعى جاهدين لجعل هذا الموقع متاحًا لجميع المستخدمين، بما في ذلك الأشخاص ذوي الإعاقة، وفقًا للمعيار الإسرائيلي SI 5568 وإرشادات WCAG 2.1 مستوى AA.`,statementCoordinator:`منسق إمكانية الوصول`,statementPhone:`هاتف`,statementEmail:`بريد إلكتروني`,statementLastAudit:`تاريخ آخر فحص لإمكانية الوصول`,statementAccommodations:`تسهيلات إمكانية الوصول المنفذة`,copied:`تم النسخ إلى الحافظة`,embedCode:`كود التضمين`,copyCode:`نسخ`,badgeCompliant:`متوافق`,poweredBy:`مدعوم من`,contrastAndColors:`تعديلات التباين والألوان`,fontSizeAdjustment:`تعديل حجم الخط`,keyboardNavigation:`التنقل بلوحة المفاتيح`,screenReaderCompat:`التوافق مع قارئ الشاشة`,linkHighlighting:`تمييز الروابط`,animationControl:`التحكم في الرسوم المتحركة`,noAltText:`(لا يوجد نص بديل)`,ttsHover:`القراءة عند التمرير`,ttsSelection:`قراءة النص المحدد`,ttsReadPage:`قراءة الصفحة بصوت عالٍ`,ttsStop:`إيقاف القراءة`,ttsReading:`جارِ القراءة...`,shortcutPanelToggle:`فتح/إغلاق قائمة إمكانية الوصول`,keyboardShortcuts:`اختصارات لوحة المفاتيح`},ru:{dir:`ltr`,panelTitle:`Доступность`,close:`Закрыть`,resetAll:`Сбросить всё`,categoryVision:`Вид и дисплей`,categoryNavigation:`Навигация и чтение`,categoryMedia:`Медиа и контент`,categoryCompliance:`Соответствие и информация`,fontSize:`Размер шрифта`,fontSizeIncrease:`Увеличить`,fontSizeDecrease:`Уменьшить`,fontSizeReset:`Сброс`,highContrast:`Высокая контрастность`,contrastDark:`Тёмный`,contrastLight:`Светлый`,contrastInvert:`Инверсия`,darkMode:`Тёмный режим`,monochrome:`Оттенки серого`,saturation:`Насыщенность цвета`,textSpacing:`Интервалы текста`,dyslexiaFont:`Шрифт для дислексии`,hideImages:`Скрыть изображения`,colorBlindSim:`Симуляция дальтонизма`,protanopia:`Протанопия (красный)`,deuteranopia:`Дейтеранопия (зелёный)`,tritanopia:`Тританопия (синий)`,keyboardNav:`Навигация с клавиатуры`,focusIndicators:`Индикаторы фокуса`,headingStructure:`Карта заголовков`,pageStructure:`Структура страницы`,readingGuide:`Линейка чтения`,lineMask:`Фокус на строке`,bigCursor:`Большой курсор`,screenReaderPreview:`Предпросмотр для чтеца экрана`,linkHighlight:`Выделить ссылки`,imageAltText:`Альт-текст изображений`,stopAnimations:`Остановить анимации`,muteSounds:`Отключить звуки`,accessibilityStatement:`Декларация доступности`,complianceBadge:`Значок соответствия`,generateStatement:`Создать декларацию`,generateBadge:`Создать значок`,language:`Язык`,on:`Вкл`,off:`Выкл`,openPanel:`Открыть меню доступности`,closePanel:`Закрыть меню доступности`,jumpTo:`Перейти к`,level:`Уровень`,noHeadings:`Заголовки не найдены`,noLandmarks:`Ориентиры не найдены`,main:`Основной`,header:`Шапка`,footer:`Подвал`,nav:`Навигация`,aside:`Боковой`,form:`Форма`,search:`Поиск`,statementTitle:`Декларация доступности`,statementIntro:`Мы стремимся сделать этот сайт доступным для всех пользователей, включая людей с ограниченными возможностями, в соответствии с израильским стандартом SI 5568 и рекомендациями WCAG 2.1 уровня AA.`,statementCoordinator:`Координатор доступности`,statementPhone:`Телефон`,statementEmail:`Эл. почта`,statementLastAudit:`Дата последнего аудита доступности`,statementAccommodations:`Выполненные адаптации доступности`,copied:`Скопировано в буфер обмена`,embedCode:`Код для вставки`,copyCode:`Копировать`,badgeCompliant:`Соответствует`,poweredBy:`Работает на`,contrastAndColors:`Настройка контрастности и цветов`,fontSizeAdjustment:`Настройка размера шрифта`,keyboardNavigation:`Навигация с клавиатуры`,screenReaderCompat:`Совместимость с программами чтения экрана`,linkHighlighting:`Выделение ссылок`,animationControl:`Управление анимациями`,noAltText:`(нет альт-текста)`,ttsHover:`Озвучка при наведении`,ttsSelection:`Озвучка выделенного текста`,ttsReadPage:`Озвучить страницу`,ttsStop:`Остановить озвучку`,ttsReading:`Читаю...`,shortcutPanelToggle:`Открыть/закрыть меню доступности`,keyboardShortcuts:`Горячие клавиши`}},n=`he`;function r(e){if(e&&e!==`auto`&&t[e])return e;let n=document.documentElement.lang?.split(`-`)[0].toLowerCase();return n&&t[n]?n:`en`}function i(e){t[e]&&(n=e)}function a(){return n}function o(e){return t[n]?.[e]||t.en[e]||e}function s(){return t[n]?.dir||`ltr`}function c(){return Object.keys(t)}var l=`opennagish_prefs`,u=null;function d(){if(u)return u;try{let e=localStorage.getItem(l);u=e?JSON.parse(e):{}}catch{u={}}return u}function f(){try{localStorage.setItem(l,JSON.stringify(u))}catch{}}function p(e,t){let n=d();return n[e]===void 0?t:n[e]}function m(e,t){d(),u[e]=t,f()}function h(e){d(),delete u[e],f()}function ee(){u={};try{localStorage.removeItem(l)}catch{}}function g(){return{...d()}}var _={"&":`&amp;`,"<":`&lt;`,">":`&gt;`,'"':`&quot;`,"'":`&#39;`};function v(e){return typeof e==`string`?e.replace(/[&<>"']/g,e=>_[e]):``}function y(e,t={},n=[]){let r=document.createElement(e);for(let[e,n]of Object.entries(t))e===`className`?r.className=n:e===`textContent`?r.textContent=n:e===`innerHTML`?r.innerHTML=n:e.startsWith(`on`)&&typeof n==`function`?r.addEventListener(e.slice(2).toLowerCase(),n):r.setAttribute(e,n);for(let e of n)typeof e==`string`?r.appendChild(document.createTextNode(e)):e&&r.appendChild(e);return r}function b(e,t){let n=document.getElementById(e);if(n)return n.textContent=t,n;let r=document.createElement(`style`);return r.id=e,r.textContent=t,document.head.appendChild(r),r}function x(e){let t=document.getElementById(e);t&&t.remove()}function S(e,t){let n=t.querySelector(`.anid-live-region`);n&&(n.textContent=``,requestAnimationFrame(()=>{n.textContent=e}))}var C=`anid-font-size`,te=-3,ne=5,re=2,ie=class{constructor(e){this.ctx=e,this.level=0}setLevel(e){this.level=Math.max(te,Math.min(ne,e)),this.apply(),m(`fontSize`,this.level)}increase(){this.setLevel(this.level+1)}decrease(){this.setLevel(this.level-1)}reset(){this.setLevel(0)}apply(){if(this.level===0){x(C);return}b(C,`
      html { font-size: calc(1em + ${this.level*re}px) !important; }
      body, body *:not(#opennagish-widget) {
        font-size: inherit !important;
      }
    `)}enable(){this.apply()}disable(){this.level=0,x(C),h(`fontSize`)}},w=`anid-contrast`,T={dark:`
    html { filter: invert(1) hue-rotate(180deg) !important; }
    html img, html video, html canvas, html svg image,
    html [style*="background-image"] {
      filter: invert(1) hue-rotate(180deg) !important;
    }
  `,light:`
    html body { background: #fff !important; color: #000 !important; }
    html body *:not(#opennagish-widget) {
      background-color: #fff !important;
      color: #000 !important;
      border-color: #000 !important;
      box-shadow: none !important;
    }
    html body a { color: #0000EE !important; }
    html body img { opacity: 0.9; }
  `,invert:`
    html { filter: invert(1) !important; }
    html img, html video, html canvas, html svg image {
      filter: invert(1) !important;
    }
  `},E=class{constructor(e){this.ctx=e,this.mode=`none`}setMode(e){this.mode=e,e===`none`||!T[e]?x(w):b(w,T[e])}enable(){}disable(){this.mode=`none`,x(w)}},D=`anid-dark-mode`,ae=`
  html body {
    background-color: #1a1a2e !important;
    color: #e0e0e0 !important;
  }
  html body *:not(#opennagish-widget) {
    background-color: transparent !important;
    color: #e0e0e0 !important;
    border-color: #444 !important;
  }
  html body a { color: #90caf9 !important; }
  html body input, html body textarea, html body select {
    background-color: #2d2d44 !important;
    color: #e0e0e0 !important;
    border-color: #555 !important;
  }
  html body button {
    background-color: #2d2d44 !important;
    color: #e0e0e0 !important;
  }
  html body img { opacity: 0.85; }
`,oe=class{constructor(e){this.ctx=e,this.active=!1}enable(){this.active||(this.active=!0,b(D,ae))}disable(){this.active=!1,x(D)}toggle(){this.active?this.disable():this.enable()}},O=`anid-monochrome`,se=`html { filter: grayscale(100%) !important; }`,ce=class{constructor(e){this.ctx=e,this.active=!1}enable(){this.active||(this.active=!0,b(O,se))}disable(){this.active=!1,x(O)}toggle(){this.active?this.disable():this.enable()}},k=`anid-saturation`,le=class{constructor(e){this.ctx=e,this.value=100}setValue(e){this.value=e,e===100?x(k):b(k,`html { filter: saturate(${e}%) !important; }`)}enable(){this.apply()}apply(){this.value!==100&&this.setValue(this.value)}disable(){this.value=100,x(k)}},A=`anid-spacing`,ue=`
  html body *:not(#opennagish-widget) {
    line-height: 1.8 !important;
    letter-spacing: 0.12em !important;
    word-spacing: 0.16em !important;
  }
  html body p, html body li, html body dd {
    margin-bottom: 1em !important;
  }
`,de=class{constructor(e){this.ctx=e,this.active=!1}enable(){this.active||(this.active=!0,b(A,ue))}disable(){this.active=!1,x(A)}toggle(){this.active?this.disable():this.enable()}},j=`anid-dyslexia-font`,fe=`
  @font-face {
    font-family: 'OpenDyslexic';
    src: url('https://cdn.jsdelivr.net/npm/open-dyslexic@1.0.3/woff/OpenDyslexic-Regular.woff') format('woff');
    font-weight: normal;
    font-style: normal;
    font-display: swap;
  }
  @font-face {
    font-family: 'OpenDyslexic';
    src: url('https://cdn.jsdelivr.net/npm/open-dyslexic@1.0.3/woff/OpenDyslexic-Bold.woff') format('woff');
    font-weight: bold;
    font-style: normal;
    font-display: swap;
  }
  html body, html body *:not(#opennagish-widget) {
    font-family: 'OpenDyslexic', sans-serif !important;
  }
`,pe=class{constructor(e){this.ctx=e,this.active=!1}enable(){this.active||(this.active=!0,b(j,fe))}disable(){this.active=!1,x(j)}toggle(){this.active?this.disable():this.enable()}},M=`anid-hide-images`,N=`
  html body img,
  html body svg,
  html body video,
  html body [role="img"],
  html body [style*="background-image"] {
    opacity: 0.05 !important;
    visibility: hidden !important;
  }
`,P=class{constructor(e){this.ctx=e,this.active=!1}enable(){this.active||(this.active=!0,b(M,N))}disable(){this.active=!1,x(M)}toggle(){this.active?this.disable():this.enable()}},F=`anid-color-blind`,I=`anid-color-blind-svg`,L={protanopia:`0.567,0.433,0,0,0 0.558,0.442,0,0,0 0,0.242,0.758,0,0 0,0,0,1,0`,deuteranopia:`0.625,0.375,0,0,0 0.7,0.3,0,0,0 0,0.3,0.7,0,0 0,0,0,1,0`,tritanopia:`0.95,0.05,0,0,0 0,0.433,0.567,0,0 0,0.475,0.525,0,0 0,0,0,1,0`},R=class{constructor(e){this.ctx=e,this.mode=null}setMode(e){this.mode=e;let t=L[e];if(!t){this.disable();return}let n=document.getElementById(I);n||(n=document.createElementNS(`http://www.w3.org/2000/svg`,`svg`),n.id=I,n.setAttribute(`style`,`position:absolute;width:0;height:0;`),n.innerHTML=`<defs><filter id="anid-cb-filter"><feColorMatrix type="matrix" values=""/></filter></defs>`,document.body.appendChild(n)),n.querySelector(`feColorMatrix`).setAttribute(`values`,t),b(F,`html { filter: url(#anid-cb-filter) !important; }`),m(`colorBlindMode`,e)}enable(){this.mode&&this.setMode(this.mode)}disable(){this.mode=null,x(F);let e=document.getElementById(I);e&&e.remove(),h(`colorBlindMode`)}toggle(){this.mode?this.disable():this.setMode(`protanopia`)}},z=`anid-keyboard-nav`,B=`
  html body *:focus {
    outline: 3px solid #1565c0 !important;
    outline-offset: 2px !important;
    box-shadow: 0 0 0 4px rgba(21,101,192,0.3) !important;
  }
`,me=class{constructor(e){this.ctx=e,this.active=!1,this._onTab=null}enable(){this.active||(this.active=!0,document.body.dataset.anidKeyboardNav=`true`,b(z,B),this._onTab=e=>{e.key===`Tab`&&document.body.classList.add(`anid-using-keyboard`)},document.addEventListener(`keydown`,this._onTab))}disable(){this.active=!1,delete document.body.dataset.anidKeyboardNav,document.body.classList.remove(`anid-using-keyboard`),x(z),this._onTab&&=(document.removeEventListener(`keydown`,this._onTab),null)}toggle(){this.active?this.disable():this.enable()}},V=`anid-focus`,he=`
  html body a:focus-visible,
  html body button:focus-visible,
  html body input:focus-visible,
  html body select:focus-visible,
  html body textarea:focus-visible,
  html body [tabindex]:focus-visible {
    outline: 4px solid #ff6f00 !important;
    outline-offset: 3px !important;
    box-shadow: 0 0 0 6px rgba(255,111,0,0.3) !important;
    transition: outline 0.1s ease !important;
  }
`,ge=class{constructor(e){this.ctx=e,this.active=!1}enable(){this.active||(this.active=!0,b(V,he))}disable(){this.active=!1,x(V)}toggle(){this.active?this.disable():this.enable()}},_e=class{constructor(e){this.ctx=e}populateList(e){e.innerHTML=``;let t=document.querySelectorAll(`h1, h2, h3, h4, h5, h6`);if(t.length===0){e.innerHTML=`<li style="padding:8px;color:#888;font-size:13px;">${o(`noHeadings`)}</li>`;return}t.forEach((t,n)=>{let r=t.tagName[1],i=t.textContent.trim().slice(0,60),a=document.createElement(`li`),o=(parseInt(r)-1)*12,s=document.createElement(`button`);s.style.paddingInlineStart=`${o}px`,s.textContent=`H${r}: ${i}`,s.addEventListener(`click`,()=>{t.scrollIntoView({behavior:`smooth`,block:`center`}),t.focus({preventScroll:!0}),t.style.outline=`3px solid #1565c0`,t.style.outlineOffset=`4px`,setTimeout(()=>{t.style.outline=``,t.style.outlineOffset=``},2e3)}),a.appendChild(s),e.appendChild(a)})}enable(){}disable(){}},H={banner:`header`,navigation:`nav`,main:`main`,contentinfo:`footer`,complementary:`aside`,form:`form`,search:`search`},ve=class{constructor(e){this.ctx=e}populateList(e){e.innerHTML=``;let t=[];if(document.querySelectorAll(`[role]`).forEach(e=>{let n=e.getAttribute(`role`);H[n]&&t.push({el:e,label:e.getAttribute(`aria-label`)||o(H[n]),role:n})}),[`header`,`nav`,`main`,`footer`,`aside`,`form`,`search`].forEach(e=>{document.querySelectorAll(e).forEach(n=>{n.getAttribute(`role`)||t.push({el:n,label:n.getAttribute(`aria-label`)||o(e),role:e})})}),t.length===0){e.innerHTML=`<li style="padding:8px;color:#888;font-size:13px;">${o(`noLandmarks`)}</li>`;return}t.forEach(({el:t,label:n,role:r})=>{let i=document.createElement(`li`),a=document.createElement(`button`);a.textContent=`${r}: ${n}`,a.addEventListener(`click`,()=>{t.scrollIntoView({behavior:`smooth`,block:`start`}),t.setAttribute(`tabindex`,`-1`),t.focus({preventScroll:!0})}),i.appendChild(a),e.appendChild(i)})}enable(){}disable(){}},ye=class{constructor(e){this.ctx=e,this.active=!1,this.guide=null,this._onMove=null}enable(){this.active||(this.active=!0,this.guide||(this.guide=document.createElement(`div`),this.guide.id=`anid-reading-guide`,this.guide.style.cssText=`
        position: fixed;
        left: 0;
        width: 100%;
        height: 12px;
        background: rgba(21, 101, 192, 0.15);
        border-top: 2px solid rgba(21, 101, 192, 0.5);
        border-bottom: 2px solid rgba(21, 101, 192, 0.5);
        pointer-events: none;
        z-index: 2147483640;
        transition: top 0.05s linear;
      `,document.body.appendChild(this.guide)),this.guide.style.display=``,this._onMove=e=>{this.guide.style.top=`${e.clientY-6}px`},document.addEventListener(`mousemove`,this._onMove))}disable(){this.active=!1,this._onMove&&=(document.removeEventListener(`mousemove`,this._onMove),null),this.guide&&=(this.guide.remove(),null)}toggle(){this.active?this.disable():this.enable()}},be=class{constructor(e){this.ctx=e,this.active=!1,this.maskTop=null,this.maskBottom=null,this._onMove=null}enable(){this.active||(this.active=!0,this.maskTop||(this.maskTop=this._createOverlay(`top`),this.maskBottom=this._createOverlay(`bottom`),document.body.appendChild(this.maskTop),document.body.appendChild(this.maskBottom)),this.maskTop.style.display=``,this.maskBottom.style.display=``,this._onMove=e=>{let t=e.clientY;this.maskTop.style.height=`${Math.max(0,t-40)}px`,this.maskBottom.style.top=`${t+40}px`,this.maskBottom.style.height=`${Math.max(0,window.innerHeight-t-40)}px`},document.addEventListener(`mousemove`,this._onMove))}_createOverlay(e){let t=document.createElement(`div`);return t.className=`anid-line-mask-${e}`,t.style.cssText=`
      position: fixed;
      left: 0;
      width: 100%;
      background: rgba(0, 0, 0, 0.6);
      pointer-events: none;
      z-index: 2147483640;
      transition: height 0.05s linear, top 0.05s linear;
    `,e===`top`?(t.style.top=`0`,t.style.height=`0`):(t.style.bottom=`0`,t.style.height=`0`),t}disable(){this.active=!1,this._onMove&&=(document.removeEventListener(`mousemove`,this._onMove),null),this.maskTop&&=(this.maskTop.remove(),null),this.maskBottom&&=(this.maskBottom.remove(),null)}toggle(){this.active?this.disable():this.enable()}},U=`anid-big-cursor`,xe=`
  html body, html body *:not(#opennagish-widget) {
    cursor: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='48' height='48' viewBox='0 0 48 48'%3E%3Cpath d='M8 4l28 20H20l-1 1 9 17-5 2-9-17-6 6z' fill='%23000' stroke='%23fff' stroke-width='2'/%3E%3C/svg%3E") 4 4, auto !important;
  }
  html body a, html body a *, html body button, html body button *,
  html body [role="button"], html body input[type="submit"],
  html body input[type="button"], html body label, html body select {
    cursor: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='48' height='48' viewBox='0 0 48 48'%3E%3Cpath d='M20 4v28h5l-1-1 8-13h8L12 42V4z' fill='%23000' stroke='%23fff' stroke-width='2'/%3E%3C/svg%3E") 14 4, pointer !important;
  }
`,Se=class{constructor(e){this.ctx=e,this.active=!1}enable(){this.active||(this.active=!0,b(U,xe))}disable(){this.active=!1,x(U)}toggle(){this.active?this.disable():this.enable()}},Ce=class{constructor(e){this.ctx=e,this.overlay=null,this._escHandler=null}toggle(){this.overlay?this.close():this.show()}show(){let e=this.extractContent();this.overlay=document.createElement(`div`),this.overlay.setAttribute(`role`,`dialog`),this.overlay.setAttribute(`aria-modal`,`true`),this.overlay.setAttribute(`aria-label`,o(`screenReaderPreview`)),this.overlay.style.cssText=`
      position: fixed;
      z-index: 2147483645;
      top: 0; left: 0; right: 0; bottom: 0;
      background: rgba(0,0,0,0.92);
      color: #e0e0e0;
      overflow-y: auto;
      padding: 60px 40px 40px;
      font-family: 'Courier New', monospace;
      font-size: 15px;
      line-height: 2;
      white-space: pre-wrap;
    `,this.overlay.textContent=e;let t=document.createElement(`button`);t.textContent=`\u2715 ${o(`close`)}`,t.setAttribute(`aria-label`,o(`close`)),t.style.cssText=`
      position: fixed;
      top: 12px; inset-inline-end: 12px;
      z-index: 2147483646;
      background: #c62828;
      color: #fff;
      border: none;
      padding: 10px 20px;
      border-radius: 8px;
      font-size: 16px;
      cursor: pointer;
      min-width: 44px;
      min-height: 44px;
    `,t.addEventListener(`click`,()=>this.close()),this.overlay.appendChild(t),document.body.appendChild(this.overlay),t.focus(),this._escHandler=e=>{e.key===`Escape`&&this.close()},document.addEventListener(`keydown`,this._escHandler)}close(){this.overlay&&=(this.overlay.remove(),null),this._escHandler&&=(document.removeEventListener(`keydown`,this._escHandler),null)}extractContent(){let e=[],t=document.title;t&&e.push(`[Page Title] ${t}
`);let n=document.documentElement.lang;n&&e.push(`[Language] ${n}
`);let r=t=>{if(t.nodeType===Node.TEXT_NODE){let n=t.textContent.trim();n&&e.push(n);return}if(t.nodeType!==Node.ELEMENT_NODE)return;let n=t.tagName.toLowerCase(),i=t.getAttribute(`role`);if(![`script`,`style`,`noscript`,`template`].includes(n)&&!(t.hidden||t.getAttribute(`aria-hidden`)===`true`)&&t.id!==`opennagish-widget`){if(/^h[1-6]$/.test(n)){e.push(`
[${`#`.repeat(parseInt(n[1]))} Heading ${n[1]}] ${t.textContent.trim()}`);return}if(n===`img`){let n=t.alt||o(`noAltText`);e.push(`[Image: ${n}]`);return}if(n===`a`&&t.href){e.push(`[Link: ${t.textContent.trim()} -> ${t.href}]`);return}if([`nav`,`header`,`footer`,`main`,`aside`].includes(n)||i){let r=t.getAttribute(`aria-label`);e.push(`
--- [${i||n}${r?`: `+r:``}] ---`)}n===`li`&&e.push(`  • `);for(let e of t.childNodes)r(e)}};return r(document.body),e.join(`
`)}enable(){}disable(){this.close()}},W=`anid-links`,we=`
  html body a {
    text-decoration: underline !important;
    text-decoration-thickness: 2px !important;
    text-underline-offset: 3px !important;
    outline: 2px solid transparent !important;
    border-bottom: 2px solid #1565c0 !important;
    background-color: rgba(21, 101, 192, 0.08) !important;
    padding: 1px 3px !important;
    border-radius: 2px !important;
  }
  html body a:hover {
    background-color: rgba(21, 101, 192, 0.18) !important;
  }
`,Te=class{constructor(e){this.ctx=e,this.active=!1}enable(){this.active||(this.active=!0,b(W,we))}disable(){this.active=!1,x(W)}toggle(){this.active?this.disable():this.enable()}},G=`data-anid-alt-shown`,Ee=class{constructor(e){this.ctx=e,this.active=!1,this.overlays=[]}enable(){this.active||(this.active=!0,document.querySelectorAll(`img`).forEach(e=>{if(e.getAttribute(G))return;let t=e.alt||e.getAttribute(`aria-label`)||``,n=t||`\u26A0 ${o(`noAltText`)}`,r=document.createElement(`span`);r.className=`anid-alt-overlay`,r.style.cssText=`
        position: absolute;
        bottom: 4px;
        left: 4px;
        right: 4px;
        background: ${t?`rgba(21,101,192,0.9)`:`rgba(198,40,40,0.9)`};
        color: #fff;
        font-size: 12px;
        padding: 4px 8px;
        border-radius: 4px;
        z-index: 2147483630;
        pointer-events: none;
        word-break: break-word;
        max-height: 60px;
        overflow: hidden;
        font-family: sans-serif;
        line-height: 1.4;
      `,r.textContent=n;let i=e.parentElement;if(i){let t=getComputedStyle(i).position;t===`static`&&(i.style.position=`relative`),i.appendChild(r),e.setAttribute(G,`true`),this.overlays.push({overlay:r,img:e,wrapper:i,hadPosition:t})}}))}disable(){this.active=!1,this.overlays.forEach(({overlay:e,img:t,wrapper:n,hadPosition:r})=>{e.remove(),t.removeAttribute(G),r===`static`&&(n.style.position=``)}),this.overlays=[]}toggle(){this.active?this.disable():this.enable()}},K=`anid-animations`,q=`data-anid-orig-src`,De=`
  html body *:not(#opennagish-widget),
  html body *:not(#opennagish-widget)::before,
  html body *:not(#opennagish-widget)::after {
    animation-duration: 0.001ms !important;
    animation-iteration-count: 1 !important;
    transition-duration: 0.001ms !important;
    scroll-behavior: auto !important;
  }
`,Oe=class{constructor(e){this.ctx=e,this.active=!1}enable(){this.active||(this.active=!0,b(K,De),document.querySelectorAll(`img[src$=".gif"], img[src*=".gif?"]`).forEach(e=>{if(!e.getAttribute(q))try{let t=document.createElement(`canvas`);t.width=e.naturalWidth||e.width||100,t.height=e.naturalHeight||e.height||100,t.getContext(`2d`).drawImage(e,0,0,t.width,t.height),e.setAttribute(q,e.src),e.src=t.toDataURL()}catch{}}))}disable(){this.active=!1,x(K),document.querySelectorAll(`[${q}]`).forEach(e=>{e.src=e.getAttribute(q),e.removeAttribute(q)})}toggle(){this.active?this.disable():this.enable()}},J=`data-anid-orig-src`,ke=class{constructor(e){this.ctx=e,this.active=!1,this.mutedElements=[]}enable(){this.active||(this.active=!0,document.querySelectorAll(`audio, video`).forEach(e=>{e.muted||(e.muted=!0,e.pause(),this.mutedElements.push(e))}),document.querySelectorAll(`iframe`).forEach(e=>{try{let t=e.src||``;if(!t||e.getAttribute(J))return;(t.includes(`youtube`)||t.includes(`vimeo`)||t.includes(`dailymotion`))&&!t.includes(`mute=1`)&&!t.includes(`muted=1`)&&(e.setAttribute(J,t),e.src=t+(t.includes(`?`)?`&`:`?`)+`mute=1`)}catch{}}))}disable(){this.active=!1,this.mutedElements.forEach(e=>{e.muted=!1}),this.mutedElements=[],document.querySelectorAll(`iframe[${J}]`).forEach(e=>{e.src=e.getAttribute(J),e.removeAttribute(J)})}toggle(){this.active?this.disable():this.enable()}},Ae=class{constructor(e){this.ctx=e,this.modal=null,this.backdrop=null,this._escHandler=null}show(){let e=this.ctx.config;if(e.statementUrl){window.open(e.statementUrl,`_blank`,`noopener,noreferrer`);return}this.close();let t=e.statementData||{};this.backdrop=document.createElement(`div`),this.backdrop.style.cssText=`position:fixed;z-index:2147483644;inset:0;background:rgba(0,0,0,0.5);`,this.backdrop.addEventListener(`click`,()=>this.close()),this.modal=document.createElement(`div`);let n=a()===`he`||a()===`ar`?`rtl`:`ltr`;this.modal.setAttribute(`dir`,n),this.modal.setAttribute(`role`,`dialog`),this.modal.setAttribute(`aria-modal`,`true`),this.modal.setAttribute(`aria-label`,o(`statementTitle`)),this.modal.style.cssText=`
      position: fixed; z-index: 2147483645;
      top: 50%; left: 50%; transform: translate(-50%, -50%);
      width: 600px; max-width: calc(100vw - 40px); max-height: calc(100vh - 80px);
      background: #fff; border-radius: 12px;
      box-shadow: 0 16px 48px rgba(0,0,0,0.3);
      overflow-y: auto; padding: 32px;
      font-family: sans-serif; color: #1a1a2e; line-height: 1.7;
    `;let r=(t.accommodations||[o(`contrastAndColors`),o(`fontSizeAdjustment`),o(`keyboardNavigation`),o(`screenReaderCompat`),o(`linkHighlighting`),o(`animationControl`)]).map(e=>`<li>${v(e)}</li>`).join(``),i=t.coordinatorName?`<p><strong>${v(o(`statementCoordinator`))}:</strong> ${v(t.coordinatorName)}</p>`:``,s=t.orgPhone?`<p><strong>${v(o(`statementPhone`))}:</strong> <a href="tel:${v(t.orgPhone)}">${v(t.orgPhone)}</a></p>`:``,c=t.orgEmail?`<p><strong>${v(o(`statementEmail`))}:</strong> <a href="mailto:${v(t.orgEmail)}">${v(t.orgEmail)}</a></p>`:``,l=t.lastAuditDate?`<p><strong>${v(o(`statementLastAudit`))}:</strong> ${v(t.lastAuditDate)}</p>`:``;this.modal.innerHTML=`
      <div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:20px;">
        <h2 style="font-size:22px;margin:0;">${v(o(`statementTitle`))}</h2>
        <button id="anid-stmt-close" style="background:none;border:none;font-size:24px;cursor:pointer;width:44px;height:44px;border-radius:50%;display:flex;align-items:center;justify-content:center;" aria-label="${v(o(`close`))}">&#x2715;</button>
      </div>
      <p>${v(o(`statementIntro`))}</p>
      ${i}
      ${s}
      ${c}
      ${l}
      <p><strong>${v(o(`statementAccommodations`))}:</strong></p>
      <ul style="padding-inline-start:20px;margin-bottom:16px;">${r}</ul>
      <p style="font-size:12px;color:#888;">${v(o(`poweredBy`))} <a href="https://github.com/leon2589/open-nagish" target="_blank" rel="noopener noreferrer" style="color:#888;text-decoration:underline;">OpenNagish</a> | SI 5568 + WCAG 2.1 AA</p>
    `,document.body.appendChild(this.backdrop),document.body.appendChild(this.modal),this.modal.querySelector(`#anid-stmt-close`).addEventListener(`click`,()=>this.close()),this.modal.querySelector(`#anid-stmt-close`).focus(),this._escHandler=e=>{e.key===`Escape`&&this.close()},document.addEventListener(`keydown`,this._escHandler)}close(){this.modal&&=(this.modal.remove(),null),this.backdrop&&=(this.backdrop.remove(),null),this._escHandler&&=(document.removeEventListener(`keydown`,this._escHandler),null)}enable(){}disable(){this.close()}},je=class{constructor(e){this.ctx=e,this.modal=null,this.backdrop=null,this._escHandler=null}_buildSvg(){let e=`OpenNagish ${o(`badgeCompliant`)}`;return`<svg xmlns="http://www.w3.org/2000/svg" width="240" height="40" viewBox="0 0 240 40">
  <defs>
    <linearGradient id="abg" x1="0" y1="0" x2="0" y2="1">
      <stop offset="0%" stop-color="#1976d2"/>
      <stop offset="100%" stop-color="#0d47a1"/>
    </linearGradient>
  </defs>
  <rect width="240" height="40" rx="8" fill="url(#abg)"/>
  <rect x="1" y="1" width="238" height="38" rx="7" fill="none" stroke="#fff" stroke-opacity="0.25"/>
  <circle cx="20" cy="20" r="12" fill="#fff" fill-opacity="0.2"/>
  <text x="20" y="25" text-anchor="middle" fill="#fff" font-size="16" font-family="sans-serif">&#x267F;</text>
  <text x="40" y="16" fill="#fff" font-size="11" font-family="sans-serif" font-weight="bold">${v(`WCAG 2.1 AA + SI 5568`)}</text>
  <text x="40" y="31" fill="#fff" font-size="10" font-family="sans-serif" opacity="0.85">${v(e)}</text>
</svg>`}show(){this.close();let e=this._buildSvg(),t=`<a href="#" title="Accessibility"><img src="data:image/svg+xml,${encodeURIComponent(e.trim())}" alt="WCAG 2.1 AA + SI 5568 Accessible" width="240" height="40"></a>`,n=a()===`he`||a()===`ar`?`rtl`:`ltr`;this.backdrop=document.createElement(`div`),this.backdrop.style.cssText=`position:fixed;z-index:2147483644;inset:0;background:rgba(0,0,0,0.5);`,this.backdrop.addEventListener(`click`,()=>this.close()),this.modal=document.createElement(`div`),this.modal.setAttribute(`role`,`dialog`),this.modal.setAttribute(`aria-modal`,`true`),this.modal.setAttribute(`dir`,n),this.modal.setAttribute(`aria-label`,o(`complianceBadge`)),this.modal.style.cssText=`
      position:fixed;z-index:2147483645;
      top:50%;left:50%;transform:translate(-50%,-50%);
      width:520px;max-width:calc(100vw - 40px);
      background:#fff;border-radius:12px;
      box-shadow:0 16px 48px rgba(0,0,0,0.3);
      padding:32px;font-family:sans-serif;color:#1a1a2e;
    `,this.modal.innerHTML=`
      <div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:20px;">
        <h2 style="font-size:20px;margin:0;">${v(o(`complianceBadge`))}</h2>
        <button id="anid-badge-close" style="background:none;border:none;font-size:24px;cursor:pointer;width:44px;height:44px;border-radius:50%;display:flex;align-items:center;justify-content:center;" aria-label="${v(o(`close`))}">&#x2715;</button>
      </div>
      <div style="text-align:center;padding:24px;background:#f5f5f5;border-radius:8px;margin-bottom:20px;">${e}</div>
      <label style="display:block;font-size:13px;color:#666;margin-bottom:6px;font-weight:600;">${v(o(`embedCode`))}</label>
      <textarea readonly style="width:100%;height:80px;padding:10px;border:1px solid #ddd;border-radius:8px;font-size:12px;font-family:monospace;resize:none;background:#fafafa;direction:ltr;text-align:left;">${v(t)}</textarea>
      <button id="anid-badge-copy" style="display:block;margin-top:14px;padding:10px 24px;background:#1565c0;color:#fff;border:none;border-radius:8px;cursor:pointer;font-size:14px;min-height:44px;font-weight:600;margin-inline-start:auto;">${v(o(`copyCode`))}</button>
    `,document.body.appendChild(this.backdrop),document.body.appendChild(this.modal);let r=this.modal.querySelector(`#anid-badge-copy`);this.modal.querySelector(`#anid-badge-close`).addEventListener(`click`,()=>this.close()),r.addEventListener(`click`,()=>{this._copyToClipboard(t).then(()=>{r.textContent=o(`copied`),r.style.background=`#2e7d32`,setTimeout(()=>{r.textContent=o(`copyCode`),r.style.background=`#1565c0`},2e3),this.ctx.announce(o(`copied`))}).catch(()=>{})}),this._escHandler=e=>{e.key===`Escape`&&this.close()},document.addEventListener(`keydown`,this._escHandler),this.modal.querySelector(`#anid-badge-close`).focus()}_copyToClipboard(e){var t;return(t=navigator.clipboard)!=null&&t.writeText?navigator.clipboard.writeText(e):new Promise((t,n)=>{try{let r=document.createElement(`textarea`);r.value=e,r.style.cssText=`position:fixed;left:-9999px;top:-9999px;opacity:0;`,document.body.appendChild(r),r.select();let i=document.execCommand(`copy`);r.remove(),i?t():n(Error(`execCommand failed`))}catch(e){n(e)}})}close(){this.modal&&=(this.modal.remove(),null),this.backdrop&&=(this.backdrop.remove(),null),this._escHandler&&=(document.removeEventListener(`keydown`,this._escHandler),null)}enable(){}disable(){this.close()}},Me={he:`he-IL`,en:`en-US`,ar:`ar-SA`,ru:`ru-RU`},Y=`data-anid-tts-hl`,Ne=class{constructor(e){this.ctx=e,this.hoverActive=!1,this.selectionActive=!1,this.reading=!1,this._onMouseOver=this._onMouseOver.bind(this),this._onMouseUp=this._onMouseUp.bind(this),this._highlighted=null,this._savedStyles=null,this._hoverDebounce=null,this._warmUpVoices()}_warmUpVoices(){this.supported&&(this.synth.getVoices().length||this.synth.addEventListener(`voiceschanged`,()=>{},{once:!0}))}_unlockAudio(){if(!this._audioUnlocked)try{let e=new(window.AudioContext||window.webkitAudioContext),t=e.createBuffer(1,1,22050),n=e.createBufferSource();n.buffer=t,n.connect(e.destination),n.start(),e.resume().then(()=>e.close()),this._audioUnlocked=!0}catch{}}get synth(){return window.speechSynthesis}get supported(){return`speechSynthesis`in window}_getLang(){let e=document.documentElement.lang||a()||`en`;return Me[e]||e}_findVoice(e){let t=this.synth.getVoices();if(!t.length)return null;let n=e.split(`-`)[0].toLowerCase();return t.find(e=>e.lang.toLowerCase().startsWith(n))||t.find(e=>e.default)||t[0]}_speak(e){if(!this.supported||!e.trim())return;this._unlockAudio(),this._clearResumeTimer();let t=()=>{let t=new SpeechSynthesisUtterance(e),n=this._getLang(),r=this._findVoice(n);r?(t.voice=r,t.lang=r.lang):t.lang=n,t.rate=1,t.pitch=1,t.onend=()=>{this.reading=!1,this._clearResumeTimer()},t.onerror=()=>{this.reading=!1,this._clearResumeTimer()},this.reading=!0,this.synth.speak(t),this._startResumeTimer()};this.synth.speaking||this.synth.pending?(this.synth.cancel(),setTimeout(t,80)):t()}_startResumeTimer(){this._resumeTimer=setInterval(()=>{this.synth.speaking&&!this.synth.paused&&(this.synth.pause(),this.synth.resume())},1e4)}_clearResumeTimer(){this._resumeTimer&&=(clearInterval(this._resumeTimer),null)}stop(){this.supported&&(this.synth.cancel(),this.reading=!1,this._clearResumeTimer(),this._clearHighlight())}enableHover(){this.hoverActive||(this.hoverActive=!0,document.addEventListener(`mouseover`,this._onMouseOver,!0))}disableHover(){this.hoverActive=!1,document.removeEventListener(`mouseover`,this._onMouseOver,!0),this._clearHighlight(),clearTimeout(this._hoverDebounce),!this.selectionActive&&!this.reading&&this.stop()}_onMouseOver(e){let t=e.target;!t||t.nodeType!==1||t.closest(`#opennagish-widget`)||(clearTimeout(this._hoverDebounce),this._hoverDebounce=setTimeout(()=>{let e=this._getElementText(t);e&&(this._clearHighlight(),this._savedStyles={outline:t.style.outline,outlineOffset:t.style.outlineOffset,background:t.style.background},t.setAttribute(Y,``),t.style.outline=`3px solid #1565c0`,t.style.outlineOffset=`2px`,t.style.background=`rgba(21,101,192,0.08)`,this._highlighted=t,this._speak(e))},300))}_getElementText(e){return e.tagName===`IMG`?e.alt||``:e.tagName===`INPUT`||e.tagName===`TEXTAREA`?e.value||e.placeholder||``:(e.innerText||e.textContent||``).trim().substring(0,500)}_clearHighlight(){this._highlighted&&(this._highlighted.removeAttribute(Y),this._savedStyles&&(this._highlighted.style.outline=this._savedStyles.outline,this._highlighted.style.outlineOffset=this._savedStyles.outlineOffset,this._highlighted.style.background=this._savedStyles.background),this._highlighted=null,this._savedStyles=null)}enableSelection(){this.selectionActive||(this.selectionActive=!0,document.addEventListener(`mouseup`,this._onMouseUp,!0))}disableSelection(){this.selectionActive=!1,document.removeEventListener(`mouseup`,this._onMouseUp,!0),!this.hoverActive&&!this.reading&&this.stop()}_onMouseUp(){let e=window.getSelection(),t=e?e.toString().trim():``;t.length>0&&this._speak(t)}readPage(){let e=this._extractPageText();e&&(this.ctx.announce(o(`ttsReading`)),this._speak(e))}_extractPageText(){let e=[],t=n=>{if(n.nodeType===Node.TEXT_NODE){let t=n.textContent.trim();t&&e.push(t);return}if(n.nodeType!==Node.ELEMENT_NODE)return;let r=n.tagName.toLowerCase();if(![`script`,`style`,`noscript`,`template`].includes(r)&&!(n.hidden||n.getAttribute(`aria-hidden`)===`true`)&&n.id!==`opennagish-widget`)for(let e of n.childNodes)t(e)};return t(document.body),e.join(` `).substring(0,5e3)}enable(){}disable(){this.disableHover(),this.disableSelection(),this.stop()}},X=`<svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M12 2a2 2 0 1 1 0 4 2 2 0 0 1 0-4zm9 7h-6l-1.41-1.41A2 2 0 0 0 12.17 7H12a2 2 0 0 0-1.42.59L9 9H3a1 1 0 0 0 0 2h5l1 1v3l-2 5a1 1 0 0 0 1.8.8L11 16h2l2.2 4.8a1 1 0 0 0 1.8-.8l-2-5v-3l1-1h5a1 1 0 0 0 0-2z"/></svg>`,Z={darkMode:`darkMode`,monochrome:`monochrome`,textSpacing:`spacing`,dyslexiaFont:`dyslexiaFont`,hideImages:`hideImages`,colorBlindSim:`colorBlind`,keyboardNav:`keyboardNav`,focusIndicators:`focus`,readingGuide:`readingGuide`,lineMask:`lineMask`,bigCursor:`cursor`,linkHighlight:`links`,imageAltText:`images`,stopAnimations:`animations`,muteSounds:`muteSounds`},Pe=[`bottom-left`,`bottom-right`,`top-left`,`top-right`],Q=null,Fe=class{constructor(){this.isOpen=!1,this.modules={},this.shadowHost=null,this.shadowRoot=null,this.panel=null,this.trigger=null,this.config=window.OpenNagishConfig||{},this._keydownHandler=null,this._resizeHandler=null,this._destroyed=!1}init(){i(p(`lang`)||r(this.config.lang)),this.shadowHost=document.createElement(`div`),this.shadowHost.id=`opennagish-widget`,this.shadowHost.style.cssText=`all:initial;`,document.body.appendChild(this.shadowHost),this.shadowRoot=this.shadowHost.attachShadow({mode:`open`});let t=document.createElement(`style`);t.textContent=e(),this.shadowRoot.appendChild(t);let n=y(`div`,{className:`anid-live-region`,role:`status`,"aria-live":`polite`,"aria-atomic":`true`});this.shadowRoot.appendChild(n),this.createTrigger(),this.createPanel(),this.initModules(),this.restoreState(),this.bindGlobalKeys(),this.bindViewportListeners()}createTrigger(){let e=this._getPosition();this.trigger=y(`button`,{className:`anid-trigger`,"aria-label":o(`openPanel`),"aria-expanded":`false`,"aria-controls":`anid-panel`,innerHTML:X}),this.positionElement(this.trigger,e),this.makeDraggable(this.trigger),this.shadowRoot.appendChild(this.trigger)}createPanel(){let e=this._getPosition();this.panel=y(`div`,{className:`anid-panel`,id:`anid-panel`,role:`dialog`,"aria-label":o(`panelTitle`),"aria-modal":`false`}),this.panel.setAttribute(`dir`,s()),this.positionPanel(e),this.panel.innerHTML=this.buildPanelHTML(),this.shadowRoot.appendChild(this.panel),this.bindPanelEvents()}_getPosition(){let e=this.config.position||`bottom-left`;return Pe.includes(e)?e:`bottom-left`}buildPanelHTML(){let e=c().map(e=>`<option value="${e}" ${e===a()?`selected`:``}>${{he:`עברית`,en:`English`,ar:`العربية`,ru:`Русский`}[e]||e}</option>`).join(``);return`
      <div class="anid-panel-header">
        <span class="anid-panel-title">${o(`panelTitle`)}</span>
        <select class="anid-lang-select" aria-label="${o(`language`)}">${e}</select>
        <button class="anid-close-btn" aria-label="${o(`closePanel`)}">&#x2715;</button>
      </div>
      <div class="anid-panel-body">
        ${this.buildCategory(`vision`,o(`categoryVision`),`👁`,[{id:`fontSize`,type:`buttons`,shortcut:`Alt+F`},{id:`highContrast`,type:`contrast`,shortcut:`Alt+C`},{id:`darkMode`,type:`toggle`,shortcut:`Alt+D`},{id:`monochrome`,type:`toggle`},{id:`saturation`,type:`slider`},{id:`textSpacing`,type:`toggle`},{id:`dyslexiaFont`,type:`toggle`},{id:`hideImages`,type:`toggle`},{id:`colorBlindSim`,type:`colorblind`}])}
        ${this.buildCategory(`navigation`,o(`categoryNavigation`),`🧭`,[{id:`keyboardNav`,type:`toggle`,shortcut:`Alt+K`},{id:`focusIndicators`,type:`toggle`},{id:`headingStructure`,type:`headings`},{id:`pageStructure`,type:`landmarks`},{id:`readingGuide`,type:`toggle`,shortcut:`Alt+G`},{id:`lineMask`,type:`toggle`},{id:`bigCursor`,type:`toggle`},{id:`screenReaderPreview`,type:`action`}])}
        ${this.buildCategory(`media`,o(`categoryMedia`),`🔊`,[{id:`ttsHover`,type:`toggle`},{id:`ttsSelection`,type:`toggle`},{id:`ttsReadPage`,type:`action`,shortcut:`Alt+T`},{id:`linkHighlight`,type:`toggle`,shortcut:`Alt+L`},{id:`imageAltText`,type:`toggle`},{id:`stopAnimations`,type:`toggle`},{id:`muteSounds`,type:`toggle`,shortcut:`Alt+M`}])}
        ${this.buildCategory(`compliance`,o(`categoryCompliance`),`✅`,[{id:`accessibilityStatement`,type:`action`},{id:`complianceBadge`,type:`action`}])}
      </div>
      <div class="anid-panel-footer">
        <button class="anid-reset-btn">${o(`resetAll`)}</button>
      </div>
    `}buildCategory(e,t,n,r){let i=e===`vision`?`true`:`false`,a=``;for(let e of r)a+=this.buildFeature(e);return`
      <div class="anid-category" data-category="${e}" data-expanded="${i}">
        <button class="anid-category-header" aria-expanded="${i}">
          <span class="anid-category-icon">${n}</span>
          <span>${t}</span>
          <span class="anid-category-chevron">&#x25BC;</span>
        </button>
        <div class="anid-category-content" role="region">
          ${a}
        </div>
      </div>
    `}buildFeature(e){let t=o(e.id),n=`${t}${e.shortcut?` <kbd class="anid-shortcut">${e.shortcut}</kbd>`:``}`;switch(e.type){case`toggle`:return`
          <div class="anid-feature" data-feature="${e.id}">
            <span class="anid-feature-label">${n}</span>
            <label class="anid-toggle">
              <input type="checkbox" data-toggle="${e.id}" aria-label="${t}">
              <span class="anid-toggle-slider"></span>
            </label>
          </div>`;case`buttons`:return`
          <div class="anid-feature" data-feature="${e.id}">
            <span class="anid-feature-label">${n}</span>
            <div class="anid-btn-group">
              <button class="anid-btn" data-action="fontDecrease" aria-label="${o(`fontSizeDecrease`)}">A-</button>
              <button class="anid-btn" data-action="fontReset" aria-label="${o(`fontSizeReset`)}">A</button>
              <button class="anid-btn" data-action="fontIncrease" aria-label="${o(`fontSizeIncrease`)}">A+</button>
            </div>
          </div>`;case`contrast`:return`
          <div class="anid-feature" data-feature="${e.id}">
            <span class="anid-feature-label">${n}</span>
            <div class="anid-btn-group">
              <button class="anid-btn" data-action="contrastDark" aria-label="${o(`contrastDark`)}">${o(`contrastDark`)}</button>
              <button class="anid-btn" data-action="contrastLight" aria-label="${o(`contrastLight`)}">${o(`contrastLight`)}</button>
              <button class="anid-btn" data-action="contrastInvert" aria-label="${o(`contrastInvert`)}">${o(`contrastInvert`)}</button>
            </div>
          </div>`;case`slider`:return`
          <div class="anid-feature" data-feature="${e.id}">
            <span class="anid-feature-label">${n}</span>
            <div class="anid-slider-wrap">
              <input type="range" class="anid-slider" data-slider="${e.id}" min="0" max="200" value="100" aria-label="${t}">
            </div>
          </div>`;case`colorblind`:return`
          <div class="anid-feature" data-feature="${e.id}">
            <span class="anid-feature-label">${n}</span>
            <label class="anid-toggle">
              <input type="checkbox" data-toggle="${e.id}" aria-label="${t}">
              <span class="anid-toggle-slider"></span>
            </label>
          </div>
          <div class="anid-sub-options" data-sub="${e.id}" style="display:none">
            <div class="anid-btn-group">
              <button class="anid-btn" data-action="cbProtanopia">${o(`protanopia`)}</button>
              <button class="anid-btn" data-action="cbDeuteranopia">${o(`deuteranopia`)}</button>
              <button class="anid-btn" data-action="cbTritanopia">${o(`tritanopia`)}</button>
            </div>
          </div>`;case`headings`:return`
          <div class="anid-feature" data-feature="${e.id}">
            <span class="anid-feature-label">${n}</span>
            <button class="anid-btn" data-action="toggleHeadings">${o(`jumpTo`)}</button>
          </div>
          <ul class="anid-heading-list" data-list="headings" style="display:none"></ul>`;case`landmarks`:return`
          <div class="anid-feature" data-feature="${e.id}">
            <span class="anid-feature-label">${n}</span>
            <button class="anid-btn" data-action="toggleLandmarks">${o(`jumpTo`)}</button>
          </div>
          <ul class="anid-landmark-list" data-list="landmarks" style="display:none"></ul>`;case`action`:return`
          <div class="anid-feature" data-feature="${e.id}">
            <span class="anid-feature-label">${n}</span>
            <button class="anid-btn" data-action="${e.id}">${t}</button>
          </div>`;default:return``}}bindPanelEvents(){let e=this.shadowRoot;e.querySelector(`.anid-close-btn`).addEventListener(`click`,()=>this.close()),e.querySelector(`.anid-lang-select`).addEventListener(`change`,t=>{let n=t.target.value;i(n),m(`lang`,n),this.rebuildPanel(),S(o(`panelTitle`),e)}),e.querySelector(`.anid-reset-btn`).addEventListener(`click`,()=>{this.resetAll(),S(o(`resetAll`),e)}),e.querySelectorAll(`.anid-category-header`).forEach(e=>{e.addEventListener(`click`,()=>{let t=e.closest(`.anid-category`),n=t.dataset.expanded===`true`;t.dataset.expanded=n?`false`:`true`,e.setAttribute(`aria-expanded`,String(!n))})}),e.querySelectorAll(`[data-toggle]`).forEach(e=>{e.addEventListener(`change`,()=>{this.handleToggle(e.dataset.toggle,e.checked)})}),e.querySelectorAll(`[data-action]`).forEach(e=>{e.addEventListener(`click`,()=>{this.handleAction(e.dataset.action)})}),e.querySelectorAll(`[data-slider]`).forEach(e=>{e.addEventListener(`input`,()=>{this.handleSlider(e.dataset.slider,parseInt(e.value,10))})})}handleToggle(e,t){var n,r,i,a,s;if(e===`ttsHover`){t?(n=this.modules.tts)==null||n.enableHover():(r=this.modules.tts)==null||r.disableHover(),m(e,t),S(`${o(e)} ${o(t?`on`:`off`)}`,this.shadowRoot);return}if(e===`ttsSelection`){t?(i=this.modules.tts)==null||i.enableSelection():(a=this.modules.tts)==null||a.disableSelection(),m(e,t),S(`${o(e)} ${o(t?`on`:`off`)}`,this.shadowRoot);return}let c=Z[e],l=c?this.modules[c]:null;if(l&&(t?l.enable():l.disable(),m(e,t)),e===`colorBlindSim`){let e=this.shadowRoot.querySelector(`[data-sub="colorBlindSim"]`);e&&(e.style.display=t?``:`none`),t||(s=this.modules.colorBlind)==null||s.disable()}S(`${o(e)} ${o(t?`on`:`off`)}`,this.shadowRoot)}handleAction(e){var t,n,r,i,a,o,s,c,l,u;switch(e){case`fontIncrease`:(t=this.modules.fontSize)==null||t.increase();break;case`fontDecrease`:(n=this.modules.fontSize)==null||n.decrease();break;case`fontReset`:(r=this.modules.fontSize)==null||r.reset();break;case`contrastDark`:this.toggleContrast(`dark`);break;case`contrastLight`:this.toggleContrast(`light`);break;case`contrastInvert`:this.toggleContrast(`invert`);break;case`cbProtanopia`:(i=this.modules.colorBlind)==null||i.setMode(`protanopia`);break;case`cbDeuteranopia`:(a=this.modules.colorBlind)==null||a.setMode(`deuteranopia`);break;case`cbTritanopia`:(o=this.modules.colorBlind)==null||o.setMode(`tritanopia`);break;case`toggleHeadings`:this.toggleList(`headings`);break;case`toggleLandmarks`:this.toggleList(`landmarks`);break;case`screenReaderPreview`:(s=this.modules.screenReader)==null||s.toggle();break;case`ttsReadPage`:(c=this.modules.tts)==null||c.readPage();break;case`accessibilityStatement`:(l=this.modules.statement)==null||l.show();break;case`complianceBadge`:(u=this.modules.badge)==null||u.show()}}handleSlider(e,t){var n;e===`saturation`&&((n=this.modules.saturation)==null||n.setValue(t),m(`saturation`,t))}toggleContrast(e){var t;let n=p(`contrast`,`none`)===e?`none`:e;(t=this.modules.contrast)==null||t.setMode(n),m(`contrast`,n),this.updateContrastButtons(n),S(n===`none`?`${o(`highContrast`)} ${o(`off`)}`:`${o(`highContrast`)} ${o(n===`dark`?`contrastDark`:n===`light`?`contrastLight`:`contrastInvert`)}`,this.shadowRoot)}updateContrastButtons(e){this.shadowRoot.querySelectorAll(`[data-action^="contrast"]`).forEach(t=>{let n=t.dataset.action.replace(`contrast`,``).toLowerCase();t.classList.toggle(`anid-active`,n===e)})}toggleList(e){var t,n;let r=this.shadowRoot.querySelector(`[data-list="${e}"]`);if(!r)return;let i=r.style.display!==`none`;r.style.display=i?`none`:``,i||(e===`headings`?(t=this.modules.headings)==null||t.populateList(r):(n=this.modules.pageStructure)==null||n.populateList(r))}initModules(){let e={shadowRoot:this.shadowRoot,config:this.config,announce:e=>S(e,this.shadowRoot)};this.modules={fontSize:new ie(e),contrast:new E(e),darkMode:new oe(e),monochrome:new ce(e),saturation:new le(e),spacing:new de(e),dyslexiaFont:new pe(e),hideImages:new P(e),colorBlind:new R(e),keyboardNav:new me(e),focus:new ge(e),headings:new _e(e),pageStructure:new ve(e),readingGuide:new ye(e),lineMask:new be(e),cursor:new Se(e),screenReader:new Ce(e),links:new Te(e),images:new Ee(e),animations:new Oe(e),muteSounds:new ke(e),tts:new Ne(e),statement:new Ae(e),badge:new je(e)}}restoreState(){var e,t,n,r,i,a,o;let s=g();for(let[t,n]of Object.entries(Z))if(t!==`colorBlindSim`&&s[t]){(e=this.modules[n])==null||e.enable();let r=this.shadowRoot.querySelector(`[data-toggle="${t}"]`);r&&(r.checked=!0)}if(s.ttsHover){(t=this.modules.tts)==null||t.enableHover();let e=this.shadowRoot.querySelector(`[data-toggle="ttsHover"]`);e&&(e.checked=!0)}if(s.ttsSelection){(n=this.modules.tts)==null||n.enableSelection();let e=this.shadowRoot.querySelector(`[data-toggle="ttsSelection"]`);e&&(e.checked=!0)}if(s.fontSize&&((r=this.modules.fontSize)==null||r.setLevel(s.fontSize)),s.contrast&&s.contrast!==`none`&&((i=this.modules.contrast)==null||i.setMode(s.contrast),this.updateContrastButtons(s.contrast)),s.saturation!==void 0&&s.saturation!==100){(a=this.modules.saturation)==null||a.setValue(s.saturation);let e=this.shadowRoot.querySelector(`[data-slider="saturation"]`);e&&(e.value=s.saturation)}if(s.colorBlindMode){(o=this.modules.colorBlind)==null||o.setMode(s.colorBlindMode);let e=this.shadowRoot.querySelector(`[data-toggle="colorBlindSim"]`);e&&(e.checked=!0);let t=this.shadowRoot.querySelector(`[data-sub="colorBlindSim"]`);t&&(t.style.display=``)}}resetAll(){var e;for(let t of Object.values(this.modules))(e=t.disable)==null||e.call(t);ee(),m(`lang`,a()),this.rebuildPanel()}rebuildPanel(){this.panel.setAttribute(`dir`,s()),this.panel.innerHTML=this.buildPanelHTML(),this.bindPanelEvents(),this.restoreState(),this.isOpen&&(this.updatePanelPosition(),this.panel.classList.add(`anid-open`)),this.trigger.setAttribute(`aria-expanded`,String(this.isOpen)),this.trigger.setAttribute(`aria-label`,this.isOpen?o(`closePanel`):o(`openPanel`))}toggle(){this.isOpen?this.close():this.open()}open(){var e;this.isOpen=!0,this.updatePanelPosition(),this.panel.classList.add(`anid-open`),this.trigger.setAttribute(`aria-expanded`,`true`),this.trigger.setAttribute(`aria-label`,o(`closePanel`)),(e=this.panel.querySelector(`.anid-close-btn`))==null||e.focus()}close(){this.isOpen=!1,this.panel.classList.remove(`anid-open`),this.trigger.setAttribute(`aria-expanded`,`false`),this.trigger.setAttribute(`aria-label`,o(`openPanel`)),this.trigger.focus()}bindGlobalKeys(){let e={KeyD:()=>this._flipToggle(`darkMode`),KeyF:e=>{var t,n;e.shiftKey?(t=this.modules.fontSize)==null||t.decrease():(n=this.modules.fontSize)==null||n.increase()},KeyK:()=>this._flipToggle(`keyboardNav`),KeyG:()=>this._flipToggle(`readingGuide`),KeyL:()=>this._flipToggle(`linkHighlight`),KeyC:()=>this.toggleContrast(`dark`),KeyM:()=>this._flipToggle(`muteSounds`),KeyT:()=>this.modules.tts?.readPage(),KeyR:()=>this.resetAll()};this._keydownHandler=t=>{if(t.key===`Escape`&&this.isOpen){this.close();return}if(t.altKey&&t.code===`KeyA`){t.preventDefault(),this.toggle();return}if(t.altKey&&this.isOpen){let n=e[t.code];n&&(t.preventDefault(),n(t))}},document.addEventListener(`keydown`,this._keydownHandler)}_flipToggle(e){let t=this.shadowRoot.querySelector(`[data-toggle="${e}"]`);t&&(t.checked=!t.checked,this.handleToggle(e,t.checked))}_getBottomOffset(){let e=window.innerWidth<=768?this.config.mobileBottomOffset:this.config.bottomOffset,t=parseInt(e,10);return t>0?t:0}positionElement(e,t){let n=this._getBottomOffset(),r={"bottom-left":{bottom:`${20+n}px`,left:`20px`},"bottom-right":{bottom:`${20+n}px`,right:`20px`},"top-left":{top:`20px`,left:`20px`},"top-right":{top:`20px`,right:`20px`}};Object.assign(e.style,r[t]||r[`bottom-left`])}positionPanel(e){let t=this._getBottomOffset(),n={"bottom-left":{bottom:`${88+t}px`,left:`20px`},"bottom-right":{bottom:`${88+t}px`,right:`20px`},"top-left":{top:`88px`,left:`20px`},"top-right":{top:`88px`,right:`20px`}};Object.assign(this.panel.style,n[e]||n[`bottom-left`])}updatePanelPosition(){if(window.innerWidth<=768)return;let e=this.trigger.getBoundingClientRect(),t=window.innerHeight,n=window.innerWidth,r=Math.min(380,n-24),i=e.top,a=t-e.bottom,o=e.left;if(o+r>n-12&&(o=n-r-12),o<12&&(o=12),this.panel.style.left=`${o}px`,this.panel.style.right=`auto`,i>a){let n=t-e.top+12;this.panel.style.bottom=`${n}px`,this.panel.style.top=`auto`,this.panel.style.maxHeight=`${Math.max(200,i-24)}px`}else{let n=e.bottom+12;this.panel.style.top=`${n}px`,this.panel.style.bottom=`auto`,this.panel.style.maxHeight=`${Math.max(200,t-n-12)}px`}}clampTrigger(){let e=this.trigger.getBoundingClientRect(),t=window.innerWidth,n=window.innerHeight,r=this.trigger.offsetWidth,i=this.trigger.offsetHeight,a=this.trigger.style.top!==``&&this.trigger.style.top!==`auto`,o=this.trigger.style.left!==``&&this.trigger.style.left!==`auto`;if(a&&o){let a=e.left,o=e.top,s=Math.max(0,Math.min(a,t-r)),c=Math.max(0,Math.min(o,n-i));a!==s&&(this.trigger.style.left=`${s}px`),o!==c&&(this.trigger.style.top=`${c}px`)}else(e.right>t||e.left<0||e.bottom>n||e.top<0)&&(this.trigger.style.left=`${Math.max(0,Math.min(e.left,t-r))}px`,this.trigger.style.top=`${Math.max(0,Math.min(e.top,n-i))}px`,this.trigger.style.right=`auto`,this.trigger.style.bottom=`auto`)}bindViewportListeners(){let e;this._resizeHandler=()=>{clearTimeout(e),e=setTimeout(()=>{this.clampTrigger(),this.isOpen&&this.updatePanelPosition()},100)},window.addEventListener(`resize`,this._resizeHandler),window.addEventListener(`orientationchange`,this._resizeHandler)}makeDraggable(e){let t=!1,n,r,i,a,o=o=>{let l=o.touches?o.touches[0]:o;n=l.clientX,r=l.clientY;let u=e.getBoundingClientRect();i=u.left,a=u.top,t=!1,document.addEventListener(`mousemove`,s),document.addEventListener(`mouseup`,c),document.addEventListener(`touchmove`,s,{passive:!1}),document.addEventListener(`touchend`,c)},s=o=>{let s=o.touches?o.touches[0]:o,c=s.clientX-n,l=s.clientY-r;if((Math.abs(c)>5||Math.abs(l)>5)&&(t=!0),t){o.preventDefault();let t=window.innerWidth-e.offsetWidth,n=window.innerHeight-e.offsetHeight;e.style.left=`${Math.max(0,Math.min(i+c,t))}px`,e.style.top=`${Math.max(0,Math.min(a+l,n))}px`,e.style.right=`auto`,e.style.bottom=`auto`}},c=()=>{document.removeEventListener(`mousemove`,s),document.removeEventListener(`mouseup`,c),document.removeEventListener(`touchmove`,s),document.removeEventListener(`touchend`,c),t&&this.updatePanelPosition()};e.addEventListener(`mousedown`,o),e.addEventListener(`touchstart`,o,{passive:!0}),e.addEventListener(`click`,e=>{if(t){t=!1,e.stopPropagation();return}this.toggle()})}destroy(){var e,t;if(!this._destroyed){this._destroyed=!0;for(let t of Object.values(this.modules))(e=t.disable)==null||e.call(t);this._keydownHandler&&document.removeEventListener(`keydown`,this._keydownHandler),this._resizeHandler&&(window.removeEventListener(`resize`,this._resizeHandler),window.removeEventListener(`orientationchange`,this._resizeHandler)),(t=this.shadowHost)!=null&&t.parentNode&&this.shadowHost.parentNode.removeChild(this.shadowHost),this.modules={},this.shadowRoot=null,this.shadowHost=null,this.panel=null,this.trigger=null,Q===this&&(Q=null)}}};function $(e){Q&&Q.destroy(),e&&(window.OpenNagishConfig={...window.OpenNagishConfig,...e});let t=new Fe;return t.init(),Q=t,t}typeof document<`u`&&(document.readyState===`loading`?document.addEventListener(`DOMContentLoaded`,()=>$()):$());export{$ as init};