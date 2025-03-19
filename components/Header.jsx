import Image from "next/image";

const Header = () => {
  return (
    <div className="w-full h-[50px] bg-white flex items-center justify-center">
      <Image
        src="/logo.svg"
        width={162}
        height={32}
        alt="법무법인 스탠다드 로고"
      ></Image>
    </div>
  );
};

export default Header;
