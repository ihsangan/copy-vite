import { useState } from "react"
import { Card, CardContent, CardHeader } from "./components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "./components/ui/avatar"
import { MapPin, Mail, Phone, Cake, Briefcase, Heart, Quote } from "lucide-react"

function App() {
  const [isFlipped, setIsFlipped] = useState(false)

  const profile = {
    name: "John Smith",
    jobTitle: "Product Manager",
    address: "456 Innovation Ave, Tech City, NY",
    email: "john.smith@techcorp.com",
    phone: "+1 (555) 987-6543",
    birthday: "December 10, 1985",
    imageUrl: "https://example.com/john-smith-profile.jpg",
    hobbies: ["Traveling", "Cooking", "Playing guitar"],
    motto: "Innovation is the key to success"
  };

  const handleFlip = () => setIsFlipped(!isFlipped)

  return (
    <div className="container mx-auto p-4">
      <div 
        className={`flip-card w-full max-w-md mx-auto cursor-pointer ${isFlipped ? 'flipped' : ''}`}
        onClick={handleFlip}
      >
        <div className="flip-card-inner">
          <Card className="flip-card-front rounded-lg shadow-md">
            <CardHeader className="flex flex-col items-center">
              <Avatar className="w-24 h-24">
                <AvatarImage src={profile.imageUrl} alt={profile.name} />
                <AvatarFallback>{profile.name.split(' ').map(n => n[0]).join('')}</AvatarFallback>
              </Avatar>
              <h2 className="mt-4 text-2xl font-bold">{profile.name}</h2>
              <p className="text-muted-foreground">{profile.jobTitle}</p>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex items-center space-x-2">
                <MapPin className="w-5 h-5 text-muted-foreground" />
                <span>{profile.address}</span>
              </div>
              <div className="flex items-center space-x-2">
                <Mail className="w-5 h-5 text-muted-foreground" />
                <span>{profile.email}</span>
              </div>
              <div className="flex items-center space-x-2">
                <Phone className="w-5 h-5 text-muted-foreground" />
                <span>{profile.phone}</span>
              </div>
              <div className="flex items-center space-x-2">
                <Cake className="w-5 h-5 text-muted-foreground" />
                <span>{profile.birthday}</span>
              </div>
              <div className="flex items-center space-x-2">
                <Briefcase className="w-5 h-5 text-muted-foreground" />
                <span>{profile.jobTitle}</span>
              </div>
            </CardContent>
          </Card>
          <Card className="flip-card-back rounded-lg shadow-md">
            <CardHeader>
              <h2 className="text-2xl font-bold text-center">{profile.name}</h2>
            </CardHeader>
            <CardContent className="space-y-4 text-left">
              <div className="space-y-2">
                <div className="flex items-center space-x-2">
                  <Heart className="w-5 h-5 text-muted-foreground" />
                  <span className="font-semibold">Hobbies</span>
                </div>
                <ul className="list-disc list-inside">
                  {profile.hobbies.map((hobby, index) => (
                    <li key={index}>{hobby}</li>
                  ))}
                </ul>
              </div>
              <div className="space-y-2">
                <div className="flex items-center space-x-2">
                  <Quote className="w-5 h-5 text-muted-foreground" />
                  <span className="font-semibold">Motto</span>
                </div>
                <p className="italic">{`"${profile.motto}"`}</p>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}

export default App
