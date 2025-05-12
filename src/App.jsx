import Header from "./components/Header/Header.jsx";
import TeachingSection from "./components/TeachingSection";
import DifferencesSection from "./components/DifferencesSection";
import IntroSection from "./components/InroSection";
import TabsSection from "./components/TabsSection";
import FeedbackSrction from "./components/FeedbackSection";
import { useState } from "react";
import EffectSection from "./components/EffectSection";

export default function App() {
  const [visible, setVisible] = useState(true);
  const [tab, setTab] = useState("effect");

  return (
    <>
      {visible && <Header />}
      <main>
        <IntroSection />

        <TabsSection active={tab} onChange={(current) => setTab(current)} />

        {tab === "main" && (
          <>
            <TeachingSection />
            <DifferencesSection />
          </>
        )}

        {tab === "feedback" && <FeedbackSrction />}

        {tab === "effect" && <EffectSection />}
      </main>
    </>
  );
}
