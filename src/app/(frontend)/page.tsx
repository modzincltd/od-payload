import Contact from '@/components/Contact'
import exp from 'node:constants'
import Image from 'next/image'

const testPage = () => {
  return (
    <div>
      <section
        className="relative h-[60vh] flex items-center justify-center text-white bg-cover bg-center"
        style={{ backgroundImage: "url('/hero1.jpg')" }}
      >
        <div className="bg-black/50 absolute inset-0" />
        <h1 className="relative text-4xl md:text-6xl font-bold z-10 text-center text-yellow-500">
          EVERY COMMUNITY MATTERS
        </h1>
        <br></br>
      </section>

      {/* 🪞 Two-column layout (Image Left / Text Right) */}
      <section className="grid grid-cols-1 md:grid-cols-2 gap-8 p-8 items-center">
        <div className="w-full">
          <Image
            src="/our-mission.png"
            alt="Showcase"
            width={800}
            height={600}
            className="rounded-lg w-full h-auto object-cover"
          />
        </div>
        <div>
          <h2 className="text-lg md:text-3xl font-bold mb-4 text-blue-500 ">Our Mission</h2>
          <p className="text-gray-600 text-sm md:text-2xl">
            The Opening Doors Project, established in Liverpool in September 2016, began as a
            non-profit organization dedicated to promoting positive mental health among families and
            reducing social and financial exclusion. On July 18, 2023, the project transitioned to a
            new phase, continuing its mission to support the community.
          </p>
        </div>
      </section>

      {/* 🔄 Two-column layout (Text Left / Image Right) */}
      <section className="grid grid-cols-1 md:grid-cols-2 gap-8 p-8 items-center bg-gray-100 mt-8">
        <div>
          <h2 className="text-lg md:text-3xl font-bold mb-4 text-blue-500">Our Journey</h2>
          <p className="text-gray-600 text-sm md:text-2xl">
            Since our inception, we have been committed to addressing the challenges faced by
            families in Liverpool. Through various initiatives, we have provided resources,
            counseling, and support networks aimed at building resilience and promoting mental
            health. Our efforts have been recognized within the community, reflecting our dedication
            to making a tangible difference in peoples lives.
          </p>
        </div>
        <div className="w-full">
          <Image
            src="/bus.jpg"
            alt="CMS UI"
            width={800}
            height={600}
            className="rounded-lg w-full h-auto object-cover"
          />
        </div>
      </section>

      <section className="grid grid-cols-1  gap-8 p-8 items-center mt-8 ">
        <h1 className="text-lg md:text-3xl font-bold mb-4 text-blue-500 text-center">
          LATEST NEWS
        </h1>
      </section>
    </div>
  )
}

export default testPage
