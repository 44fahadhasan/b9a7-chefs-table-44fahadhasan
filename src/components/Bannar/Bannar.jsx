const Bannar = () => {
  return (
    <div className="lexend mt-12 bannar-img min-h-[600px] bg-no-repeat bg-center bg-cover rounded-3xl">
      <div className="space-y-6 w-[70%] mx-auto pt-[10rem]">
        <h1 className=" text-white text-5xl font-bold text-center">
          Doing An exceptional cooking preparation for you!
        </h1>
        <p className="text-lg text-white text-center">
          Led by our dedicated team of chefs committed to creating dishes that
          excite the taste buds and ignite the senses.
        </p>
        <div className="space-x-6 flex justify-center">
          <button className="text-[#150B2B] text-xl btn btn-primary bg-[#4E04FF] font-medium rounded-full">
            Explore Now
          </button>
          <button className="text-xl text-white bg-transparent hover:bg-transparent btn font-medium rounded-full">
            Our Feedback
          </button>
        </div>
      </div>
    </div>
  );
};

export default Bannar;
