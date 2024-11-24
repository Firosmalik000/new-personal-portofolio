

const About = () => {
  return (
    <section className="w-full min-h-screen flex justify-center items-center  px-5 py-10">
      <div className="max-w-6xl w-full  rounded-lg overflow-hidden">
        <h2 className="text-center text-4xl font-bold text-gray-800 py-6 ">About Me</h2>
        <div className="flex flex-col md:flex-row gap-6 p-6">
          <div className="md:w-1/2 flex justify-center items-center">
            <img src="https://via.placeholder.com/400" className="w-full h-auto rounded-lg " alt="About me" />
          </div>
          <div className="md:w-1/2 flex flex-col justify-center">
            <p className="text-lg text-gray-700 leading-relaxed">
              Hi! I'm <span className="font-semibold text-gray-800">Firos Malik Abdillah</span>, a passionate Front End Developer with a knack for crafting visually appealing and user-friendly interfaces. I enjoy working with modern web
              technologies and constantly challenge myself to learn and grow.
            </p>
            <p className="mt-4 text-lg text-gray-700 leading-relaxed">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda pariatur, id nam mollitia quasi veritatis dignissimos rerum eum amet perspiciatis similique asperiores facere dolor debitis magnam! Molestias aut sed in?
            </p>
            <p className="mt-4 text-lg text-gray-700 leading-relaxed">
              Deserunt perferendis recusandae facere adipisci perspiciatis quas! Laudantium aliquid molestiae nostrum quos impedit ducimus illum delectus, officia eius provident similique debitis architecto!
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
