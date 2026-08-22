import { createContext, useContext, useEffect, useState, type ReactNode } from "react";

export type Lang = "en" | "bn";

const en = {
  lang: { label: "Language", en: "EN", bn: "বাংলা" },
  nav: {
    home: "Home",
    about: "About",
    programs: "Programs",
    testimonials: "Testimonials",
    contact: "Contact",
    join: "Join Now",
  },
  hero: {
    eyebrow: "English Core AI Lab",
    title: "Smart English Mastery for Every Stage — Kids, Academic Grammar & Professionals",
    subLead: "Led by",
    subName: "Amanat Ullah",
    subRest:
      " — we fuse classroom expertise with Agentic AI to deliver precision practice, real-time feedback, and human mentorship.",
    ctaPrimary: "Get Started",
    ctaSecondary: "Meet the Founder",
    quote: "“Technological intelligence drives the world; religious values hold our spine.”",
  },
  programs: {
    heading: "Three AI-powered learning paths",
    sub: "From playful phonics to board-exam grammar and workplace fluency — each program is shaped by expert curriculum design and intelligent AI practice.",
    items: [
      {
        title: "Kids English",
        desc: "AI-assisted, play-based modules that spark curiosity, build vocabulary, and develop natural speaking confidence in young learners.",
        points: ["Playful phonics & vocabulary", "AI-powered speaking games", "Parent progress reports"],
      },
      {
        title: "Academic English Grammar",
        desc: "Class 6–10 structural grammar aligned with textbooks and board patterns, boosted by AI drills, instant correction, and exam-focused mentoring.",
        points: ["Textbook & board aligned", "AI grammar drills & instant feedback", "Model tests & exam strategies"],
      },
      {
        title: "Professional English",
        desc: "Workplace communication, spoken fluency, and career-ready English sharpened through AI role-play and expert-led coaching.",
        points: ["Emails, reports & meetings", "AI interview & presentation practice", "Spoken fluency coaching"],
      },
    ],
  },
  about: {
    eyebrow: "About the Author",
    name: "Amanat Ullah",
    role: "Founder, English Core AI Lab",
    p1: "Amanat Ullah is an English language educator and AI integration specialist. With an MA in E.L.T, BA (Hons) in English, B.Ed, NTRCA qualification, a Diploma in Computer, and deep expertise in Agentic AI, he bridges the depth of traditional teaching with the speed of intelligent technology.",
    p2: "His experience spans four years of teaching in Dubai, UAE, and senior teaching and lecturer roles at Ramu Cantonment English School & College, Ukhia Degree College, and Bangamatha Mohila College. Through English Core AI Lab, he designs learning experiences where expert curriculum meets adaptive AI practice — so every learner, from a young child to a working professional, builds real fluency and confidence.",
    whatsapp: "WhatsApp: 01608010181",
    cta: "Talk to our team",
  },
  testimonials: {
    heading: "What our learners say",
    items: [
      {
        quote:
          "My daughter went from shy to speaking full sentences in three months. The AI kids' modules are genuinely joyful and effective.",
        name: "Nusrat Jahan",
        role: "Parent, Dhaka",
      },
      {
        quote:
          "The Academic Grammar course matched my Class 9 textbook exactly. With AI practice, I scored the highest English marks of my life.",
        name: "Rifat Hossain",
        role: "Student, Class 9",
      },
      {
        quote:
          "The Professional English track fixed my email tone and meeting confidence. The AI role-plays made real workplace conversations easy.",
        name: "Tanvir Ahmed",
        role: "Operations Lead",
      },
    ],
  },
  contact: {
    heading: "Start your English journey today",
    sub: "Send a message on WhatsApp or email us — we will place you in the right program within 24 hours.",
    whatsapp: "WhatsApp: 01608010181",
  },
  form: {
    name: "Full name",
    namePh: "Your name",
    email: "Email",
    emailPh: "you@example.com",
    phone: "Phone",
    optional: "(optional)",
    phonePh: "01XXXXXXXXX",
    program: "Program",
    programPh: "Select a program",
    programOptions: ["Kids English", "Academic English Grammar", "Professional English"],
    message: "Message",
    messagePh: "Tell us about your goal…",
    send: "Send message",
    note: "Your message opens in your mail app addressed to englishcore26@gmail.com.",
    toastError: "Please fix the highlighted fields",
    toastSuccess: "Your email is ready — just press send in your mail app.",
    errors: {
      nameRequired: "Please enter your name",
      nameMax: "Name must be less than 100 characters",
      emailRequired: "Please enter your email",
      emailInvalid: "Enter a valid email address",
      emailMax: "Email must be less than 255 characters",
      phoneMax: "Phone must be less than 20 characters",
      phoneInvalid: "Phone can only contain digits and + - ( )",
      programRequired: "Please choose a program",
      messageRequired: "Please write a short message",
      messageMax: "Message must be less than 1000 characters",
    },
  },
  footer: {
    rights: "English Core AI Lab. All rights reserved.",
    social: "Social profile",
  },
};

