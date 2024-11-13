import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Github, Linkedin, Mail } from "lucide-react"

// This component uses shadcn/ui components and Tailwind CSS for styling

export default function Component() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <header className="sticky top-0 z-10 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container flex h-14 items-center px-4">
          <nav className="flex flex-1 items-center justify-between">
            <a href="/" className="font-bold">
              Meghana Kanagalla
            </a>
            <div className="flex items-center space-x-4">
              <a href="#about" className="text-sm font-medium hover:underline">
                About
              </a>
              <a href="#projects" className="text-sm font-medium hover:underline">
                Projects
              </a>
              <a href="#contact" className="text-sm font-medium hover:underline">
                Contact
              </a>
            </div>
          </nav>
        </div>
      </header>
      <main className="container mx-auto px-4 py-8">
        <section id="about" className="py-16 md:py-24">
          <div className="space-y-4 max-w-2xl mx-auto text-center">
            <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl whitespace-nowrap">Hi, I'm Meghana Kanagalla</h1>
            <p className="text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400 text-justify leading-relaxed tracking-wide">
  A dedicated AI enthusiast with strong skills in Python and SQL. My expertise spans popular libraries like TensorFlow, scikit-learn, and Pandas, which I use to build predictive models, extract data insights, and drive impactful solutions. With hands-on experience in projects like a YouTube Video Summarizer and an Emotion Detection System, I’m passionate about solving real-world problems through AI. Known for my quick learning and problem-solving abilities, I'm excited to apply my skills to innovative projects.
</p>

          </div>
        </section>
        <section id="projects" className="py-16 md:py-24">
          <h2 className="mb-8 text-3xl font-bold">Projects</h2>
          <div className="grid gap-6 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
            <Card className="w-full">
              <CardHeader>
                <CardTitle>YouTube Video Summarizer</CardTitle>
                <CardDescription>Built a web app that generates summaries of YouTube videos using audio transcription (Whisper) and summarization (PEGASUS).</CardDescription>
                <div className="mt-2 flex space-x-2">
                  <a
                    href="https://github.com/meghana0227/YouTube-Video-Summarizer"
                    className="inline-flex items-center justify-center text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 border border-input bg-background hover:bg-accent hover:text-accent-foreground h-9 rounded-md px-3"
                  >
                    <Github className="mr-2 h-4 w-4" />
                    GitHub
                  </a>
                </div>
              </CardHeader>
              <CardContent>
                <img
                  alt="Project 1"
                  className="aspect-video overflow-hidden rounded-lg object-cover object-center"
                  height="225"
                  src="\images\youtube_video_summarizer.png?height=225&width=400"
                  width="400"
                />
              </CardContent>
            </Card>
            <Card className="w-full">
              <CardHeader>
                <CardTitle>Emotion Detection System</CardTitle>
                <CardDescription>Developed a system to detect human emotions from facial expressions with 66% accuracy using CNN.</CardDescription>
                <div className="mt-2 flex space-x-2">
                  <a
                    href="https://github.com/meghana0227/Emotion-Detection-System"
                    className="inline-flex items-center justify-center text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 border border-input bg-background hover:bg-accent hover:text-accent-foreground h-9 rounded-md px-3"
                  >
                    <Github className="mr-2 h-4 w-4" />
                    GitHub
                  </a>
                </div>
              </CardHeader>
              <CardContent>
                <img
                  alt="Project 2"
                  className="aspect-video overflow-hidden rounded-lg object-cover object-center"
                  height="225"
                  src="\images\emotion_detection_system.png"
                  width="400"
                />
              </CardContent>
            </Card>
            <Card className="w-full">
              <CardHeader>
                <CardTitle>Fashion Recommendation System</CardTitle>
                <CardDescription>Created an image-based recommendation system to identify similar fashion items using ResNet and KNN.</CardDescription>
                <div className="mt-2 flex space-x-2">
                  <a
                    href="https://github.com/meghana0227/Fashion-Recommendation-System"
                    className="inline-flex items-center justify-center text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 border border-input bg-background hover:bg-accent hover:text-accent-foreground h-9 rounded-md px-3"
                  >
                    <Github className="mr-2 h-4 w-4" />
                    GitHub
                  </a>
                </div>
              </CardHeader>
              <CardContent>
                <img
                  alt="Project 3"
                  className="aspect-video overflow-hidden rounded-lg object-cover object-center"
                  height="225"
                  src="\images\fashion_recommendation_system.png"
                  width="400"
                />
              </CardContent>
            </Card>
          </div>
        </section>
        <section id="contact" className="py-16 md:py-24">
          <h2 className="mb-8 text-3xl font-bold">Contact Me</h2>
          <div className="grid gap-6 sm:grid-cols-1 md:grid-cols-2">
            <div className="space-y-4">
              <p className="text-gray-500 dark:text-gray-400">
                Feel free to reach out to me for any inquiries or collaboration opportunities.
              </p>
              <div className="flex space-x-4">
                <a href="https://github.com/meghana0227" className="text-gray-500 hover:text-gray-600 dark:text-gray-400 dark:hover:text-gray-300">
                  <Github className="h-6 w-6" />
                  <span className="sr-only">GitHub</span>
                </a>
                <a href="https://www.linkedin.com/in/meghana-kanagalla-9269ba26a/" className="text-gray-500 hover:text-gray-600 dark:text-gray-400 dark:hover:text-gray-300">
                  <Linkedin className="h-6 w-6" />
                  <span className="sr-only">aedIn</span>
                </a>
                <a href="meghanakanagalla@gmail.com" className="text-gray-500 hover:text-gray-600 dark:text-gray-400 dark:hover:text-gray-300">
                  <Mail className="h-6 w-6" />
                  <span className="sr-only">Email</span>
                </a>
              </div>
            </div>
            <div className="space-y-4">
              <Input placeholder="Your Name" className="w-full" />
              <Input placeholder="Your Email" type="email" className="w-full" />
              <Textarea placeholder="Your Message" className="w-full" />
              <Button className="w-full">Send Message</Button>
            </div>
          </div>
        </section>
      </main>
      <footer className="border-t py-6 md:py-0">
        <div className="container flex flex-col items-center justify-between gap-4 md:h-24 md:flex-row px-4 py-4 md:py-0">
          <p className="text-center text-sm leading-loose text-gray-500 dark:text-gray-400 md:text-left">
            © 2024 Meghana Kanagalla. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  )
}