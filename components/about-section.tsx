import Image from "next/image"

export function AboutSection() {
  return (
    <section id="about" className="w-full py-12 md:py-24 lg:py-32 bg-muted">
      <div className="container px-4 md:px-6">
        <div className="grid gap-8 lg:grid-cols-[1fr_500px] lg:gap-16 xl:grid-cols-[1fr_550px] items-center">
          <div className="flex flex-col justify-center space-y-6">
            {" "}
            {/* Increased space-y */}
            <div className="space-y-4">
              {" "}
              {/* Increased space-y */}
              <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl lg:text-6xl">
                {" "}
                {/* Increased heading size */}
                Our Mission and Vision
              </h2>
              <p className="max-w-[600px] text-muted-foreground text-lg md:text-xl leading-relaxed">
                {" "}
                {/* Increased base text size and line height */}
                At Seventh-day Adventist Church Kanyanya, our mission is to make disciples of Jesus Christ who live as
                His loving witnesses in our local community and beyond. We are committed to proclaiming the everlasting
                gospel of the Three Angels’ Messages (Revelation 14:6–12) to all people — beginning here in Kanyanya —
                as we prepare for the soon return of our Lord and Savior. (Matthew 28:18–20, Acts 1:8, Revelation
                14:6–12)
              </p>
              <p className="max-w-[600px] text-muted-foreground text-lg md:text-xl leading-relaxed">
                {" "}
                {/* Increased base text size and line height */}
                The Seventh-day Adventist Church Kanyanya has a rich history, growing from a small group of believers to
                a vibrant congregation committed to spreading the message of Christ's soon return. We are proudly
                affiliated with the global Seventh-day Adventist Church, a worldwide family of believers united in faith
                and mission.
              </p>
            </div>
            <ul className="grid gap-3 text-muted-foreground text-lg">
              {" "}
              {/* Increased gap and text size for list items */}
              <li>
                <span className="font-semibold text-foreground">Faith:</span> Centered on Jesus Christ and His
                teachings.
              </li>
              <li>
                <span className="font-semibold text-foreground">Community:</span> Fostering a loving and supportive
                family of believers.
              </li>
              <li>
                <span className="font-semibold text-foreground">Service:</span> Reaching out to meet the needs of our
                neighbors.
              </li>
              <li>
                <span className="font-semibold text-foreground">Hope:</span> Sharing the promise of Christ's soon
                return.
              </li>
            </ul>
          </div>
          <Image
            src="/images/church-community.png" // Ensure this path is correct for your image
            width="550"
            height="310"
            alt="Church Community"
            className="mx-auto aspect-video overflow-hidden rounded-xl object-cover object-center sm:w-full shadow-lg transform hover:scale-105 transition-transform duration-300 ease-in-out" // Added hover effect
          />
        </div>
      </div>
    </section>
  )
}
