import LoadingIntro from "@/components/LoadingIntro";
import NeonNetworkBackground from "@/components/NeonNetworkBackground";

const Init = () => {
  const handleComplete = () => {
    window.location.href = "/main";
  };

  return (
    <div className="relative">
      <NeonNetworkBackground />
      <LoadingIntro onComplete={handleComplete} />
    </div>
  );
};

export default Init;