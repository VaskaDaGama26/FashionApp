import React from "react";
import Heading from "./UI/Heading";
import Accordion from "./UI/Accordion";

const FAQ = () => {
  const accordionData = [
    {
      title: "Предоставляете ли вы возврат и обмен?",
      content:
        "Да! Если вы не на 100% удовлетворены своей покупкой, мы предлагаем 30-дневную политику возврата на все товары.",
    },
    {
      title: "Осуществляете ли вы международную доставку?",
      content:
        "Конечно. Мы осуществляем доставку по всему миру, поэтому вы можете наслаждаться нашими продуктами, где бы вы ни находились.",
    },
    {
      title: "Сколько занимает доставка?",
      content:
        "Сроки доставки зависят от местоположения, но мы стремимся доставлять большинство заказов в течение 5–10 рабочих дней.",
    },
    {
      title: "Каково качество вашей продукции?",
      content:
        "Качество нашей продукции впечатляет: каждая деталь тщательно продумана, материалы премиального класса, а пошив - воплощение мастерства.",
    },
  ];

  return (
    <>
      <div id="faq" className="text-center">
        <Heading label="ЧАСТЫЕ ВОПРОСЫ" />
      </div>
      <div className="flex flex-col h-fit mb-8 gap-8">
        <div className="flex flex-col gap-2"></div>
        <div className="mb-8">
          <Accordion sections={accordionData} />
        </div>
      </div>
    </>
  );
};

export default FAQ;
