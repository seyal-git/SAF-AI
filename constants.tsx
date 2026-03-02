
import { Threat, VideoItem } from './types';

export const THREATS: Threat[] = [
  { id: 1, problem: "הבור התקציבי", icon: "💸", solution: "מגבלות תקציב רב-שכבתיות (Hard Limits) והתראות בזמן אמת." },
  { id: 2, problem: "דליפת מפתחות", icon: "🔓", solution: "רוטציית מפתחות אוטומטית ללא צורך בשינוי קוד האפליקציה." },
  { id: 3, problem: "זליגת מידע רגיש", icon: "🕵️‍♂️", solution: "Enterprise Guardrails לסינון PII ומידע מסחרי בזמן אמת." },
  { id: 4, problem: "קריסת שירות", icon: "🛑", solution: "Dynamic Fallback – מעבר אוטומטי למודל חלופי תוך מילי-שניות." },
  { id: 5, problem: "החשכה ניהולית", icon: "📜", solution: "Audit Logging מרכזי ל-Compliance מלא (HIPAA/SOC2)." },
  { id: 6, problem: "בזבוז משאבים", icon: "🔋", solution: "Semantic Caching – זיהוי דמיון סמנטי מעל 85% וחיסכון בעלויות API." },
  { id: 7, problem: "מודל לא מתאים", icon: "🤖", solution: "החלפת מודל בפורמט OpenAI אחיד ללא שינויי קוד." },
  { id: 8, problem: "קושי ניהולי", icon: "🧩", solution: "Admin UI מרכזי לניהול כלל הספקים והמפתחות במקום אחד." },
  { id: 9, problem: "איבוד שליטה", icon: "⛓️", solution: "Key Usage Tracking והרשאות RBAC מלאות לכל מפתח." },
  { id: 10, problem: "שימוש יתר", icon: "⏲️", solution: "הגדרת Rate Limits מדויקים למניעת עומסים וחריגות ספקים." },
  { id: 11, problem: "איום הניתוק", icon: "📡", solution: "אינטגרציה מלאה לכלי הניטור: Prometheus, DataDog ו-CloudWatch." }
];

export const VIDEOS: VideoItem[] = [
  { 
    id: "v1", 
    title: "Unified Hub", 
    thumbnail: "https://picsum.photos/seed/saf1/600/400", 
    videoUrl: "https://www.w3schools.com/html/mov_bbb.mp4" 
  },
  { 
    id: "v2", 
    title: "Key Management", 
    thumbnail: "https://picsum.photos/seed/saf2/600/400", 
    videoUrl: "https://www.w3schools.com/html/movie.mp4" 
  },
  { 
    id: "v3", 
    title: "Protection in Action", 
    thumbnail: "https://picsum.photos/seed/saf3/600/400", 
    videoUrl: "https://www.w3schools.com/html/mov_bbb.mp4" 
  }
];

export const CLIENTS = [
  { name: "Asuta", logo: "🏥", color: "#FF5733" },
  { name: "Matrix", logo: "📊", color: "#33FF57" },
  { name: "Defense Industries", logo: "🛡️", color: "#3357FF" },
  { name: "Government", logo: "🏛️", color: "#F333FF" }
];
