import Image from "next/image";

function WelcomePage() {
  return (
    <div className="main ">
      <div className="container">
        <div className="flex justify-center items-center h-screen w-screen flex-col gap-4 px-6 overflow-hidden relative">
          <h1 className=" text-4xl md:text-6xl md:w-[600px] text-center  animate-appear z-10">
            <span className="flex justify-center items-center gap-2 md:gap-3">
              Hi,{" "}
              <Image
                className="h-[40px] md:h-[60px] md:w-[60px] animate-wiggle"
                src={"/img/waving_hand.webp"}
                height={40}
                width={40}
                alt="Hello"
              />
            </span>
            I&apos;m building my{" "}
            <span className="font-semibold">portfolio</span>.
          </h1>

          <div className="absolute top-0 left-0 text-4xl md:text-7xl font-bold opacity-10  h-screen overflow-hidden z-1 select-none w-[130vw] text-center -translate-x-20">
            Hola Hello 你好 Salut Привет Halo こんにちは Ciao Hola Hello 你好
            Salut Привет Halo こんにちは Ciao Olá Hola Hello 你好 Salut Привет
            Halo こんにちは Ciao Hola Hello 你好 Salut Привет Halo こんにちは
            Ciao Olá Hola Hello 你好 Salut Привет Halo こんにちは Ciao Hola
            Hello 你好 Salut Привет Halo こんにちは Ciao Olá Hola Hello 你好
            Salut Привет Halo こんにちは Ciao Hola Hello 你好 Salut Привет Halo
            こんにちは Ciao Olá Hola Hello 你好 Salut Привет Halo こんにちは
            Ciao Hola Hello 你好 Salut Привет Halo こんにちは Ciao Olá Hola
            Hello 你好 Salut Привет Halo こんにちは Ciao Hola Hello 你好 Salut
            Привет Halo こんにちは Ciao Olá Hola Hello 你好 Salut Привет Halo
            こんにちは Ciao Hola Hello 你好 Salut Привет Halo こんにちは Ciao
            Olá Hola Hello 你好 Salut Привет Halo こんにちは Ciao Hola Hello
            你好 Salut Привет Halo こんにちは Ciao Olá Hola Hello 你好 Salut
            Привет Halo こんにちは Ciao Hola Hello 你好 Salut Привет Halo
            こんにちは Ciao Olá Hola Hello 你好 Salut Привет Halo こんにちは
            Ciao Hola Hello 你好 Salut Привет Halo こんにちは Ciao Olá Ciao 
            Hola Hello 你好 Salut Привет Halo こんにちは Ciao Olá 
            Olá Hola Hello 你好 Salut Привет Halo こんにちは Ciao Hola Hello
            你好 Salut Привет Halo こんにちは Ciao Olá Hola Hello 你好 Salut
            Привет Halo こんにちは Ciao Hola Hello 你好 Salut Привет Halo
            こんにちは Ciao Olá Hola Hello 你好 Salut Привет Halo こんにちは
            Ciao Hola Hello 你好 Salut Привет Halo こんにちは Ciao Olá Ciao 
            Hola Hello 你好 Salut Привет Halo こんにちは Ciao Olá 
            Olá Hola Hello 你好 Salut Привет Halo こんにちは Ciao Hola Hello
            你好 Salut Привет Halo こんにちは Ciao Olá Hola Hello 你好 Salut
            Привет Halo こんにちは Ciao Hola Hello 你好 Salut Привет Halo
            こんにちは Ciao Olá Hola Hello 你好 Salut Привет Halo こんにちは
            Ciao Hola Hello 你好 Salut Привет Halo こんにちは Ciao Olá Ciao 
            Hola Hello 你好 Salut Привет Halo こんにちは Ciao Olá
          </div>
        </div>
      </div>
    </div>
  );
}

export default WelcomePage;
