import CaseStudyPage from "@/components/page/CaseStudyPage";
import { ALFRED_CASE_STUDY_CONFIG } from "@data/alfred";
import { useChat } from "@context/ChatContext";

const AlfredCaseStudy = () => {
  const { openChat } = useChat();
  
  return (
    <CaseStudyPage config={ALFRED_CASE_STUDY_CONFIG} onTryLive={openChat} />
  );
};

export default AlfredCaseStudy;
