import React from "react";
import right from "/icons/Arrow_Right.svg";

const MainPage = () => {
  return (
    <>
      <div className="relative h-dvh bg-[url(/BG.jpg)] bg-cover bg-center -mt-[60px]">
        <div className="max-w-7xl flex flex-col gap-3 mx-auto absolute bottom-5 sm:bottom-10 left-0 right-0">
          <div className="w-fit rounded-2xl flex flex-row items-center gap-2 text-base/tight px-5 py-1.5 mx-2.5 bg-neutral-50 group transition-transform duration-300 hover:cursor-pointer">
            <p className="text-neutral-950">Каталог</p>
            <span className="h-4 w-[1px] bg-gray-400"></span>
            <p className="text-(--gray) font-light transition-colors group-hover:text-neutral-950">
              Перейти
            </p>
            <img className="transition-transform duration-300 group-hover:translate-x-1" src={right} alt="Catalog" />
          </div>

          <h1 className="text-4xl/snug sm:text-6xl/snug px-2.5 px- gropled-font">
            Стиль для тех, кто впереди
          </h1>
        </div>
      </div>

      <p>
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eaque
        architecto praesentium porro atque facilis consequatur quisquam. At vero
        praesentium corporis! Beatae qui doloremque eligendi minus rem odit
        magni autem accusantium. Architecto voluptatibus distinctio facere
        praesentium magni accusantium unde fugit nam iure non, provident
        molestiae inventore numquam ex laudantium! Officia porro dolore, neque
        optio obcaecati iusto necessitatibus perferendis dignissimos quia
        maiores! Unde voluptas aperiam quasi, sunt, commodi vero iure impedit
        fugit nam quae similique officia consequatur fuga ducimus et quisquam
        beatae, hic debitis ratione libero? Nulla ipsam earum temporibus quia
        maxime? Recusandae temporibus esse deserunt labore necessitatibus
        exercitationem adipisci veritatis qui doloribus repellendus omnis
        aperiam mollitia natus ipsam voluptates maxime eligendi id, officiis
        nobis dignissimos totam. Excepturi ex tenetur nihil esse? Provident
        voluptatum similique commodi autem quibusdam maxime et id accusantium in
        quasi dolore ducimus quia nihil cupiditate asperiores incidunt, soluta
        officia iure perspiciatis? Consequuntur nihil perferendis odio autem
        eligendi consectetur? Accusamus ut enim consequatur maxime iure amet
        possimus nisi beatae maiores, dolore cum libero praesentium porro ad
        veritatis! Velit doloribus iste consequatur accusantium possimus
        obcaecati eaque pariatur cumque fugiat ullam. Non soluta quasi quisquam,
        iure dolorem debitis delectus molestias nostrum sed labore sit, quod
        libero voluptate corrupti velit a totam voluptas! Amet laudantium sit
        earum rerum vero cumque excepturi sint! Dolorem consequatur
        exercitationem molestias dignissimos, deleniti tempore, ea libero,
        blanditiis itaque optio magnam quisquam eveniet aut fuga voluptatum
        dolor soluta! Itaque fuga iste modi sunt odit veniam perspiciatis sint
        eius! At dolor recusandae inventore asperiores quasi distinctio omnis
        pariatur alias non beatae, officia, quis repudiandae obcaecati, veniam
        dignissimos quibusdam! Delectus rem laudantium officia velit quas id vel
        facere animi omnis. Repellendus, impedit! Similique assumenda sint quos
        tenetur corporis velit voluptas commodi dolores, omnis placeat amet
        cumque dolor? Amet eius repellat veniam, perferendis rerum expedita
        exercitationem nisi velit, mollitia inventore incidunt.
      </p>
    </>
  );
};

export default MainPage;
