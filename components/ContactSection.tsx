
import React from 'react';

const ContactSection: React.FC = () => {
  const WHATSAPP_NUMBER = "972540000000"; // מספר דוגמה, יש לעדכן למספר האמיתי
  const whatsappUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent("היי, אשמח לקבל פרטים נוספים על מערכת Safium ותיאום דמו טכני.")}`;

  return (
    <section id="contact-section" className="py-24 bg-gradient-to-b from-[#0F172A] to-[#0B0F19] scroll-mt-20">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-20">
        
        {/* Left: Branding/Message */}
        <div className="flex flex-col justify-center">
          <div className="mb-8 text-right">
            <span className="text-[#FF8C00] font-bold text-xl mb-2 block tracking-tight">Cambium - Tailor Made AI</span>
            <h2 className="text-5xl font-black mb-6 leading-tight">
              "אנחנו לא רק מספקים כלי, אנחנו בונים את הפתרון שלכם."
            </h2>
            <p className="text-xl text-slate-400 mb-8 leading-relaxed font-light">
              פיתוח Guardrails ייעודיים, אינטגרציות Custom לסביבות הארגון והתקנות Private Cloud מאובטחות.
            </p>
            <div className="space-y-4">
              <div className="flex items-center gap-4 text-slate-300">
                <div className="w-10 h-10 rounded-full bg-[#1A2333] flex items-center justify-center text-[#FF8C00]">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>
                </div>
                <span>התאמה אישית מלאה לצרכי הארגון</span>
              </div>
              <div className="flex items-center gap-4 text-slate-300">
                <div className="w-10 h-10 rounded-full bg-[#1A2333] flex items-center justify-center text-[#FF8C00]">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>
                </div>
                <span>תמיכה בפריסה מקומית (On-Prem)</span>
              </div>
              <div className="flex items-center gap-4 text-slate-300">
                <div className="w-10 h-10 rounded-full bg-[#1A2333] flex items-center justify-center text-[#FF8C00]">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>
                </div>
                <span>אינטגרציה חלקה ל-CRM ומערכות פנימיות</span>
              </div>
            </div>
          </div>
        </div>

        {/* Right: WhatsApp CTA Card */}
        <div className="bg-[#1A2333] p-12 rounded-3xl border border-slate-800 shadow-2xl relative flex flex-col items-center justify-center text-center">
          <div className="absolute -top-6 -right-6 w-32 h-32 bg-[#FF8C00]/10 rounded-full blur-3xl"></div>
          
          <div className="bg-green-500/10 p-6 rounded-full mb-8">
            <svg className="w-16 h-16 text-green-500" fill="currentColor" viewBox="0 0 448 512">
              <path d="M380.9 97.1C339 55.1 283.2 32 223.9 32c-122.4 0-222 99.6-222 222 0 39.1 10.2 77.3 29.6 111L0 480l117.7-30.9c32.4 17.7 68.9 27 106.1 27h.1c122.3 0 224.1-99.6 224.1-222 0-59.3-25.2-115-67.1-157zm-157 341.6c-33.1 0-65.6-8.9-94-25.7l-6.7-4-69.8 18.3L72 359.2l-4.4-7c-18.5-29.4-28.2-63.3-28.2-98.2 0-101.7 82.8-184.5 184.6-184.5 49.3 0 95.6 19.2 130.4 54.1 34.8 34.9 56.2 81.2 56.1 130.5 0 101.8-84.9 184.6-186.6 184.6zm101.2-138.2c-5.5-2.8-32.8-16.2-37.9-18-5.1-1.9-8.8-2.8-12.5 2.8-3.7 5.6-14.3 18-17.6 21.8-3.2 3.7-6.5 4.2-12 1.4-5.6-2.8-23.6-8.7-45-27.7-16.6-14.8-27.8-33.1-31.1-38.6-3.2-5.6-.3-8.6 2.5-11.4 2.5-2.5 5.5-6.5 8.3-9.7 2.8-3.3 3.7-5.6 5.6-9.3 1.8-3.7.9-6.9-.5-9.7-1.4-2.8-12.5-30.1-17.1-41.2-4.5-10.8-9.1-9.3-12.5-9.5-3.2-.2-6.9-.2-10.6-.2-3.7 0-9.7 1.4-14.8 6.9-5.1 5.6-19.4 19-19.4 46.3 0 27.3 19.9 53.7 22.6 57.4 2.8 3.7 39.1 59.7 94.8 83.8 13.2 5.7 23.5 9.2 31.6 11.8 13.3 4.2 25.4 3.6 35 2.2 10.7-1.5 32.8-13.4 37.4-26.4 4.6-13 4.6-24.1 3.2-26.4-1.3-2.5-5-3.9-10.5-6.6z" />
            </svg>
          </div>

          <h3 className="text-4xl font-bold mb-6">תיאום דמו טכני מהיר</h3>
          <p className="text-slate-400 mb-10 text-lg leading-relaxed">
            לחצו למעבר ישיר לוואטסאפ לשיחה עם מומחה AI שלנו. <br />
            אנחנו זמינים לכל שאלה טכנית או תיאום פגישה.
          </p>

          <a 
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full bg-[#25D366] hover:bg-[#1ebd5a] text-white font-black py-5 rounded-2xl shadow-[0_10px_40px_rgba(37,211,102,0.3)] transition-all transform hover:-translate-y-1 flex items-center justify-center gap-3 text-xl"
          >
            שלחו לנו הודעה בוואטסאפ
            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12.031 6.172c-3.181 0-5.767 2.586-5.768 5.766-.001 1.298.38 2.27 1.025 3.012l-.021.021-.462 1.694 1.742-.452c.703.466 1.45.686 2.485.686 3.181 0 5.767-2.586 5.767-5.766s-2.587-5.761-5.768-5.761zM14.52 13.555c-.149.421-.861.782-1.185.833-.324.051-.671.077-1.104-.064-.265-.085-.623-.232-1.066-.426-1.882-.823-3.097-2.731-3.191-2.857-.094-.126-.763-.915-.763-1.745 0-.83.435-1.237.589-1.407.154-.17.336-.213.447-.213.112 0 .223.001.32.006.096.005.223-.037.349.271.127.308.435 1.063.473 1.14.038.077.064.166.013.271-.051.105-.077.17-.154.258-.077.089-.161.198-.231.266-.078.077-.159.161-.068.318.09.157.403.664.866 1.076.595.531 1.096.696 1.253.774.157.078.249.064.341-.043.091-.107.391-.456.496-.61.105-.155.21-.13.354-.078.145.053.918.433 1.076.512.157.079.262.119.3.186.038.067.038.389-.112.81zM12 2C6.477 2 2 6.477 2 12c0 1.891.524 3.662 1.435 5.179L2 22l4.952-1.298A9.954 9.954 0 0012 22c5.523 0 10-4.477 10-10S17.523 2 12 2z"/>
            </svg>
          </a>
        </div>

      </div>
    </section>
  );
};

export default ContactSection;
