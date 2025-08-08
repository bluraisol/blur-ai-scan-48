import NeonNetworkBackground from "@/components/NeonNetworkBackground";
import LoadingIntro from "@/components/LoadingIntro";

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