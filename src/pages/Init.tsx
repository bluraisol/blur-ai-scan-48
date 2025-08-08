import LoadingIntro from "@/components/LoadingIntro";
import NeonNetworkBackground from "@/components/NeonNetworkBackground";

const Init = () => {
  const handleComplete = () => {
    window.location.href = "/main";
  };

  return (
    <div className="relative min-h-screen">
      <div className="absolute inset-0 opacity-30">
        <NeonNetworkBackground />
      </div>
      <LoadingIntro onComplete={handleComplete} />
    </div>
  );
};

export default Init;