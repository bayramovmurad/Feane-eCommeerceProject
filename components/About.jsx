import Title from "./ui/Title";
import Image from "next/image";

const About = () => {
  return (
    <div className="bg-secondary py-14">
    <div className="container mx-auto lg:grid lg:grid-cols-2 sm:flex-col lg:gap-20  items-center text-white  ">
      <div className="flex justify-center">
        <div className="relative sm:w-[445px] sm:h-[600px] lg:mb-0 sm:mb-20 mb-10  flex justify-center w-[300px] h-[450px]">
          <Image src="/images/about-imgec.png" alt="" layout="fill" />
        </div>
      </div>
      <div>
        <Title addClass=" text-[40px]">We Are Feane</Title>
        <p className="my-5 !lg:max-w-[800px] flex flex-col items-center">
          There are many variations of passages of Lorem Ipsum available, but
          the majority have suffered alteration in some form, by injected
          humour, or randomised words which don`t look even slightly
          believable. If you are going to use a passage of Lorem Ipsum, you
          need to be sure there isn`t anything embarrassing hidden in the
          middle of text. All
        </p>
        <button className="btn-primary">Read More</button>
      </div>
    </div>
  </div>
);
};


export default About