import Image from "next/image"

export function AboutSection() {
  return (
    <section id="about" className="w-full py-16 md:py-24 bg-muted box-border px-4">
      <div className="container mx-auto max-w-full sm:max-w-5xl">
        <div className="flex flex-col lg:flex-row gap-12 items-start">
          {/* Text */}
          <div
            className="flex-1 min-w-0 space-y-6 px-4 sm:px-0 overflow-visible max-w-full"
            style={{
              wordBreak: "break-word",
              overflowWrap: "break-word",
              boxSizing: "border-box",
            }}
          >
            <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold tracking-tight text-foreground leading-snug whitespace-normal break-words">
              Our Mission and Vision
            </h2>

            <p
              className="text-sm sm:text-base md:text-lg text-muted-foreground leading-relaxed whitespace-normal break-words max-w-full"
              style={{ wordBreak: "break-word", overflowWrap: "break-word" }}
            >
              At Seventh-day Adventist Church Kanyanya, our mission is to make disciples of Jesus Christ who live as
              His loving witnesses in our local community and beyond. We are committed to proclaiming the everlasting
              gospel of the Three Angels’ Messages (Revelation 14:6–12) to all people — beginning here in Kanyanya —
              as we prepare for the soon return of our Lord and Savior. (Matthew 28:18–20, Acts 1:8, Revelation 14:6–12)
            </p>

            <p
              className="text-sm sm:text-base md:text-lg text-muted-foreground leading-relaxed whitespace-normal break-words max-w-full"
              style={{ wordBreak: "break-word", overflowWrap: "break-word" }}
            >
              The Seventh-day Adventist Church Kanyanya has a rich history, growing from a small group of believers to
              a vibrant congregation committed to spreading the message of Christ's soon return. We are proudly
              affiliated with the global Seventh-day Adventist Church, a worldwide family of believers united in faith
              and mission.
            </p>

            <ul className="space-y-3 text-sm sm:text-base md:text-lg text-muted-foreground max-w-full">
              <li>
                <span className="font-semibold text-foreground">Faith:</span> Centered on Jesus Christ and His teachings.
              </li>
              <li>
                <span className="font-semibold text-foreground">Community:</span> Fostering a loving and supportive family of believers.
              </li>
              <li>
                <span className="font-semibold text-foreground">Service:</span> Reaching out to meet the needs of our neighbors.
              </li>
              <li>
                <span className="font-semibold text-foreground">Hope:</span> Sharing the promise of Christ's soon return.
              </li>
            </ul>
          </div>

          {/* Image */}
          <div className="flex-1 min-w-0 w-full max-w-full">
            <Image
              src="/images/knn.png"
              width={800}
              height={450}
              alt="Church Community"
              className="w-full h-auto rounded-xl object-cover shadow-xl"
              priority
            />
          </div>
        </div>
      </div>
    </section>
  )
}