export type Translation = typeof en;

const bn: Translation = {
  lang: { label: "ভাষা", en: "EN", bn: "বাংলা" },
  nav: {
    home: "হোম",
    about: "পরিচিতি",
    programs: "প্রোগ্রামসমূহ",
    testimonials: "মতামত",
    contact: "যোগাযোগ",
    join: "যোগ দিন",
  },
  hero: {
    eyebrow: "ইংলিশ কোর এআই ল্যাব",
    title: "প্রতিটি ধাপে স্মার্ট ইংরেজি দক্ষতা — কিডস, একাডেমিক গ্রামার ও প্রফেশনালদের জন্য",
    subLead: "নেতৃত্বে",
    subName: "আমানত উল্লাহ",
    subRest:
      " — আমরা ক্লাসরুমের অভিজ্ঞতার সাথে এজেন্টিক এআই-এর সমন্বয়ে দিচ্ছি নির্ভুল অনুশীলন, তাৎক্ষণিক ফিডব্যাক ও মানবিক মেন্টরশিপ।",
    ctaPrimary: "শুরু করুন",
    ctaSecondary: "প্রতিষ্ঠাতার পরিচিতি",
    quote: "“প্রযুক্তিগত বুদ্ধিমত্তা পৃথিবীকে চালায়; ধর্মীয় মূল্যবোধ আমাদের মেরুদণ্ড ধরে রাখে।”",
  },
  programs: {
    heading: "তিনটি এআই-চালিত শিক্ষা পথ",
    sub: "খেলার ছলে ফোনেটিক্স থেকে বোর্ড পরীক্ষার গ্রামার এবং কর্মক্ষেত্রের সাবলীলতা — প্রতিটি প্রোগ্রাম তৈরি বিশেষজ্ঞ কারিকুলাম ও বুদ্ধিমান এআই অনুশীলনে।",
    items: [
      {
        title: "কিডস ইংলিশ",
        desc: "এআই-সহায়তাপ্রাপ্ত, খেলাধুলাভিত্তিক মডিউল যা ছোট শিক্ষার্থীদের কৌতূহল জাগায়, শব্দভাণ্ডার গড়ে তোলে এবং স্বাভাবিকভাবে কথা বলার আত্মবিশ্বাস তৈরি করে।",
        points: ["মজার ফোনেটিক্স ও শব্দভাণ্ডার", "এআই-চালিত স্পিকিং গেমস", "অভিভাবকদের জন্য অগ্রগতি রিপোর্ট"],
      },
      {
        title: "একাডেমিক ইংলিশ গ্রামার",
        desc: "ষষ্ঠ থেকে দশম শ্রেণির স্ট্রাকচারাল গ্রামার — পাঠ্যবই ও বোর্ড প্যাটার্ন অনুযায়ী, এআই ড্রিল, তাৎক্ষণিক সংশোধন ও পরীক্ষাকেন্দ্রিক মেন্টরিংসহ।",
        points: ["পাঠ্যবই ও বোর্ড অনুযায়ী", "এআই গ্রামার ড্রিল ও তাৎক্ষণিক ফিডব্যাক", "মডেল টেস্ট ও পরীক্ষার কৌশল"],
      },
      {
        title: "প্রফেশনাল ইংলিশ",
        desc: "কর্মক্ষেত্রের যোগাযোগ, মৌখিক সাবলীলতা ও ক্যারিয়ার-প্রস্তুত ইংরেজি — এআই রোল-প্লে ও বিশেষজ্ঞ কোচিংয়ের মাধ্যমে।",
        points: ["ইমেইল, রিপোর্ট ও মিটিং", "এআই ইন্টারভিউ ও প্রেজেন্টেশন অনুশীলন", "স্পোকেন ফ্লুয়েন্সি কোচিং"],
      },
    ],
  },
  about: {
    eyebrow: "প্রতিষ্ঠাতা পরিচিতি",
    name: "আমানত উল্লাহ",
    role: "প্রতিষ্ঠাতা, ইংলিশ কোর এআই ল্যাব",
    p1: "আমানত উল্লাহ একজন ইংরেজি ভাষা শিক্ষাবিদ ও এআই ইন্টিগ্রেশন বিশেষজ্ঞ। এমএ ইন ই.এল.টি, ইংরেজিতে বিএ (অনার্স), বি.এড, এনটিআরসিএ যোগ্যতা, কম্পিউটারে ডিপ্লোমা এবং এজেন্টিক এআই-এর গভীর দক্ষতা নিয়ে তিনি ঐতিহ্যবাহী শিক্ষার গভীরতার সাথে বুদ্ধিমান প্রযুক্তির গতির সংযোগ ঘটান।",
    p2: "তাঁর অভিজ্ঞতা রয়েছে দুবাই, ইউএই-তে চার বছরের শিক্ষকতার, পাশাপাশি রামু ক্যান্টনমেন্ট ইংলিশ স্কুল অ্যান্ড কলেজ, উখিয়া ডিগ্রি কলেজ ও বঙ্গমাতা মহিলা কলেজে জ্যেষ্ঠ শিক্ষক ও প্রভাষক হিসেবে দায়িত্ব পালনের। ইংলিশ কোর এআই ল্যাব-এর মাধ্যমে তিনি এমন শেখার অভিজ্ঞতা ডিজাইন করেন যেখানে বিশেষজ্ঞ কারিকুলামের সাথে মিলে অ্যাডাপটিভ এআই অনুশীলন — যাতে ছোট শিশু থেকে কর্মজীবী প্রত্যেকে প্রকৃত সাবলীলতা ও আত্মবিশ্বাস অর্জন করে।",
    whatsapp: "হোয়াটসঅ্যাপ: 01608010181",
    cta: "আমাদের টিমের সাথে কথা বলুন",
  },
  testimonials: {
    heading: "আমাদের শিক্ষার্থীরা যা বলেন",
    items: [
      {
        quote:
          "আমার মেয়ে মাত্র তিন মাসে লাজুক থেকে পুরো বাক্যে কথা বলতে শিখেছে। এআই কিডস মডিউলগুলো সত্যিই আনন্দময় ও কার্যকর।",
        name: "নুসরাত জাহান",
        role: "অভিভাবক, ঢাকা",
      },
      {
        quote:
          "একাডেমিক গ্রামার কোর্সটি আমার নবম শ্রেণির পাঠ্যবইয়ের সাথে হুবহু মিলে গেছে। এআই অনুশীলনের মাধ্যমে আমি জীবনের সর্বোচ্চ ইংরেজি নম্বর পেয়েছি।",
        name: "রিফাত হোসাইন",
        role: "শিক্ষার্থী, নবম শ্রেণি",
      },
      {
        quote:
          "প্রফেশনাল ইংলিশ ট্র্যাক আমার ইমেইলের টোন ও মিটিংয়ের আত্মবিশ্বাস ঠিক করে দিয়েছে। এআই রোল-প্লে বাস্তব কর্মক্ষেত্রের কথোপকথন সহজ করে দিয়েছে।",
        name: "তানভীর আহমেদ",
        role: "অপারেশনস লিড",
      },
    ],
  },
  contact: {
    heading: "আজই শুরু করুন আপনার ইংরেজি যাত্রা",
    sub: "হোয়াটসঅ্যাপে মেসেজ পাঠান বা আমাদের ইমেইল করুন — ২৪ ঘণ্টার মধ্যে আমরা আপনাকে সঠিক প্রোগ্রামে ভর্তি করে দেব।",
    whatsapp: "হোয়াটসঅ্যাপ: 01608010181",
  },
  form: {
    name: "পুরো নাম",
    namePh: "আপনার নাম",
    email: "ইমেইল",
    emailPh: "you@example.com",
    phone: "ফোন",
    optional: "(ঐচ্ছিক)",
    phonePh: "01XXXXXXXXX",
    program: "প্রোগ্রাম",
    programPh: "একটি প্রোগ্রাম নির্বাচন করুন",
    programOptions: ["কিডস ইংলিশ", "একাডেমিক ইংলিশ গ্রামার", "প্রফেশনাল ইংলিশ"],
    message: "বার্তা",
    messagePh: "আপনার লক্ষ্য সম্পর্কে জানান…",
    send: "বার্তা পাঠান",
    note: "আপনার বার্তাটি englishcore26@gmail.com ঠিকানায় আপনার মেইল অ্যাপে খুলবে।",
    toastError: "চিহ্নিত ঘরগুলো ঠিক করুন",
    toastSuccess: "আপনার ইমেইল প্রস্তুত — মেইল অ্যাপে গিয়ে পাঠিয়ে দিন।",
    errors: {
      nameRequired: "অনুগ্রহ করে আপনার নাম লিখুন",
      nameMax: "নাম ১০০ অক্ষরের কম হতে হবে",
      emailRequired: "অনুগ্রহ করে আপনার ইমেইল লিখুন",
      emailInvalid: "সঠিক ইমেইল ঠিকানা লিখুন",
      emailMax: "ইমেইল ২৫৫ অক্ষরের কম হতে হবে",
      phoneMax: "ফোন নম্বর ২০ অক্ষরের কম হতে হবে",
      phoneInvalid: "ফোন নম্বরে শুধু সংখ্যা ও + - ( ) ব্যবহার করা যাবে",
      programRequired: "অনুগ্রহ করে একটি প্রোগ্রাম নির্বাচন করুন",
      messageRequired: "অনুগ্রহ করে সংক্ষিপ্ত বার্তা লিখুন",
      messageMax: "বার্তা ১০০০ অক্ষরের কম হতে হবে",
    },
  },
  footer: {
    rights: "ইংলিশ কোর এআই ল্যাব। সর্বস্বত্ব সংরক্ষিত।",
    social: "সামাজিক মাধ্যম প্রোফাইল",
  },
};

const translations: Record<Lang, Translation> = { en, bn };

const STORAGE_KEY = "ecal-lang";

interface LanguageContextValue {
  lang: Lang;
  setLang: (lang: Lang) => void;
  t: Translation;
}

const LanguageContext = createContext<LanguageContextValue>({
  lang: "en",
  setLang: () => {},
  t: en,
});

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [lang, setLangState] = useState<Lang>("en");

  useEffect(() => {
    const saved = window.localStorage.getItem(STORAGE_KEY);
    if (saved === "bn" || saved === "en") setLangState(saved);
  }, []);

  useEffect(() => {
    document.documentElement.lang = lang === "bn" ? "bn" : "en";
  }, [lang]);

  const setLang = (next: Lang) => {
    setLangState(next);
    window.localStorage.setItem(STORAGE_KEY, next);
  };

  return (
    <LanguageContext.Provider value={{ lang, setLang, t: translations[lang] }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  return useContext(LanguageContext);
}
