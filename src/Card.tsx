import { useState, KeyboardEvent } from "react"
import { Card, CardContent, CardHeader } from "@/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { MapPin, Mail, Phone, Cake, Briefcase, Heart, Quote } from "lucide-react"
import "./Card.css"

interface ProfileCardProps {
  name?: string
  jobTitle?: string
  address?: string
  email?: string
  phone?: string
  birthday?: string
  imageUrl?: string
  hobbies?: string[]
  motto?: string
}

export default function FlippableProfileCard({
  name = "Jane Doe",
  jobTitle = "Software Engineer",
  address = "123 Tech Street, Silicon Valley, CA",
  email = "jane.doe@example.com",
  phone = "+1 (555) 123-4567",
  birthday = "May 15, 1990",
  imageUrl = "/placeholder.svg?height=100&width=100",
  hobbies = ["Reading", "Hiking", "Photography"],
  motto = "Learn, grow, and make a difference every day."
}: ProfileCardProps) {
  const [isFlipped, setIsFlipped] = useState(false)

  const handleFlip = () => setIsFlipped(!isFlipped)

  const handleKeyDown = (event: KeyboardEvent<HTMLDivElement>) => {
    if (event.key === 'Enter' || event.key === ' ') {
      handleFlip()
    }
  }

  return (
    <div
      className={`flip-card w-full max-w-md mx-auto cursor-pointer ${isFlipped ? 'flipped' : ''}`}
      onClick={handleFlip}
      onKeyDown={handleKeyDown}
      tabIndex={0}
      role="button"
      aria-label={isFlipped ? "Show basic information" : "Show additional information"}
    >
      <div className="flip-card-inner">
        <Card className="flip-card-front">
          <CardHeader className="flex flex-col items-center">
            <Avatar className="w-24 h-24">
              <AvatarImage src={imageUrl} alt={name} />
              <AvatarFallback>{name.split(' ').map(n => n[0]).join('')}</AvatarFallback>
            </Avatar>
            <h2 className="mt-4 text-2xl font-bold">{name}</h2>
            <p className="text-muted-foreground">{jobTitle}</p>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="flex items-center space-x-2">
              <MapPin className="w-5 h-5 text-muted-foreground" />
              <span>{address}</span>
            </div>
            <div className="flex items-center space-x-2">
              <Mail className="w-5 h-5 text-muted-foreground" />
              <span>{email}</span>
            </div>
            <div className="flex items-center space-x-2">
              <Phone className="w-5 h-5 text-muted-foreground" />
              <span>{phone}</span>
            </div>
            <div className="flex items-center space-x-2">
              <Cake className="w-5 h-5 text-muted-foreground" />
              <span>{birthday}</span>
            </div>
            <div className="flex items-center space-x-2">
              <Briefcase className="w-5 h-5 text-muted-foreground" />
              <span>{jobTitle}</span>
            </div>
          </CardContent>
        </Card>
        <Card className="flip-card-back">
          <CardHeader>
            <h2 className="text-2xl font-bold text-center">{name}</h2>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="space-y-2">
              <div className="flex items-center space-x-2">
                <Heart className="w-5 h-5 text-muted-foreground" />
                <span className="font-semibold">Hobbies</span>
              </div>
              <ul className="list-disc list-inside pl-5">
                {hobbies.map((hobby, index) => (
                  <li key={index}>{hobby}</li>
                ))}
              </ul>
            </div>
            <div className="space-y-2">
              <div className="flex items-center space-x-2">
                <Quote className="w-5 h-5 text-muted-foreground" />
                <span className="font-semibold">Motto</span>
              </div>
              <p className="italic">{`"${motto}"`}</p>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
