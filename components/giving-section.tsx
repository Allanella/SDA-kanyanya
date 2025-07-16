import Link from "next/link"
import { Button } from "@/components/ui/button"
import { DollarSignIcon, BanknoteIcon, SmartphoneIcon } from "lucide-react"

export function GivingSection() {
  return (
    <section id="giving" className="w-full py-12 md:py-24 lg:py-32 bg-background">
      <div className="container px-4 md:px-6 text-center">
        <div className="space-y-4 mb-12">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Online Giving / Tithes & Offerings</h2>
          <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed mx-auto">
            Your faithful contributions enable us to continue our mission and ministries. Thank you for your generosity!
          </p>
        </div>
        <div className="grid gap-8 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          <div className="flex flex-col items-center space-y-4 p-6 bg-muted rounded-lg shadow-md">
            <DollarSignIcon className="h-12 w-12 text-primary" />
            <h3 className="text-xl font-semibold">Secure Online Portal</h3>
            <p className="text-muted-foreground">
              Give your tithes and offerings securely through our online platform.
            </p>
            <Button asChild className="bg-primary hover:bg-primary/90 text-primary-foreground">
              <Link href="#">Give Online Now</Link>
            </Button>
          </div>
          <div className="flex flex-col items-center space-y-4 p-6 bg-muted rounded-lg shadow-md">
            <BanknoteIcon className="h-12 w-12 text-primary" />
            <h3 className="text-xl font-semibold">Bank Transfer</h3>
            <p className="text-muted-foreground text-sm">
              Bank Name: [Your Bank Name]
              <br />
              Account Name: Seventh-day Adventist Church Kanyanya
              <br />
              Account Number: [Your Account Number]
              <br />
              Swift Code: [Your Swift Code]
            </p>
            <p className="text-muted-foreground">
              Please include your name and purpose (e.g., Tithe, Offering) in the reference.
            </p>
          </div>
          <div className="flex flex-col items-center space-y-4 p-6 bg-muted rounded-lg shadow-md">
            <SmartphoneIcon className="h-12 w-12 text-primary" />
            <h3 className="text-xl font-semibold">Mobile Money</h3>
            <p className="text-muted-foreground text-sm">
              Network: [e.g., MTN Mobile Money / Airtel Money]
              <br />
              Number: [Your Mobile Money Number]
              <br />
              Reference: [Your Name / Tithe / Offering]
            </p>
            <p className="text-muted-foreground">
              Follow the prompts on your mobile device to complete the transaction.
            </p>
          </div>
        </div>
        <div className="mt-12 space-y-4">
          <h3 className="text-2xl font-bold">Stewardship Principles</h3>
          <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed mx-auto">
            At Seventh-day Adventist Church Kanyanya, we believe in biblical stewardship – the faithful management of
            all that God has entrusted to us. This includes our time, talents, and resources. Your giving supports the
            preaching of the gospel, local church operations, community outreach, and global missions.
          </p>
          <Link href="#" className="text-primary hover:underline font-medium">
            Learn More About Stewardship
          </Link>
        </div>
      </div>
    </section>
  )
}
