
import React, { useState, useRef, useEffect, forwardRef, useImperativeHandle } from 'react';
import { Message } from '../types';

export interface ChatSectionHandle {
  sendMessage: (text: string) => void;
}

const DEMO_RESPONSES: Array<{ keywords: string[]; response: string }> = [
  {
    keywords: ['עלות', 'cost', 'budget', 'דוח'],
    response:
      'דוח עלויות לדוגמה: 23% חיסכון חודשי בזכות ניתוב אוטומטי למודל המתאים, 17% פחות קריאות כפולות באמצעות Semantic Cache, וחריגות תקציב נחסמו בזמן אמת.',
  },
  {
    keywords: ['מודל', 'model', 'claude', 'gpt', 'gemini', 'החלף'],
    response:
      'החלפת מודל מתבצעת דרך שכבת Gateway אחידה (OpenAI-compatible). המשמעות: מעבר בין ספקים בלי שינוי בקוד האפליקציה ועם Guardrails זהים.',
  },
  {
    keywords: ['אבטחה', 'security', 'pii', 'compliance', 'רגולציה'],
    response:
      'Safium מפעילה מדיניות אבטחה ארגונית לכל בקשה: סינון מידע רגיש, הרשאות RBAC לפי צוותים, ולוגים מלאים ל-SOC2/HIPAA עם קוד בקרה לכל אירוע.',
  },
  {
    keywords: ['איך', 'how', 'works', 'עובד'],
    response:
      'בקצרה: כל קריאת AI עוברת דרך SAF.AI Gateway, שם מופעלים ניתוב מודלים, מגבלות תקציב, בדיקות תוכן, ולוגים. כך מקבלים שליטה, אבטחה וחיסכון במקום אחד.',
  },
];

const DEFAULT_RESPONSE =
  'קיבלתי את הבקשה. בדמו הזה התשובות סימולטיביות, אבל בארגון אמיתי אפשר לחבר את הממשק ל-LLM אמיתי דרך ה-Gateway עם אותן מדיניות ואבטחה.';

const getDemoResponse = (prompt: string): string => {
  const normalizedPrompt = prompt.trim().toLowerCase();
  const match = DEMO_RESPONSES.find(({ keywords }) =>
    keywords.some((keyword) => normalizedPrompt.includes(keyword))
  );

  return match?.response ?? DEFAULT_RESPONSE;
};

const ChatSection = forwardRef<ChatSectionHandle, Record<string, never>>((props, ref) => {
  const [messages, setMessages] = useState<Message[]>([
    { role: 'model', text: 'ברוכים הבאים ל-Safium. איך אוכל לעזור היום?' },
  ]);
  const [input, setInput] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);
  const sectionRef = useRef<HTMLDivElement>(null);
  const typingTimeoutRef = useRef<number | undefined>(undefined);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [messages, isTyping]);

  useEffect(() => {
    return () => {
      if (typingTimeoutRef.current) {
        window.clearTimeout(typingTimeoutRef.current);
      }
    };
  }, []);

  const handleSend = (customText?: string) => {
    const text = customText || input;
    if (!text.trim()) return;

    const userMessage: Message = { role: 'user', text };
    setMessages(prev => [...prev, userMessage]);
    setInput('');
    setIsTyping(true);

    typingTimeoutRef.current = window.setTimeout(() => {
      setMessages(prev => [...prev, { role: 'model', text: getDemoResponse(text) }]);
      setIsTyping(false);
    }, 700);
  };

  useImperativeHandle(ref, () => ({
    sendMessage: (text: string) => {
      handleSend(text);
    }
  }));

  return (
    <section id="chat-demo-section" ref={sectionRef} className="py-24 bg-[#0B0F19] relative scroll-mt-24">
      <div className="max-w-4xl mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-4">הדגמת חוויה (Chat Interface)</h2>
          <p className="text-slate-400">ממשק דמוי צ'אט חי המדגים פקודות ניהול מהירות.</p>
        </div>

        <div className="bg-[#141B2A] rounded-2xl border border-slate-800 shadow-2xl overflow-hidden flex flex-col h-[500px]">
          {/* Header */}
          <div className="bg-[#1A2333] p-4 border-b border-slate-800 flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
              <span className="font-bold">Safium Assistant</span>
            </div>
            <div className="text-xs text-slate-500">Secured via SAF.AI Gateway</div>
          </div>

          {/* Messages */}
          <div ref={scrollRef} className="flex-1 overflow-y-auto p-6 space-y-4">
            {messages.map((m, i) => (
              <div key={i} className={`flex ${m.role === 'user' ? 'justify-start' : 'justify-end'}`}>
                <div className={`max-w-[80%] p-4 rounded-2xl ${
                  m.role === 'user' 
                    ? 'bg-[#FF8C00] text-white rounded-br-none' 
                    : 'bg-[#2A3548] text-slate-200 rounded-bl-none'
                }`}>
                  <p className="whitespace-pre-wrap text-sm leading-relaxed">{m.text}</p>
                </div>
              </div>
            ))}
            {isTyping && (
              <div className="flex justify-end">
                <div className="bg-[#2A3548] p-4 rounded-2xl rounded-bl-none">
                  <div className="flex gap-1">
                    <div className="w-1.5 h-1.5 bg-slate-500 rounded-full animate-bounce"></div>
                    <div className="w-1.5 h-1.5 bg-slate-500 rounded-full animate-bounce [animation-delay:0.2s]"></div>
                    <div className="w-1.5 h-1.5 bg-slate-500 rounded-full animate-bounce [animation-delay:0.4s]"></div>
                  </div>
                </div>
              </div>
            )}
          </div>

          {/* Quick Actions */}
          <div className="px-6 py-3 bg-[#1A2333] border-t border-slate-800 flex flex-wrap gap-2">
            <button 
              onClick={() => handleSend('הצג דוח עלויות')}
              className="text-xs bg-[#2A3548] hover:bg-[#3d4a61] text-slate-300 py-2 px-3 rounded-lg border border-slate-700 transition-colors"
            >
              "הצג דוח עלויות"
            </button>
            <button 
              onClick={() => handleSend('החלף מודל ל-Claude 3.5')}
              className="text-xs bg-[#2A3548] hover:bg-[#3d4a61] text-slate-300 py-2 px-3 rounded-lg border border-slate-700 transition-colors"
            >
              "החלף מודל ל-Claude 3.5"
            </button>
            <button
              onClick={() => handleSend('בדוק מדיניות אבטחה ו-PII')}
              className="text-xs bg-[#2A3548] hover:bg-[#3d4a61] text-slate-300 py-2 px-3 rounded-lg border border-slate-700 transition-colors"
            >
              "בדוק מדיניות אבטחה"
            </button>
          </div>

          {/* Input */}
          <div className="p-4 bg-[#141B2A]">
            <div className="flex gap-2">
              <input 
                type="text" 
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={(e) => e.key === 'Enter' && handleSend()}
                placeholder="הקלד כאן פקודה או שאלה..."
                className="flex-1 bg-[#2A3548] border border-slate-700 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-[#FF8C00] transition-colors"
              />
              <button 
                onClick={() => handleSend()}
                className="bg-[#FF8C00] hover:bg-[#e67e00] p-3 rounded-xl transition-all"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
});

export default ChatSection;
