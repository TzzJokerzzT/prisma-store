const FooterComponent = () => {
  return (
    <section className="bg-gradient-to-t from-bluePrimary shadow-xl h-[26rem] pt-[1rem] flex justify-center mobile:h-[39rem] mobile:flex mobile:flex-col">
      <div className=" flex flex-col m-[2rem] justify-start ">
        <p className="text-blueSecondary font-bold">Get to Know Us</p>
        <li className="list-none">Carrers</li>
        <li className="list-none">Blog</li>
        <li className="list-none">About Prisma Store</li>
        <li className="list-none">Prisma Store Devices</li>
        <li className="list-none">Amazon Science</li>
      </div>
      <div className="flex flex-col m-[2rem] items-start">
        <p className="text-blueSecondary font-bold">Make Money with Us</p>
        <li className="list-none">Sell products on Prisma Store</li>
        <li className="list-none">Become an Affiliate</li>
        <li className="list-none">Advertise Your Products</li>
        <li className="list-none">Self-Publish with Us</li>
      </div>
      <div className="flex flex-col m-[2rem] items-start">
        <p className="text-blueSecondary font-bold">
          Prisma Store Payment Products
        </p>
        <li className="list-none">Prisma Store Business Card</li>
        <li className="list-none">Shop with Points</li>
        <li className="list-none">Reload Your Balance</li>
        <li className="list-none">Prisma Store Currency Converter</li>
      </div>
    </section>
  );
};

export default FooterComponent;
