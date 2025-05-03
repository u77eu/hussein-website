import { useState } from "react";
import { Globe } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

export default function Home() {
  const [language, setLanguage] = useState("en");

  const translations = {
    en: {
      hero: "Hi, I'm Hussein – a 13-year-old programmer who loves coding, art, design, writing, and organizing things.",
      about: "About Me",
      portfolio: "Portfolio",
      contact: "Contact Me",
      projects: [
        "Social Media Platform",
        "Battle Royale Game",
        "Unnamed Project 1",
        "Unnamed Project 2",
        "Unnamed Project 3",
      ],
    },
    ar: {
      hero: "مرحبًا، أنا حسين – مبرمج عمره 13 عامًا يحب البرمجة، الرسم، التصميم، الكتابة، وترتيب الأشياء.",
      about: "من أنا",
      portfolio: "أعمالي",
      contact: "تواصل معي",
      projects: [
        "منصة تواصل اجتماعي",
        "لعبة باتل رويال",
        "مشروع بدون عنوان 1",
        "مشروع بدون عنوان 2",
        "مشروع بدون عنوان 3",
      ],
    },
  };

  const lang = translations[language];

  return (
    <div className="min-h-screen bg-gradient-to-b from-pink-100 to-purple-200 text-gray-800 p-4">
      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-bold">Hussein's World</h1>
        <select
          className="p-2 rounded bg-white border"
          value={language}
          onChange={(e) => setLanguage(e.target.value)}
        >
          <option value="en">English</option>
          <option value="ar">العربية</option>
        </select>
      </div>

      <div className="mt-10 text-center">
        <p className="text-xl font-medium max-w-xl mx-auto">{lang.hero}</p>
      </div>

      <section className="mt-16">
        <h2 className="text-xl font-semibold mb-4">{lang.portfolio}</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {lang.projects.map((project, index) => (
            <Card key={index} className="bg-white rounded-2xl shadow-lg p-4">
              <CardContent>
                <h3 className="font-bold text-lg mb-2">{project}</h3>
                <p className="text-sm">Project description coming soon...</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      <section className="mt-16">
        <h2 className="text-xl font-semibold mb-4">{lang.contact}</h2>
        <form className="max-w-md mx-auto grid gap-4">
          <input type="text" placeholder="Name" className="p-2 rounded border w-full" />
          <input type="email" placeholder="Email" className="p-2 rounded border w-full" />
          <textarea placeholder="Message" className="p-2 rounded border w-full h-32"></textarea>
          <Button className="bg-pink-400 hover:bg-pink-500 text-white">Send</Button>
        </form>
      </section>

      <footer className="mt-20 text-center text-sm text-gray-600">
        <Globe className="inline-block w-4 h-4 mr-1" />
        {language === "en" ? "More languages coming soon!" : "المزيد من اللغات قريبًا!"}
      </footer>
    </div>
  );
}
