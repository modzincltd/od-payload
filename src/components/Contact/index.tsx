const Contact = () => {
  return (
    <div className=" mx-auto p-6 bg-white shadow-lg rounded-lg border border-gray-200">
      <h2 className="text-2xl font-bold text-gray-800 mb-4 text-center">Opening Doors Project</h2>

      <div className="flex flex-col md:flex-row gap-6">
        {/* Address Section */}
        <div className="md:w-1/3">
          <div className="text-center text-2xl">
            <div>
              <p className="text-2xl font-semibold text-gray-700"> St Nathanaels Church</p>
              <p className="text-gray-600">Fazakerley Rd</p>
              <p className="text-gray-600">Walton</p>
              <p className="text-gray-600">L9 2AJ</p>
            </div>
          </div>

          {/* Email */}
          <div className="mt-4 text-center ">
            <a
              href="mailto:Theopeningdoorscharity@outlook.com"
              className="text-blue-600 font-medium hover:underline"
            >
              Theopeningdoorscharity@outlook.com
            </a>
          </div>
        </div>

        {/* Google Map */}
        <div className="md:w-2/3">
          <iframe
            title="Opening Doors Map"
            className="w-full h-[500px] rounded-md border"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2372.9452036307854!2d-2.9490484231997935!3d53.45720227167985!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x487b21959201f9ff%3A0x8b01a7925307d9fb!2sSt%20Nathanael&#39;s%20Church!5e0!3m2!1sen!2suk!4v1708963242004!5m2!1sen!2suk"
            allowFullScreen
            loading="lazy"
          ></iframe>
        </div>
      </div>
    </div>
  )
}

export default Contact
